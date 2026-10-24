import React, { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import { 
  Globe2, 
  MapPin, 
  Thermometer, 
  Wind, 
  Sun, 
  Shield, 
  Layers, 
  Navigation, 
  Maximize2, 
  Eye, 
  Compass, 
  Activity,
  Sparkles,
  Info
} from 'lucide-react';
import { STATIONS_DATA, INTERNATIONAL_STATIONS } from '../../data/stationsData';

// Fix Leaflet Default Icon path issues
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Custom Polar Marker Icons
const createIndianStationIcon = (name, isHistorical) => {
  return L.divIcon({
    className: 'custom-polar-icon',
    html: `
      <div class="relative flex items-center justify-center">
        <div class="absolute w-8 h-8 rounded-full ${isHistorical ? 'bg-amber-500/30' : 'bg-cyan-500/40'} animate-ping"></div>
        <div class="w-7 h-7 rounded-full ${isHistorical ? 'bg-gradient-to-tr from-amber-600 to-amber-400' : 'bg-gradient-to-tr from-cyan-600 to-blue-500'} border-2 border-white shadow-lg flex items-center justify-center text-[10px] font-extrabold text-white">
          🇮🇳
        </div>
      </div>
    `,
    iconSize: [28, 28],
    iconAnchor: [14, 14],
    popupAnchor: [0, -14],
  });
};

const createInternationalIcon = () => {
  return L.divIcon({
    className: 'custom-intl-icon',
    html: `
      <div class="w-3.5 h-3.5 rounded-full bg-slate-400 border border-white/80 shadow-md"></div>
    `,
    iconSize: [14, 14],
    iconAnchor: [7, 7],
    popupAnchor: [0, -7],
  });
};

export default function PolarMapExplorer({ onSelectStation }) {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const layersGroupRef = useRef({
    stations: L.layerGroup(),
    international: L.layerGroup(),
    iceShelves: L.layerGroup(),
    cruiseTrack: L.layerGroup()
  });

  const [activeRealm, setActiveRealm] = useState('antarctica');
  const [showInternational, setShowInternational] = useState(true);
  const [showIceShelves, setShowIceShelves] = useState(true);
  const [showCruiseTrack, setShowCruiseTrack] = useState(true);
  const [selectedStation, setSelectedStation] = useState(STATIONS_DATA[0]);

  // Map Views definitions
  const realms = {
    antarctica: {
      center: [-72.0, 45.0],
      zoom: 3,
      name: "Antarctica (South Pole)",
      desc: "Larsemann Hills, Schirmacher Oasis & Queen Maud Land"
    },
    arctic: {
      center: [78.9, 12.0],
      zoom: 6,
      name: "Arctic (Svalbard)",
      desc: "Himadri Station & IndARC Kongsfjorden Mooring"
    },
    himalayas: {
      center: [32.4, 77.6],
      zoom: 8,
      name: "Himalayas (Third Pole)",
      desc: "Himansh Station & Chandra Basin Glaciers"
    },
    global: {
      center: [-20.0, 60.0],
      zoom: 2,
      name: "Global MoES Expedition Route",
      desc: "Goa / Cape Town to Antarctic Continental Ice Shelves"
    }
  };

  // Initialize Leaflet Map Instance
  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      const map = L.map(mapContainerRef.current, {
        center: realms.antarctica.center,
        zoom: realms.antarctica.zoom,
        zoomControl: true,
        minZoom: 2,
        maxZoom: 14
      });

      // Dark CartoDB Polar Basemap
      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; CartoDB & MoES India'
      }).addTo(map);

      // Add Layer Groups
      layersGroupRef.current.stations.addTo(map);
      layersGroupRef.current.international.addTo(map);
      layersGroupRef.current.iceShelves.addTo(map);
      layersGroupRef.current.cruiseTrack.addTo(map);

      mapInstanceRef.current = map;
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Update Map Layers and Markers
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    const { stations, international, iceShelves, cruiseTrack } = layersGroupRef.current;

    // 1. Clear existing layers
    stations.clearLayers();
    international.clearLayers();
    iceShelves.clearLayers();
    cruiseTrack.clearLayers();

    // 2. Add Indian Stations
    STATIONS_DATA.forEach(stn => {
      const isHistorical = stn.id === 'dakshin-gangotri';
      const marker = L.marker([stn.coordinates.lat, stn.coordinates.lng], {
        icon: createIndianStationIcon(stn.name, isHistorical)
      });

      const popupContent = `
        <div style="font-family: inherit; line-height: 1.4; color: #f1f5f9;">
          <div style="font-weight: 800; color: #38bdf8; font-size: 14px; border-bottom: 1px solid #334155; padding-bottom: 4px; margin-bottom: 6px;">
            ${stn.name}
          </div>
          <div style="font-size: 11px; color: #cbd5e1; margin-bottom: 8px;">
            ${stn.tagline}
          </div>
          <div style="background: rgba(15, 23, 42, 0.9); padding: 8px; border-radius: 8px; border: 1px solid #1e293b; display: grid; grid-template-columns: 1fr 1fr; gap: 6px; font-size: 11px;">
            <div>🌡️ Temp: <strong style="color: #38bdf8;">${stn.liveTelemetry.temperature}°C</strong></div>
            <div>💨 Wind: <strong style="color: #34d399;">${stn.liveTelemetry.windSpeed} kts</strong></div>
            <div>⚡ Kp: <strong style="color: #c084fc;">${stn.liveTelemetry.kpIndex}</strong></div>
            <div>☀️ Rad: <strong style="color: #facc15;">${stn.liveTelemetry.solarRadiation} W/m²</strong></div>
          </div>
          <div style="margin-top: 8px;">
            <button id="btn-explore-${stn.id}" style="width: 100%; background: #0284c7; color: white; border: none; padding: 6px; border-radius: 6px; font-weight: bold; font-size: 11px; cursor: pointer;">
              Open 360° Station Hub
            </button>
          </div>
        </div>
      `;

      marker.bindPopup(popupContent);
      marker.on('popupopen', () => {
        const btn = document.getElementById(`btn-explore-${stn.id}`);
        if (btn) {
          btn.onclick = () => onSelectStation && onSelectStation(stn);
        }
      });
      marker.on('click', () => setSelectedStation(stn));

      stations.addLayer(marker);
    });

    // 3. International Stations
    if (showInternational) {
      INTERNATIONAL_STATIONS.forEach(intl => {
        const marker = L.marker([intl.coordinates.lat, intl.coordinates.lng], {
          icon: createInternationalIcon()
        });
        marker.bindPopup(`
          <div style="color: #f1f5f9; font-size: 12px;">
            <strong style="color: #cbd5e1;">${intl.name}</strong><br/>
            <span style="color: #94a3b8; font-size: 10px;">${intl.country} • ${intl.type}</span>
          </div>
        `);
        international.addLayer(marker);
      });
    }

    // 4. Ice Shelves
    if (showIceShelves) {
      const amery = L.circle([-70.5, 71.0], {
        radius: 280000,
        color: '#38bdf8',
        fillColor: '#38bdf8',
        fillOpacity: 0.12,
        dashArray: '4, 4'
      }).bindTooltip("Amery Ice Shelf (Fast Ice Zone)");

      const astrid = L.circle([-70.1, 12.0], {
        radius: 220000,
        color: '#818cf8',
        fillColor: '#818cf8',
        fillOpacity: 0.12,
        dashArray: '4, 4'
      }).bindTooltip("Princess Astrid Coast Ice Shelf");

      iceShelves.addLayer(amery);
      iceShelves.addLayer(astrid);
    }

    // 5. Cruise Track
    if (showCruiseTrack) {
      const route = [
        [15.4909, 73.8278], // Goa Port
        [-20.1609, 57.5012], // Mauritius
        [-33.9249, 18.4241], // Cape Town
        [-55.0000, 30.0000], // Polar Front
        [-65.0000, 15.0000], // Antarctic Circle
        [-70.7664, 11.7328], // Maitri
        [-68.0000, 45.0000],
        [-69.4072, 76.1953]  // Bharati
      ];
      const poly = L.polyline(route, {
        color: '#06b6d4',
        weight: 2.5,
        dashArray: '6, 8',
        opacity: 0.85
      }).bindTooltip("44th ISEA Expedition Cruise Route (Goa - Cape Town - Maitri - Bharati)");
      cruiseTrack.addLayer(poly);
    }

  }, [showInternational, showIceShelves, showCruiseTrack, onSelectStation]);

  const handleRealmChange = (realmKey) => {
    setActiveRealm(realmKey);
    if (mapInstanceRef.current) {
      const { center, zoom } = realms[realmKey];
      mapInstanceRef.current.flyTo(center, zoom, { duration: 1.5 });
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Module Title & Realm Switcher */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 bg-slate-900/60 p-5 rounded-2xl border border-cyan-500/20 glass-panel">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 rounded-full">
              ⭐⭐⭐⭐⭐ Core Feature
            </span>
            <span className="text-xs text-slate-400">Interactive GIS & Polar Projections</span>
          </div>
          <h2 className="text-2xl font-black text-white tracking-wide mt-1 font-display">
            Interactive Polar Science & Station Map
          </h2>
          <p className="text-xs text-slate-300 mt-0.5">
            Geospatial tracking of Indian Polar research bases, international Antarctic treaty stations, cruise corridors, and live telemetry feeds.
          </p>
        </div>

        {/* Realm View Tabs */}
        <div className="flex flex-wrap items-center gap-2 bg-[#040d1a] p-1.5 rounded-xl border border-slate-800">
          {Object.entries(realms).map(([key, info]) => (
            <button
              key={key}
              onClick={() => handleRealmChange(key)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                activeRealm === key
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-md shadow-cyan-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              {info.name}
            </button>
          ))}
        </div>
      </div>

      {/* Map Main Container */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Leaflet Polar Canvas (3 cols) */}
        <div className="lg:col-span-3 relative h-[620px] rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl bg-[#030a14]">
          
          <div ref={mapContainerRef} className="w-full h-full z-0" />

          {/* Floating Map Layers Control Toolbar */}
          <div className="absolute top-4 right-4 z-[400] bg-[#061426]/90 backdrop-blur-md border border-cyan-500/30 rounded-xl p-3 shadow-xl space-y-2 text-xs text-slate-200">
            <div className="flex items-center space-x-1.5 font-bold text-cyan-300 pb-1 border-b border-slate-800">
              <Layers className="w-3.5 h-3.5" />
              <span>GIS Map Layers</span>
            </div>
            <label className="flex items-center space-x-2 cursor-pointer hover:text-white">
              <input
                type="checkbox"
                checked={showInternational}
                onChange={(e) => setShowInternational(e.target.checked)}
                className="rounded border-slate-700 text-cyan-500 focus:ring-cyan-400 bg-slate-900"
              />
              <span>International Treaty Bases</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer hover:text-white">
              <input
                type="checkbox"
                checked={showIceShelves}
                onChange={(e) => setShowIceShelves(e.target.checked)}
                className="rounded border-slate-700 text-cyan-500 focus:ring-cyan-400 bg-slate-900"
              />
              <span>Ice Shelves & Fast Ice</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer hover:text-white">
              <input
                type="checkbox"
                checked={showCruiseTrack}
                onChange={(e) => setShowCruiseTrack(e.target.checked)}
                className="rounded border-slate-700 text-cyan-500 focus:ring-cyan-400 bg-slate-900"
              />
              <span>Expedition Cruise Path</span>
            </label>
          </div>

          {/* Map Compass Legend */}
          <div className="absolute bottom-4 left-4 z-[400] bg-[#061426]/90 backdrop-blur-md border border-cyan-500/30 rounded-xl px-3 py-2 text-[11px] text-slate-300 flex items-center space-x-4">
            <div className="flex items-center space-x-1.5">
              <span className="w-3 h-3 rounded-full bg-cyan-500 border border-white inline-block"></span>
              <span>Indian Research Stations (6)</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-400 inline-block"></span>
              <span>Global Bases (7)</span>
            </div>
          </div>
        </div>

        {/* Selected Station Telemetry Inspector Sidebar (1 col) */}
        <div className="space-y-4">
          <div className="bg-slate-900/80 border border-cyan-500/30 rounded-2xl p-4 glass-panel space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <div className="flex items-center space-x-2">
                <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
                <h3 className="font-bold text-white text-sm">Station Telemetry</h3>
              </div>
              <span className="text-[10px] text-emerald-400 font-mono">LIVE FEED</span>
            </div>

            {/* Station selector list */}
            <div className="space-y-2">
              {STATIONS_DATA.map((stn) => {
                const isSelected = (selectedStation?.id || 'bharati') === stn.id;
                return (
                  <button
                    key={stn.id}
                    onClick={() => {
                      setSelectedStation(stn);
                      if (mapInstanceRef.current) {
                        mapInstanceRef.current.flyTo([stn.coordinates.lat, stn.coordinates.lng], 7, { duration: 1.2 });
                      }
                    }}
                    className={`w-full text-left p-2.5 rounded-xl border transition flex items-center justify-between ${
                      isSelected
                        ? 'bg-cyan-950/70 border-cyan-500/50 shadow-md shadow-cyan-950'
                        : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/60'
                    }`}
                  >
                    <div>
                      <div className="font-semibold text-xs text-slate-100">{stn.name}</div>
                      <div className="text-[10px] text-slate-400">{stn.region}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-mono font-bold text-cyan-300">
                        {stn.liveTelemetry.temperature}°C
                      </div>
                      <div className="text-[10px] text-emerald-400 font-medium">
                        {stn.liveTelemetry.windSpeed} kts
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quick action button */}
            <button
              onClick={() => onSelectStation && onSelectStation(selectedStation || STATIONS_DATA[0])}
              className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-2.5 rounded-xl text-xs shadow-lg shadow-cyan-500/20 flex items-center justify-center space-x-2 transition"
            >
              <Compass className="w-4 h-4" />
              <span>Open 360° Virtual Station Hub</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
