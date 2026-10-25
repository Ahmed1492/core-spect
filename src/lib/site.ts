export const company = {
  name: "Core Spect",
  tagline: "Inspection | Integrity | Engineering | Asset Reliability",
  descriptor: "Inspection & Integrity Services",
  address: "22,15 May St. - Mostord, Egypt",
  phones: ["01035505432", "01035872296"],
  telefax: "002 0244084881",
  website: "www.core-spect.org",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/equipment-safety", label: "Equipment & Safety" },
  { href: "/contact", label: "Contact" },
];

export const mission =
  "We are here to care for integrity of your equipment using the latest technologies in the world.";
export const vision =
  "We aspire to become a leading provider for asset integrity services all over the world.";
export const values = [
  {
    title: "Professionalism",
    text: "Core Spect operates at the highest professional ethics and integrity in all aspects of business.",
  },
  {
    title: "Quality",
    text: "Core Spect operates at a general standard of excellence in every aspect of action taken.",
  },
];

export const accreditations = [
  "ISO 9001 (CSQ / IQNet)",
  "ASME",
  "API",
  "ASNT",
  "LEEA",
  "IRATA International",
  "PMI Registered Education Provider",
];

export const industries = [
  "Oil & Gas",
  "Maritime",
  "Petrochemical",
  "Pharmaceutical",
  "Power Generation",
  "Municipalities",
];

export type ServiceGroup = {
  slug: string;
  title: string;
  summary: string;
  items: string[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    slug: "conventional-ndt",
    title: "Conventional NDT",
    summary:
      "Proven surface and volumetric methods for welds, plates, pipes and vessels.",
    items: [
      "Visual Testing (VT) and Remote Visual Inspection / Borescope",
      "Ultrasonic Testing (UT): thickness measurement and angle beam",
      "Radiographic Testing (RT): X-ray and gamma ray",
      "Computed Radiography (CR)",
      "Liquid Penetrant Testing (PT)",
      "Magnetic Particle Testing (MT)",
      "Vacuum Box Testing for tank bottom and shell-to-bottom welds",
      "Positive Material Identification (PMI)",
      "Portable hardness: Leeb rebound and UCI",
      "Replica testing",
      "Hydrostatic pressure testing",
      "Ultrasonic leak detection and flow metering",
    ],
  },
  {
    slug: "advanced-ndt",
    title: "Advanced NDT",
    summary:
      "Automated and in-service technologies that map corrosion and flaws with full coverage.",
    items: [
      "Phased Array Ultrasonic Testing (PAUT)",
      "Time of Flight Diffraction (TOFD)",
      "Acoustic Emission Testing",
      "MFL tank floor mapping",
      "In-tank robotic inspection",
      "Rapid Motion Scanner RMS2 corrosion mapping",
      "Scorpion B-scan remote access crawler",
      "VertiScan boiler water-wall scanning",
      "Long Range Ultrasonic Testing (guided waves)",
      "Short Range Ultrasonic Testing (SRUT)",
      "INCOTEST pulsed eddy current for corrosion under insulation",
      "Infrared thermography",
    ],
  },
  {
    slug: "tube-inspection",
    title: "Heat Exchanger Tube Inspection",
    summary:
      "Five techniques on one platform, selected by tube material, expected defects and purpose.",
    items: [
      "Eddy Current Testing (ECT)",
      "Remote Field Testing (RFT)",
      "Near Field Testing (NFT)",
      "Magnetic Flux Leakage (MFL)",
      "Internal Rotating Inspection System (IRIS)",
      "Colour-coded tube sheet reports with % wall loss",
    ],
  },
  {
    slug: "coating-inspection",
    title: "Painting & Coating Inspection",
    summary:
      "Verification that surfaces are clean, coated and bonded to specification.",
    items: [
      "Dry film thickness",
      "Wet film thickness",
      "Holiday detection (pinholes and voids)",
      "Pull-off adhesion testing",
      "Salt contamination metering",
    ],
  },
  {
    slug: "inspection-services",
    title: "Inspection Services",
    summary:
      "Independent inspection across equipment, supply chain and temporary works.",
    items: [
      "Vendor / third-party inspection",
      "Lifting inspection and proof load testing",
      "Casing and tubular inspection",
      "Scaffolding inspection",
      "Asset integrity services",
      "Vibration testing, analysis and balancing",
    ],
  },
  {
    slug: "engineering",
    title: "Engineering Design",
    summary: "Code-compliant design and repair engineering.",
    items: [
      "Pressure vessels",
      "Heat exchangers",
      "Boilers",
      "Tanks and tankers",
      "Power and process piping",
      "Fire fighting systems",
      "Repair and alteration design",
    ],
  },
  {
    slug: "field-services",
    title: "Field & Support Services",
    summary: "Hands-on services that keep inspection programmes moving.",
    items: [
      "Rope access: blasting and painting, NDT, cleaning, HT line inspection, grinding, welding",
      "Online pressure safety valve testing",
      "Heat treatment",
      "Cleaning",
      "Destructive testing: tensile, bend, impact, chemical, macro/micro analysis",
      "Environmental measurements",
    ],
  },
  {
    slug: "training-supply",
    title: "Training, Manpower & Material Supply",
    summary: "People, courses and materials for your projects.",
    items: [
      "Technical training: ASME B31 design codes, project management, maintenance, mechanical power, management courses",
      "Manpower supply and HR consultation",
      "Material supply: pipes, plates, beams, flanges, fittings, valves, bolting and instrumentation",
    ],
  },
];

export const serviceIcons: Record<string, string> = {
  "conventional-ndt": "wave",
  "advanced-ndt": "radar",
  "tube-inspection": "tubes",
  "coating-inspection": "brush",
  "inspection-services": "search",
  engineering: "ruler",
  "field-services": "rope",
  "training-supply": "cap",
};

export const equipmentGroups = [
  {
    title: "Advanced NDT equipment",
    items: [
      "Olympus MultiScan MS 5800",
      "EddyFi Ectane 2",
      "R-Scan Lite",
      "Scorpion B",
      "Rapid Motion Scanner RMS 2",
      "SIUI SUPOR",
      "Olympus OmniScan SX & MX2",
      "GUL Wavemaker G3 & G4",
      "Teletest Focus MK3",
      "RTD INCOTEST (PEC)",
      "Floor Map VS2i",
      "MFL Hand Scan",
      "Mentor Visual iQ VideoProbe",
      "SIUI CTS-9009 (two units)",
      "Vallen AMSY-6 with AEP5 / AEP5H preamplifiers and AE-ATEX sensors",
    ],
  },
  {
    title: "Conventional NDT equipment",
    items: [
      "Dakota CMX thickness and coating gauges (two units)",
      "V1 and V2 calibration blocks",
      "DA 400 S AC/DC magnetic yoke",
      "White contrast magnetic particles",
      "Penetrant testing kits (cleaner, penetrant, developer)",
      "1000 lux inspection light",
      "Hi-Lo, fillet, cam and reinforcement weld gauges",
      "Vacuum box: flat and corner",
    ],
  },
  {
    title: "Coating inspection",
    items: [
      "Holiday detector DJ-6(B), 0.7 - 30 kV",
      "SR2000 wet film comb",
      "Elcometer 456 dry film gauge",
      "Elcometer 106 pull-off adhesion tester",
    ],
  },
  {
    title: "Materials, vibration and measurement",
    items: [
      "Vibrotest 60 vibration analyser",
      "Leeb MH230 and UCI hardness testers",
      "Niton XL2 PMI analyser",
      "Feritscope MP30",
      "Topcon GTP-7503 total station",
      "Calipers, dial indicators, tapes, laser distance meter and spirit level",
      "DL-R load cell, up to 35 tons",
      "Rope access equipment",
    ],
  },
];

export const technologies = [
  {
    key: "paut",
    name: "PAUT",
    title: "Phased Array Ultrasonic Testing",
    text: "Multi-element probes steer and focus the beam electronically, giving sectorial scans of welds and complex geometry from a single probe position.",
    specs: [
      { label: "Elements", value: "16 - 256" },
      { label: "Frequency", value: "1 - 10 MHz" },
      { label: "Output", value: "A, S & C-scan" },
    ],
  },
  {
    key: "tofd",
    name: "TOFD",
    title: "Time of Flight Diffraction",
    text: "Uses the time of flight of diffracted signals to locate and size weld flaws, independent of defect orientation and with no radiation.",
    specs: [
      { label: "Sizing accuracy", value: "< 0.5 mm" },
      { label: "Code", value: "ASME CC 2235" },
      { label: "Temperature", value: "> 200 °C" },
    ],
  },
  {
    key: "lrut",
    name: "Long Range UT",
    title: "Guided Wave Long Range UT",
    text: "Guided waves travel along the pipe wall to screen insulated, buried, sleeved and elevated pipe from a single test location.",
    specs: [
      { label: "Range (ideal)", value: "200 m each way" },
      { label: "Pipe sizes", value: '¾" - 75"' },
      { label: "Detection", value: "≥ 1 - 5% CSA" },
    ],
  },
  {
    key: "incotest",
    name: "INCOTEST",
    title: "Pulsed Eddy Current (CUI)",
    text: "Measures average wall thickness through insulation and cladding while the plant stays on stream, with no surface preparation.",
    specs: [
      { label: "Accuracy", value: "± 5%" },
      { label: "Insulation", value: "< 200 mm" },
      { label: "Temperature", value: "-150 to 500 °C" },
    ],
  },
  {
    key: "mfl",
    name: "MFL Floor Map",
    title: "MFL Tank Floor Mapping",
    text: "Magnetic flux leakage scanning detects top and underside corrosion of storage tank floors, with real-time analysis and auto-stop on detection.",
    specs: [
      { label: "Sensors", value: "32 Hall" },
      { label: "Scan width", value: "250 mm" },
      { label: "Speed", value: "0.5 m/s" },
    ],
  },
  {
    key: "iris",
    name: "IRIS",
    title: "Internal Rotating Inspection System",
    text: "A rotating mirror sweeps an ultrasonic beam around the tube bore to give accurate remaining wall thickness for heat exchanger and boiler tubes.",
    specs: [
      { label: "Accuracy", value: "± 3%" },
      { label: "Tube OD", value: '0.5" - 3.0"' },
      { label: "Frequency", value: "1 - 20 MHz" },
    ],
  },
];

export const processSteps = [
  { title: "Consult", text: "We review your asset, codes and damage mechanisms to scope the work." },
  { title: "Plan", text: "Select the right technique, procedures and site-specific HSE plan." },
  { title: "Inspect", text: "Certified technicians perform the inspection, in-service where possible." },
  { title: "Analyse", text: "Data is evaluated against acceptance criteria and standards." },
  { title: "Report", text: "Clear reports with colour-coded maps, findings and recommendations." },
];

export const benefits = [
  {
    icon: "clock",
    title: "Less downtime",
    text: "Early in-service inspection means you know exactly where to look before shutdown, without last-minute surprises.",
  },
  {
    icon: "badge",
    title: "Qualified people",
    text: "Experienced, certified inspectors working to ASME, API and ASNT practice.",
  },
  {
    icon: "chip",
    title: "Advanced technology",
    text: "Phased array, guided wave, pulsed eddy current, robotic and acoustic emission systems.",
  },
  {
    icon: "report",
    title: "Fast, clear reporting",
    text: "Quick response and reporting, with data stored for later review and auditing.",
  },
];

export const brands = [
  "Olympus",
  "Eddyfi",
  "GUL Wavemaker",
  "Teletest",
  "Vallen",
  "Elcometer",
  "Thermo Niton",
  "Topcon",
  "SIUI",
  "Dakota",
  "Magnaflux",
  "RTD",
];

export const faqs = [
  {
    q: "Can you inspect equipment while the plant is running?",
    a: "Yes. Techniques such as INCOTEST (pulsed eddy current), long and short range guided wave UT, acoustic emission and SRUT are designed for in-service inspection, so many assets can be screened without a shutdown.",
  },
  {
    q: "Do you inspect under insulation without removing it?",
    a: "Pulsed eddy current measures average wall thickness through insulation up to 200 mm, and guided wave UT screens long lengths of insulated pipe from small test points.",
  },
  {
    q: "Which heat exchanger tube technique is right for us?",
    a: "It depends on tube material and the damage you expect: ECT for non-ferromagnetic tubes, RFT, NFT and MFL for carbon steel and finned tubes, and IRIS to prove up findings with accurate wall thickness.",
  },
  {
    q: "Do you provide inspection at the supplier's factory?",
    a: "Yes. Our vendor inspection service witnesses tests during production and carries out final inspection before and after packing, in the country of origin.",
  },
];

export const safetyCommitments = [
  "Create a culture where harm to our staff through work is totally unacceptable.",
  "Assess health, safety and environmental hazards proactively, for new business and existing work.",
  "Report and investigate incidents, and put systems in place to prevent recurrence.",
  "Comply with legal requirements and industry standards.",
  "Train managers and employees to work competently to safe work procedures.",
  "Keep employees, contractors and customers informed on HSE issues relevant to our operations.",
];

export const safetySystem = [
  {
    title: "Leadership & policy",
    text: "Management commitment, health and safety, environmental, and drug and alcohol policies.",
  },
  {
    title: "Planning",
    text: "Hazard identification, risk assessment, JSA / FLRA, PPE matrix and site-specific HSE plans.",
  },
  {
    title: "Implementation",
    text: "Competency and training matrix, behaviour-based safety, weekly meetings, lone-worker, driving and lifting controls.",
  },
  {
    title: "Emergency readiness",
    text: "Defined emergency preparedness requirements and incident response.",
  },
  {
    title: "Checking & improvement",
    text: "KPIs, incident investigation, corrective actions, inspections and annual review.",
  },
];
