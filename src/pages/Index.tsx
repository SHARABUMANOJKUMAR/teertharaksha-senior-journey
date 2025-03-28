import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, Accessibility, Calendar, Phone, 
  Heart, Shield, Coffee, Stethoscope, MessageSquare, 
  Clock, LocateFixed, Mic, BadgeIndianRupee
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TempleShowcase from "@/components/TempleShowcase";
import FeaturedServices from "@/components/FeaturedServices";
import TestimonialSection from "@/components/TestimonialSection";
import TripPlannerPreview from "@/components/TripPlannerPreview";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-temple.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-yatra text-devotion-dark mb-6 temple-animation">
              Safe Temple Tours for Senior Citizens
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
              Plan your divine journey with accessibility, comfort, and personalized care for the elderly.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/planner">
                <Button className="accessibility-button bg-primary hover:bg-saffron-dark text-white text-lg px-8 py-4">
                  Plan Your Journey
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" className="accessibility-button text-lg px-8 py-4">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Features Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-yatra text-center mb-12">
            Senior-Friendly Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white sacred-float">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="rounded-full bg-sacred/10 p-4 mb-4">
                  <Accessibility className="h-10 w-10 text-sacred" />
                </div>
                <h3 className="text-xl font-medium mb-2">Wheelchair Facilities</h3>
                <p className="text-muted-foreground">
                  Easy accessibility with wheelchair ramps and assistance at all temples.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white sacred-float">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="rounded-full bg-blessing/10 p-4 mb-4">
                  <Coffee className="h-10 w-10 text-blessing" />
                </div>
                <h3 className="text-xl font-medium mb-2">Hygienic Restaurants</h3>
                <p className="text-muted-foreground">
                  Clean, senior-friendly dining options with dietary accommodations.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white sacred-float">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="rounded-full bg-devotion/10 p-4 mb-4">
                  <Stethoscope className="h-10 w-10 text-devotion" />
                </div>
                <h3 className="text-xl font-medium mb-2">Medical Assistance</h3>
                <p className="text-muted-foreground">
                  Emergency medical support and access to doctors during your journey.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white sacred-float">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="rounded-full bg-saffron/10 p-4 mb-4">
                  <Heart className="h-10 w-10 text-saffron" />
                </div>
                <h3 className="text-xl font-medium mb-2">Personal Guide</h3>
                <p className="text-muted-foreground">
                  Knowledgeable guides who understand senior needs and temple history.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* AI Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-yatra text-center mb-12">
            Smart Technology for Your Journey
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card shadow hover:shadow-lg transition duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="rounded-full bg-primary/10 p-4 mb-4">
                  <MessageSquare className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Live AI Chatbot</h3>
                <p className="text-muted-foreground mb-4">
                  Instant answers to your questions and virtual assistance, available 24/7.
                </p>
                <Link to="/chatbot">
                  <Button variant="outline" className="mt-auto">Try Now</Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="bg-card shadow hover:shadow-lg transition duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="rounded-full bg-sacred/10 p-4 mb-4">
                  <Mic className="h-10 w-10 text-sacred" />
                </div>
                <h3 className="text-xl font-medium mb-2">Voice Assistance</h3>
                <p className="text-muted-foreground mb-4">
                  Speak naturally to access information and control the app hands-free.
                </p>
                <Button variant="outline" className="mt-auto">Activate Voice</Button>
              </CardContent>
            </Card>
            
            <Card className="bg-card shadow hover:shadow-lg transition duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="rounded-full bg-blessing/10 p-4 mb-4">
                  <LocateFixed className="h-10 w-10 text-blessing" />
                </div>
                <h3 className="text-xl font-medium mb-2">Live Location Tracking</h3>
                <p className="text-muted-foreground mb-4">
                  Real-time location sharing and navigation tailored for senior pilgrims.
                </p>
                <Link to="/tracking">
                  <Button variant="outline" className="mt-auto">View Demo</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Temple Showcase Component */}
      <TempleShowcase />
      
      {/* Featured Services Component */}
      <FeaturedServices />
      
      {/* Trip Planner Preview */}
      <TripPlannerPreview />
      
      {/* Testimonial Section */}
      <TestimonialSection />
      
      {/* CTA Section */}
      <section className="py-16 bg-devotion text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-yatra mb-6">Ready to Begin Your Sacred Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let us help you plan a comfortable, accessible, and spiritually fulfilling pilgrimage experience.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/planner">
              <Button className="accessibility-button bg-white text-devotion hover:bg-gray-100">
                Start Planning
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="accessibility-button border-white text-white hover:bg-white/10">
                <Phone className="mr-2 h-5 w-5" /> Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
