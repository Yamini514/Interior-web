export const portfolioHero = {
  title: 'Our Portfolio',
  subtitle: 'Crafting spaces that inspire',
  ctaLabel: 'View Projects',
  image:
    'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1800&q=80',
}

export const portfolioCategories = ['All', 'Residential', 'Commercial', 'Kitchen', 'Bedroom', 'Office']

export const portfolioStats = [
  { label: 'Projects Completed', value: 240, suffix: '+' },
  { label: 'Happy Clients', value: 180, suffix: '+' },
  { label: 'Years Experience', value: 12, suffix: '+' },
]

export const portfolioTestimonials = [
  {
    name: 'Meera Sethi',
    rating: 5,
    text: 'They turned our apartment into something polished, warm, and far more functional than we imagined.',
  },
  {
    name: 'Karan Malhotra',
    rating: 5,
    text: 'The portfolio looked strong online, but the actual execution quality was even better. Every detail felt intentional.',
  },
  {
    name: 'Sana Verma',
    rating: 5,
    text: 'What stood out was the clarity of communication. We always knew the design direction, timeline, and next decision.',
  },
]

export const portfolioProjects = [
  {
    id: 'serene-villa',
    title: 'Serene Villa Retreat',
    category: 'Residential',
    location: 'Hyderabad',
    summary: 'A layered villa interior built around light, texture, and calm luxury.',
    description:
      'This villa project focused on soft neutrals, sculpted lighting, and bespoke joinery to create a warm, contemporary family home with quiet visual depth.',
    area: '3,400 sq ft',
    budget: 'Rs 42L',
    duration: '18 weeks',
    requirements: [
      'Open living and dining flow for family hosting',
      'Soft premium palette with durable finishes',
      'Integrated storage without visual clutter',
      'Statement lighting that still feels residential',
    ],
    coverImage:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      {
        image:
          'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
        alt: 'Serene Villa living room',
      },
      {
        image:
          'https://images.unsplash.com/photo-1505409628601-edc9af17fda6?auto=format&fit=crop&w=1200&q=80',
        alt: 'Serene Villa dining area',
      },
      {
        image:
          'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
        alt: 'Serene Villa kitchen',
      },
    ],
    beforeAfter: {
      before:
        'https://images.unsplash.com/photo-1484154218962-408f2469f7f6?auto=format&fit=crop&w=1200&q=80',
      after:
        'https://images.unsplash.com/photo-1505409628601-edc9af17fda6?auto=format&fit=crop&w=1200&q=80',
    },
    featured: true,
  },
  {
    id: 'urban-penthouse',
    title: 'Urban Penthouse Story',
    category: 'Residential',
    location: 'Bengaluru',
    summary: 'A high-rise penthouse with expressive textures and layered city-facing views.',
    description:
      'The penthouse was designed for entertaining, with custom lounge seating, ambient lighting, and rich material transitions from public to private zones.',
    area: '2,900 sq ft',
    budget: 'Rs 36L',
    duration: '16 weeks',
    requirements: [
      'Strong entertaining core with bar and lounge zones',
      'Luxury feel without heavy ornamentation',
      'Bedroom suites with privacy and calm lighting',
      'Integrated display shelving for art and objects',
    ],
    coverImage:
      'https://images.unsplash.com/photo-1505693416388-cd2b1b6f48f0?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      {
        image:
          'https://images.unsplash.com/photo-1505693416388-cd2b1b6f48f0?auto=format&fit=crop&w=1200&q=80',
        alt: 'Urban Penthouse bedroom',
      },
      {
        image:
          'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
        alt: 'Urban Penthouse lounge',
      },
      {
        image:
          'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1200&q=80',
        alt: 'Urban Penthouse dining corner',
      },
    ],
    beforeAfter: {
      before:
        'https://images.unsplash.com/photo-1505693416388-0a1aa1e33c12?auto=format&fit=crop&w=1200&q=80',
      after:
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
    },
    featured: false,
  },
  {
    id: 'boutique-lobby',
    title: 'Boutique Lobby Experience',
    category: 'Commercial',
    location: 'Mumbai',
    summary: 'A hospitality-led lobby with sculptural seating and strong brand presence.',
    description:
      'We designed a boutique arrival experience with layered lighting, tactile finishes, and a circulation pattern that guides guests naturally through the space.',
    area: '2,100 sq ft',
    budget: 'Rs 28L',
    duration: '14 weeks',
    requirements: [
      'Memorable first impression for guests',
      'Durable materials suited to high traffic',
      'Integrated waiting and concierge zones',
      'A premium look aligned with the brand identity',
    ],
    coverImage:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      {
        image:
          'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
        alt: 'Boutique lobby lounge',
      },
      {
        image:
          'https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1200&q=80',
        alt: 'Boutique lobby reception',
      },
      {
        image:
          'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
        alt: 'Boutique lobby seating zone',
      },
    ],
    beforeAfter: {
      before:
        'https://images.unsplash.com/photo-1497366754035-3f4f11e1ed39?auto=format&fit=crop&w=1200&q=80',
      after:
        'https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1200&q=80',
    },
    featured: true,
  },
  {
    id: 'retail-studio',
    title: 'Retail Studio Flagship',
    category: 'Commercial',
    location: 'Pune',
    summary: 'A retail flagship designed for discovery, dwell time, and clean product storytelling.',
    description:
      'The store layout combines modular product displays, warm spotlighting, and a restrained material palette that keeps the focus on the merchandise.',
    area: '1,800 sq ft',
    budget: 'Rs 24L',
    duration: '12 weeks',
    requirements: [
      'Flexible product display modules',
      'High-visibility focal wall for launches',
      'Cash counter and storage integration',
      'Customer path designed for slow exploration',
    ],
    coverImage:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      {
        image:
          'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
        alt: 'Retail studio merchandising wall',
      },
      {
        image:
          'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=1200&q=80',
        alt: 'Retail studio shelves',
      },
      {
        image:
          'https://images.unsplash.com/photo-1441986300917-3672f1c1db91?auto=format&fit=crop&w=1200&q=80',
        alt: 'Retail studio checkout counter',
      },
    ],
    beforeAfter: {
      before:
        'https://images.unsplash.com/photo-1481437156560-3205f6a55735?auto=format&fit=crop&w=1200&q=80',
      after:
        'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=1200&q=80',
    },
    featured: false,
  },
  {
    id: 'marble-kitchen',
    title: 'Marble Line Kitchen',
    category: 'Kitchen',
    location: 'Hyderabad',
    summary: 'A sleek modular kitchen with hidden storage and a polished stone-led palette.',
    description:
      'This kitchen pairs high-function cabinetry with marble surfaces, integrated appliances, and focused task lighting to improve the everyday cooking workflow.',
    area: '280 sq ft',
    budget: 'Rs 9.5L',
    duration: '6 weeks',
    requirements: [
      'Maximise storage within a compact footprint',
      'Support heavy daily cooking use',
      'Conceal appliances where possible',
      'Use durable, easy-maintenance materials',
    ],
    coverImage:
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      {
        image:
          'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
        alt: 'Marble Line Kitchen overview',
      },
      {
        image:
          'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80',
        alt: 'Marble Line Kitchen island',
      },
      {
        image:
          'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80',
        alt: 'Marble Line Kitchen cabinetry',
      },
    ],
    beforeAfter: {
      before:
        'https://images.unsplash.com/photo-1489516408517-0c0a15662682?auto=format&fit=crop&w=1200&q=80',
      after:
        'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80',
    },
    featured: false,
  },
  {
    id: 'earthy-kitchen',
    title: 'Earthy Kitchen Loft',
    category: 'Kitchen',
    location: 'Chennai',
    summary: 'A grounded kitchen concept with oak tones, matte finishes, and warm indirect light.',
    description:
      'The design focused on creating a kitchen that feels architectural yet welcoming, with tactile wood finishes and efficient work zones.',
    area: '310 sq ft',
    budget: 'Rs 10.8L',
    duration: '7 weeks',
    requirements: [
      'Warm organic material palette',
      'Breakfast ledge for quick family use',
      'Better pantry organization and access',
      'Ample counter space for prep',
    ],
    coverImage:
      'https://images.unsplash.com/photo-1505693416388-0a1aa1e33c12?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      {
        image:
          'https://images.unsplash.com/photo-1505693416388-0a1aa1e33c12?auto=format&fit=crop&w=1200&q=80',
        alt: 'Earthy Kitchen Loft overview',
      },
      {
        image:
          'https://images.unsplash.com/photo-1505693416388-725f11ebec27?auto=format&fit=crop&w=1200&q=80',
        alt: 'Earthy Kitchen Loft cabinetry',
      },
      {
        image:
          'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80',
        alt: 'Earthy Kitchen Loft counter detail',
      },
    ],
    beforeAfter: {
      before:
        'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80',
      after:
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80',
    },
    featured: false,
  },
  {
    id: 'suite-bedroom',
    title: 'Suite Bedroom Calm',
    category: 'Bedroom',
    location: 'Delhi',
    summary: 'A restful bedroom designed with hotel-like softness and highly efficient storage.',
    description:
      'This bedroom suite uses tactile fabrics, concealed storage, and dimmable lighting to create a retreat-like atmosphere without feeling overdesigned.',
    area: '420 sq ft',
    budget: 'Rs 6.8L',
    duration: '5 weeks',
    requirements: [
      'A hotel-inspired but practical mood',
      'Wardrobe capacity for two users',
      'Integrated vanity and bedside lighting',
      'Comfort-first material selection',
    ],
    coverImage:
      'https://images.unsplash.com/photo-1505693416388-cd2b1b6f48f0?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      {
        image:
          'https://images.unsplash.com/photo-1505693416388-cd2b1b6f48f0?auto=format&fit=crop&w=1200&q=80',
        alt: 'Suite Bedroom Calm main view',
      },
      {
        image:
          'https://images.unsplash.com/photo-1505693416388-7f4a22899f54?auto=format&fit=crop&w=1200&q=80',
        alt: 'Suite Bedroom Calm wardrobe wall',
      },
      {
        image:
          'https://images.unsplash.com/photo-1505693416388-f92d5c65f74f?auto=format&fit=crop&w=1200&q=80',
        alt: 'Suite Bedroom Calm side detail',
      },
    ],
    beforeAfter: {
      before:
        'https://images.unsplash.com/photo-1505693416388-a3b438a614f7?auto=format&fit=crop&w=1200&q=80',
      after:
        'https://images.unsplash.com/photo-1505693416388-7f4a22899f54?auto=format&fit=crop&w=1200&q=80',
    },
    featured: false,
  },
  {
    id: 'executive-office',
    title: 'Executive Office Suite',
    category: 'Office',
    location: 'Gurugram',
    summary: 'A leadership workspace with acoustic comfort, clean lines, and quiet authority.',
    description:
      'This office suite combines meeting, focus, and hospitality functions into one refined environment with muted tones and high-performance surfaces.',
    area: '1,250 sq ft',
    budget: 'Rs 18L',
    duration: '10 weeks',
    requirements: [
      'Private executive zone with meeting corner',
      'Acoustic comfort for calls and presentations',
      'Integrated storage for files and display',
      'A modern but understated corporate mood',
    ],
    coverImage:
      'https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      {
        image:
          'https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1200&q=80',
        alt: 'Executive Office Suite desk view',
      },
      {
        image:
          'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
        alt: 'Executive Office Suite meeting zone',
      },
      {
        image:
          'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
        alt: 'Executive Office Suite lounge',
      },
    ],
    beforeAfter: {
      before:
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80',
      after:
        'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    },
    featured: true,
  },
  {
    id: 'collab-office',
    title: 'Collaborative Studio Office',
    category: 'Office',
    location: 'Noida',
    summary: 'A creative office planned for team energy, focus pods, and flexible meetings.',
    description:
      'The studio office balances open collaboration with pockets of privacy, using layered work settings, soft acoustic finishes, and warmer lighting.',
    area: '1,600 sq ft',
    budget: 'Rs 22L',
    duration: '11 weeks',
    requirements: [
      'Flexible open-plan workstation layout',
      'Small focus pods for calls and deep work',
      'Collaborative breakout zone for reviews',
      'Brand accents without overwhelming the space',
    ],
    coverImage:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      {
        image:
          'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
        alt: 'Collaborative Studio Office open workspace',
      },
      {
        image:
          'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
        alt: 'Collaborative Studio Office meeting area',
      },
      {
        image:
          'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
        alt: 'Collaborative Studio Office lounge area',
      },
    ],
    beforeAfter: {
      before:
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80',
      after:
        'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
    },
    featured: false,
  },
]
