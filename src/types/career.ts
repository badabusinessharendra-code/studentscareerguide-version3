export interface StudentProfile {
  class: "8th" | "9th" | "10th" | "11th" | "12th" | "college" | "graduate";
  stream?: "science" | "commerce" | "arts";
  board?: "cbse" | "icse" | "state";
  city: "tier1" | "tier2" | "tier3";
  state?: string;
  languages: string[];
  examPreparation?: string[];
  parentExpectations?: string;
  careerConfusion?: string;
}

export interface CareerField {
  id: string;
  title: string;
  description: string;
  averageSalary: {
    min: number;
    max: number;
    currency: string;
    region: string;
  };
  jobGrowth: {
    rate: number; // percentage
    outlook: "Excellent" | "Good" | "Average" | "Below Average";
  };
  education: {
    level: string;
    duration: string;
    requirements: string[];
  };
  keySkills: string[];
  learningResources: {
    title: string;
    type: "Course" | "YouTube" | "Certification" | "Book";
    url?: string;
    free: boolean;
  }[];
  careerPath: {
    level: string;
    title: string;
    description: string;
    timeframe: string;
  }[];
  workEnvironment: string;
  personalityMatch: string[];
  difficulty: 1 | 2 | 3 | 4 | 5; // 1 = very easy, 5 = very challenging
  satisfaction: number; // 1-5 scale
  aiImpactScore: number; // 1-10 scale (10 = most AI-resistant)
  futureOutlook: "Thriving" | "Stable" | "Declining" | "Emerging";
  difficultyIndia: 1 | 2 | 3 | 4 | 5; // India-specific difficulty
}

export interface TestResponse {
  questionId: string;
  answer: string | number;
}

export interface CareerRecommendation {
  career: CareerField;
  matchScore: number;
  reasons: string[];
}