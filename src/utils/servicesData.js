// src/utils/servicesData.js
export const services = [
  { id: 1, title: 'Website Development', icon: '💻', description: 'Responsive, fast, and SEO-optimized websites.' },
  { id: 2, title: 'Software Development', icon: '⚙️', description: 'Custom enterprise software & automation.' },
  { id: 3, title: 'Mobile App Development', icon: '📱', description: 'iOS & Android apps with modern UX.' },
  { id: 4, title: 'POS Systems', icon: '🛒', description: 'Retail & restaurant POS solutions.' },
  { id: 5, title: 'Hotel Services Integration', icon: '🏨', description: 'GetYourGuide, Booking, Airbnb, Agoda, TripAdvisor.' },
  { id: 6, title: 'VR & 360° Photography', icon: '🥽', description: 'Immersive virtual tours and 360° media.' },
  { id: 7, title: 'Facebook Ad Campaigns', icon: '📢', description: 'Targeted ads, analytics & conversion.' },
  { id: 8, title: 'QR Code Creation', icon: '📲', description: 'Dynamic QR codes for marketing.' },
  { id: 9, title: 'Leaflet & V-Card Printing', icon: '🖨️', description: 'Digital & print marketing materials.' },
  { id: 10, title: 'Project Reports', icon: '📊', description: 'Data-driven reporting & insights.' },
];

// projectsData fields
// - imageSrc: recommended way to set the card image.
//   Put your image inside `public/` and set `imageSrc` like: "/MyProject.png".
// - visitUrl: website URL to open from the "Visit" button.
// - imageKey: optional fallback (used only when imageSrc is not provided).
export const projectsData = [
  {
    id: 1,
    name: 'Jucon Travels Kandy',
    description: 'Jucon Travels is ready to take you safely, smoothly, and with a touch of Sri Lankan warmth.',
    client: 'Jucon Team',
    imageKey: 'hero',
    imageSrc: '/Jucontravels.png',
    visitUrl: 'https://www.jucontravels.com/',
  },
  {
    id: 2,
    name: 'Booking.com Integration Hub',
    description: 'Seamless channel manager and booking sync for hotels',
    client: 'StayWise',
    imageKey: 'abstract',
    imageSrc: '',
    visitUrl: '',
  },
  {
    id: 3,
    name: 'Retail POS + Inventory',
    description: 'Cloud POS with inventory, reporting, and multi-store support',
    client: 'Urban Mart',
    imageKey: 'abstract',
    imageSrc: '',
    visitUrl: '',
  },
  {
    id: 4,
    name: 'Travel Mobile App',
    description: 'Trip planning experience with GetYourGuide integration',
    client: 'Wanderly',
    imageKey: 'jucontra',
    imageSrc: '/Jucontravels.png',
    visitUrl: '',
  },
    {
    id: 3,
    name: 'NMDS Kandy',
    description: 'Cloud POS with inventory, reporting, and multi-store support',
    client: 'Urban Mart',
    imageKey: 'abstract',
    imageSrc: '',
    visitUrl: '',
  },
];

export const companiesAdvised = [
  'Accor Hotels', 'Marriott International', 'Tripadvisor Inc', 'Booking Holdings', 
  'Airbnb', 'Agoda', 'GetYourGuide', 'Hyatt Hotels'
];