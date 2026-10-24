export const VISUALIZATION_DATASETS = [
  {
    id: "ozone-hole-history",
    title: "Antarctic Ozone Hole Evolution & Minimum Dobson Units (1980 - 2024)",
    domain: "Atmospheric Chemistry",
    realm: "antarctica",
    description: "Historical progression of the maximum spring Antarctic ozone hole area (million km²) alongside the lowest recorded total column ozone (DU) over Indian Antarctic stations.",
    xKey: "year",
    xLabel: "Observation Year",
    yAxis: [
      { key: "holeArea", label: "Max Hole Area (Million km²)", color: "#f43f5e", unit: "M km²" },
      { key: "minOzone", label: "Minimum Ozone (Dobson Units)", color: "#0ea5e9", unit: "DU" }
    ],
    data: [
      { year: "1980", holeArea: 3.3, minOzone: 205, note: "Pre-Montreal Protocol Baseline" },
      { year: "1985", holeArea: 14.2, minOzone: 154, note: "First Discovery by Farman et al." },
      { year: "1989", holeArea: 19.8, minOzone: 122, note: "Maitri Station Station Commissioned" },
      { year: "1994", holeArea: 24.1, minOzone: 92, note: "Severe Ozone Depletion Era" },
      { year: "1998", holeArea: 25.9, minOzone: 90, note: "Peak CFC Concentrations" },
      { year: "2000", holeArea: 28.3, minOzone: 86, note: "Largest Ever Recorded Area" },
      { year: "2006", holeArea: 27.5, minOzone: 85, note: "Record Low Minimum DU" },
      { year: "2010", holeArea: 22.2, minOzone: 118, note: "First Stabilization Signs" },
      { year: "2015", holeArea: 25.6, minOzone: 101, note: "Calbuco Volcano Particle Influx" },
      { year: "2019", holeArea: 16.4, minOzone: 164, note: "Sudden Stratospheric Warming Event" },
      { year: "2020", holeArea: 23.5, minOzone: 94, note: "Australian Wildfire Smoke Stratosphere" },
      { year: "2021", holeArea: 24.8, minOzone: 102, note: "Strong Polar Vortex" },
      { year: "2022", holeArea: 24.5, minOzone: 106, note: "Hunga Tonga Eruption Plume Effect" },
      { year: "2023", holeArea: 26.0, minOzone: 98, note: "Early Onset Hole" },
      { year: "2024", holeArea: 21.8, minOzone: 136, note: "Gradual Recovery Trend Towards 2060" }
    ]
  },
  {
    id: "station-temp-wind-comparison",
    title: "Seasonal Meteorological Correlation: Maitri vs Bharati Station",
    domain: "Meteorology & Climate",
    realm: "antarctica",
    description: "Monthly average temperature (°C) and max gust speed (knots) comparing Schirmacher Oasis rocky continental base (Maitri) vs Larsemann Hills coastal cliff base (Bharati).",
    xKey: "month",
    xLabel: "Month of Year",
    yAxis: [
      { key: "maitriTemp", label: "Maitri Temp (°C)", color: "#38bdf8", unit: "°C" },
      { key: "bharatiTemp", label: "Bharati Temp (°C)", color: "#10b981", unit: "°C" },
      { key: "maitriWind", label: "Maitri Max Wind (knots)", color: "#f59e0b", unit: "kts" },
      { key: "bharatiWind", label: "Bharati Max Wind (knots)", color: "#a855f7", unit: "kts" }
    ],
    data: [
      { month: "Jan", maitriTemp: -1.2, bharatiTemp: 0.8, maitriWind: 38, bharatiWind: 32 },
      { month: "Feb", maitriTemp: -4.5, bharatiTemp: -2.1, maitriWind: 42, bharatiWind: 35 },
      { month: "Mar", maitriTemp: -10.8, bharatiTemp: -8.4, maitriWind: 55, bharatiWind: 46 },
      { month: "Apr", maitriTemp: -15.4, bharatiTemp: -13.2, maitriWind: 68, bharatiWind: 58 },
      { month: "May", maitriTemp: -19.2, bharatiTemp: -16.8, maitriWind: 74, bharatiWind: 62 },
      { month: "Jun", maitriTemp: -22.5, bharatiTemp: -18.9, maitriWind: 82, bharatiWind: 68 },
      { month: "Jul", maitriTemp: -25.8, bharatiTemp: -21.4, maitriWind: 91, bharatiWind: 75 },
      { month: "Aug", maitriTemp: -26.1, bharatiTemp: -22.0, maitriWind: 88, bharatiWind: 79 },
      { month: "Sep", maitriTemp: -21.4, bharatiTemp: -17.5, maitriWind: 76, bharatiWind: 64 },
      { month: "Oct", maitriTemp: -14.6, bharatiTemp: -11.8, maitriWind: 62, bharatiWind: 52 },
      { month: "Nov", maitriTemp: -7.2, bharatiTemp: -4.5, maitriWind: 45, bharatiWind: 40 },
      { month: "Dec", maitriTemp: -2.0, bharatiTemp: 0.2, maitriWind: 36, bharatiWind: 30 }
    ]
  },
  {
    id: "ice-core-paleoclimate",
    title: "Princess Elizabeth Land Ice Core: CO2 Concentrations vs Depth & Age",
    domain: "Paleoclimatology & Ice Cores",
    realm: "antarctica",
    description: "Atmospheric CO2 trapped in polar ice bubbles across 300m drill core spanning the Holocene to modern Industrial era.",
    xKey: "depthMeters",
    xLabel: "Core Depth (Meters Below Surface)",
    yAxis: [
      { key: "co2ppm", label: "CO2 Concentration (ppm)", color: "#f43f5e", unit: "ppm" },
      { key: "deltaTemp", label: "Temperature Anomaly (°C)", color: "#06b6d4", unit: "°C" }
    ],
    data: [
      { depthMeters: "5m", ageYears: "2024 CE", co2ppm: 422, deltaTemp: 1.25 },
      { depthMeters: "25m", ageYears: "1990 CE", co2ppm: 354, deltaTemp: 0.45 },
      { depthMeters: "50m", ageYears: "1940 CE", co2ppm: 310, deltaTemp: -0.10 },
      { depthMeters: "80m", ageYears: "1880 CE", co2ppm: 290, deltaTemp: -0.35 },
      { depthMeters: "120m", ageYears: "1700 CE", co2ppm: 279, deltaTemp: -0.55 },
      { depthMeters: "160m", ageYears: "1400 CE", co2ppm: 280, deltaTemp: -0.40 },
      { depthMeters: "200m", ageYears: "1000 CE", co2ppm: 282, deltaTemp: -0.25 },
      { depthMeters: "240m", ageYears: "500 BCE", co2ppm: 275, deltaTemp: -0.65 },
      { depthMeters: "280m", ageYears: "3000 BCE", co2ppm: 268, deltaTemp: -0.90 },
      { depthMeters: "300m", ageYears: "6000 BCE", co2ppm: 262, deltaTemp: -1.15 }
    ]
  },
  {
    id: "indarc-ctd-depth-profile",
    title: "IndARC Subsea CTD: Depth vs Salinity & Temperature Profile in Arctic Kongsfjorden",
    domain: "Oceanography",
    realm: "arctic",
    description: "Multi-sensor moored CTD cast measuring Atlantic Water intrusion vs Polar Surface Water stratification across 192 meters depth.",
    xKey: "depth",
    xLabel: "Water Depth (Meters)",
    yAxis: [
      { key: "temp", label: "Water Temp (°C)", color: "#ef4444", unit: "°C" },
      { key: "salinity", label: "Practical Salinity (PSU)", color: "#3b82f6", unit: "PSU" }
    ],
    data: [
      { depth: "10m", temp: 3.8, salinity: 33.2, layer: "Glacial Melt Surface" },
      { depth: "25m", temp: 3.1, salinity: 33.8, layer: "Transitional Thermocline" },
      { depth: "50m", temp: 2.2, salinity: 34.4, layer: "Intermediate Polar Water" },
      { depth: "75m", temp: 1.6, salinity: 34.7, layer: "Intermediate Polar Water" },
      { depth: "100m", temp: 1.2, salinity: 34.85, layer: "Transformed Atlantic Water" },
      { depth: "130m", temp: 0.9, salinity: 34.92, layer: "Atlantic Inflow Core" },
      { depth: "160m", temp: 0.7, salinity: 34.95, layer: "Deep Benthic Water" },
      { depth: "192m", temp: 0.5, salinity: 34.98, layer: "Seabed IndARC Mooring Anchor" }
    ]
  },
  {
    id: "himalayan-glacier-balance",
    title: "Himalayan Glacier Net Mass Balance: Sutri Dhaka vs Batal Glacier (2014 - 2024)",
    domain: "Cryosphere",
    realm: "himalayas",
    description: "Annual net mass balance (meters water equivalent / m w.e.) monitoring cumulative ice loss in the Chandra Basin from Himansh Station.",
    xKey: "year",
    xLabel: "Hydrological Year",
    yAxis: [
      { key: "sutriDhaka", label: "Sutri Dhaka (m w.e.)", color: "#06b6d4", unit: "m w.e." },
      { key: "batalGlacier", label: "Batal Glacier (m w.e.)", color: "#f97316", unit: "m w.e." }
    ],
    data: [
      { year: "2014", sutriDhaka: -0.42, batalGlacier: -0.58 },
      { year: "2015", sutriDhaka: -0.38, batalGlacier: -0.49 },
      { year: "2016", sutriDhaka: -0.65, batalGlacier: -0.74 },
      { year: "2017", sutriDhaka: -0.51, batalGlacier: -0.62 },
      { year: "2018", sutriDhaka: -0.48, batalGlacier: -0.59 },
      { year: "2019", sutriDhaka: -0.32, batalGlacier: -0.41 },
      { year: "2020", sutriDhaka: -0.41, batalGlacier: -0.53 },
      { year: "2021", sutriDhaka: -0.82, batalGlacier: -0.96 },
      { year: "2022", sutriDhaka: -0.54, batalGlacier: -0.68 },
      { year: "2023", sutriDhaka: -0.68, batalGlacier: -0.81 },
      { year: "2024", sutriDhaka: -0.61, batalGlacier: -0.77 }
    ]
  }
];
