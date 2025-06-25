
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Code, Palette, Briefcase, Star, Users, Trophy, Heart } from "lucide-react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { name: "Development", icon: Code, color: "bg-blue-100 text-blue-600", courses: "120+ Courses" },
    { name: "Design", icon: Palette, color: "bg-pink-100 text-pink-600", courses: "85+ Courses" },
    { name: "Business", icon: Briefcase, color: "bg-green-100 text-green-600", courses: "95+ Courses" },
  ];

  const featuredCourses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      instructor: "Sarah Johnson",
      rating: 4.8,
      students: 12453,
      price: "$89",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "UI/UX Design Masterclass",
      instructor: "Mike Chen",
      rating: 4.9,
      students: 8765,
      price: "$79",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Digital Marketing Strategy",
      instructor: "Emma Davis",
      rating: 4.7,
      students: 5432,
      price: "$65",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop"
    },
  ];

  const testimonials = [
    {
      name: "Alex Rodriguez",
      role: "Software Developer",
      content: "Learnly transformed my career. The courses are practical and well-structured.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Jessica Kim",
      role: "UX Designer",
      content: "Amazing platform with top-notch instructors. Highly recommend!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5c5?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "David Thompson",
      role: "Marketing Manager",
      content: "The courses here helped me advance in my marketing career significantly.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-soft py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-poppins font-bold text-5xl md:text-6xl mb-6 animate-fade-in">
            Learn <span className="gradient-text">Anything</span>, Anytime
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in">
            Discover world-class courses from expert instructors and transform your skills with our interactive learning platform.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12 animate-scale-in">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="What do you want to learn today?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 text-lg rounded-2xl border-2 border-transparent focus:border-primary transition-colors"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-primary hover:opacity-90 transition-opacity">
                Search
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <span>Popular searches:</span>
            <span className="bg-white px-3 py-1 rounded-full hover:bg-primary hover:text-white cursor-pointer transition-colors">JavaScript</span>
            <span className="bg-white px-3 py-1 rounded-full hover:bg-primary hover:text-white cursor-pointer transition-colors">Python</span>
            <span className="bg-white px-3 py-1 rounded-full hover:bg-primary hover:text-white cursor-pointer transition-colors">UI Design</span>
            <span className="bg-white px-3 py-1 rounded-full hover:bg-primary hover:text-white cursor-pointer transition-colors">Marketing</span>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-poppins font-bold text-4xl text-center mb-16">
            Explore <span className="gradient-text">Categories</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Card key={category.name} className="hover-scale cursor-pointer border-0 shadow-lg bg-gradient-card">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <category.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-poppins font-semibold text-xl mb-2">{category.name}</h3>
                  <p className="text-gray-600">{category.courses}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl mb-4">
              Featured <span className="gradient-text">Courses</span>
            </h2>
            <p className="text-gray-600 text-lg">Handpicked courses from our top instructors</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <Card key={course.id} className="hover-scale cursor-pointer border-0 shadow-lg bg-white overflow-hidden">
                <div className="relative">
                  <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                  <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-lg text-sm font-semibold text-primary">
                    {course.price}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-poppins font-semibold text-lg mb-2 line-clamp-2">{course.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">by {course.instructor}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-500">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{course.students.toLocaleString()}</span>
                    </div>
                  </div>
                  <Link to={`/course/${course.id}`}>
                    <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity">
                      Enroll Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/courses">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                View All Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-poppins font-bold text-4xl text-center mb-16">
            What Our <span className="gradient-text">Students</span> Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-poppins font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.content}"</p>
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 px-4 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Trophy className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h2 className="font-poppins font-bold text-4xl mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of students who have transformed their careers with Learnly
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              Browse Courses
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Start Free Trial
            </Button>
          </div>
          <div className="flex items-center justify-center mt-8 space-x-8 text-sm opacity-80">
            <div className="flex items-center space-x-2">
              <Heart className="w-4 h-4" />
              <span>50k+ Happy Students</span>
            </div>
            <div className="flex items-center space-x-2">
              <Trophy className="w-4 h-4" />
              <span>300+ Courses</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>Expert Instructors</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
