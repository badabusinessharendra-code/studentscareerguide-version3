import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, ArrowLeft, BookOpen, Calculator, Palette, TrendingUp, Users, Briefcase } from "lucide-react";

interface Stream {
  id: string;
  name: string;
  subjects: string[];
  careers: string[];
  difficulty: number;
  jobOpportunities: number;
  averageSalary: string;
  suitableFor: string[];
  icon: any;
  color: string;
}

const streams: Stream[] = [
  {
    id: "science",
    name: "Science (PCM/PCB)",
    subjects: ["Physics", "Chemistry", "Mathematics/Biology"],
    careers: ["Doctor", "Engineer", "Data Scientist", "Researcher", "Pharmacist"],
    difficulty: 4,
    jobOpportunities: 9,
    averageSalary: "₹5-25 LPA",
    suitableFor: ["Problem solvers", "Analytical thinkers", "Research-oriented"],
    icon: BookOpen,
    color: "bg-blue-500"
  },
  {
    id: "commerce",
    name: "Commerce",
    subjects: ["Accountancy", "Business Studies", "Economics"],
    careers: ["CA", "Business Manager", "Banker", "Financial Advisor", "Entrepreneur"],
    difficulty: 3,
    jobOpportunities: 8,
    averageSalary: "₹4-20 LPA",
    suitableFor: ["Business-minded", "Number-oriented", "Communication skills"],
    icon: Calculator,
    color: "bg-green-500"
  },
  {
    id: "arts",
    name: "Arts/Humanities",
    subjects: ["History", "Political Science", "Psychology", "Literature"],
    careers: ["Civil Services", "Lawyer", "Journalist", "Teacher", "Social Worker"],
    difficulty: 2,
    jobOpportunities: 7,
    averageSalary: "₹3-15 LPA",
    suitableFor: ["Creative thinkers", "Social awareness", "Communication skills"],
    icon: Palette,
    color: "bg-purple-500"
  }
];

interface StreamSelectorProps {
  onComplete: (selectedStream: string) => void;
  onBack: () => void;
}

export default function StreamSelector({ onComplete, onBack }: StreamSelectorProps) {
  const [selectedStream, setSelectedStream] = useState<string>("");
  const [currentStep, setCurrentStep] = useState(0);
  const [preferences, setPreferences] = useState({
    mathComfort: 0,
    scienceInterest: 0,
    businessInterest: 0,
    artInterest: 0
  });

  const totalSteps = 2;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  const handleNext = () => {
    if (currentStep === 0) {
      setCurrentStep(1);
      calculateRecommendation();
    } else {
      onComplete(selectedStream);
    }
  };

  const calculateRecommendation = () => {
    const { mathComfort, scienceInterest, businessInterest, artInterest } = preferences;
    
    let scores = {
      science: mathComfort + scienceInterest,
      commerce: mathComfort + businessInterest,
      arts: artInterest + (5 - mathComfort) // Arts often appeals to those less comfortable with math
    };

    const recommended = Object.entries(scores).reduce((a, b) => scores[a[0]] > scores[b[0]] ? a : b)[0];
    setSelectedStream(recommended);
  };

  const renderStep = () => {
    if (currentStep === 0) {
      return (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">Stream Selection Quiz</h2>
            <p className="text-muted-foreground">Answer a few questions to get personalized stream recommendations</p>
          </div>

          <div className="space-y-8">
            <div>
              <p className="font-medium mb-4">How comfortable are you with Mathematics?</p>
              <div className="flex gap-2 justify-center">
                {[1, 2, 3, 4, 5].map((value) => (
                  <Button
                    key={value}
                    variant={preferences.mathComfort === value ? "default" : "outline"}
                    size="icon"
                    onClick={() => setPreferences(prev => ({ ...prev, mathComfort: value }))}
                    className="w-12 h-12 rounded-full"
                  >
                    {value}
                  </Button>
                ))}
              </div>
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>Not comfortable</span>
                <span>Very comfortable</span>
              </div>
            </div>

            <div>
              <p className="font-medium mb-4">How interested are you in Science subjects?</p>
              <div className="flex gap-2 justify-center">
                {[1, 2, 3, 4, 5].map((value) => (
                  <Button
                    key={value}
                    variant={preferences.scienceInterest === value ? "default" : "outline"}
                    size="icon"
                    onClick={() => setPreferences(prev => ({ ...prev, scienceInterest: value }))}
                    className="w-12 h-12 rounded-full"
                  >
                    {value}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <p className="font-medium mb-4">How interested are you in Business & Finance?</p>
              <div className="flex gap-2 justify-center">
                {[1, 2, 3, 4, 5].map((value) => (
                  <Button
                    key={value}
                    variant={preferences.businessInterest === value ? "default" : "outline"}
                    size="icon"
                    onClick={() => setPreferences(prev => ({ ...prev, businessInterest: value }))}
                    className="w-12 h-12 rounded-full"
                  >
                    {value}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <p className="font-medium mb-4">How interested are you in Arts & Social Sciences?</p>
              <div className="flex gap-2 justify-center">
                {[1, 2, 3, 4, 5].map((value) => (
                  <Button
                    key={value}
                    variant={preferences.artInterest === value ? "default" : "outline"}
                    size="icon"
                    onClick={() => setPreferences(prev => ({ ...prev, artInterest: value }))}
                    className="w-12 h-12 rounded-full"
                  >
                    {value}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">Stream Recommendations</h2>
          <p className="text-muted-foreground">Based on your preferences, here are the best streams for you</p>
        </div>

        <div className="space-y-4">
          {streams.map((stream, index) => {
            const isRecommended = stream.id === selectedStream;
            const Icon = stream.icon;
            
            return (
              <Card 
                key={stream.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  isRecommended ? 'border-primary shadow-lg bg-primary/5' : ''
                }`}
                onClick={() => setSelectedStream(stream.id)}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-full ${stream.color} flex items-center justify-center text-white`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <CardTitle className="text-xl">{stream.name}</CardTitle>
                          {isRecommended && (
                            <Badge className="bg-primary text-primary-foreground">
                              Recommended
                            </Badge>
                          )}
                        </div>
                        <CardDescription>
                          Core subjects: {stream.subjects.join(", ")}
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-success" />
                      <div>
                        <p className="text-sm text-muted-foreground">Avg. Salary</p>
                        <p className="font-semibold text-sm">{stream.averageSalary}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Job Market</p>
                        <div className="flex items-center gap-1">
                          <div className="flex gap-1">
                            {Array.from({length: 5}).map((_, i) => (
                              <div
                                key={i}
                                className={`w-2 h-2 rounded-full ${
                                  i < Math.floor(stream.jobOpportunities/2) ? 'bg-success' : 'bg-muted'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-muted-foreground ml-1">
                            {stream.jobOpportunities}/10
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium mb-2">Popular Careers:</p>
                    <div className="flex flex-wrap gap-2">
                      {stream.careers.slice(0, 4).map((career) => (
                        <Badge key={career} variant="outline" className="text-xs">
                          {career}
                        </Badge>
                      ))}
                      {stream.careers.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{stream.careers.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium mb-2">Best suited for:</p>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        {stream.suitableFor.join(", ")}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    );
  };

  const isStepComplete = () => {
    if (currentStep === 0) {
      return Object.values(preferences).every(val => val > 0);
    }
    return selectedStream !== "";
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl bg-gradient-card shadow-lg">
        <CardHeader className="text-center">
          <div className="mb-4">
            <Progress value={progress} className="w-full h-3" />
            <p className="text-sm text-muted-foreground mt-2">
              Step {currentStep + 1} of {totalSteps}
            </p>
          </div>
          <CardTitle className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            Stream Selector
          </CardTitle>
          <CardDescription className="text-lg">
            Find the perfect stream for your Class 11th & 12th
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {renderStep()}

          <div className="flex justify-between pt-6">
            <Button
              variant="outline"
              onClick={onBack}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>

            <Button
              onClick={handleNext}
              disabled={!isStepComplete()}
              className="flex items-center gap-2"
              variant="hero"
            >
              {currentStep === totalSteps - 1 ? "Proceed to Career Test" : "Get Recommendations"}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}