import React, { useState, useMemo, useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import { 
  LineChart as LineChartIcon, 
  BarChart3, 
  Download, 
  Share2, 
  Sparkles, 
  Maximize2, 
  Filter, 
  SlidersHorizontal,
  Table,
  RefreshCw
} from 'lucide-react';
import { VISUALIZATION_DATASETS } from '../../data/visualizationData';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function DatasetVisualizer({ initialDatasetId }) {
  const [selectedDatasetId, setSelectedDatasetId] = useState(
    initialDatasetId || VISUALIZATION_DATASETS[0].id
  );
  const [chartType, setChartType] = useState('line'); // 'line' | 'bar'
  const [showTablePreview, setShowTablePreview] = useState(false);
  const chartRef = useRef(null);

  const activeDataset = useMemo(() => {
    return VISUALIZATION_DATASETS.find(d => d.id === selectedDatasetId) || VISUALIZATION_DATASETS[0];
  }, [selectedDatasetId]);

  // Build Chart.js config
  const chartData = useMemo(() => {
    const labels = activeDataset.data.map(item => item[activeDataset.xKey]);

    const datasets = activeDataset.yAxis.map((axis, index) => {
      return {
        label: axis.label,
        data: activeDataset.data.map(item => item[axis.key]),
        borderColor: axis.color,
        backgroundColor: chartType === 'bar' ? axis.color + '99' : axis.color + '25',
        fill: chartType === 'line' && index === 0,
        tension: 0.35,
        borderWidth: 2.5,
        pointBackgroundColor: axis.color,
        pointBorderColor: '#ffffff',
        pointRadius: 4,
        pointHoverRadius: 7,
        yAxisID: `y${index > 0 ? index : ''}`
      };
    });

    return { labels, datasets };
  }, [activeDataset, chartType]);

  const chartOptions = useMemo(() => {
    return {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
          labels: {
            color: '#e2e8f0',
            font: { family: 'Inter', size: 12, weight: '600' },
            usePointStyle: true,
            boxWidth: 8
          }
        },
        tooltip: {
          backgroundColor: 'rgba(6, 19, 37, 0.95)',
          titleColor: '#38bdf8',
          bodyColor: '#f1f5f9',
          borderColor: 'rgba(56, 189, 248, 0.4)',
          borderWidth: 1,
          padding: 12,
          cornerRadius: 8,
          bodyFont: { family: 'Inter' }
        }
      },
      scales: {
        x: {
          grid: { color: 'rgba(51, 65, 85, 0.3)' },
          ticks: { color: '#94a3b8', font: { family: 'JetBrains Mono', size: 11 } }
        },
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          grid: { color: 'rgba(51, 65, 85, 0.3)' },
          ticks: { color: activeDataset.yAxis[0]?.color || '#94a3b8', font: { family: 'JetBrains Mono', size: 11 } },
          title: {
            display: true,
            text: activeDataset.yAxis[0]?.unit || '',
            color: activeDataset.yAxis[0]?.color || '#94a3b8'
          }
        },
        ...(activeDataset.yAxis.length > 1 ? {
          y1: {
            type: 'linear',
            display: true,
            position: 'right',
            grid: { drawOnChartArea: false },
            ticks: { color: activeDataset.yAxis[1]?.color || '#94a3b8', font: { family: 'JetBrains Mono', size: 11 } },
            title: {
              display: true,
              text: activeDataset.yAxis[1]?.unit || '',
              color: activeDataset.yAxis[1]?.color || '#94a3b8'
            }
          }
        } : {})
      }
    };
  }, [activeDataset]);

  // Export Chart Image as PNG
  const handleExportChart = () => {
    if (chartRef.current) {
      const url = chartRef.current.toBase64Image();
      const link = document.createElement('a');
      link.download = `${activeDataset.id}-chart.png`;
      link.href = url;
      link.click();
    }
  };

  // Export CSV
  const handleExportCSV = () => {
    const headers = Object.keys(activeDataset.data[0]).join(',');
    const rows = activeDataset.data.map(r => Object.values(r).join(',')).join('\n');
    const content = `${headers}\n${rows}`;
    const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${activeDataset.id}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="bg-slate-900/60 p-6 rounded-2xl border border-cyan-500/20 glass-panel flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 rounded-full">
              ⭐⭐⭐⭐ Core Visualizer
            </span>
            <span className="text-xs text-slate-400">Multi-Parametric Cryosphere Studio</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-wide mt-1 font-display">
            Interactive Polar Dataset Visualizer
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            Explore 40-year Antarctic ozone depletion trends, Kongsfjorden subsea CTD oceanographic salinity profiles, ice core paleoclimate proxies, and Himalayan glacier mass balances.
          </p>
        </div>

        {/* Dataset Switcher Dropdown */}
        <div className="flex items-center space-x-2">
          <select
            value={selectedDatasetId}
            onChange={(e) => setSelectedDatasetId(e.target.value)}
            className="bg-[#040d1a] border border-cyan-500/40 text-cyan-300 text-xs font-semibold rounded-xl px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-cyan-400"
          >
            {VISUALIZATION_DATASETS.map((ds) => (
              <option key={ds.id} value={ds.id}>
                {ds.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Dataset Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {VISUALIZATION_DATASETS.map((ds) => {
          const isSelected = selectedDatasetId === ds.id;
          return (
            <button
              key={ds.id}
              onClick={() => setSelectedDatasetId(ds.id)}
              className={`p-3 rounded-xl border text-left transition ${
                isSelected
                  ? 'bg-cyan-950/80 border-cyan-400 shadow-md shadow-cyan-950/60 ring-1 ring-cyan-400'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-850'
              }`}
            >
              <div className="text-[10px] font-mono text-cyan-400 font-bold uppercase">{ds.realm}</div>
              <div className="font-bold text-xs text-slate-100 mt-0.5 line-clamp-1">{ds.title.split(':')[0]}</div>
              <div className="text-[10px] text-slate-400 mt-0.5 truncate">{ds.domain}</div>
            </button>
          );
        })}
      </div>

      {/* Main Visualizer Container */}
      <div className="bg-[#061426] border border-cyan-500/30 rounded-2xl shadow-2xl p-6 glass-panel space-y-6">
        
        {/* Visualizer Toolbar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-cyan-500/20 pb-4">
          <div>
            <h3 className="text-lg font-bold text-white">
              {activeDataset.title}
            </h3>
            <p className="text-xs text-slate-300 mt-0.5 max-w-2xl">
              {activeDataset.description}
            </p>
          </div>

          <div className="flex items-center space-x-2">
            {/* Chart type toggle */}
            <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setChartType('line')}
                className={`p-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1 ${
                  chartType === 'line' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'
                }`}
                title="Line Chart View"
              >
                <LineChartIcon className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Line</span>
              </button>
              <button
                onClick={() => setChartType('bar')}
                className={`p-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1 ${
                  chartType === 'bar' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'
                }`}
                title="Bar Chart View"
              >
                <BarChart3 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Bar</span>
              </button>
            </div>

            {/* Table preview toggle */}
            <button
              onClick={() => setShowTablePreview(!showTablePreview)}
              className={`p-2 rounded-xl border text-xs font-semibold flex items-center space-x-1.5 transition ${
                showTablePreview
                  ? 'bg-cyan-950 border-cyan-400 text-cyan-300'
                  : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              <Table className="w-3.5 h-3.5 text-cyan-400" />
              <span>{showTablePreview ? "Hide Data" : "Show Data"}</span>
            </button>

            {/* Export buttons */}
            <button
              onClick={handleExportChart}
              className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center space-x-1.5 transition"
              title="Download High-Res PNG"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">PNG</span>
            </button>

            <button
              onClick={handleExportCSV}
              className="px-3 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold flex items-center space-x-1.5 transition shadow-sm"
              title="Export CSV Timeseries"
            >
              <Download className="w-3.5 h-3.5" />
              <span>CSV</span>
            </button>
          </div>
        </div>

        {/* Chart Canvas */}
        <div className="relative h-[420px] w-full p-2 bg-slate-950/60 rounded-xl border border-slate-800/80">
          {chartType === 'line' ? (
            <Line ref={chartRef} data={chartData} options={chartOptions} />
          ) : (
            <Bar ref={chartRef} data={chartData} options={chartOptions} />
          )}
        </div>

        {/* Table Data Preview Drawer */}
        {showTablePreview && (
          <div className="space-y-2 pt-2">
            <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Observation Data Stream
            </div>
            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/90">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-slate-900 text-[11px] text-cyan-300 uppercase font-mono border-b border-slate-800">
                  <tr>
                    {Object.keys(activeDataset.data[0]).map((key) => (
                      <th key={key} className="px-4 py-2 font-semibold">
                        {key}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-mono text-[11px]">
                  {activeDataset.data.map((row, idx) => (
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
        )}

      </div>

    </div>
  );
}
