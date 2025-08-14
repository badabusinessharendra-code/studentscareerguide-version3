import { TestResponse, CareerRecommendation, StudentProfile } from "@/types/career";
import { careers } from "@/data/careers";

export function analyzeCareerMatches(responses: TestResponse[], studentProfile?: StudentProfile | null): CareerRecommendation[] {
  const careerScores = new Map<string, { score: number; reasons: string[] }>();

  // Initialize all careers with base score
  careers.forEach(career => {
    careerScores.set(career.id, { score: 0, reasons: [] });
  });

  responses.forEach(response => {
    const { questionId, answer } = response;

    switch (questionId) {
      case "work_environment":
        if (answer === "Working with people and teams") {
          addScore("teacher", 15, "You enjoy working with people", careerScores);
          addScore("doctor", 12, "Healthcare involves patient interaction", careerScores);
          addScore("digital-marketer", 8, "Marketing often involves team collaboration", careerScores);
        } else if (answer === "Working with data and analysis") {
          addScore("data-analyst", 20, "Perfect match for data-focused work", careerScores);
          addScore("software-developer", 10, "Programming involves logical analysis", careerScores);
        } else if (answer === "Working with hands-on tasks and things") {
          addScore("graphic-designer", 12, "Design involves hands-on creative work", careerScores);
          addScore("software-developer", 8, "Coding is hands-on problem solving", careerScores);
        } else if (answer === "Working independently and creatively") {
          addScore("graphic-designer", 18, "Design work often involves independent creativity", careerScores);
          addScore("software-developer", 10, "Programming can be independent and creative", careerScores);
        }
        break;

      case "work_style":
        if (answer === "Creative and artistic work") {
          addScore("graphic-designer", 20, "Design is inherently creative and artistic", careerScores);
          addScore("digital-marketer", 12, "Marketing requires creative thinking", careerScores);
        } else if (answer === "Analytical and problem-solving work") {
          addScore("software-developer", 18, "Programming is pure problem-solving", careerScores);
          addScore("data-analyst", 20, "Data analysis is analytical work", careerScores);
          addScore("doctor", 10, "Medical diagnosis requires analytical thinking", careerScores);
        } else if (answer === "Structured and organized work") {
          addScore("teacher", 15, "Teaching requires structured curriculum", careerScores);
          addScore("doctor", 12, "Medical practice follows structured protocols", careerScores);
        } else if (answer === "Flexible and varied work") {
          addScore("digital-marketer", 15, "Marketing involves varied campaigns and strategies", careerScores);
          addScore("graphic-designer", 12, "Design projects are varied and flexible", careerScores);
        }
        break;

      case "technology_interest":
        const techScore = Number(answer) * 4;
        addScore("software-developer", techScore, `Strong interest in technology (${answer}/5)`, careerScores);
        addScore("data-analyst", techScore * 0.8, `Technology skills valuable for data work`, careerScores);
        addScore("digital-marketer", techScore * 0.6, `Digital marketing uses technology tools`, careerScores);
        break;

      case "arts_interest":
        const artsScore = Number(answer) * 4;
        addScore("graphic-designer", artsScore, `Strong interest in arts (${answer}/5)`, careerScores);
        addScore("digital-marketer", artsScore * 0.5, `Marketing benefits from creative skills`, careerScores);
        break;

      case "business_interest":
        const businessScore = Number(answer) * 4;
        addScore("digital-marketer", businessScore, `Strong business interest (${answer}/5)`, careerScores);
        addScore("data-analyst", businessScore * 0.7, `Data analysis supports business decisions`, careerScores);
        break;

      case "healthcare_interest":
        const healthScore = Number(answer) * 4;
        addScore("doctor", healthScore, `Strong healthcare interest (${answer}/5)`, careerScores);
        break;

      case "public_service_interest":
        const publicServiceScore = Number(answer) * 4;
        addScore("civil-services", publicServiceScore, `Strong public service interest (${answer}/5)`, careerScores);
        addScore("teacher", publicServiceScore * 0.6, `Public service mindset helpful for teaching`, careerScores);
        break;

      // Government-specific question handling
      case "govt_sector_preference":
        if (answer === "Administrative Services (IAS, State PCS)") {
          addScore("civil-services", 20, "Interested in administrative services", careerScores);
        } else if (answer === "Police & Security (IPS, State Police)") {
          addScore("civil-services", 15, "Interested in police services", careerScores);
        } else if (answer === "Railways (Technical & Non-technical)") {
          addScore("civil-services", 10, "Interested in railway services", careerScores);
        } else if (answer === "Banking & Financial Services") {
          addScore("chartered-accountant", 12, "Banking interest aligns with CA skills", careerScores);
        } else if (answer === "Defense Forces") {
          addScore("civil-services", 8, "Defense services require similar preparation", careerScores);
        } else if (answer === "Teaching & Education") {
          addScore("teacher", 18, "Direct interest in teaching services", careerScores);
        }
        break;

      case "govt_exam_willingness":
        const examWillingness = Number(answer) * 3;
        addScore("civil-services", examWillingness, `Willingness to prepare for competitive exams (${answer}/5)`, careerScores);
        addScore("teacher", examWillingness * 0.7, `Government teaching jobs require competitive exams`, careerScores);
        break;

      case "govt_posting_preference":
        if (answer === "All India posting (willing to work anywhere)") {
          addScore("civil-services", 15, "Willing for all-India posting suitable for IAS/IPS", careerScores);
        } else if (answer === "State-level posting (within my state)") {
          addScore("civil-services", 10, "State-level posting preference", careerScores);
          addScore("teacher", 8, "State government teaching jobs", careerScores);
        } else if (answer === "District-level posting (local area)") {
          addScore("teacher", 12, "Local area preference suits teaching", careerScores);
          addScore("civil-services", 8, "District-level administrative roles", careerScores);
        }
        break;

      case "govt_work_nature":
        if (answer === "Field work and public interaction") {
          addScore("civil-services", 18, "Field work aligns with administrative services", careerScores);
          addScore("teacher", 12, "Teaching involves public interaction", careerScores);
        } else if (answer === "Office work and policy implementation") {
          addScore("civil-services", 15, "Policy work is core of administrative services", careerScores);
        } else if (answer === "Technical work and maintenance") {
          addScore("software-developer", 10, "Technical skills valuable in government IT", careerScores);
        } else if (answer === "Investigation and law enforcement") {
          addScore("civil-services", 12, "Law enforcement aspect of IPS", careerScores);
        }
        break;

      case "job_security_preference":
        if (answer === "Job security and stability (Government jobs)") {
          addScore("civil-services", 15, "Preference for government job security", careerScores);
          addScore("teacher", 12, "Teaching offers good job security", careerScores);
          addScore("doctor", 8, "Medical profession offers stability", careerScores);
        } else if (answer === "High growth potential and entrepreneurship") {
          addScore("software-developer", 15, "Tech offers high growth potential", careerScores);
          addScore("digital-marketer", 12, "Marketing has entrepreneurial opportunities", careerScores);
          addScore("content-creator", 10, "Content creation has growth potential", careerScores);
        } else if (answer === "Work-life balance and family time") {
          addScore("teacher", 15, "Teaching offers good work-life balance", careerScores);
          addScore("graphic-designer", 10, "Design work can be flexible", careerScores);
        } else if (answer === "High salary and financial rewards") {
          addScore("software-developer", 18, "Tech offers high salaries", careerScores);
          addScore("doctor", 15, "Medical profession is well-paid", careerScores);
          addScore("chartered-accountant", 12, "CA profession offers good financial rewards", careerScores);
        }
        break;

      case "relocation_willingness":
        if (answer === "Yes, anywhere in India or abroad") {
          addScore("software-developer", 12, "Willing to relocate for tech opportunities", careerScores);
          addScore("data-analyst", 8, "Analytics roles available in metros", careerScores);
        } else if (answer === "No, I want to work from my hometown") {
          addScore("teacher", 12, "Teaching available everywhere", careerScores);
          addScore("content-creator", 10, "Content creation can be done from anywhere", careerScores);
          addScore("digital-marketer", 8, "Remote marketing opportunities", careerScores);
        }
        break;

      case "english_comfort":
        const englishScore = Number(answer) * 3;
        addScore("software-developer", englishScore, `English comfort helps in tech (${answer}/5)`, careerScores);
        addScore("digital-marketer", englishScore * 0.8, `English useful for marketing`, careerScores);
        addScore("data-analyst", englishScore * 0.6, `English helpful for data roles`, careerScores);
        break;

      case "family_pressure":
        const pressureScore = Number(answer);
        if (pressureScore >= 4) {
          addScore("doctor", 10, "Family expectations often favor medical career", careerScores);
          addScore("software-developer", 8, "Engineering/tech is family-approved", careerScores);
          addScore("civil-services", 8, "IAS/IPS brings family pride", careerScores);
        }
        break;
    }
  });

  // Apply student profile adjustments if available
  if (studentProfile) {
    applyProfileAdjustments(careerScores, studentProfile);
  }

  // Convert to recommendations and sort by score
  const recommendations: CareerRecommendation[] = [];
  
  careerScores.forEach((scoreData, careerId) => {
    const career = careers.find(c => c.id === careerId);
    if (career && scoreData.score > 0) {
      recommendations.push({
        career,
        matchScore: Math.min(Math.round(scoreData.score), 100),
        reasons: scoreData.reasons
      });
    }
  });

  // Sort by score and return top matches
  return recommendations
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 3);
}

function addScore(
  careerId: string, 
  points: number, 
  reason: string, 
  scores: Map<string, { score: number; reasons: string[] }>
) {
  const current = scores.get(careerId);
  if (current) {
    current.score += points;
    current.reasons.push(reason);
  }
}

function applyProfileAdjustments(
  scores: Map<string, { score: number; reasons: string[] }>,
  profile: StudentProfile
) {
  // Adjust scores based on student profile
  
  // Class-based adjustments
  if (profile.class === "10th") {
    addScore("teacher", 5, "Good career option after Class 10", scores);
  }
  
  // Stream-based adjustments
  if (profile.stream === "science") {
    addScore("software-developer", 10, "Science background aligns with tech careers", scores);
    addScore("doctor", 10, "Science stream required for medical career", scores);
    addScore("data-analyst", 8, "Mathematical background helpful", scores);
  } else if (profile.stream === "commerce") {
    addScore("chartered-accountant", 12, "Commerce stream ideal for CA", scores);
    addScore("digital-marketer", 8, "Business knowledge helpful", scores);
  } else if (profile.stream === "arts") {
    addScore("teacher", 10, "Arts stream good for teaching career", scores);
    addScore("civil-services", 10, "Humanities background beneficial for UPSC", scores);
  }
  
  // City tier adjustments  
  if (profile.city === "tier3") {
    addScore("teacher", 8, "Teaching has good opportunities in smaller cities", scores);
    addScore("civil-services", 6, "Government jobs provide stability", scores);
    // Reduce scores for careers requiring metro presence
    const current = scores.get("software-developer");
    if (current && current.score > 10) {
      current.score = Math.max(current.score - 5, 10);
      current.reasons.push("May require relocation to metros");
    }
  }
  
  // Language adjustments
  if (profile.languages.includes("Hindi") && profile.languages.length > 1) {
    addScore("teacher", 5, "Multilingual ability helpful in teaching", scores);
    addScore("civil-services", 5, "Language skills advantage in administration", scores);
  }
  
  // Exam preparation adjustments
  if (profile.examPreparation?.includes("JEE Main/Advanced")) {
    addScore("software-developer", 10, "JEE preparation shows technical aptitude", scores);
  }
  if (profile.examPreparation?.includes("NEET")) {
    addScore("doctor", 15, "NEET preparation for medical career", scores);
  }
  if (profile.examPreparation?.includes("UPSC")) {
    addScore("civil-services", 15, "Already preparing for civil services", scores);
  }
  if (profile.examPreparation?.includes("SSC")) {
    addScore("civil-services", 10, "SSC preparation shows government job interest", scores);
  }
  if (profile.examPreparation?.includes("Banking")) {
    addScore("chartered-accountant", 8, "Banking exam preparation shows financial aptitude", scores);
  }
  if (profile.examPreparation?.includes("Railway")) {
    addScore("civil-services", 8, "Railway exam preparation shows government sector interest", scores);
  }

  // State-specific adjustments
  if (profile.state) {
    addScore("teacher", 5, `Teaching opportunities available in ${profile.state}`, scores);
    addScore("civil-services", 3, `State PCS opportunities in ${profile.state}`, scores);
  }
}