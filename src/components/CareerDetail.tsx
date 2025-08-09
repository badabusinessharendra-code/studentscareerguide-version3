import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { CareerField, StudentProfile } from "@/types/career";
import { 
  ArrowLeft,
  DollarSign, 
  TrendingUp, 
  GraduationCap, 
  BookOpen,
  ExternalLink,
  CheckCircle,
  Clock,
  Star,
  BarChart,
  Users,
  Briefcase
} from "lucide-react";

interface CareerDetailProps {
  career: CareerField;
  onBack: () => void;
  studentProfile?: StudentProfile | null;
}

export default function CareerDetail({ career, onBack, studentProfile }: CareerDetailProps) {
  const [activeTab, setActiveTab] = useState("overview");

  const formatSalary = (min: number, max: number) => {
    return `$${(min / 1000).toFixed(0)}k - $${(max / 1000).toFixed(0)}k`;
  };

  const getDifficultyLabel = (level: number) => {
    const labels = ["Very Easy", "Easy", "Moderate", "Challenging", "Very Challenging"];
    return labels[level - 1];
  };

  const getDifficultyColor = (level: number) => {
    const colors = ["success", "secondary", "accent", "destructive", "destructive"];
    return colors[level - 1];
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Key Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-gradient-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <DollarSign className="w-8 h-8 text-success" />
              <div>
                <p className="text-sm text-muted-foreground">Salary Range</p>
                <p className="text-lg font-bold">{formatSalary(career.averageSalary.min, career.averageSalary.max)}</p>
                <p className="text-xs text-muted-foreground">{career.averageSalary.region}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-secondary" />
              <div>
                <p className="text-sm text-muted-foreground">Job Growth</p>
                <p className="text-lg font-bold">+{career.jobGrowth.rate}%</p>
                <Badge variant="secondary" className="text-xs">
                  {career.jobGrowth.outlook}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <BarChart className="w-8 h-8 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Difficulty</p>
                <p className="text-lg font-bold">{getDifficultyLabel(career.difficulty)}</p>
                <div className="flex items-center gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`w-2 h-2 rounded-full ${
                        i < career.difficulty ? 'bg-primary' : 'bg-muted'
                      }`} 
                    />
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Star className="w-8 h-8 text-accent" />
              <div>
                <p className="text-sm text-muted-foreground">Satisfaction</p>
                <p className="text-lg font-bold">{career.satisfaction}/5</p>
                <div className="flex items-center gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-3 h-3 ${
                        i < Math.floor(career.satisfaction) 
                          ? 'text-accent fill-current' 
                          : 'text-muted'
                      }`} 
                    />
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Description */}
      <Card className="bg-gradient-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Briefcase className="w-5 h-5" />
            About This Career
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">{career.description}</p>
          <div className="mt-4">
            <h4 className="font-semibold mb-2">Work Environment</h4>
            <p className="text-sm text-muted-foreground">{career.workEnvironment}</p>
          </div>
        </CardContent>
      </Card>

      {/* Key Skills */}
      <Card className="bg-gradient-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            Key Skills Required
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {career.keySkills.map((skill) => (
              <Badge key={skill} variant="outline" className="px-3 py-1">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderCareerPath = () => (
    <div className="space-y-4">
      <Card className="bg-gradient-card">
        <CardHeader>
          <CardTitle>Your Journey to Success</CardTitle>
          <CardDescription>
            Follow this step-by-step roadmap to build your career in {career.title}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {career.careerPath.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
                    {index + 1}
                  </div>
                  {index < career.careerPath.length - 1 && (
                    <div className="w-px h-16 bg-border mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold">{step.title}</h3>
                    <Badge variant="outline" className="text-xs">
                      {step.timeframe}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderEducation = () => (
    <div className="space-y-6">
      <Card className="bg-gradient-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5" />
            Education Requirements
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Required Education Level</h4>
            <p className="text-lg font-medium text-primary">{career.education.level}</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">Typical Duration</h4>
            <p className="text-muted-foreground">{career.education.duration}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Common Pathways</h4>
            <div className="space-y-2">
              {career.education.requirements.map((req, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{req}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Learning Resources */}
      <Card className="bg-gradient-card">
        <CardHeader>
          <CardTitle>Learning Resources</CardTitle>
          <CardDescription>
            Recommended courses, certifications, and learning materials
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            {career.learningResources.map((resource, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3">
                  <Badge variant={resource.free ? "secondary" : "outline"} className="text-xs">
                    {resource.free ? "Free" : "Paid"}
                  </Badge>
                  <div>
                    <p className="font-medium">{resource.title}</p>
                    <p className="text-sm text-muted-foreground">{resource.type}</p>
                  </div>
                </div>
                {resource.url && (
                  <Button variant="ghost" size="sm" asChild>
                    <a href={`https://${resource.url}`} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <Button 
            variant="outline" 
            onClick={onBack}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Results
          </Button>
          
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-2">{career.title}</h1>
            <p className="text-xl text-muted-foreground">{career.description}</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <BarChart className="w-4 h-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="path" className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Career Path
            </TabsTrigger>
            <TabsTrigger value="education" className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              Education
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            {renderOverview()}
          </TabsContent>

          <TabsContent value="path">
            {renderCareerPath()}
          </TabsContent>

          <TabsContent value="education">
            {renderEducation()}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}