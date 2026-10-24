import React, { useState } from 'react';
import { 
  History, 
  Compass, 
  Anchor, 
  User, 
  Calendar, 
  MapPin, 
  Award, 
  Sparkles, 
  ChevronRight, 
  X,
  FileCheck,
  Ship,
  Database
} from 'lucide-react';
import { EXPEDITIONS_DATA } from '../../data/expeditionsData';

export default function ExpeditionTimeline({ onSelectExpedition }) {
  const [selectedType, setSelectedType] = useState('all');
  const [activeExpeditionModal, setActiveExpeditionModal] = useState(null);

  const filteredExpeditions = selectedType === 'all'
    ? EXPEDITIONS_DATA
    : EXPEDITIONS_DATA.filter(e => e.type.toLowerCase().includes(selectedType.toLowerCase()));

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="bg-slate-900/60 p-6 rounded-2xl border border-cyan-500/20 glass-panel flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 rounded-full">
              ⭐⭐⭐⭐⭐ Core Feature
            </span>
            <span className="text-xs text-slate-400">National Polar Mission Archives</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-wide mt-1 font-display">
            Indian Polar Expedition Odyssey (1981 - 2025)
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            Chronological interactive archive of 44+ Antarctic Scientific Expeditions (ISEA), high-Arctic research cruises, Southern Ocean transects, and Himalayan benchmark campaigns.
          </p>
        </div>

        {/* Filter by Realm */}
        <div className="flex flex-wrap items-center gap-2 bg-[#040d1a] p-1.5 rounded-xl border border-slate-800">
          {[
            { id: 'all', label: 'All Expeditions' },
            { id: 'Antarctica', label: 'Antarctica ISEA' },
            { id: 'Arctic', label: 'Arctic' },
            { id: 'Southern Ocean', label: 'Southern Ocean' },
            { id: 'Himalayas', label: 'Himalayas' },
          ].map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                selectedType === type.id
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline Vertical Track */}
      <div className="relative border-l-2 border-cyan-500/30 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-10">
        
        {filteredExpeditions.map((exp, idx) => (
          <div key={exp.id} className="relative group">
            
            {/* Pulsing Node Marker */}
            <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:scale-125 transition-transform">
              <div className="w-2 h-2 rounded-full bg-cyan-400 group-hover:bg-emerald-400 transition-colors"></div>
            </div>

            {/* Expedition Milestone Card */}
            <div className="bg-slate-900/70 border border-cyan-500/20 hover:border-cyan-500/50 rounded-2xl p-6 glass-panel-interactive transition space-y-4">
              
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-800 pb-3">
                <div className="flex items-center space-x-2.5">
                  <span className="px-2.5 py-1 rounded bg-cyan-950 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-bold">
                    {exp.code}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {exp.type} Mission
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{exp.year}</span>
                </div>
              </div>

              {/* Title & Leader */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {exp.title}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    <div className="flex items-center space-x-2 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                      <User className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <div>
                        <div className="text-[10px] text-slate-500 uppercase font-mono">Expedition Leader</div>
                        <div className="font-semibold text-slate-200 truncate">{exp.leader}</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                      <Ship className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <div>
                        <div className="text-[10px] text-slate-500 uppercase font-mono">Polar Vessel / Mode</div>
                        <div className="font-semibold text-slate-200 truncate">{exp.vessel}</div>
                      </div>
                    </div>
                  </div>

                  {/* Core Objectives */}
                  <div className="space-y-1.5 pt-1">
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Key Scientific Deliverables:
                    </div>
                    <ul className="space-y-1 text-xs text-slate-300">
                      {exp.objectives.slice(0, 2).map((obj, oIdx) => (
                        <li key={oIdx} className="flex items-start space-x-2">
                          <span className="text-cyan-400 font-bold">•</span>
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Banner & Scientific Yield Stats */}
                <div className="space-y-3 flex flex-col justify-between">
                  <div className="relative h-32 rounded-xl overflow-hidden border border-slate-800">
                    <img
                      src={exp.bannerImage}
                      alt={exp.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2">
                      <span className="text-[10px] text-cyan-200 font-mono">{exp.departure}</span>
                    </div>
                  </div>

                  <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800 text-[11px] space-y-1 font-mono">
                    <div className="flex justify-between text-slate-400">
                      <span>Specimens Collected:</span>
                      <strong className="text-cyan-300">{exp.scientificYield.samplesCollected}</strong>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Data Volume:</span>
                      <strong className="text-emerald-400">{exp.scientificYield.dataVolume}</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setActiveExpeditionModal(exp)}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-cyan-950 hover:border-cyan-500/40 border border-slate-700 text-cyan-300 hover:text-white text-xs font-semibold flex items-center space-x-1.5 transition"
                >
                  <span>Inspect Full Mission Log & Milestones</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        ))}

      </div>

      {/* Full Expedition Log Modal */}
      {activeExpeditionModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-12 flex justify-center items-center bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-3xl bg-[#061426] border border-cyan-500/40 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-start justify-between border-b border-cyan-500/20 pb-4">
              <div>
                <div className="flex items-center space-x-2 text-xs">
                  <span className="px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 font-mono font-bold">
                    {activeExpeditionModal.code}
                  </span>
                  <span className="text-slate-400">{activeExpeditionModal.year}</span>
                </div>
                <h3 className="text-xl font-extrabold text-white mt-1">
                  {activeExpeditionModal.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveExpeditionModal(null)}
                className="p-1 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Participants</div>
                <div className="text-cyan-300 font-bold font-mono mt-0.5">{activeExpeditionModal.participants} Scientists & Engineers</div>
              </div>
              <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Mission Vessel</div>
                <div className="text-slate-200 font-medium mt-0.5 truncate">{activeExpeditionModal.vessel}</div>
              </div>
              <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Departure Staging</div>
                <div className="text-slate-200 font-medium mt-0.5 truncate">{activeExpeditionModal.departure}</div>
              </div>
              <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Participating Institutes</div>
                <div className="text-emerald-400 font-medium mt-0.5">{activeExpeditionModal.scientificYield.institutesInvolved} Labs</div>
              </div>
            </div>

            {/* Historical Milestones */}
            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 space-y-2">
              <div className="text-xs font-bold text-white uppercase tracking-wider flex items-center space-x-2">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Mission Highlights & Discoveries</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {activeExpeditionModal.milestones.map((m, mIdx) => (
                  <li key={mIdx} className="flex items-start space-x-2">
                    <span className="text-amber-400 font-bold">✓</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Objectives */}
            <div className="space-y-2">
              <div className="text-xs font-bold text-white uppercase tracking-wider">
                Full Scientific Mandate
              </div>
              <ul className="space-y-1.5 text-xs text-slate-300 bg-slate-950/40 p-4 rounded-xl border border-slate-800">
                {activeExpeditionModal.objectives.map((obj, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-end pt-4 border-t border-slate-800">
              <button
                onClick={() => setActiveExpeditionModal(null)}
                className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs transition"
              >
                Close Archive Log
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
