import React, { useState, useEffect } from 'react';
import { 
  Smartphone, 
  Wifi, 
  Globe, 
  QrCode, 
  Copy, 
  Check, 
  ExternalLink, 
  X, 
  ShieldAlert, 
  Share2, 
  Radio, 
  Sparkles,
  Download,
  CheckCircle2,
  Cloud,
  Github,
  Zap,
  Info,
  Layers,
  ArrowRight
} from 'lucide-react';
import { usePWAInstall } from '../../hooks/usePWAInstall';

export default function MobileConnectModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState('');
  const [activeTab, setActiveTab] = useState('pwa'); // 'pwa' | 'cloud' | 'wifi'
  const [localIp, setLocalIp] = useState('10.106.91.50');
  const [port, setPort] = useState('3000');
  const [installStatus, setInstallStatus] = useState(null);

  const { isInstallable, isInstalled, isIOS, isAndroid, promptInstall } = usePWAInstall();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentHost = window.location.hostname;
      const currentPort = window.location.port || '3000';
      setPort(currentPort);
      if (currentHost && currentHost !== 'localhost' && currentHost !== '127.0.0.1') {
        setLocalIp(currentHost);
      }
    }
  }, []);

  if (!isOpen) return null;

  const currentLocalUrl = typeof window !== 'undefined' ? window.location.href : `http://${localIp}:${port}`;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(currentLocalUrl)}&bgcolor=061325&color=38bdf8&margin=10`;

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(''), 2500);
  };

  const handleTriggerInstall = async () => {
    const success = await promptInstall();
    if (success) {
      setInstallStatus('installed');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-[#07162b] border border-cyan-500/40 rounded-2xl shadow-2xl shadow-cyan-950/70 overflow-hidden text-slate-100 animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-cyan-500/20 bg-gradient-to-r from-cyan-950/70 via-[#0a1e3a] to-blue-950/70 shrink-0">
          <div className="flex items-center space-x-3">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/30 to-blue-600/30 text-cyan-300 border border-cyan-400/40 shadow-inner">
              <Smartphone className="w-5 h-5 text-cyan-300" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
            </div>
            <div>
              <h3 className="text-base font-bold text-white flex items-center space-x-2">
                <span>Install & Mobile Experience</span>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                  Open Source PWA
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Install as a standalone phone app or host live 24/7 without laptop
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mode Selector Tabs */}
        <div className="flex border-b border-cyan-500/20 bg-[#051122] shrink-0 text-xs">
          <button
            onClick={() => setActiveTab('pwa')}
            className={`flex-1 py-3 px-2 sm:px-3 font-semibold flex items-center justify-center space-x-1.5 sm:space-x-2 transition border-b-2 ${
              activeTab === 'pwa'
                ? 'border-cyan-400 text-cyan-300 bg-cyan-950/50 shadow-inner'
                : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'
            }`}
          >
            <Download className="w-3.5 h-3.5 text-cyan-400" />
            <span>1. Install App (Phone)</span>
          </button>
          
          <button
            onClick={() => setActiveTab('cloud')}
            className={`flex-1 py-3 px-2 sm:px-3 font-semibold flex items-center justify-center space-x-1.5 sm:space-x-2 transition border-b-2 ${
              activeTab === 'cloud'
                ? 'border-emerald-400 text-emerald-300 bg-emerald-950/40 shadow-inner'
                : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'
            }`}
          >
            <Cloud className="w-3.5 h-3.5 text-emerald-400" />
            <span>2. 24/7 Free Live Web</span>
          </button>

          <button
            onClick={() => setActiveTab('wifi')}
            className={`flex-1 py-3 px-2 sm:px-3 font-semibold flex items-center justify-center space-x-1.5 sm:space-x-2 transition border-b-2 ${
              activeTab === 'wifi'
                ? 'border-purple-400 text-purple-300 bg-purple-950/40 shadow-inner'
                : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'
            }`}
          >
            <Wifi className="w-3.5 h-3.5 text-purple-400" />
            <span>3. Local Wi-Fi / Dev</span>
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="p-5 overflow-y-auto space-y-4">

          {/* TAB 1: INSTALL AS PWA APP ON PHONE */}
          {activeTab === 'pwa' && (
            <div className="space-y-4">
              
              {/* App Status Banner */}
              {isInstalled || installStatus === 'installed' ? (
                <div className="bg-emerald-950/40 border border-emerald-500/40 rounded-xl p-4 flex items-center space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                  <div>
                    <h4 className="font-bold text-emerald-200 text-sm">POLARIS is Installed!</h4>
                    <p className="text-xs text-slate-300">
                      You are running in standalone native app mode with offline storage enabled.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="bg-gradient-to-r from-cyan-950/50 via-[#071f3a] to-blue-950/50 border border-cyan-500/40 rounded-xl p-4 space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-xl bg-[#040D1A] border border-cyan-400/40 p-1 flex items-center justify-center shadow-lg shrink-0">
                        <img src="./icons/icon.svg" alt="POLARIS Icon" className="w-full h-full object-contain" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white flex items-center space-x-2">
                          <span>POLARIS Mobile App</span>
                          <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded font-mono border border-cyan-400/30">
                            PWA Ready
                          </span>
                        </h4>
                        <p className="text-xs text-slate-300 mt-0.5">
                          Install directly to your phone's home screen. No App Store required!
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* One-click native install button if browser supports it */}
                  {isInstallable && (
                    <button
                      onClick={handleTriggerInstall}
                      className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm shadow-lg shadow-cyan-950/60 flex items-center justify-center space-x-2 active:scale-98 transition group"
                    >
                      <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                      <span>Install POLARIS on This Device</span>
                    </button>
                  )}
                </div>
              )}

              {/* Instructions by Device */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                
                {/* Android Guide */}
                <div className={`p-4 rounded-xl border space-y-2.5 transition ${
                  isAndroid 
                    ? 'bg-cyan-950/30 border-cyan-400 shadow-md shadow-cyan-950/50' 
                    : 'bg-[#051122] border-slate-800'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-100 flex items-center space-x-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                      <span>Android (Chrome / Samsung)</span>
                    </span>
                    {isAndroid && (
                      <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded font-mono">
                        Your Device
                      </span>
                    )}
                  </div>
                  <ol className="list-decimal list-inside space-y-1.5 text-[11px] text-slate-300">
                    <li>Open this URL in <strong className="text-white">Google Chrome</strong>.</li>
                    <li>Tap the <strong className="text-white">Three Dots menu (⋮)</strong> top-right.</li>
                    <li>Select <strong className="text-cyan-300">"Install app"</strong> or <strong className="text-cyan-300">"Add to Home Screen"</strong>.</li>
                    <li>Tap <strong className="text-emerald-300">Install</strong>. The POLARIS icon appears on your home screen!</li>
                  </ol>
                </div>

                {/* iPhone / iPad Guide */}
                <div className={`p-4 rounded-xl border space-y-2.5 transition ${
                  isIOS 
                    ? 'bg-cyan-950/30 border-cyan-400 shadow-md shadow-cyan-950/50' 
                    : 'bg-[#051122] border-slate-800'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-100 flex items-center space-x-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                      <span>Apple iPhone (Safari)</span>
                    </span>
                    {isIOS && (
                      <span className="text-[9px] bg-cyan-500/20 text-cyan-300 px-1.5 py-0.5 rounded font-mono">
                        Your Device
                      </span>
                    )}
                  </div>
                  <ol className="list-decimal list-inside space-y-1.5 text-[11px] text-slate-300">
                    <li>Open this link in <strong className="text-white">Safari</strong>.</li>
                    <li>Tap the <strong className="text-white">Share button</strong> (square with up arrow <span className="font-mono text-cyan-300">⎋</span>).</li>
                    <li>Scroll down and tap <strong className="text-cyan-300">"Add to Home Screen"</strong>.</li>
                    <li>Tap <strong className="text-emerald-300">Add</strong>. Launches in fullscreen native mode without browser bars!</li>
                  </ol>
                </div>

              </div>

              {/* What makes it a full native app */}
              <div className="bg-[#051122] p-3 rounded-xl border border-slate-800 grid grid-cols-3 gap-2 text-center text-[11px]">
                <div className="p-1.5">
                  <span className="font-bold text-cyan-300 block mb-0.5">⚡ Instant Launch</span>
                  <span className="text-slate-400 text-[10px]">Loads like an app from home screen</span>
                </div>
                <div className="p-1.5 border-x border-slate-800">
                  <span className="font-bold text-emerald-300 block mb-0.5">🛡️ Offline Ready</span>
                  <span className="text-slate-400 text-[10px]">Caches stations & map for offline use</span>
                </div>
                <div className="p-1.5">
                  <span className="font-bold text-amber-300 block mb-0.5">📱 Full Screen</span>
                  <span className="text-slate-400 text-[10px]">No browser URL address bars</span>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: 24/7 FREE CLOUD HOSTING (NO LAPTOP NEEDED) */}
          {activeTab === 'cloud' && (
            <div className="space-y-4">
              
              <div className="bg-emerald-950/30 border border-emerald-500/30 rounded-xl p-3.5 flex items-start space-x-3">
                <Cloud className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <p className="font-semibold text-emerald-200">
                    Host on the Internet 24/7 (Laptop Can Be Turned Off!)
                  </p>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    When you run locally on your laptop, your phone only connects if your laptop is awake on the same Wi-Fi. 
                    Deploying to the cloud gives you a <strong>permanent public link</strong> that anyone on any phone or network can open 24/7!
                  </p>
                </div>
              </div>

              {/* Method 1: Vercel (Fastest & 100% Free) */}
              <div className="bg-[#051122] p-4 rounded-xl border border-emerald-500/30 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                    <span className="text-xs font-bold text-white">Recommended: Deploy to Vercel (1-Click Free)</span>
                  </div>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-2 py-0.5 rounded font-mono">
                    Instant HTTPS
                  </span>
                </div>
                <p className="text-xs text-slate-300">
                  Vercel automatically hosts your GitHub repo 24/7 with zero configuration. You get an instant URL like <code className="text-emerald-300 font-mono">moes-polar-portal.vercel.app</code>!
                </p>
                
                <div className="space-y-1.5 text-xs text-slate-300 bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                  <div className="font-semibold text-cyan-300">3 Simple Steps:</div>
                  <ol className="list-decimal list-inside space-y-1 text-[11px] text-slate-300">
                    <li>Go to <a href="https://vercel.com" target="_blank" rel="noreferrer" className="text-cyan-400 underline font-semibold">vercel.com</a> and sign in with GitHub.</li>
                    <li>Click <strong className="text-white">"Add New Project"</strong> and select <code className="text-cyan-300 font-mono">Krishna4047/moes-polar-portal</code>.</li>
                    <li>Click <strong className="text-emerald-300">Deploy</strong>. Within 30 seconds, your site is permanently live worldwide!</li>
                  </ol>
                </div>
              </div>

              {/* Method 2: GitHub Pages */}
              <div className="bg-[#051122] p-4 rounded-xl border border-slate-800 space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Github className="w-4 h-4 text-purple-400" />
                    <span className="text-xs font-bold text-slate-200">GitHub Pages (Automated Workflow)</span>
                  </div>
                  <span className="text-[10px] text-purple-300 bg-purple-950/60 border border-purple-500/30 px-2 py-0.5 rounded font-mono">
                    Free Built-in
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  We've configured GitHub Actions (<code className="text-purple-300 font-mono">.github/workflows/deploy.yml</code>) so every time you push code to GitHub, it automatically publishes to:
                </p>
                <div className="flex items-center space-x-1.5">
                  <code className="w-full bg-[#081a33] border border-purple-500/30 rounded-lg px-2.5 py-1.5 text-xs font-mono text-purple-300 truncate">
                    https://krishna4047.github.io/moes-polar-portal/
                  </code>
                  <button
                    onClick={() => handleCopy('https://krishna4047.github.io/moes-polar-portal/', 'ghpages')}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-purple-600 hover:bg-purple-500 text-white shrink-0"
                  >
                    {copied === 'ghpages' ? 'Copied' : 'Copy'}
                  </button>
                </div>
              </div>

              {/* Git push helper */}
              <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800 text-[11px] space-y-1.5">
                <span className="font-semibold text-slate-300 flex items-center space-x-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span>How to push the latest PWA updates to your GitHub:</span>
                </span>
                <div className="flex items-center space-x-1.5">
                  <code className="w-full bg-[#061325] border border-slate-700 rounded-lg px-2.5 py-1 text-xs font-mono text-cyan-300">
                    git add . && git commit -m "Add PWA and 24/7 deployment" && git push origin main
                  </code>
                  <button
                    onClick={() => handleCopy('git add . && git commit -m "Add PWA and 24/7 deployment" && git push origin main', 'gitcmd')}
                    className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 shrink-0"
                  >
                    {copied === 'gitcmd' ? 'Copied' : 'Copy'}
                  </button>
                </div>
              </div>

            </div>
          )}

          {/* TAB 3: LOCAL WI-FI / HOTSPOT TESTING */}
          {activeTab === 'wifi' && (
            <div className="space-y-4">
              <div className="bg-cyan-950/30 border border-cyan-500/30 rounded-xl p-3.5 flex items-start space-x-3">
                <Radio className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <p className="font-semibold text-cyan-200">
                    Testing locally right now on your current Wi-Fi
                  </p>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    Useful while actively developing on your laptop. Scan this QR code or enter the IP to see your laptop's live dev server.
                  </p>
                </div>
              </div>

              {/* QR Code Container */}
              <div className="flex flex-col sm:flex-row items-center gap-4 bg-[#051122] p-4 rounded-xl border border-cyan-500/20">
                <div className="relative group p-2 bg-[#061325] rounded-xl border border-cyan-400/40 shadow-lg shadow-cyan-950/50 shrink-0">
                  <img 
                    src={qrCodeUrl} 
                    alt="Scan with phone" 
                    className="w-32 h-32 rounded-lg object-contain"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity text-[11px] text-cyan-300 font-semibold pointer-events-none">
                    Scan with Phone
                  </div>
                </div>

                <div className="flex-1 w-full space-y-2">
                  <label className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                    Current Device URL
                  </label>
                  <div className="flex items-center space-x-1.5">
                    <input 
                      type="text" 
                      value={currentLocalUrl}
                      readOnly
                      className="w-full bg-[#081a33] border border-cyan-500/40 rounded-lg px-2.5 py-1.5 text-xs font-mono text-cyan-300"
                    />
                    <button
                      onClick={() => handleCopy(currentLocalUrl, 'url')}
                      className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition shrink-0 ${
                        copied === 'url'
                          ? 'bg-emerald-600 text-white'
                          : 'bg-cyan-600 hover:bg-cyan-500 text-white'
                      }`}
                    >
                      {copied === 'url' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied === 'url' ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                  
                  <div className="bg-slate-900/90 rounded-lg p-2.5 border border-slate-800 text-[11px] text-slate-400 space-y-1">
                    <div className="font-semibold text-slate-300 flex items-center space-x-1.5">
                      <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
                      <span>Note about Wi-Fi connection:</span>
                    </div>
                    <p>
                      This local URL requires your laptop to be ON. To allow anyone to open it anywhere even with your laptop off, switch to the <strong>"24/7 Free Live Web"</strong> tab above!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-cyan-500/20 bg-[#051122] flex items-center justify-between shrink-0">
          <div className="text-[11px] text-slate-400 flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>POLARIS PWA v1.0.0</span>
            <span className="text-slate-600">•</span>
            <span className="text-cyan-400 font-mono">Open Source</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
