const CDN = "https://d3dy70zhjs5mi1.cloudfront.net/s3fs-public";

export const HERO = {
  video: `${CDN}/2023-07/Orl%20Homepage%20Banner%20250723-1.m4v.mp4`,
  poster: "https://d3iaupvyybxkzx.cloudfront.net/s3fs-public/2023-08/org-bg.jpg",
  headline: "THERE IS A WORLD THAT AWAITS YOU.",
  cta: { label: "View Projects", href: "/our-projects" },
};

export const MENU: { label: string; href: string; children?: { label: string; href: string }[] }[] = [
  { label: "About Us", href: "/about-us" },
  { label: "Portfolio", href: "/our-projects" },
  { label: "Design Studio", href: "/design-studio" },
  {
    label: "Investors",
    href: "/investor-corner",
    children: [
      { label: "Financial Results", href: "/financial-results" },
      { label: "Shareholder Corner", href: "/shareholder-corner" },
      { label: "Investor Kit", href: "/investor-kit" },
      { label: "Notices & Others", href: "/investor-notices" },
    ],
  },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Corporate Social Responsibility", href: "/csr" },
  { label: "Media", href: "/media" },
  { label: "Blogs", href: "/blog" },
  { label: "Career", href: "/careers" },
  { label: "Awards", href: "/awards" },
  { label: "Contact Us", href: "/contact-us" },
];

export const TOP_LINKS = [
  { label: "about us", href: "#abt1" },
  { label: "Portfolio", href: "#abt2" },
  { label: "Sustainability", href: "#abt4" },
  { label: "CSR", href: "#abt5" },
  { label: "investor corner", href: "#abt6" },
  { label: "Blogs & Media", href: "#abt7" },
  { label: "Design Studio", href: "#abt8" },
];

export const ABOUT_INTRO = {
  eyebrow: "About Us",
  body: "Enriching, uplifting and inspiring your everyday life with our passionate designs, for over 40 years. At Oberoi Realty, we have mastered the art of creating impeccable standards of lifestyle, sustainably. The future of luxury living is now.",
};

export const ABOUT_SLIDES = [
  {
    title: "Quality of Life",
    body: "In line with our brand vision, we create spaces that enhance human spirit and the quality of life. We are committed that our products meet all essential requirements and are benchmarked in accordance with the best global standards, trends and practices. After all, happier people make happier cities.",
    video: `${CDN}/2023-07/8%20orl_Homepage_about_us_slider_quaity_of_life_110423.mp4`,
  },
  {
    title: "Naturally Urban",
    body: "Nature and connection to green living landscapes are crucial to making urban vertical and concrete spaces more habitable and healthier. In an increasingly urbanized world, we take pride in bringing nature into our residential and commercial projects, to create more liveable, healthier communities and to mitigate the effects of climate change.",
    video: `${CDN}/2023-07/9%20orl_Homepage_about_us_slider_natrually_urban_110423.mp4`,
  },
  {
    title: "Architecture",
    body: "We create landmark structures with a sense of community-building at the forefront. With our meticulous trends research and adherence to international benchmarking, every structure is a harmonious display of being one with nature. We constantly challenge ourselves to develop bold ideas that result in artistic interiors, modern architecture and luxurious lifestyles.",
    video: `${CDN}/2023-07/2.%20Homepage_About_us_slider_CINE_NO6%20DJI_0010_Architecture_sec5to15_110423.mp4`,
  },
  {
    title: "Design",
    body: "The design philosophy at Oberoi Realty is achieving the purest form of aesthetics and ensuring everything you need is within your reach. Our design is at the intersection of beautiful and functional, offering the seamless use of various complex ideas while making sure each customer has space to create their own unique identity.",
    video: `${CDN}/2023-07/orl_homepage_about_us_slider_design_A006_02020815_C011_V1-0011_design%20%281%29.mp4`,
  },
];

export const CHAIRMAN = {
  paragraphs: [
    "Spaces touch life in myriad ways. At Oberoi Realty, we ensure that the relationship between these spaces and the lives ensconced in or around them feel truly enriched.",
    "Over the past four decades, we have built an unparalleled brand repute through our aesthetic design and consistent quality construction that are at par with international benchmarks.",
    "Innovation in our offerings alongside an emphasis on contemporary architecture, strong project execution and partnerships with the best across the world, position us as pioneers of luxurious living.",
  ],
  name: "Vikas Oberoi",
  designation: "Chairman & Managing Director",
  image: `${CDN}/styles/large/public/2022-10/orl_homepage_Vikas_Oberoi_message_470x559px_311022_D.jpeg?itok=qzBcxPG4`,
};

export type Hotspot = {
  id: string;
  label: string;
  title: string;
  placement: "Inside the property" | "Outside the property";
  distance?: string;
  distanceLabel?: string;
  image: string;
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
  href: string;
  hotspots: Hotspot[];
};

export const LEADING_PROJECTS: LeadingProject[] = [
  {
    id: "ogc",
    name: "Oberoi Garden City",
    meta: "Goregaon . Residential",
    description:
      "Luxury Apartments brimming with life, amazing communal amenities, and spacious world-class designs. It promises a future of prosperity and a spectacular quality of life.",
    video: `${CDN}/2025-07/Oberoi_Graden_City_goregaon.mp4`,
    map: `${CDN}/2023-08/landing-project.png`,
    href: "/oberoi-garden-city",
    hotspots: [
      {
        id: "home1",
        label: "Oberoi Mall",
        title: "Oberoi Mall",
        placement: "Outside the property",
        distance: "20 m.",
        distanceLabel: "away from Western Express Highway",
        image: `${CDN}/2023-03/orl_leading%20project_ODC_Oberoi%20Mall_upcommin-mall.jpeg`,
        x: 21,
        y: 30,
      },
      {
        id: "home2",
        label: "Landscaped garden",
        title: "Landscape Garden",
        placement: "Inside the property",
        image: `${CDN}/2023-08/landscape-garden.jpg`,
        x: 37,
        y: 55,
      },
      {
        id: "home3",
        label: "Multipurpose Court",
        title: "Multipurpose Court",
        placement: "Inside the property",
        image: `${CDN}/2023-08/multipurpose-court.jpg`,
        x: 49,
        y: 68,
      },
      {
        id: "home4",
        label: "Swimming Pool",
        title: "Swimming Pool",
        placement: "Inside the property",
        image: `${CDN}/2023-08/swimming-pool.jpg`,
        x: 58,
        y: 47,
      },
      {
        id: "home5",
        label: "Metro Station",
        title: "Metro Station",
        placement: "Outside the property",
        distance: "50 m",
        distanceLabel: "away from OGC",
        image: `${CDN}/2023-03/orl_leading_projects_OGC_metro_station_278x401px_170323.jpeg`,
        x: 68,
        y: 25,
      },
      {
        id: "home6",
        label: "Gymnasium",
        title: "Gymnasium",
        placement: "Inside the property",
        image: `${CDN}/2023-04/orl_leading_projects_Gym_278x401px_060423.jpeg`,
        x: 44,
        y: 38,
      },
      {
        id: "home7",
        label: "The Westin Mumbai Garden City",
        title: "The Westin Mumbai Garden City",
        placement: "Outside the property",
        distance: "50 m",
        distanceLabel: "away from Western Express Highway",
        image: `${CDN}/2023-08/278x401-hotel.jpg`,
        x: 30,
        y: 71,
      },
      {
        id: "home8",
        label: "Western Express Highway",
        title: "Western Express Highway",
        placement: "Outside the property",
        distance: "50 m",
        distanceLabel: "away from Western Express Highway",
        image: `${CDN}/2023-04/orl_leading_projects_WEH_278x401px_060423.jpeg`,
        x: 80,
        y: 58,
      },
      {
        id: "home9",
        label: "Oberoi International School",
        title: "Oberoi International",
        placement: "Outside the property",
        distance: "800 m.",
        distanceLabel: "away from Western Express Highway",
        image: `${CDN}/2023-04/orl_homepage_leading_projects_OGC_OIS_SHS05469_278x401px_070423.jpeg`,
        x: 64,
        y: 78,
      },
    ],
  },
  {
    id: "skycity",
    name: "Sky City",
    meta: "Borivali East . Ongoing . P51800003582, P51800018404, P51800028419 and P51800047575",
    description:
      "With picturesque views, beautifully designed homes, and an array of finest amenities, Sky City brings elegance and plenty more to the Mumbai skyline.",
    video: `${CDN}/2025-07/sky_city_final_video.mp4`,
    map: `${CDN}/2023-08/landing-project.png`,
    href: "/residential/sky-city-borivali-east",
    hotspots: [
      {
        id: "s3-home1",
        label: "Upcoming Hotel",
        title: "Upcoming Hotel",
        placement: "Inside the property",
        image: `${CDN}/2023-05/orl_leading_projects_skycity_upcoming_hotel_278x401px_170523.jpeg`,
        x: 26,
        y: 34,
      },
      {
        id: "s3-home2",
        label: "Sky City Mall",
        title: "Upcoming Mall",
        placement: "Inside the property",
        image: `${CDN}/2023-04/orl_leading_projects_skycity_upcoming_malll_278x401px_030423.jpeg`,
        x: 42,
        y: 60,
      },
      {
        id: "s3-home3",
        label: "Amenities",
        title: "Upcoming Theatre",
        placement: "Inside the property",
        image: `${CDN}/2023-04/orl_leading_projects_skycity_swimming-pool_278x401px_030423.jpg`,
        x: 55,
        y: 44,
      },
      {
        id: "s3-home4",
        label: "Sanjay Gandhi National Park",
        title: "Sanjay Gandhi National park",
        placement: "Outside the property",
        distance: "1.3 kms",
        distanceLabel: "away from Sky City",
        image: `${CDN}/2023-05/orl_leading_projects_skycity_sanjya_gandhi_national_park_278x401px_170523.jpeg`,
        x: 72,
        y: 28,
      },
      {
        id: "s3-home5",
        label: "Metro Station",
        title: "Metro Station",
        placement: "Outside the property",
        distance: "0 kms",
        distanceLabel: "away from Sky City",
        image: `${CDN}/2023-03/orl_leading_projects_OGC_metro_station_278x401px_170323_0.jpeg`,
        x: 63,
        y: 72,
      },
      {
        id: "s3-home6",
        label: "Oberoi International school",
        title: "Oberoi International",
        placement: "Outside the property",
        distance: "7.1 kms",
        distanceLabel: "away from Sky City",
        image: `${CDN}/2023-04/orl_homepage_leading_projects_Skycity_OIS_SHS01764_278x401px_070423.jpeg`,
        x: 34,
        y: 76,
      },
    ],
  },
  {
    id: "tsw",
    name: "Three Sixty West Mumbai",
    meta: "Worli . Ready to Move in . Residential . P51900012115",
    description:
      "Grandeur with modern comforts. Uber luxury residences envisioned for the discerning and distinguished customer. Managed by Ritz Carlton, it is the ultimate expression of space and service.",
    video: `${CDN}/2023-07/3%20orl_leading_projects_360west_110423.mp4`,
    map: `${CDN}/2023-08/landing-project.png`,
    href: "/residential/three-sixty-west-worli",
    hotspots: [
      {
        id: "tWest2",
        label: "Bowling",
        title: "Bowling Alley",
        placement: "Inside the property",
        image: `${CDN}/2023-03/orl_leading_projects_360West_Bowling%20Alley_278x401px_170323.jpeg`,
        x: 24,
        y: 38,
      },
      {
        id: "tWest3",
        label: "Café",
        title: "Café",
        placement: "Inside the property",
        image: `${CDN}/2022-10/orl_Homepage_Leading_projects_TWS_Cafe360West_6523_278x401px_201022_D.jpeg`,
        x: 39,
        y: 64,
      },
      {
        id: "tWest4",
        label: "Swimming Pool",
        title: "Swimming Pool",
        placement: "Inside the property",
        image: `${CDN}/2023-03/orl_leading_projects_360West_swimming_pool_278x401px_170323.jpeg`,
        x: 52,
        y: 46,
      },
      {
        id: "tWest5",
        label: "Bandra Worli Sea Link",
        title: "Bandra Worli Sea Link",
        placement: "Outside the property",
        distance: "2.2 km",
        distanceLabel: "away from Bandra Worli Sea Link",
        image: `${CDN}/2022-10/orl_homepage_leading_projects_TSW_SeaLink_278x401px_121022_D.jpeg`,
        x: 70,
        y: 30,
      },
      {
        id: "tWest6",
        label: "Spa & Gym",
        title: "Spa & Gym",
        placement: "Inside the property",
        image: `${CDN}/2023-03/orl_leading_projects_360West_Spa%26Gym_278x401px_170323.jpeg`,
        x: 60,
        y: 70,
      },
      {
        id: "tWest7",
        label: "Ritz Carlton",
        title: "Ritz Carlton",
        placement: "Inside the property",
        image: `${CDN}/2023-03/orl_leading_projects_360West_ritz_carlton_278x401px_170323.jpeg`,
        x: 80,
        y: 55,
      },
      {
        id: "tWest10",
        label: "Cinema",
        title: "Cinema",
        placement: "Inside the property",
        image: `${CDN}/2023-03/orl_leading_projects_360West_cinema_theatre_278x401px_170323.jpeg`,
        x: 33,
        y: 24,
      },
    ],
  },
];

export const PORTFOLIO = {
  eyebrow: "Redefining Urban Living",
  items: [
    {
      title: "Residential",
      body: "Built on a legacy of elegance, style, and lifestyle, our residential apartments offer the superlative standard of living. With quality construction, world-class amenities and an impeccable reputation, our projects are the most enviable residences in Mumbai.",
      video: `${CDN}/2023-07/6%20orl_Homepage_redefining_residential_110423.mp4`,
      href: "/our-projects?uid=residential",
    },
    {
      title: "Commercial",
      body: "From leading MNCs to Fortune 500 businesses, our commercial spaces are designed to provide the most progressive workspace infrastructure.",
      video: `${CDN}/2025-09/Comercial_video_home_page.mp4`,
      href: "/our-projects?uid=commercial",
    },
    {
      title: "Hospitality",
      body: "In association with iconic hospitality brands like Westin and Ritz Carlton, we create spaces that bring together opulence and comfort with a sustainable approach that never compromises on aesthetics.",
      video: `${CDN}/2023-07/7%20orl_Homepage_redefining_hospitality_110423.mp4`,
      href: "/our-projects?uid=hospitality",
    },
    {
      title: "Retail",
      body: "Made to reinvent city life, our thoughtfully designed retail offerings are customer-centric and incorporate environment-friendly practices. The brand offerings vary from accessible to luxury, catering to a range of patrons.",
      video: `${CDN}/2023-07/orl_Homepage_redefining_retail_010623.mp4`,
      href: "/our-projects?uid=retail",
    },
    {
      title: "Social Infrastructure",
      body: "Our social infrastructure is purposefully-built, planned, exquisitely designed and precisely fabricated to educate and empower future global citizens.",
      video: `${CDN}/2023-07/5%20orl_Homepage_redefining_social_infrastructure_110423.mp4`,
      href: "/our-projects?uid=social-infrastructure",
    },
  ],
};

export const PROMO = {
  image: `${CDN}/styles/large/public/images/OGC-Thane-Landing-page-banner--1278-x-773%C2%A0.jpg?itok=mhp5dXvK`,
  href: "/oberoi-garden-city/thane",
  cta: "Click Here",
};

export const SUSTAINABILITY = {
  title: "Sustainable Practices",
  subtitle: "Committed to retain environmental harmony",
  video: `${CDN}/2023-08/Orl%20Homepage%20Sustainable%20Practice%20010823-1.m4v.mp4`,
  pillars: [
    {
      label: "Environment",
      body: "We prioritize caring for the environment in all our business activities, aiming to not only protect but also elevate its quality.",
    },
    {
      label: "Social",
      body: "We strive to enhance the prosperity of all stakeholders influenced by our business, whether directly or indirectly.",
    },
    {
      label: "Governance",
      body: "We ethically prioritize the interests of all stakeholders by embodying our core values in leadership.",
    },
  ],
  href: "/sustainability",
};

export const INVESTOR = {
  title: "Investor Corner",
  body: "We are transparent and prudent when it comes to our investors and we strive to bring value to all our stakeholders.",
  releaseTitle: "Financial Statements Released for the Q1, FY 2026-2027",
  documents: [
    { label: "Concall Transcript", href: "#" },
    { label: "Concall Audio Recording", href: "#" },
    { label: "Press Release", href: "#" },
    { label: "Investor Presentation", href: "#" },
  ],
  href: "/investor-corner",
};

export const ENQUIRY = {
  title: "Have A Question?",
  lines: ["We are happy to answer.", "Message us."],
  image: "https://www.oberoirealty.com/themes/oberoirealty/images/orl-homepaage.jpeg",
};

export const BLOGS = [
  {
    date: "11 August 2026",
    tag: "FEATURED",
    read: "7 mins read",
    title: "Sky City: Redefining Integrated Development with Sky City Mall and Mumbai Marriott Hotel Sky City",
    image: `${CDN}/styles/large/public/2026-08/Blog%C2%A0Thumbnail-562x382px-c.jpg?itok=omjrPwsz`,
    href: "/blog/sky-city-redefining-integrated-development-sky-city-mall-mumbai-marriott-hotel",
  },
  {
    date: "06 August 2026",
    tag: "FEATURED",
    read: "7 mins read",
    title: "Golf Course Extension Road is Setting a New Standard for Luxury Living in Gurgaon",
    image: `${CDN}/styles/large/public/2026-08/562-X-382.jpg?itok=XOhOoNK2`,
    href: "/blog/golf-course-extension-road-new-standard-luxury-living-gurgaon",
  },
  {
    date: "21 July 2026",
    tag: "FEATURED",
    read: "7 mins read",
    title: "Why NCR Continues to Be One of India's Most Promising Residential Investment Destinations",
    image: `${CDN}/styles/large/public/2026-07/Blog%C2%A0Thumbnail-562x382px.jpg?itok=PfSVqD-_`,
    href: "/blog/why-ncr-continues-to-be-one-of-indias-most-promising-residential-investment-destinations",
  },
];

export const NEWS = [
  { year: "2026", tag: "PRESS RELEASES", title: "Q1FY27 Press release", href: "#" },
  {
    year: "2026",
    tag: "PRESS RELEASES",
    title: "Oberoi Realty Achieves Gross Bookings of Approximately ₹8,109 Crore at Three Sixty North, Gurugram",
    href: "#",
  },
  {
    year: "2026",
    tag: "PRESS RELEASES",
    title: "Oberoi Realty Announces the launch of its ultra-luxury project Three Sixty North in Gurugram",
    href: "#",
  },
];

export const CONTACT = {
  company: "Oberoi Realty Limited",
  address:
    "Commerz, 3rd Floor, International Business Park, Oberoi Garden City, Off Western Express Highway, Goregaon (East), Mumbai, India- 400 063",
  phone: "022 6677 3333",
  salesPhone: "+91 8069807406",
};

export const FOOTER_LINKS = [
  { label: "About Us", href: "/about-us" },
  { label: "Investors", href: "/investor-corner" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Corporate Social Responsibility", href: "/csr" },
  { label: "Media", href: "/media" },
  { label: "Blogs", href: "/blog" },
  { label: "Portfolio", href: "/our-projects" },
  { label: "Awards", href: "/awards" },
  { label: "Career", href: "/careers" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Privacy Policy", href: "/mumbai-properties/privacy-policy" },
  { label: "Terms and Conditions", href: "/mumbai-properties/website-terms-and-conditions" },
];

export const SEO_LINKS = [
  { label: "3 BHK Apartments in Mumbai", href: "/3-bhk-flats-in-mumbai" },
  { label: "4 BHK Apartments in Mumbai", href: "/4-bhk-flats-in-mumbai" },
  { label: "3 BHK Flats in Mulund", href: "/residential/eternia-mulund-west" },
  { label: "4 BHK Flats in Mulund", href: "/residential/enigma-mulund-west" },
  { label: "3 BHK Flats in Thane", href: "/residential/forestville-by-oberoi-realty" },
  { label: "4 BHK Flats in Worli", href: "/residential/three-sixty-west-worli" },
  { label: "5 BHK Flats in Worli", href: "/residential/three-sixty-west-worli" },
  { label: "Duplex in Worli", href: "/residential/three-sixty-west-worli" },
];

export const DISCLAIMER =
  "The content on this website does not constitute an offer and/or acceptance and/or contract and/or agreement and/or transaction and/or any intention thereof and/or a disclosure under any statute of any nature whatsoever. The photographs contained herein may be actual/stock/standard photography or rendered images used for the purpose and have been taken at a location other than the project site and are used to indicate a conceptual lifestyle. Actual product may vary/differ from what is indicated herein. The location info shown are indicative and selective representation of certain elements present/that may be present in and around project site. No representations are made regarding existence/continuity of existence of any landmarks/locations shown. Before making a decision to purchase, you are requested to independently, either directly or through your legal/financial consultants, thoroughly verify all details/documents pertaining to the respective project as available on the website of the RERA Authority under the category registered projects.";
