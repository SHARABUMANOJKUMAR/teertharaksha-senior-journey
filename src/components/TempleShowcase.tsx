
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Accessibility, Calendar, Clock, Shield } from 'lucide-react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const TempleShowcase = () => {
  // Updated temple data with direct image URLs
  const temples = [
    {
      id: 1,
      name: "Tirupati Balaji Temple",
      location: "Andhra Pradesh",
      image: "https://www.cottage9.com/wp-content/uploads/2021/04/IMG_20190203_090729-1024x768.jpg",
      description: "One of the most visited religious sites in the world, dedicated to Lord Venkateswara.",
      features: ["Wheelchair Access", "Medical Center", "Senior Queue"],
      accessibility: 4.5,
    },
    {
      id: 2,
      name: "Varanasi Kashi Vishwanath",
      location: "Uttar Pradesh",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Ahilya_Ghat_by_the_Ganges%2C_Varanasi.jpg/1200px-Ahilya_Ghat_by_the_Ganges%2C_Varanasi.jpg",
      description: "Sacred temple on the banks of the Ganges, dedicated to Lord Shiva.",
      features: ["Wheelchair Access", "Rest Areas", "Assisted Darshan"],
      accessibility: 4.0,
    },
    {
      id: 3,
      name: "Golden Temple",
      location: "Amritsar, Punjab",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Golden_Temple_Reflection.jpg/1200px-Golden_Temple_Reflection.jpg",
      description: "The holiest gurdwara and an important pilgrimage site for Sikhs.",
      features: ["Wheelchair Access", "Free Meals", "Senior Facilities"],
      accessibility: 4.8,
    },
    {
      id: 4,
      name: "Meenakshi Temple",
      location: "Madurai, Tamil Nadu",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Madurai_Meenakshi_Amman_Temple.jpg/1200px-Madurai_Meenakshi_Amman_Temple.jpg",
      description: "Historic Hindu temple dedicated to Goddess Meenakshi and Lord Sundareswar.",
      features: ["Special Entry", "Rest Areas", "Guide Service"],
      accessibility: 3.9,
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-yatra text-devotion-dark mb-2">
              Popular Temple Destinations
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Explore these senior-friendly sacred sites with enhanced accessibility features.
            </p>
          </div>
          <Link to="/temples" className="mt-4 md:mt-0">
            <Button variant="outline" className="group">
              View All Temples 
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {temples.map((temple) => (
            <Card key={temple.id} className="temple-card overflow-hidden h-full flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gray-800 opacity-40"></div>
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${temple.image || '/placeholder.svg'})` }}
                ></div>
                <div className="absolute top-3 right-3">
                  <Badge className="bg-blessing text-white">
                    <Accessibility className="mr-1 h-3 w-3" /> 
                    {temple.accessibility.toFixed(1)}/5
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-5 flex-grow">
                <h3 className="text-xl font-medium mb-1">{temple.name}</h3>
                <p className="text-muted-foreground text-sm mb-3">{temple.location}</p>
                <p className="text-muted-foreground mb-4">{temple.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-2">
                  {temple.features.map((feature, index) => (
                    <Badge key={index} variant="outline" className="bg-muted">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="p-5 pt-0">
                <Link to={`/temples/${temple.id}`} className="w-full">
                  <Button className="w-full">View Details</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TempleShowcase;
