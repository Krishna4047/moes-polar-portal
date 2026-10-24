import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import NotificationBar from './components/layout/NotificationBar';
import Footer from './components/layout/Footer';
import GlobalSearchModal from './components/search/GlobalSearchModal';

// 10 Core Modules
import PortalOverview from './components/overview/PortalOverview';
import PolarMapExplorer from './components/map/PolarMapExplorer';
import StationExplorer from './components/stations/StationExplorer';
import DatasetExplorer from './components/datasets/DatasetExplorer';
import MediaRepository from './components/media/MediaRepository';
import ExpeditionTimeline from './components/timeline/ExpeditionTimeline';
import DhruvAIAssistant from './components/ai/DhruvAIAssistant';
import DatasetVisualizer from './components/visualizer/DatasetVisualizer';
import KnowledgeGraph from './components/graph/KnowledgeGraph';
import AdminApprovalPortal from './components/admin/AdminApprovalPortal';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedStationParam, setSelectedStationParam] = useState(null);
  const [selectedDatasetParam, setSelectedDatasetParam] = useState(null);

  // Scroll to top on tab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  // Handle cross-module navigation from search or AI links
  const handleNavigate = (tabId, item = null) => {
    setActiveTab(tabId);
    if (tabId === 'stations' && item?.id) {
      setSelectedStationParam(item.id);
    } else if (tabId === 'visualizer' && item?.id) {
      setSelectedDatasetParam(item.id);
    }
  };

  return (
    <div className="min-h-screen bg-[#040D1A] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-white">
      
      {/* Top Telemetry Notification Banner */}
      <NotificationBar />

      {/* Global Navigation Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8 pb-28 md:pb-10">
        
        {activeTab === 'overview' && (
          <PortalOverview
            setActiveTab={setActiveTab}
            onOpenSearch={() => setIsSearchOpen(true)}
            onSelectStation={(stn) => {
              setSelectedStationParam(stn.id);
              setActiveTab('stations');
            }}
          />
        )}

        {activeTab === 'map' && (
          <PolarMapExplorer
            onSelectStation={(stn) => {
              setSelectedStationParam(stn.id);
              setActiveTab('stations');
            }}
          />
        )}

        {activeTab === 'stations' && (
          <StationExplorer
            initialStationId={selectedStationParam}
            onNavigateToMap={() => setActiveTab('map')}
            onNavigateToDatasets={() => setActiveTab('datasets')}
          />
        )}

        {activeTab === 'datasets' && (
          <DatasetExplorer
            onNavigateToVisualizer={(ds) => {
              setSelectedDatasetParam(ds.id);
              setActiveTab('visualizer');
            }}
          />
        )}

        {activeTab === 'media' && (
          <MediaRepository />
        )}

        {activeTab === 'timeline' && (
          <ExpeditionTimeline />
        )}

        {activeTab === 'ai' && (
          <DhruvAIAssistant
            onNavigateToStation={(stationId) => {
              setSelectedStationParam(stationId);
              setActiveTab('stations');
            }}
            onNavigateToDataset={(datasetId) => {
              setSelectedDatasetParam(datasetId);
              setActiveTab('datasets');
            }}
          />
        )}

        {activeTab === 'visualizer' && (
          <DatasetVisualizer
            initialDatasetId={selectedDatasetParam}
          />
        )}

        {activeTab === 'graph' && (
          <KnowledgeGraph
            onNavigateToModule={(mod) => setActiveTab(mod)}
          />
        )}

        {activeTab === 'admin' && (
          <AdminApprovalPortal />
        )}

      </main>

      {/* Global Search Omnibar Modal */}
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigate}
      />

      {/* Institutional Footer */}
      <Footer setActiveTab={setActiveTab} />

    </div>
  );
}
