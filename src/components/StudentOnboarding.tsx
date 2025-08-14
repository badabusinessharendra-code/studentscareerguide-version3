import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, ArrowLeft, GraduationCap, MapPin, BookOpen, Heart } from "lucide-react";
import { StudentProfile } from "@/types/career";
import { indianStates } from "@/data/governmentExams";

interface StudentOnboardingProps {
  onComplete: (profile: StudentProfile) => void;
  onBack: () => void;
}

export default function StudentOnboarding({ onComplete, onBack }: StudentOnboardingProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [profile, setProfile] = useState<Partial<StudentProfile>>({
    languages: ["English"],
    examPreparation: [],
    state: ""
  });

  const totalSteps = 5;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(profile as StudentProfile);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      onBack();
    }
  };

  const updateProfile = (key: keyof StudentProfile, value: any) => {
    setProfile(prev => ({ ...prev, [key]: value }));
  };

  const isStepComplete = () => {
    switch (currentStep) {
      case 0: return profile.class;
      case 1: return profile.state;
      case 2: return profile.city;
      case 3: return profile.languages && profile.languages.length > 0;
      case 4: return true;
      default: return false;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <GraduationCap className="w-16 h-16 mx-auto mb-4 text-primary" />
              <h2 className="text-2xl font-bold mb-2">आपकी शिक्षा की स्थिति</h2>
              <p className="text-muted-foreground">What's your current education level?</p>
            </div>
            
            <RadioGroup 
              value={profile.class} 
              onValueChange={(value) => updateProfile('class', value)}
              className="space-y-3"
            >
              <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted/50">
                <RadioGroupItem value="10th" id="10th" />
                <Label htmlFor="10th" className="flex-1 cursor-pointer">
                  <div>
                    <p className="font-medium">Class 10th</p>
                    <p className="text-sm text-muted-foreground">Stream selection needed</p>
                  </div>
                </Label>
              </div>
              <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted/50">
                <RadioGroupItem value="11th" id="11th" />
                <Label htmlFor="11th" className="flex-1 cursor-pointer">
                  <div>
                    <p className="font-medium">Class 11th</p>
                    <p className="text-sm text-muted-foreground">Stream already chosen</p>
                  </div>
                </Label>
              </div>
              <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted/50">
                <RadioGroupItem value="12th" id="12th" />
                <Label htmlFor="12th" className="flex-1 cursor-pointer">
                  <div>
                    <p className="font-medium">Class 12th</p>
                    <p className="text-sm text-muted-foreground">Preparing for entrance/career</p>
                  </div>
                </Label>
              </div>
              <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted/50">
                <RadioGroupItem value="college" id="college" />
                <Label htmlFor="college" className="flex-1 cursor-pointer">
                  <div>
                    <p className="font-medium">College Student</p>
                    <p className="text-sm text-muted-foreground">Looking for career options</p>
                  </div>
                </Label>
              </div>
              <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted/50">
                <RadioGroupItem value="graduate" id="graduate" />
                <Label htmlFor="graduate" className="flex-1 cursor-pointer">
                  <div>
                    <p className="font-medium">Graduate</p>
                    <p className="text-sm text-muted-foreground">Career transition/planning</p>
                  </div>
                </Label>
              </div>
            </RadioGroup>

            {(profile.class === "11th" || profile.class === "12th") && (
              <div className="mt-6">
                <Label className="text-base font-medium">Which stream?</Label>
                <RadioGroup 
                  value={profile.stream} 
                  onValueChange={(value) => updateProfile('stream', value)}
                  className="mt-3 space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="science" id="science" />
                    <Label htmlFor="science">Science (PCM/PCB)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="commerce" id="commerce" />
                    <Label htmlFor="commerce">Commerce</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="arts" id="arts" />
                    <Label htmlFor="arts">Arts/Humanities</Label>
                  </div>
                </RadioGroup>
              </div>
            )}
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <MapPin className="w-16 h-16 mx-auto mb-4 text-primary" />
              <h2 className="text-2xl font-bold mb-2">आपका राज्य</h2>
              <p className="text-muted-foreground">Which state are you from? This helps with government exam recommendations.</p>
            </div>
            
            <Select 
              value={profile.state} 
              onValueChange={(value) => updateProfile('state', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select your state" />
              </SelectTrigger>
              <SelectContent>
                {indianStates.map(state => (
                  <SelectItem key={state} value={state}>{state}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <MapPin className="w-16 h-16 mx-auto mb-4 text-primary" />
              <h2 className="text-2xl font-bold mb-2">आपका शहर</h2>
              <p className="text-muted-foreground">Where are you from? This helps us understand opportunities.</p>
            </div>
            
            <RadioGroup 
              value={profile.city} 
              onValueChange={(value) => updateProfile('city', value)}
              className="space-y-3"
            >
              <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted/50">
                <RadioGroupItem value="tier1" id="tier1" />
                <Label htmlFor="tier1" className="flex-1 cursor-pointer">
                  <div>
                    <p className="font-medium">Tier 1 City</p>
                    <p className="text-sm text-muted-foreground">Mumbai, Delhi, Bangalore, Chennai, Hyderabad, Pune</p>
                  </div>
                </Label>
              </div>
              <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted/50">
                <RadioGroupItem value="tier2" id="tier2" />
                <Label htmlFor="tier2" className="flex-1 cursor-pointer">
                  <div>
                    <p className="font-medium">Tier 2 City</p>
                    <p className="text-sm text-muted-foreground">Jaipur, Lucknow, Kochi, Indore, Bhopal, Coimbatore</p>
                  </div>
                </Label>
              </div>
              <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted/50">
                <RadioGroupItem value="tier3" id="tier3" />
                <Label htmlFor="tier3" className="flex-1 cursor-pointer">
                  <div>
                    <p className="font-medium">Tier 3 City/Town</p>
                    <p className="text-sm text-muted-foreground">Smaller cities and towns</p>
                  </div>
                </Label>
              </div>
            </RadioGroup>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <BookOpen className="w-16 h-16 mx-auto mb-4 text-primary" />
              <h2 className="text-2xl font-bold mb-2">भाषाएं</h2>
              <p className="text-muted-foreground">Which languages are you comfortable with?</p>
            </div>
            
            <div className="space-y-3">
              {["English", "Hindi", "Tamil", "Telugu", "Bengali", "Marathi", "Gujarati"].map((lang) => (
                <div key={lang} className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted/50">
                  <Checkbox
                    id={lang}
                    checked={profile.languages?.includes(lang)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        updateProfile('languages', [...(profile.languages || []), lang]);
                      } else {
                        updateProfile('languages', profile.languages?.filter(l => l !== lang));
                      }
                    }}
                  />
                  <Label htmlFor={lang} className="cursor-pointer">{lang}</Label>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Label className="text-base font-medium mb-3 block">Are you preparing for any exams?</Label>
              <div className="space-y-2">
                {["JEE Main/Advanced", "NEET", "CLAT", "CAT", "GATE", "UPSC", "SSC", "Banking", "Railway", "State PSC", "Police", "Teaching (TET/CTET)"].map((exam) => (
                  <div key={exam} className="flex items-center space-x-2">
                    <Checkbox
                      id={exam}
                      checked={profile.examPreparation?.includes(exam)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          updateProfile('examPreparation', [...(profile.examPreparation || []), exam]);
                        } else {
                          updateProfile('examPreparation', profile.examPreparation?.filter(e => e !== exam));
                        }
                      }}
                    />
                    <Label htmlFor={exam} className="cursor-pointer">{exam}</Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <Heart className="w-16 h-16 mx-auto mb-4 text-primary" />
              <h2 className="text-2xl font-bold mb-2">अपने बारे में बताएं</h2>
              <p className="text-muted-foreground">Help us understand your situation better</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label className="text-base font-medium">What do your parents expect from your career?</Label>
                <Textarea
                  placeholder="e.g., They want me to become a doctor or engineer..."
                  value={profile.parentExpectations || ""}
                  onChange={(e) => updateProfile('parentExpectations', e.target.value)}
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label className="text-base font-medium">What's your biggest career confusion?</Label>
                <Textarea
                  placeholder="e.g., I don't know if I should choose science or commerce..."
                  value={profile.careerConfusion || ""}
                  onChange={(e) => updateProfile('careerConfusion', e.target.value)}
                  className="mt-2"
                />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-gradient-card shadow-lg">
        <CardHeader className="text-center">
          <div className="mb-4">
            <Progress value={progress} className="w-full h-3" />
            <p className="text-sm text-muted-foreground mt-2">
              Step {currentStep + 1} of {totalSteps}
            </p>
          </div>
          <CardTitle className="text-2xl font-bold">
            Let's get to know you better
          </CardTitle>
          <CardDescription>
            This helps us provide personalized career guidance
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {renderStep()}

          <div className="flex justify-between pt-6">
            <Button
              variant="outline"
              onClick={handleBack}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>

            <Button
              onClick={handleNext}
              disabled={!isStepComplete()}
              className="flex items-center gap-2"
            >
              {currentStep === totalSteps - 1 ? "Complete Setup" : "Next"}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}