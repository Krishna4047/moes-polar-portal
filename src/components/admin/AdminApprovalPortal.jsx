import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  ShieldCheck, 
  FileCheck, 
  Image as ImageIcon, 
  PenTool, 
  BarChart3, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  Clock, 
  Sparkles, 
  Eye, 
  Download, 
  Globe2, 
  TrendingUp, 
  Users,
  Database
} from 'lucide-react';

export default function AdminApprovalPortal() {
  const [adminTab, setAdminTab] = useState('datasets'); // 'datasets' | 'media' | 'cms' | 'analytics'

  // Mock pending datasets queue
  const [datasetQueue, setDatasetQueue] = useState([
    {
      id: "sub-101",
      title: "Kongsfjorden Fjord Tidewater Glacial Melt Plume Microbial Metagenome",
      submitter: "Dr. Archana Dayal (NCPOR Cryobiology Team)",
      station: "Himadri (Arctic)",
      domain: "Microbiology & Genetics",
      date: "2026-03-08",
      status: "Pending QA/QC",
      fileSize: "1.8 GB",
      recordsCount: "4,200 sequences",
      abstract: "Shotgun metagenomic sequencing of cold-adapted psychrophilic bacterial consortia collected along salinity gradients near Kronebreen glacier calving front."
    },
    {
      id: "sub-102",
      title: "High-Density Prydz Bay 3D Multi-Beam Bathymetry Survey (44th ISEA)",
      submitter: "Dr. Sandeep Oza & Hydrographic Survey Directorate",
      station: "Bharati (Antarctica)",
      domain: "Marine Geophysics",
      date: "2026-03-02",
      status: "Pending Review",
      fileSize: "8.4 GB",
      recordsCount: "12,400 sounding grids",
      abstract: "50-meter gridded digital elevation model (DEM) of continental shelf seafloor canyon systems and iceberg scouring scarp incisions."
    },
    {
      id: "sub-103",
      title: "Schirmacher Oasis Black Carbon Aerosol Optical Depth Timeseries",
      submitter: "IMD Pune Polar Cell",
      station: "Maitri (Antarctica)",
      domain: "Atmospheric Physics",
      date: "2026-02-24",
      status: "Revision Requested",
      fileSize: "44 MB",
      recordsCount: "365 daily files",
      abstract: "Multi-wavelength sun photometer measurements assessing long-range soot transport from Patagonian and South African wildfires."
    }
  ]);

  // Mock media queue
  const [mediaQueue, setMediaQueue] = useState([
    {
      id: "med-201",
      title: "Maitri-II Next-Gen Sustainable Foundation Concrete Pouring",
      photographer: "Er. K. Murugan",
      station: "Maitri Modernization Site",
      type: "4K Video / Drone",
      status: "Pending Approval",
      url: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "med-202",
      title: "Antarctic Snow Petrel Nesting on Schirmacher Nunataks",
      photographer: "Dr. Arvind Chawla",
      station: "Schirmacher Oasis",
      type: "24MP Photography",
      status: "Pending Approval",
      url: "https://images.unsplash.com/photo-1598439210625-5067c578f3f6?auto=format&fit=crop&w=600&q=80"
    }
  ]);

  // Article CMS Editor state
  const [articleTitle, setArticleTitle] = useState("India Prepares for Landmark Maitri-II Zero-Emission Antarctic Station");
  const [articleContent, setArticleContent] = useState(
`## Ministry of Earth Sciences Announces Next-Generation Polar Infrastructure

The **Ministry of Earth Sciences (MoES)** and **NCPOR** have entered the final engineering approval phase for **Maitri-II**, India's upcoming zero-emission polar research station in the Schirmacher Oasis.

### Key Technological Highlights:
- **Green Hydrogen Microgrid**: Powered by solar photovoltaics and wind turbines with zero local particulate emissions.
- **Wastewater Recycling**: 100% closed-loop gray and blackwater bioreactors ensuring complete protection of nearby Lake Priyadarshini.
- **Advanced Cryo-biology Labs**: Enabling high-throughput genomic sequencing on-site in Antarctica.

*Published by the MoES Dissemination Directorate for immediate global release.*`
  );

  // Approve dataset action
  const handleApproveDataset = (id) => {
    setDatasetQueue(prev => prev.map(item => item.id === id ? { ...item, status: "Approved & Published (DOI Issued)" } : item));
    
    // Confetti effect
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleRejectDataset = (id) => {
    setDatasetQueue(prev => prev.map(item => item.id === id ? { ...item, status: "Revision Requested" } : item));
  };

  const handleApproveMedia = (id) => {
    setMediaQueue(prev => prev.map(item => item.id === id ? { ...item, status: "Published to Media Hub" } : item));
    confetti({ particleCount: 50, spread: 60 });
  };

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="bg-slate-900/60 p-6 rounded-2xl border border-cyan-500/20 glass-panel flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-400/30 rounded-full">
              ⭐⭐⭐⭐ Core Admin Portal
            </span>
            <span className="text-xs text-slate-400">MoES Scientist & Reviewer Console</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-wide mt-1 font-display">
            National Polar Data Governance & Content Approval Hub
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            Review peer-submitted cryosphere datasets, assign national DOIs, moderate high-resolution media assets, publish outreach articles, and monitor global dissemination heatmaps.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center gap-2 bg-[#040d1a] p-1.5 rounded-xl border border-slate-800">
          {[
            { id: 'datasets', label: 'Dataset Queue', icon: Database },
            { id: 'media', label: 'Media Moderation', icon: ImageIcon },
            { id: 'cms', label: 'Outreach CMS', icon: PenTool },
            { id: 'analytics', label: 'Dissemination Analytics', icon: TrendingUp },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setAdminTab(tab.id)}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  adminTab === tab.id
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* TAB 1: DATASET MODERATION QUEUE */}
      {adminTab === 'datasets' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-white flex items-center space-x-2">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Pending Dataset Submissions for National Archival</span>
            </h3>
            <span className="text-xs text-slate-400 font-mono">
              {datasetQueue.length} Active Submissions
            </span>
          </div>

          <div className="space-y-4">
            {datasetQueue.map((item) => (
              <div
                key={item.id}
                className="bg-[#061426] border border-cyan-500/20 rounded-2xl p-6 glass-panel space-y-4 shadow-xl"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-800 pb-3">
                  <div className="flex items-center space-x-2">
                    <span className="px-2.5 py-0.5 rounded bg-cyan-950 text-cyan-300 font-mono text-xs font-bold border border-cyan-800">
                      {item.id}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {item.station} • {item.domain}
                    </span>
                  </div>
                  <span className={`text-xs px-2.5 py-0.5 rounded-full font-mono font-bold ${
                    item.status.includes('Approved') 
                      ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/40'
                      : item.status.includes('Revision')
                      ? 'bg-rose-950 text-rose-400 border border-rose-500/40'
                      : 'bg-amber-950 text-amber-300 border border-amber-500/40 animate-pulse'
                  }`}>
                    {item.status}
                  </span>
                </div>

                <div>
                  <h4 className="text-base font-bold text-white">{item.title}</h4>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">{item.abstract}</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-950/70 p-3 rounded-xl border border-slate-800 text-xs font-mono">
                  <div>
                    <span className="text-slate-500 text-[10px] uppercase">Principal Investigator</span>
                    <div className="text-slate-200 font-semibold truncate">{item.submitter}</div>
                  </div>
                  <div>
                    <span className="text-slate-500 text-[10px] uppercase">Submission Date</span>
                    <div className="text-cyan-300">{item.date}</div>
                  </div>
                  <div>
                    <span className="text-slate-500 text-[10px] uppercase">Data Volume</span>
                    <div className="text-slate-200">{item.fileSize}</div>
                  </div>
                  <div>
                    <span className="text-slate-500 text-[10px] uppercase">Record Tiers</span>
                    <div className="text-emerald-400">{item.recordsCount}</div>
                  </div>
                </div>

                {/* Review Action Buttons */}
                <div className="flex flex-wrap items-center justify-end gap-2 pt-2">
                  <button
                    onClick={() => handleRejectDataset(item.id)}
                    className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-rose-300 text-xs font-semibold flex items-center space-x-1.5 transition"
                  >
                    <XCircle className="w-3.5 h-3.5" />
                    <span>Request Scientific Revision</span>
                  </button>

                  <button
                    onClick={() => handleApproveDataset(item.id)}
                    disabled={item.status.includes('Approved')}
                    className="px-4 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white text-xs font-bold flex items-center space-x-1.5 transition shadow-md shadow-emerald-600/30"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Approve, Mint DOI & Publish to NPDC</span>
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: MEDIA MODERATION QUEUE */}
      {adminTab === 'media' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mediaQueue.map((item) => (
            <div
              key={item.id}
              className="bg-[#061426] border border-cyan-500/20 rounded-2xl p-5 glass-panel space-y-4 shadow-xl"
            >
              <div className="relative h-48 rounded-xl overflow-hidden border border-slate-800">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/70 text-cyan-300 font-mono text-[10px] font-bold">
                  {item.type}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white">{item.title}</h4>
                <div className="text-xs text-slate-400 mt-0.5">By {item.photographer} • {item.station}</div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-800">
                <span className="text-[11px] font-mono text-amber-300">{item.status}</span>
                <button
                  onClick={() => handleApproveMedia(item.id)}
                  className="px-3.5 py-1.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold flex items-center space-x-1.5 transition"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Authorize & Disseminate</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 3: OUTREACH ARTICLE & PRESS RELEASE CMS */}
      {adminTab === 'cms' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Editor Window */}
          <div className="bg-[#061426] border border-cyan-500/20 rounded-2xl p-6 glass-panel space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center space-x-1.5">
                <PenTool className="w-4 h-4 text-cyan-400" />
                <span>Outreach Article Markdown Editor</span>
              </h3>
              <span className="text-[10px] text-cyan-300 font-mono">LIVE PREVIEW ON RIGHT</span>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="text-slate-400 font-semibold block mb-1">Headline</label>
                <input
                  type="text"
                  value={articleTitle}
                  onChange={(e) => setArticleTitle(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white font-bold focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="text-slate-400 font-semibold block mb-1">Markdown Body Content</label>
                <textarea
                  rows={14}
                  value={articleContent}
                  onChange={(e) => setArticleContent(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white font-mono text-xs focus:outline-none focus:border-cyan-400 leading-relaxed"
                />
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => {
                  alert("Article published successfully to MoES Public Dissemination Hub!");
                  confetti({ particleCount: 70, spread: 60 });
                }}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs shadow-md transition"
              >
                Publish Article to Outreach Feed
              </button>
            </div>
          </div>

          {/* Live Preview Window */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 glass-panel space-y-4">
            <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest font-mono border-b border-slate-800 pb-3 flex items-center justify-between">
              <span>Public Outreach Preview</span>
              <span className="text-emerald-400">Bilingual English/Hindi Supported</span>
            </div>

            <div className="prose prose-invert max-w-none text-xs sm:text-sm text-slate-200 space-y-3 whitespace-pre-line leading-relaxed">
              <h2 className="text-xl font-black text-white font-display">{articleTitle}</h2>
              <div>{articleContent}</div>
            </div>
          </div>

        </div>
      )}

      {/* TAB 4: DISSEMINATION ANALYTICS */}
      {adminTab === 'analytics' && (
        <div className="space-y-6">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 glass-panel space-y-1">
              <div className="text-xs text-slate-400">Total Portal Queries (2026)</div>
              <div className="text-2xl font-black font-mono text-cyan-300">1,482,900</div>
              <div className="text-[11px] text-emerald-400 flex items-center space-x-1">
                <span>↑ +28.4% vs last quarter</span>
              </div>
            </div>

            <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 glass-panel space-y-1">
              <div className="text-xs text-slate-400">Dataset Downloads</div>
              <div className="text-2xl font-black font-mono text-emerald-300">19,450 DLs</div>
              <div className="text-[11px] text-slate-400">NetCDF & CSV formats</div>
            </div>

            <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 glass-panel space-y-1">
              <div className="text-xs text-slate-400">Participating Institutes</div>
              <div className="text-2xl font-black font-mono text-purple-300">42 Labs</div>
              <div className="text-[11px] text-slate-400">NCPOR, IMD, INCOIS, NIOT, IITM</div>
            </div>

            <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 glass-panel space-y-1">
              <div className="text-xs text-slate-400">School Kits Downloaded</div>
              <div className="text-2xl font-black font-mono text-amber-300">45,420</div>
              <div className="text-[11px] text-emerald-400">Across 28 Indian States</div>
            </div>
          </div>

          {/* Geographical Dissemination Breakdown */}
          <div className="bg-[#061426] p-6 rounded-2xl border border-cyan-500/20 glass-panel space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center space-x-2">
              <Globe2 className="w-4 h-4 text-cyan-400" />
              <span>International Polar Research Data Dissemination Heatmap</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
              {[
                { country: "India (MoES / Universities)", percentage: "64%", count: "12,448 DLs" },
                { country: "United States (NSF / NASA)", percentage: "14%", count: "2,723 DLs" },
                { country: "Germany (AWI / Helmholtz)", percentage: "9%", count: "1,750 DLs" },
                { country: "Norway (NPI / Svalbard)", percentage: "7%", count: "1,361 DLs" },
                { country: "Japan (NIPR)", percentage: "6%", count: "1,168 DLs" }
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800 space-y-1">
                  <div className="text-slate-300 font-bold truncate">{item.country}</div>
                  <div className="text-cyan-300 font-mono font-bold text-base">{item.percentage}</div>
                  <div className="text-[10px] text-slate-500">{item.count}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
