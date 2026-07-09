export const services = [
  {
    id: "branding",
    title: "Branding Services",
    description: "Crafting unique brand identities that resonate with your target audience and stand out in the market.",
    longDescription: "Our comprehensive branding services help you establish a strong, memorable identity. We dive deep into your company's values, mission, and target audience to create a cohesive brand story. From logo design and typography to comprehensive brand guidelines, we ensure every touchpoint reflects your unique brand essence.",
    icon: "LuPalette",
    image: "/img/branding.jpg",
    highlights: [
      { icon: "LuPen", title: "Unique Designs" },
      { icon: "LuTarget", title: "Brand Strategy" },
      { icon: "LuTrendingUp", title: "Growth Focused" }
    ],
    packages: [
      {
        name: "Starter Brand",
        price: "$500",
        features: ["Logo Design (3 Concepts)", "Color Palette", "Basic Typography", "Brand Guidelines PDF"]
      },
      {
        name: "Pro Identity",
        price: "$1,200",
        features: ["Logo Design (5 Concepts)", "Full Visual Identity System", "Stationery Design", "Social Media Kit", "Comprehensive Guidelines"]
      },
      {
        name: "Enterprise Rebrand",
        price: "$2,500+",
        features: ["Complete Brand Strategy", "Market Research & Positioning", "Custom Iconography", "Full Collateral Design", "Brand Launch Strategy"]
      }
    ]
  },
  {
    id: "mobile-app",
    title: "Mobile App Development",
    description: "High-performance, intuitive mobile applications for both iOS and Android platforms.",
    longDescription: "We build native and cross-platform mobile applications that deliver seamless user experiences. Our development process focuses on performance, security, and intuitive UI/UX design. Whether you need a consumer-facing app or an enterprise mobility solution, we bring your ideas to life on every device.",
    icon: "LuSmartphone",
    image: "/img/mobile app development.webp",
    highlights: [
      { icon: "LuSmartphone", title: "iOS & Android" },
      { icon: "LuRocket", title: "High Performance" },
      { icon: "LuShieldCheck", title: "Secure Data" }
    ],
    packages: [
      {
        name: "MVP App",
        price: "$3,000",
        features: ["Cross-Platform (React Native)", "Core Features Implementation", "Basic UI/UX Design", "1 Month Post-Launch Support"]
      },
      {
        name: "Business App",
        price: "$8,000",
        features: ["Custom Native or Cross-Platform", "Advanced UI/UX with Animations", "API Integrations", "Admin Dashboard", "3 Months Support"]
      },
      {
        name: "Enterprise Scale",
        price: "$15,000+",
        features: ["Fully Custom Native Apps (iOS/Android)", "Complex Architecture & Offline Modes", "Advanced Security Protocols", "Scalable Backend", "Ongoing Maintenance"]
      }
    ]
  },
  {
    id: "web-development",
    title: "Web Development",
    description: "Premium, modern, and highly responsive web applications tailored to your business needs.",
    longDescription: "Our web development team crafts custom, highly responsive, and scalable web applications. We utilize modern tech stacks to ensure fast load times, excellent SEO architecture, and robust security. From corporate websites to complex SaaS platforms, we deliver web solutions that drive business growth.",
    icon: "LuMonitor",
    image: "/img/web development.jpg",
    highlights: [
      { icon: "LuCode", title: "Clean Code" },
      { icon: "LuSmartphone", title: "Responsive" },
      { icon: "LuGauge", title: "Fast Loading" }
    ],
    packages: [
      {
        name: "Business Website",
        price: "$800",
        features: ["Up to 5 Pages", "Responsive Design", "Contact Form Integration", "Basic SEO Setup"]
      },
      {
        name: "E-Commerce Platform",
        price: "$2,000",
        features: ["Custom Product Pages", "Payment Gateway Integration", "Inventory Management", "User Accounts & Dashboards"]
      },
      {
        name: "Custom Web App",
        price: "$5,000+",
        features: ["Complex Custom Logic", "Database Architecture", "Third-party API Integrations", "High-Performance SPA/SSR"]
      }
    ]
  },
  {
    id: "web-hosting",
    title: "Web Hosting",
    description: "Secure, lightning-fast, and reliable cloud hosting solutions with 99.9% uptime.",
    longDescription: "Ensure your digital assets are always available with our premium web hosting solutions. We provide high-performance cloud environments optimized for speed and security. With automated backups, SSL certificates, and 24/7 monitoring, you can focus on your business while we handle the infrastructure.",
    icon: "LuServer",
    image: "/img/web hosting.jpg",
    highlights: [
      { icon: "LuClock", title: "99.9% Uptime" },
      { icon: "LuLock", title: "SSL Secure" },
      { icon: "LuDatabase", title: "Daily Backups" }
    ],
    packages: [
      {
        name: "Shared Cloud",
        price: "$15/mo",
        features: ["10GB SSD Storage", "Unmetered Bandwidth", "Free SSL Certificate", "Daily Automated Backups"]
      },
      {
        name: "VPS Hosting",
        price: "$45/mo",
        features: ["Dedicated Resources (2 CPU, 4GB RAM)", "50GB NVMe Storage", "Root Access", "Advanced Security Firewall"]
      },
      {
        name: "Dedicated Server",
        price: "$150/mo+",
        features: ["Custom Hardware Configuration", "Fully Managed Service", "DDoS Protection", "Load Balancing Support", "24/7 Priority Support"]
      }
    ]
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    description: "Data-driven marketing strategies to drastically increase your online presence and sales.",
    longDescription: "Accelerate your growth with our data-driven digital marketing campaigns. We utilize a mix of SEO, Social Media Management, PPC Advertising, and Content Strategy to maximize your ROI. Our strategies are designed to target the right audience, engage them meaningfully, and convert them into loyal customers.",
    icon: "LuTrendingUp",
    image: "/img/marketing.jpg",
    highlights: [
      { icon: "LuSearch", title: "SEO Optimized" },
      { icon: "LuUsers", title: "Targeted Ads" },
      { icon: "LuPieChart", title: "Data Driven" }
    ],
    packages: [
      {
        name: "SEO Boost",
        price: "$300/mo",
        features: ["On-Page SEO Optimization", "Keyword Research", "Monthly Traffic Report", "Basic Link Building"]
      },
      {
        name: "Social Media Pro",
        price: "$600/mo",
        features: ["Management of 3 Platforms", "15 Custom Posts/Month", "Community Engagement", "Paid Ad Setup (Ad Spend Excluded)"]
      },
      {
        name: "Comprehensive Growth",
        price: "$1,500/mo+",
        features: ["Full SEO & Content Strategy", "Omnichannel Ad Campaigns", "Conversion Rate Optimization (CRO)", "Advanced Analytics & Reporting"]
      }
    ]
  },
  {
    id: "data-analysis",
    title: "Data Analysis",
    description: "Transform raw data into actionable insights that drive smarter business decisions and growth.",
    longDescription: "Our data analysis services help you unlock the hidden potential in your data. We use advanced analytical tools and techniques to collect, process, and visualize your business data. From predictive analytics to custom dashboards and reporting, we empower your team to make data-driven decisions with confidence.",
    icon: "LuBarChart3",
    image: "/img/data analysis.png",
    highlights: [
      { icon: "LuDatabase", title: "Big Data" },
      { icon: "LuPieChart", title: "Visualization" },
      { icon: "LuBrain", title: "AI Insights" }
    ],
    packages: [
      {
        name: "Basic Analytics",
        price: "$400/mo",
        features: ["Data Collection & Cleaning", "Monthly Reports", "Basic Dashboard Setup", "Up to 3 Data Sources"]
      },
      {
        name: "Business Intelligence",
        price: "$900/mo",
        features: ["Custom Interactive Dashboards", "Predictive Analytics", "Unlimited Data Sources", "Weekly Insights Reports", "Team Training"]
      },
      {
        name: "Enterprise Analytics",
        price: "$2,000/mo+",
        features: ["AI-Powered Predictions", "Real-time Data Pipelines", "Custom ML Models", "Advanced Data Visualization", "Dedicated Data Analyst"]
      }
    ]
  }
];
