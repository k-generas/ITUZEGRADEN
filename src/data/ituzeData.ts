/**
 * Comprehensive verified data for Ituze Garden and Ituze Garden Palace
 * Kigali, Rwanda
 */

export interface Branch {
  id: string;
  name: string;
  subtitle: string;
  tagline: string;
  address: string;
  area: string;
  district: string;
  city: string;
  country: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  googleMapsUrl: string;
  phones: string[];
  email: string;
  hours: {
    office: string;
    events: string;
  };
  capacity: string;
  heroImage: string;
  galleryImages: string[];
  features: string[];
  amenities: {
    title: string;
    description: string;
  }[];
}

export interface ServiceCategory {
  id: string;
  number: string;
  title: string;
  summary: string;
  image: string;
  items: {
    name: string;
    description: string;
  }[];
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'lawn' | 'hall' | 'decor' | 'masaka' | 'wedding';
  branch: 'Kimironko' | 'Masaka' | 'Both';
  src: string;
  description: string;
  isAuthenticArchive?: boolean;
}

export const ITUZE_BRANCHES: Branch[] = [
  {
    id: 'kimironko',
    name: 'Ituze Garden (Kimironko)',
    subtitle: 'Flagship Urban Venue & Hall',
    tagline: 'Accessible urban elegance with manicured green lawns and adjacent banquet hall',
    address: '99 KG 11 Ave',
    area: 'Kimironko',
    district: 'Gasabo District',
    city: 'Kigali City',
    country: 'Rwanda',
    coordinates: {
      lat: -1.9449362,
      lng: 30.1286281
    },
    googleMapsUrl: 'https://maps.app.goo.gl/n2dQG1hYxHNkTLa37',
    phones: ['+250 786 982 618', '+250 785 323 475'],
    email: 'ituze.garden@yahoo.com',
    hours: {
      office: 'Monday–Friday: 8:00 AM – 5:00 PM',
      events: 'Daily: Available until 12:00 Midnight'
    },
    capacity: '20 to 500 Guests',
    heroImage: '/src/assets/images/hero_ituze_garden_kigali_1792189320590.jpg',
    galleryImages: [
      '/images/ituze/ituze_garden_main.jpg',
      '/images/ituze/ituze_lawn_walkway.jpg',
      '/images/ituze/ituze_hall_setup.jpg',
      '/images/ituze/ituze_reception_table.jpg'
    ],
    features: [
      'Expansive open-air manicured grass lawn',
      'Weather-proof adjacent event reception hall',
      'Dedicated on-site secure parking lot',
      'Modern sanitary & restroom facilities',
      'Full wheelchair-accessible ramps & seating zones'
    ],
    amenities: [
      {
        title: 'Central Accessibility',
        description: 'Positioned right on KG 11 Avenue in Kimironko, easily reachable from Nyarutarama, Kisimenti, and Remera.'
      },
      {
        title: 'Dual Space Versatility',
        description: 'Seamless indoor-outdoor transitions between the sunny green lawn and the sheltered banquet hall.'
      },
      {
        title: 'Guest Comfort',
        description: 'Complete accessibility for elderly and wheelchair guests, with secure private parking and paved pathways.'
      }
    ]
  },
  {
    id: 'masaka',
    name: 'Ituze Garden Palace (Masaka)',
    subtitle: 'Scenic Country-Style Retreat & Palace',
    tagline: 'Expansive lush sanctuary specialized in long-duration weddings, galas, and overnight stays',
    address: 'Masaka (near Dubai Port road / Masaka Hospital area)',
    area: 'Masaka',
    district: 'Kicukiro District',
    city: 'Kigali',
    country: 'Rwanda',
    coordinates: {
      lat: -1.9965,
      lng: 30.2032
    },
    googleMapsUrl: 'https://maps.google.com/?q=Ituze+Garden+Palace+Masaka+Kigali',
    phones: ['+250 788 626 762'],
    email: 'ituzegardenpalace@gmail.com',
    hours: {
      office: 'Open 24/7 for booking inquiries',
      events: '24/7 Extended celebration and overnight retreat capabilities'
    },
    capacity: '50 to 600+ Guests',
    heroImage: '/src/assets/images/masaka_palace_retreat_1792189321142.jpg',
    galleryImages: [
      '/src/assets/images/masaka_palace_retreat_1792189321142.jpg',
      '/src/assets/images/garden_wedding_ceremony_1792189322567.jpg',
      '/images/ituze/ituze_garden_panoramic.jpg',
      '/images/ituze/ituze_lawn_evening.jpg'
    ],
    features: [
      'Vast botanical grounds with indigenous Rwandan trees & flowering flora',
      'Custom-built outdoor kids\' playground area with games',
      'On-site private overnight guest accommodations for hosts & newlyweds',
      'Panoramic hillside photography vistas with natural backdrops',
      'Extended celebration hours for full-day weddings and evening galas'
    ],
    amenities: [
      {
        title: 'Country Haven Peace',
        description: 'Far from highway noise, surrounded by rolling hills and native greenery for intimate, distraction-free celebrations.'
      },
      {
        title: 'Family & Children Play Zone',
        description: 'Dedicated playground so family events, picnics, and wedding celebrations keep kids happily entertained safely.'
      },
      {
        title: 'Overnight Hospitality',
        description: 'Restful private rooms and bridal suites allowing key wedding organizers and couples to prepare and unwind on-site.'
      }
    ]
  }
];

export const ITUZE_SERVICES: ServiceCategory[] = [
  {
    id: 'venue-hire',
    number: '01',
    title: 'Venue Hire & Space Rental',
    summary: 'Picturesque manicured outdoor lawns and weather-proof indoor halls configured for seamless gatherings.',
    image: '/src/assets/images/garden_wedding_ceremony_1792189322567.jpg',
    items: [
      {
        name: 'The Lawns & Botanical Gardens',
        description: 'Freshly trimmed green turf suitable for wedding ceremonies, cocktail receptions, product launches, and family garden picnics with sweeping hillside views.'
      },
      {
        name: 'The Reception & Banquet Hall',
        description: 'High-ceilinged, climate-comfortable indoor hall providing guaranteed peace of mind against weather changes, equipped for dining banquets, seminars, and corporate assemblies.'
      },
      {
        name: 'Photography & Media Production Sessions',
        description: 'Dedicated grounds access for wedding photoshoots, music videos, documentary interviews, and fashion editorial shoots.'
      }
    ]
  },
  {
    id: 'planning-coordination',
    number: '02',
    title: 'Event Planning & Coordination',
    summary: 'End-to-end management led by experienced Rwandan event coordinators who handle every logistical milestone.',
    image: '/src/assets/images/indoor_banquet_hall_1792189321550.jpg',
    items: [
      {
        name: 'Full Social Celebration Management',
        description: 'Comprehensive planning for traditional Rwandan weddings (Gusaba & Gukwa), white weddings, anniversary galas, birthday banquets, and family reunions.'
      },
      {
        name: 'Corporate & Institutional Conventions',
        description: 'Professional execution of summits, press conferences, workshops, policy presentations, and networking cocktails with zero protocol friction.'
      },
      {
        name: 'Dedicated On-Site Event Manager',
        description: 'A designated single point of contact on site throughout your event to direct vendors, guest flow, timing, and security.'
      }
    ]
  },
  {
    id: 'decor-complementary',
    number: '03',
    title: 'Décor & Complementary Services',
    summary: 'Bespoke aesthetic styling, sound engineering, and thoughtful family hospitality tailored to your budget.',
    image: '/images/ituze/ituze_event_decor.jpg',
    items: [
      {
        name: 'Thematic Event Decoration',
        description: 'Floral arches, custom fabric ceiling draping, table linens, centerpiece arrangements, and ambient warm evening lighting designed around your colors.'
      },
      {
        name: 'Kids\' Entertainment Packages',
        description: 'Exclusive to Ituze Garden Palace (Masaka), bundled packages providing supervised access to playground slides, swings, and children\'s games.'
      },
      {
        name: 'Acoustics & Sound System Solutions',
        description: 'High-clarity PA systems, wireless microphones for speechmakers and pastors, and sound reinforcement tailored to garden acoustics.'
      }
    ]
  }
];

export const ITUZE_GALLERY: GalleryPhoto[] = [
  {
    id: 'g1',
    title: 'Flagship Lawn Walkway',
    category: 'lawn',
    branch: 'Kimironko',
    src: '/images/ituze/ituze_lawn_walkway.jpg',
    description: 'Neat stone pathway cutting through the lush Kimironko lawns for bridal entries.',
    isAuthenticArchive: true
  },
  {
    id: 'g2',
    title: 'Grand Kigali Garden Venue Panorama',
    category: 'wedding',
    branch: 'Both',
    src: '/src/assets/images/hero_ituze_garden_kigali_1792189320590.jpg',
    description: 'Aerial vista of an outdoor Rwandan wedding reception surrounded by green hills.',
    isAuthenticArchive: false
  },
  {
    id: 'g3',
    title: 'Outdoor Wedding Ceremony Setup',
    category: 'wedding',
    branch: 'Masaka',
    src: '/src/assets/images/garden_wedding_ceremony_1792189322567.jpg',
    description: 'Wooden floral arch with pristine white guest seating overlooking Rwandan valleys.',
    isAuthenticArchive: false
  },
  {
    id: 'g4',
    title: 'Masaka Palace Retreat & Playgrounds',
    category: 'masaka',
    branch: 'Masaka',
    src: '/src/assets/images/masaka_palace_retreat_1792189321142.jpg',
    description: 'Country estate grounds featuring shade trees, guest accommodations, and play areas.',
    isAuthenticArchive: false
  },
  {
    id: 'g5',
    title: 'Indoor Banquet Hall & Draped Ceiling',
    category: 'hall',
    branch: 'Kimironko',
    src: '/src/assets/images/indoor_banquet_hall_1792189321550.jpg',
    description: 'Chic indoor hall with flowing white draping, chandelier lighting, and formal dinner tables.',
    isAuthenticArchive: false
  },
  {
    id: 'g6',
    title: 'Kimironko Main Garden Grounds',
    category: 'lawn',
    branch: 'Kimironko',
    src: '/images/ituze/ituze_garden_main.jpg',
    description: 'Vibrant green lawn with surrounding flowering shrubbery at the Kimironko branch.',
    isAuthenticArchive: true
  },
  {
    id: 'g7',
    title: 'Table Centerpiece & Banquet Decor',
    category: 'decor',
    branch: 'Both',
    src: '/images/ituze/ituze_event_decor.jpg',
    description: 'Professional table setting with floral arrangements and glassware.',
    isAuthenticArchive: true
  },
  {
    id: 'g8',
    title: 'Ceremony Seating Configuration',
    category: 'wedding',
    branch: 'Kimironko',
    src: '/images/ituze/ituze_wedding_chairs.jpg',
    description: 'Spacious seating rows arranged for an afternoon wedding reception.',
    isAuthenticArchive: true
  },
  {
    id: 'g9',
    title: 'Evening Atmosphere on the Lawn',
    category: 'lawn',
    branch: 'Masaka',
    src: '/images/ituze/ituze_lawn_evening.jpg',
    description: 'Golden hour sunset casting tranquil light across the rolling grass lawns.',
    isAuthenticArchive: true
  },
  {
    id: 'g10',
    title: 'Hall Reception Dining Setup',
    category: 'hall',
    branch: 'Kimironko',
    src: '/images/ituze/ituze_hall_setup.jpg',
    description: 'Interior banquet configuration ready for dinner guests.',
    isAuthenticArchive: true
  },
  {
    id: 'g11',
    title: 'Reception Table & Glassware',
    category: 'decor',
    branch: 'Both',
    src: '/images/ituze/ituze_reception_table.jpg',
    description: 'Close-up of formal cutlery and table settings crafted by our décor team.',
    isAuthenticArchive: true
  },
  {
    id: 'g12',
    title: 'Panoramic Garden Horizon',
    category: 'masaka',
    branch: 'Masaka',
    src: '/images/ituze/ituze_garden_panoramic.jpg',
    description: 'Expansive field view showing the natural beauty of the country retreat.',
    isAuthenticArchive: true
  }
];

export const ITUZE_VALUES = [
  {
    title: 'Innovation',
    description: 'We continuously evolve our garden architecture, lighting designs, and logistical setups to deliver fresh, memorable experiences.'
  },
  {
    title: 'Integrity',
    description: 'Honesty and clear pricing without hidden surprises are our foundation. What we promise in our agreements is delivered on the ground.'
  },
  {
    title: 'Passion',
    description: 'We treat every wedding, conference, or family milestone with genuine care, ensuring hosts can celebrate with complete peace of mind.'
  }
];

export const ITUZE_FAQS = [
  {
    question: 'How many guests can Ituze Garden host?',
    answer: 'We cater to gatherings from intimate 20-person meetings up to large 600+ attendee weddings and public galas across our Kimironko and Masaka Palace branches.'
  },
  {
    question: 'What is the main difference between Kimironko and Masaka Palace?',
    answer: 'Kimironko is our central urban flagship on 99 KG 11 Ave featuring an open lawn and adjacent indoor hall. Masaka Palace is an expansive country-style estate featuring extended celebration hours, children\'s playgrounds, and overnight guest cottages.'
  },
  {
    question: 'Can we bring our own outside caterers and decorators?',
    answer: 'Yes! While we offer in-house professional décor and coordination, you are free to bring approved outside catering, bar services, and photography teams.'
  },
  {
    question: 'Are the venues wheelchair accessible and do they have secure parking?',
    answer: 'Yes. Both branches feature dedicated on-site parking lots with security guards, clean modern restrooms, and step-free wheelchair-accessible entrances.'
  },
  {
    question: 'What happens if it rains during an outdoor garden booking?',
    answer: 'At our Kimironko branch, our adjacent weather-proof indoor hall offers an immediate sheltered alternative. At Masaka Palace, we coordinate high-peak waterproof pavilions.'
  }
];
