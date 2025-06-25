
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Star, Users, Clock, ChevronLeft, ChevronRight } from "lucide-react";

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 9;

  const courses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      instructor: "Sarah Johnson",
      rating: 4.8,
      students: 12453,
      duration: "40 hours",
      level: "Beginner",
      price: "$89",
      category: "Development",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "UI/UX Design Masterclass",
      instructor: "Mike Chen",
      rating: 4.9,
      students: 8765,
      duration: "25 hours",
      level: "Intermediate",
      price: "$79",
      category: "Design",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Digital Marketing Strategy",
      instructor: "Emma Davis",
      rating: 4.7,
      students: 5432,
      duration: "30 hours",
      level: "Beginner",
      price: "$65",
      category: "Business",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "Python for Data Science",
      instructor: "John Smith",
      rating: 4.6,
      students: 9876,
      duration: "45 hours",
      level: "Intermediate",
      price: "$95",
      category: "Development",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      title: "Mobile App Design",
      instructor: "Lisa Wong",
      rating: 4.8,
      students: 6543,
      duration: "20 hours",
      level: "Beginner",
      price: "$55",
      category: "Design",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      title: "Business Analytics",
      instructor: "Robert Garcia",
      rating: 4.5,
      students: 4321,
      duration: "35 hours",
      level: "Advanced",
      price: "$110",
      category: "Business",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop"
    }
  ];

  const totalPages = Math.ceil(courses.length / coursesPerPage);
  const startIndex = (currentPage - 1) * coursesPerPage;
  const endIndex = startIndex + coursesPerPage;
  const currentCourses = courses.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-soft py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-poppins font-bold text-5xl text-center mb-6">
            Explore <span className="gradient-text">Courses</span>
          </h1>
          <p className="text-xl text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Discover our comprehensive collection of courses designed to help you master new skills
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg rounded-2xl border-2 border-transparent focus:border-primary transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar */}
          <div className="lg:w-1/4">
            <Card className="border-0 shadow-lg bg-white sticky top-24">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <Filter className="w-5 h-5 mr-2 text-primary" />
                  <h3 className="font-poppins font-semibold text-lg">Filters</h3>
                </div>
                
                <div className="space-y-6">
                  {/* Category Filter */}
                  <div>
                    <label className="font-medium text-gray-700 mb-2 block">Category</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="All Categories" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="development">Development</SelectItem>
                        <SelectItem value="design">Design</SelectItem>
                        <SelectItem value="business">Business</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Level Filter */}
                  <div>
                    <label className="font-medium text-gray-700 mb-2 block">Level</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="All Levels" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Levels</SelectItem>
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Price Filter */}
                  <div>
                    <label className="font-medium text-gray-700 mb-2 block">Price</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="All Prices" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Prices</SelectItem>
                        <SelectItem value="free">Free</SelectItem>
                        <SelectItem value="paid">Paid</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Duration Filter */}
                  <div>
                    <label className="font-medium text-gray-700 mb-2 block">Duration</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Any Duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Any Duration</SelectItem>
                        <SelectItem value="short">0-10 hours</SelectItem>
                        <SelectItem value="medium">10-30 hours</SelectItem>
                        <SelectItem value="long">30+ hours</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity">
                    Apply Filters
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Courses Grid */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-8">
              <p className="text-gray-600">Showing {courses.length} courses</p>
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by Popularity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popularity">Sort by Popularity</SelectItem>
                  <SelectItem value="rating">Sort by Rating</SelectItem>
                  <SelectItem value="price">Sort by Price</SelectItem>
                  <SelectItem value="newest">Sort by Newest</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {currentCourses.map((course) => (
                <Card key={course.id} className="hover-scale cursor-pointer border-0 shadow-lg bg-white overflow-hidden">
                  <div className="relative">
                    <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                    <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-lg text-sm font-semibold text-primary">
                      {course.price}
                    </div>
                    <Badge className="absolute top-3 left-3 bg-white text-gray-700 hover:bg-white">
                      {course.category}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-poppins font-semibold text-lg mb-2 line-clamp-2">{course.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">by {course.instructor}</p>
                    
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{course.rating}</span>
                      </div>
                      <Badge variant="outline">{course.level}</Badge>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{course.students.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
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

            {/* Pagination */}
            <div className="flex justify-center items-center space-x-4 mt-12">
              <Button
                variant="outline"
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>
              
              <div className="flex space-x-2">
                {[...Array(totalPages)].map((_, i) => (
                  <Button
                    key={i + 1}
                    variant={currentPage === i + 1 ? "default" : "outline"}
                    onClick={() => setCurrentPage(i + 1)}
                    className={currentPage === i + 1 ? "bg-gradient-primary" : ""}
                  >
                    {i + 1}
                  </Button>
                ))}
              </div>
              
              <Button
                variant="outline"
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
