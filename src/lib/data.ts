export interface PersonalInfo {
  name: string;
  role: string;
  bio: string;
  email: string;
  phone?: string;
  location: string;
  github?: string;
  linkedin?: string;
  resume?: string;
  profileImage: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  description: string[];
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "mobile" | "tools";
  level?: number;
}

export interface Project {
  name: string;
  description: string;
  url?: string;
  githubUrl?: string;
  technologies: string[];
  image?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date?: string;
  url?: string;
  pdfPath?: string;
  issuerColor?: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export const personalInfo: PersonalInfo = {
  name: "Jose Louis D. Rosales",
  role: "Full Stack Developer",
  bio: "I am an Information Technology student focusing on web and mobile application development. I work with modern stacks and I'm comfortable learning new tools when projects require it. My 3 years as a student assistant in the Engineering Department helped me develop professionalism, organization, and the ability to work under pressure.",
  email: "joselouis.rosales.cdscdb@gmail.com",
  phone: "+63 9935583858",
  location: "Trece Martires City, Cavite",
  github: "https://github.com/httplouis",
  linkedin: "https://www.linkedin.com/in/jose-louis-rosales08/",
  resume: "/Rosales_Resume.docx",
  profileImage: "/jolo.jpg",
};

export const experiences: Experience[] = [
  {
    title: "Student Assistant",
    company: "Engineering Department, MSEUF",
    location: "Philippines",
    startDate: "2022-08",
    endDate: "Present",
    description: [
      "Assisted in daily operations of the engineering department including opening rooms, preparing laboratories, and ensuring classrooms/tools were ready for use",
      "Managed borrowing and return of engineering equipment and maintained proper inventory/records for faculty and students",
      "Coordinated with faculty/staff for room access, activity schedules, and lab requirements while maintaining order and safety during peak hours",
      "My 3 years as a student assistant in the Engineering Department helped me develop professionalism, organization, and the ability to work under pressure",
    ],
  },
  {
    title: "Public Relations Officer",
    company: "Work Study Grantee Association (WSGA), MSEUF",
    location: "Philippines",
    startDate: "2023-08",
    endDate: "2024-08",
    description: [
      "Acted as communication bridge between the office and student assistants for announcements, schedules, and task assignments",
      "Supported student assistants during events and department activities",
    ],
  },
  {
    title: "Treasurer",
    company: "MSEUF Wildcats Esports",
    location: "Philippines",
    startDate: "2024",
    endDate: "2025",
    description: [
      "Assisted in managing funds and documenting expenses for esports activities",
      "Helped in organizing tournaments/activities and coordinating participants",
      "Applied organizational and documentation skills learned from student assistant work",
    ],
  },
  {
    title: "Logistics & Technical Officer",
    company: "Philippine Society of Information Technology Students/MASTECH, MSEUF",
    location: "Philippines",
    startDate: "2024",
    endDate: "2025",
    description: [
      "Supported IT/CS/EMC events by handling technical setup (presentations, venue prep, devices)",
      "Coordinated with officers for room booking, materials, attendance, and food/snacks for events",
    ],
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: "React.js", category: "frontend", level: 90 },
  { name: "Next.js", category: "frontend", level: 85 },
  { name: "React Native", category: "frontend", level: 80 },
  { name: "TypeScript", category: "frontend", level: 88 },
  { name: "JavaScript", category: "frontend", level: 90 },
  { name: "HTML/CSS", category: "frontend", level: 95 },
  { name: "Tailwind CSS", category: "frontend", level: 92 },
  { name: "Vite", category: "frontend", level: 85 },
  // Backend
  { name: "Node.js", category: "backend", level: 85 },
  { name: "Express.js", category: "backend", level: 80 },
  { name: "Python", category: "backend", level: 75 },
  { name: "Django", category: "backend", level: 75 },
  { name: "FastAPI", category: "backend", level: 70 },
  { name: "Laravel", category: "backend", level: 70 },
  { name: "PHP", category: "backend", level: 70 },
  { name: "Java", category: "backend", level: 65 },
  { name: "MongoDB", category: "backend", level: 75 },
  { name: "PostgreSQL", category: "backend", level: 75 },
  { name: "MySQL", category: "backend", level: 75 },
  // Mobile
  { name: "React Native", category: "mobile", level: 80 },
  { name: "Kotlin", category: "mobile", level: 60 },
  { name: "Swift", category: "mobile", level: 60 },
  // Tools
  { name: "Git/Github", category: "tools", level: 90 },
  { name: "Firebase", category: "tools", level: 75 },
  { name: "Supabase", category: "tools", level: 75 },
  { name: "Oracle", category: "tools", level: 70 },
  { name: "Figma", category: "tools", level: 75 },
  { name: "PowerBI", category: "tools", level: 70 },
  { name: "Jira", category: "tools", level: 70 },
  { name: "Notion", category: "tools", level: 80 },
];

export const certifications: Certification[] = [
  {
    title: "Create the User Interface in Android Studio",
    issuer: "Meta",
    date: "2024",
    pdfPath: "/Coursera 1537SFJM2BUC.pdf",
    issuerColor: "blue",
  },
  {
    title: "Create the User Interface with SwiftUI",
    issuer: "Meta",
    date: "2024",
    pdfPath: "/Coursera CLJ8EU5UC61F.pdf",
    issuerColor: "blue",
  },
  {
    title: "React Native",
    issuer: "Meta",
    date: "2024",
    pdfPath: "/Coursera FBDEPVX2MJ9R.pdf",
    issuerColor: "blue",
  },
  {
    title: "Principles of UX/UI Design",
    issuer: "Meta",
    date: "2024",
    pdfPath: "/Coursera LCYSB9NH3TJ1.pdf",
    issuerColor: "blue",
  },
  {
    title: "System Administration and IT Infrastructure Services",
    issuer: "Google",
    date: "2024",
    pdfPath: "/Coursera MLDPHCMF2BHV.pdf",
    issuerColor: "green",
  },
  {
    title: "Job Ready: Employability Skills",
    issuer: "Wadhwani Foundation",
    date: "2024",
    pdfPath: "/Wadhwani Foundation Certificate - 68e7ca9cc43c7b4549a231ef.pdf",
    issuerColor: "orange",
  },
  {
    title: "Laravel From Scratch",
    issuer: "Packt",
    date: "2024",
    pdfPath: "/Coursera Q9MFKUS5GHAO.pdf",
    issuerColor: "purple",
  },
  {
    title: "Backend Development and API Creation",
    issuer: "Packt",
    date: "2024",
    pdfPath: "/Coursera UUDZJH18FGKZ.pdf",
    issuerColor: "purple",
  },
  {
    title: "Application Security for Developers and DevOps Professionals",
    issuer: "IBM",
    date: "2024",
    pdfPath: "/Coursera VQB4F1QVN45R.pdf",
    issuerColor: "cyan",
  },
  {
    title: "Building Web Applications in Django",
    issuer: "University of Michigan",
    date: "2024",
    pdfPath: "/Coursera WIERFAS75S9S.pdf",
    issuerColor: "yellow",
  },
  {
    title: "Switching, Routing, and Wireless Essentials",
    issuer: "Cisco",
    date: "2024",
    pdfPath: "/Coursera Q9MFKUS5GHAO.pdf",
    issuerColor: "red",
  },
  {
    title: "Introduction to Networks",
    issuer: "Cisco",
    date: "2024",
    pdfPath: "/Coursera UUDZJH18FGKZ.pdf",
    issuerColor: "red",
  },
  {
    title: "Oracle Database Foundations",
    issuer: "Oracle",
    date: "2024",
    pdfPath: "/Coursera VQB4F1QVN45R.pdf",
    issuerColor: "red",
  },
];

export const education: Education[] = [
  {
    degree: "BS Information Technology",
    institution: "Manuel S. Enverga University Foundation",
    location: "Philippines",
    startDate: "August 2022",
    endDate: "Present",
    description: "Focusing on web and mobile application development with modern technology stacks",
  },
  {
    degree: "STEM",
    institution: "Colegio de Santo de Cristo Burgos",
    location: "Philippines",
    startDate: "August 2020",
    endDate: "July 2022",
  },
  {
    degree: "Junior High School",
    institution: "Sariaya Institute",
    location: "Philippines",
    startDate: "June 2018",
    endDate: "April 2020",
  },
];

export const projects: Project[] = [
  // This will be populated from GitHub API
];
