import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { StudentProfile, TestResponse } from "@/types/career";

interface Question {
  id: string;
  question: string;
  questionHindi?: string;
  type: "multiple" | "scale";
  options?: string[];
  optionsHindi?: string[];
  category: string;
  conditional?: {
    dependsOn: string;
    showWhen: string | string[];
  };
}

const questions: Question[] = [
  {
    id: "work_environment",
    question: "What type of work environment do you prefer?",
    questionHindi: "आप किस प्रकार के कार्य माहौल को पसंद करते हैं?",
    type: "multiple",
    options: [
      "Working with people and teams",
      "Working with data and analysis", 
      "Working with hands-on tasks and creative projects",
      "Working independently with flexibility"
    ],
    optionsHindi: [
      "लोगों और टीमों के साथ काम करना",
      "डेटा और विश्लेषण के साथ काम करना",
      "व्यावहारिक कार्य और रचनात्मक परियोजनाएं",
      "स्वतंत्र रूप से लचीलेपन के साथ काम करना"
    ],
    category: "environment"
  },
  {
    id: "work_style",
    question: "Which work style appeals to you most?",
    questionHindi: "कौन सी कार्य शैली आपको सबसे अधिक आकर्षित करती है?",
    type: "multiple",
    options: [
      "Creative and artistic work",
      "Analytical and problem-solving work",
      "Structured and organized work",
      "Flexible and varied work"
    ],
    optionsHindi: [
      "रचनात्मक और कलात्मक कार्य",
      "विश्लेषणात्मक और समस्या-समाधान कार्य",
      "संरचित और व्यवस्थित कार्य",
      "लचीला और विविधतापूर्ण कार्य"
    ],
    category: "style"
  },
  {
    id: "job_security_preference",
    question: "What's more important to you?",
    questionHindi: "आपके लिए क्या अधिक महत्वपूर्ण है?",
    type: "multiple",
    options: [
      "Job security and stability (Government jobs)",
      "High growth potential and entrepreneurship",
      "Work-life balance and family time",
      "High salary and financial rewards"
    ],
    optionsHindi: [
      "नौकरी की सुरक्षा और स्थिरता (सरकारी नौकरी)",
      "उच्च वृद्धि क्षमता और उद्यमिता",
      "कार्य-जीवन संतुलन और पारिवारिक समय",
      "उच्च वेतन और वित्तीय पुरस्कार"
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
    questionHindi: "आप लोक सेवा और प्रशासन में कितने रुचि रखते हैं?",
    type: "scale",
    category: "interest"
  },
  // Government-specific questions (conditional)
  {
    id: "govt_sector_preference",
    question: "Which government sector interests you most?",
    questionHindi: "कौन सा सरकारी क्षेत्र आपको सबसे अधिक दिलचस्प लगता है?",
    type: "multiple",
    options: [
      "Administrative Services (IAS, State PCS)",
      "Police & Security (IPS, State Police)",
      "Railways (Technical & Non-technical)",
      "Banking & Financial Services",
      "Defense Forces",
      "Teaching & Education"
    ],
    optionsHindi: [
      "प्रशासनिक सेवाएं (IAS, राज्य PCS)",
      "पुलिस और सुरक्षा (IPS, राज्य पुलिस)",
      "रेलवे (तकनीकी और गैर-तकनीकी)",
      "बैंकिंग और वित्तीय सेवाएं",
      "रक्षा बल",
      "शिक्षण और शिक्षा"
    ],
    category: "government",
    conditional: {
      dependsOn: "job_security_preference",
      showWhen: "Job security and stability (Government jobs)"
    }
  },
  {
    id: "govt_exam_willingness",
    question: "How willing are you to prepare for competitive government exams?",
    questionHindi: "आप प्रतियोगी सरकारी परीक्षाओं की तैयारी के लिए कितने इच्छुक हैं?",
    type: "scale",
    category: "government", 
    conditional: {
      dependsOn: "job_security_preference",
      showWhen: "Job security and stability (Government jobs)"
    }
  },
  {
    id: "govt_posting_preference",
    question: "What type of government job posting do you prefer?",
    questionHindi: "आप किस प्रकार की सरकारी नौकरी की पोस्टिंग को पसंद करते हैं?",
    type: "multiple",
    options: [
      "All India posting (willing to work anywhere)",
      "State-level posting (within my state)",
      "District-level posting (local area)",
      "Central office posting (Delhi/major cities)"
    ],
    optionsHindi: [
      "अखिल भारतीय पोस्टिंग (कहीं भी काम करने को तैयार)",
      "राज्य स्तरीय पोस्टिंग (मेरे राज्य के भीतर)",
      "जिला स्तरीय पोस्टिंग (स्थानीय क्षेत्र)",
      "केंद्रीय कार्यालय पोस्टिंग (दिल्ली/प्रमुख शहर)"
    ],
    category: "government",
    conditional: {
      dependsOn: "job_security_preference", 
      showWhen: "Job security and stability (Government jobs)"
    }
  },
  {
    id: "govt_work_nature",
    question: "What type of government work appeals to you?",
    questionHindi: "किस प्रकार का सरकारी कार्य आपको आकर्षित करता है?",
    type: "multiple",
    options: [
      "Field work and public interaction",
      "Office work and policy implementation",
      "Technical work and maintenance",
      "Investigation and law enforcement"
    ],
    optionsHindi: [
      "क्षेत्रीय कार्य और जनसंपर्क",
      "कार्यालयीन कार्य और नीति कार्यान्वयन",
      "तकनीकी कार्य और रखरखाव",
      "जांच और कानून प्रवर्तन"
    ],
    category: "government",
    conditional: {
      dependsOn: "job_security_preference",
      showWhen: "Job security and stability (Government jobs)"
    }
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
  const [isHindi, setIsHindi] = useState(false);

  // Filter questions based on conditional logic
  const getVisibleQuestions = () => {
    return questions.filter(q => {
      if (!q.conditional) return true;
      
      const dependentResponse = responses.find(r => r.questionId === q.conditional!.dependsOn);
      if (!dependentResponse) return false;
      
      const showWhen = q.conditional.showWhen;
      if (Array.isArray(showWhen)) {
        return showWhen.includes(dependentResponse.answer as string);
      }
      return dependentResponse.answer === showWhen;
    });
  };

  const visibleQuestions = getVisibleQuestions();
  const progress = ((currentQuestion + 1) / visibleQuestions.length) * 100;
  const question = visibleQuestions[currentQuestion];

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

    if (currentQuestion < visibleQuestions.length - 1) {
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

  const MultipleChoiceQuestion = () => {
    const options = isHindi ? question.optionsHindi || question.options : question.options;
    return (
      <div className="space-y-3">
        {options?.map((option, index) => (
          <Button
            key={index}
            variant={currentAnswer === (question.options?.[index] || option) ? "default" : "outline"}
            className="w-full justify-start p-4 h-auto text-left"
            onClick={() => handleAnswer(question.options?.[index] || option)}
          >
            {option}
          </Button>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-gradient-card shadow-lg">
        <CardHeader className="text-center">
          <div className="mb-4 flex justify-between items-center">
            <div className="flex-1">
              <Progress value={progress} className="w-full h-3" />
              <p className="text-sm text-muted-foreground mt-2">
                Question {currentQuestion + 1} of {visibleQuestions.length}
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsHindi(!isHindi)}
              className="ml-4 text-xs"
            >
              {isHindi ? "English" : "हिंदी"}
            </Button>
          </div>
          <CardTitle className="text-2xl font-bold">
            {isHindi ? question.questionHindi || question.question : question.question}
          </CardTitle>
          {question.type === "scale" && (
            <CardDescription>
              {isHindi 
                ? "1 (कोई रुचि नहीं) से 5 (बहुत रुचि) तक अपनी रुचि दर्जा दें"
                : "Rate your interest level from 1 (not interested) to 5 (very interested)"
              }
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
              {currentQuestion === visibleQuestions.length - 1 
                ? (isHindi ? "मूल्यांकन पूरा करें" : "Complete Assessment")
                : (isHindi ? "अगला" : "Next")
              }
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