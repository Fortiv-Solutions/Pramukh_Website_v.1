export const HERO = {
  video: "/videos/agastya-hero.mp4",
  poster: "/images/projects/agastya.jpg",
  headline: "BUILT ON TRUST. CHOSEN FOR YOUR NEXT PROPERTY.",
  cta: { label: "Explore Projects", href: "#abt2" },
};

export const MENU: { label: string; href: string; children?: { label: string; href: string }[] }[] = [
  { label: "What We Do", href: "#abt1" },
  { label: "Surat Projects", href: "#abt2" },
  { label: "Vapi Projects", href: "#abt2" },
  { label: "Silvassa Projects", href: "#abt2" },
  { label: "Completed Projects", href: "#abt3" },
  {
    label: "Investors",
    href: "#abt5",
    children: [
      { label: "Financial Results", href: "#abt5" },
      { label: "Shareholder Corner", href: "#abt5" },
      { label: "Investor Kit", href: "#abt5" },
      { label: "All-In Ownership™", href: "#abt4" },
    ],
  },
  { label: "Sustainability", href: "#abt4" },
  { label: "Media & News", href: "#abt6" },
  { label: "Contact Us", href: "#enquiry" },
];

export const TOP_LINKS = [
  { label: "What We Do", href: "#abt1" },
  { label: "Surat", href: "#abt2" },
  { label: "Vapi", href: "#abt2" },
  { label: "Silvassa", href: "#abt2" },
  { label: "All-In Ownership™", href: "#abt4" },
  { label: "Completed", href: "#abt3" },
  { label: "Enquire Now", href: "#enquiry" },
];

export const ABOUT_INTRO = {
  eyebrow: "A Class of Its Own — Pramukh Group",
  body: "At Pramukh Group, we create enduring spaces that reflect quality, trust, and long-term value. With 60+ delivered projects spanning over 17 Million Sq. Ft. across Surat, Vapi, and Silvassa, our deep expertise elevates everyday living with All-In Ownership™.",
};

export const ABOUT_SLIDES = [
  {
    title: "Premium Within Reach",
    body: "To provide premium housing and commercial spaces with high-quality standards and a contemporary lifestyle at the best affordable prices. Happier people make thriving cities.",
    video: "/videos/about-video.mp4",
  },
  {
    title: "Transparency that Performs",
    body: "To be the leader in providing the best infrastructure and changing the skyline of Gujarat with uncompromised commitment and ethical project delivery.",
    video: "/videos/agastya-video.mp4",
  },
  {
    title: "All-in Ownership™",
    body: "We stand by All-in Ownership™—owning every detail of every project without compromise, delivering with total commitment from concept to completion.",
    video: "/videos/one-tapi-video.mp4",
  },
  {
    title: "Our Guiding Principles",
    body: "Commitment, Quality, Timely Delivery, Trust, Transparency, Teamwork, Equality, Ethics, and Excellence guide every decision we make.",
    video: "/videos/aranya-iii-video.mp4",
  },
  {
    title: "Skyline Architecture & Design",
    body: "Architectural landmarks crafted with panoramic river views, double-height entrance lobbies, high-speed elevators, and resort-style podiums.",
    video: "/videos/agastya-hero.mp4",
  },
  {
    title: "Sustainable Living Spaces",
    body: "Integrating rainwater harvesting, solar energy micro-grids, lush landscaped botanical gardens, and EV charging stations for eco-luxury living.",
    video: "/videos/agastya-promo.mp4",
  },
];

export const LEADERSHIP = [
  {
    id: "virambhai",
    name: "Virambhai R. Bhatu",
    designation: "Founder & Board of Directors, Pramukh Group",
    image: "/images/projects/virambhai-r-bhatu.jpg",
    paragraphs: [
      "What sets Pramukh apart isn’t just what we build—it’s how we build and how we engage with every stakeholder. We bring together clarity, commitment, and a people-first approach.",
      "Rooted in strong local understanding across Surat, Vapi, and Silvassa, we believe in staying focused, acting responsibly, and delivering without unnecessary noise.",
      "We don’t believe in overpromising—we believe in consistent performance. Every milestone achieved is driven by a simple goal: to create spaces that stand the test of time.",
    ],
  },
  {
    id: "natubhai",
    name: "Natubhai R. Bhatu",
    designation: "Founder & Chairman, Pramukh Group",
    image: "/images/projects/nathu-bhai.jpg",
    paragraphs: [
      "From our humble beginnings in 1993, our vision has always been grounded in uncompromising quality, ethical practices, and deep structural integrity.",
      "Building over 60 landmarks is not just about brick and mortar—it is about nurturing communities and providing families with spaces where memories flourish.",
      "As we expand across Surat, Vapi, and Silvassa, our foundation remains unshakable: total dedication, transparency, and All-In Ownership™.",
    ],
  },
  {
    id: "prashant",
    name: "Prashant N. Bhatu",
    designation: "Managing Director (Surat Region), Pramukh Group",
    image: "/images/projects/prashant-bhatu.webp",
    paragraphs: [
      "Surat represents the future of progressive urban growth. Our mission is to elevate skyline standards through landmark architectural innovations.",
      "Every residence and commercial space we engineer blends aesthetic splendor with functional brilliance, tailored for discerning modern lifestyle requirements.",
      "We continuously embrace advanced technologies and sustainable practices to deliver unmatched luxury and enduring real estate value.",
    ],
  },
  {
    id: "ajitbhai",
    name: "Ajitbhai H. Khodbhaya",
    designation: "Director & Chief Financial Officer, Pramukh Group",
    image: "/images/projects/ajitbhai.png",
    paragraphs: [
      "Financial discipline and transparent governance are the cornerstones of Pramukh Group’s long-standing credibility and sustainable growth.",
      "Our prudent financial management ensures robust project completion timelines, zero-compromise quality standards, and rock-solid investor confidence.",
      "We build trust by honoring every single financial and operational commitment made to our homebuyers, partners, and institutions.",
    ],
  },
];

export const CHAIRMAN = LEADERSHIP[0];

export type Hotspot = {
  id: string;
  label: string;
  title: string;
  placement: "Inside the property" | "Outside the property";
  distance?: string;
  distanceLabel?: string;
  image: string;
  mapQuery?: string;
  x: number;
  y: number;
};

export type LeadingProject = {
  id: string;
  name: string;
  meta: string;
  description: string;
  video: string;
  map: string;
  googleMap?: string;
  href: string;
  hotspots: Hotspot[];
};

export const LEADING_PROJECTS: LeadingProject[] = [
  {
    id: "surat-flagship",
    name: "Revanta, Agastya, Satva & Zenith — Surat",
    meta: "Vesu, VIP Road & Riverfront Corridor, Surat • Luxury 3, 4 & 5 BHK Residences & Commercial Hubs",
    description:
      "Surat's landmark residential addresses offering panoramic sky suites, landscaped podiums, high-street retail showrooms, double-height entrance lobbies, and seamless connectivity to Surat Airport.",
    video: "/videos/agastya-video.mp4",
    map: "/images/projects/surat-map.jpg",
    googleMap: "https://maps.google.com/maps?q=VIP%20Road,%20Vesu,%20Surat,%20Gujarat&t=k&z=16&ie=UTF8&iwloc=&output=embed",
    href: "#enquiry",
    hotspots: [
      {
        id: "rev-5",
        label: "Pramukh Satva",
        title: "Pramukh Satva - 3 BHK Living Suites",
        placement: "Inside the property",
        image: "/images/projects/satva.jpg",
        mapQuery: "Pramukh Satva, Vesu, Surat, Gujarat",
        x: 35,
        y: 12,
      },
      {
        id: "rev-4",
        label: "One Tapi",
        title: "Exclusive Riverside 5 BHK Penthouses",
        placement: "Outside the property",
        distance: "1.5 km",
        distanceLabel: "along Tapi Riverfront",
        image: "/images/projects/one-tapi.jpg",
        mapQuery: "One Tapi Pramukh, Gymkhana Road, Piplod, Surat",
        x: 58,
        y: 22,
      },
      {
        id: "rev-3",
        label: "Orbit 5 Hub",
        title: "Orbit 5 - Showrooms & Corporate Suites",
        placement: "Outside the property",
        distance: "500 m",
        distanceLabel: "from Revanta Corridor",
        image: "/images/projects/orbit-5.jpg",
        mapQuery: "Orbit 5, VIP Road, Surat, Gujarat",
        x: 65,
        y: 50,
      },
      {
        id: "rev-7",
        label: "Pramukh Amaya",
        title: "Pramukh Amaya - Signature Living",
        placement: "Inside the property",
        image: "/images/projects/amaya.jpg",
        mapQuery: "Pramukh Amaya, Surat, Gujarat",
        x: 58,
        y: 78,
      },
      {
        id: "rev-8",
        label: "Aranya III",
        title: "Aranya III Exclusive 3 BHK",
        placement: "Inside the property",
        image: "/images/projects/aranya-iii.jpg",
        mapQuery: "Pramukh Aranya, Surat, Gujarat",
        x: 35,
        y: 88,
      },
      {
        id: "rev-2",
        label: "Agastya Luxury",
        title: "Pramukh Agastya - 4 BHK Residences",
        placement: "Inside the property",
        image: "/images/projects/agastya.jpg",
        mapQuery: "Pramukh Agastya, VIP Road, Vesu, Surat, Gujarat",
        x: 12,
        y: 78,
      },
      {
        id: "rev-1",
        label: "Revanta Towers",
        title: "Pramukh Revanta - 3 BHK Apartments",
        placement: "Inside the property",
        image: "/images/projects/revanta.jpg",
        mapQuery: "Pramukh Revanta, Vesu, Surat, Gujarat",
        x: 5,
        y: 50,
      },
      {
        id: "rev-6",
        label: "Pramukh Zenith",
        title: "Pramukh Zenith - Iconic Towers",
        placement: "Inside the property",
        image: "/images/projects/zenith.jpg",
        mapQuery: "Pramukh Zenith, Surat, Gujarat",
        x: 12,
        y: 22,
      },
    ],
  },
  {
    id: "vapi-hub",
    name: "Aristo, Vedanta & Ananta — Vapi",
    meta: "Vapi Prime Hub • 3, 4 & 5 BHK Apartments, Commercial & Townships",
    description:
      "Vapi's premier residential & commercial complexes featuring expansive green landscapes, clubhouses, multi-purpose sports arenas, and luxury modern interiors.",
    video: "/videos/aranya-iii-video.mp4",
    map: "/images/projects/vapi-map.jpg",
    googleMap: "https://maps.google.com/maps?q=Vapi,%20Gujarat&t=k&z=15&ie=UTF8&iwloc=&output=embed",
    href: "#enquiry",
    hotspots: [
      {
        id: "vapi-3",
        label: "Pramukh Ananta",
        title: "Pramukh Ananta - Luxury Living & Spaces",
        placement: "Inside the property",
        image: "/images/projects/ananta.jpg",
        mapQuery: "Pramukh Ananta, Vapi, Gujarat",
        x: 35,
        y: 14,
      },
      {
        id: "vapi-4",
        label: "Green County",
        title: "Green County Eco-Residences",
        placement: "Inside the property",
        image: "/images/projects/green-county.jpg",
        mapQuery: "Green County Pramukh, Vapi, Gujarat",
        x: 62,
        y: 50,
      },
      {
        id: "vapi-2",
        label: "Vedanta",
        title: "Pramukh Vedanta - 3 & 4 BHK Residences",
        placement: "Inside the property",
        image: "/images/projects/vedanta.jpg",
        mapQuery: "Pramukh Vedanta, Vapi, Gujarat",
        x: 35,
        y: 86,
      },
      {
        id: "vapi-1",
        label: "Aristo",
        title: "Pramukh Aristo - 3, 4 & 5 BHK Apartments",
        placement: "Inside the property",
        image: "/images/projects/aristo.jpg",
        mapQuery: "Pramukh Aristo, Vapi, Gujarat",
        x: 8,
        y: 50,
      },
    ],
  },
  {
    id: "silvassa-hub",
    name: "Shivanta & Swagat — Silvassa",
    meta: "Silvassa Valley • 1.5, 2 & 3 BHK Nature Homes",
    description:
      "Nestled amidst nature, Pramukh Shivanta and Swagat deliver peaceful living with low-density residential towers, sports amenities, and lush gardens.",
    video: "/videos/one-tapi-video.mp4",
    map: "/images/projects/silvasa-map.jpg",
    googleMap: "https://maps.google.com/maps?q=Silvassa,%20Dadra%20and%20Nagar%20Haveli&t=k&z=15&ie=UTF8&iwloc=&output=embed",
    href: "#enquiry",
    hotspots: [
      {
        id: "sil-1",
        label: "Shivanta",
        title: "Pramukh Shivanta - 2 & 3 BHK Apartments",
        placement: "Inside the property",
        image: "/images/projects/shivanta.jpg",
        mapQuery: "Pramukh Shivanta, Silvassa",
        x: 35,
        y: 16,
      },
      {
        id: "sil-3",
        label: "Yogi Woods",
        title: "Yogi Woods Hillside Residences",
        placement: "Inside the property",
        image: "/images/projects/yogi-wood.jpg",
        mapQuery: "Pramukh Yogi Wood, Silvassa",
        x: 60,
        y: 72,
      },
      {
        id: "sil-2",
        label: "Swagat",
        title: "Pramukh Swagat - 1.5 & 2 BHK Homes",
        placement: "Inside the property",
        image: "/images/projects/swagat.jpg",
        mapQuery: "Pramukh Swagat, Silvassa",
        x: 10,
        y: 72,
      },
    ],
  },
];

export const PORTFOLIO = {
  eyebrow: "60+ Delivered Projects • 17 Million Sq. Ft. Developed",
  items: [
    {
      title: "Surat Projects",
      body: "Orbit 5, Agastya, Revanta, One Tapi, Aranya III, Central Park & Vedanta.",
      video: "/videos/agastya-video.mp4",
      href: "#abt2",
    },
    {
      title: "Vapi Projects",
      body: "Aristo, Vedanta, Green County, and Pramukh Corporate Plaza.",
      video: "/videos/aranya-iii-video.mp4",
      href: "#abt2",
    },
    {
      title: "Silvassa Projects",
      body: "Shivanta, Yogi Woods, Swagat, Paras Palace, and Parth Complex.",
      video: "/videos/one-tapi-video.mp4",
      href: "#abt2",
    },
    {
      title: "Commercial & Retail",
      body: "Orbit 1, Orbit 2, Orbit 3, Orbit 5, and Pramukh High-Street Retail.",
      video: "/videos/about-video.mp4",
      href: "#abt2",
    },
    {
      title: "Completed Landmarks",
      body: "Over 60 successful project deliveries across Gujarat & DNH since 1993.",
      video: "/videos/agastya-video.mp4",
      href: "#abt2",
    },
  ],
};

export const PROMO = {
  image: "/images/projects/marina-bay.jpg",
  href: "#enquiry",
  cta: "View Marina Bay Pramukh",
};

export const SUSTAINABILITY = {
  title: "All-in Ownership™",
  subtitle: "Owning every detail with total commitment from start to finish",
  video: "/videos/one-tapi-video.mp4",
  pillars: [
    {
      label: "Proactive Planning",
      body: "We approach every project with a developer's foresight and a manager's discipline, eliminating surprises early.",
    },
    {
      label: "Integrated Execution",
      body: "Integrating development, construction, and operations to strengthen execution and guarantee quality delivery.",
    },
    {
      label: "Long-term Value",
      body: "Built to stand the test of time, ensuring lasting value for our customers, partners, and communities.",
    },
  ],
  href: "#abt4",
};

export const INVESTOR = {
  title: "Investor Corner",
  body: "Pramukh Group maintains a solid track record of over 60+ delivered projects and 13,000+ homes built with complete financial transparency.",
  releaseTitle: "Corporate Overview & Project Delivery Benchmark Report 2026",
  documents: [
    { label: "Surat Projects Overview", href: "#" },
    { label: "Vapi & Silvassa Development Portfolio", href: "#" },
    { label: "All-in Ownership™ Operational Report", href: "#" },
    { label: "Completed Projects Directory", href: "#" },
  ],
  href: "#abt5",
};

export const ENQUIRY = {
  title: "Have A Question?",
  lines: ["Built on trust, chosen for your next property.", "Contact Pramukh Group property advisors."],
  image: "/images/projects/one-tapi.jpg",
};

export const BLOGS = [
  {
    date: "18 August 2026",
    tag: "SURAT",
    read: "5 mins read",
    title: "Pramukh Revanta & Agastya: Setting New Architectural Benchmarks in Surat",
    image: "/images/projects/revanta.jpg",
    href: "#",
  },
  {
    date: "10 August 2026",
    tag: "COMMERCIAL",
    read: "6 mins read",
    title: "Orbit 5: Why Businesses Are Choosing Pramukh Group's Premier Commercial Address",
    image: "/images/projects/orbit-5.jpg",
    href: "#",
  },
  {
    date: "28 July 2026",
    tag: "RIVERSIDE",
    read: "4 mins read",
    title: "One Tapi: Exclusive Riverside 5 BHK Residences & Penthouses Launched in Surat",
    image: "/images/projects/one-tapi.jpg",
    href: "#",
  },
];

export const NEWS = [
  { year: "2026", tag: "MILESTONE", title: "Pramukh Group Celebrates 60+ Delivered Projects & 17 Million Sq. Ft. Developed", href: "#" },
  {
    year: "2026",
    tag: "LAUNCH",
    title: "Pramukh Group Announces One Tapi Riverside 5 BHK Penthouses in Surat",
    href: "#",
  },
  {
    year: "2026",
    tag: "AWARD",
    title: "Pramukh Group Recognized as Top Builder & Real Estate Developer in Surat",
    href: "#",
  },
];

export const CONTACT = {
  company: "Pramukh Group",
  address:
    "Surat Office: Orbit 5, VIP Road, Vesu, Surat, Gujarat | Vapi & Silvassa Offices",
  phone: "+91 261 2970000",
  salesPhone: "+91 98251 00000",
};

export const FOOTER_LINKS = [
  { label: "What We Do", href: "#abt1" },
  { label: "Surat Projects", href: "#abt2" },
  { label: "Vapi Projects", href: "#abt2" },
  { label: "Silvassa Projects", href: "#abt2" },
  { label: "Completed Projects", href: "#abt3" },
  { label: "All-In Ownership™", href: "#abt4" },
  { label: "Media & News", href: "#abt6" },
  { label: "Contact Us", href: "#enquiry" },
];

export const SEO_LINKS = [
  { label: "Orbit 5 Surat Showrooms & Offices", href: "#" },
  { label: "Agastya 4 BHK Apartments Surat", href: "#" },
  { label: "Revanta 3 BHK Apartments Surat", href: "#" },
  { label: "One Tapi Riverside 5 BHK Penthouses", href: "#" },
  { label: "Aristo 3, 4 & 5 BHK Apartments Vapi", href: "#" },
  { label: "Shivanta 2-3 BHK Apartments Silvassa", href: "#" },
  { label: "Pramukh Group Completed Projects", href: "#" },
  { label: "Top Builder Real Estate Developer Surat", href: "#" },
];

export const DISCLAIMER =
  "The content on this website is for representation and informational purposes only. Pramukh Group is the top builder and real estate developer in Surat, Vapi, and Silvassa. All details, specifications, and project info are subject to state RERA guidelines. All-In Ownership™ is a trademark of Pramukh Group.";
