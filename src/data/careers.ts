import { CareerField } from "@/types/career";

export const careers: CareerField[] = [
  {
    id: "software-developer",
    title: "Software Developer",
    description: "Design, develop, and maintain software applications and systems using various programming languages and technologies.",
    averageSalary: {
      min: 450000,
      max: 1500000,
      currency: "INR",
      region: "India Average"
    },
    jobGrowth: {
      rate: 25,
      outlook: "Excellent"
    },
    education: {
      level: "B.Tech/B.E. in Computer Science or Bootcamp",
      duration: "4 years or 6-12 months",
      requirements: ["JEE Main/Advanced for IITs/NITs", "B.Tech/B.E. in CSE/IT", "Coding bootcamps", "Self-taught with strong portfolio"]
    },
    keySkills: ["Programming Languages (Java, Python, JavaScript)", "Problem Solving", "Git & Version Control", "Database Management", "Software Architecture"],
    learningResources: [
      { title: "Coding Ninjas", type: "Course", url: "codingninjas.com", free: false },
      { title: "GeeksforGeeks", type: "Course", url: "geeksforgeeks.org", free: true },
      { title: "Apna College", type: "YouTube", free: true },
      { title: "NPTEL Programming Courses", type: "Course", free: true }
    ],
    careerPath: [
      { level: "Entry", title: "Trainee Software Engineer", description: "Learn programming fundamentals and work on small modules", timeframe: "0-2 years" },
      { level: "Mid", title: "Software Developer", description: "Build complex applications and handle client requirements", timeframe: "2-5 years" },
      { level: "Senior", title: "Senior Software Engineer", description: "Lead teams and mentor junior developers", timeframe: "5-8 years" },
      { level: "Expert", title: "Technical Architect", description: "Design system architecture and make technical decisions", timeframe: "8+ years" }
    ],
    workEnvironment: "IT parks in Bangalore, Hyderabad, Pune, Chennai, or remote work from home",
    personalityMatch: ["Analytical", "Problem-solver", "Detail-oriented", "Logical"],
    difficulty: 3,
    satisfaction: 4.2,
    aiImpactScore: 7, // High AI resistance due to creative problem-solving
    futureOutlook: "Thriving",
    difficultyIndia: 3
  },
  {
    id: "graphic-designer",
    title: "Graphic Designer",
    description: "Create visual concepts and designs for print, digital media, branding, and marketing materials.",
    averageSalary: {
      min: 250000,
      max: 800000,
      currency: "INR", 
      region: "India Average"
    },
    jobGrowth: {
      rate: 8,
      outlook: "Good"
    },
    education: {
      level: "Bachelor's in Fine Arts/Design or Diploma",
      duration: "3-4 years",
      requirements: ["BFA in Graphic Design", "Diploma in Multimedia", "Portfolio through NIFT/NID entrance", "Strong creative portfolio"]
    },
    keySkills: ["Adobe Creative Suite", "CorelDRAW", "Typography", "Brand Design", "Digital Illustration"],
    learningResources: [
      { title: "BYJU'S Design Course", type: "Course", free: false },
      { title: "DesignEpicenter", type: "YouTube", free: true },
      { title: "Arena Animation", type: "Course", free: false },
      { title: "Adobe India Certified", type: "Certification", free: false }
    ],
    careerPath: [
      { level: "Entry", title: "Junior Graphic Designer", description: "Learn design software and assist senior designers", timeframe: "0-2 years" },
      { level: "Mid", title: "Graphic Designer", description: "Handle independent projects and client communication", timeframe: "2-5 years" },
      { level: "Senior", title: "Senior Graphic Designer", description: "Lead design teams and manage multiple projects", timeframe: "5-8 years" },
      { level: "Expert", title: "Creative Head", description: "Strategic creative decisions and team leadership", timeframe: "8+ years" }
    ],
    workEnvironment: "Advertising agencies in Mumbai, creative studios, or freelance work from home",
    personalityMatch: ["Creative", "Visual thinker", "Detail-oriented", "Artistic"],
    difficulty: 2,
    satisfaction: 4.0,
    aiImpactScore: 6, // AI can help but human creativity is still essential
    futureOutlook: "Stable",
    difficultyIndia: 2
  },
  {
    id: "data-analyst",
    title: "Data Analyst",
    description: "Collect, process, and analyze data to help organizations make informed business decisions.",
    averageSalary: {
      min: 350000,
      max: 1200000,
      currency: "INR",
      region: "India Average"
    },
    jobGrowth: {
      rate: 35,
      outlook: "Excellent"
    },
    education: {
      level: "Bachelor's in Statistics/Math/Engineering",
      duration: "3-4 years",
      requirements: ["B.Tech/B.Sc. in Statistics/Math", "Computer Science Engineering", "Business Analytics courses", "Data Science certifications"]
    },
    keySkills: ["SQL", "Python/R", "Power BI", "Advanced Excel", "Machine Learning Basics"],
    learningResources: [
      { title: "Analytics Vidhya", type: "Course", free: true },
      { title: "Krish Naik", type: "YouTube", free: true },
      { title: "UpGrad Data Science", type: "Course", free: false },
      { title: "Microsoft Power BI Certification", type: "Certification", free: false }
    ],
    careerPath: [
      { level: "Entry", title: "Data Analyst Trainee", description: "Learn SQL, Excel, and basic data visualization", timeframe: "0-2 years" },
      { level: "Mid", title: "Data Analyst", description: "Advanced analytics and business intelligence", timeframe: "2-5 years" },
      { level: "Senior", title: "Senior Data Analyst", description: "Lead analytics projects and mentor juniors", timeframe: "5-8 years" },
      { level: "Expert", title: "Analytics Manager", description: "Strategic data decisions and team leadership", timeframe: "8+ years" }
    ],
    workEnvironment: "Corporate offices in metros, IT companies, banks, or remote analytics work",
    personalityMatch: ["Analytical", "Curious", "Detail-oriented", "Problem-solver"],
    difficulty: 3,
    satisfaction: 4.1,
    aiImpactScore: 5, // AI is transforming data analysis but human insight remains crucial
    futureOutlook: "Thriving",
    difficultyIndia: 3
  },
  {
    id: "doctor",
    title: "Doctor (MBBS)",
    description: "Diagnose, treat, and prevent illnesses while providing comprehensive healthcare to patients.",
    averageSalary: {
      min: 600000,
      max: 2000000,
      currency: "INR",
      region: "India Average"
    },
    jobGrowth: {
      rate: 10,
      outlook: "Good"
    },
    education: {
      level: "MBBS + MD/MS Specialization",
      duration: "5.5 + 3 years",
      requirements: ["NEET qualification", "MBBS (5.5 years)", "Internship (1 year)", "MD/MS for specialization (3 years)"]
    },
    keySkills: ["Medical Knowledge", "Patient Care", "Hindi/Regional Languages", "Emergency Response", "Diagnostic Skills"],
    learningResources: [
      { title: "Marrow Medical", type: "Course", free: false },
      { title: "Dr. Najeeb Lectures", type: "YouTube", free: false },
      { title: "PrepLadder", type: "Course", free: false },
      { title: "AIIMS Delhi Online Resources", type: "Course", free: true }
    ],
    careerPath: [
      { level: "Entry", title: "NEET Aspirant", description: "Prepare for NEET and complete 12th with PCB", timeframe: "0-2 years" },
      { level: "Mid", title: "MBBS Student", description: "Complete 5.5 years MBBS and internship", timeframe: "2-8 years" },
      { level: "Senior", title: "Junior Resident", description: "Specialization in chosen medical field", timeframe: "8-11 years" },
      { level: "Expert", title: "Senior Consultant", description: "Independent practice or hospital leadership", timeframe: "11+ years" }
    ],
    workEnvironment: "Government hospitals, private clinics, AIIMS, PGI or own practice",
    personalityMatch: ["Empathetic", "Detail-oriented", "Problem-solver", "Helping others"],
    difficulty: 5,
    satisfaction: 4.5,
    aiImpactScore: 9, // AI assists but human touch in healthcare is irreplaceable
    futureOutlook: "Thriving",
    difficultyIndia: 5
  },
  {
    id: "teacher",
    title: "Teacher",
    description: "Educate and inspire students while developing curriculum and fostering learning environments.",
    averageSalary: {
      min: 240000,
      max: 800000,
      currency: "INR",
      region: "India Average"
    },
    jobGrowth: {
      rate: 6,
      outlook: "Average"
    },
    education: {
      level: "Bachelor's + B.Ed/D.Ed + TET",
      duration: "4-5 years",
      requirements: ["Bachelor's degree in subject", "B.Ed (2 years)", "TET/CTET qualification", "State teaching eligibility tests"]
    },
    keySkills: ["Subject Knowledge", "Hindi/English/Regional Languages", "Classroom Management", "Digital Teaching Tools", "Student Psychology"],
    learningResources: [
      { title: "Unacademy Teaching", type: "Course", free: false },
      { title: "Study IQ Education", type: "YouTube", free: true },
      { title: "NCERT Teacher Training", type: "Course", free: true },
      { title: "Microsoft Educator Certification", type: "Certification", free: true }
    ],
    careerPath: [
      { level: "Entry", title: "TGT (Trained Graduate Teacher)", description: "Complete B.Ed and qualify TET for Classes 6-10", timeframe: "0-4 years" },
      { level: "Mid", title: "PGT (Post Graduate Teacher)", description: "Master's degree for Classes 11-12 teaching", timeframe: "4-8 years" },
      { level: "Senior", title: "Head Teacher/Vice Principal", description: "Administrative roles and curriculum leadership", timeframe: "8-15 years" },
      { level: "Expert", title: "Principal/Education Officer", description: "School administration and policy implementation", timeframe: "15+ years" }
    ],
    workEnvironment: "Government schools, private schools, Kendriya Vidyalayas, or coaching centers",
    personalityMatch: ["Patient", "Communicative", "Helpful", "Organized"],
    difficulty: 2,
    satisfaction: 4.3,
    aiImpactScore: 8, // AI can support teaching but human connection is vital
    futureOutlook: "Stable",
    difficultyIndia: 2
  },
  {
    id: "digital-marketer",
    title: "Digital Marketer",
    description: "Develop and execute online marketing strategies to promote brands and drive business growth.",
    averageSalary: {
      min: 300000,
      max: 1000000,
      currency: "INR",
      region: "India Average"
    },
    jobGrowth: {
      rate: 12,
      outlook: "Good"
    },
    education: {
      level: "Bachelor's in Marketing/Business or Certificates",
      duration: "3-4 years or 6 months",
      requirements: ["BBA/MBA in Marketing", "Digital Marketing certificates", "Google Ads/Analytics certification", "Portfolio of campaigns"]
    },
    keySkills: ["SEO/SEM", "Social Media Marketing", "Content Creation in Hindi/English", "Google Analytics", "Performance Marketing"],
    learningResources: [
      { title: "Digital Deepak", type: "Course", free: false },
      { title: "Simplilearn Digital Marketing", type: "Course", free: false },
      { title: "WsCube Tech", type: "YouTube", free: true },
      { title: "Google Skillshop India", type: "Certification", free: true }
    ],
    careerPath: [
      { level: "Entry", title: "Digital Marketing Executive", description: "Learn SEO, social media, and basic campaign management", timeframe: "0-2 years" },
      { level: "Mid", title: "Digital Marketing Specialist", description: "Handle multiple clients and campaign optimization", timeframe: "2-5 years" },
      { level: "Senior", title: "Marketing Manager", description: "Team leadership and strategic campaign planning", timeframe: "5-8 years" },
      { level: "Expert", title: "VP Marketing", description: "Overall marketing strategy and business growth", timeframe: "8+ years" }
    ],
    workEnvironment: "Digital agencies in Mumbai/Delhi, startups in Bangalore, or freelance from home",
    personalityMatch: ["Creative", "Analytical", "Communicative", "Tech-savvy"],
    difficulty: 2,
    satisfaction: 3.9,
    aiImpactScore: 4, // AI is heavily impacting digital marketing
    futureOutlook: "Stable",
    difficultyIndia: 2
  },
  {
    id: "civil-services",
    title: "Civil Services (IAS/IPS)",
    description: "Serve the nation through administrative and policy roles in government, implementing programs for public welfare.",
    averageSalary: {
      min: 800000,
      max: 2500000,
      currency: "INR",
      region: "India (Government Pay Scale)"
    },
    jobGrowth: {
      rate: 3,
      outlook: "Average"
    },
    education: {
      level: "Bachelor's Degree + UPSC CSE",
      duration: "3-4 years + 2-3 years preparation",
      requirements: ["Bachelor's degree in any field", "UPSC Civil Services Examination", "Age limit: 21-32 years", "Physical and medical tests"]
    },
    keySkills: ["General Knowledge", "Essay Writing", "Public Administration", "Leadership", "Communication in Hindi/English"],
    learningResources: [
      { title: "Unacademy UPSC", type: "Course", free: false },
      { title: "Study IQ IAS", type: "YouTube", free: true },
      { title: "Vision IAS", type: "Course", free: false },
      { title: "NCERT Books", type: "Book", free: true }
    ],
    careerPath: [
      { level: "Entry", title: "UPSC Aspirant", description: "Prepare for UPSC CSE while completing graduation", timeframe: "0-3 years" },
      { level: "Mid", title: "Probationary Officer", description: "Training at LBSNAA and field postings", timeframe: "3-5 years" },
      { level: "Senior", title: "District Magistrate/SP", description: "Administrative control of districts", timeframe: "8-15 years" },
      { level: "Expert", title: "Secretary/DGP", description: "Policy making at state and central level", timeframe: "20+ years" }
    ],
    workEnvironment: "Government offices, districts, secretariats, and field locations across India",
    personalityMatch: ["Leadership", "Public service oriented", "Patient", "Ethical"],
    difficulty: 5,
    satisfaction: 4.7,
    aiImpactScore: 10, // Human judgment and leadership cannot be replaced by AI
    futureOutlook: "Stable",
    difficultyIndia: 5
  },
  {
    id: "chartered-accountant",
    title: "Chartered Accountant (CA)",
    description: "Provide financial expertise including auditing, taxation, financial planning, and business advisory services.",
    averageSalary: {
      min: 600000,
      max: 2000000,
      currency: "INR",
      region: "India Average"
    },
    jobGrowth: {
      rate: 7,
      outlook: "Good"
    },
    education: {
      level: "CA Foundation + Intermediate + Final",
      duration: "3-5 years",
      requirements: ["12th pass for CA Foundation", "CA Intermediate", "3 years Articleship", "CA Final examination"]
    },
    keySkills: ["Accounting", "Taxation (GST, Income Tax)", "Financial Analysis", "Audit", "Business Law"],
    learningResources: [
      { title: "ICAI Study Materials", type: "Course", free: true },
      { title: "Unacademy CA", type: "Course", free: false },
      { title: "CA Praveen Sharma", type: "YouTube", free: true },
      { title: "Taxguru.in", type: "Course", free: true }
    ],
    careerPath: [
      { level: "Entry", title: "CA Foundation", description: "Clear CA Foundation after 12th", timeframe: "0-1 year" },
      { level: "Mid", title: "Article Assistant", description: "Complete articleship while studying Intermediate and Final", timeframe: "1-4 years" },
      { level: "Senior", title: "CA Professional", description: "Independent practice or senior roles in firms", timeframe: "4-8 years" },
      { level: "Expert", title: "Partner/CFO", description: "Partnership in CA firm or C-suite roles", timeframe: "8+ years" }
    ],
    workEnvironment: "CA firms, corporate offices, banks, or independent practice from office",
    personalityMatch: ["Detail-oriented", "Analytical", "Trustworthy", "Mathematical"],
    difficulty: 4,
    satisfaction: 4.2,
    aiImpactScore: 6, // AI automates some tasks but professional judgment needed
    futureOutlook: "Stable",
    difficultyIndia: 4
  },
  {
    id: "content-creator",
    title: "Content Creator/YouTuber",
    description: "Create engaging digital content across platforms like YouTube, Instagram, and other social media to build audiences and monetize content.",
    averageSalary: {
      min: 200000,
      max: 5000000,
      currency: "INR",
      region: "India (Highly Variable)"
    },
    jobGrowth: {
      rate: 20,
      outlook: "Excellent"
    },
    education: {
      level: "No formal requirement",
      duration: "Self-paced learning",
      requirements: ["Creative skills", "Technical knowledge of content creation", "Understanding of social media algorithms", "Consistency and patience"]
    },
    keySkills: ["Video Editing", "Content Writing", "Social Media Management", "SEO", "Audience Engagement"],
    learningResources: [
      { title: "Think Media", type: "YouTube", free: true },
      { title: "Filmora Tutorials", type: "Course", free: true },
      { title: "Harsh Agrawal (ShoutMeLoud)", type: "YouTube", free: true },
      { title: "YouTube Creator Academy", type: "Course", free: true }
    ],
    careerPath: [
      { level: "Entry", title: "Beginner Creator", description: "Learn content creation and build initial audience", timeframe: "0-1 year" },
      { level: "Mid", title: "Growing Creator", description: "Consistent content and growing subscriber base", timeframe: "1-3 years" },
      { level: "Senior", title: "Established Creator", description: "Monetization and brand collaborations", timeframe: "3-5 years" },
      { level: "Expert", title: "Influencer/Media Company", description: "Multiple revenue streams and team management", timeframe: "5+ years" }
    ],
    workEnvironment: "Home studio, outdoor locations, or co-working spaces with flexible schedule",
    personalityMatch: ["Creative", "Communicative", "Self-motivated", "Tech-savvy"],
    difficulty: 3,
    satisfaction: 4.1,
    aiImpactScore: 5, // AI tools help but personal branding and creativity remain human
    futureOutlook: "Thriving",
    difficultyIndia: 3
  }
];

export function getCareerById(id: string): CareerField | undefined {
  return careers.find(career => career.id === id);
}

export function getAllCareers(): CareerField[] {
  return careers;
}