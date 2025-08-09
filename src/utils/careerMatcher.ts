import { TestResponse, CareerRecommendation } from "@/types/career";
import { careers } from "@/data/careers";

export function analyzeCareerMatches(responses: TestResponse[]): CareerRecommendation[] {
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

      case "education_interest":
        const eduScore = Number(answer) * 4;
        addScore("teacher", eduScore, `Strong education interest (${answer}/5)`, careerScores);
        break;
    }
  });

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