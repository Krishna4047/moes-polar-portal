export const KNOWLEDGE_GRAPH_DATA = {
  nodes: [
    // Institutions
    { id: "inst-moes", label: "Ministry of Earth Sciences (MoES)", type: "Institution", group: "gov", details: "Apex Government Ministry coordinating India's Polar & Ocean Missions from New Delhi." },
    { id: "inst-ncpor", label: "NCPOR (Goa)", type: "Institution", group: "institute", details: "National Centre for Polar and Ocean Research — Nodal R&D agency executing Antarctic, Arctic & Himalayan expeditions." },
    { id: "inst-imd", label: "IMD Pune/Delhi", type: "Institution", group: "institute", details: "India Meteorological Department — Monitoring polar ozone, surface radiation & radiosonde telemetry." },
    { id: "inst-iig", label: "IIG Mumbai", type: "Institution", group: "institute", details: "Indian Institute of Geomagnetism — Operating magnetometers and space weather sensors at Bharati & Maitri." },
    { id: "inst-niot", label: "NIOT Chennai", type: "Institution", group: "institute", details: "National Institute of Ocean Technology — Deep-sea moorings (IndARC) & polar submersible technology." },
    { id: "inst-isro", label: "ISRO / NRSC", type: "Institution", group: "institute", details: "Indian Space Research Organisation — Operating polar satellite tracking ground stations at Bharati." },

    // Research Stations
    { id: "stn-bharati", label: "Bharati Station", type: "Station", group: "station", details: "Active 3rd Indian Antarctic Station in Larsemann Hills (2012–Present)." },
    { id: "stn-maitri", label: "Maitri Station", type: "Station", group: "station", details: "Historic 2nd Indian Antarctic Station in Schirmacher Oasis (1989–Present)." },
    { id: "stn-dg", label: "Dakshin Gangotri", type: "Station", group: "station", details: "1st Indian Antarctic Base (1983–1990), now Antarctic Heritage Monument #44." },
    { id: "stn-himadri", label: "Himadri Station", type: "Station", group: "station", details: "Indian Arctic Research Laboratory in Ny-Ålesund, Svalbard (2008–Present)." },
    { id: "stn-indarc", label: "IndARC Mooring", type: "Station", group: "station", details: "Underwater 192m deep-sea observatory in Kongsfjorden, Arctic." },
    { id: "stn-himansh", label: "Himansh Station", type: "Station", group: "station", details: "Third-Pole Benchmark Station in Chandra Basin, Himalayas (4,080m a.s.l.)." },

    // Expeditions
    { id: "exp-44", label: "44th ISEA (2024-25)", type: "Expedition", group: "expedition", details: "Latest Antarctic expedition focusing on Maitri-II & deep ice coring." },
    { id: "exp-43", label: "43rd ISEA (2023-24)", type: "Expedition", group: "expedition", details: "Antarctic expedition with autonomous glider & sub-ice lake surveys." },
    { id: "exp-arc-10", label: "Arctic 10th IndARC Mission", type: "Expedition", group: "expedition", details: "Annual Arctic Svalbard expedition for IndARC subsea mooring maintenance." },
    { id: "exp-soe-12", label: "12th Southern Ocean Cruise", type: "Expedition", group: "expedition", details: "Biogeochemical & krill biomass survey across 40°S–68°S transect." },
    { id: "exp-1", label: "1st ISEA (1981)", type: "Expedition", group: "expedition", details: "Historic maiden Indian Antarctic expedition led by Dr. S.Z. Qasim." },

    // Key Scientists / PIs
    { id: "sci-qasim", label: "Dr. S.Z. Qasim", type: "Scientist", group: "person", details: "Pioneer architect of Indian Polar Program & leader of 1st Antarctic Expedition." },
    { id: "sci-thamban", label: "Dr. Thamban Meloth", type: "Scientist", group: "person", details: "Director NCPOR & Renowned Polar Paleoclimatologist and Ice Core Specialist." },
    { id: "sci-krishnan", label: "Dr. K.P. Krishnan", type: "Scientist", group: "person", details: "Lead Arctic Scientist at NCPOR & Principal Investigator of IndARC Mooring." },
    { id: "sci-sharma", label: "Dr. Parmanand Sharma", type: "Scientist", group: "person", details: "Lead Glaciologist for Himalayan Cryosphere & Head of Himansh Station." },

    // Disciplines
    { id: "disc-glaciology", label: "Glaciology & Ice Cores", type: "Discipline", group: "discipline", details: "Paleoclimate reconstructions, ice flow velocity & mass balance dynamics." },
    { id: "disc-atmosphere", label: "Atmospheric & Ozone Science", type: "Discipline", group: "discipline", details: "Antarctic ozone hole, aerosol optical depth & polar meteorology." },
    { id: "disc-ocean", label: "Polar Oceanography", type: "Discipline", group: "discipline", details: "Deep-water formation, Atlantic-Arctic teleconnections & Southern Ocean biogeochemistry." },
    { id: "disc-space", label: "Space Weather & Geomagnetism", type: "Discipline", group: "discipline", details: "Magnetospheric pulsations, solar wind auroral physics & cosmic ray fluxes." },

    // Datasets & Key Papers
    { id: "dat-pel-core", label: "PEL 300m Ice Core Data", type: "Dataset", group: "data", details: "High-resolution 10,000-year CO2 and water isotope paleoclimate dataset." },
    { id: "dat-ozone-timeseries", label: "Maitri 35-Yr Ozone Records", type: "Dataset", group: "data", details: "Long-term total column ozone dataset verified by WMO GAW network." },
    { id: "dat-indarc-series", label: "IndARC Subsea CTD Timeseries", type: "Dataset", group: "data", details: "Multi-year Arctic Kongsfjorden temperature & salinity depth profile." }
  ],
  links: [
    { source: "inst-moes", target: "inst-ncpor", relationship: "Oversees & Funds" },
    { source: "inst-moes", target: "inst-imd", relationship: "Oversees" },
    { source: "inst-moes", target: "inst-niot", relationship: "Oversees" },
    { source: "inst-ncpor", target: "stn-bharati", relationship: "Operates" },
    { source: "inst-ncpor", target: "stn-maitri", relationship: "Operates" },
    { source: "inst-ncpor", target: "stn-dg", relationship: "Preserves" },
    { source: "inst-ncpor", target: "stn-himadri", relationship: "Operates" },
    { source: "inst-ncpor", target: "stn-indarc", relationship: "Operates jointly" },
    { source: "inst-niot", target: "stn-indarc", relationship: "Mooring Tech" },
    { source: "inst-isro", target: "stn-bharati", relationship: "Ground Station" },
    { source: "inst-ncpor", target: "stn-himansh", relationship: "Operates" },

    // Scientists to Institutions / Stations
    { source: "sci-qasim", target: "exp-1", relationship: "Led Expedition" },
    { source: "sci-qasim", target: "stn-dg", relationship: "Founded" },
    { source: "sci-thamban", target: "inst-ncpor", relationship: "Director" },
    { source: "sci-thamban", target: "disc-glaciology", relationship: "Expert" },
    { source: "sci-thamban", target: "dat-pel-core", relationship: "Principal Author" },
    { source: "sci-krishnan", target: "stn-himadri", relationship: "Lead Scientist" },
    { source: "sci-krishnan", target: "stn-indarc", relationship: "Principal Investigator" },
    { source: "sci-krishnan", target: "dat-indarc-series", relationship: "Published" },
    { source: "sci-sharma", target: "stn-himansh", relationship: "Station In-charge" },
    { source: "sci-sharma", target: "disc-glaciology", relationship: "Glacial Lead" },

    // Expeditions to Stations
    { source: "exp-44", target: "stn-bharati", relationship: "Supported" },
    { source: "exp-44", target: "stn-maitri", relationship: "Modernized" },
    { source: "exp-arc-10", target: "stn-indarc", relationship: "Serviced" },
    { source: "exp-43", target: "stn-bharati", relationship: "Station Crew" },

    // Disciplines to Stations & Data
    { source: "stn-bharati", target: "disc-glaciology", relationship: "Conducts" },
    { source: "stn-bharati", target: "disc-space", relationship: "Conducts" },
    { source: "stn-maitri", target: "disc-atmosphere", relationship: "Conducts" },
    { source: "stn-maitri", target: "dat-ozone-timeseries", relationship: "Produced" },
    { source: "stn-indarc", target: "disc-ocean", relationship: "Profiles" },
    { source: "stn-himansh", target: "disc-glaciology", relationship: "Mass Balance" },
    { source: "disc-glaciology", target: "dat-pel-core", relationship: "Classifies" }
  ]
};
