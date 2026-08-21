export interface GalleryItem {
  id: string;
  title: string;
  category: "3d" | "sample";
  categoryLabel: string;
  image: string;
  description?: string;
}

export interface Amenity {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tag: string;
}

export interface AmenityCategory {
  id: string;
  name: string;
  subtitle: string;
  amenities: Amenity[];
}

export interface ProjectUpdate {
  month: string;
  year: string;
  phase: string;
  title: string;
  description: string;
  image: string;
  status: "Completed" | "In Progress" | "Upcoming";
}

export const ONE_TAPI_DATA = {
  hero: {
    projectName: "One Tapi",
    developer: "Pramukh Group",
    location: "Piplod, Surat",
    subtitle: "Exclusive Riverside 5 BHK Residences & Penthouses",
    headline: "Wonders Are Many, Marvel Is Just One.",
    video: "/videos/one-tapi-video.mp4",
    poster: "/images/one-tapi/one-tapi.jpg",
    rera: "PR/GJ/SURAT/SURAT CITY/SURAT MUNICIPAL CORPORATION/RAA13015/220224/311229",
    reraUrl: "https://gujrera.gujarat.gov.in",
  },

  intro: {
    quoteTop: "Wonders Are Many, Marvel Is Just One.",
    quoteSub: "Luxurious Are Many, Exclusive Is Just One.",
    description:
      "Nestled on the glittering banks of the River Tapi, enveloped in the tranquillity of lush riverine greens, One Tapi provides an unhindered panoramic perspective from every vantage point. Designed as a limited-edition architectural sanctuary in Piplod, it redefines the very pinnacle of quiet, waterfront luxury.",
    stats: [
      { label: "Configuration", value: "5 BHK Residences & Penthouses" },
      { label: "Location", value: "Beside Surat City Gymkhana, Piplod" },
      { label: "Orientation", value: "100% Infinite River Tapi Views" },
      { label: "Exclusivity", value: "Private Lifts & Low-Density Living" },
    ],
  },

  riverExperience: {
    eyebrow: "The Riverside Narrative",
    title: "Residence → River → City → Nature",
    lead: "A seamless transition between architectural stillness and the perpetual flow of Surat's iconic lifeline.",
    paragraphs: [
      "At One Tapi, the river is not merely a backdrop; it is an omnipresent architectural element. Floor-to-ceiling glass apertures dissolve the barrier between the expansive interior salons and the tranquil waters below.",
      "Wake up to mist dancing across the river, witness glowing sunsets painting the sky over Piplod, and experience an irreplaceable quietude that remains forever immune to the bustle of the metropolis.",
    ],
    highlightImage: "/images/one-tapi/one-tapi-gallery-2.jpg",
  },

  gallery: [
    {
      id: "gal-1",
      title: "Corner Riverside Perspective",
      category: "3d",
      categoryLabel: "3D Render",
      image: "/images/one-tapi/one-tapi-gallery-1.jpg",
      description: "Dramatic corner glass facade showcasing infinite Tapi horizons.",
    },
    {
      id: "gal-2",
      title: "Panoramic Riverfront Promenade",
      category: "3d",
      categoryLabel: "3D Render",
      image: "/images/one-tapi/one-tapi-gallery-2.jpg",
      description: "Direct river frontage framed by tranquil landscaped terraces.",
    },
    {
      id: "gal-3",
      title: "Infinity Pool & Sunken Deck",
      category: "3d",
      categoryLabel: "3D Render",
      image: "/images/one-tapi/one-tapi-gallery-3.jpg",
      description: "Resort-style infinity waterbody mirroring the gentle river currents.",
    },
    {
      id: "gal-4",
      title: "Penthouse Grand Living Salon",
      category: "sample",
      categoryLabel: "Sample Residence",
      image: "/images/one-tapi/pent-house-interior-c.jpg",
      description: "Expansive double-volume lounge with curated European stone & timber finishes.",
    },
    {
      id: "gal-5",
      title: "Master Suite & Private Balcony",
      category: "sample",
      categoryLabel: "Sample Residence",
      image: "/images/one-tapi/pent-house-interior-d.jpg",
      description: "Uninterrupted sunrise vistas directly from the master sleeping quarters.",
    },
    {
      id: "gal-6",
      title: "Spa-Inspired Master En-Suite",
      category: "sample",
      categoryLabel: "Sample Residence",
      image: "/images/one-tapi/pent-house-bathroom.jpg",
      description: "Freestanding soaking tub overlooking panoramic river and city lights.",
    },
    {
      id: "gal-7",
      title: "Architectural Elevation",
      category: "3d",
      categoryLabel: "3D Render",
      image: "/images/one-tapi/one-tapi-gallery-4.jpg",
      description: "Sleek geometric lines and timeless materiality designed by master architects.",
    },
    {
      id: "gal-8",
      title: "Twilight River Reflection",
      category: "3d",
      categoryLabel: "3D Render",
      image: "/images/one-tapi/one-tapi-gallery-5.jpg",
      description: "Architectural illumination reflecting across the calm evening waters.",
    },
    {
      id: "gal-9",
      title: "Lush Riverine Green Sanctuary",
      category: "3d",
      categoryLabel: "3D Render",
      image: "/images/one-tapi/one-tapi-gallery-6.jpg",
      description: "Botanical landscaping creating a natural rainforest-like microclimate.",
    },
  ] as GalleryItem[],

  residences: {
    eyebrow: "Architecture & Residences",
    title: "Crafted for Generational Grandeur",
    lead: "Each residence at One Tapi is conceived as an expansive private estate suspended above the river.",
    specs: [
      {
        title: "5 BHK Expansive Format",
        description: "Expansive multi-generational layouts with dedicated ensuite bedrooms and dressing suites.",
      },
      {
        title: "Private High-Speed Lifts",
        description: "Direct-to-home biometric elevator access opening into an exclusive private foyer.",
      },
      {
        title: "180° Deep River Decks",
        description: "Continuous wrap-around cantilevered balconies engineered for alfresco living.",
      },
      {
        title: "Double-Height Volumes",
        description: "Soaring ceiling clearances creating unmatched spatial luxury and natural cross-breezes.",
      },
      {
        title: "Separate Staff Quarters",
        description: "Discrete service entry, dedicated staff bedroom, and separate utility zones.",
      },
      {
        title: "100% Vastu Compliant",
        description: "Auspicious east-west orientation maximizing natural sunlight and positive energy flow.",
      },
    ],
  },

  amenityCategories: [
    {
      id: "wellness",
      name: "Wellness & Rejuvenation",
      subtitle: "Holistic health amenities overlooking the serene river currents",
      amenities: [
        {
          id: "w-1",
          title: "Infinity Lap Pool & Shallow Pool",
          description: "Curved waterbody extending seamlessly towards the Tapi River horizon.",
          iconName: "Waves",
          tag: "Waterfront",
        },
        {
          id: "w-2",
          title: "Indoor Heated Pool & Jacuzzi",
          description: "Climate-controlled all-season hydrotherapy spa for ultimate relaxation.",
          iconName: "Sparkles",
          tag: "Hydrotherapy",
        },
        {
          id: "w-3",
          title: "Cedarwood Sauna & Steam Suites",
          description: "Separate male and female thermal detox sanctuaries with ergonomic timber seating.",
          iconName: "Flame",
          tag: "Thermal Spa",
        },
        {
          id: "w-4",
          title: "High-Performance Gymnasium",
          description: "State-of-the-art strength and cardio studio with personal training zones.",
          iconName: "Dumbbell",
          tag: "Fitness",
        },
        {
          id: "w-5",
          title: "Yoga & Zen Meditation Deck",
          description: "Open-air wooden deck situated above lush botanical planters for sunrise mindfulness.",
          iconName: "Sun",
          tag: "Mindfulness",
        },
      ],
    },
    {
      id: "social",
      name: "Social & Leisure",
      subtitle: "Bespoke spaces for private celebrations, dining, and community",
      amenities: [
        {
          id: "s-1",
          title: "Grand Banquet & Multi-Purpose Salon",
          description: "Acoustically engineered ballroom with pre-function lobby for signature gatherings.",
          iconName: "Wine",
          tag: "Celebrations",
        },
        {
          id: "s-2",
          title: "Private Social Club & Lounge",
          description: "Intimate plush lounge tailored for executive conversations and evening aperitifs.",
          iconName: "Coffee",
          tag: "Clubhouse",
        },
        {
          id: "s-3",
          title: "Riverfront Spill-Over Deck",
          description: "Alfresco landscaped terrace connecting the banquet directly to riverside breezes.",
          iconName: "Compass",
          tag: "Alfresco",
        },
        {
          id: "s-4",
          title: "Curated Library & Work Sanctuary",
          description: "Quiet book-lined salon designed for deep reading, study, and remote board meetings.",
          iconName: "BookOpen",
          tag: "Quiet Zone",
        },
        {
          id: "s-5",
          title: "Toddlers Creative Play Zone",
          description: "Safe, cushioned interactive play area designed specifically for younger children.",
          iconName: "Smile",
          tag: "Kids",
        },
      ],
    },
    {
      id: "private",
      name: "Private Living & Services",
      subtitle: "Discrete back-of-house infrastructure ensuring effortless everyday privacy",
      amenities: [
        {
          id: "p-1",
          title: "Dedicated Private Elevator & Foyer",
          description: "Direct biometric keycard access into your private residence entrance vestibule.",
          iconName: "Key",
          tag: "Security",
        },
        {
          id: "p-2",
          title: "Separate Service / Freight Lift",
          description: "Independent heavy-capacity lift dedicated to staff, maintenance, and logistics.",
          iconName: "Truck",
          tag: "Logistics",
        },
        {
          id: "p-3",
          title: "Guest Accommodation Suite",
          description: "Elegantly appointed guest quarters for visiting friends and family.",
          iconName: "BedDouble",
          tag: "Hospitality",
        },
        {
          id: "p-4",
          title: "Gourmet Catering & Service Pantry",
          description: "Professional staging pantry supporting private banquets and in-home culinary events.",
          iconName: "Utensils",
          tag: "Catering",
        },
        {
          id: "p-5",
          title: "Staff Accommodation & Facilities",
          description: "Dedicated restrooms, lockers, and break rooms for household and estate staff.",
          iconName: "Users",
          tag: "Staff Comfort",
        },
      ],
    },
    {
      id: "arrival",
      name: "Arrival & Security",
      subtitle: "A grand welcoming statement backed by comprehensive estate security",
      amenities: [
        {
          id: "a-1",
          title: "Double-Height Grand Reception",
          description: "Marble-clad monumental entrance lobby staffed by a 24/7 dedicated concierge.",
          iconName: "ShieldCheck",
          tag: "Arrival",
        },
        {
          id: "a-2",
          title: "Porte-Cochère Drop-Off Zone",
          description: "Weather-protected covered arrival driveway with valet waiting zones.",
          iconName: "Car",
          tag: "Porte-Cochère",
        },
        {
          id: "a-3",
          title: "VIP Executive Waiting Lounge",
          description: "Refined waiting salon for visitors and couriers with high-speed Wi-Fi.",
          iconName: "Armchair",
          tag: "Lounge",
        },
        {
          id: "a-4",
          title: "Multi-Tier 24/7 Security Cabin",
          description: "ANPR vehicle entry, perimeter beam sensors, and 24/7 CCTV surveillance room.",
          iconName: "Lock",
          tag: "Surveillance",
        },
        {
          id: "a-5",
          title: "Dedicated Dual-Ramp Basement",
          description: "Wide two-way access ramps ensuring smooth transit for luxury sedans and SUVs.",
          iconName: "ArrowDownCircle",
          tag: "Parking Access",
        },
      ],
    },
  ] as AmenityCategory[],

  difference: {
    words: ["River.", "Residence.", "Perspective."],
    title: "The One Tapi Difference",
    lead: "True luxury is not about excess—it is the quiet confidence of possessing something that cannot be replicated.",
    body: "Surat has countless addresses, but only one parcel of land where the Tapi River curves so gracefully right beside the prestigious Gymkhana. One Tapi was conceived as a non-replicable landmark: a sanctuary of massive proportions, where only a handful of families will ever experience the tranquil luxury of endless water horizons every single day.",
  },

  location: {
    eyebrow: "Prime Piplod Address",
    title: "Beside Surat City Gymkhana",
    address: "FP-45, TP-6, Beside Surat City Gymkhana, Gymkhana Road, Piplod, Surat - 395007, Gujarat",
    phone: "+91 99789 86778",
    email: "sales@pramukh.com",
    googleMapsUrl:
      "https://www.google.com/maps/place/One+Tapi+by+Pramukh+Group/@21.1626218,72.7668329,17z/data=!3m1!4b1!4m16!1m9!4m8!1m0!1m6!1m2!1s0x3be04db0391aaea1:0x422e809f295cd484!2sOne+Tapi+by+Pramukh+Group,+5Q7C%2B6XF,+Gymkhana+Rd,+Piplod,+Surat,+Gujarat 395007!2m2!1d72.7717038!2d21.1626169!3m5!1s0x3be04db0391aaea1:0x422e809f295cd484!8m2!3d21.1626169!4d72.7717038!16s%2Fg%2F11ty71571h",
    landmarks: [
      {
        id: "loc-1",
        name: "Surat City Gymkhana",
        tag: "Club Life",
        placement: "Adjacent to One Tapi",
        distance: "Adjacent (0 Mins)",
        distanceLabel: "Direct gate-to-gate connectivity with Surat's premier social club.",
        image: "/images/one-tapi/one-tapi-gallery-1.jpg",
        x: 56,
        y: 18,
        iconName: "Trophy",
      },
      {
        id: "loc-2",
        name: "Tapi Riverfront Promenade",
        tag: "Waterfront",
        placement: "Direct Riverfront Frontage",
        distance: "0 Mins Walk",
        distanceLabel: "Continuous pedestrian promenade with lush botanical riverbanks.",
        image: "/images/one-tapi/river-facing.jpg",
        x: 18,
        y: 44,
        iconName: "Waves",
      },
      {
        id: "loc-3",
        name: "VR Surat & Rahul Raj Mall",
        tag: "Retail & Dining",
        placement: "Piplod Luxury Retail Hub",
        distance: "5 Mins Drive",
        distanceLabel: "High-end luxury fashion stores, multiplex, and gourmet dining.",
        image: "/images/one-tapi/one-tapi.jpg",
        x: 74,
        y: 36,
        iconName: "ShoppingBag",
      },
      {
        id: "loc-4",
        name: "Dumas Road Luxury Corridor",
        tag: "Connectivity",
        placement: "Prime Arterial Highway",
        distance: "4 Mins Drive",
        distanceLabel: "Surat's landmark boulevard connecting VIP road and leisure coastlines.",
        image: "/images/one-tapi/pent-house-interior-c.jpg",
        x: 62,
        y: 78,
        iconName: "Route",
      },
      {
        id: "loc-5",
        name: "SVNIT & Prime Schools",
        tag: "Education",
        placement: "Institutional Enclave",
        distance: "7 Mins Drive",
        distanceLabel: "Renowned national institutes and leading international schools.",
        image: "/images/one-tapi/one-tapi-gallery-2.jpg",
        x: 22,
        y: 20,
        iconName: "GraduationCap",
      },
      {
        id: "loc-6",
        name: "Surat International Airport (STV)",
        tag: "Aviation",
        placement: "Airport Corridor",
        distance: "12 Mins Drive",
        distanceLabel: "Direct flights to Mumbai, Delhi, Dubai, Sharjah, and global hubs.",
        image: "/images/one-tapi/one-tapi-gallery-3.jpg",
        x: 34,
        y: 80,
        iconName: "Landmark",
      },
    ],
  },

  updates: [
    {
      month: "July",
      year: "2026",
      phase: "Milestone 04",
      title: "Skydeck & Penthouse Superstructure",
      description: "Casting of upper penthouse slab and preparation for panoramic glass balustrade structural mounts.",
      image: "/images/one-tapi/one-tapi-gallery-1.jpg",
      status: "In Progress",
    },
    {
      month: "June",
      year: "2026",
      phase: "Milestone 03",
      title: "Riverfront Facade Glazing & Framing",
      description: "Installation of specialized acoustic double-glazed curtain walls facing the Tapi River.",
      image: "/images/one-tapi/one-tapi-gallery-4.jpg",
      status: "Completed",
    },
    {
      month: "May",
      year: "2026",
      phase: "Milestone 02",
      title: "Mid-Rise Floor Slabs & MEP Systems",
      description: "High-grade concrete pour for mid-level residences and integrated plumbing/fire protection piping.",
      image: "/images/one-tapi/one-tapi-gallery-5.jpg",
      status: "Completed",
    },
    {
      month: "April",
      year: "2026",
      phase: "Milestone 01",
      title: "Podium & Private Lift Core Engineering",
      description: "Completion of high-speed elevator structural shafts and ground-level grand arrival portico.",
      image: "/images/one-tapi/one-tapi.jpg",
      status: "Completed",
    },
  ] as ProjectUpdate[],
};
