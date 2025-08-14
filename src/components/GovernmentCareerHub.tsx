import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  centralGovernmentExams, 
  stateGovernmentExams, 
  examCategories,
  getExamsByState,
  GovernmentExam,
  indianStates
} from "@/data/governmentExams";
import { StudentProfile } from "@/types/career";
import { Calendar, MapPin, Users, Trophy, Clock, IndianRupee, ArrowLeft } from "lucide-react";

interface GovernmentCareerHubProps {
  studentProfile?: StudentProfile | null;
  isHindi?: boolean;
  onBack?: () => void;
}

export default function GovernmentCareerHub({ studentProfile, isHindi = false, onBack }: GovernmentCareerHubProps) {
  const [selectedState, setSelectedState] = useState(studentProfile?.state || "");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const getFilteredExams = (): GovernmentExam[] => {
    let exams = selectedState ? getExamsByState(selectedState) : centralGovernmentExams;
    
    if (selectedCategory !== "all") {
      exams = exams.filter(exam => exam.category === selectedCategory);
    }
    
    return exams.sort((a, b) => b.successRate - a.successRate);
  };

  const filteredExams = getFilteredExams();

  const ExamCard = ({ exam }: { exam: GovernmentExam }) => (
    <Card className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <CardTitle className="text-lg font-bold text-primary">
              {isHindi ? exam.nameHindi : exam.name}
            </CardTitle>
            <CardDescription className="mt-2">
              <div className="flex flex-wrap gap-2 mb-2">
                <Badge variant={exam.level === "entry" ? "default" : "secondary"}>
                  {exam.level === "entry" ? (isHindi ? "प्रवेश स्तर" : "Entry Level") : 
                   exam.level === "mid" ? (isHindi ? "मध्य स्तर" : "Mid Level") :
                   (isHindi ? "उच्च स्तर" : "Senior Level")}
                </Badge>
                <Badge variant="outline">
                  {examCategories.find(c => c.id === exam.category)?.[isHindi ? "nameHindi" : "name"]}
                </Badge>
              </div>
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <IndianRupee className="w-4 h-4 text-muted-foreground" />
            <span>₹{(exam.salary.min / 100000).toFixed(1)}L - ₹{(exam.salary.max / 100000).toFixed(1)}L</span>
          </div>
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-muted-foreground" />
            <span>{exam.successRate}% {isHindi ? "सफलता दर" : "Success Rate"}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-muted-foreground" />
            <span>{exam.vacancy.typical.toLocaleString()} {isHindi ? "रिक्तियां" : "Vacancies"}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <span>{exam.preparation.duration}</span>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-2">
            {isHindi ? "मुख्य पद:" : "Key Posts:"}
          </h4>
          <div className="flex flex-wrap gap-1">
            {exam.posts.slice(0, 3).map((post, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {post}
              </Badge>
            ))}
            {exam.posts.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{exam.posts.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 text-xs">
          <div className="text-center">
            <div className="font-semibold text-primary">{exam.jobSecurity}/10</div>
            <div className="text-muted-foreground">{isHindi ? "नौकरी सुरक्षा" : "Job Security"}</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-primary">{exam.workLifeBalance}/10</div>
            <div className="text-muted-foreground">{isHindi ? "कार्य-जीवन संतुलन" : "Work-Life Balance"}</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-primary">
              {exam.eligibility.ageMax - exam.eligibility.ageMin}Y
            </div>
            <div className="text-muted-foreground">{isHindi ? "आयु सीमा" : "Age Range"}</div>
          </div>
        </div>

        <div className="border-t pt-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <MapPin className="w-4 h-4" />
            <span>{exam.workLocation}</span>
          </div>
          <div className="text-sm text-muted-foreground">
            <span className="font-medium">{isHindi ? "योग्यता:" : "Eligibility:"}</span> {exam.eligibility.education}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {onBack && (
        <div className="mb-6">
          <Button variant="outline" onClick={onBack} className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Main
          </Button>
        </div>
      )}
      
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
          {isHindi ? "सरकारी करियर हब" : "Government Career Hub"}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {isHindi 
            ? "भारत की सभी प्रमुख सरकारी परीक्षाओं की जानकारी, तैयारी गाइड और करियर पथ"
            : "Complete guide to India's major government exams, preparation strategies, and career paths"
          }
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="text-sm font-medium mb-2 block">
            {isHindi ? "अपना राज्य चुनें:" : "Select Your State:"}
          </label>
          <Select value={selectedState} onValueChange={setSelectedState}>
            <SelectTrigger>
              <SelectValue placeholder={isHindi ? "राज्य चुनें" : "Select State"} />
            </SelectTrigger>
            <SelectContent>
              {indianStates.map(state => (
                <SelectItem key={state} value={state}>{state}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="text-sm font-medium mb-2 block">
            {isHindi ? "श्रेणी फिल्टर:" : "Filter by Category:"}
          </label>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{isHindi ? "सभी श्रेणियां" : "All Categories"}</SelectItem>
              {examCategories.map(category => (
                <SelectItem key={category.id} value={category.id}>
                  {isHindi ? category.nameHindi : category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="exams" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="exams">
            {isHindi ? "परीक्षाएं" : "Exams"}
          </TabsTrigger>
          <TabsTrigger value="timeline">
            {isHindi ? "तैयारी टाइमलाइन" : "Preparation Timeline"}
          </TabsTrigger>
          <TabsTrigger value="roadmap">
            {isHindi ? "करियर रोडमैप" : "Career Roadmap"}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="exams" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredExams.map(exam => (
              <ExamCard key={exam.id} exam={exam} />
            ))}
          </div>
          
          {filteredExams.length === 0 && (
            <Card className="text-center py-12">
              <CardContent>
                <h3 className="text-lg font-semibold mb-2">
                  {isHindi ? "कोई परीक्षा नहीं मिली" : "No Exams Found"}
                </h3>
                <p className="text-muted-foreground">
                  {isHindi 
                    ? "कृपया अपने फिल्टर बदलें या अलग राज्य चुनें"
                    : "Please try changing your filters or selecting a different state"
                  }
                </p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="timeline" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>
                {isHindi ? "सरकारी परीक्षा तैयारी टाइमलाइन" : "Government Exam Preparation Timeline"}
              </CardTitle>
              <CardDescription>
                {isHindi 
                  ? "विभिन्न कक्षाओं से सरकारी परीक्षा की तैयारी कैसे शुरू करें"
                  : "How to start government exam preparation from different classes"
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    class: "10th",
                    timeline: isHindi ? "कक्षा 10 के बाद" : "After Class 10",
                    actions: isHindi 
                      ? ["स्ट्रीम चुनें (विज्ञान/वाणिज्य/कला)", "सामान्य ज्ञान पढ़ना शुरू करें", "NCERT की किताबें पढ़ें"]
                      : ["Choose stream (Science/Commerce/Arts)", "Start reading general knowledge", "Study NCERT books"]
                  },
                  {
                    class: "12th", 
                    timeline: isHindi ? "कक्षा 12 के दौरान" : "During Class 12",
                    actions: isHindi
                      ? ["अपनी रुचि के अनुसार परीक्षा चुनें", "समसामयिकी पढ़ना शुरू करें", "अंग्रेजी/हिंदी सुधारें"]
                      : ["Choose exams based on interest", "Start current affairs", "Improve English/Hindi"]
                  },
                  {
                    class: "Graduate",
                    timeline: isHindi ? "स्नातक के दौरान" : "During Graduation", 
                    actions: isHindi
                      ? ["गंभीर तैयारी शुरू करें", "मॉक टेस्ट दें", "कोचिंग या स्व-अध्ययन"]
                      : ["Start serious preparation", "Take mock tests", "Join coaching or self-study"]
                  }
                ].map((phase, index) => (
                  <div key={index} className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-primary">{phase.timeline}</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground mt-2">
                      {phase.actions.map((action, actionIndex) => (
                        <li key={actionIndex}>{action}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="roadmap" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>
                {isHindi ? "सरकारी करियर रोडमैप" : "Government Career Roadmap"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: isHindi ? "प्रशासनिक सेवाएं" : "Administrative Services",
                    path: isHindi 
                      ? "स्नातक → UPSC/PCS तैयारी → परीक्षा → प्रशिक्षण → पोस्टिंग"
                      : "Graduation → UPSC/PCS Prep → Exam → Training → Posting",
                    duration: isHindi ? "4-6 साल" : "4-6 years"
                  },
                  {
                    title: isHindi ? "बैंकिंग सेवाएं" : "Banking Services", 
                    path: isHindi
                      ? "स्नातक → बैंकिंग परीक्षा → प्रशिक्षण → ब्रांच पोस्टिंग"
                      : "Graduation → Banking Exam → Training → Branch Posting",
                    duration: isHindi ? "2-3 साल" : "2-3 years"
                  },
                  {
                    title: isHindi ? "रेलवे सेवाएं" : "Railway Services",
                    path: isHindi
                      ? "12वीं/स्नातक → RRB परीक्षा → प्रशिक्षण → पोस्टिंग"
                      : "12th/Graduation → RRB Exam → Training → Posting", 
                    duration: isHindi ? "1-2 साल" : "1-2 years"
                  },
                  {
                    title: isHindi ? "रक्षा सेवाएं" : "Defense Services",
                    path: isHindi
                      ? "स्नातक → CDS/AFCAT → प्रशिक्षण → कमीशन"
                      : "Graduation → CDS/AFCAT → Training → Commission",
                    duration: isHindi ? "2-3 साल" : "2-3 years"
                  }
                ].map((roadmap, index) => (
                  <Card key={index} className="bg-gradient-subtle">
                    <CardContent className="pt-6">
                      <h4 className="font-semibold text-primary mb-2">{roadmap.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{roadmap.path}</p>
                      <Badge variant="outline">{roadmap.duration}</Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}