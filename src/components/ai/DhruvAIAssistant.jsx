import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  Send, 
  Sparkles, 
  User, 
  Volume2, 
  VolumeX, 
  RotateCcw, 
  HelpCircle, 
  Compass, 
  Database, 
  MapPin, 
  ArrowRight,
  Lightbulb,
  CheckCircle2
} from 'lucide-react';
import { DHRUV_AI_KNOWLEDGE } from '../../data/aiKnowledgeBase';

export default function DhruvAIAssistant({ onNavigateToStation, onNavigateToDataset }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: "Namaste! I am **DhruvAI**, the Ministry of Earth Sciences (MoES) Polar Science & Cryosphere Assistant.\n\nI can assist you with scientific insights into Indian Antarctic expeditions, Arctic Kongsfjorden oceanography, Himalayan glacier health, real-time station telemetry, and open datasets. How may I assist your polar research today?",
      timestamp: 'Just now',
      relatedStation: 'bharati',
      relatedDataset: null
    }
  ]);

  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [ttsEnabled, setTtsEnabled] = useState(false);
  const chatBottomRef = useRef(null);

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = (textToSend) => {
    const query = textToSend || inputQuery;
    if (!query.trim()) return;

    // Add user message
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputQuery('');
    setIsTyping(true);

    // AI Reasoning engine matching query against knowledge base
    setTimeout(() => {
      const qLower = query.toLowerCase();
      let matchedFaq = DHRUV_AI_KNOWLEDGE.faqDatabase.find(faq =>
        faq.keywords.some(k => qLower.includes(k))
      );

      let responseText = "";
      let relatedStation = null;
      let relatedDataset = null;

      if (matchedFaq) {
        responseText = matchedFaq.answer;
        relatedStation = matchedFaq.relatedStation;
        relatedDataset = matchedFaq.relatedDataset;
      } else {
        responseText = `Thank you for your inquiry regarding *"${query}"*.\n\nBased on records at the **National Centre for Polar and Ocean Research (NCPOR)**, MoES operates active multi-disciplinary programs across the White Continent (Bharati & Maitri), High Arctic (Himadri & IndARC), and the Third Pole (Himansh).\n\nKey polar insights for this domain:\n- **Standard Protocols**: All research aligns with the Scientific Committee on Antarctic Research (SCAR) and the Arctic Council observation guidelines.\n- **Data Repositories**: Corresponding sensor series and core logs are archived with registered DOIs in our **Scientific Dataset Explorer**.\n- **Related Mission**: For deep historic telemetry, please inspect the **Expedition Timeline** and **Interactive Polar Map**.`;
      }

      const aiMsg = {
        id: Date.now() + 1,
        sender: 'ai',
        text: responseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        relatedStation,
        relatedDataset
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);

      // Text to Speech simulation
      if (ttsEnabled && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const cleanText = responseText.replace(/[*#]/g, '');
        const utterance = new SpeechSynthesisUtterance(cleanText.slice(0, 200));
        window.speechSynthesis.speak(utterance);
      }
    }, 800);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: 1,
        sender: 'ai',
        text: "Chat history cleared. What polar science or expedition questions would you like to explore?",
        timestamp: 'Just now',
        relatedStation: null,
        relatedDataset: null
      }
    ]);
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="bg-slate-900/60 p-6 rounded-2xl border border-cyan-500/20 glass-panel flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-400/30 rounded-full">
              ⭐⭐⭐⭐ Core AI Feature
            </span>
            <span className="text-xs text-slate-400">MoES Domain LLM & Knowledge Engine</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-wide mt-1 font-display">
            DhruvAI — Polar Science Conversational Assistant
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            Ask complex questions on Antarctic glaciology, ozone layer chemistry, Arctic monsoon teleconnections, station engineering, and MoES datasets.
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setTtsEnabled(!ttsEnabled)}
            className={`p-2 rounded-xl border text-xs font-semibold flex items-center space-x-1.5 transition ${
              ttsEnabled
                ? 'bg-purple-950/80 border-purple-400 text-purple-300'
                : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-white'
            }`}
            title="Toggle Text-to-Speech"
          >
            {ttsEnabled ? <Volume2 className="w-4 h-4 text-purple-400" /> : <VolumeX className="w-4 h-4" />}
            <span className="text-[11px]">{ttsEnabled ? 'Voice ON' : 'Voice OFF'}</span>
          </button>

          <button
            onClick={handleResetChat}
            className="p-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-400 hover:text-white text-xs transition"
            title="Reset Chat"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Chat Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Suggested Prompts Sidebar (1 col) */}
        <div className="space-y-4">
          <div className="bg-[#061426] p-4 rounded-2xl border border-cyan-500/20 glass-panel space-y-3">
            <div className="flex items-center space-x-2 text-xs font-bold text-cyan-300 uppercase tracking-wider">
              <Lightbulb className="w-4 h-4 text-amber-400" />
              <span>Suggested Inquiries</span>
            </div>
            <p className="text-[11px] text-slate-400">
              Click any verified prompt to query the MoES Polar Knowledge Base:
            </p>

            <div className="space-y-2">
              {DHRUV_AI_KNOWLEDGE.suggestedPrompts.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(p.text)}
                  className="w-full text-left p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900 transition text-xs group"
                >
                  <div className="text-[10px] font-mono text-purple-400 font-semibold">{p.category}</div>
                  <div className="text-slate-200 font-medium group-hover:text-cyan-300 transition-colors mt-0.5 line-clamp-2">
                    {p.text}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Chat Stream Window (3 cols) */}
        <div className="lg:col-span-3 bg-[#061426] border border-cyan-500/30 rounded-2xl shadow-2xl flex flex-col h-[600px] overflow-hidden glass-panel">
          
          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex items-start space-x-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'ai' && (
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-600 to-cyan-500 p-0.5 flex-shrink-0 shadow-md">
                    <div className="w-full h-full bg-[#061426] rounded-[10px] flex items-center justify-center text-cyan-300">
                      <Bot className="w-4 h-4" />
                    </div>
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-tr-none shadow-md'
                      : 'bg-slate-900/90 border border-slate-800 text-slate-200 rounded-tl-none space-y-3'
                  }`}
                >
                  {/* Formatted Text Content */}
                  <div className="whitespace-pre-line">
                    {msg.text}
                  </div>

                  {/* AI Citation Action Badges */}
                  {msg.sender === 'ai' && (msg.relatedStation || msg.relatedDataset) && (
                    <div className="pt-2 border-t border-slate-800 flex flex-wrap gap-2 text-xs">
                      {msg.relatedStation && onNavigateToStation && (
                        <button
                          onClick={() => onNavigateToStation(msg.relatedStation)}
                          className="px-2.5 py-1 rounded-lg bg-cyan-950 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-900 flex items-center space-x-1 font-semibold transition"
                        >
                          <MapPin className="w-3 h-3" />
                          <span>View Station Telemetry ({msg.relatedStation})</span>
                        </button>
                      )}
                      {msg.relatedDataset && onNavigateToDataset && (
                        <button
                          onClick={() => onNavigateToDataset(msg.relatedDataset)}
                          className="px-2.5 py-1 rounded-lg bg-purple-950 border border-purple-500/40 text-purple-300 hover:bg-purple-900 flex items-center space-x-1 font-semibold transition"
                        >
                          <Database className="w-3 h-3" />
                          <span>Inspect Related Dataset</span>
                        </button>
                      )}
                    </div>
                  )}

                  <div className={`text-[10px] font-mono mt-1 ${msg.sender === 'user' ? 'text-cyan-200' : 'text-slate-500'}`}>
                    {msg.timestamp}
                  </div>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-8 h-8 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 flex-shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center space-x-2 text-slate-400 text-xs pl-11">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce"></span>
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.4s]"></span>
                <span className="font-mono text-cyan-300 text-[11px]">DhruvAI is synthesizing MoES polar archives...</span>
              </div>
            )}

            <div ref={chatBottomRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-slate-950/80 border-t border-cyan-500/20">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center space-x-2"
            >
              <input
                type="text"
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                placeholder="Ask DhruvAI about ice cores, ozone hole, Bharati station, IndARC..."
                className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400"
              />
              <button
                type="submit"
                disabled={!inputQuery.trim() || isTyping}
                className="px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-50 text-slate-950 font-bold rounded-xl text-xs flex items-center space-x-1.5 transition shadow-md shadow-cyan-500/20"
              >
                <Send className="w-4 h-4" />
                <span className="hidden sm:inline">Send</span>
              </button>
            </form>
          </div>

        </div>

      </div>

    </div>
  );
}
