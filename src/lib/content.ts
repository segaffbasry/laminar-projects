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

/** Credential rail under the hero — drawn from the sector and service claims. */
export const marquee = [
  "Project & programme management",
  "Integrated project controls",
  "Planning & scheduling",
  "Data centres",
  "Power & renewables",
  "Civil infrastructure",
  "High-tech & industrial",
  "Cost & commercial management",
  "Risk & change management",
  "BIM and ISO19650",
  "Capital project excellence",
  "Residential, commercial & mixed use",
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
  reel: ["Dh_yspJfKds", "FuvVsrmMqiw", "QfNz8f60GD0", "aUocZx3Ixfg", "kNPOpjwWYbI"],
};

/* ------------------------------------------------------------- letter */

export const letter = {
  kicker: "A letter to our customers",
  slides: [
    {
      heading: "There are a few things you should know...",
      paragraphs: [
        "To you, our potential future customer and friend.",
        "Are you curious about working with us? This website has plenty of information about how we can help you. What I really want to explain to you in this letter is what it will be like to work with us. There are a few things you should know.",
        "When you meet us, the first thing you will notice is our personality; you will feel good when you speak with us, but you may not understand why. I say “our” personality because while we are a highly diverse team, we all share a few common things that make up “our” collective personality. Firstly, we are kind and authentic - we care about other people. Secondly, we are open and filled with energy to learn and challenge ourselves. Third, we all have to do things right, or we just won't be satisfied.",
        "So when you feel good, it will be because you are absorbing some of that energy from us - energy to do things right, energy to overcome new challenges and energy to build a relationship with you.",
      ],
      points: [],
    },
    {
      heading: "The traditional approach achieves traditional results.",
      paragraphs: [
        "When we started, we saw three big problems with traditional construction consultancies.",
      ],
      points: [
        {
          title: "1. Traditionally-minded organisations are unreliable.",
          body: "They are more focused on maximising the fees they charge you than delivering your construction project. Many traditional organisations recruit whoever they can find with a passable CV and proceed to stack your project with as many people as they can, even if they aren't really needed or even capable of doing the job. So you end up with, at best, a mediocre team that mismanages your project. This costs even more money, creates more delay and stresses everyone out.",
        },
        {
          title: "2. Managing complex projects is about managing details, but the details are rarely managed.",
          body: "Delivering complex construction projects effectively is all about the details. However, most construction consultancies don't have the capability to do the technical aspects of project management needed to manage all the details: Project planning, scheduling and controls. The result is that projects become more and more of a chaotic mess as they go on.",
        },
        {
          title: "3. People are commoditised.",
          body: "The culture of most construction organisations is reactive, full of conflict and cycles through people at an alarmingly high rate. Indeed, many of the best people leave the industry altogether because construction just isn't fun for them anymore. But it should be very enjoyable and fulfilling because we are building some exciting things! We knew that it didn't have to be this way. It is very possible to have great projects if you have great people working together as a great team. But to achieve this, a new and better approach was needed, a non-traditional approach. That is why we created Laminar.",
        },
      ],
    },
    {
      heading: "Our three guarantees.",
      paragraphs: [
        "If you work with us to make your projects great, I can guarantee you three things.",
      ],
      points: [
        {
          title: "Guarantee 1: You will have a great team",
          body: "Our people are in the top 5% of most capable people for their level, and they embody the collective Laminar personality I mentioned at the start of this letter. This is the only way to ensure great teams that can deliver great projects. How can I guarantee this? Above all else, we ensure that we only recruit and retain consistently great people. We have a rigorous selection process that can take over 8 hours to complete. When people join, they are trained and developed with an equally rigorous development process.",
        },
        {
          title: "Guarantee 2: You will have transparency and control of your project",
          body: "Complex projects have many interdependent parts. So, one single detail can have disproportionately large effects on the rest of the project. This is why we put such an emphasis on tracking and controlling all the details. You will have complete transparency of everything that is happening. We achieve a level of control and transparency that many construction people have never seen before. How can I guarantee this? Because you need a full team of highly capable people to control complex projects, which we have (see the previous point). And because we have processes, standards, tools and templates that are tried and tested across hundreds of projects that we begin implementing from day one.",
        },
        {
          title: "Guarantee 3: You will enjoy working with us",
          body: "Over time, our customers become our friends. We work together to build a great project, and then we go to the pub or grab a bite. We connect not because we are just trying to drive more sales. But because our people are the types of people that enjoy building relationships. We build friendships that transcend organisational boundaries and commercial interests. How can I guarantee this? Again, see guarantee one; we select and retain only people with great personalities. We don't tolerate anyone who displays aggressive or disrespectful behaviour - if they slip through, they are quickly shown the door. The high level of harmony in our team is greatly cherished by all of us.",
        },
      ],
    },
    {
      heading: "Let's get to know each other",
      paragraphs: [
        "This letter isn't just a nice bit of marketing. It is real. But, I can't really prove anything to you with words alone.",
        "What I can tell you is that over the last 7 years, we have grown consistently from 2 to over 200+ people, almost exclusively through our existing customers and word of mouth. Our customers keep working with us as their go-to consultant because they know we always deliver and they like us.",
        "Everything begins with a personal connection, so let's speak, get to know each other, and share some ideas and some energy. Then, when you start working with us, you will see for yourself.",
        "You can reach out to me or anyone else in the team by sending a short note to us via our contact form:",
      ],
      points: [],
      cta: { label: "Contact", href: "/contact" },
    },
  ],
  signature: "/signature.png",
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
