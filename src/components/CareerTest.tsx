import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { StudentProfile, TestResponse } from "@/types/career";

interface Question {
  id: string;
  question: string;
  type: "multiple" | "scale";
  options?: string[];
  category: string;
}

const questions: Question[] = [
  {
    id: "work_environment",
    question: "What type of work environment do you prefer?",
    type: "multiple",
    options: [
      "Working with people and teams",
      "Working with data and analysis", 
      "Working with hands-on tasks and creative projects",
      "Working independently with flexibility"
    ],
    category: "environment"
  },
  {
    id: "work_style",
    question: "Which work style appeals to you most?",
    type: "multiple",
    options: [
      "Creative and artistic work",
      "Analytical and problem-solving work",
      "Structured and organized work",
      "Flexible and varied work"
    ],
    category: "style"
  },
  {
    id: "job_security_preference",
    question: "What's more important to you?",
    type: "multiple",
    options: [
      "Job security and stability (Government jobs)",
      "High growth potential and entrepreneurship",
      "Work-life balance and family time",
      "High salary and financial rewards"
    ],
    category: "preference"
  },
  {
    id: "relocation_willingness",
    question: "Are you willing to relocate for better career opportunities?",
    type: "multiple",
    options: [
      "Yes, anywhere in India or abroad",
      "Yes, but only to major Indian cities",
      "Yes, but prefer to stay in my state/region",
      "No, I want to work from my hometown"
    ],
    category: "preference"
  },
  {
    id: "english_comfort",
    question: "How comfortable are you with English for professional work?",
    type: "scale",
    category: "skill"
  },
  {
    id: "family_pressure",
    question: "How much do family expectations influence your career choice?",
    type: "scale", 
    category: "social"
  },
  {
    id: "technology_interest",
    question: "How interested are you in Technology & Software?",
    type: "scale",
    category: "interest"
  },
  {
    id: "arts_interest", 
    question: "How interested are you in Arts & Creativity?",
    type: "scale",
    category: "interest"
  },
  {
    id: "business_interest",
    question: "How interested are you in Business & Finance?",
    type: "scale", 
    category: "interest"
  },
  {
    id: "healthcare_interest",
    question: "How interested are you in Healthcare & Medicine?",
    type: "scale",
    category: "interest"
  },
  {
    id: "education_interest",
    question: "How interested are you in Education & Teaching?",
    type: "scale",
    category: "interest"
  },
  {
    id: "public_service_interest",
    question: "How interested are you in Public Service & Administration?",
    type: "scale",
    category: "interest"
  }
];

interface CareerTestProps {
  onComplete: (responses: TestResponse[]) => void;
  studentProfile?: StudentProfile | null;
}

export default function CareerTest({ onComplete, studentProfile }: CareerTestProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState<TestResponse[]>([]);
  const [currentAnswer, setCurrentAnswer] = useState<string | number>("");

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];

  const handleAnswer = (answer: string | number) => {
    setCurrentAnswer(answer);
  };

  const handleNext = () => {
    if (currentAnswer === "") return;

    const newResponse: TestResponse = {
      questionId: question.id,
      answer: currentAnswer
    };

    const updatedResponses = [...responses, newResponse];
    setResponses(updatedResponses);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setCurrentAnswer("");
    } else {
      onComplete(updatedResponses);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      const prevResponse = responses[currentQuestion - 1];
      setCurrentAnswer(prevResponse?.answer || "");
      setResponses(responses.slice(0, -1));
    }
  };

  const ScaleQuestion = () => (
    <div className="space-y-4">
      <div className="flex justify-between text-sm text-muted-foreground mb-2">
        <span>Not Interested</span>
        <span>Very Interested</span>
      </div>
      <div className="flex gap-2 justify-center">
        {[1, 2, 3, 4, 5].map((value) => (
          <Button
            key={value}
            variant={currentAnswer === value ? "default" : "outline"}
            size="icon"
            onClick={() => handleAnswer(value)}
            className="w-12 h-12 rounded-full"
          >
            {value}
          </Button>
        ))}
      </div>
    </div>
  );

  const MultipleChoiceQuestion = () => (
    <div className="space-y-3">
      {question.options?.map((option, index) => (
        <Button
          key={index}
          variant={currentAnswer === option ? "default" : "outline"}
          className="w-full justify-start p-4 h-auto text-left"
          onClick={() => handleAnswer(option)}
        >
          {option}
        </Button>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-gradient-card shadow-lg">
        <CardHeader className="text-center">
          <div className="mb-4">
            <Progress value={progress} className="w-full h-3" />
            <p className="text-sm text-muted-foreground mt-2">
              Question {currentQuestion + 1} of {questions.length}
            </p>
          </div>
          <CardTitle className="text-2xl font-bold">
            {question.question}
          </CardTitle>
          {question.type === "scale" && (
            <CardDescription>
              Rate your interest level from 1 (not interested) to 5 (very interested)
            </CardDescription>
          )}
        </CardHeader>

        <CardContent className="space-y-6">
        {question.type === "scale" ? <ScaleQuestion /> : <MultipleChoiceQuestion />}

          <div className="flex justify-between pt-6">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={currentQuestion === 0}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>

            <Button
              onClick={handleNext}
              disabled={currentAnswer === ""}
              className="flex items-center gap-2"
              variant="hero"
            >
              {currentQuestion === questions.length - 1 ? "Complete Assessment" : "Next"}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Progress indicator */}
          <div className="text-center pt-4">
            <p className="text-sm text-muted-foreground">
              {studentProfile?.class && (
                <span className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full">
                  🎓 Class {studentProfile.class}
                  {studentProfile.stream && ` • ${studentProfile.stream.charAt(0).toUpperCase() + studentProfile.stream.slice(1)}`}
                </span>
              )}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}