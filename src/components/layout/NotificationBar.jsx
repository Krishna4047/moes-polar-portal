import React from 'react';
import { Activity, ShieldCheck, Radio } from 'lucide-react';

export default function NotificationBar() {
  const telemetryData = [
    { name: 'Bharati', temp: '-28.4°C', wind: '42 kts SSE', realm: 'Antarctica' },
    { name: 'Maitri', temp: '-32.1°C', wind: '58 kts SE', realm: 'Antarctica' },
    { name: 'Himadri', temp: '-14.2°C', wind: '24 kts NW', realm: 'Arctic' },
    { name: 'IndARC', temp: '1.84°C', depth: '192m', realm: 'Subsea' },
    { name: 'Himansh', temp: '-8.6°C', wind: '31 kts', realm: 'Himalayas' }
  ];

  return (
    <div className="bg-gradient-to-r from-[#030d1c] via-[#061833] to-[#030d1c] border-b border-cyan-500/20 text-xs py-1.5 px-3 sm:px-4 text-cyan-200 select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 overflow-hidden">
        
        {/* Left: Satellite Live Indicator & Horizontal Scrolling Telemetry Strip */}
        <div className="flex items-center space-x-2.5 min-w-0 flex-1">
          <div className="flex items-center space-x-1.5 shrink-0">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-bold text-[10px] sm:text-xs tracking-wider text-emerald-400 uppercase shrink-0">
              <span className="hidden xs:inline">LIVE </span>TELEMETRY:
            </span>
          </div>

          {/* Horizontally scrolling telemetry on small screens, wrap-free */}
          <div className="flex items-center space-x-3 overflow-x-auto no-scrollbar py-0.5 text-[11px] sm:text-xs">
            {telemetryData.map((stn, idx) => (
              <div 
                key={idx}
                className="flex items-center space-x-1.5 shrink-0 bg-slate-900/70 border border-cyan-500/10 px-2 py-0.5 rounded-md"
              >
                <span className="font-semibold text-slate-200">{stn.name}</span>
                <span className="font-mono text-cyan-300 font-bold">{stn.temp}</span>
                {stn.wind && (
                  <span className="text-[10px] text-slate-400 hidden sm:inline">({stn.wind})</span>
                )}
                {stn.depth && (
                  <span className="text-[10px] text-slate-400 hidden sm:inline">@{stn.depth}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Space Weather & Treaty Compliance */}
        <div className="hidden lg:flex items-center space-x-4 text-slate-400 shrink-0 text-[11px]">
          <div className="flex items-center space-x-1.5">
            <Activity className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-slate-300">Space Weather Kp: <strong className="text-cyan-300 font-mono">3.2 (Quiet)</strong></span>
          </div>
          <div className="flex items-center space-x-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Antarctic Treaty Compliant</span>
          </div>
        </div>

      </div>
    </div>
  );
}
