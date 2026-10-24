import React, { useState } from 'react';
import { 
  MapPin, 
  Thermometer, 
  Wind, 
  Sun, 
  Compass, 
  Activity, 
  Users, 
  Cpu, 
  Eye, 
  Zap, 
  Radio, 
  ShieldCheck, 
  X, 
  ChevronRight,
  Maximize2,
  Sparkles,
  Award
} from 'lucide-react';
import { STATIONS_DATA } from '../../data/stationsData';

export default function StationExplorer({ initialStationId, onNavigateToMap, onNavigateToDatasets }) {
  const [selectedRealm, setSelectedRealm] = useState('all');
  const [activeStation, setActiveStation] = useState(
    STATIONS_DATA.find(s => s.id === initialStationId) || STATIONS_DATA[0]
  );
  const [tourModalSpot, setTourModalSpot] = useState(null);

  const filteredStations = selectedRealm === 'all' 
    ? STATIONS_DATA 
    : STATIONS_DATA.filter(s => s.realm === selectedRealm);

  return (
    <div className="space-y-8">
      
      {/* Header Banner */}
      <div className="bg-slate-900/60 p-6 rounded-2xl border border-cyan-500/20 glass-panel flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 rounded-full">
              ⭐⭐⭐⭐⭐ Core Feature
            </span>
            <span className="text-xs text-slate-400">National Cryosphere Infrastructure</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-wide mt-1 font-display">
            Indian Polar Research Station Explorer
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            Real-time simulated telemetry, 360° virtual observatory panoramas, scientific laboratory suites, and wintering crew manifests across Antarctica, the Arctic, and the Himalayas.
          </p>
        </div>

        {/* Realm Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 bg-[#040d1a] p-1.5 rounded-xl border border-slate-800">
          {[
            { id: 'all', label: 'All Bases (6)' },
            { id: 'antarctica', label: 'Antarctica (3)' },
            { id: 'arctic', label: 'Arctic (2)' },
            { id: 'himalayas', label: 'Himalayas (1)' },
          ].map((realm) => (
            <button
              key={realm.id}
              onClick={() => setSelectedRealm(realm.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                selectedRealm === realm.id
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              {realm.label}
            </button>
          ))}
        </div>
      </div>

      {/* Station Selector Quick Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {filteredStations.map((stn) => {
          const isSelected = activeStation.id === stn.id;
          return (
            <button
              key={stn.id}
              onClick={() => setActiveStation(stn)}
              className={`p-3 rounded-xl border text-left transition-all duration-200 relative overflow-hidden group ${
                isSelected
                  ? 'bg-cyan-950/80 border-cyan-400 shadow-lg shadow-cyan-950/60 ring-1 ring-cyan-400'
                  : 'bg-slate-900/60 border-slate-800 hover:border-cyan-500/40 hover:bg-slate-850'
              }`}
            >
              <div className="text-[10px] font-mono uppercase text-cyan-400 font-bold mb-1 flex items-center justify-between">
                <span>{stn.realm}</span>
                {stn.id === 'bharati' && <span className="text-amber-400">★ Flagship</span>}
              </div>
              <div className="font-bold text-xs text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                {stn.name.replace(" Research Station", "")}
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">
                {stn.elevation}
              </div>
              <div className="mt-2 pt-1 border-t border-slate-800/80 flex items-center justify-between text-[10px]">
                <span className="text-cyan-300 font-mono font-semibold">{stn.liveTelemetry.temperature}°C</span>
                <span className="text-emerald-400 font-mono">{stn.liveTelemetry.windSpeed} kts</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Active Station Interactive Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left 2 Cols: Station Visuals, Blueprint & Description */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Station Hero Card */}
          <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl group bg-slate-900">
            <img
              src={activeStation.image}
              alt={activeStation.name}
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#040d1a] via-[#040d1a]/50 to-transparent"></div>

            {/* Station Title Overlay */}
            <div className="absolute bottom-6 left-6 right-6 space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-cyan-500/80 text-slate-950 font-extrabold text-xs uppercase tracking-wider">
                  {activeStation.type}
                </span>
                <span className="px-2.5 py-1 rounded bg-slate-900/80 backdrop-blur-md text-emerald-400 font-mono text-xs border border-emerald-500/40">
                  {activeStation.status}
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-900/80 text-slate-300 font-mono text-xs">
                  Est. {activeStation.commissioned}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white font-display">
                {activeStation.name}
              </h3>
              <p className="text-xs sm:text-sm text-cyan-200 font-medium">
                {activeStation.tagline}
              </p>
            </div>
          </div>

          {/* Detailed Narrative & Coordinates */}
          <div className="bg-slate-900/60 p-6 rounded-2xl border border-cyan-500/20 glass-panel space-y-4">
            <h4 className="text-base font-bold text-white flex items-center space-x-2">
              <Compass className="w-4 h-4 text-cyan-400" />
              <span>Geographical Location & Mission Profile</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {activeStation.description}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                <div className="text-[10px] text-slate-400 uppercase font-mono">Coordinates</div>
                <div className="text-xs font-bold text-cyan-300 mt-0.5">
                  {activeStation.coordinates.lat.toFixed(4)}°, {activeStation.coordinates.lng.toFixed(4)}°
                </div>
              </div>
              <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                <div className="text-[10px] text-slate-400 uppercase font-mono">Elevation</div>
                <div className="text-xs font-bold text-slate-200 mt-0.5">
                  {activeStation.elevation}
                </div>
              </div>
              <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                <div className="text-[10px] text-slate-400 uppercase font-mono">Crew Capacity</div>
                <div className="text-xs font-bold text-slate-200 mt-0.5">
                  {activeStation.capacity}
                </div>
              </div>
              <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                <div className="text-[10px] text-slate-400 uppercase font-mono">Operator</div>
                <div className="text-xs font-bold text-emerald-400 mt-0.5">
                  {activeStation.country}
                </div>
              </div>
            </div>
          </div>

          {/* 360° Virtual Tour Panoramas & Hotspots */}
          <div className="bg-slate-900/60 p-6 rounded-2xl border border-cyan-500/20 glass-panel space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Eye className="w-5 h-5 text-cyan-400 animate-pulse" />
                <h4 className="text-base font-bold text-white">
                  360° Virtual Observatory Tour & Hotspots
                </h4>
              </div>
              <span className="text-xs text-cyan-400 font-mono">Interactive VR Preview</span>
            </div>

            <p className="text-xs text-slate-300">
              Explore key internal labs, antenna arrays, and outdoor sampling masts:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {activeStation.virtualTourSpots.map((spot, idx) => (
                <div
                  key={idx}
                  onClick={() => setTourModalSpot(spot)}
                  className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 cursor-pointer transition group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {spot.name}
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                    {spot.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Scientific Facilities & Instrumentation */}
          <div className="bg-slate-900/60 p-6 rounded-2xl border border-cyan-500/20 glass-panel space-y-4">
            <h4 className="text-base font-bold text-white flex items-center space-x-2">
              <Cpu className="w-4 h-4 text-purple-400" />
              <span>Scientific Laboratories & Sensor Suites</span>
            </h4>

            <div className="space-y-2.5">
              {activeStation.facilities.map((fac, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0"></div>
                  <div>
                    <div className="text-xs font-bold text-slate-100">{fac.name}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{fac.purpose}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right 1 Col: Live Telemetry & Station Crew Manifest */}
        <div className="space-y-6">
          
          {/* Live Telemetry Panel */}
          <div className="bg-gradient-to-b from-slate-900/90 to-[#040d1a] p-6 rounded-2xl border border-cyan-500/40 shadow-2xl glass-panel space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-cyan-500/20">
              <div className="flex items-center space-x-2">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  Live Station Telemetry
                </h4>
              </div>
              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
                10-SEC REFRESH
              </span>
            </div>

            {/* Temperature Gauge */}
            <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center space-x-1.5">
                  <Thermometer className="w-4 h-4 text-cyan-400" />
                  <span>Ambient Temperature</span>
                </span>
                <span className="font-mono text-xs text-slate-400">Outdoor Sensor</span>
              </div>
              <div className="text-3xl font-black font-mono text-cyan-300">
                {activeStation.liveTelemetry.temperature} °C
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-blue-600 via-cyan-400 to-emerald-400 h-full rounded-full"
                  style={{ width: `${Math.min(100, Math.max(10, (activeStation.liveTelemetry.temperature + 50) * 1.5))}%` }}
                ></div>
              </div>
            </div>

            {/* Wind & Pressure */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800">
                <div className="flex items-center space-x-1 text-[10px] text-slate-400">
                  <Wind className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Wind Velocity</span>
                </div>
                <div className="text-lg font-bold font-mono text-emerald-400 mt-1">
                  {activeStation.liveTelemetry.windSpeed} kts
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5">
                  Dir: {activeStation.liveTelemetry.windDirection}
                </div>
              </div>

              <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800">
                <div className="flex items-center space-x-1 text-[10px] text-slate-400">
                  <Activity className="w-3.5 h-3.5 text-amber-400" />
                  <span>Barometric P</span>
                </div>
                <div className="text-lg font-bold font-mono text-amber-400 mt-1">
                  {activeStation.liveTelemetry.pressure} hPa
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5">
                  Humidity: {activeStation.liveTelemetry.humidity}%
                </div>
              </div>
            </div>

            {/* Solar & Aurora */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800">
                <div className="flex items-center space-x-1 text-[10px] text-slate-400">
                  <Sun className="w-3.5 h-3.5 text-yellow-400" />
                  <span>Solar Rad</span>
                </div>
                <div className="text-sm font-bold font-mono text-yellow-300 mt-1">
                  {activeStation.liveTelemetry.solarRadiation} W/m²
                </div>
              </div>

              <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800">
                <div className="flex items-center space-x-1 text-[10px] text-slate-400">
                  <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                  <span>Space Kp</span>
                </div>
                <div className="text-sm font-bold font-mono text-purple-300 mt-1">
                  Kp {activeStation.liveTelemetry.kpIndex}
                </div>
              </div>
            </div>

            {/* Microgrid Green Energy & Aurora Status */}
            <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center space-x-1.5 text-slate-300 font-medium">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span>Green Microgrid:</span>
                </span>
                <span className="text-[11px] font-mono text-emerald-400">
                  {activeStation.liveTelemetry.microgridStatus}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-900">
                <span className="text-slate-400">Aurora Alert:</span>
                <span className="text-[11px] font-semibold text-purple-300">
                  {activeStation.liveTelemetry.auroraVisibility}
                </span>
              </div>
            </div>

          </div>

          {/* Station Wintering Crew Roster */}
          <div className="bg-slate-900/60 p-6 rounded-2xl border border-cyan-500/20 glass-panel space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-white flex items-center space-x-2 uppercase tracking-wider">
                <Users className="w-4 h-4 text-cyan-400" />
                <span>Station Crew Roster</span>
              </h4>
              <span className="text-[10px] text-slate-400 font-mono">44th ISEA</span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="text-[10px] text-cyan-400 font-bold uppercase">Station Leader</div>
                <div className="text-slate-100 font-semibold mt-0.5">{activeStation.crewRoster.leader}</div>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="text-[10px] text-cyan-400 font-bold uppercase">Lead Glaciologist</div>
                <div className="text-slate-200 mt-0.5">{activeStation.crewRoster.glaciologist}</div>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="text-[10px] text-cyan-400 font-bold uppercase">Lead Meteorologist</div>
                <div className="text-slate-200 mt-0.5">{activeStation.crewRoster.meteorologist}</div>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="text-[10px] text-cyan-400 font-bold uppercase">Surgeon Medical Officer</div>
                <div className="text-slate-200 mt-0.5">{activeStation.crewRoster.medicalOfficer}</div>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* 360 Tour Spot Modal */}
      {tourModalSpot && (
        <div className="fixed inset-0 z-50 overflow-y-auto p-4 flex items-center justify-center bg-black/80 backdrop-blur-md">
          <div className="bg-[#061426] border border-cyan-500/40 rounded-2xl max-w-2xl w-full p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-cyan-500/20 pb-3">
              <div className="flex items-center space-x-2">
                <Eye className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-bold text-white">{tourModalSpot.name}</h3>
              </div>
              <button 
                onClick={() => setTourModalSpot(null)}
                className="p-1 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative h-64 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 flex items-center justify-center">
              <img
                src={activeStation.image}
                alt={tourModalSpot.name}
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4">
                <span className="text-xs text-cyan-300 font-mono">360° Panoramic Hotspot Simulation</span>
                <span className="text-sm font-semibold text-white">{activeStation.name}</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {tourModalSpot.desc}
            </p>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setTourModalSpot(null)}
                className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs rounded-xl transition"
              >
                Close Hotspot Viewer
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
