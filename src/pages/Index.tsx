import { useState } from "react";
import LandingPage from "@/components/LandingPage";
import CareerTest from "@/components/CareerTest";
import CareerResults from "@/components/CareerResults";
import CareerDetail from "@/components/CareerDetail";
import { TestResponse, CareerRecommendation } from "@/types/career";
import { analyzeCareerMatches } from "@/utils/careerMatcher";
import { getCareerById } from "@/data/careers";

type AppState = "landing" | "test" | "results" | "detail";

const Index = () => {
  const [currentState, setCurrentState] = useState<AppState>("landing");
  const [testResponses, setTestResponses] = useState<TestResponse[]>([]);
  const [recommendations, setRecommendations] = useState<CareerRecommendation[]>([]);
  const [selectedCareerId, setSelectedCareerId] = useState<string | null>(null);

  const handleStartTest = () => {
    setCurrentState("test");
  };

  const handleTestComplete = (responses: TestResponse[]) => {
    setTestResponses(responses);
    const matches = analyzeCareerMatches(responses);
    setRecommendations(matches);
    setCurrentState("results");
  };

  const handleCareerSelect = (careerId: string) => {
    setSelectedCareerId(careerId);
    setCurrentState("detail");
  };

  const handleBackToResults = () => {
    setCurrentState("results");
  };

  const handleRetakeTest = () => {
    setTestResponses([]);
    setRecommendations([]);
    setSelectedCareerId(null);
    setCurrentState("test");
  };

  const selectedCareer = selectedCareerId ? getCareerById(selectedCareerId) : null;

  switch (currentState) {
    case "landing":
      return <LandingPage onStartTest={handleStartTest} />;
    
    case "test":
      return <CareerTest onComplete={handleTestComplete} />;
    
    case "results":
      return (
        <CareerResults 
          recommendations={recommendations}
          onCareerSelect={handleCareerSelect}
          onRetakeTest={handleRetakeTest}
        />
      );
    
    case "detail":
      if (!selectedCareer) {
        setCurrentState("results");
        return null;
      }
      return (
        <CareerDetail 
          career={selectedCareer}
          onBack={handleBackToResults}
        />
      );
    
    default:
      return <LandingPage onStartTest={handleStartTest} />;
  }
};

export default Index;
