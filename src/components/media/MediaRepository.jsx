import React, { useState, useEffect, useRef } from 'react';
import { 
  Image as ImageIcon, 
  Film, 
  Volume2, 
  Download, 
  Play, 
  Pause, 
  Maximize2, 
  X, 
  Sparkles, 
  Tag, 
  Radio, 
  Share2, 
  BookOpen, 
  FileText,
  SlidersHorizontal,
  ChevronRight,
  Disc
} from 'lucide-react';
import { MEDIA_DATA } from '../../data/mediaData';
import { SOUNDSCAPES_DATA } from '../../data/soundscapesData';

export default function MediaRepository() {
  const [activeSubTab, setActiveSubTab] = useState('photos'); // 'photos' | 'videos' | 'soundscapes' | 'kits'
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(MEDIA_DATA.videos[0]);
  const [photoCategory, setPhotoCategory] = useState('all');

  // Soundscape audio player state
  const [activeSound, setActiveSound] = useState(SOUNDSCAPES_DATA[0]);
  const [isPlayingSound, setIsPlayingSound] = useState(false);
  const [audioProgress, setAudioProgress] = useState(25);
  const audioIntervalRef = useRef(null);

  // Simulated playback animation for soundscape waveform
  useEffect(() => {
    if (isPlayingSound) {
      audioIntervalRef.current = setInterval(() => {
        setAudioProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      }, 300);
    } else {
      clearInterval(audioIntervalRef.current);
    }
    return () => clearInterval(audioIntervalRef.current);
  }, [isPlayingSound]);

  const filteredPhotos = photoCategory === 'all'
    ? MEDIA_DATA.photos
    : MEDIA_DATA.photos.filter(p => p.category.toLowerCase().includes(photoCategory.toLowerCase()));

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="bg-slate-900/60 p-6 rounded-2xl border border-cyan-500/20 glass-panel flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 rounded-full">
              ⭐⭐⭐⭐⭐ Core Feature
            </span>
            <span className="text-xs text-slate-400">Media Dissemination & Public Outreach</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-wide mt-1 font-display">
            Polar Media Repository & Soundscapes Studio
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            High-resolution polar imagery, 4K documentary reels, downloadable educational classroom kits, and high-latitude acoustic hydrophone soundscapes.
          </p>
        </div>

        {/* Sub-tab Switcher */}
        <div className="flex flex-wrap items-center gap-2 bg-[#040d1a] p-1.5 rounded-xl border border-slate-800">
          {[
            { id: 'photos', label: 'Photo Archives', icon: ImageIcon },
            { id: 'videos', label: '4K Documentaries', icon: Film },
            { id: 'soundscapes', label: 'Polar Soundscapes', icon: Volume2 },
            { id: 'kits', label: 'Outreach & Press Kits', icon: BookOpen },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveSubTab(tab.id)}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  activeSubTab === tab.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-md shadow-cyan-500/30'
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

      {/* SUB-TAB 1: PHOTO ARCHIVES */}
      {activeSubTab === 'photos' && (
        <div className="space-y-6">
          
          {/* Photo Category Filter */}
          <div className="flex flex-wrap items-center gap-2 bg-[#061426] p-3 rounded-xl border border-slate-800 text-xs">
            <span className="text-slate-400 font-medium mr-2">Filter Category:</span>
            {['all', 'Ice & Landscape', 'Wildlife', 'Atmosphere & Aurora', 'Arctic & Fjords', 'Expedition Logistics', 'Third Pole'].map((cat) => (
              <button
                key={cat}
                onClick={() => setPhotoCategory(cat)}
                className={`px-3 py-1 rounded-full transition ${
                  photoCategory === cat
                    ? 'bg-cyan-500 text-slate-950 font-bold'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {cat === 'all' ? 'All Photos' : cat}
              </button>
            ))}
          </div>

          {/* Photo Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
                className="group relative rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 bg-slate-900 shadow-xl cursor-pointer transition duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

                  <div className="absolute top-3 left-3 flex gap-1">
                    <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-cyan-300 font-mono text-[10px] uppercase font-bold border border-cyan-500/30">
                      {photo.realm}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-slate-300 text-[10px]">
                      {photo.resolution}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 space-y-1">
                    <div className="text-[11px] text-cyan-400 font-semibold">{photo.category}</div>
                    <h3 className="text-sm font-bold text-white group-hover:text-cyan-200 transition-colors line-clamp-1">
                      {photo.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 line-clamp-1">
                      By {photo.photographer} • {photo.station}
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-slate-950/80 flex items-center justify-between border-t border-slate-800 text-[11px]">
                  <div className="flex flex-wrap gap-1">
                    {photo.tags.slice(0, 2).map((t, idx) => (
                      <span key={idx} className="text-slate-400 font-mono">#{t}</span>
                    ))}
                  </div>
                  <span className="text-cyan-400 font-semibold group-hover:underline flex items-center space-x-1">
                    <Maximize2 className="w-3 h-3" />
                    <span>View High-Res</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      )}

      {/* SUB-TAB 2: 4K DOCUMENTARIES & VIDEO REELS */}
      {activeSubTab === 'videos' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Video Player (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 bg-black aspect-video shadow-2xl">
              <img
                src={selectedVideo.thumbnail}
                alt={selectedVideo.title}
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-between p-6">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded bg-red-600/90 text-white font-bold text-xs uppercase tracking-wider">
                    {selectedVideo.format}
                  </span>
                  <span className="text-xs text-slate-300 font-mono">
                    Duration: {selectedVideo.duration}
                  </span>
                </div>

                <div className="text-center">
                  <button 
                    onClick={() => alert(`Playing documentary reel: ${selectedVideo.title}`)}
                    className="w-16 h-16 rounded-full bg-cyan-500/90 hover:bg-cyan-400 text-slate-950 flex items-center justify-center mx-auto shadow-lg shadow-cyan-500/40 transition transform hover:scale-110"
                  >
                    <Play className="w-8 h-8 fill-slate-950 ml-1" />
                  </button>
                  <p className="text-xs text-cyan-200 mt-2 font-medium">Click to Launch 4K Stream</p>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white font-display">
                    {selectedVideo.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                    {selectedVideo.summary}
                  </p>
                </div>
              </div>
            </div>

            {/* Video Chapters List */}
            <div className="bg-slate-900/60 p-5 rounded-2xl border border-cyan-500/20 glass-panel space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Interactive Chapters</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedVideo.chapters.map((ch, idx) => (
                  <button
                    key={idx}
                    onClick={() => alert(`Jumping to chapter: ${ch.title} at ${ch.time}`)}
                    className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900 flex items-center justify-between text-left group transition"
                  >
                    <span className="text-xs font-medium text-slate-200 group-hover:text-cyan-300 truncate mr-2">
                      {ch.title}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded">
                      {ch.time}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Documentary Playlist (1 col) */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              MoES Polar Outreach Series
            </h4>

            <div className="space-y-3">
              {MEDIA_DATA.videos.map((vid) => {
                const isSelected = selectedVideo.id === vid.id;
                return (
                  <div
                    key={vid.id}
                    onClick={() => setSelectedVideo(vid)}
                    className={`p-3 rounded-2xl border cursor-pointer transition flex items-start space-x-3 ${
                      isSelected
                        ? 'bg-cyan-950/80 border-cyan-500/60 shadow-lg shadow-cyan-950'
                        : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-850'
                    }`}
                  >
                    <img
                      src={vid.thumbnail}
                      alt={vid.title}
                      className="w-24 h-16 rounded-xl object-cover flex-shrink-0"
                    />
                    <div className="space-y-1">
                      <h5 className="text-xs font-bold text-white line-clamp-1">
                        {vid.title}
                      </h5>
                      <div className="text-[10px] text-slate-400">
                        {vid.producer}
                      </div>
                      <div className="text-[10px] font-mono text-cyan-400 flex items-center space-x-2">
                        <span>{vid.duration}</span>
                        <span>•</span>
                        <span>{vid.views.toLocaleString()} views</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      )}

      {/* SUB-TAB 3: POLAR SOUNDSCAPES STUDIO */}
      {activeSubTab === 'soundscapes' && (
        <div className="space-y-6">
          
          {/* Audio Console Showcase */}
          <div className="bg-gradient-to-br from-slate-900 via-[#061426] to-[#040d1a] p-6 sm:p-8 rounded-2xl border border-cyan-500/40 shadow-2xl glass-panel space-y-6">
            
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-cyan-500/20 pb-4">
              <div>
                <div className="flex items-center space-x-2">
                  <Disc className="w-5 h-5 text-cyan-400 animate-spin-slow" />
                  <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest font-mono">
                    High-Latitude Acoustic Hydrophone Capture
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                  {activeSound.title}
                </h3>
                <p className="text-xs text-slate-300 mt-0.5">
                  {activeSound.location} • Recorded by {activeSound.recordedBy}
                </p>
              </div>

              {/* Play/Pause Control */}
              <button
                onClick={() => setIsPlayingSound(!isPlayingSound)}
                className="flex items-center space-x-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-sm shadow-lg shadow-cyan-500/30 transition transform hover:scale-105 self-start md:self-auto"
              >
                {isPlayingSound ? (
                  <>
                    <Pause className="w-5 h-5 fill-slate-950" />
                    <span>PAUSE SOUNDSCAPE</span>
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5 fill-slate-950" />
                    <span>PLAY SOUNDSCAPE</span>
                  </>
                )}
              </button>
            </div>

            {/* Dynamic Interactive Waveform Visualizer */}
            <div className="bg-slate-950/80 p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono">Frequency: {activeSound.frequencyRange}</span>
                <span className="font-mono text-cyan-300 font-bold">{activeSound.duration}</span>
              </div>

              {/* Animated Equalizer Bar Spectrum */}
              <div className="h-28 flex items-end justify-between gap-1.5 px-2">
                {activeSound.samplePoints.map((val, idx) => {
                  const animatedHeight = isPlayingSound
                    ? Math.max(15, Math.min(100, val + Math.sin(idx + audioProgress * 0.2) * 25))
                    : val;

                  return (
                    <div
                      key={idx}
                      className="flex-1 bg-gradient-to-t from-cyan-600 via-cyan-400 to-emerald-400 rounded-t-sm transition-all duration-150"
                      style={{ height: `${animatedHeight}%`, opacity: isPlayingSound ? 0.95 : 0.4 }}
                    ></div>
                  );
                })}
              </div>

              {/* Seekbar */}
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden cursor-pointer" onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                setAudioProgress((clickX / rect.width) * 100);
              }}>
                <div
                  className="bg-cyan-400 h-full rounded-full transition-all duration-200"
                  style={{ width: `${audioProgress}%` }}
                ></div>
              </div>
            </div>

            {/* Sound Description */}
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950/40 p-4 rounded-xl border border-slate-800">
              {activeSound.description}
            </p>

          </div>

          {/* Soundscapes Selector Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SOUNDSCAPES_DATA.map((snd) => {
              const isSelected = activeSound.id === snd.id;
              return (
                <button
                  key={snd.id}
                  onClick={() => {
                    setActiveSound(snd);
                    setIsPlayingSound(true);
                  }}
                  className={`p-4 rounded-2xl border text-left transition space-y-2 ${
                    isSelected
                      ? 'bg-cyan-950/80 border-cyan-500 shadow-lg shadow-cyan-950 ring-1 ring-cyan-400'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-850'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase text-cyan-400 font-bold">
                      {snd.realm}
                    </span>
                    <Volume2 className={`w-4 h-4 ${isSelected ? 'text-cyan-300 animate-pulse' : 'text-slate-500'}`} />
                  </div>
                  <div className="text-xs font-bold text-white line-clamp-2">
                    {snd.title}
                  </div>
                  <div className="text-[10px] text-slate-400">
                    {snd.duration} • {snd.frequencyRange.split(' ')[0]}
                  </div>
                </button>
              );
            })}
          </div>

        </div>
      )}

      {/* SUB-TAB 4: OUTREACH & PRESS KITS */}
      {activeSubTab === 'kits' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MEDIA_DATA.outreachKits.map((kit) => (
            <div
              key={kit.id}
              className="bg-slate-900/60 border border-cyan-500/20 rounded-2xl p-6 glass-panel flex flex-col justify-between space-y-4 group hover:border-cyan-500/50 transition"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 font-mono font-bold">
                    {kit.fileType}
                  </span>
                  <span className="text-slate-400 font-mono">{kit.fileSize}</span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {kit.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {kit.description}
                </p>

                <div className="text-[11px] text-slate-400 font-medium">
                  Target: <strong className="text-slate-200">{kit.targetAudience}</strong>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[10px] text-emerald-400 font-mono font-semibold">
                  {kit.downloads.toLocaleString()} downloads
                </span>
                <button
                  onClick={() => alert(`Downloading ${kit.title} (${kit.fileSize})`)}
                  className="px-3.5 py-1.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs flex items-center space-x-1.5 transition shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Kit</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Photo Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 overflow-y-auto p-4 flex items-center justify-center bg-black/90 backdrop-blur-md">
          <div className="bg-[#061426] border border-cyan-500/40 rounded-2xl max-w-4xl w-full p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-cyan-500/20 pb-3">
              <div>
                <h3 className="text-base font-bold text-white">{selectedPhoto.title}</h3>
                <p className="text-xs text-slate-400">{selectedPhoto.photographer} • {selectedPhoto.station}</p>
              </div>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="p-1 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="rounded-xl overflow-hidden max-h-[65vh] flex items-center justify-center bg-black">
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 text-xs pt-2">
              <p className="text-slate-300 max-w-xl">{selectedPhoto.caption}</p>
              <button
                onClick={() => alert(`Downloading high-resolution ${selectedPhoto.resolution} image file.`)}
                className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl flex items-center space-x-2 transition"
              >
                <Download className="w-4 h-4" />
                <span>Download Master ({selectedPhoto.resolution})</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
