export const DHRUV_AI_KNOWLEDGE = {
  suggestedPrompts: [
    {
      category: "Stations & Architecture",
      text: "How is Bharati Station structurally engineered for Antarctic blizzards compared to Maitri?",
      tag: "Engineering"
    },
    {
      category: "Arctic & Climate Teleconnections",
      text: "How does the IndARC underwater observatory help decipher Indian monsoon behavior?",
      tag: "Arctic Science"
    },
    {
      category: "Ozone & Atmosphere",
      text: "What is the current status of the Antarctic Ozone Hole over Indian stations?",
      tag: "Atmosphere"
    },
    {
      category: "History & Treaties",
      text: "What was India's 1st Antarctic Expedition in 1981 and what are its Treaty rights?",
      tag: "Expeditions"
    },
    {
      category: "Third Pole Glaciology",
      text: "What research is being conducted at Himansh station in the Himalayas?",
      tag: "Himalayas"
    },
    {
      category: "Data & Samples",
      text: "Where can researchers download ice core and CTD oceanographic datasets?",
      tag: "Data Access"
    }
  ],

  faqDatabase: [
    {
      keywords: ["bharati", "maitri", "difference", "structure", "architecture", "blizzard"],
      title: "Architectural Comparison: Bharati vs Maitri Station",
      answer: `**Bharati Station** (commissioned in 2012 at Larsemann Hills) is India's 3rd generation polar research base built using **134 aerodynamic ISO shipping containers** clad in an insulated composite envelope. It is elevated on stilts to allow 150+ km/h katabatic winds and drifting snow to pass underneath without snowdrift burial.\n\nIn contrast, **Maitri Station** (commissioned in 1989 in the Schirmacher Oasis) was built on rock foundations using insulated prefabricated panels. It relies on the pristine freshwater **Lake Priyadarshini** for water supply. MoES is currently modernizing Maitri into **Maitri-II**, an ultra-green zero-carbon replacement facility.\n\n*Key Scientific Specs:*\n- **Bharati**: Hosts ISRO's AGEOS satellite ground station, Brewer spectrophotometer, high-speed fiber comms.\n- **Maitri**: Renowned for continuous 35-year geomagnetic, seismological, and ozonesonde timeseries.`,
      relatedStation: "bharati",
      relatedDataset: "ds-pel-icecore-co2"
    },
    {
      keywords: ["indarc", "arctic", "monsoon", "kongsfjorden", "teleconnection", "ocean"],
      title: "IndARC Moored Underwater Observatory & Indian Monsoon Links",
      answer: `**IndARC** is India's first multi-sensor moored underwater observatory, anchored at a depth of **192 meters in Kongsfjorden, Svalbard (79° N)** since July 2014.\n\n**The Science Behind the Monsoon Connection:**\n1. **Arctic Amplification**: The Arctic is warming at nearly 4 times the global rate, leading to increased freshwater runoff from tidewater glaciers.\n2. **Atlantic Water Inflow**: Warmer Atlantic water pulses entering Kongsfjorden alter ocean salinity stratification and atmospheric jet streams.\n3. **Rossby Waves & Monsoon**: Disruptions in high-latitude planetary Rossby wave patterns directly modulate the sub-tropical jet stream over the Eurasian landmass, influencing the onset, intensity, and active-break spells of the **Indian Summer Monsoon (ISMR)**.`,
      relatedStation: "indarc",
      relatedDataset: "ds-indarc-oceanographic-ctd"
    },
    {
      keywords: ["ozone", "hole", "dobson", "stratosphere", "recovery", "montreal"],
      title: "Antarctic Ozone Hole Dynamics & Indian IMD Observations",
      answer: `The **Antarctic Ozone Hole** opens annually during the Austral spring (August to October) over the South Pole when extreme stratospheric cold (-80°C) forms Polar Stratospheric Clouds (PSCs). Heterogeneous chemical reactions convert inactive chlorine into ozone-destroying radicals upon spring sunrise.\n\n**MoES / IMD Findings:**\n- India Meteorological Department (IMD) has maintained continuous ozonesonde balloon releases from Maitri station since 1989.\n- Minimum total column ozone over Maitri regularly drops below **120 Dobson Units (DU)** during peak September/October.\n- Thanks to the global compliance with the Montreal Protocol, long-term MoES datasets demonstrate a positive healing trend, with complete polar stratospheric ozone recovery projected around **2066**.`,
      relatedStation: "maitri",
      relatedDataset: "ds-maitri-ozone-column"
    },
    {
      keywords: ["first", "1981", "qasim", "history", "treaty", "gangotri", "isea"],
      title: "Operation Gangotri (1981) & India's Antarctic Treaty Status",
      answer: `India launched its **1st Indian Scientific Expedition to Antarctica** on **6 December 1981** under the leadership of **Dr. S.Z. Qasim** aboard the chartered Norwegian ship *MV Polar Circle*.\n\n**Historic Milestones:**\n- The team made their historic landing on the Queen Maud Land ice shelf on **9 January 1982**, raising the Indian National Flag.\n- In 1983, India constructed its first permanent research station, **Dakshin Gangotri** (now designated Antarctic Heritage Monument #44).\n- In 1983, India acceded to the **Antarctic Treaty** and was granted prestigious **Consultative Party Status**, with full voting rights on the governance of Antarctica.\n- In 2022, the Indian Parliament passed the landmark **Indian Antarctic Act**, providing a national legal framework for polar environmental protection.`,
      relatedStation: "dakshin-gangotri",
      relatedDataset: null
    },
    {
      keywords: ["himansh", "himalaya", "third pole", "chandra", "spiti", "glacier", "sutri"],
      title: "Himansh High-Altitude Station & Third Pole Cryosphere Research",
      answer: `Established in 2016 by NCPOR (MoES), **Himansh Station** is situated at an elevation of **4,080 meters (13,386 ft)** in the Chandra Basin, Lahaul-Spiti, Himachal Pradesh.\n\n**Core Research Programs:**\n- **Glacial Mass Balance**: Direct ablation stake and DGPS monitoring of benchmark glaciers such as **Sutri Dhaka, Batal, Samudra Tapu, and Gepang Gath**.\n- **Water Security**: Quantifying glacier and snowmelt contributions to the Indus and Ganges river headwaters.\n- **GLOF Early Warning**: Monitoring expansion of high-altitude glacial lakes to prevent catastrophic Glacial Lake Outburst Floods.\n- **Aerosols & Albedo**: Measuring black carbon and mineral dust deposition that accelerates high-altitude snow melt.`,
      relatedStation: "himansh",
      relatedDataset: "ds-himansh-sutridhaka-massbalance"
    },
    {
      keywords: ["data", "download", "access", "doi", "netcdf", "csv", "license"],
      title: "MoES Open Polar Data Dissemination Policy",
      answer: `All scientific datasets generated through Indian Polar & Cryosphere missions are archived at the **National Polar Data Center (NPDC) at NCPOR, Goa** and disseminated through this portal.\n\n**How to Access:**\n1. Browse the **Scientific Dataset Explorer** module.\n2. Filter by domain (Atmosphere, Glaciology, Oceanography, Biology, Space Weather) or realm.\n3. Datasets are published under the **MoES Open Science Data Policy (CC-BY 4.0)** with registered Digital Object Identifiers (DOIs).\n4. Download in open formats including **NetCDF-4, CSV, GeoJSON, and ASCII** or visualize directly using the Dataset Visualizer studio.`,
      relatedStation: null,
      relatedDataset: "ds-pel-icecore-co2"
    }
  ]
};
