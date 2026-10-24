import React from 'react';
import { 
  Compass, 
  MapPin, 
  Database, 
  Image as ImageIcon, 
  History, 
  Bot, 
  LineChart, 
  Network, 
  ShieldCheck, 
  ArrowRight, 
  Globe2, 
  Sparkles, 
  Thermometer, 
  Wind, 
  Activity, 
  Award,
  BookOpen,
  Volume2
} from 'lucide-react';
import { STATIONS_DATA } from '../../data/stationsData';

export default function PortalOverview({ setActiveTab, onOpenSearch, onSelectStation }) {
  const coreFeatures = [
    {
      id: 'map',
      title: 'Interactive Polar Map',
      badge: '5★ Priority',
      desc: 'Dual-pole stereographic projections of Bharati, Maitri, Himadri, IndARC, cruise tracks & sea-ice extent.',
      icon: Globe2,
      color: 'from-cyan-500 to-blue-600',
      action: 'Launch 3D Map'
    },
    {
      id: 'stations',
      title: 'Research Station Explorer',
      badge: '5★ Priority',
      desc: 'Live telemetry feeds (-38°C), 360° virtual observatory tours, scientific labs, and wintering crew rosters.',
      icon: MapPin,
      color: 'from-emerald-500 to-teal-700',
      action: 'Inspect 6 Stations'
    },
    {
      id: 'datasets',
      title: 'Scientific Dataset Explorer',
      badge: '5★ Priority',
      desc: 'Open paleoclimate ice cores (CO2), atmospheric ozone profiles, and Arctic subsea CTD timeseries with DOIs.',
      icon: Database,
      color: 'from-blue-500 to-indigo-700',
      action: 'Browse Repositories'
    },
    {
      id: 'media',
      title: 'Media & Polar Soundscapes',
      badge: '5★ Priority',
      desc: '4K documentary video player, high-res photography archives, and hydrophone audio soundscapes with live waveforms.',
      icon: Volume2,
      color: 'from-violet-500 to-purple-700',
      action: 'Open Media Studio'
    },
    {
      id: 'timeline',
      title: 'Expedition Timeline',
      badge: '5★ Priority',
      desc: '44-year chronological journey from the historic 1981 Operation Gangotri to the latest 44th ISEA and Clean Polar 2026.',
      icon: History,
      color: 'from-amber-500 to-orange-700',
      action: 'Explore Timeline'
    },
    {
      id: 'ai',
      title: 'DhruvAI Polar Science Bot',
      badge: '4★ AI Assistant',
      desc: 'Domain-trained AI conversational assistant answering questions on cryosphere science, treaties, and datasets.',
      icon: Bot,
      color: 'from-purple-500 to-pink-600',
      action: 'Chat with DhruvAI'
    },
    {
      id: 'visualizer',
      title: 'Dataset Visualizer Studio',
      badge: '4★ Charting Studio',
      desc: 'Multi-parametric dynamic charts for Antarctic ozone hole evolution, ice core depths, and Arctic CTD profiles.',
      icon: LineChart,
      color: 'from-cyan-500 to-emerald-600',
      action: 'Launch Visualizer'
    },
    {
      id: 'graph',
      title: 'Knowledge Graph Explorer',
      badge: '4★ Ontology Network',
      desc: 'Physics-based 2D force-directed node graph mapping MoES institutes, polar stations, expeditions, and researchers.',
      icon: Network,
      color: 'from-pink-500 to-rose-700',
      action: 'Inspect Network'
    },
    {
      id: 'admin',
      title: 'Admin & Content Approval',
      badge: '4★ Governance Hub',
      desc: 'Review peer dataset submissions, moderate media assets, assign national DOIs, and edit outreach articles.',
      icon: ShieldCheck,
      color: 'from-amber-600 to-yellow-600',
      action: 'Open Admin CMS'
    },
  ];

  return (
    <div className="space-y-12">
      
      {/* Hero Section */}
      <div className="relative rounded-3xl overflow-hidden border border-cyan-500/30 bg-gradient-to-b from-[#061933] via-[#040d1a] to-[#030914] shadow-2xl p-6 sm:p-10 lg:p-14">
        
        {/* Subtle Background Aurora Effect */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl space-y-6">
          
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-moes-600 to-cyan-600 text-white font-mono text-xs font-bold uppercase tracking-widest shadow-md">
              Ministry of Earth Sciences (MoES)
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-900/90 text-cyan-300 font-mono text-xs border border-cyan-500/30 flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>National Polar & Cryosphere Program</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none font-display">
            Integrated Polar Science Outreach & Knowledge Repository
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
            Welcome to <strong>POLARIS</strong>, India's unified gateway for cryospheric science, real-time research station telemetry from Antarctica, the Arctic, and the Himalayas, open peer-reviewed datasets, and multi-media educational dissemination.
          </p>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => setActiveTab('map')}
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs sm:text-sm shadow-xl shadow-cyan-500/25 flex items-center space-x-2 transition transform hover:scale-105"
            >
              <Globe2 className="w-4 h-4" />
              <span>Explore Interactive Polar Map</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenSearch}
              className="px-6 py-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-cyan-500/40 text-cyan-300 hover:text-white font-bold text-xs sm:text-sm transition flex items-center space-x-2"
            >
              <span>Global Knowledge Search</span>
              <kbd className="text-[10px] bg-slate-800 px-1.5 py-0.5 rounded text-slate-400 border border-slate-700">
                Ctrl+K
              </kbd>
            </button>

            <button
              onClick={() => setActiveTab('ai')}
              className="px-5 py-3.5 rounded-2xl bg-purple-950/80 hover:bg-purple-900 border border-purple-500/40 text-purple-300 font-bold text-xs sm:text-sm transition flex items-center space-x-2"
            >
              <Bot className="w-4 h-4 text-purple-400" />
              <span>Ask DhruvAI Assistant</span>
            </button>
          </div>

          {/* Real-time Telemetry Snapshot Strip */}
          <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
              <div className="text-[10px] text-slate-400 uppercase font-mono">Bharati Station (Antarctica)</div>
              <div className="text-sm font-bold text-cyan-300 font-mono mt-0.5">-28.4°C • 42 kts</div>
            </div>
            <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
              <div className="text-[10px] text-slate-400 uppercase font-mono">Maitri Station (Antarctica)</div>
              <div className="text-sm font-bold text-cyan-300 font-mono mt-0.5">-32.1°C • 58 kts</div>
            </div>
            <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
              <div className="text-[10px] text-slate-400 uppercase font-mono">Himadri (High Arctic)</div>
              <div className="text-sm font-bold text-emerald-400 font-mono mt-0.5">-14.2°C • 24 kts</div>
            </div>
            <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
              <div className="text-[10px] text-slate-400 uppercase font-mono">Himansh (Himalayas 4080m)</div>
              <div className="text-sm font-bold text-amber-400 font-mono mt-0.5">-8.6°C • 31 kts</div>
            </div>
          </div>

        </div>
      </div>

      {/* 10 Core Modules Showcase Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white font-display">
              Core Portal Architecture Modules
            </h2>
            <p className="text-xs text-slate-400">
              10 interconnected scientific discovery, telemetry, dissemination, and governance suites.
            </p>
          </div>
          <span className="text-xs font-mono text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-800 hidden sm:inline-block">
            MoES Standard Compliant
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreFeatures.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.id}
                onClick={() => setActiveTab(feat.id)}
                className="bg-slate-900/60 border border-cyan-500/20 hover:border-cyan-500/50 rounded-2xl p-6 glass-panel-interactive flex flex-col justify-between space-y-4 cursor-pointer group transition duration-200 shadow-lg"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${feat.color} p-2 text-white shadow-md flex items-center justify-center`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-800 text-cyan-300 border border-slate-700">
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {feat.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-cyan-400 group-hover:text-cyan-200">
                  <span>{feat.action}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Why Polar Science Matters to India Infographic Section */}
      <div className="bg-gradient-to-r from-moes-950 via-slate-900 to-moes-950 border border-cyan-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl glass-panel space-y-6">
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
            Strategic Scientific Value
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white font-display">
            Why Polar & Cryosphere Science is Vital for India
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            India's polar missions under MoES directly influence climate modeling, weather predictions, and national food and water security.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800 space-y-2">
            <div className="text-cyan-400 font-bold text-xs uppercase font-mono">1. Monsoon Teleconnections</div>
            <p className="text-xs text-slate-300">
              Arctic sea-ice melting in Kongsfjorden influences Rossby waves and modulation of the Indian Summer Monsoon.
            </p>
          </div>

          <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800 space-y-2">
            <div className="text-cyan-400 font-bold text-xs uppercase font-mono">2. Third Pole Water Security</div>
            <p className="text-xs text-slate-300">
              Himalayan glacier mass balance from Himansh Station ensures early warning against GLOFs and river headwater depletion.
            </p>
          </div>

          <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800 space-y-2">
            <div className="text-cyan-400 font-bold text-xs uppercase font-mono">3. Global Paleoclimate Data</div>
            <p className="text-xs text-slate-300">
              300m Antarctic ice cores drilled by Indian teams unlock 10,000-year greenhouse gas cycles and volcanic history.
            </p>
          </div>

          <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800 space-y-2">
            <div className="text-cyan-400 font-bold text-xs uppercase font-mono">4. Geopolitical Leadership</div>
            <p className="text-xs text-slate-300">
              As a Consultative Party to the Antarctic Treaty since 1983, India actively leads global environmental governance.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
