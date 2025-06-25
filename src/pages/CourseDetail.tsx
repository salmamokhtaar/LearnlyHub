
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Star, Users, Clock, Play, CheckCircle, Award, Globe, Smartphone } from "lucide-react";

const CourseDetail = () => {
  const { id } = useParams();

  // Mock course data (in real app, would fetch based on id)
  const course = {
    id: 1,
    title: "Complete Web Development Bootcamp",
    instructor: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5c5?w=100&h=100&fit=crop&crop=face",
      bio: "Full-stack developer with 8+ years of experience. Former senior engineer at Google and startup founder.",
      students: 45230,
      courses: 12
    },
    rating: 4.8,
    reviews: 2150,
    students: 12453,
    duration: "40 hours",
    level: "Beginner",
    price: "$89",
    originalPrice: "$149",
    category: "Development",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
    description: "Master web development from scratch with this comprehensive bootcamp. Learn HTML, CSS, JavaScript, React, Node.js, and MongoDB to become a full-stack developer. Build real-world projects and get job-ready skills.",
    whatYouLearn: [
      "Build responsive websites using HTML5, CSS3, and JavaScript",
      "Master React.js and create dynamic web applications",
      "Learn Node.js and Express.js for backend development",
      "Work with MongoDB and database management",
      "Deploy applications to production environments",
      "Version control with Git and GitHub",
      "Modern JavaScript ES6+ features and best practices",
      "RESTful API development and integration"
    ],
    curriculum: [
      {
        title: "Getting Started with Web Development",
        lessons: 8,
        duration: "3 hours",
        content: [
          "Introduction to Web Development",
          "Setting up your development environment",
          "HTML basics and structure",
          "CSS fundamentals"
        ]
      },
      {
        title: "JavaScript Fundamentals",
        lessons: 12,
        duration: "6 hours",
        content: [
          "JavaScript basics and syntax",
          "Variables, functions, and scope",
          "DOM manipulation",
          "Event handling"
        ]
      },
      {
        title: "React.js Development",
        lessons: 15,
        duration: "8 hours",
        content: [
          "Introduction to React",
          "Components and Props",
          "State management with hooks",
          "Building a complete React app"
        ]
      },
      {
        title: "Backend Development with Node.js",
        lessons: 18,
        duration: "10 hours",
        content: [
          "Node.js fundamentals",
          "Express.js framework",
          "Database integration",
          "Authentication and security"
        ]
      },
      {
        title: "Full-Stack Project",
        lessons: 10,
        duration: "8 hours",
        content: [
          "Planning your project",
          "Frontend development",
          "Backend API creation",
          "Deployment and hosting"
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Course Header */}
      <section className="bg-gradient-soft py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                {course.category}
              </Badge>
              <h1 className="font-poppins font-bold text-4xl mb-6">{course.title}</h1>
              <p className="text-xl text-gray-600 mb-6">{course.description}</p>
              
              <div className="flex flex-wrap items-center gap-6 mb-6">
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{course.rating}</span>
                  <span className="text-gray-600">({course.reviews} reviews)</span>
                </div>
                <div className="flex items-center space-x-1 text-gray-600">
                  <Users className="w-5 h-5" />
                  <span>{course.students.toLocaleString()} students</span>
                </div>
                <div className="flex items-center space-x-1 text-gray-600">
                  <Clock className="w-5 h-5" />
                  <span>{course.duration}</span>
                </div>
                <Badge variant="outline">{course.level}</Badge>
              </div>

              <div className="flex items-center space-x-4">
                <img 
                  src={course.instructor.avatar} 
                  alt={course.instructor.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-medium">Created by {course.instructor.name}</p>
                  <p className="text-gray-600 text-sm">{course.instructor.students.toLocaleString()} students • {course.instructor.courses} courses</p>
                </div>
              </div>
            </div>

            <div>
              <Card className="border-0 shadow-xl bg-white overflow-hidden sticky top-24">
                <div className="relative">
                  <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <Button size="lg" className="bg-white/90 text-gray-900 hover:bg-white">
                      <Play className="w-5 h-5 mr-2" />
                      Preview Course
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-3xl font-bold text-primary">{course.price}</span>
                    <span className="text-gray-500 line-through">{course.originalPrice}</span>
                    <Badge className="bg-accent text-white">40% OFF</Badge>
                  </div>
                  
                  <Button className="w-full mb-4 bg-gradient-primary hover:opacity-90 transition-opacity text-lg py-6">
                    Enroll Now
                  </Button>
                  
                  <Button variant="outline" className="w-full mb-6">
                    Add to Wishlist
                  </Button>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Full lifetime access</span>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Access on mobile and TV</span>
                      <Smartphone className="w-4 h-4 text-green-500" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Certificate of completion</span>
                      <Award className="w-4 h-4 text-green-500" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {/* What You'll Learn */}
            <section className="mb-12">
              <h2 className="font-poppins font-bold text-2xl mb-6">What You'll Learn</h2>
              <Card className="border-0 shadow-lg bg-white">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {course.whatYouLearn.map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Course Curriculum */}
            <section className="mb-12">
              <h2 className="font-poppins font-bold text-2xl mb-6">Course Curriculum</h2>
              <Card className="border-0 shadow-lg bg-white">
                <CardContent className="p-6">
                  <Accordion type="single" collapsible className="w-full">
                    {course.curriculum.map((section, index) => (
                      <AccordionItem key={index} value={`section-${index}`}>
                        <AccordionTrigger className="text-left">
                          <div className="flex justify-between items-center w-full pr-4">
                            <span className="font-medium">{section.title}</span>
                            <span className="text-sm text-gray-500">
                              {section.lessons} lessons • {section.duration}
                            </span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2 pt-2">
                            {section.content.map((lesson, lessonIndex) => (
                              <div key={lessonIndex} className="flex items-center space-x-3 py-2">
                                <Play className="w-4 h-4 text-gray-400" />
                                <span className="text-gray-700">{lesson}</span>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </section>
          </div>

          {/* Instructor */}
          <div>
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6">
                <h3 className="font-poppins font-bold text-xl mb-4">Instructor</h3>
                <div className="text-center mb-4">
                  <img 
                    src={course.instructor.avatar} 
                    alt={course.instructor.name}
                    className="w-20 h-20 rounded-full mx-auto mb-3"
                  />
                  <h4 className="font-poppins font-semibold text-lg">{course.instructor.name}</h4>
                  <p className="text-gray-600">Full-Stack Developer & Instructor</p>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Students</span>
                    <span className="font-medium">{course.instructor.students.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Courses</span>
                    <span className="font-medium">{course.instructor.courses}</span>
                  </div>
                </div>
                
                <p className="text-gray-700 text-sm">{course.instructor.bio}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
