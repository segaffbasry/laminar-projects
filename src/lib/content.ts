/**
 * Homepage copy — lifted verbatim from laminarprojects.com.
 * Wording is unchanged; the only edits are paragraph breaks where the
 * Webflow build ran sentences together inside a single rich-text block.
 */

export const site = {
  name: "Laminar Projects",
  title: "Laminar Projects",
  description:
    "Project management consultancy for organisations that want complete control of their construction projects",
  url: "https://www.laminarprojects.com",
  linkedin: "https://www.linkedin.com/company/laminarprojects/",
  youtube: "https://www.youtube.com/@LaminarProjects",
};

/* ---------------------------------------------------------------- nav */

export const nav = [
  {
    label: "Services",
    items: [
      { label: "Project & Construction Management", href: "/project-and-construction-management" },
      { label: "Project Planning & Controls", href: "/project-planning-and-controls" },
      { label: "Visual Planning", href: "/visual-planning" },
      { label: "Data & Digital", href: "/data-and-digital" },
      { label: "Cost & Commercial Management", href: "/services-cost-and-commercial-management" },
      { label: "Capital Project Excellence", href: "/capital-project-excellence" },
    ],
  },
  {
    label: "Sectors",
    items: [
      { label: "Data Centres", href: "/data-centres" },
      { label: "High-Tech & Industrial", href: "/high-tech-and-industrial" },
      { label: "Power & Renewables", href: "/power-and-renewables" },
      { label: "Civil Infrastructure", href: "/civil-infrastructure" },
      { label: "Residential, Commercial & Mixed Use", href: "/residential-commercial-and-mixed-use" },
    ],
  },
  {
    label: "Technology",
    items: [
      { label: "Construction Field Management Software", href: "/construction-management-software" },
      { label: "Planning, Progress and Performance Reports", href: "/planning-progress-and-performance-reports" },
      { label: "Integrated Project Controls Systems", href: "/integrated-project-controls-systems" },
      { label: "Oracle Primavera P6 EPPM", href: "/oracle-primavera-p6-eppm" },
      { label: "Oracle Primavera Unifier", href: "/oracle-primavera-unifier" },
      { label: "Oracle Primavera Cloud", href: "/oracle-primavera-cloud" },
      { label: "Oracle Aconex", href: "/oracle-aconex" },
      { label: "Safran Risk", href: "/safran-risk" },
      { label: "Safran Risk Manager", href: "/safran-risk-manager" },
      { label: "Deltek Acumen Fuse, Risk and 360", href: "/deltek-acumen-fuse-risk-and-360" },
    ],
  },
  {
    label: "Who We Are",
    items: [
      { label: "Our Philosophy", href: "/our-philosophy" },
      { label: "Our Stories", href: "/our-stories" },
      { label: "Our Team", href: "/our-team" },
    ],
  },
  {
    label: "Join Us",
    items: [
      { label: "Join Us", href: "/join-us" },
      { label: "Job Board", href: "/job-board" },
    ],
  },
];

/* --------------------------------------------------------------- hero */

export const hero = {
  eyebrow: "Project management consultancy",
  headingLead: "Controlled",
  headingRest: "delivery of complex construction projects",
  sub: "Project management consultancy for organisations that want complete control of their construction projects",
  primaryCta: { label: "Contact", href: "/contact" },
  secondaryCta: { label: "Our philosophy", href: "/our-philosophy" },
  image: "/hero-graphic.png",
  /* Figures pulled from the services and sectors copy further down the page. */
  chips: [
    { value: "30%", label: "time & cost savings" },
    { value: "$30B+", label: "power & transmission delivered" },
    { value: "130+", label: "data centres delivered" },
  ],
};

/**
 * Credential rail under the hero, drawn as a programme: each capability is a
 * bar on a schedule. Rows drift at different speeds. `span` is the bar width in
 * rem, `gap` the float before it.
 */
export const schedule: { label: string; span: number; gap: number; accent?: boolean }[][] = [
  [
    { label: "Project & programme management", span: 17, gap: 2 },
    { label: "Planning & scheduling", span: 12, gap: 3.5, accent: true },
    { label: "Data centres", span: 8, gap: 2 },
    { label: "Cost & commercial management", span: 16, gap: 4 },
  ],
  [
    { label: "Integrated project controls", span: 15, gap: 5 },
    { label: "Power & renewables", span: 11, gap: 2.5 },
    { label: "Risk & change management", span: 14, gap: 3, accent: true },
    { label: "High-tech & industrial", span: 12, gap: 2 },
  ],
  [
    { label: "Civil infrastructure", span: 11, gap: 3 },
    { label: "BIM and ISO19650", span: 10, gap: 4.5 },
    { label: "Capital project excellence", span: 14, gap: 2 },
    { label: "Residential, commercial & mixed use", span: 18, gap: 3 },
  ],
];

/* --------------------------------------------------------- who we are */

export const whoWeAre = {
  heading: "What we can do is a result of who we are",
  values: [
    {
      lead: "Genuine",
      tail: "People",
      body: "We are kind and authentic. We use compassionate candor to drive accountability while building meaningful relationships.",
    },
    {
      lead: "“Get it done”",
      tail: "People",
      body: "We are only satisfied when things are done right. We take extreme ownership with the project coming first.",
    },
    {
      lead: "Construction",
      tail: "People",
      body: "We are construction engineers who understand the details. We control the project from the strategy to the workfronts.",
    },
    {
      lead: "Digital",
      tail: "People",
      body: "We have some of the most advanced digital skills in the construction industry. We implement systems that create complete control with full visibility.",
    },
  ],
};

export const globalStat = {
  pre: "We deliver projects globally with our team of over",
  people: "200+",
  mid: "people across",
  countries: "15",
  post: "countries.",
};

/* ----------------------------------------------------------- services */

export const services = {
  heading: "Services",
  sub: "Total control over all details is fundamental to achieving exceptional execution of your project.",
  items: [
    {
      id: "pcm",
      label: "Project & Construction Management",
      image: "/services/pcm.png",
      intro:
        "We combine a compassionately candid culture with our rigorous delivery models to achieve up to 30% time and cost savings:",
      points: [
        "Project & programme management",
        "Delivery & construction management",
        "Commercial & contract management",
      ],
      href: "/project-and-construction-management",
    },
    {
      id: "ppc",
      label: "Project Planning & Controls",
      image: "/services/ppc.png",
      intro:
        "We integrate project processes & information to provide complete clarity & control:",
      points: [
        "Integrated project controls and PMO",
        "Planning & scheduling",
        "Project reporting",
        "Cost management & estimating",
        "Risk & change management",
        "Information management & document control",
      ],
      href: "/project-planning-and-controls",
    },
    {
      id: "dd",
      label: "Data & Digital",
      image: "/services/dd.png",
      intro:
        "We combine our understanding of project delivery & digital technology to implement turnkey digital solutions that work:",
      points: [
        "Digital advisory",
        "Project data integration",
        "Digital infrastructure & software development",
        "Advanced project reporting",
        "BIM and ISO19650",
      ],
      href: "/data-and-digital",
    },
    {
      id: "ccm",
      label: "Cost & Commercial Management",
      image: "/services/ccm.png",
      intro:
        "We deliver projects cheaper by creating more transparency, cutting waste and removing unnecessary conflict from projects:",
      points: [
        "Pre-Construction Services",
        "Contract Administration",
        "Procurement",
        "Cost Estimating & Benchmarking",
        "Cost Planning & Management",
        "Claims & Change Management",
        "Dispute Avoidance & Defense",
        "Commercial Auditing & Assurance",
      ],
      href: "/services-cost-and-commercial-management",
    },
    {
      id: "cpe",
      label: "Capital Project Excellence",
      image: "/services/cpe.png",
      intro: "Developing organisational capability to maximize capital project outcomes:",
      points: [
        "Strategic alignment of capital expenditure",
        "Capital expenditure portfolio optimisation",
        "Capability assessments & planning",
        "Capability builds",
        "Bespoke process improvement",
        "Independent advice for in-flight projects",
      ],
      href: "/capital-project-excellence",
    },
  ],
};

export const detailStatement = {
  lead: "On complex projects, one overlooked detail can quickly spiral out of control. We combine our",
  emphasisOne: "detailed construction knowledge",
  mid: "with our digital skills to",
  emphasisTwo: "control",
  tail: "projects right down to the details.",
};

/* ------------------------------------------------------------ sectors */

export const sectors = {
  heading: "Sectors",
  sub: "We implement sector-specific approaches that combine our specialist knowledge with the best from other industries to take project delivery to the next level.",
  items: [
    {
      id: "dc",
      label: "Data Centres",
      image: "/sectors/data-centres.png",
      body: "Data centres need to be built fast. Our highly controlled delivery approach ensures that delays are mitigated, and operations optimised for speed without compromising safety or quality.",
      stat: "More than 130 data centres delivered globally representing over 3000MW of capacity",
      href: "/data-centres",
    },
    {
      id: "hti",
      label: "High-Tech & Industrial",
      image: "/sectors/high-tech.png",
      body: "Hightech facilities that contain advanced robotics, chemical processing and clean rooms all have one thing in common - A need for precision in all aspects of project delivery. We ensure precision by tracking and managing all the details.",
      stat: "Over $12B+ of facilities delivered globally.",
      href: "/high-tech-and-industrial",
    },
    {
      id: "pnr",
      label: "Power & Renewables",
      image: "/sectors/power-renewables.png",
      body: "The accelerated shift towards sustainable energy is driving new kinds of projects at an unprecedented volume. A multitude of stakeholders and immature supply chains represent the two biggest risks. We maintain complete transparency and visibility of all aspects to keep everything on track.",
      stat: "We have delivered over $30B USD of power generation and transmission projects across the world.",
      href: "/power-and-renewables",
    },
    {
      id: "ci",
      label: "Civil Infrastructure",
      image: "/sectors/civil-infrastructure.png",
      body: "Civil infrastructure weaves through our landscapes with amplified complexity emerging from the many interfaces and stakeholders that are affected by the construction process. We fully integrate operations and information at all levels to ensure adaptability to the emerging challenges.",
      stat: "$12B+ of transport, environmental and water infrastructure delivered.",
      href: "/civil-infrastructure",
    },
    {
      id: "rcmu",
      label: "Residential, Commercial & Mixed Use",
      image: "/sectors/residential.png",
      body: "High-rise buildings are challenging to deliver with tight logistical constraints and many trades working practically on top of each other. We implement rigorous production management to keep the project flowing.",
      stat: "50+ projects delivered globally.",
      href: "/residential-commercial-and-mixed-use",
    },
  ],
};

/* -------------------------------------------------------------- films */

export const films = {
  heading: "We Build Civilisation",
  featured: "PxcBZupiI7Y",
    // Trimmed from five to three — the section read as heavy with six players.
  reel: ["Dh_yspJfKds", "FuvVsrmMqiw", "QfNz8f60GD0"],
};

/* ------------------------------------------------------------- letter */

export const letter = {
  kicker: "A letter to our customers",
  /**
   * Condensed from the full four-chapter letter into teaser blocks that lead
   * out to the relevant page. Every lead line is verbatim from the letter,
   * trimmed at a clause boundary rather than reworded.
   */
  blocks: [
    {
      heading: "There are a few things you should know",
      lead: "When you meet us, the first thing you will notice is our personality.",
      points: ["Kind and authentic", "Open and full of energy", "Only satisfied when it is done right"],
      href: "/our-philosophy",
      cta: "Our philosophy",
    },
    {
      heading: "The traditional approach achieves traditional results",
      lead: "When we started, we saw three big problems with traditional construction consultancies.",
      points: [
        "Traditionally-minded organisations are unreliable",
        "The details are rarely managed",
        "People are commoditised",
      ],
      href: "/our-philosophy",
      cta: "Why we exist",
    },
    {
      heading: "Our three guarantees",
      lead: "If you work with us to make your projects great, I can guarantee you three things.",
      points: [
        "You will have a great team",
        "You will have transparency and control of your project",
        "You will enjoy working with us",
      ],
      href: "/our-team",
      cta: "Meet the team",
    },
    {
      heading: "Let's get to know each other",
      lead: "Everything begins with a personal connection, so let's speak, get to know each other, and share some ideas and some energy.",
      points: [],
      href: "/contact",
      cta: "Contact",
    },
  ],
  signature: "/signature.png",
  author: "David",
};

/* ------------------------------------------------------- testimonials */

/** Verbatim from the Visual Planning, Reports and Shape pages of the old site. */
export const testimonials = {
  heading: "What our clients say",
  items: [
    {
      quote:
        "Before Laminar, we had lots of reports, but we couldn't make a decision with any of them. They all said different things. Now we\u2019ve got one report, one version of the truth, and it\u2019s updated automatically every day.",
      name: "Senior Delivery Lead",
      role: "Major Programme",
    },
    {
      quote:
        "The reporting suite gave us real-time, drillable insights across commissioning, procurement, health and safety, and more. That level of visibility fundamentally changed how we managed the project.",
      name: "Project Director",
      role: "Industrial Sector",
    },
    {
      quote:
        "They ask the right questions because of their experience with similar projects. Beyond fulfilling your request, they suggest things that have worked well for other clients. They know what will be valuable for the client, and that kind of insight is priceless.",
      name: "Planning Lead",
      role: "Visual Planning",
    },
    {
      quote:
        "Teams that once relied on static spreadsheets are now confidently interrogating data and making better-informed decisions. The shift towards transparency and accountability has had a lasting impact.",
      name: "Controls Manager",
      role: "Infrastructure Sector",
    },
    {
      quote:
        "We\u2019re deploying Shape for reporting issues. It ties the reporting of issues back into the programme, resourcing and communications. That\u2019s a level of control we\u2019re very happy with.",
      name: "James McCarthy",
      role: "Project Director",
    },
  ],
};

/* ----------------------------------------------------------- insights */

export const insights = {
  heading: "Insights",
  items: [
    {
      title: "Save weeks or months with smart DC delivery",
      href: "/insight-slide-2/save-weeks-or-months-with-smart-dc-delivery",
    },
    {
      title: "How To Turn Past Projects into Future Wins",
      href: "/insight-slide-3/how-to-turn-past-projects-into-future-wins",
    },
    {
      title: "Why change doesn’t have to derail your project",
      href: "/insight-slide-1/why-change-doesnt-have-to-derail-your-project",
    },
  ],
};

/* ------------------------------------------------------------- footer */

export const accreditations = [
  { src: "/accreditations/iso-9001.png", alt: "ISO 9001 certified by URS" },
  { src: "/accreditations/iso-14001.png", alt: "ISO 14001 certified by URS" },
  { src: "/accreditations/iso-45001.png", alt: "ISO 45001 certified by URS" },
  { src: "/accreditations/apm.png", alt: "APM Corporate Partner" },
  { src: "/accreditations/aace.png", alt: "AACE International" },
  { src: "/accreditations/constructionline.png", alt: "Constructionline Gold" },
];

export const legal = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Modern Slavery Policy", href: "/modern-slavery-human-trafficking" },
  { label: "ED&I Policy", href: "/equality-diversity-and-inclusion" },
  {
    label: "Carbon Reduction Plan",
    href: "https://cdn.prod.website-files.com/64f9800f92e2eb075a821f45/683d7878322bf35969c32ec7_Carbon%20Reduction%20Plan_Laminar%20Projects.pdf",
  },
];
