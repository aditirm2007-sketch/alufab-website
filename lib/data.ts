export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
];

export const contact = {
  contactName: "Nataraj",
  phone: "9620201315",
  phoneHref: "tel:+919620201315",
  email: "info@alufab.co.in",
  instagram: "instagram.com/alufabfs",
  instagramHref: "https://instagram.com/alufabfs",
  addressLines: [
    "1st Floor, Sy No-04, Aneppa Tower,",
    "Akshaya Nagar, Kowdenehalli Village,",
    "Ramamurthy Nagar Post, Bengaluru 560016",
  ],
};

export const stats = [
  { value: "2015", label: "Founded in" },
  { value: "10+", label: "Years of industry experience" },
  { value: "20+", label: "Marquee clients served" },
  { value: "Turnkey", label: "Design to handover" },
];

export type Product = {
  slug: string;
  title: string;
  description: string;
  image: string;
  category: ProjectCategory;
};

export const products: Product[] = [
  {
    slug: "curtain-wall",
    title: "Curtain Wall Systems",
    description: "Unitized and semi-unitized curtain wall for commercial towers and campuses.",
    image: "/images/products/curtain-wall.jpg",
    category: "Curtain Wall & Glazing",
  },
  {
    slug: "structural-spider-glazing",
    title: "Structural & Spider Glazing",
    description: "Frameless glass facades and point-fixed spider glazing for lobbies and entrances.",
    image: "/images/products/spider-glazing.jpg",
    category: "Spider Glazing, Railings & Canopies",
  },
  {
    slug: "cladding",
    title: "ACP, Metal & Wood Cladding",
    description: "Aluminium composite panel, metal and wood-composite cladding systems.",
    image: "/images/products/structural-glazing.jpg",
    category: "Curtain Wall & Glazing",
  },
  {
    slug: "skylights-canopies",
    title: "Skylights & Canopies",
    description: "Structural skylights, louvers, sunshades and glass canopies.",
    image: "/images/products/skylight.jpg",
    category: "Skylights, Doors & Windows",
  },
  {
    slug: "railings",
    title: "Glass, SS & Aluminium Railings",
    description: "Glass balustrades and stainless-steel or aluminium railing systems.",
    image: "/images/products/railings-windows.jpg",
    category: "Spider Glazing, Railings & Canopies",
  },
  {
    slug: "doors-windows",
    title: "uPVC & Aluminium Doors, Canopy",
    description: "Thermally efficient uPVC and aluminium doors and canopy systems for every project type.",
    image: "/images/products/canopy.jpg",
    category: "Skylights, Doors & Windows",
  },
];

export const process = [
  { step: "01", title: "Design", description: "Facade system design aligned to the architect's intent." },
  { step: "02", title: "Engineering", description: "Technical detailing, planning and client-site coordination." },
  { step: "03", title: "Fabrication", description: "Precision fabrication at our in-house manufacturing facility." },
  { step: "04", title: "Installation", description: "Assembly, pre-installation inspection and professional install." },
  { step: "05", title: "Handover", description: "Quality assurance and final project handover." },
];

export type Strength = {
  title: string;
  description: string;
  icon: "shield" | "target" | "building" | "layers" | "check";
};

export const strengths: Strength[] = [
  { title: "Durable", description: "Uncompromising integrity and quality without compromise.", icon: "shield" },
  { title: "Precise", description: "Technical expertise applied to every measurement and joint.", icon: "target" },
  { title: "Modern", description: "Advanced manufacturing capability and continuous innovation.", icon: "building" },
  { title: "Innovative", description: "A continuous-learning approach to new facade systems.", icon: "layers" },
  { title: "Reliable", description: "Accountability and timely execution on every project.", icon: "check" },
];

export const coreStrengths = [
  "Uncompromising integrity and transparency",
  "Ethical business practices with fairness and respect for all stakeholders",
  "A steadfast commitment to quality without compromise",
  "Customer-centric approach focused on long-term relationships",
  "Skilled and motivated workforce",
  "Technical expertise and continuous innovation",
  "Accountability, reliability, and timely project execution",
  "Open communication and complete transparency in every project",
];

export const services = [
  "Facade System Design",
  "Engineering and Technical Detailing",
  "Project Planning and Scheduling",
  "Client and Site Coordination",
  "Precision Fabrication",
  "Assembly and Pre-Installation Inspection",
  "Professional Installation",
  "Quality Assurance and Final Project Handover",
];

export type Client = { name: string; src: string };

export const clients: Client[] = [
  { name: "Brigade", src: "/images/clients/brigade.jpg" },
  { name: "Karle Infra", src: "/images/clients/karle-infra.jpg" },
  { name: "Hiranandani", src: "/images/clients/hiranandani.jpg" },
  { name: "Shapoorji Pallonji", src: "/images/clients/shapoorji-pallonji.jpg" },
  { name: "Trineva", src: "/images/clients/trineva.jpg" },
  { name: "Vaibhav", src: "/images/clients/vaibhav.jpg" },
  { name: "NCC", src: "/images/clients/ncc.jpg" },
  { name: "Adarsh Group", src: "/images/clients/adarsh-group.jpg" },
  { name: "Arvind Smartspaces", src: "/images/clients/arvind-smartspaces.jpg" },
  { name: "CapitaLand", src: "/images/clients/capitaland.jpg" },
  { name: "Wipro", src: "/images/clients/wipro.jpg" },
  { name: "Sumadhura", src: "/images/clients/sumadhura.jpg" },
  { name: "CMK Projects", src: "/images/clients/cmk-projects.jpg" },
  { name: "Aratt", src: "/images/clients/aratt.png" },
  { name: "Tata Housing", src: "/images/clients/tata-housing.jpg" },
  { name: "Ramky Group", src: "/images/clients/ramky-group.jpg" },
];

export type ProjectCategory =
  | "Curtain Wall & Glazing"
  | "Spider Glazing, Railings & Canopies"
  | "Skylights, Doors & Windows"
  | "MS Fabrication"
  | "Recent Projects";

export type Project = {
  title: string;
  category: ProjectCategory;
  image: string;
  featured?: boolean;
};

export const projects: Project[] = [
  { title: "Glazed office facade", category: "Curtain Wall & Glazing", image: "/images/products/curtain-wall.jpg" },
  { title: "Structural glass atrium", category: "Curtain Wall & Glazing", image: "/images/products/structural-glazing.jpg" },
  { title: "Spider glazing facade", category: "Spider Glazing, Railings & Canopies", image: "/images/products/spider-glazing.jpg" },
  { title: "Glass canopy entrance", category: "Spider Glazing, Railings & Canopies", image: "/images/products/canopy.jpg" },
  { title: "Balcony railings & windows", category: "Spider Glazing, Railings & Canopies", image: "/images/products/railings-windows.jpg" },
  { title: "Structural skylight dome", category: "Skylights, Doors & Windows", image: "/images/products/skylight.jpg" },
  { title: "MS gate & grille work", category: "MS Fabrication", image: "/images/products/ms-fabrication.jpg" },

  { title: "Novature — corporate office", category: "Recent Projects", image: "/images/projects/novature-office.jpg", featured: true },
  { title: "Croma — retail storefront", category: "Recent Projects", image: "/images/projects/croma-retail.jpg" },
  { title: "Residential tower facade", category: "Recent Projects", image: "/images/projects/residential-tower.jpg" },
  { title: "Airtel — commercial block", category: "Recent Projects", image: "/images/projects/airtel-commercial.jpg" },
  { title: "Apartment complex entrance", category: "Recent Projects", image: "/images/projects/apartment-complex.jpg" },
  { title: "Cladded commercial office", category: "Recent Projects", image: "/images/projects/cladded-office.jpg" },
  { title: "Allfermen — manufacturing facility", category: "Recent Projects", image: "/images/projects/allfermen-factory.jpg", featured: true },
  { title: "Residential glass balcony", category: "Recent Projects", image: "/images/projects/residential-glass-balcony.jpg" },
  { title: "V-Care Hospital facade", category: "Recent Projects", image: "/images/projects/vcare-hospital.jpg", featured: true },
  { title: "Retail high-rise cladding", category: "Recent Projects", image: "/images/projects/retail-highrise.jpg" },
  { title: "Snooker World — angled glass facade", category: "Recent Projects", image: "/images/projects/snookerworld-facade.jpg" },
  { title: "Timber-louver concept facade", category: "Recent Projects", image: "/images/projects/timber-louver-concept.jpg" },
  { title: "Ruchira — entrance canopy", category: "Recent Projects", image: "/images/projects/ruchira-entrance.jpg", featured: true },
  { title: "Perforated corten-clad entrance", category: "Recent Projects", image: "/images/projects/perforated-corten-facade.jpg" },
  { title: "Ruchira — night-lit canopy", category: "Recent Projects", image: "/images/projects/ruchira-night-canopy.jpg" },
  { title: "Glass railing interior stairwell", category: "Recent Projects", image: "/images/projects/glass-railing-interior.jpg" },
  { title: "Brick & ACP cladding block", category: "Recent Projects", image: "/images/projects/brick-acp-cladding.jpg" },
  { title: "Arvind SmartSpaces — louvered facade", category: "Recent Projects", image: "/images/projects/arvind-smartspaces-louvers.jpg" },
  { title: "Metal-clad pavilion", category: "Recent Projects", image: "/images/projects/metal-clad-pavilion.jpg" },
  { title: "Grey cladding detail", category: "Recent Projects", image: "/images/projects/grey-cladding-detail.jpg" },

  { title: "Peter England — retail storefront", category: "Recent Projects", image: "/images/projects/peter-england-storefront.jpg" },
  { title: "Timber-panel institutional facade", category: "Recent Projects", image: "/images/projects/timber-panel-institutional-facade.jpg" },
  { title: "Curved glass corner entrance", category: "Recent Projects", image: "/images/projects/curved-glass-corner-entrance.jpg" },
  { title: "Club Avante — clubhouse facade", category: "Recent Projects", image: "/images/projects/club-avante-facade.jpg" },
  { title: "IKEA — side elevation", category: "Recent Projects", image: "/images/projects/ikea-side-facade.jpg" },
  { title: "Curved brick & glass office", category: "Recent Projects", image: "/images/projects/curved-brick-glass-office.jpg" },
  { title: "Brigade Eternia — residential entrance", category: "Recent Projects", image: "/images/projects/brigade-eternia-entrance.jpg" },
  { title: "Stone-clad tower corner", category: "Recent Projects", image: "/images/projects/dark-stone-tower-corner.jpg" },
  { title: "School campus — building block", category: "Recent Projects", image: "/images/projects/school-campus-block-1.jpg" },
  { title: "Triangular canopy glass facade", category: "Recent Projects", image: "/images/projects/triangular-canopy-glass-facade.jpg" },
  { title: "School campus — entrance courtyard", category: "Recent Projects", image: "/images/projects/school-campus-entrance-courtyard.jpg" },
  { title: "School campus — covered walkway", category: "Recent Projects", image: "/images/projects/school-campus-covered-walkway.jpg" },
  { title: "School campus — roadside elevation", category: "Recent Projects", image: "/images/projects/school-campus-roadside-facade.jpg" },
  { title: "Arched glass canopy entrance", category: "Recent Projects", image: "/images/projects/arched-glass-canopy-entrance.jpg" },
  { title: "Puravankara — sales office facade", category: "Recent Projects", image: "/images/projects/puravankara-office-facade.jpg" },
  { title: "School campus — secondary wing", category: "Recent Projects", image: "/images/projects/school-campus-secondary-wing.jpg" },
  { title: "School campus — garden canopy pavilion", category: "Recent Projects", image: "/images/projects/school-campus-canopy-garden.jpg" },
  { title: "Brigade World Trade Center — high-rise cladding", category: "Recent Projects", image: "/images/projects/brigade-world-trade-center.jpg" },
  { title: "Newton Arcade — commercial storefront", category: "Recent Projects", image: "/images/projects/newton-arcade-storefront.jpg" },
  { title: "Colour-panel glass facade", category: "Recent Projects", image: "/images/projects/colorful-glass-panel-facade.jpg" },
  { title: "IKEA — store facade", category: "Recent Projects", image: "/images/projects/ikea-branded-facade.jpg" },
  { title: "Brigade — clubhouse facade", category: "Recent Projects", image: "/images/projects/brigade-clubhouse-facade.jpg" },
  { title: "School campus — entrance gate elevation", category: "Recent Projects", image: "/images/projects/school-campus-gate-facade.jpg" },
  { title: "School campus — street view", category: "Recent Projects", image: "/images/projects/school-campus-street-view.jpg" },
  { title: "School campus — finishing stage", category: "Recent Projects", image: "/images/projects/school-campus-construction-view.jpg" },
  { title: "School campus — covered walkway (alt view)", category: "Recent Projects", image: "/images/projects/school-campus-walkway-2.jpg" },
  { title: "School campus — building corner detail", category: "Recent Projects", image: "/images/projects/school-campus-interior-corner.jpg" },
  { title: "School campus — garden canopy pavilion (alt view)", category: "Recent Projects", image: "/images/projects/school-campus-canopy-garden-2.jpg" },
  { title: "Sri Sai Chaitanya — SS Forum facade", category: "Recent Projects", image: "/images/projects/sri-sai-chaitanya-facade.jpg" },
  { title: "Alufab — concept facade render", category: "Recent Projects", image: "/images/brand/alufab-concept-render.jpg" },
];

export const projectCategories: ProjectCategory[] = [
  "Curtain Wall & Glazing",
  "Spider Glazing, Railings & Canopies",
  "Skylights, Doors & Windows",
  "MS Fabrication",
  "Recent Projects",
];

export const leadership = {
  name: "Nataraj VM",
  title: "Founder & Managing Director",
  company: "Alufab Facade Solutions",
  photo: "/images/team/nataraj-vm.png",
  brief: [
    "Nataraj VM is the Founder and Managing Director of Alufab Facade Solutions, with a strong focus on building facade solutions, aluminium systems, glazing, curtain walls, cladding, and architectural exterior works.",
    "Driven by a passion for modern architecture and quality workmanship, Nataraj has built Alufab Facade Solutions with a vision to deliver innovative, durable, and aesthetically refined facade solutions for residential, commercial, and industrial buildings.",
    "His approach combines practical site experience, technical understanding, attention to detail, and a commitment to delivering projects in accordance with client requirements and industry standards.",
  ],
  vision:
    "To establish Alufab Facade Solutions as a trusted and innovative facade company, delivering high-quality building envelope solutions that combine design, performance, technology, and craftsmanship.",
  philosophy:
    "Creating façades that combine architectural beauty, engineering performance, and lasting quality.",
  education: "BE Mechanical",
  experience: "16 years of experience in the same industry",
  workedInGulf: "Worked in Gulf country",
  expertise: [
    "Aluminium windows & doors",
    "Structural & semi-unitized glazing",
    "Curtain wall systems",
    "Glass facades",
    "Aluminium composite panel cladding",
    "Metal cladding solutions",
    "Architectural facade design",
    "Building envelope solutions",
    "Facade installation and project execution",
  ],
};

export const workshop = [
  { title: "Double head cutting machine", image: "/images/workshop/cutting-machine.jpg" },
  { title: "Double head welding machine", image: "/images/workshop/welding-machine.jpg" },
  { title: "Lock groove cutting machine", image: "/images/workshop/lockgrove-machine.jpg" },
  { title: "Bead cutting machine", image: "/images/workshop/bead-machine.jpg" },
];
