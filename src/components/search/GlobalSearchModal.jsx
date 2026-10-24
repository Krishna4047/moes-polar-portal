import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  Search, 
  X, 
  MapPin, 
  Database, 
  History, 
  Image as ImageIcon, 
  User, 
  Building, 
  ArrowRight, 
  Sparkles,
  ExternalLink,
  Volume2,
  FileCode
} from 'lucide-react';
import { STATIONS_DATA } from '../../data/stationsData';
import { DATASETS_DATA } from '../../data/datasetsData';
import { EXPEDITIONS_DATA } from '../../data/expeditionsData';
import { MEDIA_DATA } from '../../data/mediaData';
import { SOUNDSCAPES_DATA } from '../../data/soundscapesData';

export default function GlobalSearchModal({ isOpen, onClose, onNavigate }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Unified Multi-entity Search Filter
  const searchResults = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return [];

    let results = [];

    // Stations
    STATIONS_DATA.forEach(stn => {
      if (stn.name.toLowerCase().includes(q) || stn.region.toLowerCase().includes(q) || stn.realm.toLowerCase().includes(q) || stn.description.toLowerCase().includes(q)) {
        results.push({
          type: 'station',
          categoryName: 'Research Station',
          title: stn.name,
          subtitle: `${stn.region} (${stn.realm.toUpperCase()})`,
          badge: stn.status,
          item: stn,
          tabTarget: 'stations',
          icon: MapPin
        });
      }
    });

    // Datasets
    DATASETS_DATA.forEach(ds => {
      if (ds.title.toLowerCase().includes(q) || ds.domain.toLowerCase().includes(q) || ds.abstract.toLowerCase().includes(q) || ds.doi.toLowerCase().includes(q) || ds.parameters.some(p => p.toLowerCase().includes(q))) {
        results.push({
          type: 'dataset',
          categoryName: 'Scientific Dataset',
          title: ds.title,
          subtitle: `${ds.domain} • ${ds.doi}`,
          badge: ds.formats.join(', '),
          item: ds,
          tabTarget: 'datasets',
          icon: Database
        });
      }
    });

    // Expeditions
    EXPEDITIONS_DATA.forEach(exp => {
      if (exp.title.toLowerCase().includes(q) || exp.code.toLowerCase().includes(q) || exp.leader.toLowerCase().includes(q) || exp.vessel.toLowerCase().includes(q) || exp.objectives.some(o => o.toLowerCase().includes(q))) {
        results.push({
          type: 'expedition',
          categoryName: 'Polar Expedition',
          title: exp.title,
          subtitle: `${exp.year} • Leader: ${exp.leader}`,
          badge: exp.type,
          item: exp,
          tabTarget: 'timeline',
          icon: History
        });
      }
    });

    // Photos & Media
    MEDIA_DATA.photos.forEach(photo => {
      if (photo.title.toLowerCase().includes(q) || photo.tags.some(t => t.toLowerCase().includes(q)) || photo.category.toLowerCase().includes(q)) {
        results.push({
          type: 'media',
          categoryName: 'Media Photo',
          title: photo.title,
          subtitle: `${photo.category} • ${photo.photographer}`,
          badge: photo.resolution,
          item: photo,
          tabTarget: 'media',
          icon: ImageIcon
        });
      }
    });

    // Soundscapes
    SOUNDSCAPES_DATA.forEach(snd => {
      if (snd.title.toLowerCase().includes(q) || snd.description.toLowerCase().includes(q) || snd.location.toLowerCase().includes(q)) {
        results.push({
          type: 'audio',
          categoryName: 'Polar Soundscape',
          title: snd.title,
          subtitle: `${snd.location} • ${snd.duration}`,
          badge: 'Audio Waveform',
          item: snd,
          tabTarget: 'media',
          icon: Volume2
        });
      }
    });

    // Filter by Category Tab if set
    if (category !== 'all') {
      results = results.filter(r => r.type === category);
    }

    return results.slice(0, 12);
  }, [query, category]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-20 flex justify-center items-start animate-in fade-in duration-200">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-[#061426] border border-cyan-500/40 rounded-2xl shadow-2xl shadow-cyan-950/80 overflow-hidden z-10">
        
        {/* Search Input Header */}
        <div className="p-4 border-b border-cyan-500/20 bg-slate-900/90 flex items-center space-x-3">
          <Search className="w-6 h-6 text-cyan-400 flex-shrink-0 animate-pulse" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search stations, ice cores, ozone data, expeditions (e.g., 'Bharati', 'IndARC', 'CO2')..."
            className="w-full bg-transparent text-slate-100 placeholder-slate-400 text-base sm:text-lg focus:outline-none"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="p-1 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          )}
          <button 
            onClick={onClose}
            className="hidden sm:inline-flex text-xs px-2 py-1 bg-slate-800 text-slate-400 rounded border border-slate-700 hover:text-white"
          >
            ESC
          </button>
        </div>

        {/* Category Pill Filters */}
        <div className="px-4 py-2 bg-[#040d1a] border-b border-cyan-500/10 flex flex-wrap gap-2 text-xs">
          {[
            { id: 'all', label: 'All Results' },
            { id: 'station', label: 'Stations' },
            { id: 'dataset', label: 'Datasets & DOIs' },
            { id: 'expedition', label: 'Expeditions' },
            { id: 'media', label: 'Photos & Videos' },
            { id: 'audio', label: 'Soundscapes' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`px-3 py-1 rounded-full font-medium transition ${
                category === cat.id
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm shadow-cyan-400/50'
                  : 'bg-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-1 divide-y divide-slate-800/60">
          {query.trim() === '' ? (
            <div className="py-12 px-6 text-center text-slate-400 space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Sparkles className="w-6 h-6" />
              </div>
              <p className="text-sm font-semibold text-slate-200">
                Unified Indian Polar Knowledge Search
              </p>
              <p className="text-xs text-slate-400 max-w-md mx-auto">
                Search across 44+ Antarctic Expeditions, Arctic IndARC moorings, Himalayan benchmarks, paleoclimate datasets, and MoES media archives.
              </p>
              <div className="pt-2 flex flex-wrap justify-center gap-2 text-xs">
                <span className="text-slate-500">Popular:</span>
                {['Bharati Station', 'Maitri Ozone', 'Princess Elizabeth Land', 'IndARC CTD', '1981 Expedition'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-2 py-0.5 rounded bg-slate-800/80 hover:bg-cyan-950/80 hover:text-cyan-300 text-slate-300 border border-slate-700"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="py-12 text-center text-slate-400 space-y-2">
              <p className="text-sm">No polar records found for "<span className="text-cyan-300 font-semibold">{query}</span>"</p>
              <p className="text-xs text-slate-500">Try searching for station names (Maitri, Bharati, Himadri), scientists, or dataset DOIs.</p>
            </div>
          ) : (
            searchResults.map((res, idx) => {
              const Icon = res.icon;
              return (
                <div
                  key={idx}
                  onClick={() => {
                    onNavigate(res.tabTarget, res.item);
                    onClose();
                  }}
                  className="p-3 rounded-xl hover:bg-slate-800/70 cursor-pointer flex items-center justify-between group transition duration-150"
                >
                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded-lg bg-slate-800 border border-slate-700 text-cyan-400 group-hover:bg-cyan-950 group-hover:border-cyan-500/40 group-hover:text-cyan-300 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h4 className="text-sm font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors">
                          {res.title}
                        </h4>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 font-mono">
                          {res.categoryName}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                        {res.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    {res.badge && (
                      <span className="hidden sm:inline-block text-[11px] px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 font-medium">
                        {res.badge}
                      </span>
                    )}
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-[#040d1a] border-t border-cyan-500/10 flex items-center justify-between text-[11px] text-slate-500">
          <div className="flex items-center space-x-3">
            <span>Navigation: Click result to open module</span>
            <span>•</span>
            <span>MoES NPDC Index</span>
          </div>
          <div className="flex items-center space-x-1 text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Knowledge Connected</span>
          </div>
        </div>

      </div>
    </div>
  );
}
