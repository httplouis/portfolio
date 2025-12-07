// Custom project details and images
// Add your project images to: public/projects/{project-name}/
// Example: public/projects/travi-link/1.png, 2.png, etc.

export interface ProjectDetails {
  images?: string[];
  briefDescription?: string; // Short description for project cards
  longDescription?: string;
  features?: string[];
  technologyStack?: {
    frontend?: string[];
    backend?: string[];
    authentication?: string[];
    realTime?: string[];
    additional?: string[];
  };
  targetUsers?: string[];
}

export const customProjectDetails: Record<string, ProjectDetails> = {
  "travi-link": {
    images: [
      "/projects/travi-link/1.png",
      // Add more images: /projects/travi-link/2.png, 3.png, etc.
    ],
    briefDescription: "Campus transport management system for MSEUF with automated travel order requests and multi-level approval workflows.",
    longDescription: `Travelink is a web application for scheduling and tracking campus transport services at Manuel S. Enverga University Foundation (MSEUF). It digitizes and automates travel order requests, vehicle scheduling, driver management, and multi-level approval workflows.

The system streamlines the entire process from initial request submission to final approval, providing real-time tracking and comprehensive analytics for administrators and users alike.`,
    features: [
      "Request Management: Submit and track travel orders and seminar applications with budget tracking and expense breakdown",
      "Multi-Level Approval Workflow: Automated routing through Department Head → Admin → Comptroller → HR → Executive (VP/President) with role-based permissions",
      "Vehicle & Driver Assignment: Admin assigns vehicles and drivers based on availability and requirements",
      "Real-Time Tracking: Live updates on request status, vehicle location, and approval progress",
      "Feedback System: Post-trip feedback collection with ratings and reviews",
      "Dashboard Analytics: Metrics, processing time tracking, and insights for administrators and users",
      "Document Generation: Automated PDF generation for approved travel orders",
      "Notification System: In-app and email notifications for status changes and approvals"
    ],
    technologyStack: {
      frontend: ["Next.js 15 (App Router)", "React 19", "TypeScript", "Tailwind CSS"],
      backend: ["Next.js API Routes", "Supabase (PostgreSQL)"],
      authentication: ["Microsoft Azure AD (OAuth) integration"],
      realTime: ["Supabase Realtime subscriptions"],
      additional: ["AI-powered chatbot (Google Gemini)", "PDF generation", "Map integration (Leaflet/Google Maps)"]
    },
    targetUsers: [
      "Faculty",
      "Staff",
      "Department heads",
      "Administrators",
      "Comptrollers",
      "HR personnel",
      "Executives",
      "Drivers at MSEUF"
    ]
  },
  "drive-abi": {
    images: [
      "/projects/drive-abi/1.png",
      // Add more images: /projects/drive-abi/2.png, 3.png, etc.
    ],
    briefDescription: "Modern car rental and sales platform with premium fleet management and seamless booking experience.",
    longDescription: `Drive.Abi is a modern car rental and sales platform designed to provide users with a seamless experience in renting or purchasing vehicles. The platform features a sleek, dark-themed interface with premium fleet management and user-friendly booking systems.

Experience luxury and comfort with our premium fleet of vehicles. Whether you're looking to rent a car for a weekend getaway or purchase your dream vehicle, Drive.Abi offers a comprehensive solution with professional service and competitive pricing.`,
    features: [
      "Car Rental Service: Easy booking system for short-term and long-term rentals",
      "Car Sales Platform: Browse and purchase vehicles with detailed specifications",
      "Premium Fleet Management: Access to luxury and standard vehicles",
      "User-Friendly Interface: Modern, responsive design for all devices",
      "Membership Program: Exclusive benefits for members",
      "Customer Support: Dedicated support team for assistance",
      "Secure Booking: Safe and secure payment processing",
      "Vehicle Details: Comprehensive information and images for each vehicle"
    ],
    technologyStack: {
      frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      backend: ["Node.js", "API Routes"],
      additional: ["Responsive Design", "Modern UI/UX"]
    },
    targetUsers: [
      "Car rental customers",
      "Vehicle buyers",
      "Business clients",
      "Individual consumers"
    ]
  },
  // Alternative repo name formats
  "driveabi": {
    images: [
      "/projects/drive-abi/1.png",
    ],
    briefDescription: "Modern car rental and sales platform with premium fleet management and seamless booking experience.",
    longDescription: `Drive.Abi is a modern car rental and sales platform designed to provide users with a seamless experience in renting or purchasing vehicles. The platform features a sleek, dark-themed interface with premium fleet management and user-friendly booking systems.`,
    features: [
      "Car Rental Service: Easy booking system for short-term and long-term rentals",
      "Car Sales Platform: Browse and purchase vehicles with detailed specifications",
      "Premium Fleet Management: Access to luxury and standard vehicles",
      "User-Friendly Interface: Modern, responsive design for all devices"
    ],
    technologyStack: {
      frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      backend: ["Node.js", "API Routes"],
    },
    targetUsers: [
      "Car rental customers",
      "Vehicle buyers",
      "Business clients",
      "Individual consumers"
    ]
  },
  "drive_abi": {
    images: [
      "/projects/drive-abi/1.png",
    ],
    briefDescription: "Modern car rental and sales platform with premium fleet management and seamless booking experience.",
    longDescription: `Drive.Abi is a modern car rental and sales platform designed to provide users with a seamless experience in renting or purchasing vehicles. The platform features a sleek, dark-themed interface with premium fleet management and user-friendly booking systems.`,
    features: [
      "Car Rental Service: Easy booking system for short-term and long-term rentals",
      "Car Sales Platform: Browse and purchase vehicles with detailed specifications",
      "Premium Fleet Management: Access to luxury and standard vehicles",
      "User-Friendly Interface: Modern, responsive design for all devices"
    ],
    technologyStack: {
      frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      backend: ["Node.js", "API Routes"],
    },
    targetUsers: [
      "Car rental customers",
      "Vehicle buyers",
      "Business clients",
      "Individual consumers"
    ]
  },
  // Alternative repo name formats for Travelink
  "travelink": {
    images: [
      "/projects/travi-link/1.png",
    ],
    briefDescription: "Campus transport management system for MSEUF with automated travel order requests and multi-level approval workflows.",
    longDescription: `Travelink is a web application for scheduling and tracking campus transport services at Manuel S. Enverga University Foundation (MSEUF). It digitizes and automates travel order requests, vehicle scheduling, driver management, and multi-level approval workflows.`,
    features: [
      "Request Management: Submit and track travel orders and seminar applications with budget tracking and expense breakdown",
      "Multi-Level Approval Workflow: Automated routing through Department Head → Admin → Comptroller → HR → Executive (VP/President) with role-based permissions",
      "Vehicle & Driver Assignment: Admin assigns vehicles and drivers based on availability and requirements",
      "Real-Time Tracking: Live updates on request status, vehicle location, and approval progress"
    ],
    technologyStack: {
      frontend: ["Next.js 15 (App Router)", "React 19", "TypeScript", "Tailwind CSS"],
      backend: ["Next.js API Routes", "Supabase (PostgreSQL)"],
    },
    targetUsers: [
      "Faculty",
      "Staff",
      "Department heads",
      "Administrators"
    ]
  },
  "trave-link": {
    images: [
      "/projects/travi-link/1.png",
    ],
    briefDescription: "Campus transport management system for MSEUF with automated travel order requests and multi-level approval workflows.",
    longDescription: `Travelink is a web application for scheduling and tracking campus transport services at Manuel S. Enverga University Foundation (MSEUF). It digitizes and automates travel order requests, vehicle scheduling, driver management, and multi-level approval workflows.`,
    features: [
      "Request Management: Submit and track travel orders and seminar applications with budget tracking and expense breakdown",
      "Multi-Level Approval Workflow: Automated routing through Department Head → Admin → Comptroller → HR → Executive (VP/President) with role-based permissions"
    ],
    technologyStack: {
      frontend: ["Next.js 15 (App Router)", "React 19", "TypeScript", "Tailwind CSS"],
    },
    targetUsers: ["Faculty", "Staff"]
  },
  "travi-link-mobile": {
    images: [
      "/projects/travi-link-mobile/2.png",
      // Add more images: /projects/travi-link-mobile/1.png, 3.png, etc.
    ],
    briefDescription: "Cross-platform mobile app for Travelink with real-time notifications and offline access to transportation requests.",
    longDescription: `TraveLink Mobile is a cross-platform mobile application built with React Native (Expo), TypeScript, and Supabase. It provides faculty and staff with a mobile interface to view their transportation requests, track approval status, view their schedule, and receive real-time notifications.`,
    features: [
      "Authentication - Secure sign-in with Supabase Auth",
      "My Papers (Submissions) - View all submitted requests with real-time updates",
      "Request Details - Full request information with approval timeline",
      "Schedule/Calendar - View approved trips and availability",
      "Notifications - Real-time notifications for request updates",
      "Real-time Sync - Live updates via Supabase Realtime"
    ],
    technologyStack: {
      frontend: ["React Native (Expo)", "TypeScript"],
      backend: ["Supabase"],
      additional: ["Supabase Realtime", "Mobile App Development"]
    },
    targetUsers: [
      "Faculty",
      "Staff",
      "Mobile users"
    ]
  },
  // Alternative repo name formats for Travelink Mobile
  "travilink-mobile": {
    images: [
      "/projects/travi-link-mobile/2.png",
    ],
    briefDescription: "Cross-platform mobile app for Travelink with real-time notifications and offline access to transportation requests.",
    longDescription: `TraveLink Mobile is a cross-platform mobile application built with React Native (Expo), TypeScript, and Supabase. It provides faculty and staff with a mobile interface to view their transportation requests, track approval status, view their schedule, and receive real-time notifications.`,
    features: [
      "Authentication - Secure sign-in with Supabase Auth",
      "My Papers (Submissions) - View all submitted requests with real-time updates",
      "Request Details - Full request information with approval timeline",
      "Schedule/Calendar - View approved trips and availability",
      "Notifications - Real-time notifications for request updates",
      "Real-time Sync - Live updates via Supabase Realtime"
    ],
    technologyStack: {
      frontend: ["React Native (Expo)", "TypeScript"],
      backend: ["Supabase"],
    },
    targetUsers: ["Faculty", "Staff", "Mobile users"]
  },
  "trave-link-mobile": {
    images: [
      "/projects/travi-link-mobile/2.png",
    ],
    briefDescription: "Cross-platform mobile app for Travelink with real-time notifications and offline access to transportation requests.",
    longDescription: `TraveLink Mobile is a cross-platform mobile application built with React Native (Expo), TypeScript, and Supabase. It provides faculty and staff with a mobile interface to view their transportation requests, track approval status, view their schedule, and receive real-time notifications.`,
    features: [
      "Authentication - Secure sign-in with Supabase Auth",
      "My Papers (Submissions) - View all submitted requests with real-time updates",
      "Request Details - Full request information with approval timeline",
      "Schedule/Calendar - View approved trips and availability",
      "Notifications - Real-time notifications for request updates",
      "Real-time Sync - Live updates via Supabase Realtime"
    ],
    technologyStack: {
      frontend: ["React Native (Expo)", "TypeScript"],
      backend: ["Supabase"],
    },
    targetUsers: ["Faculty", "Staff"]
  },
  "travi_link_mobile": {
    images: [
      "/projects/travi-link-mobile/2.png",
    ],
    longDescription: `TraveLink Mobile is a cross-platform mobile application built with React Native (Expo), TypeScript, and Supabase.`,
    features: [
      "Authentication - Secure sign-in with Supabase Auth",
      "My Papers (Submissions) - View all submitted requests with real-time updates"
    ],
    technologyStack: {
      frontend: ["React Native (Expo)", "TypeScript"],
    },
    targetUsers: ["Faculty", "Staff"]
  },
  "alamat": {
    images: [
      "/projects/alamat/1.png",
      // Add more images: /projects/alamat/2.png, 3.png, etc.
    ],
    briefDescription: "Interactive map platform exploring Philippine legends and cultural heritage through geolocated stories and immersive experiences.",
    longDescription: `Alamat is an interactive web application that explores the mysteries and legends of the Philippines through interactive maps and captivating stories. The platform features geolocated legends, cultural heritage information, and an engaging user experience.`,
    features: [
      // Add your project features here
    ],
    technologyStack: {
      frontend: [],
      backend: [],
    },
    targetUsers: []
  },
  // Add more projects here following the same format
};

