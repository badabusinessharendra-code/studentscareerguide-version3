import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CareerRecommendation } from "@/types/career";
import { 
  TrendingUp, 
  GraduationCap, 
  DollarSign, 
  Clock, 
  Star,
  ArrowRight,
  BookOpen,
  Users
} from "lucide-react";

interface CareerResultsProps {
  recommendations: CareerRecommendation[];
  onCareerSelect: (careerId: string) => void;
  onRetakeTest: () => void;
}

export default function CareerResults({ recommendations, onCareerSelect, onRetakeTest }: CareerResultsProps) {
  const formatSalary = (min: number, max: number) => {
    return `$${(min / 1000).toFixed(0)}k - $${(max / 1000).toFixed(0)}k`;
  };

  const getOutlookColor = (outlook: string) => {
    switch (outlook) {
      case "Excellent": return "bg-success text-success-foreground";
      case "Good": return "bg-secondary text-secondary-foreground";
      case "Average": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Your Career Recommendations
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Based on your preferences and interests, here are your top career matches
          </p>
          <Button variant="outline" onClick={onRetakeTest}>
            Retake Assessment
          </Button>
        </div>

        {/* Results */}
        <div className="grid gap-6 lg:grid-cols-1 xl:grid-cols-2">
          {recommendations.map((recommendation, index) => {
            const { career, matchScore, reasons } = recommendation;
            
            return (
              <Card key={career.id} className="bg-gradient-card shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="secondary" className="text-sm font-semibold">
                          #{index + 1} Match
                        </Badge>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-accent fill-current" />
                          <span className="text-sm font-medium">{matchScore}% Match</span>
                        </div>
                      </div>
                      <CardTitle className="text-2xl mb-2">{career.title}</CardTitle>
                      <CardDescription className="text-base">
                        {career.description}
                      </CardDescription>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-medium">Match Score</span>
                    </div>
                    <Progress value={matchScore} className="h-2" />
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Key Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-success" />
                      <div>
                        <p className="text-sm text-muted-foreground">Salary Range</p>
                        <p className="font-semibold">{formatSalary(career.averageSalary.min, career.averageSalary.max)}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-secondary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Job Growth</p>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">+{career.jobGrowth.rate}%</span>
                          <Badge className={getOutlookColor(career.jobGrowth.outlook)}>
                            {career.jobGrowth.outlook}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Education</p>
                        <p className="font-semibold text-sm">{career.education.level}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-accent" />
                      <div>
                        <p className="text-sm text-muted-foreground">Time to Start</p>
                        <p className="font-semibold text-sm">{career.education.duration}</p>
                      </div>
                    </div>
                  </div>

                  {/* Why This Matches */}
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Why This Matches You
                    </h4>
                    <ul className="space-y-1">
                      {reasons.slice(0, 3).map((reason, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          {reason}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Quick Skills Preview */}
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      Key Skills Needed
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {career.keySkills.slice(0, 4).map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {career.keySkills.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{career.keySkills.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button 
                    onClick={() => onCareerSelect(career.id)}
                    className="w-full"
                    variant="hero"
                  >
                    Explore Career Path
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* No Results */}
        {recommendations.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <h3 className="text-xl font-semibold mb-4">No Strong Matches Found</h3>
              <p className="text-muted-foreground mb-6">
                We couldn't find strong career matches based on your responses. 
                Try retaking the assessment with different answers.
              </p>
              <Button onClick={onRetakeTest} variant="hero">
                Retake Assessment
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}