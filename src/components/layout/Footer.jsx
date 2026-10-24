import React from 'react';
import { Compass, ShieldCheck, Mail, ExternalLink, Heart, Globe2, PhoneCall } from 'lucide-react';

export default function Footer({ setActiveTab }) {
  return (
    <footer className="bg-[#030914] border-t border-cyan-500/20 text-slate-400 text-xs mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: About MoES POLARIS */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-moes-800 border border-cyan-400/40 text-cyan-300">
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-base font-bold text-white tracking-wider font-display">
                POLARIS PORTAL
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Integrated Polar Science Outreach, Research Knowledge Repository & Media Dissemination platform governed by the Ministry of Earth Sciences (MoES), Government of India.
            </p>
            <div className="flex items-center space-x-2 text-[11px] text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-3 py-1.5 rounded-md">
              <ShieldCheck className="w-4 h-4 flex-shrink-0" />
              <span>Compliant with Indian Antarctic Act, 2022</span>
            </div>
          </div>

          {/* Col 2: Core Nodal Institutions */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold tracking-wider text-xs uppercase border-b border-slate-800 pb-2">
              Participating MoES Institutions
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="https://ncpor.res.in" target="_blank" rel="noreferrer" className="hover:text-cyan-300 flex items-center justify-between group">
                  <span>NCPOR, Goa (Nodal Polar Agency)</span>
                  <ExternalLink className="w-3 h-3 text-slate-600 group-hover:text-cyan-400" />
                </a>
              </li>
              <li>
                <a href="https://mausam.imd.gov.in" target="_blank" rel="noreferrer" className="hover:text-cyan-300 flex items-center justify-between group">
                  <span>IMD (Atmospheric & Ozone Labs)</span>
                  <ExternalLink className="w-3 h-3 text-slate-600 group-hover:text-cyan-400" />
                </a>
              </li>
              <li>
                <a href="https://incois.gov.in" target="_blank" rel="noreferrer" className="hover:text-cyan-300 flex items-center justify-between group">
                  <span>INCOIS, Hyderabad (Ocean Telemetry)</span>
                  <ExternalLink className="w-3 h-3 text-slate-600 group-hover:text-cyan-400" />
                </a>
              </li>
              <li>
                <a href="https://niot.res.in" target="_blank" rel="noreferrer" className="hover:text-cyan-300 flex items-center justify-between group">
                  <span>NIOT, Chennai (IndARC Subsea Mooring)</span>
                  <ExternalLink className="w-3 h-3 text-slate-600 group-hover:text-cyan-400" />
                </a>
              </li>
              <li>
                <a href="https://iigm.res.in" target="_blank" rel="noreferrer" className="hover:text-cyan-300 flex items-center justify-between group">
                  <span>IIG, Mumbai (Geomagnetism Vaults)</span>
                  <ExternalLink className="w-3 h-3 text-slate-600 group-hover:text-cyan-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold tracking-wider text-xs uppercase border-b border-slate-800 pb-2">
              Explorer Modules
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => setActiveTab('map')} className="hover:text-cyan-300 transition">
                  Interactive Antarctica & Arctic Map
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('stations')} className="hover:text-cyan-300 transition">
                  Research Station Live Telemetry
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('datasets')} className="hover:text-cyan-300 transition">
                  Scientific Datasets & Ice Core Archives
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('timeline')} className="hover:text-cyan-300 transition">
                  Historical Expedition Timeline (1981–2025)
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('media')} className="hover:text-cyan-300 transition">
                  Polar Soundscapes & 4K Media
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('ai')} className="hover:text-cyan-300 transition">
                  DhruvAI Polar Science Assistant
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Emergency Telemetry Hotline & Newsletter */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold tracking-wider text-xs uppercase border-b border-slate-800 pb-2">
              Polar Outreach & Bulletin
            </h4>
            <p className="text-[11px] text-slate-400">
              Subscribe to MoES monthly polar scientific briefs, open dataset releases, and expedition logs.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert("Subscribed to MoES Polar Science Bulletin!"); }} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter institutional email..."
                  required
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400 placeholder:text-slate-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-semibold py-1.5 rounded-lg text-xs transition shadow-sm"
              >
                Subscribe to Bulletin
              </button>
            </form>

            <div className="pt-2 border-t border-slate-800/80 flex items-center space-x-2 text-[11px] text-slate-400">
              <PhoneCall className="w-3.5 h-3.5 text-cyan-400" />
              <span>NCPOR Operations Room: +91-832-2525600</span>
            </div>
          </div>

        </div>

        {/* Bottom copyright & attribution */}
        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2026 Ministry of Earth Sciences (MoES), Government of India. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-4">
            <span className="hover:text-slate-400 cursor-pointer">Open Data Policy</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Antarctic Treaty Secretariat</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms & Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
