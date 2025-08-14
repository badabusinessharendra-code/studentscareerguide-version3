export interface GovernmentExam {
  id: string;
  name: string;
  nameHindi: string;
  category: "central" | "state" | "psu" | "banking" | "defense" | "railway";
  level: "entry" | "mid" | "senior";
  posts: string[];
  eligibility: {
    education: string;
    ageMin: number;
    ageMax: number;
    subjects?: string[];
  };
  salary: {
    min: number;
    max: number;
    currency: string;
  };
  applicationFrequency: "yearly" | "twice-yearly" | "irregular";
  states?: string[]; // For state-specific exams
  examPattern: {
    stages: string[];
    language: string[];
  };
  preparation: {
    duration: string;
    subjects: string[];
    resources: string[];
  };
  successRate: number; // percentage
  vacancy: {
    typical: number;
    lastYear?: number;
  };
  workLocation: string;
  jobSecurity: number; // 1-10 scale
  workLifeBalance: number; // 1-10 scale
}

export const centralGovernmentExams: GovernmentExam[] = [
  {
    id: "upsc-cse",
    name: "UPSC Civil Services Examination",
    nameHindi: "संघ लोक सेवा आयोग सिविल सेवा परीक्षा",
    category: "central",
    level: "senior",
    posts: ["IAS", "IPS", "IFS", "IRS", "IRAS", "IPOS"],
    eligibility: {
      education: "Bachelor's degree in any field",
      ageMin: 21,
      ageMax: 32,
    },
    salary: {
      min: 800000,
      max: 2500000,
      currency: "INR"
    },
    applicationFrequency: "yearly",
    examPattern: {
      stages: ["Preliminary", "Main", "Interview"],
      language: ["Hindi", "English"]
    },
    preparation: {
      duration: "2-3 years",
      subjects: ["General Studies", "Optional Subject", "Essay", "Hindi/English"],
      resources: ["NCERT Books", "Newspaper Reading", "Coaching Institutes"]
    },
    successRate: 0.1,
    vacancy: {
      typical: 900,
      lastYear: 1105
    },
    workLocation: "All India posting",
    jobSecurity: 10,
    workLifeBalance: 6
  },
  {
    id: "ssc-cgl",
    name: "SSC Combined Graduate Level",
    nameHindi: "कर्मचारी चयन आयोग संयुक्त स्नातक स्तर परीक्षा",
    category: "central",
    level: "entry",
    posts: ["Inspector (CBE)", "Sub Inspector (CBI)", "Assistant Section Officer", "Income Tax Officer"],
    eligibility: {
      education: "Bachelor's degree",
      ageMin: 18,
      ageMax: 32,
    },
    salary: {
      min: 350000,
      max: 800000,
      currency: "INR"
    },
    applicationFrequency: "yearly",
    examPattern: {
      stages: ["Tier 1", "Tier 2", "Tier 3", "Document Verification"],
      language: ["Hindi", "English"]
    },
    preparation: {
      duration: "6-12 months",
      subjects: ["General Intelligence", "General Awareness", "Quantitative Aptitude", "English Comprehension"],
      resources: ["Arihant SSC Books", "Online Test Series", "Previous Year Papers"]
    },
    successRate: 0.5,
    vacancy: {
      typical: 8000,
      lastYear: 7735
    },
    workLocation: "Central Government offices across India",
    jobSecurity: 9,
    workLifeBalance: 8
  },
  {
    id: "rrb-ntpc",
    name: "Railway Recruitment Board NTPC",
    nameHindi: "रेलवे भर्ती बोर्ड गैर-तकनीकी लोकप्रिय श्रेणी",
    category: "railway",
    level: "entry",
    posts: ["Station Master", "Goods Guard", "SSE", "JE", "CMA"],
    eligibility: {
      education: "12th pass to Graduate",
      ageMin: 18,
      ageMax: 36,
    },
    salary: {
      min: 250000,
      max: 700000,
      currency: "INR"
    },
    applicationFrequency: "irregular",
    examPattern: {
      stages: ["CBT 1", "CBT 2", "TST/CA", "Document Verification", "Medical"],
      language: ["Hindi", "English", "Regional"]
    },
    preparation: {
      duration: "6-8 months",
      subjects: ["General Awareness", "Mathematics", "General Intelligence", "Reasoning"],
      resources: ["Kiran Railway Books", "Online Mock Tests", "RRB Previous Papers"]
    },
    successRate: 1.2,
    vacancy: {
      typical: 35000,
      lastYear: 35208
    },
    workLocation: "Railway stations and offices across India",
    jobSecurity: 9,
    workLifeBalance: 7
  },
  {
    id: "ibps-po",
    name: "IBPS Probationary Officer",
    nameHindi: "बैंकिंग कार्मिक चयन संस्थान प्रोबेशनरी ऑफिसर",
    category: "banking",
    level: "entry",
    posts: ["Probationary Officer in Public Sector Banks"],
    eligibility: {
      education: "Bachelor's degree with 60% marks",
      ageMin: 20,
      ageMax: 30,
    },
    salary: {
      min: 450000,
      max: 900000,
      currency: "INR"
    },
    applicationFrequency: "yearly",
    examPattern: {
      stages: ["Preliminary", "Main", "Interview"],
      language: ["Hindi", "English"]
    },
    preparation: {
      duration: "8-12 months",
      subjects: ["Quantitative Aptitude", "Reasoning", "English", "General Awareness", "Computer Knowledge"],
      resources: ["Banking Exam Books", "Current Affairs", "Online Test Series"]
    },
    successRate: 2.5,
    vacancy: {
      typical: 4000,
      lastYear: 4135
    },
    workLocation: "Bank branches across India",
    jobSecurity: 8,
    workLifeBalance: 7
  },
  {
    id: "capf-ac",
    name: "CAPF Assistant Commandant",
    nameHindi: "केंद्रीय सशस्त्र पुलिस बल सहायक कमांडेंट",
    category: "defense",
    level: "entry",
    posts: ["Assistant Commandant in BSF", "CRPF", "CISF", "ITBP", "SSB"],
    eligibility: {
      education: "Bachelor's degree",
      ageMin: 20,
      ageMax: 25,
    },
    salary: {
      min: 600000,
      max: 1200000,
      currency: "INR"
    },
    applicationFrequency: "yearly",
    examPattern: {
      stages: ["Written Exam", "Physical Standards Test", "Physical Efficiency Test", "Medical", "Interview"],
      language: ["Hindi", "English"]
    },
    preparation: {
      duration: "8-10 months",
      subjects: ["General Ability", "General Knowledge", "Essay", "Comprehension"],
      resources: ["Defense Exam Books", "Physical Training", "Current Affairs"]
    },
    successRate: 1.8,
    vacancy: {
      typical: 300,
      lastYear: 323
    },
    workLocation: "Border areas and security installations",
    jobSecurity: 9,
    workLifeBalance: 5
  }
];

export const stateGovernmentExams: { [state: string]: GovernmentExam[] } = {
  "Uttar Pradesh": [
    {
      id: "uppsc-pcs",
      name: "UPPSC Provincial Civil Services",
      nameHindi: "उत्तर प्रदेश लोक सेवा आयोग प्रांतीय सिविल सेवा",
      category: "state",
      level: "senior",
      posts: ["SDM", "DSP", "Block Development Officer", "Tehsildar"],
      eligibility: {
        education: "Bachelor's degree",
        ageMin: 21,
        ageMax: 40,
      },
      salary: {
        min: 400000,
        max: 1200000,
        currency: "INR"
      },
      applicationFrequency: "yearly",
      states: ["Uttar Pradesh"],
      examPattern: {
        stages: ["Preliminary", "Main", "Interview"],
        language: ["Hindi", "English"]
      },
      preparation: {
        duration: "12-18 months",
        subjects: ["General Studies", "General Hindi", "Essay", "General Aptitude"],
        resources: ["State-specific books", "UP Current Affairs", "Hindi Literature"]
      },
      successRate: 0.8,
      vacancy: {
        typical: 400,
        lastYear: 416
      },
      workLocation: "Districts across Uttar Pradesh",
      jobSecurity: 9,
      workLifeBalance: 6
    },
    {
      id: "upsi",
      name: "UP Police Sub Inspector",
      nameHindi: "उत्तर प्रदेश पुलिस उप निरीक्षक",
      category: "state",
      level: "entry",
      posts: ["Sub Inspector", "Platoon Commander"],
      eligibility: {
        education: "Bachelor's degree",
        ageMin: 21,
        ageMax: 28,
      },
      salary: {
        min: 300000,
        max: 600000,
        currency: "INR"
      },
      applicationFrequency: "irregular",
      states: ["Uttar Pradesh"],
      examPattern: {
        stages: ["Written Exam", "Document Verification", "Physical Standards Test", "Medical"],
        language: ["Hindi", "English"]
      },
      preparation: {
        duration: "6-8 months",
        subjects: ["General Hindi", "Law & Constitution", "Numerical & Mental Ability", "Mental Aptitude", "IQ Test"],
        resources: ["UP Police SI Books", "Hindi Grammar", "UP GK Books"]
      },
      successRate: 2.1,
      vacancy: {
        typical: 9500,
        lastYear: 9534
      },
      workLocation: "Police stations across Uttar Pradesh",
      jobSecurity: 8,
      workLifeBalance: 5
    }
  ],
  "Maharashtra": [
    {
      id: "mpsc-psi",
      name: "MPSC Police Sub Inspector",
      nameHindi: "महाराष्ट्र लोक सेवा आयोग पुलिस उप निरीक्षक",
      category: "state",
      level: "entry",
      posts: ["Police Sub Inspector", "Assistant Police Inspector"],
      eligibility: {
        education: "Bachelor's degree",
        ageMin: 20,
        ageMax: 30,
      },
      salary: {
        min: 350000,
        max: 650000,
        currency: "INR"
      },
      applicationFrequency: "irregular",
      states: ["Maharashtra"],
      examPattern: {
        stages: ["Preliminary", "Main", "Physical Test", "Medical", "Interview"],
        language: ["Marathi", "Hindi", "English"]
      },
      preparation: {
        duration: "8-10 months",
        subjects: ["General Studies", "Marathi", "English", "Aptitude & Reasoning"],
        resources: ["Maharashtra GK", "Marathi Grammar", "Police Manual"]
      },
      successRate: 1.5,
      vacancy: {
        typical: 800,
        lastYear: 845
      },
      workLocation: "Police stations across Maharashtra",
      jobSecurity: 8,
      workLifeBalance: 5
    }
  ],
  "Bihar": [
    {
      id: "bpscc-si",
      name: "Bihar Police Sub Inspector",
      nameHindi: "बिहार पुलिस उप निरीक्षक",
      category: "state",
      level: "entry",
      posts: ["Sub Inspector"],
      eligibility: {
        education: "Bachelor's degree",
        ageMin: 20,
        ageMax: 25,
      },
      salary: {
        min: 280000,
        max: 550000,
        currency: "INR"
      },
      applicationFrequency: "irregular",
      states: ["Bihar"],
      examPattern: {
        stages: ["Preliminary", "Main", "Physical Efficiency Test", "Medical"],
        language: ["Hindi", "English"]
      },
      preparation: {
        duration: "6-8 months",
        subjects: ["General Knowledge", "General Science", "Mathematics", "Mental Ability Test", "Hindi", "English"],
        resources: ["Bihar GK Books", "Hindi Literature", "Current Affairs"]
      },
      successRate: 1.2,
      vacancy: {
        typical: 2200,
        lastYear: 2213
      },
      workLocation: "Police stations across Bihar",
      jobSecurity: 8,
      workLifeBalance: 5
    }
  ]
};

export const allGovernmentExams = [
  ...centralGovernmentExams,
  ...Object.values(stateGovernmentExams).flat()
];

export const getExamsByState = (state: string): GovernmentExam[] => {
  const stateExams = stateGovernmentExams[state] || [];
  return [...centralGovernmentExams, ...stateExams];
};

export const getExamsByCategory = (category: string): GovernmentExam[] => {
  return allGovernmentExams.filter(exam => exam.category === category);
};

export const examCategories = [
  { id: "central", name: "Central Government", nameHindi: "केंद्र सरकार" },
  { id: "state", name: "State Government", nameHindi: "राज्य सरकार" },
  { id: "banking", name: "Banking", nameHindi: "बैंकिंग" },
  { id: "railway", name: "Railway", nameHindi: "रेलवे" },
  { id: "defense", name: "Defense", nameHindi: "रक्षा" },
  { id: "psu", name: "Public Sector Units", nameHindi: "सार्वजनिक क्षेत्र की इकाइयां" }
];

export const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", 
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", 
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", 
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Delhi", "Jammu and Kashmir", "Ladakh", "Puducherry", "Chandigarh", 
  "Andaman and Nicobar Islands", "Dadra and Nagar Haveli and Daman and Diu", "Lakshadweep"
];