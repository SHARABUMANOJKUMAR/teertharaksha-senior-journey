
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Accessibility, Stethoscope, MapPin, Heart, 
  Coffee, Clock, Phone, Shield, Car, Users, 
  Utensils, Info, AlertCircle, BookOpen
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Services = () => {
  const allServices = [
    {
      icon: <Accessibility className="w-10 h-10 text-primary" />,
      title: "Wheelchair Assistance",
      description: "Wheelchair rentals and helpers for smooth movement around temple premises. Our wheelchairs are designed for comfort and easy navigation.",
      category: "Mobility"
    },
    {
      icon: <Stethoscope className="w-10 h-10 text-devotion" />,
      title: "Medical Support",
      description: "Emergency medical services with on-call doctors for immediate assistance. Regular health check-ups available at major temples.",
      category: "Health"
    },
    {
      icon: <Heart className="w-10 h-10 text-primary" />,
      title: "Personal Guide",
      description: "Knowledgeable guides specialized in senior care and temple history, ensuring a meaningful and stress-free spiritual experience.",
      category: "Assistance"
    },
    {
      icon: <Car className="w-10 h-10 text-sacred" />,
      title: "Accessible Transportation",
      description: "Senior-friendly vehicles with ramps, comfortable seating and regular breaks. Door-to-door pick-up and drop services available.",
      category: "Transport"
    },
    {
      icon: <Coffee className="w-10 h-10 text-blessing" />,
      title: "Hygienic Restaurants",
      description: "Carefully selected dining options that maintain high standards of cleanliness and offer senior-friendly menus with dietary options.",
      category: "Food"
    },
    {
      icon: <Shield className="w-10 h-10 text-devotion" />,
      title: "Safety Monitoring",
      description: "Continuous monitoring with emergency response for peace of mind. GPS tracking and emergency alerts for family members.",
      category: "Safety"
    },
    {
      icon: <Utensils className="w-10 h-10 text-primary" />,
      title: "Special Diet Management",
      description: "Assistance with special dietary requirements including diabetic-friendly, low-sodium, and other health-specific meal plans.",
      category: "Food"
    },
    {
      icon: <MapPin className="w-10 h-10 text-sacred" />,
      title: "Location Tracking",
      description: "Real-time location tracking for family members to monitor their loved ones throughout the pilgrimage journey.",
      category: "Safety"
    },
    {
      icon: <Users className="w-10 h-10 text-blessing" />,
      title: "Group Activities",
      description: "Organized group activities and social gatherings for senior pilgrims to enhance their spiritual and social experience.",
      category: "Social"
    },
    {
      icon: <Phone className="w-10 h-10 text-devotion" />,
      title: "24/7 Helpline",
      description: "Round-the-clock helpline services with multilingual support for any assistance or emergency during temple visits.",
      category: "Assistance"
    },
    {
      icon: <BookOpen className="w-10 h-10 text-primary" />,
      title: "Cultural Interpretation",
      description: "Expert cultural interpretation of temple rituals, architecture and spiritual significance for a deeper understanding.",
      category: "Education"
    },
    {
      icon: <AlertCircle className="w-10 h-10 text-sacred" />,
      title: "Emergency Response",
      description: "Immediate emergency response team available at all major pilgrimage sites for critical situations.",
      category: "Health"
    },
  ];

  // Group services by category
  const categories = [...new Set(allServices.map(service => service.category))];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-yatra text-center text-devotion-dark mb-6">
              Our Comprehensive Services
            </h1>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
              TEERTHARAKSHA provides a range of specialized services designed specifically for senior pilgrims,
              ensuring comfort, safety, and a fulfilling spiritual experience.
            </p>

            {categories.map(category => (
              <div key={category} className="mb-12">
                <h2 className="text-2xl font-yatra text-devotion mb-6 border-b pb-2">
                  {category} Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {allServices
                    .filter(service => service.category === category)
                    .map((service, index) => (
                      <Card key={index} className="h-full flex flex-col">
                        <CardContent className="p-6 flex-grow">
                          <div className="flex items-center mb-4">
                            <div className="p-3 rounded-full bg-muted mr-4">
                              {service.icon}
                            </div>
                            <h3 className="text-xl font-medium">{service.title}</h3>
                          </div>
                          <p className="text-muted-foreground">{service.description}</p>
                        </CardContent>
                        <CardFooter className="border-t pt-4 px-6 pb-6">
                          <Badge className="bg-muted text-foreground">{service.category}</Badge>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
