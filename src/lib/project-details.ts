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
      "/projects/travi-link/travelink-logo.png", // Logo preview image
      "/projects/travi-link/1.png", // App screenshot
      "/projects/travi-link/admin travelink.png",
      "/projects/travi-link/dashboard.png",
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
      "/projects/drive-abi/driveabi-logo.png", // Logo preview image
      "/projects/drive-abi/1.png", // App screenshot
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
      "/projects/drive-abi/driveabi-logo.png", // Logo preview image
      "/projects/drive-abi/1.png", // App screenshot
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
      "/projects/drive-abi/driveabi-logo.png", // Logo preview image
      "/projects/drive-abi/1.png", // App screenshot
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
      "/projects/travi-link/travelink-logo.png", // Logo preview image
      "/projects/travi-link/1.png", // App screenshot
      "/projects/travi-link/admin travelink.png",
      "/projects/travi-link/dashboard.png",
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
      "/projects/travi-link/travelink-logo.png", // Logo preview image
      "/projects/travi-link/1.png", // App screenshot
      "/projects/travi-link/admin travelink.png",
      "/projects/travi-link/dashboard.png",
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
      "/projects/travi-link-mobile/logo.png", // Logo preview image
      "/projects/travi-link-mobile/1.png", // App screenshot
      "/projects/travi-link-mobile/2.png", // App screenshot
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
      "/projects/travi-link-mobile/logo.png", // Logo preview image
      "/projects/travi-link-mobile/1.png", // App screenshot
      "/projects/travi-link-mobile/2.png", // App screenshot
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
      "/projects/travi-link-mobile/logo.png", // Logo preview image
      "/projects/travi-link-mobile/1.png", // App screenshot
      "/projects/travi-link-mobile/2.png", // App screenshot
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
      "/projects/travi-link-mobile/logo.png", // Logo preview image
      "/projects/travi-link-mobile/1.png", // App screenshot
      "/projects/travi-link-mobile/2.png", // App screenshot
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
      "/projects/alamat/alamat-logo.png", // Logo preview image
      "/projects/alamat/1.png", // App screenshot
      "/projects/alamat/2.png",
      "/projects/alamat/3.png",
      "/projects/alamat/4.png",
      "/projects/alamat/5.png",
      "/projects/alamat/6.png",
      "/projects/alamat/7.png",
      "/projects/alamat/8.png",
      "/projects/alamat/9.png",
      "/projects/alamat/10.png",
      "/projects/alamat/11.png",
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
  "sarap.io": {
    images: [
      "/projects/sarapio/sarapio-logo.png", // Logo preview image
      "/projects/sarapio/1.png", // App screenshot
    ],
    briefDescription: "Recipe application with extensive recipe collection, social interaction, AI chatbot assistance, and voice read-aloud functionality for hands-free cooking.",
    longDescription: `Sarap.io is a recipe application designed to provide users with an extensive collection of recipes, social interaction, and personalized cooking assistance. The app connects to a Supabase backend for database storage and integrates TheMealDB API to fetch recipes dynamically. It features an AI chatbot that aids users in searching recipes via keywords with a fallback mechanism if the API fails. The app enhances user experience by reading recipes aloud with adjustable voice speed, allowing hands-free operation. It also includes a social media feed for users to share and explore recipes from others, a profile page for user statistics, and settings for customization.

The app covers core functionalities such as viewing and managing a personal recipe collection, searching and fetching external recipes from TheMealDB API, AI chatbot for recipe search with keyword-based fallback, voice read-aloud functionality when viewing recipes and ingredients, social feed to upload and view recipes from other users, user profile with stats and customization options, notification system, and ability to add new recipes.

This project was developed as part of a course (M065-ITWM105) and represents my first iOS application built with SwiftUI. The experience provided hands-on learning with ObservableObject for data management, API integration, and real-time database connectivity with Supabase.`,
    features: [
      "Home Screen / Recipe List: Displays a list of available recipes with search and filtering options such as under 30 minutes, vegetarian, favorites, region, and cuisine tags",
      "Recipe Detail View: Shows detailed recipe information including ingredients, cooking steps, photos, and interactive favorite/unfavorite buttons",
      "AI Chatbot Screen: Enables users to type recipe-related questions like 'how to cook adobo', triggering either an API fetch or keyword-based responses displaying relevant recipes",
      "Voice Read Aloud Feature: When viewing recipe ingredients or steps, the app reads the text aloud with adjustable speed, enhancing hands-free cooking convenience",
      "Social Feed Screen: Users can scroll through posts with images, captions, likes, comments, and ratings shared by other users, with an option to add a new post",
      "Profile Page: Displays user statistics such as number of recipes added, followers, and following count with user profile picture",
      "Settings Page: Allows users to customize app preferences including the speed of voice read aloud",
      "Add Recipe Screen: Form where users can input new recipes including title, ingredients, steps, cooking time, cuisine, and upload photos",
      "Search Recipes: Lets users search for recipes by sending queries to TheMealDB API, providing a variety of recipes from different cuisines with images and basic info",
      "Notification System: Notifies users about relevant app updates or social interactions"
    ],
    technologyStack: {
      frontend: ["SwiftUI", "Swift"],
      backend: ["Supabase (PostgreSQL)", "TheMealDB API"],
      authentication: ["Supabase Auth"],
      realTime: ["Supabase Realtime"],
      additional: ["AI Chatbot (keyword-based)", "Text-to-Speech", "iOS App Development", "ObservableObject for state management"]
    },
    targetUsers: [
      "Home cooks",
      "Cooking enthusiasts",
      "Recipe collectors",
      "Social recipe sharers",
      "iOS users",
      "People who prefer hands-free cooking"
    ]
  },
  "sarapio": {
    images: [
      "/projects/sarapio/sarapio-logo.png", // Logo preview image
      "/projects/sarapio/1.png", // App screenshot
    ],
    briefDescription: "Recipe application with extensive recipe collection, social interaction, AI chatbot assistance, and voice read-aloud functionality for hands-free cooking.",
    longDescription: `Sarap.io is a recipe application designed to provide users with an extensive collection of recipes, social interaction, and personalized cooking assistance. The app connects to a Supabase backend for database storage and integrates TheMealDB API to fetch recipes dynamically. It features an AI chatbot that aids users in searching recipes via keywords with a fallback mechanism if the API fails. The app enhances user experience by reading recipes aloud with adjustable voice speed, allowing hands-free operation. It also includes a social media feed for users to share and explore recipes from others, a profile page for user statistics, and settings for customization.

The app covers core functionalities such as viewing and managing a personal recipe collection, searching and fetching external recipes from TheMealDB API, AI chatbot for recipe search with keyword-based fallback, voice read-aloud functionality when viewing recipes and ingredients, social feed to upload and view recipes from other users, user profile with stats and customization options, notification system, and ability to add new recipes.

This project was developed as part of a course (M065-ITWM105) and represents my first iOS application built with SwiftUI. The experience provided hands-on learning with ObservableObject for data management, API integration, and real-time database connectivity with Supabase.`,
    features: [
      "Home Screen / Recipe List: Displays a list of available recipes with search and filtering options such as under 30 minutes, vegetarian, favorites, region, and cuisine tags",
      "Recipe Detail View: Shows detailed recipe information including ingredients, cooking steps, photos, and interactive favorite/unfavorite buttons",
      "AI Chatbot Screen: Enables users to type recipe-related questions like 'how to cook adobo', triggering either an API fetch or keyword-based responses displaying relevant recipes",
      "Voice Read Aloud Feature: When viewing recipe ingredients or steps, the app reads the text aloud with adjustable speed, enhancing hands-free cooking convenience",
      "Social Feed Screen: Users can scroll through posts with images, captions, likes, comments, and ratings shared by other users, with an option to add a new post",
      "Profile Page: Displays user statistics such as number of recipes added, followers, and following count with user profile picture",
      "Settings Page: Allows users to customize app preferences including the speed of voice read aloud",
      "Add Recipe Screen: Form where users can input new recipes including title, ingredients, steps, cooking time, cuisine, and upload photos",
      "Search Recipes: Lets users search for recipes by sending queries to TheMealDB API, providing a variety of recipes from different cuisines with images and basic info",
      "Notification System: Notifies users about relevant app updates or social interactions"
    ],
    technologyStack: {
      frontend: ["SwiftUI", "Swift"],
      backend: ["Supabase (PostgreSQL)", "TheMealDB API"],
      authentication: ["Supabase Auth"],
      realTime: ["Supabase Realtime"],
      additional: ["AI Chatbot (keyword-based)", "Text-to-Speech", "iOS App Development", "ObservableObject for state management"]
    },
    targetUsers: [
      "Home cooks",
      "Cooking enthusiasts",
      "Recipe collectors",
      "Social recipe sharers",
      "iOS users",
      "People who prefer hands-free cooking"
    ]
  },
  "sarap-io": {
    images: [
      "/projects/sarapio/sarapio-logo.png", // Logo preview image
      "/projects/sarapio/1.png", // App screenshot
    ],
    briefDescription: "Recipe application with extensive recipe collection, social interaction, AI chatbot assistance, and voice read-aloud functionality for hands-free cooking.",
    longDescription: `Sarap.io is a recipe application designed to provide users with an extensive collection of recipes, social interaction, and personalized cooking assistance. The app connects to a Supabase backend for database storage and integrates TheMealDB API to fetch recipes dynamically. It features an AI chatbot that aids users in searching recipes via keywords with a fallback mechanism if the API fails. The app enhances user experience by reading recipes aloud with adjustable voice speed, allowing hands-free operation. It also includes a social media feed for users to share and explore recipes from others, a profile page for user statistics, and settings for customization.

This project was developed as part of a course (M065-ITWM105) and represents my first iOS application built with SwiftUI.`,
    features: [
      "Home Screen / Recipe List: Displays a list of available recipes with search and filtering options",
      "Recipe Detail View: Shows detailed recipe information including ingredients, cooking steps, and photos",
      "AI Chatbot: Keyword-based recipe search assistant with fallback mechanism",
      "Voice Read Aloud: Hands-free cooking with adjustable voice speed",
      "Social Feed: Upload, share, and explore recipes from other users",
      "Profile Page: Displays user statistics and profile information",
      "Settings & Customization: Customize app preferences including voice speed",
      "Add Recipe: Form interface to input new recipes",
      "Search Recipes: Search for recipes via TheMealDB API"
    ],
    technologyStack: {
      frontend: ["SwiftUI", "Swift"],
      backend: ["Supabase (PostgreSQL)", "TheMealDB API"],
      authentication: ["Supabase Auth"],
      realTime: ["Supabase Realtime"],
      additional: ["AI Chatbot (keyword-based)", "Text-to-Speech", "iOS App Development"]
    },
    targetUsers: [
      "Home cooks",
      "Cooking enthusiasts",
      "Recipe collectors",
      "iOS users"
    ]
  },
  "plana": {
    images: [
      "/projects/plana/planalogo.png", // Logo preview image
      "/projects/plana/1.png", // App screenshot
    ],
    briefDescription: "Personal planner mobile app for organizing tasks, schedules, and daily activities with an intuitive and modern interface.",
    longDescription: `Plana is a personal planner mobile application designed to help users organize their tasks, schedules, and daily activities. The app provides an intuitive and modern interface for managing personal productivity and staying organized.`,
    features: [
      // Add project features here
    ],
    technologyStack: {
      frontend: [],
      backend: [],
    },
    targetUsers: []
  },
  "barberque": {
    images: [
      "/projects/barberque/BarberQue-logo.png",
      "/projects/barberque/barberque1.png",
      "/projects/barberque/Screenshot 2025-12-09 041518.png",
      "/projects/barberque/1.png",
    ],
    briefDescription: "Microservices-based barber shop management platform with real-time queue tracking, appointment booking, and analytics dashboard.",
    longDescription: `Barber Queuing System is a production-ready microservices-based platform for managing barber shop operations. Built with 8 independent microservices communicating via REST APIs and Kafka, the system supports both appointment booking and walk-in queues with real-time updates and notifications.

**System Architecture:**
- Booking Service (Port 8000) - Handles appointments and queue entries
- Client Service (Port 8001) - User authentication with JWT
- Feedback Service (Port 8002) - Customer feedback management
- Notification Service (Port 8003) - Real-time notifications
- Barber Service (Port 8004) - Barber and service management
- Admin Service (Port 8005) - Administrative operations
- Analytics Service (Port 8006) - Analytics and reporting
- Queue Service - Kafka consumer for queue processing

**Client Applications:**
- GUI Client - CustomTkinter interface for customers
- Admin Dashboard - Administrative interface for shop management

**Key Features:**
Production-ready with data persistence, JWT authentication, structured logging, rate limiting, health checks, error handling, testing framework, and real-time queue tracking.`,
    features: [
      "Microservices Architecture: 8 independent services (Booking, Client, Feedback, Notification, Barber, Admin, Analytics, Queue Processor) communicating via REST APIs and Kafka for horizontal scalability",
      "Dual Booking System: Supports both scheduled appointment booking and walk-in queue management with real-time availability updates",
      "Real-Time Queue Tracking: Live updates for queue positions, estimated wait times, and instant notifications when it's the customer's turn",
      "JWT Authentication: Secure user authentication with JSON Web Tokens, role-based access control, and session management",
      "Admin Dashboard: Comprehensive administrative interface with analytics, queue management, barber scheduling, service management, and detailed reporting",
      "Analytics Service: Performance metrics dashboard with business insights, customer analytics, barber performance tracking, and revenue reporting",
      "Event-Driven Communication: Kafka-based event-driven architecture enabling asynchronous processing, service decoupling, and reliable message delivery",
      "Modern GUI Client: CustomTkinter interface for customers with intuitive design, queue visualization, appointment scheduling, and profile management",
      "Data Persistence: Atomic writes ensuring data consistency and persistence across service restarts with reliable storage mechanisms",
      "Security Features: Rate limiting to prevent abuse, input sanitization to prevent injection attacks, and comprehensive error handling with proper logging",
      "Health Checks: Monitoring endpoints and health checks for all services enabling proactive issue detection and system reliability",
      "Production-Ready Infrastructure: Structured logging for debugging and auditing, retry logic for resilience, and comprehensive testing framework for quality assurance",
      "Feedback Management: Customer feedback collection system allowing ratings, reviews, and service improvement insights",
      "Notification System: Multi-channel notification system for queue updates, appointment reminders, and system alerts"
    ],
    technologyStack: {
      frontend: ["CustomTkinter", "Python GUI", "Tkinter"],
      backend: ["Python", "Microservices Architecture", "REST APIs", "Flask/FastAPI"],
      authentication: ["JWT (JSON Web Tokens)", "Token-based authentication", "Role-based access control"],
      realTime: ["Apache Kafka", "Event streaming", "Real-time notifications", "Queue processing", "Message queues"],
      additional: ["Event-driven architecture", "Data persistence", "Analytics and reporting", "Rate limiting", "Health checks", "Testing framework (pytest)", "Structured logging", "Error handling and retry logic"]
    },
    targetUsers: [
      "Barber shop owners",
      "Barbers and stylists",
      "Customers",
      "Shop administrators",
      "Business managers",
      "Queue coordinators"
    ]
  },
  "barber-que": {
    images: [
      "/projects/barberque/1.png",
    ],
    briefDescription: "Microservices-based barber shop management platform with real-time queue tracking, appointment booking, and analytics dashboard.",
    longDescription: `Barber Queuing System is a production-ready, microservices-based platform designed for managing barber shop operations efficiently. The system is built with eight independent microservices that communicate via REST APIs and Apache Kafka, enabling scalable and resilient operations.

The platform supports both appointment booking and walk-in queue management, providing real-time updates and notifications to customers and barbers. The admin dashboard offers comprehensive analytics, queue management, barber management, and detailed reporting capabilities.`,
    features: [
      "Microservices Architecture: 8 independent services communicating via REST APIs and Kafka for scalability",
      "Dual Booking System: Supports both scheduled appointment booking and walk-in queue management",
      "Real-Time Queue Tracking: Live updates for queue positions and notifications",
      "JWT Authentication: Secure user authentication with role-based access control",
      "Admin Dashboard: Comprehensive administrative interface with analytics and reporting",
      "Event-Driven Communication: Kafka-based event-driven architecture",
      "Analytics Service: Performance metrics and business insights",
      "Modern GUI Client: CustomTkinter interface for customers",
      "Data Persistence: Reliable data storage across service restarts",
      "Security Features: Rate limiting, input sanitization, and error handling"
    ],
    technologyStack: {
      frontend: ["CustomTkinter", "Python GUI"],
      backend: ["Python", "Microservices Architecture", "REST APIs"],
      authentication: ["JWT (JSON Web Tokens)"],
      realTime: ["Apache Kafka", "Real-time notifications", "Queue processing"],
      additional: ["Event-driven architecture", "Data persistence", "Analytics", "Rate limiting", "Health checks"]
    },
    targetUsers: [
      "Barber shop owners",
      "Barbers and stylists",
      "Customers",
      "Shop administrators",
      "Business managers"
    ]
  },
  // Add more projects here following the same format
};

