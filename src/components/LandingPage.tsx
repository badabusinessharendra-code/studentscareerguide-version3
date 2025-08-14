import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Target, 
  TrendingUp, 
  Users, 
  BookOpen,
  CheckCircle,
  Star,
  Compass,
  Brain,
  BarChart3
} from "lucide-react";
import heroImage from "@/assets/hero-career.jpg";

interface LandingPageProps {
  onStartTest: () => void;
  onGovernmentHub?: () => void;
}

export default function LandingPage({ onStartTest, onGovernmentHub }: LandingPageProps) {
  const features = [
    {
      icon: Brain,
      title: "Personality Assessment",
      description: "Take our comprehensive career assessment to discover your strengths and preferences"
    },
    {
      icon: Target,
      title: "Personalized Recommendations",
      description: "Get 2-3 tailored career suggestions based on your unique profile and interests"
    },
    {
      icon: BarChart3,
      title: "Data-Driven Insights",
      description: "Access real salary data, job growth trends, and market demand for each career"
    },
    {
      icon: Compass,
      title: "Step-by-Step Roadmaps",
      description: "Follow clear career paths from beginner to professional with actionable steps"
    }
  ];

  const benefits = [
    "Discover careers that match your personality",
    "Compare salary and growth potential",
    "Get learning resources and certification paths", 
    "Build confidence in your career decisions",
    "Save time with curated career information"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-br from-background via-primary-muted/20 to-secondary-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <Badge variant="secondary" className="mb-4 px-4 py-2">
                ✨ Discover Your Perfect Career Path
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Career Navigator
                </span>
                <br />
                <span className="text-foreground">Your Personalized Career Guide</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Take our AI-powered assessment to discover careers that match your personality, 
                interests, and goals. Get detailed roadmaps, salary insights, and learning resources 
                to make confident career decisions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  onClick={onStartTest}
                  variant="hero"
                  size="lg"
                  className="text-lg px-8 py-6"
                >
                  Start Career Assessment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                
                {onGovernmentHub && (
                  <Button 
                    onClick={onGovernmentHub}
                    variant="secondary"
                    size="lg"
                    className="text-lg px-8 py-6"
                  >
                    🏛️ Government Jobs Hub
                  </Button>
                )}
                
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  Learn More
                </Button>
              </div>

              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  Free to use
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  5-minute assessment
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  Instant results
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src={heroImage} 
                alt="Career guidance and professional development"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How Career Navigator Works</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive platform guides you through every step of career discovery 
              with personalized insights and actionable recommendations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gradient-card shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Make Informed Career Decisions
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Don't leave your career to chance. Get the insights and guidance 
                you need to choose a path that aligns with your strengths and goals.
              </p>

              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button 
                onClick={onStartTest}
                variant="hero"
                size="lg"
                className="text-lg px-8 py-6"
              >
                Get Started Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <Card className="bg-gradient-card shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-4">What You'll Get</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">2-3 Career Matches</h3>
                    <p className="text-sm text-muted-foreground">Tailored to your personality</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Salary & Growth Data</h3>
                    <p className="text-sm text-muted-foreground">Real market insights</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Learning Roadmap</h3>
                    <p className="text-sm text-muted-foreground">Step-by-step career path</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Resources & Courses</h3>
                    <p className="text-sm text-muted-foreground">Curated learning materials</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Discover Your Perfect Career?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of students and professionals who've found their ideal career path.
          </p>
          
          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-accent fill-current" />
              <span className="font-semibold">4.8/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              <span className="font-semibold">50K+ Users</span>
            </div>
          </div>

          <Button 
            onClick={onStartTest}
            variant="hero"
            size="lg"
            className="text-xl px-12 py-8"
          >
            Start Your Career Journey
            <ArrowRight className="w-6 h-6 ml-3" />
          </Button>
        </div>
      </section>
    </div>
  );
}