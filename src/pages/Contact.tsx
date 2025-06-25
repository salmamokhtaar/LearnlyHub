
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, HelpCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "support@learnly.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Mon-Fri, 9AM-6PM EST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Education St, Learning City, LC 12345",
      description: "Our headquarters"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Monday - Friday: 9AM - 6PM EST",
      description: "Weekend support available"
    }
  ];

  const faqs = [
    {
      question: "How do I enroll in a course?",
      answer: "Simply browse our course catalog, select the course you're interested in, and click 'Enroll Now'. You'll be guided through the payment process and gain instant access to the course materials."
    },
    {
      question: "Can I access courses on mobile devices?",
      answer: "Yes! Our platform is fully responsive and works seamlessly on all devices including smartphones, tablets, and desktops. You can learn anywhere, anytime."
    },
    {
      question: "Do you offer certificates upon completion?",
      answer: "Absolutely! Upon successfully completing a course, you'll receive a certificate of completion that you can add to your LinkedIn profile or resume."
    },
    {
      question: "What if I'm not satisfied with a course?",
      answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied with your course within 30 days of purchase, we'll provide a full refund."
    },
    {
      question: "Are there any prerequisites for courses?",
      answer: "Prerequisites vary by course and are clearly listed on each course page. Most beginner courses have no prerequisites, while advanced courses may require prior knowledge."
    },
    {
      question: "How long do I have access to course content?",
      answer: "Once you enroll in a course, you have lifetime access to all course materials, including any future updates to the content."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-soft py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-poppins font-bold text-5xl mb-6">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="border-0 shadow-xl bg-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <MessageCircle className="w-6 h-6 text-primary mr-3" />
                  <h2 className="font-poppins font-bold text-2xl">Send us a Message</h2>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="border-2 border-gray-200 focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="border-2 border-gray-200 focus:border-primary transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      className="border-2 border-gray-200 focus:border-primary transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      className="border-2 border-gray-200 focus:border-primary transition-colors resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary hover:opacity-90 transition-opacity text-lg py-6"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="font-poppins font-bold text-2xl mb-6">Contact Information</h2>
              <div className="grid grid-cols-1 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-0 shadow-lg bg-white hover-scale">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-poppins font-semibold text-lg mb-1">{info.title}</h3>
                          <p className="text-gray-900 font-medium mb-1">{info.content}</p>
                          <p className="text-gray-600 text-sm">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <Card className="border-0 shadow-lg bg-white overflow-hidden">
              <div className="h-64 bg-gradient-soft flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                  <p className="text-gray-600">Interactive Map</p>
                  <p className="text-gray-500 text-sm">Find us at our headquarters</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <HelpCircle className="w-8 h-8 text-primary mr-3" />
              <h2 className="font-poppins font-bold text-3xl">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
            </div>
            <p className="text-gray-600 text-lg">Find quick answers to common questions</p>
          </div>
          
          <Card className="border-0 shadow-xl bg-white max-w-4xl mx-auto">
            <CardContent className="p-8">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="text-left font-medium hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Contact;
