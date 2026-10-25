import React, { useState, useRef, useEffect } from 'react';
import { 
  Compass, 
  Search, 
  MapPin, 
  Database, 
  Image as ImageIcon, 
  History, 
  Bot, 
  LineChart, 
  Network, 
  ShieldCheck, 
  Menu, 
  X, 
  Globe2, 
  Sparkles,
  ChevronDown,
  Layers,
  ChevronRight,
  Smartphone,
  QrCode,
  Download,
  CheckCircle2
} from 'lucide-react';
import MobileConnectModal from './MobileConnectModal';
import { usePWAInstall } from '../../hooks/usePWAInstall';

export default function Navbar({ activeTab, setActiveTab, onOpenSearch }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileConnectOpen, setMobileConnectOpen] = useState(false);
  const [lang, setLang] = useState('EN');
  const dropdownRef = useRef(null);

  const { isInstallable, isInstalled, promptInstall } = usePWAInstall();

  // Primary navigation tabs displayed directly in the desktop navbar
  const primaryNavItems = [
    { id: 'overview', label: 'Overview', icon: Compass, badge: null },
    { id: 'map', label: 'Polar Map', icon: Globe2, badge: '5★' },
    { id: 'stations', label: 'Stations', icon: MapPin, badge: '5★' },
    { id: 'datasets', label: 'Datasets', icon: Database, badge: '5★' },
    { id: 'ai', label: 'DhruvAI', icon: Bot, badge: 'AI' },
  ];

  // Secondary navigation items organized inside the dropdown
  const dropdownNavItems = [
    { 
      id: 'visualizer', 
      label: 'Visualizer', 
      desc: 'Interactive climate charts & trends', 
      icon: LineChart, 
      badge: '4★' 
    },
    { 
      id: 'graph', 
      label: 'Knowledge Graph', 
      desc: 'Cross-domain science connections', 
      icon: Network, 
      badge: '4★' 
    },
    { 
      id: 'media', 
      label: 'Media & Audio', 
      desc: 'Polar soundscapes & gallery', 
      icon: ImageIcon, 
      badge: '5★' 
    },
    { 
      id: 'timeline', 
      label: 'Timeline', 
      desc: 'Antarctic & Arctic expedition history', 
      icon: History, 
      badge: '5★' 
    },
    { 
      id: 'admin', 
      label: 'Admin CMS', 
      desc: 'Data verification & approvals', 
      icon: ShieldCheck, 
      badge: 'Auth' 
    },
  ];

  // Check if current active tab belongs to the dropdown
  const activeDropdownItem = dropdownNavItems.find(item => item.id === activeTab);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown and drawer on escape key
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#061325]/95 backdrop-blur-md border-b border-cyan-500/20 shadow-xl">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* Logo & MoES Identity (Responsive for mobile screens) */}
            <div 
              className="flex items-center space-x-2.5 sm:space-x-3.5 cursor-pointer select-none" 
              onClick={() => {
                setActiveTab('overview');
                setMobileMenuOpen(false);
              }}
            >
              <div className="relative flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-moes-600 via-cyan-600 to-moes-900 border border-cyan-400/40 shadow-lg shadow-cyan-500/20 shrink-0">
                <Compass className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-200 animate-spin-slow" />
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full border-2 border-[#061325]"></div>
              </div>
              
              <div className="min-w-0">
                <div className="flex items-center space-x-1.5 sm:space-x-2">
                  <span className="text-lg sm:text-xl font-extrabold tracking-wider text-white font-display">
                    POLARIS
                  </span>
                  <span className="px-1.5 py-0.2 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 text-cyan-300 rounded shrink-0">
                    MoES India
                  </span>
                </div>
                <p className="hidden sm:block text-[11px] text-slate-400 font-medium tracking-tight truncate">
                  Integrated Polar Science & Knowledge Repository
                </p>
              </div>
            </div>

            {/* Desktop Navigation Links (Clean 5 items + 1 Dropdown) */}
            <nav className="hidden lg:flex items-center space-x-1.5">
              {/* Primary Direct Tabs */}
              {primaryNavItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                const isAI = item.id === 'ai';

                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`relative flex items-center space-x-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                      isActive
                        ? 'text-cyan-300 bg-cyan-950/70 border border-cyan-500/40 shadow-sm shadow-cyan-500/20'
                        : isAI
                        ? 'text-purple-300 hover:text-purple-200 hover:bg-purple-950/40 border border-purple-500/20'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${
                      isActive 
                        ? 'text-cyan-400' 
                        : isAI 
                        ? 'text-purple-400' 
                        : 'text-slate-400'
                    }`} />
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className={`text-[9px] px-1 py-0.2 rounded font-mono ${
                        item.badge === 'AI' 
                          ? 'bg-purple-500/20 text-purple-300 border border-purple-400/30'
                          : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                    {isActive && (
                      <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></span>
                    )}
                  </button>
                );
              })}

              {/* Dropdown Menu Trigger Button */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setDropdownOpen(prev => !prev)}
                  className={`relative flex items-center space-x-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                    activeDropdownItem
                      ? 'text-cyan-300 bg-cyan-950/70 border border-cyan-500/40 shadow-sm shadow-cyan-500/20'
                      : dropdownOpen
                      ? 'text-white bg-slate-800/80 border border-cyan-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50 border border-transparent'
                  }`}
                  aria-expanded={dropdownOpen}
                  aria-haspopup="true"
                >
                  <Layers className={`w-3.5 h-3.5 ${activeDropdownItem ? 'text-cyan-400' : 'text-slate-400'}`} />
                  <span>
                    {activeDropdownItem ? activeDropdownItem.label : 'More Tools'}
                  </span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    dropdownOpen ? 'rotate-180 text-cyan-400' : 'text-slate-400'
                  }`} />
                  
                  {activeDropdownItem && (
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                  )}
                  {activeDropdownItem && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></span>
                  )}
                </button>

                {/* Dropdown Card */}
                {dropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-80 rounded-2xl bg-[#07162b]/95 backdrop-blur-xl border border-cyan-500/30 shadow-2xl shadow-black/70 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="px-3 py-1.5 flex items-center justify-between border-b border-cyan-500/10 mb-1">
                      <span className="text-[10px] font-bold tracking-wider text-cyan-400/80 uppercase">
                        Polar Tools & Modules
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono">
                        {dropdownNavItems.length} Available
                      </span>
                    </div>

                    <div className="space-y-1">
                      {dropdownNavItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeTab === item.id;
                        const isAdmin = item.id === 'admin';

                        return (
                          <button
                            key={item.id}
                            onClick={() => {
                              setActiveTab(item.id);
                              setDropdownOpen(false);
                            }}
                            className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left transition-all duration-150 group ${
                              isActive
                                ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/10'
                                : 'text-slate-300 hover:text-white hover:bg-slate-800/50 border border-transparent'
                            }`}
                          >
                            <div className="flex items-center space-x-3 min-w-0">
                              <div className={`flex items-center justify-center w-8 h-8 rounded-lg shrink-0 transition-colors ${
                                isActive
                                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                                  : isAdmin
                                  ? 'bg-amber-500/10 text-amber-400 group-hover:bg-amber-500/20'
                                  : 'bg-slate-800/80 text-slate-400 group-hover:text-cyan-300 group-hover:bg-cyan-950/40'
                              }`}>
                                <Icon className="w-4 h-4" />
                              </div>
                              <div className="truncate">
                                <div className="flex items-center space-x-2">
                                  <span className="text-xs font-semibold">{item.label}</span>
                                  {item.badge && (
                                    <span className={`text-[9px] px-1.5 py-0.2 rounded font-mono ${
                                      item.badge === 'Auth'
                                        ? 'bg-amber-500/20 text-amber-300 border border-amber-400/30'
                                        : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                                    }`}>
                                      {item.badge}
                                    </span>
                                  )}
                                </div>
                                <p className="text-[11px] text-slate-400 truncate mt-0.5">
                                  {item.desc}
                                </p>
                              </div>
                            </div>

                            <ChevronRight className={`w-3.5 h-3.5 ml-2 shrink-0 transition-transform ${
                              isActive ? 'text-cyan-400' : 'text-slate-600 group-hover:text-slate-300 group-hover:translate-x-0.5'
                            }`} />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Desktop Action buttons (Install App, Mobile Connect, Search & Language) */}
            <div className="hidden md:flex items-center space-x-2.5">
              <button
                onClick={() => {
                  if (isInstallable) {
                    promptInstall();
                  } else {
                    setMobileConnectOpen(true);
                  }
                }}
                className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg border text-xs font-semibold transition shadow-sm group ${
                  isInstalled
                    ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300'
                    : 'bg-cyan-950/80 hover:bg-cyan-900/90 border-cyan-500/50 hover:border-cyan-400 text-cyan-300'
                }`}
                title="Install POLARIS on phone or desktop"
              >
                {isInstalled ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Download className="w-3.5 h-3.5 text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
                )}
                <span>{isInstalled ? 'App Installed' : 'Install App'}</span>
                {!isInstalled && (
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                )}
              </button>

              <button
                onClick={onOpenSearch}
                className="flex items-center space-x-2 px-3.5 py-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-cyan-500/30 hover:border-cyan-400/60 text-slate-300 hover:text-white text-xs transition shadow-inner group"
              >
                <Search className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>Search Portal...</span>
                <kbd className="hidden sm:inline-block text-[10px] bg-slate-800 px-1.5 py-0.5 rounded text-slate-400 border border-slate-700">
                  Ctrl+K
                </kbd>
              </button>

              <button
                onClick={() => setLang(lang === 'EN' ? 'हिन्दी' : 'EN')}
                className="flex items-center space-x-1.5 px-3 py-2 rounded-lg bg-slate-900/60 hover:bg-slate-800 border border-slate-700 text-xs text-slate-300 hover:text-white transition"
                title="Toggle Language"
              >
                <Globe2 className="w-3.5 h-3.5 text-cyan-400" />
                <span className="font-semibold text-[11px]">{lang}</span>
              </button>
            </div>

            {/* Mobile Header Buttons (Touch-friendly 44px) */}
            <div className="flex lg:hidden items-center space-x-2">
              <button
                onClick={() => {
                  if (isInstallable) {
                    promptInstall();
                  } else {
                    setMobileConnectOpen(true);
                  }
                }}
                className={`p-2.5 rounded-xl border active:scale-95 transition ${
                  isInstalled
                    ? 'bg-emerald-950/80 border-emerald-500/40 text-emerald-300'
                    : 'bg-cyan-950/80 border-cyan-500/40 text-cyan-300'
                }`}
                aria-label="Install App"
                title="Install App"
              >
                {isInstalled ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Download className="w-4 h-4 text-cyan-400 animate-bounce" />
                )}
              </button>
              <button
                onClick={onOpenSearch}
                className="p-2.5 rounded-xl bg-slate-900/90 border border-cyan-500/30 text-cyan-400 active:scale-95 transition"
                aria-label="Search Portal"
              >
                <Search className="w-4 h-4" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-slate-300 active:scale-95 transition"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-300" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Fullscreen/Slide Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#061325]/98 border-b border-cyan-500/30 px-4 pt-3 pb-6 space-y-4 max-h-[calc(100vh-4rem)] overflow-y-auto animate-in slide-in-from-top-2 duration-200">
            
            {/* Mobile Search Button */}
            <button
              onClick={() => {
                onOpenSearch();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-slate-900 border border-cyan-500/40 text-slate-300 text-xs font-medium"
            >
              <div className="flex items-center space-x-2">
                <Search className="w-4 h-4 text-cyan-400" />
                <span>Search stations, ice cores, datasets...</span>
              </div>
              <span className="text-[10px] text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-500/30">Ctrl+K</span>
            </button>

            {/* Mobile Install App Card */}
            <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-950/80 via-[#0a1e3a] to-blue-950/80 border border-cyan-500/40 flex items-center justify-between shadow-lg">
              <div className="flex items-center space-x-2.5 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-[#040D1A] border border-cyan-400/40 p-1 flex items-center justify-center shrink-0">
                  <img src="./icons/icon.svg" alt="POLARIS" className="w-full h-full object-contain" />
                </div>
                <div className="truncate">
                  <div className="text-xs font-bold text-white flex items-center space-x-1.5">
                    <span>POLARIS Mobile App</span>
                    <span className="text-[9px] bg-cyan-500/20 text-cyan-300 px-1.5 py-0.2 rounded font-mono">PWA</span>
                  </div>
                  <p className="text-[10px] text-slate-300 truncate">Install to phone home screen</p>
                </div>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (isInstallable) {
                    promptInstall();
                  } else {
                    setMobileConnectOpen(true);
                  }
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold shadow flex items-center space-x-1 shrink-0 ${
                  isInstalled
                    ? 'bg-emerald-600/30 text-emerald-300 border border-emerald-500/30'
                    : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                }`}
              >
                {isInstalled ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Download className="w-3.5 h-3.5" />}
                <span>{isInstalled ? 'Installed' : 'Install'}</span>
              </button>
            </div>

            {/* Section 1: Core Modules */}
            <div>
              <div className="text-[10px] font-bold text-cyan-400 uppercase px-1 mb-2 tracking-wider flex items-center justify-between">
                <span>Core Explorers</span>
                <span className="text-slate-500 font-mono">5 Primary</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {primaryNavItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  const isAI = item.id === 'ai';
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveTab(item.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`flex items-center space-x-2 px-3 py-2.5 rounded-xl text-xs font-semibold transition ${
                        isActive
                          ? 'text-cyan-300 bg-cyan-950/80 border border-cyan-500/50 shadow-sm'
                          : isAI
                          ? 'text-purple-300 bg-purple-950/30 border border-purple-500/30'
                          : 'text-slate-300 bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800'
                      }`}
                    >
                      <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-cyan-400' : isAI ? 'text-purple-400' : 'text-slate-400'}`} />
                      <span className="truncate">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Section 2: More Tools & Analytics */}
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase px-1 mb-2 tracking-wider flex items-center justify-between">
                <span>Analytics, Media & Governance</span>
                <span className="text-slate-500 font-mono">5 Modules</span>
              </div>
              <div className="space-y-1.5">
                {dropdownNavItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveTab(item.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left transition ${
                        isActive
                          ? 'text-cyan-300 bg-cyan-950/80 border border-cyan-500/50 shadow-sm'
                          : 'text-slate-300 bg-slate-900/40 hover:bg-slate-800 border border-slate-800/60'
                      }`}
                    >
                      <div className="flex items-center space-x-2.5">
                        <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                        <div>
                          <div className="text-xs font-semibold">{item.label}</div>
                          <div className="text-[10px] text-slate-400">{item.desc}</div>
                        </div>
                      </div>
                      {item.badge && (
                        <span className="text-[9px] px-1.5 py-0.5 rounded font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                          {item.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Language Selection */}
            <div className="pt-2 border-t border-slate-800 flex justify-between items-center px-1">
              <span className="text-xs text-slate-400">Portal Language</span>
              <button
                onClick={() => setLang(lang === 'EN' ? 'हिन्दी' : 'EN')}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-cyan-300"
              >
                <Globe2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>{lang === 'EN' ? 'English (EN)' : 'हिन्दी (HI)'}</span>
              </button>
            </div>

          </div>
        )}
      </header>

      {/* Mobile Bottom Quick-Nav Bar (Thumb-friendly Navigation for Phones) */}
      <nav 
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#061325]/95 backdrop-blur-xl border-t border-cyan-500/20 py-1.5 px-2 flex items-center justify-around shadow-2xl"
        aria-label="Mobile Bottom Navigation"
      >
        {[
          { id: 'overview', label: 'Home', icon: Compass },
          { id: 'map', label: 'Map', icon: Globe2 },
          { id: 'stations', label: 'Stations', icon: MapPin },
          { id: 'datasets', label: 'Data', icon: Database },
          { id: 'ai', label: 'DhruvAI', icon: Bot, isSpecial: true },
        ].map((btn) => {
          const Icon = btn.icon;
          const isActive = activeTab === btn.id;

          return (
            <button
              key={btn.id}
              onClick={() => {
                setActiveTab(btn.id);
                setMobileMenuOpen(false);
              }}
              className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all duration-150 ${
                isActive 
                  ? 'text-cyan-300 bg-cyan-950/60 font-bold scale-105' 
                  : btn.isSpecial
                  ? 'text-purple-300 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 ${
                  isActive 
                    ? 'text-cyan-400' 
                    : btn.isSpecial 
                    ? 'text-purple-400' 
                    : 'text-slate-400'
                }`} />
                {isActive && (
                  <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
                )}
              </div>
              <span className="text-[10px] mt-0.5 font-medium tracking-tight">
                {btn.label}
              </span>
            </button>
          );
        })}

        {/* 'More' Button to toggle full drawer */}
        <button
          onClick={() => setMobileMenuOpen(prev => !prev)}
          className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all ${
            mobileMenuOpen 
              ? 'text-cyan-300 bg-cyan-950/60 font-bold scale-105' 
              : activeDropdownItem
              ? 'text-cyan-400 font-bold'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <div className="relative">
            <Layers className="w-5 h-5" />
            {activeDropdownItem && (
              <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            )}
          </div>
          <span className="text-[10px] mt-0.5 font-medium tracking-tight">
            {activeDropdownItem ? activeDropdownItem.label : 'More'}
          </span>
        </button>
      </nav>

      {/* Mobile Connect / Cross-Device Modal */}
      <MobileConnectModal 
        isOpen={mobileConnectOpen} 
        onClose={() => setMobileConnectOpen(false)} 
      />
    </>
  );
}
