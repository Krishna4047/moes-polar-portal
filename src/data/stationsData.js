export const STATIONS_DATA = [
  {
    id: "bharati",
    name: "Bharati Research Station",
    realm: "antarctica",
    region: "Larsemann Hills, Princess Elizabeth Land",
    country: "India (MoES / NCPOR)",
    status: "Active - Year-round",
    commissioned: 2012,
    coordinates: { lat: -69.4072, lng: 76.1953 },
    elevation: "35 m above sea level",
    capacity: "47 Personnel (Summer) / 24 Personnel (Winter)",
    type: "Permanent Year-Round Research Base",
    tagline: "India's 3rd Antarctic Research Station — State-of-the-Art Eco-Architectural Wonder",
    description: "Bharati is India's modern, energy-efficient Antarctic research base located on a cliff edge at Larsemann Hills. Constructed from 134 prefabricated shipping containers clad in aerodynamic composite panels, it facilitates cutting-edge oceanography, atmospheric chemistry, continental breakup geology, and hosts the ISRO satellite ground station for polar orbit data downlinking.",
    image: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=800&q=80"
    ],
    liveTelemetry: {
      temperature: -28.4,
      windSpeed: 42,
      windDirection: "SSE (160°)",
      pressure: 988.4,
      humidity: 58,
      solarRadiation: 145,
      kpIndex: 3.2,
      microgridStatus: "Hybrid Wind-Fuel (82% Efficient)",
      auroraVisibility: "Moderate (G1 Alert)"
    },
    facilities: [
      { name: "ISRO Ground Station (AGEOS)", purpose: "High-speed downlinking of Cartosat, Oceansat, and RISAT earth observation orbits" },
      { name: "Atmospheric & Space Physics Lab", purpose: "Fabry-Perot Interferometer, Brewer Spectrophotometer & Flux Tower" },
      { name: "Oceanographic & Marine Bio-Lab", purpose: "Cryobiology incubation, seawater isotope analyzer, and benthic sampling sorting" },
      { name: "Medical ICU & Telemedicine Suite", purpose: "AI-assisted telemedicine link with AIIMS New Delhi for high-latitude trauma care" }
    ],
    crewRoster: {
      leader: "Dr. Sandeep Oza (44th ISEA Station Commander)",
      glaciologist: "Dr. Ananya Ray (NCPOR)",
      meteorologist: "Shri R. K. Sharma (IMD)",
      medicalOfficer: "Surgeon Lt. Cdr. Priya Menon (Indian Navy)",
      stationEngineer: "Er. T. Vignesh (MoES Technical Directorate)"
    },
    virtualTourSpots: [
      { name: "Main Observatory Deck", desc: "Panoramic 360° view overlooking Prydz Bay icebergs and wind turbine array." },
      { name: "ISRO Radome & Antenna Farm", desc: "Dual X/S-band steerable tracking antennas encased in weatherproof geodesic radomes." },
      { name: "Living Quarters & Green Hydroponics", desc: "Thermal-isolated residential units and LED vertical hydroponic farm producing fresh greens." },
      { name: "Atmospheric Aerosol Sampling Mast", desc: "Pristine air inlet at 18m height measuring black carbon and trace greenhouse gases." }
    ]
  },
  {
    id: "maitri",
    name: "Maitri Research Station",
    realm: "antarctica",
    region: "Schirmacher Oasis, Queen Maud Land",
    country: "India (MoES / NCPOR)",
    status: "Active - Year-round (Maitri-II modernization underway)",
    commissioned: 1989,
    coordinates: { lat: -70.7664, lng: 11.7328 },
    elevation: "117 m above sea level",
    capacity: "65 Personnel (Summer) / 25 Personnel (Winter)",
    type: "Permanent Year-Round Research Base",
    tagline: "India's Historic Workhorse in Antarctica — Schirmacher Oasis Hub",
    description: "Maitri was constructed during the 8th Indian Antarctic Expedition in the ice-free rocky oasis of Schirmacher Hills. It sits adjacent to the freshwater Lake Priyadarshini, which supplies pure water to the station. Maitri has been the heart of Indian polar biology, upper atmosphere geomagnetic monitoring, and paleoclimate ice-core staging for over 35 years.",
    image: "https://images.unsplash.com/photo-1548263594-a71ea65a8598?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1548263594-a71ea65a8598?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80"
    ],
    liveTelemetry: {
      temperature: -32.1,
      windSpeed: 58,
      windDirection: "SE (135°)",
      pressure: 979.2,
      humidity: 52,
      solarRadiation: 90,
      kpIndex: 4.1,
      microgridStatus: "Thermal Cogeneration Active",
      auroraVisibility: "High (Auroral Arc Active)"
    },
    facilities: [
      { name: "Priyadarshini Lake Monitoring System", purpose: "Limnological environmental sampling and water purification system" },
      { name: "Geomagnetic Observatory (IIG)", purpose: "Continuous digital fluxgate magnetometers measuring Earth's southern dipole fluctuations" },
      { name: "Seismological Station (NGRI)", purpose: "Broadband triaxial seismometers capturing lithospheric micro-seismic signatures" },
      { name: "Meteorological Balloon Launch Facility", purpose: "IMD upper-air ozonesonde and radiosonde releases up to 35 km stratosphere" }
    ],
    crewRoster: {
      leader: "Dr. Vikramaditya Sen (44th ISEA Maitri Leader)",
      glaciologist: "Dr. Hemant Kumar (NCPOR Cryosphere Group)",
      meteorologist: "Smt. Shailja Pandey (IMD Pune)",
      medicalOfficer: "Dr. Arvind Chawla (ITBP Medical Cadre)",
      stationEngineer: "Er. K. Murugan (CPWD Electrical)"
    },
    virtualTourSpots: [
      { name: "Priyadarshini Water Intake Pump House", desc: "Heated underwater pipeline tapping glacier melt from the protected lake." },
      { name: "IIG Geomagnetism Vault", desc: "Non-magnetic wooden pavilion isolated 500m from main base to prevent electronic interference." },
      { name: "Central Galley & Lounge", desc: "Social hub featuring library, indoor gym, and traditional Indian galley serving wintering crews." },
      { name: "Helipad & Snow-Cat Hangar", desc: "PistenBully tracked vehicles and Kamov / Bell 412 helicopter staging area." }
    ]
  },
  {
    id: "dakshin-gangotri",
    name: "Dakshin Gangotri (Historical)",
    realm: "antarctica",
    region: "Ice Shelf, Queen Maud Land",
    country: "India (MoES / NCPOR)",
    status: "Historical Heritage Site / Automated Sensor Site",
    commissioned: 1983,
    coordinates: { lat: -70.0903, lng: 12.0000 },
    elevation: "Sea level ice shelf",
    capacity: "Historical (Decommissioned 1990 due to ice accumulation)",
    type: "Historic First Indian Antarctic Base",
    tagline: "India's First Permanent Station — Historic Milestone of Indian Polar Science",
    description: "Constructed during the 3rd Indian Antarctic Expedition under severe polar conditions within a record 60 days. Dakshin Gangotri marked India's permanent entry into the Antarctic Treaty consultative club. Gradually submerged under perpetual snow layers by 1990, it is preserved under the Antarctic Treaty System as Historic Site and Monument No. 44 (HSM 44) and hosts automated telemetry beacons.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80"
    ],
    liveTelemetry: {
      temperature: -36.8,
      windSpeed: 64,
      windDirection: "ESE (110°)",
      pressure: 974.1,
      humidity: 61,
      solarRadiation: 40,
      kpIndex: 2.8,
      microgridStatus: "Passive Solar Telemetry Beacon",
      auroraVisibility: "Moderate"
    },
    facilities: [
      { name: "Historic Site Monument #44 Memorial", purpose: "Designated Antarctic Heritage Marker commemorating pioneer Indian polar researchers" },
      { name: "Automated Weather Station (AWS)", purpose: "Satellite-linked autonomous ice sheet accumulation and wind profile logger" }
    ],
    crewRoster: {
      leader: "Archival Leader: Dr. Harsh K. Gupta (3rd ISEA Leader 1983-84)",
      glaciologist: "Archival: Dr. S.Z. Qasim (Mission Architect)",
      meteorologist: "Autonomous telemetry unit (No active wintering crew)",
      medicalOfficer: "Historical",
      stationEngineer: "Historical"
    },
    virtualTourSpots: [
      { name: "Sub-surface Archival Memorial Plaque", desc: "Commemorative plaque marking the exact coordinates of India's first polar outpost." },
      { name: "Dakshin Gangotri Ice Shelf Edge", desc: "Majestic blue-ice cliffs calving into the Southern Ocean." }
    ]
  },
  {
    id: "himadri",
    name: "Himadri Research Station",
    realm: "arctic",
    region: "Ny-Ålesund, Spitsbergen, Svalbard (79° N)",
    country: "India (MoES / NCPOR)",
    status: "Active - Year-round research hub",
    commissioned: 2008,
    coordinates: { lat: 78.9242, lng: 11.9286 },
    elevation: "15 m above sea level",
    capacity: "8-10 Scientists (Continuous rotation)",
    type: "Arctic Research Laboratory",
    tagline: "India's Northernmost Scientific Outpost — High Arctic Ny-Ålesund",
    description: "Inaugurated in July 2008 at the international research settlement of Ny-Ålesund, Svalbard, Himadri enables Indian researchers to investigate teleconnections between Arctic warming, Greenland ice melting, and the erratic behavior of the Indian Summer Monsoon (ISMR).",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&w=800&q=80"
    ],
    liveTelemetry: {
      temperature: -14.2,
      windSpeed: 24,
      windDirection: "NNE (25°)",
      pressure: 1012.3,
      humidity: 78,
      solarRadiation: 210,
      kpIndex: 3.8,
      microgridStatus: "Connected to Kings Bay Clean Hydro/Diesel Grid",
      auroraVisibility: "Active (Polar Midnight Sun / Aurora Zone)"
    },
    facilities: [
      { name: "Gruvebadet Atmospheric Laboratory", purpose: "Indian particle counter, multi-wavelength aethalometer, and aerosol sizing spectrometer" },
      { name: "Marine Micro-plastics & Biogeochemistry Lab", purpose: "Sediment cores, fjord plankton blooms, and Arctic marine microbial adaptation" },
      { name: "Glacier Mass Balance Lab (Kronebreen / Midtre Lovénbreen)", purpose: "Differential GPS and ground-penetrating radar for glacier retreat calculation" }
    ],
    crewRoster: {
      leader: "Dr. K. P. Krishnan (Lead Arctic Scientist, NCPOR)",
      glaciologist: "Dr. Archana Dayal (Glacial Cryosphere)",
      meteorologist: "Dr. Sunil Kumar (Atmospheric Aerosols)",
      medicalOfficer: "Ny-Ålesund Central Clinic",
      stationEngineer: "Kings Bay Operations Co."
    },
    virtualTourSpots: [
      { name: "Himadri Main Laboratory Suite", desc: "Equipped with laminar flow clean hoods, spectrophotometers, and cryogenic freezers." },
      { name: "Kongsfjorden Shore Observation Pier", desc: "Direct vantage over tidewater glaciers and marine mammal migration channels." },
      { name: "Gruvebadet High-Alpine Aerosol Lab", desc: "Cleanest atmospheric sampling inlet on Earth at the base of Zeppelin Mountain." }
    ]
  },
  {
    id: "indarc",
    name: "IndARC Underwater Observatory",
    realm: "arctic",
    region: "Kongsfjorden Fjord, Svalbard (79° N)",
    country: "India (MoES / NCPOR / NIOT)",
    status: "Active - Moored deep-sea sensor system",
    commissioned: 2014,
    coordinates: { lat: 78.9833, lng: 12.0500 },
    elevation: "-192 m (Subsurface Seabed Mooring)",
    capacity: "Unmanned Subsurface Array (Recovered & Serviced Annually)",
    type: "Subsurface Multi-Sensor Moored Marine Observatory",
    tagline: "India's First Underwater Arctic Mooring — Deciphering Monsoon Teleconnections",
    description: "Deployed in July 2014 at a depth of 192 meters in the Arctic Kongsfjorden, IndARC is a cutting-edge underwater moored observatory that measures oceanographic parameters round-the-clock throughout the harsh Arctic winter, when surface ice prevents ship operations.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
    ],
    liveTelemetry: {
      temperature: 1.84,
      windSpeed: 0,
      windDirection: "Seabed Current: 0.28 m/s WNW",
      pressure: 19.8, // bars
      humidity: 100,
      solarRadiation: 0,
      kpIndex: 0,
      microgridStatus: "Lithium Subsea Battery Arrays (94% remaining)",
      auroraVisibility: "N/A (Subsea)"
    },
    facilities: [
      { name: "Acoustic Doppler Current Profiler (ADCP)", purpose: "Continuous 3D water column current velocity and Atlantic water inflow profiling" },
      { name: "Seabird SBE-37 CTD Chain", purpose: "High-precision salinity, ocean temperature, and density stratification at 10 depth tiers" },
      { name: "Dissolved Oxygen & Turbidity Sensor Suite", purpose: "Biogeochemical fluxes and glacial meltwater sediment plume tracking" }
    ],
    crewRoster: {
      leader: "Dr. B. S. Murty (MoES Ocean Observation Lead)",
      glaciologist: "Dr. N. Anilkumar (Southern Ocean & Arctic Dynamics)",
      meteorologist: "Dr. J. P. George (Ocean-Atmosphere Coupling)",
      medicalOfficer: "Unmanned Autonomous Platform",
      stationEngineer: "Er. Ramesh Babu (NIOT Deep-Sea Mooring Team)"
    },
    virtualTourSpots: [
      { name: "Mooring Anchor & Acoustic Release Node", desc: "Dual acoustic transponders designed for precision surfacing on coded sonar command." },
      { name: "Subsurface Syntactic Foam Buoyancy Pod", desc: "Deep-rated syntactic spheres maintaining mooring vertical tension in heavy tidal currents." }
    ]
  },
  {
    id: "himansh",
    name: "Himansh High-Altitude Station",
    realm: "himalayas",
    region: "Chandra Basin, Lahaul-Spiti, Himachal Pradesh (The Third Pole)",
    country: "India (MoES / NCPOR)",
    status: "Active - High-Altitude Benchmark Station",
    commissioned: 2016,
    coordinates: { lat: 32.4000, lng: 77.6167 },
    elevation: "4,080 m (13,386 ft) above sea level",
    capacity: "12 Glaciologists & Technical Team",
    type: "High-Altitude Cryosphere Station",
    tagline: "India's Third-Pole Benchmark — Monitoring Himalayan Glacial Health",
    description: "Located above 4,000 meters in the rugged Chandra Basin of Himachal Pradesh, Himansh ('a slice of ice') serves as the base for intensive glaciological investigations across the Sutri Dhaka, Batal, Samudra Tapu, and Gepang Gath glaciers to study climate-induced glacial melt affecting the Indus and Ganga river basins.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80"
    ],
    liveTelemetry: {
      temperature: -8.6,
      windSpeed: 31,
      windDirection: "WNW (290°)",
      pressure: 618.4,
      humidity: 41,
      solarRadiation: 890,
      kpIndex: 1.5,
      microgridStatus: "Solar PV + Battery Bank System (91%)",
      auroraVisibility: "N/A (Mid-latitude Clear Alpine Sky)"
    },
    facilities: [
      { name: "Automatic Weather Station (AWS) Network", purpose: "Real-time energy balance sensors on debris-covered and clean-ice glaciers" },
      { name: "Ground Penetrating Radar (GPR) Depot", purpose: "Ice thickness and bedrock topography sounding up to 250m depth" },
      { name: "Hydrological Discharge Gauging Station", purpose: "Automated ultrasonic river flow and sediment transport measuring flumes" }
    ],
    crewRoster: {
      leader: "Dr. Parmanand Sharma (Lead Himalayan Glaciologist, NCPOR)",
      glaciologist: "Dr. Bhanu Pratap (Glacial Dynamics)",
      meteorologist: "Shri Ajay Kumar (Snow Hydrology)",
      medicalOfficer: "High-Altitude Hyperbaric Medical Unit",
      stationEngineer: "Er. Sunil Thakur (Field Instrumentation)"
    },
    virtualTourSpots: [
      { name: "Himansh Main Alpine Shelter", desc: "Insulated geodesic habitat perched on lateral moraines of Sutri Dhaka glacier." },
      { name: "Sutri Dhaka Benchmark Glacier Tongue", desc: "DGPS ablation stake field monitoring seasonal mass balance and surface velocity." }
    ]
  }
];

export const INTERNATIONAL_STATIONS = [
  { id: "mcmurdo", name: "McMurdo Station", country: "United States", coordinates: { lat: -77.8463, lng: 166.6681 }, realm: "antarctica", type: "Major Logistics & Science Hub", population: "1,000+" },
  { id: "amundsen-scott", name: "Amundsen-Scott South Pole Station", country: "United States", coordinates: { lat: -90.0000, lng: 0.0000 }, realm: "antarctica", type: "South Pole Astrophysics Observatory", population: "150" },
  { id: "concordia", name: "Concordia Station (Dome C)", country: "France / Italy", coordinates: { lat: -75.0998, lng: 123.3322 }, realm: "antarctica", type: "High Plateau Astrobiology & Ice Coring", population: "70" },
  { id: "halley-vi", name: "Halley VI Research Station", country: "United Kingdom", coordinates: { lat: -75.5833, lng: -26.5000 }, realm: "antarctica", type: "Hydraulically Relocatable Atmospheric Base", population: "32" },
  { id: "vostok", name: "Vostok Station", country: "Russia", coordinates: { lat: -78.4644, lng: 106.8373 }, realm: "antarctica", type: "Cold Pole & Subglacial Lake Deep Coring", population: "30" },
  { id: "troll", name: "Troll Station", country: "Norway", coordinates: { lat: -72.0117, lng: 2.5333 }, realm: "antarctica", type: "Year-Round Atmospheric & Satellite Base", population: "45" },
  { id: "casey", name: "Casey Station", country: "Australia", coordinates: { lat: -66.2825, lng: 110.5278 }, realm: "antarctica", type: "Year-Round Coastal Science Base", population: "120" }
];
