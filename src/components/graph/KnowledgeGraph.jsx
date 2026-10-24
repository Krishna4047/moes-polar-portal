import React, { useState, useEffect, useRef } from 'react';
import { 
  Network, 
  Search, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Filter, 
  Info, 
  Sparkles, 
  ChevronRight,
  Maximize2,
  Building,
  MapPin,
  History,
  User,
  Database,
  Compass
} from 'lucide-react';
import { KNOWLEDGE_GRAPH_DATA } from '../../data/knowledgeGraphData';

export default function KnowledgeGraph({ onNavigateToModule }) {
  const canvasRef = useRef(null);
  const [selectedNode, setSelectedNode] = useState(KNOWLEDGE_GRAPH_DATA.nodes[0]);
  const [filterType, setFilterType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [draggedNode, setDraggedNode] = useState(null);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Physics simulation state
  const nodesRef = useRef([]);
  const linksRef = useRef([]);
  const animationFrameRef = useRef(null);

  // Group color mapping
  const groupColors = {
    gov: '#0c8de9',
    institute: '#06b6d4',
    station: '#10b981',
    expedition: '#f59e0b',
    person: '#a855f7',
    discipline: '#ec4899',
    data: '#38bdf8'
  };

  // Initialize node physics positions
  useEffect(() => {
    const width = 800;
    const height = 550;
    
    nodesRef.current = KNOWLEDGE_GRAPH_DATA.nodes.map((n, i) => {
      const angle = (i / KNOWLEDGE_GRAPH_DATA.nodes.length) * Math.PI * 2;
      const radius = 180 + (i % 3) * 60;
      return {
        ...n,
        x: width / 2 + Math.cos(angle) * radius,
        y: height / 2 + Math.sin(angle) * radius,
        vx: 0,
        vy: 0,
        radius: n.type === 'Institution' ? 22 : n.type === 'Station' ? 18 : 14,
        color: groupColors[n.group] || '#38bdf8'
      };
    });

    linksRef.current = KNOWLEDGE_GRAPH_DATA.links.map(l => ({ ...l }));
  }, []);

  // Force-Directed Graph Simulation Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const runSimulation = () => {
      const width = canvas.width;
      const height = canvas.height;
      const nodes = nodesRef.current;
      const links = linksRef.current;

      // 1. Repulsion between all node pairs
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[j].x - nodes[i].x;
          const dy = nodes[j].y - nodes[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          if (dist < 260) {
            const force = (260 - dist) / dist * 0.45;
            nodes[i].vx -= dx * force * 0.05;
            nodes[i].vy -= dy * force * 0.05;
            nodes[j].vx += dx * force * 0.05;
            nodes[j].vy += dy * force * 0.05;
          }
        }
      }

      // 2. Spring force along links
      links.forEach(link => {
        const source = nodes.find(n => n.id === link.source);
        const target = nodes.find(n => n.id === link.target);
        if (source && target) {
          const dx = target.x - source.x;
          const dy = target.y - source.y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          const desiredDist = 110;
          const force = (dist - desiredDist) * 0.015;
          
          source.vx += (dx / dist) * force;
          source.vy += (dy / dist) * force;
          target.vx -= (dx / dist) * force;
          target.vy -= (dy / dist) * force;
        }
      });

      // 3. Center gravity & damping
      nodes.forEach(node => {
        if (node !== draggedNode) {
          const dx = width / 2 - node.x;
          const dy = height / 2 - node.y;
          node.vx += dx * 0.003;
          node.vy += dy * 0.003;

          node.vx *= 0.86;
          node.vy *= 0.86;

          node.x += node.vx;
          node.y += node.vy;

          // Constrain within bounds
          node.x = Math.max(40, Math.min(width - 40, node.x));
          node.y = Math.max(40, Math.min(height - 40, node.y));
        }
      });

      // 4. Render Canvas
      ctx.clearRect(0, 0, width, height);
      ctx.save();

      // Pan & Zoom
      ctx.translate(panOffset.x, panOffset.y);
      ctx.scale(zoomLevel, zoomLevel);

      // Draw Links
      links.forEach(link => {
        const source = nodes.find(n => n.id === link.source);
        const target = nodes.find(n => n.id === link.target);
        if (source && target) {
          const isHighlighted = selectedNode && (source.id === selectedNode.id || target.id === selectedNode.id);
          
          ctx.beginPath();
          ctx.moveTo(source.x, source.y);
          ctx.lineTo(target.x, target.y);
          ctx.strokeStyle = isHighlighted ? 'rgba(56, 189, 248, 0.85)' : 'rgba(51, 65, 85, 0.4)';
          ctx.lineWidth = isHighlighted ? 2.5 : 1;
          ctx.stroke();

          // Draw relationship label if highlighted
          if (isHighlighted) {
            const midX = (source.x + target.x) / 2;
            const midY = (source.y + target.y) / 2;
            ctx.fillStyle = '#38bdf8';
            ctx.font = '10px JetBrains Mono';
            ctx.fillText(link.relationship, midX, midY - 4);
          }
        }
      });

      // Draw Nodes
      nodes.forEach(node => {
        const isSelected = selectedNode && selectedNode.id === node.id;
        const matchesFilter = filterType === 'all' || node.type.toLowerCase() === filterType.toLowerCase();
        const matchesSearch = !searchQuery || node.label.toLowerCase().includes(searchQuery.toLowerCase());

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = matchesFilter && matchesSearch ? node.color : '#334155';
        ctx.fill();

        ctx.lineWidth = isSelected ? 3.5 : 1.5;
        ctx.strokeStyle = isSelected ? '#ffffff' : 'rgba(255, 255, 255, 0.4)';
        ctx.stroke();

        if (isSelected) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius + 6, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(56, 189, 248, 0.6)';
          ctx.lineWidth = 2;
          ctx.stroke();
        }

        // Label
        ctx.fillStyle = matchesFilter && matchesSearch ? '#f1f5f9' : '#64748b';
        ctx.font = isSelected ? 'bold 12px Inter' : '11px Inter';
        ctx.textAlign = 'center';
        ctx.fillText(node.label, node.x, node.y + node.radius + 14);
      });

      ctx.restore();

      animationFrameRef.current = requestAnimationFrame(runSimulation);
    };

    animationFrameRef.current = requestAnimationFrame(runSimulation);
    return () => cancelAnimationFrame(animationFrameRef.current);
  }, [selectedNode, filterType, searchQuery, zoomLevel, panOffset, draggedNode]);

  // Handle Canvas Mouse Interaction
  const handleCanvasMouseDown = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left - panOffset.x) / zoomLevel;
    const mouseY = (e.clientY - rect.top - panOffset.y) / zoomLevel;

    const clickedNode = nodesRef.current.find(n => {
      const dx = n.x - mouseX;
      const dy = n.y - mouseY;
      return Math.sqrt(dx * dx + dy * dy) <= n.radius + 5;
    });

    if (clickedNode) {
      setSelectedNode(clickedNode);
      setDraggedNode(clickedNode);
    } else {
      setIsDragging(true);
      setDragStart({ x: e.clientX - panOffset.x, y: e.clientY - panOffset.y });
    }
  };

  const handleCanvasMouseMove = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left - panOffset.x) / zoomLevel;
    const mouseY = (e.clientY - rect.top - panOffset.y) / zoomLevel;

    if (draggedNode) {
      draggedNode.x = mouseX;
      draggedNode.y = mouseY;
    } else if (isDragging) {
      setPanOffset({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleCanvasMouseUp = () => {
    setDraggedNode(null);
    setIsDragging(false);
  };

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="bg-slate-900/60 p-6 rounded-2xl border border-cyan-500/20 glass-panel flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider bg-pink-500/20 text-pink-300 border border-pink-400/30 rounded-full">
              ⭐⭐⭐⭐ Core Graph
            </span>
            <span className="text-xs text-slate-400">Interactive Cryosphere Ontology</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-wide mt-1 font-display">
            Interactive Polar Knowledge Graph
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            Physics-driven interconnected network mapping relationships between MoES institutions, polar research bases, scientific expeditions, researchers, and archived datasets.
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-2 text-[10px] bg-[#040d1a] p-2 rounded-xl border border-slate-800">
          <span className="flex items-center space-x-1 text-slate-300">
            <span className="w-2.5 h-2.5 rounded-full bg-[#06b6d4]"></span>
            <span>Institutes</span>
          </span>
          <span className="flex items-center space-x-1 text-slate-300">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]"></span>
            <span>Stations</span>
          </span>
          <span className="flex items-center space-x-1 text-slate-300">
            <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]"></span>
            <span>Expeditions</span>
          </span>
          <span className="flex items-center space-x-1 text-slate-300">
            <span className="w-2.5 h-2.5 rounded-full bg-[#a855f7]"></span>
            <span>Scientists</span>
          </span>
        </div>
      </div>

      {/* Main Graph & Inspector Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Canvas Graph Window (3 cols) */}
        <div className="lg:col-span-3 bg-[#030a14] rounded-2xl border border-cyan-500/30 overflow-hidden relative shadow-2xl h-[560px]">
          
          {/* Top floating search & filter bar */}
          <div className="absolute top-4 left-4 right-4 z-10 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
            
            <div className="flex items-center space-x-2 pointer-events-auto bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-800 text-xs shadow-lg">
              <Search className="w-3.5 h-3.5 text-cyan-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search node..."
                className="bg-transparent text-slate-100 placeholder-slate-500 text-xs focus:outline-none w-32 sm:w-44"
              />
            </div>

            <div className="flex items-center space-x-2 pointer-events-auto bg-slate-900/90 backdrop-blur-md p-1 rounded-xl border border-slate-800 text-xs shadow-lg">
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="bg-transparent text-slate-200 text-xs px-2 py-1 focus:outline-none cursor-pointer"
              >
                <option value="all" className="bg-slate-900">All Node Types</option>
                <option value="institution" className="bg-slate-900">Institutions</option>
                <option value="station" className="bg-slate-900">Stations</option>
                <option value="expedition" className="bg-slate-900">Expeditions</option>
                <option value="scientist" className="bg-slate-900">Scientists</option>
                <option value="discipline" className="bg-slate-900">Disciplines</option>
              </select>
            </div>

            {/* Zoom / Reset Controls */}
            <div className="flex items-center space-x-1 pointer-events-auto bg-slate-900/90 backdrop-blur-md p-1 rounded-xl border border-slate-800 shadow-lg">
              <button
                onClick={() => setZoomLevel(prev => Math.min(2, prev + 0.2))}
                className="p-1.5 hover:bg-slate-800 rounded-lg text-slate-300 hover:text-white"
                title="Zoom In"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setZoomLevel(prev => Math.max(0.6, prev - 0.2))}
                className="p-1.5 hover:bg-slate-800 rounded-lg text-slate-300 hover:text-white"
                title="Zoom Out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => { setZoomLevel(1); setPanOffset({ x: 0, y: 0 }); }}
                className="p-1.5 hover:bg-slate-800 rounded-lg text-slate-300 hover:text-white"
                title="Reset View"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          {/* HTML5 Canvas */}
          <canvas
            ref={canvasRef}
            width={850}
            height={560}
            onMouseDown={handleCanvasMouseDown}
            onMouseMove={handleCanvasMouseMove}
            onMouseUp={handleCanvasMouseUp}
            className="w-full h-full cursor-grab active:cursor-grabbing"
          />

          <div className="absolute bottom-3 left-4 text-[10px] text-slate-500 font-mono pointer-events-none">
            Click & drag nodes to inspect physics • Drag canvas to pan
          </div>
        </div>

        {/* Node Inspector Sidebar (1 col) */}
        <div className="space-y-4">
          <div className="bg-slate-900/80 border border-cyan-500/30 rounded-2xl p-5 glass-panel space-y-4">
            
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider flex items-center space-x-1.5">
                <Info className="w-4 h-4 text-cyan-400" />
                <span>Node Inspector</span>
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                {selectedNode?.type}
              </span>
            </div>

            {selectedNode ? (
              <div className="space-y-4 text-xs">
                <div>
                  <h3 className="text-base font-black text-white">
                    {selectedNode.label}
                  </h3>
                  <div className="text-[11px] font-mono text-cyan-400 mt-0.5">
                    Node ID: {selectedNode.id}
                  </div>
                </div>

                <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800 text-slate-300 leading-relaxed">
                  {selectedNode.details}
                </div>

                {/* Connected Relationships */}
                <div className="space-y-2">
                  <div className="text-[11px] font-bold text-slate-400 uppercase font-mono">
                    Direct Network Connections:
                  </div>
                  <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                    {KNOWLEDGE_GRAPH_DATA.links
                      .filter(l => l.source === selectedNode.id || l.target === selectedNode.id)
                      .map((l, idx) => {
                        const targetId = l.source === selectedNode.id ? l.target : l.source;
                        const targetNode = KNOWLEDGE_GRAPH_DATA.nodes.find(n => n.id === targetId);
                        return (
                          <div
                            key={idx}
                            onClick={() => targetNode && setSelectedNode(targetNode)}
                            className="p-2 rounded-lg bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900 cursor-pointer flex items-center justify-between transition"
                          >
                            <div>
                              <div className="font-semibold text-slate-200">{targetNode?.label}</div>
                              <div className="text-[10px] text-cyan-400 font-mono">{l.relationship}</div>
                            </div>
                            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                          </div>
                        );
                      })}
                  </div>
                </div>

              </div>
            ) : (
              <div className="py-8 text-center text-slate-500 text-xs">
                Select any node in the canvas to inspect ontology connections.
              </div>
            )}

          </div>
        </div>

      </div>

    </div>
  );
}
