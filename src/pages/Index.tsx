import { useState } from "react";
import LandingPage from "@/components/LandingPage";
import StudentOnboarding from "@/components/StudentOnboarding";
import StreamSelector from "@/components/StreamSelector";
import CareerTest from "@/components/CareerTest";
import CareerResults from "@/components/CareerResults";
import CareerDetail from "@/components/CareerDetail";
import { TestResponse, CareerRecommendation, StudentProfile } from "@/types/career";
import { analyzeCareerMatches } from "@/utils/careerMatcher";
import { getCareerById } from "@/data/careers";

type AppState = "landing" | "onboarding" | "stream-selector" | "test" | "results" | "detail";

const Index = () => {
  const [currentState, setCurrentState] = useState<AppState>("landing");
  const [testResponses, setTestResponses] = useState<TestResponse[]>([]);
  const [recommendations, setRecommendations] = useState<CareerRecommendation[]>([]);
  const [selectedCareerId, setSelectedCareerId] = useState<string | null>(null);
  const [studentProfile, setStudentProfile] = useState<StudentProfile | null>(null);
  const [selectedStream, setSelectedStream] = useState<string>("");

  const handleStartTest = () => {
    setCurrentState("onboarding");
  };

  const handleOnboardingComplete = (profile: StudentProfile) => {
    setStudentProfile(profile);
    // If student is in Class 10, show stream selector
    if (profile.class === "10th") {
      setCurrentState("stream-selector");
    } else {
      setCurrentState("test");
    }
  };

  const handleStreamSelection = (stream: string) => {
    setSelectedStream(stream);
    // Update student profile with selected stream
    if (studentProfile) {
      setStudentProfile({
        ...studentProfile,
        stream: stream as "science" | "commerce" | "arts"
      });
    }
    setCurrentState("test");
  };

  const handleTestComplete = (responses: TestResponse[]) => {
    setTestResponses(responses);
    const matches = analyzeCareerMatches(responses, studentProfile);
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
    setCurrentState("onboarding");
  };

  const handleBackToLanding = () => {
    setCurrentState("landing");
  };

  const selectedCareer = selectedCareerId ? getCareerById(selectedCareerId) : null;

  switch (currentState) {
    case "landing":
      return <LandingPage onStartTest={handleStartTest} />;
    
    case "onboarding":
      return (
        <StudentOnboarding 
          onComplete={handleOnboardingComplete}
          onBack={handleBackToLanding}
        />
      );
    
    case "stream-selector":
      return (
        <StreamSelector 
          onComplete={handleStreamSelection}
          onBack={handleBackToLanding}
        />
      );
    
    case "test":
      return (
        <CareerTest 
          onComplete={handleTestComplete} 
          studentProfile={studentProfile}
        />
      );
    
    case "results":
      return (
        <CareerResults 
          recommendations={recommendations}
          onCareerSelect={handleCareerSelect}
          onRetakeTest={handleRetakeTest}
          studentProfile={studentProfile}
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
          studentProfile={studentProfile}
        />
      );
    
    default:
      return <LandingPage onStartTest={handleStartTest} />;
  }
};

export default Index;
