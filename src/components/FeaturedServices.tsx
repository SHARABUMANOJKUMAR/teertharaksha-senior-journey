
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Accessibility, Stethoscope, MapPin, Heart, 
  Coffee, Clock, Phone, Shield, Car
} from 'lucide-react';
import { Button } from "@/components/ui/button";

const FeaturedServices = () => {
  const services = [
    {
      icon: <Accessibility className="w-12 h-12 text-primary" />,
      title: "Wheelchair Assistance",
      description: "Wheelchair rentals and helpers for smooth movement around temple premises."
    },
    {
      icon: <Stethoscope className="w-12 h-12 text-devotion" />,
      title: "Medical Support",
      description: "Emergency medical services with on-call doctors for immediate assistance."
    },
    {
      icon: <Heart className="w-12 h-12 text-primary" />,
      title: "Personal Guide",
      description: "Knowledgeable guides specialized in senior care and temple history."
    },
    {
      icon: <Car className="w-12 h-12 text-sacred" />,
      title: "Accessible Transportation",
      description: "Senior-friendly vehicles with ramps, comfortable seating and regular breaks."
    },
    {
      icon: <Coffee className="w-12 h-12 text-blessing" />,
      title: "Hygienic Restaurants",
      description: "Carefully selected dining options that maintain high standards of cleanliness."
    },
    {
      icon: <Shield className="w-12 h-12 text-devotion" />,
      title: "Safety Monitoring",
      description: "Continuous monitoring with emergency response for peace of mind."
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-yatra text-devotion-dark mb-4">
            Specialized Services for Senior Pilgrims
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Our comprehensive services are designed keeping in mind the unique needs of senior citizens during temple visits.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className="mx-auto mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-medium mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/services">
            <Button className="accessibility-button bg-primary hover:bg-saffron-dark text-white">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
