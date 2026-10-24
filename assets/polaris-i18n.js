/**
 * POLARIS | Ministry of Earth Sciences (MoES) - Integrated Polar Science Hub
 * Client-side High-Precision Bilingual (English <-> Hindi) Translation Engine
 * Full Bidirectional Translation: English to Hindi AND Hindi to English
 */
(function() {
  'use strict';

  var EN_TO_HI = {
  "Admin Auth": "प्रशासन व ऑथ",
  "6 Modules": "6 मॉड्यूल",
  "Core Navigation": "मुख्य मॉड्यूल",
  "Data, Papers & Tools": "डेटा, प्रकाशन व टूल्स",
  "Resources & Tools": "संसाधन व मॉड्यूल",
  "Ask Polar Assistant about ice cores, ozone hole, Bharati station, IndARC...": "आइस कोर, ओजोन छिद्र, भारती स्टेशन, इंडआर्क के बारे में ध्रुवीय सहायक से पूछें...",
  "Polar Assistant is synthesizing MoES polar archives...": "ध्रुवीय सहायक MoES ध्रुवीय अभिलेखागार का विश्लेषण कर रहा है...",
  "Polar Assistant — Polar Science Conversational Assistant": "ध्रुवीय सहायक — ध्रुवीय विज्ञान संवादात्मक सहायक",
  "Chat with Polar Assistant": "ध्रुवीय सहायक से संवाद करें",
  "Polar Assistant Science Bot": "ध्रुवीय सहायक विज्ञान बॉट",
  "Polar Scientific Community": "ध्रुवीय वैज्ञानिक समुदाय",
  "Search publications by title, authors, DOI, abstract, or keywords...": "शीर्षक, लेखक, DOI, सारांश या कीवर्ड द्वारा शोध पत्र खोजें...",
  "Search scientists by name, research area, ORCID, or institution...": "नाम, अनुसंधान क्षेत्र, ORCID या संस्थान द्वारा वैज्ञानिक खोजें...",
  "View Paper": "शोध पत्र देखें",
  "Active filters:": "सक्रिय फ़िल्टर:",
  "All Years": "सभी वर्ष",
  "All Institutions": "सभी संस्थान",
  "Overview": "अवलोकन",
  "Polar Map": "ध्रुवीय मानचित्र",
  "Map": "मानचित्र",
  "Stations": "अनुसंधान केंद्र",
  "Station": "अनुसंधान केंद्र",
  "Research": "अनुसंधान",
  "Researchers": "शोधकर्ता",
  "Papers": "शोध पत्र",
  "Publications": "प्रकाशन",
  "Datasets": "डेटासेट",
  "Dataset": "डेटासेट",
  "Media & Audio": "मीडिया और ऑडियो",
  "Media": "मीडिया",
  "Audio": "ऑडियो",
  "Timeline": "समयरेखा",
  "Visualizer": "डेटा विज़ुअलाइज़र",
  "Knowledge Graph": "ज्ञान आरेख",
  "Knowledge": "ज्ञान",
  "Graph": "आरेख",
  "Polar Assistant": "ध्रुवीय सहायक",
  "Admin CMS": "प्रशासन पोर्टल",
  "Admin": "प्रशासन",
  "CMS": "प्रबंधन प्रणाली",
  "POLARIS": "पोलारिस (POLARIS)",
  "POLARIS PORTAL": "पोलारिस पोर्टल",
  "MoES India": "पृथ्वी विज्ञान मंत्रालय, भारत",
  "Integrated Polar Science & Knowledge Repository": "एकीकृत ध्रुवीय विज्ञान एवं ज्ञान भंडार",
  "Integrated Polar Science Outreach & Knowledge Repository": "एकीकृत ध्रुवीय विज्ञान प्रसार एवं ज्ञान भंडार",
  "Integrated Polar Science Outreach, Research Knowledge Repository & Media Dissemination platform governed by the Ministry of Earth Sciences (MoES), Government of India.": "पृथ्वी विज्ञान मंत्रालय (MoES), भारत सरकार द्वारा संचालित एकीकृत ध्रुवीय विज्ञान प्रसार, अनुसंधान ज्ञान भंडार एवं मीडिया वितरण मंच।",
  "Ministry of Earth Sciences (MoES)": "पृथ्वी विज्ञान मंत्रालय (MoES)",
  "National Polar & Cryosphere Program": "राष्ट्रीय ध्रुवीय एवं क्रायोस्फीयर कार्यक्रम",
  "Welcome to": "स्वागत है",
  "MoES NPDC Index": "MoES एनपीडीसी इंडेक्स",
  "Ctrl+K": "Ctrl+K",
  "ESC": "ESC",
  "Search": "खोजें",
  "Search Portal...": "पोर्टल खोजें...",
  "खोजें": "खोजें",
  "Global Knowledge Search": "वैश्विक ज्ञान खोज",
  "Unified Indian Polar Knowledge Search": "एकीकृत भारतीय ध्रुवीय ज्ञान खोज",
  "Popular:": "लोकप्रिय:",
  "Try searching for station names (Maitri, Bharati, Himadri), scientists, or dataset DOIs.": "केंद्रों के नाम (मैत्री, भारती, हिमाद्री), वैज्ञानिकों या डेटासेट डीओआई द्वारा खोजें।",
  "Navigation: Click result to open module": "नेविगेशन: मॉड्यूल खोलने के लिए परिणाम पर क्लिक करें",
  "AI Knowledge Connected": "एआई ज्ञान से जुड़ा हुआ",
  "Language: English (EN)": "भाषा: हिन्दी (HI)",
  "भाषा: हिन्दी (HI)": "Language: English (EN)",
  "Switch to English (अंग्रेजी में बदलें)": "Switch to English (अंग्रेजी में बदलें)",
  "Switch to Hindi (हिन्दी में बदलें)": "Switch to Hindi (हिन्दी में बदलें)",
  "Switch to Dark Mode": "डार्क मोड में बदलें",
  "Switch to Light Mode": "लाइट मोड में बदलें",
  "Dark Theme": "डार्क थीम",
  "Light Theme": "लाइट थीम",
  "Dark": "डार्क",
  "Light": "लाइट",
  "LIVE SATELLITE TELEMETRY:": "सक्रिय उपग्रह टेलीमेट्री:",
  "Space Weather Kp:": "अंतरिक्ष मौसम Kp:",
  "3.2 (Quiet)": "3.2 (शांत)",
  "Antarctic Treaty Compliant": "अंटार्कटिक संधि अनुरूप",
  "Compliant with Indian Antarctic Act, 2022": "भारतीय अंटार्कटिक अधिनियम, 2022 के अनुरूप",
  "Participating MoES Institutions": "सहभागी MoES संस्थान",
  "NCPOR, Goa (Nodal Polar Agency)": "एनसीपीओआर, गोवा (नोडल ध्रुवीय एजेंसी)",
  "IMD (Atmospheric & Ozone Labs)": "आईएमडी (वायुमंडलीय एवं ओजोन प्रयोगशालाएं)",
  "INCOIS, Hyderabad (Ocean Telemetry)": "इनकोइस, हैदराबाद (महासागर टेलीमेट्री)",
  "NIOT, Chennai (IndARC Subsea Mooring)": "एनआईओटी, चेन्नई (इंडआर्क सबसी मूरिंग)",
  "IIG, Mumbai (Geomagnetism Vaults)": "आईआईजी, मुंबई (भू-चुंबकत्व वॉल्ट)",
  "NCPOR Operations Room: +91-832-2525600": "एनसीपीओआर नियंत्रण कक्ष: +91-832-2525600",
  "Open Data Policy": "ओपन डेटा नीति",
  "Antarctic Treaty Secretariat": "अंटार्कटिक संधि सचिवालय",
  "Terms & Conditions": "नियम एवं शर्तें",
  "© 2026 Ministry of Earth Sciences (MoES), Government of India. All Rights Reserved.": "© 2026 पृथ्वी विज्ञान मंत्रालय (MoES), भारत सरकार। सर्वाधिकार सुरक्षित।",
  "Enter institutional email...": "संस्थागत ईमेल दर्ज करें...",
  "Subscribe to MoES monthly polar scientific briefs, open dataset releases, and expedition logs.": "MoES के मासिक ध्रुवीय वैज्ञानिक विवरण, ओपन डेटासेट और अभियान लॉग की सदस्यता लें।",
  "Subscribe to Bulletin": "बुलेटिन की सदस्यता लें",
  "Polar Outreach & Bulletin": "ध्रुवीय आउटरीच और बुलेटिन",
  "Strategic Scientific Value": "रणनीतिक वैज्ञानिक महत्व",
  "Why Polar & Cryosphere Science is Vital for India": "भारत के लिए ध्रुवीय और क्रायोस्फीयर विज्ञान क्यों महत्वपूर्ण है",
  "India's polar missions under MoES directly influence climate modeling, weather predictions, and national food and water security.": "MoES के तहत भारत के ध्रुवीय मिशन सीधे जलवायु मॉडलिंग, मौसम पूर्वानुमान और राष्ट्रीय खाद्य एवं जल सुरक्षा को प्रभावित करते हैं।",
  "1. Monsoon Teleconnections": "1. मानसून टेलीकनेक्शन",
  "Arctic sea-ice melting in Kongsfjorden influences Rossby waves and modulation of the Indian Summer Monsoon.": "कांग्सफ्योर्डन में आर्कटिक समुद्री बर्फ का पिघलना रॉस्बी तरंगों और भारतीय ग्रीष्मकालीन मानसून के मॉड्यूलेशन को प्रभावित करता है।",
  "2. Third Pole Water Security": "2. तीसरे ध्रुव की जल सुरक्षा",
  "Himalayan glacier mass balance from Himansh Station ensures early warning against GLOFs and river headwater depletion.": "हिमांशु केंद्र से हिमालयी हिमनद द्रव्यमान संतुलन हिमनदी झील विस्फोट बाढ़ (GLOF) और नदी जलस्रोतों के क्षरण के विरुद्ध पूर्व चेतावनी सुनिश्चित करता है।",
  "3. Global Paleoclimate Data": "3. वैश्विक प्राचीन जलवायु डेटा",
  "300m Antarctic ice cores drilled by Indian teams unlock 10,000-year greenhouse gas cycles and volcanic history.": "भारतीय दलों द्वारा खोदे गए 300 मीटर अंटार्कटिक आइस कोर 10,000 वर्षों के ग्रीनहाउस गैस चक्रों और ज्वालामुखीय इतिहास को उजागर करते हैं।",
  "4. Geopolitical Leadership": "4. भू-राजनीतिक नेतृत्व",
  "As a Consultative Party to the Antarctic Treaty since 1983, India actively leads global environmental governance.": "1983 से अंटार्कटिक संधि के परामर्शी पक्ष के रूप में, भारत सक्रिय रूप से वैश्विक पर्यावरण शासन का नेतृत्व करता है।",
  "Core Portal Architecture Modules": "कोर पोर्टल संरचना मॉड्यूल",
  "10 interconnected scientific discovery, telemetry, dissemination, and governance suites.": "10 परस्पर जुड़े वैज्ञानिक अनुसंधान, टेलीमेट्री, प्रसार और शासन सूट।",
  "MoES Standard Compliant": "MoES मानक अनुरूप",
  "Explorer Modules": "अन्वेषण मॉड्यूल",
  "Interactive Antarctica & Arctic Map": "संवादात्मक अंटार्कटिका एवं आर्कटिक मानचित्र",
  "Explore Interactive Polar Map": "संवादात्मक ध्रुवीय मानचित्र का अन्वेषण करें",
  "Research Station Live Telemetry": "अनुसंधान केंद्र सजीव टेलीमेट्री",
  "Scientific Datasets & Ice Core Archives": "वैज्ञानिक डेटासेट और आइस कोर संग्रह",
  "Historical Expedition Timeline (1981–2025)": "ऐतिहासिक अभियान समयरेखा (1981–2025)",
  "Polar Soundscapes & 4K Media": "ध्रुवीय ध्वनि और 4K मीडिया",
  "Polar Assistant Polar Science Assistant": "ध्रुवीय सहायक ध्रुवीय विज्ञान सहायक",
  "Ask Polar Assistant Assistant": "ध्रुवीय सहायक सहायक से पूछें",
  "Ask Polar Assistant": "ध्रुवीय सहायक से पूछें",
  "Bharati Station (Antarctica)": "भारती केंद्र (अंटार्कटिका)",
  "Maitri Station (Antarctica)": "मैत्री केंद्र (अंटार्कटिका)",
  "Himadri (High Arctic)": "हिमाद्री (उच्च आर्कटिक)",
  "Himansh (Himalayas 4080m)": "हिमांशु (हिमालय 4080 मी)",
  "Himadri (Ny-Ålesund, Svalbard)": "हिमाद्री (नाय-आलेसुंड, स्वालबार्ड)",
  "Himansh (Spiti Valley, Himalayas)": "हिमांशु (स्पीति घाटी, हिमालय)",
  "Dakshin Gangotri": "दक्षिण गंगोत्री",
  "Dakshin Gangotri (Historical)": "दक्षिण गंगोत्री (ऐतिहासिक)",
  "Bharati Research Station": "भारती अनुसंधान केंद्र",
  "Maitri Research Station": "मैत्री अनुसंधान केंद्र",
  "Himadri Research Station": "हिमाद्री अनुसंधान केंद्र",
  "Himansh High-Altitude Station": "हिमांशु उच्च-तुंगता अनुसंधान केंद्र",
  "IndARC Underwater Observatory": "इंडआर्क जलमग्न वेधशाला",
  "IndARC Mooring": "इंडआर्क मूरिंग",
  "IndARC (Kongsfjorden Fjord)": "इंडआर्क (कांग्सफ्योर्डन फ्योर्ड)",
  "Indian Polar Research Station Explorer": "भारतीय ध्रुवीय अनुसंधान केंद्र एक्सप्लोरर",
  "Inspect 6 Stations": "6 केंद्रों का निरीक्षण करें",
  "Explore Stations": "अनुसंधान केंद्रों का अन्वेषण करें",
  "All Stations": "सभी अनुसंधान केंद्र",
  "Station Telemetry": "केंद्र टेलीमेट्री",
  "Live Station Telemetry": "सजीव केंद्र टेलीमेट्री",
  "LIVE FEED": "सजीव प्रसारण",
  "Open 360° Virtual Station Hub": "360° वर्चुअल केंद्र हब खोलें",
  "National Cryosphere Infrastructure": "राष्ट्रीय क्रायोस्फीयर अवसंरचना",
  "★ Flagship": "★ प्रमुख केंद्र",
  "Geographical Location & Mission Profile": "भौगोलिक स्थिति एवं मिशन विवरण",
  "Coordinates": "निर्देशांक",
  "Elevation": "ऊंचाई",
  "Crew Capacity": "कर्मी क्षमता",
  "Operator": "संचालक",
  "360° Virtual Observatory Tour & Hotspots": "360° वर्चुअल वेधशाला भ्रमण एवं हॉटस्पॉट",
  "Interactive VR Preview": "संवादात्मक वीआर पूर्वावलोकन",
  "Explore key internal labs, antenna arrays, and outdoor sampling masts:": "प्रमुख आंतरिक प्रयोगशालाओं, एंटीना सरणियों और बाहरी नमूना मास्ट का अन्वेषण करें:",
  "Scientific Laboratories & Sensor Suites": "वैज्ञानिक प्रयोगशालाएं एवं सेंसर सूट",
  "10-SEC REFRESH": "10-सेकंड रिफ्रेश",
  "Ambient Temperature": "परिवेश तापमान",
  "Outdoor Sensor": "बाहरी सेंसर",
  "Wind Velocity": "पवन वेग",
  "Barometric P": "वायुदाब",
  "Solar Rad": "सौर विकिरण",
  "Space Kp": "अंतरिक्ष Kp",
  "Green Microgrid:": "हरित माइक्रोग्रिड:",
  "Aurora Alert:": "ऑरोरा चेतावनी:",
  "Station Crew Roster": "केंद्र कर्मी नामावली",
  "44th ISEA": "44वां आईएसईए",
  "Station Leader": "केंद्र प्रमुख",
  "Lead Glaciologist": "प्रमुख हिमनद विज्ञानी",
  "Lead Meteorologist": "प्रमुख मौसम विज्ञानी",
  "Surgeon Medical Officer": "शल्य चिकित्सक चिकित्सा अधिकारी",
  "360° Panoramic Hotspot Simulation": "360° पैनोरमिक हॉटस्पॉट सिमुलेशन",
  "Close Hotspot Viewer": "हॉटस्पॉट दर्शक बंद करें",
  "Polar Scientists & Researchers Directory": "ध्रुवीय वैज्ञानिक एवं शोधकर्ता निर्देशिका",
  "Researchers Directory": "शोधकर्ता निर्देशिका",
  "Search researchers by name, domain, or station...": "नाम, विषय या केंद्र द्वारा शोधकर्ता खोजें...",
  "Filter by Discipline": "विषय अनुसार फ़िल्टर",
  "Filter by Research Area": "अनुसंधान क्षेत्र अनुसार फ़िल्टर",
  "Filter by Station": "केंद्र अनुसार फ़िल्टर",
  "Filter by Realm": "क्षेत्र अनुसार फ़िल्टर",
  "Filter by Domain": "डोमेन अनुसार फ़िल्टर",
  "Filter by Format": "प्रारूप अनुसार फ़िल्टर",
  "Filter by Year": "वर्ष अनुसार फ़िल्टर",
  "Filter Category:": "श्रेणी फ़िल्टर करें:",
  "All Disciplines": "सभी विषय",
  "All Domains": "सभी डोमेन",
  "All Realms": "सभी ध्रुव",
  "All Polar Realms": "सभी ध्रुवीय क्षेत्र",
  "All Formats": "सभी प्रारूप",
  "All Data Formats": "सभी डेटा प्रारूप",
  "All Scientific Domains": "सभी वैज्ञानिक विषय",
  "No Polar Scientists Found": "कोई ध्रुवीय वैज्ञानिक नहीं मिला",
  "No Researchers Found": "कोई शोधकर्ता नहीं मिला",
  "Try adjusting your search query, station filter, or discipline filter.": "अपनी खोज, केंद्र फ़िल्टर या विषय फ़िल्टर को बदलकर पुनः प्रयास करें।",
  "Reset All Filters": "सभी फ़िल्टर रीसेट करें",
  "Reset Filters": "फ़िल्टर रीसेट करें",
  "Total Researchers": "कुल शोधकर्ता",
  "Distinguished Polar Scientist": "प्रतिष्ठित ध्रुवीय वैज्ञानिक",
  "View Profile & Expeditions": "प्रोफ़ाइल और अभियान देखें",
  "View Profile": "प्रोफ़ाइल देखें",
  "Scientific Biography & Field Leadership": "वैज्ञानिक जीवनी और क्षेत्रीय नेतृत्व",
  "Key Research Domains & Specialties": "प्रमुख अनुसंधान क्षेत्र एवं विशेषताएं",
  "Deployed Stations": "तैनात केंद्र",
  "Expedition Codes": "अभियान कोड",
  "Collaborator Network & Joint Publications": "सहयोगी नेटवर्क और संयुक्त प्रकाशन",
  "View All Publications by This Scientist": "इस वैज्ञानिक के सभी प्रकाशन देखें",
  "Field Expeditions": "क्षेत्रीय अभियान",
  "Indexed Papers": "इंडेक्स किए गए शोध पत्र",
  "h-index Citation Score": "h-इंडेक्स उद्धरण स्कोर",
  "Total Citations": "कुल उद्धरण",
  "h-index": "h-इंडेक्स",
  "Citations": "उद्धरण",
  "Cites": "उद्धरण",
  "Expeds": "अभियान",
  "Discipline": "विषय",
  "Research Station": "अनुसंधान केंद्र",
  "Institution": "संस्थान",
  "Affiliation": "संबद्ध संस्थान",
  "ORCID:": "ओआरसीआईडी (ORCID):",
  "Done": "पूर्ण",
  "Scientific Papers & Publications Hub": "वैज्ञानिक शोध पत्र एवं प्रकाशन हब",
  "Peer-Reviewed Polar Publications": "समीक्षित ध्रुवीय वैज्ञानिक प्रकाशन",
  "Search publications by title, author, or keyword...": "शीर्षक, लेखक या कीवर्ड द्वारा शोध पत्र खोजें...",
  "Publication Year": "प्रकाशन वर्ष",
  "Year of Publication": "प्रकाशन का वर्ष",
  "Time Span": "समय सीमा",
  "Provenance": "उत्पत्ति एवं स्रोत",
  "No Publications Found": "कोई प्रकाशन नहीं मिला",
  "Try adjusting your search keywords, year range, or discipline filter.": "अपने खोज कीवर्ड, वर्ष सीमा या विषय फ़िल्टर को बदलकर पुनः प्रयास करें।",
  "DOI:": "डीओआई (DOI):",
  "Authors:": "लेखक:",
  "Key Finding:": "प्रमुख निष्कर्ष:",
  "Cite (APA)": "उद्धृत करें (APA)",
  "Data Provenance & AI": "डेटा स्रोत एवं एआई",
  "Data Provenance & Scientific Lineage": "डेटा स्रोत एवं वैज्ञानिक वंशावली",
  "WMO & NCPOR Verified": "WMO एवं NCPOR द्वारा सत्यापित",
  "Expedition Campaign": "अभियान मिशन",
  "Linked Datasets": "संबद्ध डेटासेट",
  "Field Methodology & Analytical Instrumentation": "क्षेत्रीय कार्यप्रणाली एवं विश्लेषणात्मक उपकरण",
  "Major Scientific Findings": "प्रमुख वैज्ञानिक खोजें",
  "Full Abstract": "संपूर्ण सारांश (Abstract)",
  "Polar Assistant Research Assistant": "ध्रुवीय सहायक अनुसंधान सहायक",
  "(Paper Q&A Mode)": "(शोध पत्र प्रश्नोत्तर मोड)",
  "🔍 Core Methodology?": "🔍 मुख्य कार्यप्रणाली?",
  "📊 Key Discoveries?": "📊 मुख्य खोजें?",
  "🌧 Monsoon Linkages?": "🌧 मानसून संबंध?",
  "Polar Assistant is analyzing publication embeddings and data provenance...": "ध्रुवीय सहायक शोध पत्र एम्बेडिंग और डेटा स्रोत का विश्लेषण कर रहा है...",
  "Export Citation:": "उद्धरण निर्यात करें:",
  "Close Reader": "रीडर बंद करें",
  "View PDF": "PDF देखें",
  "Download PDF": "PDF डाउनलोड करें",
  "Open Access": "ओपन एक्सेस",
  "Peer-Reviewed": "समीक्षित शोध",
  "National Polar Data Center (NPDC)": "राष्ट्रीय ध्रुवीय डेटा केंद्र (NPDC)",
  "Scientific Dataset & Cryosphere Explorer": "वैज्ञानिक डेटासेट एवं क्रायोस्फीयर एक्सप्लोरर",
  "Archived Datasets": "संग्रहीत डेटासेट",
  "Global Downloads": "वैश्विक डाउनलोड",
  "Dataset Downloads": "डेटासेट डाउनलोड",
  "View All Datasets": "सभी डेटासेट देखें",
  "Antarctica": "अंटार्कटिका",
  "Arctic": "आर्कटिक",
  "Himalayas (Third Pole)": "हिमालय (तीसरा ध्रुव)",
  "Himalayas": "हिमालय",
  "Southern Ocean": "दक्षिणी महासागर",
  "Glaciology & Ice Cores": "हिमनद विज्ञान एवं आइस कोर",
  "Atmospheric & Ozone": "वायुमंडलीय एवं ओजोन विज्ञान",
  "Oceanography & CTD": "समुद्र विज्ञान एवं सीटीडी",
  "Marine Biology & Krill": "समुद्री जीव विज्ञान एवं क्रिल",
  "Space Weather & Magnetism": "अंतरिक्ष मौसम एवं चुंबकत्व",
  "NetCDF-4": "NetCDF-4",
  "CSV Spreadsheet": "CSV स्प्रेडशीट",
  "GeoJSON": "GeoJSON",
  "ASCII Tables": "ASCII टेबल्स",
  "Inspect Metadata & Preview": "मेटाडेटा निरीक्षण एवं पूर्वावलोकन",
  "Visualize": "विज़ुअलाइज़ करें",
  "Export CSV": "CSV निर्यात करें",
  "Digital Object Identifier": "डिजिटल ऑब्जेक्ट आइडेंटिफ़ायर (DOI)",
  "Primary Investigators": "प्रमुख अन्वेषक",
  "Principal Investigator": "प्रधान अन्वेषक",
  "Temporal Span": "कालिक अवधि (Temporal Span)",
  "Quality Control Tier": "गुणवत्ता नियंत्रण स्तर",
  "License Policy": "लाइसेंस नीति",
  "Available Formats": "उपलब्ध प्रारूप",
  "Scientific Abstract": "वैज्ञानिक सारांश",
  "Sample Observation Records Preview": "नमूना अवलोकन रिकॉर्ड पूर्वावलोकन",
  "First 6 Rows": "प्रथम 6 पंक्तियां",
  "How to Cite this Dataset (APA Format):": "इस डेटासेट को कैसे उद्धृत करें (APA प्रारूप):",
  "Download Sample CSV": "नमूना CSV डाउनलोड करें",
  "Export JSON Schema": "JSON स्कीमा निर्यात करें",
  "Close Metadata Inspector": "मेटाडेटा दर्शक बंद करें",
  "Download Dataset": "डेटासेट डाउनलोड करें",
  "Download JSON": "JSON डाउनलोड करें",
  "Download CSV": "CSV डाउनलोड करें",
  "Media Dissemination & Public Outreach": "मीडिया प्रसार एवं सार्वजनिक आउटरीच",
  "Polar Media Repository & Soundscapes Studio": "ध्रुवीय मीडिया भंडार एवं साउंडस्केप्स स्टूडियो",
  "View High-Res": "उच्च रिज़ॉल्यूशन देखें",
  "Click to Launch 4K Stream": "4K स्ट्रीम शुरू करने के लिए क्लिक करें",
  "Interactive Chapters": "संवादात्मक अध्याय",
  "MoES Polar Outreach Series": "MoES ध्रुवीय आउटरीच श्रृंखला",
  "High-Latitude Acoustic Hydrophone Capture": "उच्च-अक्षांश ध्वनिक हाइड्रोफोन रिकॉर्डिंग",
  "PAUSE SOUNDSCAPE": "ध्वनि रोकें",
  "PLAY SOUNDSCAPE": "ध्वनि चलाएं",
  "Download Kit": "किट डाउनलोड करें",
  "National Polar Mission Archives": "राष्ट्रीय ध्रुवीय मिशन अभिलेखागार",
  "Indian Polar Expedition Odyssey (1981 - 2025)": "भारतीय ध्रुवीय अभियान यात्रा (1981 - 2025)",
  "Expedition Leader": "अभियान प्रमुख",
  "Polar Vessel / Mode": "ध्रुवीय पोत / साधन",
  "Key Scientific Deliverables:": "प्रमुख वैज्ञानिक परिणाम:",
  "Specimens Collected:": "एकत्रित नमूने:",
  "Data Volume:": "डेटा आकार:",
  "Inspect Full Mission Log & Milestones": "संपूर्ण मिशन लॉग एवं मील के पत्थर देखें",
  "Participants": "प्रतिभागी",
  "Mission Vessel": "मिशन पोत",
  "Departure Staging": "प्रस्थान स्थल",
  "Participating Institutes": "सहभागी संस्थान",
  "Mission Highlights & Discoveries": "मिशन की प्रमुख विशेषताएं एवं खोजें",
  "Full Scientific Mandate": "संपूर्ण वैज्ञानिक अधिदेश",
  "Close Archive Log": "अभिलेखागार लॉग बंद करें",
  "Multi-Parametric Cryosphere Studio": "बहु-मापदंडीय क्रायोस्फीयर स्टूडियो",
  "Interactive Polar Dataset Visualizer": "संवादात्मक ध्रुवीय डेटासेट विज़ुअलाइज़र",
  "Line": "लाइन चार्ट",
  "Bar": "बार चार्ट",
  "PNG": "PNG निर्यात",
  "CSV": "CSV निर्यात",
  "Observation Data Stream": "अवलोकन डेटा स्ट्रीम",
  "Interactive Cryosphere Ontology": "संवादात्मक क्रायोस्फीयर ऑन्टोलॉजी",
  "Interactive Polar Knowledge Graph": "संवादात्मक ध्रुवीय ज्ञान आरेख",
  "Institutes": "संस्थान",
  "Expeditions": "अभियान",
  "Scientists": "वैज्ञानिक",
  "All Node Types": "सभी नोड प्रकार",
  "Institutions": "संस्थान",
  "Disciplines": "विषय",
  "Click & drag nodes to inspect physics • Drag canvas to pan": "भौतिकी देखने के लिए नोड्स को खींचें • पैन करने के लिए कैनवास खींचें",
  "Node Inspector": "नोड निरीक्षक",
  "Direct Network Connections:": "प्रत्यक्ष नेटवर्क कनेक्शन:",
  "Select any node in the canvas to inspect ontology connections.": "ऑन्टोलॉजी कनेक्शन देखने के लिए कैनवास में किसी भी नोड का चयन करें।",
  "MoES Scientist & Reviewer Console": "MoES वैज्ञानिक एवं समीक्षक कंसोल",
  "National Polar Data Governance & Content Approval Hub": "राष्ट्रीय ध्रुवीय डेटा शासन एवं सामग्री अनुमोदन हब",
  "Pending Dataset Submissions for National Archival": "राष्ट्रीय संग्रह हेतु लंबित डेटासेट प्रस्तुतियां",
  "Submission Date": "जमा करने की तिथि",
  "Data Volume": "डेटा परिमाण",
  "Record Tiers": "रिकॉर्ड स्तर",
  "Request Scientific Revision": "वैज्ञानिक संशोधन का अनुरोध करें",
  "Approve, Mint DOI & Publish to NPDC": "स्वीकृत करें, DOI बनाएं एवं NPDC पर प्रकाशित करें",
  "Authorize & Disseminate": "अधिकृत करें एवं प्रसारित करें",
  "Outreach Article Markdown Editor": "आउटरीच लेख मार्कडाउन संपादक",
  "LIVE PREVIEW ON RIGHT": "दाईं ओर सजीव पूर्वावलोकन",
  "Headline": "शीर्षक",
  "Markdown Body Content": "मार्कडाउन सामग्री",
  "Publish Article to Outreach Feed": "आउटरीच फ़ीड में लेख प्रकाशित करें",
  "Public Outreach Preview": "सार्वजनिक प्रसार पूर्वावलोकन",
  "Bilingual English/Hindi Supported": "द्विभाषी अंग्रेजी/हिन्दी समर्थित",
  "Total Portal Queries (2026)": "कुल पोर्टल प्रश्न (2026)",
  "International Polar Research Data Dissemination Heatmap": "अंतरराष्ट्रीय ध्रुवीय अनुसंधान डेटा प्रसार हीटमैप",
  "Ministry of Earth Sciences (MoES) & NCPOR": "पृथ्वी विज्ञान मंत्रालय (MoES) एवं एनसीपीओआर",
  "Explore": "अन्वेषण करें",
  "Details": "विवरण",
  "Back": "वापस",
  "Next": "आगे",
  "Previous": "पिछला",
  "Close": "बंद करें",
  "Submit": "जमा करें",
  "Clear": "साफ़ करें",
  "Copy": "कॉपी करें",
  "Copied!": "कॉपी किया गया!",
  "Copied": "कॉपी किया गया",
  "Play": "चलाएं",
  "Pause": "रोकें",
  "Mute": "म्यूट",
  "Unmute": "अनम्यूट",
  "Loading...": "लोड हो रहा है...",
  "Loading": "लोड हो रहा है",
  "No records found": "कोई रिकॉर्ड नहीं मिला",
  "No data available": "कोई डेटा उपलब्ध नहीं",
  "Status": "स्थिति",
  "Active": "सक्रिय",
  "Operational": "परिचालन में",
  "Seasonal": "मौसमी",
  "Year-Round": "वर्ष भर",
  "Live Telemetry": "सजीव टेलीमेट्री",
  "Real-Time Telemetry": "रीयल-टाइम टेलीमेट्री",
  "Atmospheric Pressure": "वायुमंडलीय दबाव",
  "Wind Speed": "हवा की गति",
  "Temperature": "तापमान",
  "Humidity": "आर्द्रता",
  "Leader": "अभियान प्रमुख",
  "Vessel": "अनुसंधान पोत",
  "Departure": "प्रस्थान",
  "Return": "वापसी",
  "Season": "सत्र / वर्ष",
  "Key Objectives": "प्रमुख उद्देश्य",
  "Scientific Achievements": "वैज्ञानिक उपलब्धियां",
  "View": "देखें",
  "Preview": "पूर्वावलोकन",
  "Download": "डाउनलोड",
  "Filter": "फ़िल्टर",
  "Grid": "ग्रिड दृश्य",
  "List": "सूची दृश्य",
  "Send": "भेजें"
};

  var WORD_EN_TO_HI = {
  "Station": "अनुसंधान केंद्र",
  "Stations": "अनुसंधान केंद्र",
  "Research": "अनुसंधान",
  "Researchers": "शोधकर्ता",
  "Scientist": "वैज्ञानिक",
  "Scientists": "वैज्ञानिक",
  "Publication": "प्रकाशन",
  "Publications": "प्रकाशन",
  "Paper": "शोध पत्र",
  "Papers": "शोध पत्र",
  "Expedition": "अभियान",
  "Expeditions": "अभियान",
  "Dataset": "डेटासेट",
  "Datasets": "डेटासेट",
  "Overview": "अवलोकन",
  "Map": "मानचित्र",
  "Telemetry": "टेलीमेट्री",
  "Temperature": "तापमान",
  "Wind": "पवन / हवा",
  "Velocity": "वेग",
  "Depth": "गहराई",
  "Ice": "बर्फ",
  "Glacier": "हिमनद",
  "Ocean": "महासागर",
  "Atmosphere": "वायुमंडल",
  "Atmospheric": "वायुमंडलीय",
  "Ozone": "ओजोन",
  "Climate": "जलवायु",
  "Satellite": "उपग्रह",
  "Timeline": "समयरेखा",
  "Visualizer": "विज़ुअलाइज़र",
  "Knowledge": "ज्ञान",
  "Graph": "आरेख",
  "Download": "डाउनलोड",
  "Records": "रिकॉर्ड",
  "Personnel": "कर्मी",
  "Summer": "ग्रीष्म",
  "Winter": "शीत",
  "Permanent": "स्थायी",
  "Historical": "ऐतिहासिक",
  "Monument": "स्मारक",
  "Observatory": "वेधशाला",
  "Subsea": "उप-समुद्र",
  "Mooring": "मूरिंग",
  "Himalayan": "हिमालयी",
  "Antarctic": "अंटार्कटिक",
  "Arctic": "आर्कटिक",
  "Southern": "दक्षिणी",
  "Indian": "भारतीय",
  "India": "भारत",
  "Ministry": "मंत्रालय",
  "Sciences": "विज्ञान",
  "Science": "विज्ञान",
  "Program": "कार्यक्रम",
  "National": "राष्ट्रीय",
  "Repository": "भंडार",
  "Outreach": "प्रसार",
  "Dissemination": "प्रसार",
  "Archive": "संग्रह",
  "Archives": "संग्रह",
  "Search": "खोजें",
  "Filter": "फ़िल्टर",
  "Status": "स्थिति",
  "Active": "सक्रिय",
  "Operational": "परिचालन में",
  "Decommissioned": "सेवामुक्त",
  "Verified": "सत्यापित",
  "Compliant": "अनुरूप",
  "Treaty": "संधि",
  "Secretariat": "सचिवालय",
  "Policy": "नीति",
  "Terms": "नियम",
  "Conditions": "शर्तें",
  "Subscribe": "सदस्यता लें",
  "Bulletin": "बुलेटिन",
  "Leader": "प्रमुख",
  "Vessel": "पोत",
  "Departure": "प्रस्थान",
  "Return": "वापसी",
  "Published": "प्रकाशित",
  "Author": "लेखक",
  "Authors": "लेखक",
  "License": "लाइसेंस",
  "Format": "प्रारूप",
  "Formats": "प्रारूप",
  "Parameters": "मापदंड",
  "Resolution": "रिज़ॉल्यूशन",
  "Coverage": "कवरेज",
  "Close": "बंद करें",
  "Submit": "जमा करें",
  "Clear": "साफ़ करें",
  "Copy": "कॉपी करें",
  "Copied": "कॉपी किया गया",
  "Details": "विवरण",
  "Back": "वापस",
  "Next": "आगे",
  "Previous": "पिछला",
  "View": "देखें",
  "Preview": "पूर्वावलोकन",
  "Loading": "लोड हो रहा है",
  "Year": "वर्ष",
  "Years": "वर्ष",
  "Level": "स्तर",
  "Above": "ऊपर",
  "Sea": "समुद्र",
  "Sea-ice": "समुद्री बर्फ",
  "Core": "कोर",
  "Cores": "कोर",
  "Citations": "उद्धरण",
  "Citation": "उद्धरण",
  "Discipline": "विषय",
  "Disciplines": "विषय",
  "Institution": "संस्थान",
  "Institutions": "संस्थान",
  "Profile": "प्रोफ़ाइल"
};

  var HI_TO_EN = {
  "प्रशासन व ऑथ": "Admin Auth",
  "6 मॉड्यूल": "6 Modules",
  "मुख्य मॉड्यूल": "Core Navigation",
  "डेटा, प्रकाशन व टूल्स": "Data, Papers & Tools",
  "संसाधन व मॉड्यूल": "Resources & Tools",
  "आइस कोर, ओजोन छिद्र, भारती स्टेशन, इंडआर्क के बारे में ध्रुवीय सहायक से पूछें...": "Ask Polar Assistant about ice cores, ozone hole, Bharati station, IndARC...",
  "ध्रुवीय सहायक MoES ध्रुवीय अभिलेखागार का विश्लेषण कर रहा है...": "Polar Assistant is synthesizing MoES polar archives...",
  "ध्रुवीय सहायक — ध्रुवीय विज्ञान संवादात्मक सहायक": "Polar Assistant — Polar Science Conversational Assistant",
  "ध्रुवीय सहायक से संवाद करें": "Chat with Polar Assistant",
  "ध्रुवीय सहायक विज्ञान बॉट": "Polar Assistant Science Bot",
  "ध्रुवीय वैज्ञानिक समुदाय": "Polar Scientific Community",
  "शीर्षक, लेखक, DOI, सारांश या कीवर्ड द्वारा शोध पत्र खोजें...": "Search publications by title, authors, DOI, abstract, or keywords...",
  "नाम, अनुसंधान क्षेत्र, ORCID या संस्थान द्वारा वैज्ञानिक खोजें...": "Search scientists by name, research area, ORCID, or institution...",
  "शोध पत्र देखें": "View Paper",
  "सक्रिय फ़िल्टर:": "Active filters:",
  "सभी वर्ष": "All Years",
  "सभी संस्थान": "All Institutions",
  "अवलोकन": "Overview",
  "ध्रुवीय मानचित्र": "Polar Map",
  "मानचित्र": "Map",
  "अनुसंधान केंद्र": "Stations",
  "अनुसंधान": "Research",
  "शोधकर्ता": "Researchers",
  "शोध पत्र": "Papers",
  "प्रकाशन": "Publications",
  "डेटासेट": "Datasets",
  "मीडिया और ऑडियो": "Media & Audio",
  "मीडिया": "Media",
  "ऑडियो": "Audio",
  "समयरेखा": "Timeline",
  "डेटा विज़ुअलाइज़र": "Visualizer",
  "ज्ञान आरेख": "Knowledge Graph",
  "ज्ञान": "Knowledge",
  "आरेख": "Graph",
  "ध्रुवीय सहायक": "Polar Assistant",
  "प्रशासन पोर्टल": "Admin CMS",
  "प्रशासन": "Admin",
  "प्रबंधन प्रणाली": "CMS",
  "पोलारिस (POLARIS)": "POLARIS",
  "पोलारिस पोर्टल": "POLARIS PORTAL",
  "पृथ्वी विज्ञान मंत्रालय, भारत": "MoES India",
  "एकीकृत ध्रुवीय विज्ञान एवं ज्ञान भंडार": "Integrated Polar Science & Knowledge Repository",
  "एकीकृत ध्रुवीय विज्ञान प्रसार एवं ज्ञान भंडार": "Integrated Polar Science Outreach & Knowledge Repository",
  "पृथ्वी विज्ञान मंत्रालय (MoES), भारत सरकार द्वारा संचालित एकीकृत ध्रुवीय विज्ञान प्रसार, अनुसंधान ज्ञान भंडार एवं मीडिया वितरण मंच।": "Integrated Polar Science Outreach, Research Knowledge Repository & Media Dissemination platform governed by the Ministry of Earth Sciences (MoES), Government of India.",
  "पृथ्वी विज्ञान मंत्रालय (MoES)": "Ministry of Earth Sciences (MoES)",
  "राष्ट्रीय ध्रुवीय एवं क्रायोस्फीयर कार्यक्रम": "National Polar & Cryosphere Program",
  "स्वागत है": "Welcome to",
  "MoES एनपीडीसी इंडेक्स": "MoES NPDC Index",
  "Ctrl+K": "Ctrl+K",
  "ESC": "ESC",
  "खोजें": "Search",
  "पोर्टल खोजें...": "Search Portal...",
  "वैश्विक ज्ञान खोज": "Global Knowledge Search",
  "एकीकृत भारतीय ध्रुवीय ज्ञान खोज": "Unified Indian Polar Knowledge Search",
  "लोकप्रिय:": "Popular:",
  "केंद्रों के नाम (मैत्री, भारती, हिमाद्री), वैज्ञानिकों या डेटासेट डीओआई द्वारा खोजें।": "Try searching for station names (Maitri, Bharati, Himadri), scientists, or dataset DOIs.",
  "नेविगेशन: मॉड्यूल खोलने के लिए परिणाम पर क्लिक करें": "Navigation: Click result to open module",
  "एआई ज्ञान से जुड़ा हुआ": "AI Knowledge Connected",
  "भाषा: हिन्दी (HI)": "Language: English (EN)",
  "Language: English (EN)": "भाषा: हिन्दी (HI)",
  "Switch to English (अंग्रेजी में बदलें)": "Switch to English (अंग्रेजी में बदलें)",
  "Switch to Hindi (हिन्दी में बदलें)": "Switch to Hindi (हिन्दी में बदलें)",
  "डार्क मोड में बदलें": "Switch to Dark Mode",
  "लाइट मोड में बदलें": "Switch to Light Mode",
  "डार्क थीम": "Dark Theme",
  "लाइट थीम": "Light Theme",
  "डार्क": "Dark",
  "लाइट": "Light",
  "सक्रिय उपग्रह टेलीमेट्री:": "LIVE SATELLITE TELEMETRY:",
  "अंतरिक्ष मौसम Kp:": "Space Weather Kp:",
  "3.2 (शांत)": "3.2 (Quiet)",
  "अंटार्कटिक संधि अनुरूप": "Antarctic Treaty Compliant",
  "भारतीय अंटार्कटिक अधिनियम, 2022 के अनुरूप": "Compliant with Indian Antarctic Act, 2022",
  "सहभागी MoES संस्थान": "Participating MoES Institutions",
  "एनसीपीओआर, गोवा (नोडल ध्रुवीय एजेंसी)": "NCPOR, Goa (Nodal Polar Agency)",
  "आईएमडी (वायुमंडलीय एवं ओजोन प्रयोगशालाएं)": "IMD (Atmospheric & Ozone Labs)",
  "इनकोइस, हैदराबाद (महासागर टेलीमेट्री)": "INCOIS, Hyderabad (Ocean Telemetry)",
  "एनआईओटी, चेन्नई (इंडआर्क सबसी मूरिंग)": "NIOT, Chennai (IndARC Subsea Mooring)",
  "आईआईजी, मुंबई (भू-चुंबकत्व वॉल्ट)": "IIG, Mumbai (Geomagnetism Vaults)",
  "एनसीपीओआर नियंत्रण कक्ष: +91-832-2525600": "NCPOR Operations Room: +91-832-2525600",
  "ओपन डेटा नीति": "Open Data Policy",
  "अंटार्कटिक संधि सचिवालय": "Antarctic Treaty Secretariat",
  "नियम एवं शर्तें": "Terms & Conditions",
  "© 2026 पृथ्वी विज्ञान मंत्रालय (MoES), भारत सरकार। सर्वाधिकार सुरक्षित।": "© 2026 Ministry of Earth Sciences (MoES), Government of India. All Rights Reserved.",
  "संस्थागत ईमेल दर्ज करें...": "Enter institutional email...",
  "MoES के मासिक ध्रुवीय वैज्ञानिक विवरण, ओपन डेटासेट और अभियान लॉग की सदस्यता लें।": "Subscribe to MoES monthly polar scientific briefs, open dataset releases, and expedition logs.",
  "बुलेटिन की सदस्यता लें": "Subscribe to Bulletin",
  "ध्रुवीय आउटरीच और बुलेटिन": "Polar Outreach & Bulletin",
  "रणनीतिक वैज्ञानिक महत्व": "Strategic Scientific Value",
  "भारत के लिए ध्रुवीय और क्रायोस्फीयर विज्ञान क्यों महत्वपूर्ण है": "Why Polar & Cryosphere Science is Vital for India",
  "MoES के तहत भारत के ध्रुवीय मिशन सीधे जलवायु मॉडलिंग, मौसम पूर्वानुमान और राष्ट्रीय खाद्य एवं जल सुरक्षा को प्रभावित करते हैं।": "India's polar missions under MoES directly influence climate modeling, weather predictions, and national food and water security.",
  "1. मानसून टेलीकनेक्शन": "1. Monsoon Teleconnections",
  "कांग्सफ्योर्डन में आर्कटिक समुद्री बर्फ का पिघलना रॉस्बी तरंगों और भारतीय ग्रीष्मकालीन मानसून के मॉड्यूलेशन को प्रभावित करता है।": "Arctic sea-ice melting in Kongsfjorden influences Rossby waves and modulation of the Indian Summer Monsoon.",
  "2. तीसरे ध्रुव की जल सुरक्षा": "2. Third Pole Water Security",
  "हिमांशु केंद्र से हिमालयी हिमनद द्रव्यमान संतुलन हिमनदी झील विस्फोट बाढ़ (GLOF) और नदी जलस्रोतों के क्षरण के विरुद्ध पूर्व चेतावनी सुनिश्चित करता है।": "Himalayan glacier mass balance from Himansh Station ensures early warning against GLOFs and river headwater depletion.",
  "3. वैश्विक प्राचीन जलवायु डेटा": "3. Global Paleoclimate Data",
  "भारतीय दलों द्वारा खोदे गए 300 मीटर अंटार्कटिक आइस कोर 10,000 वर्षों के ग्रीनहाउस गैस चक्रों और ज्वालामुखीय इतिहास को उजागर करते हैं।": "300m Antarctic ice cores drilled by Indian teams unlock 10,000-year greenhouse gas cycles and volcanic history.",
  "4. भू-राजनीतिक नेतृत्व": "4. Geopolitical Leadership",
  "1983 से अंटार्कटिक संधि के परामर्शी पक्ष के रूप में, भारत सक्रिय रूप से वैश्विक पर्यावरण शासन का नेतृत्व करता है।": "As a Consultative Party to the Antarctic Treaty since 1983, India actively leads global environmental governance.",
  "कोर पोर्टल संरचना मॉड्यूल": "Core Portal Architecture Modules",
  "10 परस्पर जुड़े वैज्ञानिक अनुसंधान, टेलीमेट्री, प्रसार और शासन सूट।": "10 interconnected scientific discovery, telemetry, dissemination, and governance suites.",
  "MoES मानक अनुरूप": "MoES Standard Compliant",
  "अन्वेषण मॉड्यूल": "Explorer Modules",
  "संवादात्मक अंटार्कटिका एवं आर्कटिक मानचित्र": "Interactive Antarctica & Arctic Map",
  "संवादात्मक ध्रुवीय मानचित्र का अन्वेषण करें": "Explore Interactive Polar Map",
  "अनुसंधान केंद्र सजीव टेलीमेट्री": "Research Station Live Telemetry",
  "वैज्ञानिक डेटासेट और आइस कोर संग्रह": "Scientific Datasets & Ice Core Archives",
  "ऐतिहासिक अभियान समयरेखा (1981–2025)": "Historical Expedition Timeline (1981–2025)",
  "ध्रुवीय ध्वनि और 4K मीडिया": "Polar Soundscapes & 4K Media",
  "ध्रुवीय सहायक ध्रुवीय विज्ञान सहायक": "Polar Assistant Polar Science Assistant",
  "ध्रुवीय सहायक सहायक से पूछें": "Ask Polar Assistant Assistant",
  "ध्रुवीय सहायक से पूछें": "Ask Polar Assistant",
  "भारती केंद्र (अंटार्कटिका)": "Bharati Station (Antarctica)",
  "मैत्री केंद्र (अंटार्कटिका)": "Maitri Station (Antarctica)",
  "हिमाद्री (उच्च आर्कटिक)": "Himadri (High Arctic)",
  "हिमांशु (हिमालय 4080 मी)": "Himansh (Himalayas 4080m)",
  "हिमाद्री (नाय-आलेसुंड, स्वालबार्ड)": "Himadri (Ny-Ålesund, Svalbard)",
  "हिमांशु (स्पीति घाटी, हिमालय)": "Himansh (Spiti Valley, Himalayas)",
  "दक्षिण गंगोत्री": "Dakshin Gangotri",
  "दक्षिण गंगोत्री (ऐतिहासिक)": "Dakshin Gangotri (Historical)",
  "भारती अनुसंधान केंद्र": "Bharati Research Station",
  "मैत्री अनुसंधान केंद्र": "Maitri Research Station",
  "हिमाद्री अनुसंधान केंद्र": "Himadri Research Station",
  "हिमांशु उच्च-तुंगता अनुसंधान केंद्र": "Himansh High-Altitude Station",
  "इंडआर्क जलमग्न वेधशाला": "IndARC Underwater Observatory",
  "इंडआर्क मूरिंग": "IndARC Mooring",
  "इंडआर्क (कांग्सफ्योर्डन फ्योर्ड)": "IndARC (Kongsfjorden Fjord)",
  "भारतीय ध्रुवीय अनुसंधान केंद्र एक्सप्लोरर": "Indian Polar Research Station Explorer",
  "6 केंद्रों का निरीक्षण करें": "Inspect 6 Stations",
  "अनुसंधान केंद्रों का अन्वेषण करें": "Explore Stations",
  "सभी अनुसंधान केंद्र": "All Stations",
  "केंद्र टेलीमेट्री": "Station Telemetry",
  "सजीव केंद्र टेलीमेट्री": "Live Station Telemetry",
  "सजीव प्रसारण": "LIVE FEED",
  "360° वर्चुअल केंद्र हब खोलें": "Open 360° Virtual Station Hub",
  "राष्ट्रीय क्रायोस्फीयर अवसंरचना": "National Cryosphere Infrastructure",
  "★ प्रमुख केंद्र": "★ Flagship",
  "भौगोलिक स्थिति एवं मिशन विवरण": "Geographical Location & Mission Profile",
  "निर्देशांक": "Coordinates",
  "ऊंचाई": "Elevation",
  "कर्मी क्षमता": "Crew Capacity",
  "संचालक": "Operator",
  "360° वर्चुअल वेधशाला भ्रमण एवं हॉटस्पॉट": "360° Virtual Observatory Tour & Hotspots",
  "संवादात्मक वीआर पूर्वावलोकन": "Interactive VR Preview",
  "प्रमुख आंतरिक प्रयोगशालाओं, एंटीना सरणियों और बाहरी नमूना मास्ट का अन्वेषण करें:": "Explore key internal labs, antenna arrays, and outdoor sampling masts:",
  "वैज्ञानिक प्रयोगशालाएं एवं सेंसर सूट": "Scientific Laboratories & Sensor Suites",
  "10-सेकंड रिफ्रेश": "10-SEC REFRESH",
  "परिवेश तापमान": "Ambient Temperature",
  "बाहरी सेंसर": "Outdoor Sensor",
  "पवन वेग": "Wind Velocity",
  "वायुदाब": "Barometric P",
  "सौर विकिरण": "Solar Rad",
  "अंतरिक्ष Kp": "Space Kp",
  "हरित माइक्रोग्रिड:": "Green Microgrid:",
  "ऑरोरा चेतावनी:": "Aurora Alert:",
  "केंद्र कर्मी नामावली": "Station Crew Roster",
  "44वां आईएसईए": "44th ISEA",
  "केंद्र प्रमुख": "Station Leader",
  "प्रमुख हिमनद विज्ञानी": "Lead Glaciologist",
  "प्रमुख मौसम विज्ञानी": "Lead Meteorologist",
  "शल्य चिकित्सक चिकित्सा अधिकारी": "Surgeon Medical Officer",
  "360° पैनोरमिक हॉटस्पॉट सिमुलेशन": "360° Panoramic Hotspot Simulation",
  "हॉटस्पॉट दर्शक बंद करें": "Close Hotspot Viewer",
  "ध्रुवीय वैज्ञानिक एवं शोधकर्ता निर्देशिका": "Polar Scientists & Researchers Directory",
  "शोधकर्ता निर्देशिका": "Researchers Directory",
  "नाम, विषय या केंद्र द्वारा शोधकर्ता खोजें...": "Search researchers by name, domain, or station...",
  "विषय अनुसार फ़िल्टर": "Filter by Discipline",
  "अनुसंधान क्षेत्र अनुसार फ़िल्टर": "Filter by Research Area",
  "केंद्र अनुसार फ़िल्टर": "Filter by Station",
  "क्षेत्र अनुसार फ़िल्टर": "Filter by Realm",
  "डोमेन अनुसार फ़िल्टर": "Filter by Domain",
  "प्रारूप अनुसार फ़िल्टर": "Filter by Format",
  "वर्ष अनुसार फ़िल्टर": "Filter by Year",
  "श्रेणी फ़िल्टर करें:": "Filter Category:",
  "सभी विषय": "All Disciplines",
  "सभी डोमेन": "All Domains",
  "सभी ध्रुव": "All Realms",
  "सभी ध्रुवीय क्षेत्र": "All Polar Realms",
  "सभी प्रारूप": "All Formats",
  "सभी डेटा प्रारूप": "All Data Formats",
  "सभी वैज्ञानिक विषय": "All Scientific Domains",
  "कोई ध्रुवीय वैज्ञानिक नहीं मिला": "No Polar Scientists Found",
  "कोई शोधकर्ता नहीं मिला": "No Researchers Found",
  "अपनी खोज, केंद्र फ़िल्टर या विषय फ़िल्टर को बदलकर पुनः प्रयास करें।": "Try adjusting your search query, station filter, or discipline filter.",
  "सभी फ़िल्टर रीसेट करें": "Reset All Filters",
  "फ़िल्टर रीसेट करें": "Reset Filters",
  "कुल शोधकर्ता": "Total Researchers",
  "प्रतिष्ठित ध्रुवीय वैज्ञानिक": "Distinguished Polar Scientist",
  "प्रोफ़ाइल और अभियान देखें": "View Profile & Expeditions",
  "प्रोफ़ाइल देखें": "View Profile",
  "वैज्ञानिक जीवनी और क्षेत्रीय नेतृत्व": "Scientific Biography & Field Leadership",
  "प्रमुख अनुसंधान क्षेत्र एवं विशेषताएं": "Key Research Domains & Specialties",
  "तैनात केंद्र": "Deployed Stations",
  "अभियान कोड": "Expedition Codes",
  "सहयोगी नेटवर्क और संयुक्त प्रकाशन": "Collaborator Network & Joint Publications",
  "इस वैज्ञानिक के सभी प्रकाशन देखें": "View All Publications by This Scientist",
  "क्षेत्रीय अभियान": "Field Expeditions",
  "इंडेक्स किए गए शोध पत्र": "Indexed Papers",
  "h-इंडेक्स उद्धरण स्कोर": "h-index Citation Score",
  "कुल उद्धरण": "Total Citations",
  "h-इंडेक्स": "h-index",
  "उद्धरण": "Citations",
  "अभियान": "Expeds",
  "विषय": "Discipline",
  "संस्थान": "Institution",
  "संबद्ध संस्थान": "Affiliation",
  "ओआरसीआईडी (ORCID):": "ORCID:",
  "पूर्ण": "Done",
  "वैज्ञानिक शोध पत्र एवं प्रकाशन हब": "Scientific Papers & Publications Hub",
  "समीक्षित ध्रुवीय वैज्ञानिक प्रकाशन": "Peer-Reviewed Polar Publications",
  "शीर्षक, लेखक या कीवर्ड द्वारा शोध पत्र खोजें...": "Search publications by title, author, or keyword...",
  "प्रकाशन वर्ष": "Publication Year",
  "प्रकाशन का वर्ष": "Year of Publication",
  "समय सीमा": "Time Span",
  "उत्पत्ति एवं स्रोत": "Provenance",
  "कोई प्रकाशन नहीं मिला": "No Publications Found",
  "अपने खोज कीवर्ड, वर्ष सीमा या विषय फ़िल्टर को बदलकर पुनः प्रयास करें।": "Try adjusting your search keywords, year range, or discipline filter.",
  "डीओआई (DOI):": "DOI:",
  "लेखक:": "Authors:",
  "प्रमुख निष्कर्ष:": "Key Finding:",
  "उद्धृत करें (APA)": "Cite (APA)",
  "डेटा स्रोत एवं एआई": "Data Provenance & AI",
  "डेटा स्रोत एवं वैज्ञानिक वंशावली": "Data Provenance & Scientific Lineage",
  "WMO एवं NCPOR द्वारा सत्यापित": "WMO & NCPOR Verified",
  "अभियान मिशन": "Expedition Campaign",
  "संबद्ध डेटासेट": "Linked Datasets",
  "क्षेत्रीय कार्यप्रणाली एवं विश्लेषणात्मक उपकरण": "Field Methodology & Analytical Instrumentation",
  "प्रमुख वैज्ञानिक खोजें": "Major Scientific Findings",
  "संपूर्ण सारांश (Abstract)": "Full Abstract",
  "ध्रुवीय सहायक अनुसंधान सहायक": "Polar Assistant Research Assistant",
  "(शोध पत्र प्रश्नोत्तर मोड)": "(Paper Q&A Mode)",
  "🔍 मुख्य कार्यप्रणाली?": "🔍 Core Methodology?",
  "📊 मुख्य खोजें?": "📊 Key Discoveries?",
  "🌧 मानसून संबंध?": "🌧 Monsoon Linkages?",
  "ध्रुवीय सहायक शोध पत्र एम्बेडिंग और डेटा स्रोत का विश्लेषण कर रहा है...": "Polar Assistant is analyzing publication embeddings and data provenance...",
  "उद्धरण निर्यात करें:": "Export Citation:",
  "रीडर बंद करें": "Close Reader",
  "PDF देखें": "View PDF",
  "PDF डाउनलोड करें": "Download PDF",
  "ओपन एक्सेस": "Open Access",
  "समीक्षित शोध": "Peer-Reviewed",
  "राष्ट्रीय ध्रुवीय डेटा केंद्र (NPDC)": "National Polar Data Center (NPDC)",
  "वैज्ञानिक डेटासेट एवं क्रायोस्फीयर एक्सप्लोरर": "Scientific Dataset & Cryosphere Explorer",
  "संग्रहीत डेटासेट": "Archived Datasets",
  "वैश्विक डाउनलोड": "Global Downloads",
  "डेटासेट डाउनलोड": "Dataset Downloads",
  "सभी डेटासेट देखें": "View All Datasets",
  "अंटार्कटिका": "Antarctica",
  "आर्कटिक": "Arctic",
  "हिमालय (तीसरा ध्रुव)": "Himalayas (Third Pole)",
  "हिमालय": "Himalayas",
  "दक्षिणी महासागर": "Southern Ocean",
  "हिमनद विज्ञान एवं आइस कोर": "Glaciology & Ice Cores",
  "वायुमंडलीय एवं ओजोन विज्ञान": "Atmospheric & Ozone",
  "समुद्र विज्ञान एवं सीटीडी": "Oceanography & CTD",
  "समुद्री जीव विज्ञान एवं क्रिल": "Marine Biology & Krill",
  "अंतरिक्ष मौसम एवं चुंबकत्व": "Space Weather & Magnetism",
  "NetCDF-4": "NetCDF-4",
  "CSV स्प्रेडशीट": "CSV Spreadsheet",
  "GeoJSON": "GeoJSON",
  "ASCII टेबल्स": "ASCII Tables",
  "मेटाडेटा निरीक्षण एवं पूर्वावलोकन": "Inspect Metadata & Preview",
  "विज़ुअलाइज़ करें": "Visualize",
  "CSV निर्यात करें": "Export CSV",
  "डिजिटल ऑब्जेक्ट आइडेंटिफ़ायर (DOI)": "Digital Object Identifier",
  "प्रमुख अन्वेषक": "Primary Investigators",
  "प्रधान अन्वेषक": "Principal Investigator",
  "कालिक अवधि (Temporal Span)": "Temporal Span",
  "गुणवत्ता नियंत्रण स्तर": "Quality Control Tier",
  "लाइसेंस नीति": "License Policy",
  "उपलब्ध प्रारूप": "Available Formats",
  "वैज्ञानिक सारांश": "Scientific Abstract",
  "नमूना अवलोकन रिकॉर्ड पूर्वावलोकन": "Sample Observation Records Preview",
  "प्रथम 6 पंक्तियां": "First 6 Rows",
  "इस डेटासेट को कैसे उद्धृत करें (APA प्रारूप):": "How to Cite this Dataset (APA Format):",
  "नमूना CSV डाउनलोड करें": "Download Sample CSV",
  "JSON स्कीमा निर्यात करें": "Export JSON Schema",
  "मेटाडेटा दर्शक बंद करें": "Close Metadata Inspector",
  "डेटासेट डाउनलोड करें": "Download Dataset",
  "JSON डाउनलोड करें": "Download JSON",
  "CSV डाउनलोड करें": "Download CSV",
  "मीडिया प्रसार एवं सार्वजनिक आउटरीच": "Media Dissemination & Public Outreach",
  "ध्रुवीय मीडिया भंडार एवं साउंडस्केप्स स्टूडियो": "Polar Media Repository & Soundscapes Studio",
  "उच्च रिज़ॉल्यूशन देखें": "View High-Res",
  "4K स्ट्रीम शुरू करने के लिए क्लिक करें": "Click to Launch 4K Stream",
  "संवादात्मक अध्याय": "Interactive Chapters",
  "MoES ध्रुवीय आउटरीच श्रृंखला": "MoES Polar Outreach Series",
  "उच्च-अक्षांश ध्वनिक हाइड्रोफोन रिकॉर्डिंग": "High-Latitude Acoustic Hydrophone Capture",
  "ध्वनि रोकें": "PAUSE SOUNDSCAPE",
  "ध्वनि चलाएं": "PLAY SOUNDSCAPE",
  "किट डाउनलोड करें": "Download Kit",
  "राष्ट्रीय ध्रुवीय मिशन अभिलेखागार": "National Polar Mission Archives",
  "भारतीय ध्रुवीय अभियान यात्रा (1981 - 2025)": "Indian Polar Expedition Odyssey (1981 - 2025)",
  "अभियान प्रमुख": "Expedition Leader",
  "ध्रुवीय पोत / साधन": "Polar Vessel / Mode",
  "प्रमुख वैज्ञानिक परिणाम:": "Key Scientific Deliverables:",
  "एकत्रित नमूने:": "Specimens Collected:",
  "डेटा आकार:": "Data Volume:",
  "संपूर्ण मिशन लॉग एवं मील के पत्थर देखें": "Inspect Full Mission Log & Milestones",
  "प्रतिभागी": "Participants",
  "मिशन पोत": "Mission Vessel",
  "प्रस्थान स्थल": "Departure Staging",
  "सहभागी संस्थान": "Participating Institutes",
  "मिशन की प्रमुख विशेषताएं एवं खोजें": "Mission Highlights & Discoveries",
  "संपूर्ण वैज्ञानिक अधिदेश": "Full Scientific Mandate",
  "अभिलेखागार लॉग बंद करें": "Close Archive Log",
  "बहु-मापदंडीय क्रायोस्फीयर स्टूडियो": "Multi-Parametric Cryosphere Studio",
  "संवादात्मक ध्रुवीय डेटासेट विज़ुअलाइज़र": "Interactive Polar Dataset Visualizer",
  "लाइन चार्ट": "Line",
  "बार चार्ट": "Bar",
  "PNG निर्यात": "PNG",
  "CSV निर्यात": "CSV",
  "अवलोकन डेटा स्ट्रीम": "Observation Data Stream",
  "संवादात्मक क्रायोस्फीयर ऑन्टोलॉजी": "Interactive Cryosphere Ontology",
  "संवादात्मक ध्रुवीय ज्ञान आरेख": "Interactive Polar Knowledge Graph",
  "वैज्ञानिक": "Scientists",
  "सभी नोड प्रकार": "All Node Types",
  "भौतिकी देखने के लिए नोड्स को खींचें • पैन करने के लिए कैनवास खींचें": "Click & drag nodes to inspect physics • Drag canvas to pan",
  "नोड निरीक्षक": "Node Inspector",
  "प्रत्यक्ष नेटवर्क कनेक्शन:": "Direct Network Connections:",
  "ऑन्टोलॉजी कनेक्शन देखने के लिए कैनवास में किसी भी नोड का चयन करें।": "Select any node in the canvas to inspect ontology connections.",
  "MoES वैज्ञानिक एवं समीक्षक कंसोल": "MoES Scientist & Reviewer Console",
  "राष्ट्रीय ध्रुवीय डेटा शासन एवं सामग्री अनुमोदन हब": "National Polar Data Governance & Content Approval Hub",
  "राष्ट्रीय संग्रह हेतु लंबित डेटासेट प्रस्तुतियां": "Pending Dataset Submissions for National Archival",
  "जमा करने की तिथि": "Submission Date",
  "डेटा परिमाण": "Data Volume",
  "रिकॉर्ड स्तर": "Record Tiers",
  "वैज्ञानिक संशोधन का अनुरोध करें": "Request Scientific Revision",
  "स्वीकृत करें, DOI बनाएं एवं NPDC पर प्रकाशित करें": "Approve, Mint DOI & Publish to NPDC",
  "अधिकृत करें एवं प्रसारित करें": "Authorize & Disseminate",
  "आउटरीच लेख मार्कडाउन संपादक": "Outreach Article Markdown Editor",
  "दाईं ओर सजीव पूर्वावलोकन": "LIVE PREVIEW ON RIGHT",
  "शीर्षक": "Headline",
  "मार्कडाउन सामग्री": "Markdown Body Content",
  "आउटरीच फ़ीड में लेख प्रकाशित करें": "Publish Article to Outreach Feed",
  "सार्वजनिक प्रसार पूर्वावलोकन": "Public Outreach Preview",
  "द्विभाषी अंग्रेजी/हिन्दी समर्थित": "Bilingual English/Hindi Supported",
  "कुल पोर्टल प्रश्न (2026)": "Total Portal Queries (2026)",
  "अंतरराष्ट्रीय ध्रुवीय अनुसंधान डेटा प्रसार हीटमैप": "International Polar Research Data Dissemination Heatmap",
  "पृथ्वी विज्ञान मंत्रालय (MoES) एवं एनसीपीओआर": "Ministry of Earth Sciences (MoES) & NCPOR",
  "अन्वेषण करें": "Explore",
  "विवरण": "Details",
  "वापस": "Back",
  "आगे": "Next",
  "पिछला": "Previous",
  "बंद करें": "Close",
  "जमा करें": "Submit",
  "साफ़ करें": "Clear",
  "कॉपी करें": "Copy",
  "कॉपी किया गया!": "Copied!",
  "कॉपी किया गया": "Copied",
  "चलाएं": "Play",
  "रोकें": "Pause",
  "म्यूट": "Mute",
  "अनम्यूट": "Unmute",
  "लोड हो रहा है...": "Loading...",
  "लोड हो रहा है": "Loading",
  "कोई रिकॉर्ड नहीं मिला": "No records found",
  "कोई डेटा उपलब्ध नहीं": "No data available",
  "स्थिति": "Status",
  "सक्रिय": "Active",
  "परिचालन में": "Operational",
  "मौसमी": "Seasonal",
  "वर्ष भर": "Year-Round",
  "सजीव टेलीमेट्री": "Live Telemetry",
  "रीयल-टाइम टेलीमेट्री": "Real-Time Telemetry",
  "वायुमंडलीय दबाव": "Atmospheric Pressure",
  "हवा की गति": "Wind Speed",
  "तापमान": "Temperature",
  "आर्द्रता": "Humidity",
  "अनुसंधान पोत": "Vessel",
  "प्रस्थान": "Departure",
  "वापसी": "Return",
  "सत्र / वर्ष": "Season",
  "प्रमुख उद्देश्य": "Key Objectives",
  "वैज्ञानिक उपलब्धियां": "Scientific Achievements",
  "देखें": "View",
  "पूर्वावलोकन": "Preview",
  "डाउनलोड": "Download",
  "फ़िल्टर": "Filter",
  "ग्रिड दृश्य": "Grid",
  "सूची दृश्य": "List",
  "भेजें": "Send",
  "टेलीमेट्री": "Telemetry",
  "पवन / हवा": "Wind",
  "वेग": "Velocity",
  "गहराई": "Depth",
  "बर्फ": "Ice",
  "हिमनद": "Glacier",
  "महासागर": "Ocean",
  "वायुमंडल": "Atmosphere",
  "वायुमंडलीय": "Atmospheric",
  "ओजोन": "Ozone",
  "जलवायु": "Climate",
  "उपग्रह": "Satellite",
  "विज़ुअलाइज़र": "Visualizer",
  "रिकॉर्ड": "Records",
  "कर्मी": "Personnel",
  "ग्रीष्म": "Summer",
  "शीत": "Winter",
  "स्थायी": "Permanent",
  "ऐतिहासिक": "Historical",
  "स्मारक": "Monument",
  "वेधशाला": "Observatory",
  "उप-समुद्र": "Subsea",
  "मूरिंग": "Mooring",
  "हिमालयी": "Himalayan",
  "अंटार्कटिक": "Antarctic",
  "दक्षिणी": "Southern",
  "भारतीय": "Indian",
  "भारत": "India",
  "मंत्रालय": "Ministry",
  "विज्ञान": "Sciences",
  "कार्यक्रम": "Program",
  "राष्ट्रीय": "National",
  "भंडार": "Repository",
  "प्रसार": "Outreach",
  "संग्रह": "Archive",
  "सेवामुक्त": "Decommissioned",
  "सत्यापित": "Verified",
  "अनुरूप": "Compliant",
  "संधि": "Treaty",
  "सचिवालय": "Secretariat",
  "नीति": "Policy",
  "नियम": "Terms",
  "शर्तें": "Conditions",
  "सदस्यता लें": "Subscribe",
  "बुलेटिन": "Bulletin",
  "प्रमुख": "Leader",
  "पोत": "Vessel",
  "प्रकाशित": "Published",
  "लेखक": "Author",
  "लाइसेंस": "License",
  "प्रारूप": "Format",
  "मापदंड": "Parameters",
  "रिज़ॉल्यूशन": "Resolution",
  "कवरेज": "Coverage",
  "वर्ष": "Year",
  "स्तर": "Level",
  "ऊपर": "Above",
  "समुद्र": "Sea",
  "समुद्री बर्फ": "Sea-ice",
  "कोर": "Core",
  "प्रोफ़ाइल": "Profile"
};

  var SORTED_EN_KEYS = Object.keys(EN_TO_HI).sort(function(a, b) {
    return b.length - a.length;
  });

  var SORTED_HI_KEYS = Object.keys(HI_TO_EN).sort(function(a, b) {
    return b.length - a.length;
  });

  var SORTED_EN_WORDS = Object.keys(WORD_EN_TO_HI).sort(function(a, b) {
    return b.length - a.length;
  });

  var currentLang = (function() {
    try {
      return localStorage.getItem('polaris_lang') || 'EN';
    } catch(e) {
      return 'EN';
    }
  })();

  var observer = null;
  var isTranslating = false;

  function translateToHindi(str) {
    if (!str || typeof str !== 'string') return str;
    var trimmed = str.trim();
    if (!trimmed) return str;

    // Direct exact match
    if (EN_TO_HI[trimmed]) {
      return str.replace(trimmed, EN_TO_HI[trimmed]);
    }

    // Exact word fallback
    if (WORD_EN_TO_HI[trimmed]) {
      return str.replace(trimmed, WORD_EN_TO_HI[trimmed]);
    }

    // Case-insensitive exact match
    var lower = trimmed.toLowerCase();
    for (var i = 0; i < SORTED_EN_KEYS.length; i++) {
      var k = SORTED_EN_KEYS[i];
      if (k.toLowerCase() === lower) {
        return str.replace(trimmed, EN_TO_HI[k]);
      }
    }

    // Check phrase replacements (minimum 4 chars, word boundary safe)
    var res = str;
    var matched = false;
    for (var j = 0; j < SORTED_EN_KEYS.length; j++) {
      var phrase = SORTED_EN_KEYS[j];
      if (phrase.length >= 4 && res.indexOf(phrase) !== -1) {
        res = res.split(phrase).join(EN_TO_HI[phrase]);
        matched = true;
      }
    }

    // Word-level tokenization fallback
    if (!matched) {
      for (var w = 0; w < SORTED_EN_WORDS.length; w++) {
        var word = SORTED_EN_WORDS[w];
        var wordRegex = new RegExp('\\b' + word + '\\b', 'g');
        if (wordRegex.test(res)) {
          res = res.replace(wordRegex, WORD_EN_TO_HI[word]);
        }
      }
    }

    return res;
  }

  function translateToEnglish(str) {
    if (!str || typeof str !== 'string') return str;
    var trimmed = str.trim();
    if (!trimmed) return str;

    // Direct reverse match
    if (HI_TO_EN[trimmed]) {
      return str.replace(trimmed, HI_TO_EN[trimmed]);
    }

    // Check phrase replacements in Hindi
    var res = str;
    for (var i = 0; i < SORTED_HI_KEYS.length; i++) {
      var hiKey = SORTED_HI_KEYS[i];
      if (hiKey.length >= 2 && res.indexOf(hiKey) !== -1) {
        res = res.split(hiKey).join(HI_TO_EN[hiKey]);
      }
    }

    return res;
  }

  function walkAndTranslate(rootNode) {
    if (!rootNode) return;
    var walker = document.createTreeWalker(
      rootNode,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: function(node) {
          if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
          var parent = node.parentElement;
          if (!parent) return NodeFilter.FILTER_REJECT;
          var tag = parent.tagName.toLowerCase();
          if (tag === 'script' || tag === 'style' || tag === 'svg' || tag === 'path' || tag === 'code' || tag === 'kbd' || tag === 'pre') {
            return NodeFilter.FILTER_REJECT;
          }
          if (parent.closest && (parent.closest('.no-translate') || parent.closest('.skiptranslate') || parent.closest('#language-toggle-btn') || parent.closest('#mobile-language-toggle-btn'))) {
            return NodeFilter.FILTER_REJECT;
          }
          return NodeFilter.FILTER_ACCEPT;
        }
      }
    );

    var textNodes = [];
    var currentNode;
    while ((currentNode = walker.nextNode())) {
      textNodes.push(currentNode);
    }

    for (var i = 0; i < textNodes.length; i++) {
      var node = textNodes[i];
      var raw = node.nodeValue;

      // Only save original English text if it does not contain Devanagari characters
      if (node._polarisOrig === undefined && !/[\u0900-\u097F]/.test(raw)) {
        node._polarisOrig = raw;
      }

      var sourceText = node._polarisOrig || raw;
      var translated = translateToHindi(sourceText);
      if (translated !== raw) {
        node.nodeValue = translated;
      }
    }

    // Translate inputs
    var inputs = rootNode.querySelectorAll ? rootNode.querySelectorAll('input[placeholder], textarea[placeholder]') : [];
    for (var j = 0; j < inputs.length; j++) {
      var inp = inputs[j];
      if (inp._polarisOrigPlaceholder === undefined && !/[\u0900-\u097F]/.test(inp.placeholder)) {
        inp._polarisOrigPlaceholder = inp.placeholder;
      }
      var pSource = inp._polarisOrigPlaceholder || inp.placeholder;
      inp.placeholder = translateToHindi(pSource);
    }
  }

  function walkAndRestore(rootNode) {
    if (!rootNode) return;
    var walker = document.createTreeWalker(
      rootNode,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: function(node) {
          if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
          var parent = node.parentElement;
          if (!parent) return NodeFilter.FILTER_REJECT;
          var tag = parent.tagName.toLowerCase();
          if (tag === 'script' || tag === 'style' || tag === 'svg' || tag === 'path' || tag === 'code' || tag === 'kbd' || tag === 'pre') {
            return NodeFilter.FILTER_REJECT;
          }
          if (parent.closest && (parent.closest('.no-translate') || parent.closest('.skiptranslate') || parent.closest('#language-toggle-btn') || parent.closest('#mobile-language-toggle-btn'))) {
            return NodeFilter.FILTER_REJECT;
          }
          return NodeFilter.FILTER_ACCEPT;
        }
      }
    );

    var textNodes = [];
    var currentNode;
    while ((currentNode = walker.nextNode())) {
      textNodes.push(currentNode);
    }

    for (var i = 0; i < textNodes.length; i++) {
      var node = textNodes[i];
      var raw = node.nodeValue;

      // If we have cached English original, restore it directly
      if (node._polarisOrig !== undefined && !/[\u0900-\u097F]/.test(node._polarisOrig)) {
        node.nodeValue = node._polarisOrig;
      } else if (/[\u0900-\u097F]/.test(raw)) {
        // Otherwise reverse-translate Hindi back to English
        node.nodeValue = translateToEnglish(raw);
      }
    }

    var inputs = rootNode.querySelectorAll ? rootNode.querySelectorAll('input[placeholder], textarea[placeholder]') : [];
    for (var j = 0; j < inputs.length; j++) {
      var inp = inputs[j];
      if (inp._polarisOrigPlaceholder !== undefined && !/[\u0900-\u097F]/.test(inp._polarisOrigPlaceholder)) {
        inp.placeholder = inp._polarisOrigPlaceholder;
      } else if (/[\u0900-\u097F]/.test(inp.placeholder)) {
        inp.placeholder = translateToEnglish(inp.placeholder);
      }
    }
  }

  function setupObserver() {
    if (observer) {
      observer.disconnect();
      observer = null;
    }
    if (currentLang !== 'HI') return;

    observer = new MutationObserver(function(mutations) {
      if (isTranslating) return;
      isTranslating = true;
      try {
        var root = document.getElementById('root') || document.body;
        walkAndTranslate(root);
      } catch(e) {
        console.warn('[PolarisI18n] Mutation observer notice:', e);
      } finally {
        isTranslating = false;
      }
    });

    var target = document.getElementById('root') || document.body;
    if (target) {
      observer.observe(target, { childList: true, subtree: true, characterData: false });
    }
  }

  function updateButtons(lang) {
    var isHi = lang === 'HI';
    // When site is in English: show button as 'हिन्दी' [HI] so user can switch to Hindi
    // When site is in Hindi: show button as 'English' [EN] so user can switch to English
    var desktopBtn = document.getElementById('language-toggle-btn');
    if (desktopBtn) {
      var labelSpan = desktopBtn.querySelector('.lang-label') || desktopBtn.querySelector('span:nth-child(2)');
      var badgeSpan = desktopBtn.querySelector('.lang-badge') || desktopBtn.querySelector('span:nth-child(3)');
      if (labelSpan) labelSpan.textContent = isHi ? 'English' : 'हिन्दी';
      if (badgeSpan) badgeSpan.textContent = isHi ? 'EN' : 'HI';
      desktopBtn.title = isHi ? 'Switch to English (अंग्रेजी में बदलें)' : 'Switch to Hindi (हिन्दी में बदलें)';
    }

    var mobBtn = document.getElementById('mobile-language-toggle-btn');
    if (mobBtn) {
      var mobSpan = mobBtn.querySelector('span');
      if (mobSpan) mobSpan.textContent = isHi ? 'भाषा: English (EN)' : 'भाषा: हिन्दी (HI)';
    }
  }

  function setLanguage(lang) {
    currentLang = lang === 'HI' || lang === 'हिन्दी' ? 'HI' : 'EN';
    try {
      localStorage.setItem('polaris_lang', currentLang);
    } catch(e) {}

    document.documentElement.lang = currentLang === 'HI' ? 'hi' : 'en';

    if (observer) {
      observer.disconnect();
      observer = null;
    }

    var root = document.getElementById('root') || document.body;
    if (currentLang === 'HI') {
      walkAndTranslate(root);
      setupObserver();
    } else {
      walkAndRestore(root);
    }

    updateButtons(currentLang);

    if (typeof window !== 'undefined' && window.dispatchEvent && typeof CustomEvent !== 'undefined') {
      try {
        window.dispatchEvent(new CustomEvent('polaris_lang_changed', {
          detail: { language: currentLang }
        }));
      } catch(e) {}
    }
  }

  function toggleLanguage() {
    setLanguage(currentLang === 'EN' ? 'HI' : 'EN');
  }

  window.PolarisI18n = {
    getLanguage: function() { return currentLang; },
    setLanguage: setLanguage,
    toggleLanguage: toggleLanguage,
    translate: translateToHindi,
    translateToEnglish: translateToEnglish,
    dictionary: EN_TO_HI,
    reverseDictionary: HI_TO_EN
  };

  function init() {
    var saved = 'EN';
    try {
      saved = localStorage.getItem('polaris_lang') || 'EN';
    } catch(e) {}
    if (saved === 'HI') {
      setTimeout(function() {
        setLanguage('HI');
      }, 50);
    } else {
      updateButtons('EN');
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
