import React, { useState, useMemo } from 'react';
import { 
  Database, 
  Search, 
  Download, 
  ExternalLink, 
  Copy, 
  Check, 
  LineChart, 
  Filter, 
  Tag, 
  Calendar, 
  FileText, 
  ShieldCheck, 
  SlidersHorizontal,
  Table as TableIcon,
  X,
  FileSpreadsheet
} from 'lucide-react';
import { DATASETS_DATA } from '../../data/datasetsData';

export default function DatasetExplorer({ onNavigateToVisualizer }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRealm, setSelectedRealm] = useState('all');
  const [selectedDomain, setSelectedDomain] = useState('all');
  const [selectedFormat, setSelectedFormat] = useState('all');
  const [activeMetadataModal, setActiveMetadataModal] = useState(null);
  const [copiedDoi, setCopiedDoi] = useState(false);
  const [copiedCitation, setCopiedCitation] = useState(false);

  // Filter logic
  const filteredDatasets = useMemo(() => {
    return DATASETS_DATA.filter((ds) => {
      const matchesSearch = 
        ds.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ds.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ds.doi.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ds.parameters.some(p => p.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesRealm = selectedRealm === 'all' || ds.realm === selectedRealm;
      const matchesDomain = selectedDomain === 'all' || ds.domain.toLowerCase().includes(selectedDomain.toLowerCase());
      const matchesFormat = selectedFormat === 'all' || ds.formats.includes(selectedFormat);

      return matchesSearch && matchesRealm && matchesDomain && matchesFormat;
    });
  }, [searchQuery, selectedRealm, selectedDomain, selectedFormat]);

  // Handle real client-side sample download
  const handleDownloadDataset = (dataset, format) => {
    let content = "";
    let mimeType = "text/plain";
    let filename = `${dataset.id}.${format.toLowerCase()}`;

    if (format === 'CSV') {
      const headers = Object.keys(dataset.sampleRecords[0]).join(',');
      const rows = dataset.sampleRecords.map(r => Object.values(r).join(',')).join('\n');
      content = `${headers}\n${rows}`;
      mimeType = "text/csv;charset=utf-8;";
    } else {
      content = JSON.stringify({
        metadata: {
          title: dataset.title,
          doi: dataset.doi,
          license: dataset.license,
          qualityControl: dataset.qualityControl,
          exportDate: new Date().toISOString()
        },
        data: dataset.sampleRecords
      }, null, 2);
      mimeType = "application/json;charset=utf-8;";
      filename = `${dataset.id}.json`;
    }

    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyDoi = (doi) => {
    navigator.clipboard.writeText(doi);
    setCopiedDoi(true);
    setTimeout(() => setCopiedDoi(false), 2000);
  };

  const handleCopyCitation = (ds) => {
    const citation = `${ds.author} (${ds.publishDate.split('-')[0]}). ${ds.title}. Ministry of Earth Sciences (MoES) - National Centre for Polar and Ocean Research (NCPOR). ${ds.doi}`;
    navigator.clipboard.writeText(citation);
    setCopiedCitation(true);
    setTimeout(() => setCopiedCitation(false), 2000);
  };

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="bg-slate-900/60 p-6 rounded-2xl border border-cyan-500/20 glass-panel flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 rounded-full">
              ⭐⭐⭐⭐⭐ Core Feature
            </span>
            <span className="text-xs text-slate-400">National Polar Data Center (NPDC)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-wide mt-1 font-display">
            Scientific Dataset & Cryosphere Explorer
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            Access, inspect, and download open peer-reviewed paleoclimate ice cores, atmospheric ozone profiles, high-latitude oceanographic CTD arrays, and Himalayan glaciology records.
          </p>
        </div>

        <div className="flex items-center space-x-3 text-xs text-slate-300">
          <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 text-center">
            <div className="text-cyan-400 font-mono font-bold text-lg">{DATASETS_DATA.length}</div>
            <div className="text-[10px] text-slate-400">Archived Datasets</div>
          </div>
          <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 text-center">
            <div className="text-emerald-400 font-mono font-bold text-lg">19.4k</div>
            <div className="text-[10px] text-slate-400">Global Downloads</div>
          </div>
        </div>
      </div>

      {/* Filter Toolbar & Search */}
      <div className="bg-[#061426] p-4 rounded-2xl border border-cyan-500/20 glass-panel space-y-4">
        <div className="flex flex-col md:flex-row gap-3">
          
          {/* Search Bar */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-cyan-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keywords, parameters (CO2, CTD, Salinity, Dobson), or DOI..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400"
            />
          </div>

          {/* Realm Filter */}
          <select
            value={selectedRealm}
            onChange={(e) => setSelectedRealm(e.target.value)}
            className="bg-slate-950 border border-slate-800 text-slate-200 text-xs rounded-xl px-3 py-2 focus:outline-none focus:border-cyan-400"
          >
            <option value="all">All Polar Realms</option>
            <option value="antarctica">Antarctica</option>
            <option value="arctic">Arctic</option>
            <option value="himalayas">Himalayas (Third Pole)</option>
          </select>

          {/* Domain Filter */}
          <select
            value={selectedDomain}
            onChange={(e) => setSelectedDomain(e.target.value)}
            className="bg-slate-950 border border-slate-800 text-slate-200 text-xs rounded-xl px-3 py-2 focus:outline-none focus:border-cyan-400"
          >
            <option value="all">All Scientific Domains</option>
            <option value="Glaciology">Glaciology & Ice Cores</option>
            <option value="Atmospheric">Atmospheric & Ozone</option>
            <option value="Oceanography">Oceanography & CTD</option>
            <option value="Biology">Marine Biology & Krill</option>
            <option value="Space">Space Weather & Magnetism</option>
          </select>

          {/* Format Filter */}
          <select
            value={selectedFormat}
            onChange={(e) => setSelectedFormat(e.target.value)}
            className="bg-slate-950 border border-slate-800 text-slate-200 text-xs rounded-xl px-3 py-2 focus:outline-none focus:border-cyan-400"
          >
            <option value="all">All Data Formats</option>
            <option value="NetCDF">NetCDF-4</option>
            <option value="CSV">CSV Spreadsheet</option>
            <option value="GeoJSON">GeoJSON</option>
            <option value="ASCII">ASCII Tables</option>
          </select>

        </div>
      </div>

      {/* Dataset Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredDatasets.map((ds) => (
          <div
            key={ds.id}
            className="bg-slate-900/70 border border-cyan-500/20 hover:border-cyan-500/50 rounded-2xl p-6 glass-panel-interactive flex flex-col justify-between space-y-4 group transition"
          >
            <div className="space-y-3">
              
              {/* Category & Status Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-0.5 rounded bg-cyan-950 border border-cyan-500/30 text-cyan-300 font-mono text-[10px] uppercase font-bold">
                    {ds.realm}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {ds.domain}
                  </span>
                </div>
                <div className="flex items-center space-x-1.5 text-[10px] text-slate-400 font-mono">
                  <span>{ds.fileSize}</span>
                  <span>•</span>
                  <span className="text-emerald-400 font-semibold">{ds.downloads.toLocaleString()} DLs</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                {ds.title}
              </h3>

              {/* Abstract */}
              <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                {ds.abstract}
              </p>

              {/* Parameter Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {ds.parameters.slice(0, 4).map((param, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded-md bg-slate-950/80 border border-slate-800 text-[10px] text-slate-300 font-mono"
                  >
                    {param}
                  </span>
                ))}
                {ds.parameters.length > 4 && (
                  <span className="text-[10px] text-slate-500 self-center">
                    +{ds.parameters.length - 4} more
                  </span>
                )}
              </div>

              {/* DOI badge */}
              <div className="flex items-center justify-between text-[11px] bg-slate-950/60 p-2 rounded-lg border border-slate-800/80">
                <span className="text-slate-400 font-mono truncate mr-2">
                  {ds.doi}
                </span>
                <button
                  onClick={() => handleCopyDoi(ds.doi)}
                  className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center space-x-1 flex-shrink-0"
                  title="Copy DOI"
                >
                  <Copy className="w-3 h-3" />
                  <span>Copy</span>
                </button>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setActiveMetadataModal(ds)}
                  className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center space-x-1.5 transition"
                >
                  <TableIcon className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Inspect Metadata & Preview</span>
                </button>

                {onNavigateToVisualizer && (
                  <button
                    onClick={() => onNavigateToVisualizer(ds)}
                    className="px-3 py-1.5 rounded-xl bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-500/30 text-cyan-300 text-xs font-semibold flex items-center space-x-1.5 transition"
                  >
                    <LineChart className="w-3.5 h-3.5" />
                    <span>Visualize</span>
                  </button>
                )}
              </div>

              {/* Quick CSV Download */}
              <button
                onClick={() => handleDownloadDataset(ds, 'CSV')}
                className="px-3 py-1.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold flex items-center space-x-1.5 transition shadow-sm shadow-cyan-600/30"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export CSV</span>
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* Dataset Metadata & Sample Records Modal */}
      {activeMetadataModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-12 flex justify-center items-center bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-4xl bg-[#061426] border border-cyan-500/40 rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
            
            {/* Header */}
            <div className="flex items-start justify-between border-b border-cyan-500/20 pb-4">
              <div>
                <div className="flex items-center space-x-2 text-xs">
                  <span className="px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 font-mono font-bold">
                    {activeMetadataModal.domain}
                  </span>
                  <span className="text-slate-400">{activeMetadataModal.station}</span>
                </div>
                <h3 className="text-xl font-extrabold text-white mt-1">
                  {activeMetadataModal.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveMetadataModal(null)}
                className="p-1 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Metadata Table Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
              <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Digital Object Identifier</div>
                <div className="text-cyan-300 font-bold font-mono mt-0.5 truncate">{activeMetadataModal.doi}</div>
              </div>
              <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Primary Investigators</div>
                <div className="text-slate-200 font-medium mt-0.5 truncate">{activeMetadataModal.author}</div>
              </div>
              <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Temporal Span</div>
                <div className="text-slate-200 font-medium mt-0.5">{activeMetadataModal.dateRange}</div>
              </div>
              <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Quality Control Tier</div>
                <div className="text-emerald-400 font-medium mt-0.5">{activeMetadataModal.qualityControl}</div>
              </div>
              <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800">
                <div className="text-[10px] text-slate-500 uppercase font-mono">License Policy</div>
                <div className="text-slate-200 font-medium mt-0.5">{activeMetadataModal.license}</div>
              </div>
              <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Available Formats</div>
                <div className="text-cyan-300 font-mono font-medium mt-0.5">{activeMetadataModal.formats.join(', ')}</div>
              </div>
            </div>

            {/* Abstract */}
            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 space-y-1">
              <div className="text-xs font-bold text-white uppercase tracking-wider">Scientific Abstract</div>
              <p className="text-xs text-slate-300 leading-relaxed">{activeMetadataModal.abstract}</p>
            </div>

            {/* Live Data Sample Table Viewer */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-white">
                <span className="flex items-center space-x-1.5">
                  <TableIcon className="w-4 h-4 text-cyan-400" />
                  <span>Sample Observation Records Preview</span>
                </span>
                <span className="text-[11px] text-slate-400 font-mono font-normal">First 6 Rows</span>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/90">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-slate-900 text-[11px] text-cyan-300 uppercase font-mono border-b border-slate-800">
                    <tr>
                      {Object.keys(activeMetadataModal.sampleRecords[0]).map((key) => (
                        <th key={key} className="px-4 py-2.5 font-semibold">
                          {key}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 font-mono text-[11px]">
                    {activeMetadataModal.sampleRecords.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-800/40">
                        {Object.values(row).map((val, cIdx) => (
                          <td key={cIdx} className="px-4 py-2 text-slate-200">
                            {String(val)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Citation Box */}
            <div className="bg-[#040d1a] p-4 rounded-xl border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="space-y-1">
                <div className="text-slate-400 font-semibold">How to Cite this Dataset (APA Format):</div>
                <div className="text-slate-300 font-mono text-[11px]">
                  {activeMetadataModal.author} ({activeMetadataModal.publishDate.split('-')[0]}). {activeMetadataModal.title}. MoES-NCPOR Data Repository. {activeMetadataModal.doi}
                </div>
              </div>
              <button
                onClick={() => handleCopyCitation(activeMetadataModal)}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 font-semibold text-xs flex items-center space-x-1.5 flex-shrink-0 transition"
              >
                {copiedCitation ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedCitation ? "Copied!" : "Copy Citation"}</span>
              </button>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleDownloadDataset(activeMetadataModal, 'CSV')}
                  className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs flex items-center space-x-2 transition"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Sample CSV</span>
                </button>
                <button
                  onClick={() => handleDownloadDataset(activeMetadataModal, 'JSON')}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs flex items-center space-x-2 transition"
                >
                  <FileText className="w-4 h-4" />
                  <span>Export JSON Schema</span>
                </button>
              </div>

              <button
                onClick={() => setActiveMetadataModal(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white font-semibold text-xs transition"
              >
                Close Metadata Inspector
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
