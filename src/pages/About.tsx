
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Users, Trophy, Heart, BookOpen, Globe, Award, Zap } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5c5?w=200&h=200&fit=crop&crop=face",
      bio: "Former Google engineer with a passion for education and technology."
    },
    {
      name: "Mike Chen",
      role: "CTO",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      bio: "Full-stack developer and architect with 10+ years in tech education."
    },
    {
      name: "Emma Davis",
      role: "Head of Content",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
      bio: "Educational content specialist with expertise in curriculum design."
    },
    {
      name: "David Wilson",
      role: "Lead Designer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      bio: "UX/UI designer focused on creating intuitive learning experiences."
    }
  ];

  const milestones = [
    {
      year: "2019",
      title: "Company Founded",
      description: "Learnly was born with a mission to democratize education worldwide.",
      icon: Zap
    },
    {
      year: "2020",
      title: "First 1,000 Students",
      description: "Reached our first milestone with students from over 50 countries.",
      icon: Users
    },
    {
      year: "2021",
      title: "Platform Launch",
      description: "Launched our comprehensive learning platform with 50+ courses.",
      icon: BookOpen
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Expanded to serve learners in over 100 countries worldwide.",
      icon: Globe
    },
    {
      year: "2023",
      title: "50K+ Students",
      description: "Celebrated reaching 50,000+ active learners on our platform.",
      icon: Trophy
    },
    {
      year: "2024",
      title: "Industry Recognition",
      description: "Received the 'Best EdTech Platform' award from TechEd Awards.",
      icon: Award
    }
  ];

  const stats = [
    { number: "50,000+", label: "Happy Students", icon: Users },
    { number: "300+", label: "Expert Courses", icon: BookOpen },
    { number: "100+", label: "Countries", icon: Globe },
    { number: "95%", label: "Success Rate", icon: Trophy }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-soft py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-poppins font-bold text-5xl mb-6">
            About <span className="gradient-text">Learnly</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We're on a mission to make quality education accessible to everyone, everywhere. 
            Join us in transforming the way the world learns.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="font-poppins font-bold text-3xl">Our Mission</h2>
              </div>
              <p className="text-gray-700 text-lg mb-6">
                At Learnly, we believe that everyone deserves access to high-quality education, 
                regardless of their location, background, or circumstances. We're building a platform 
                that breaks down barriers and connects learners with world-class instructors.
              </p>
              <p className="text-gray-700 text-lg">
                Our goal is to empower individuals to acquire new skills, advance their careers, 
                and pursue their passions through engaging, practical, and affordable online learning.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop" 
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Heart className="w-8 h-8 text-accent" />
                  <div>
                    <p className="font-bold text-2xl text-primary">50K+</p>
                    <p className="text-gray-600 text-sm">Lives Changed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-poppins font-bold text-3xl text-center mb-16">
            Our <span className="gradient-text">Impact</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="border-0 shadow-lg bg-gradient-card text-center hover-scale">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-poppins font-bold text-3xl mb-2">{stat.number}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-poppins font-bold text-3xl text-center mb-16">
            Meet Our <span className="gradient-text">Team</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white hover-scale">
                <CardContent className="p-6 text-center">
                  <img 
                    src={member.avatar} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4"
                  />
                  <h3 className="font-poppins font-semibold text-lg mb-1">{member.name}</h3>
                  <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/20">
                    {member.role}
                  </Badge>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-poppins font-bold text-3xl text-center mb-16">
            Our <span className="gradient-text">Journey</span>
          </h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-2">
                    <milestone.icon className="w-6 h-6 text-white" />
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-20 bg-gray-300"></div>
                  )}
                </div>
                <Card className="flex-1 border-0 shadow-lg bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-2">
                      <Badge className="mr-3 bg-accent/10 text-accent hover:bg-accent/20">
                        {milestone.year}
                      </Badge>
                      <h3 className="font-poppins font-semibold text-lg">{milestone.title}</h3>
                    </div>
                    <p className="text-gray-600">{milestone.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-poppins font-bold text-4xl mb-6">
            Ready to Join Our Learning Community?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Be part of a global community of learners and start your educational journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary font-semibold px-8 py-4 rounded-2xl hover:bg-gray-100 transition-colors">
              Browse Courses
            </button>
            <button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-2xl hover:bg-white hover:text-primary transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
