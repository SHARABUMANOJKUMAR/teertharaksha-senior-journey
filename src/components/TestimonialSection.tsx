
import React from 'react';
import { Star } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Ramesh Sharma",
      age: 72,
      location: "Delhi",
      rating: 5,
      text: "The wheelchair assistance made it possible for me to visit Tirupati after 20 years. The guide was incredibly patient and caring. Thank you for making this spiritual journey accessible.",
      image: "/testimonials/person1.jpg"
    },
    {
      name: "Lakshmi Iyer",
      age: 68,
      location: "Chennai",
      rating: 5,
      text: "I was worried about my medical condition during the trip, but the 24/7 medical support put my mind at ease. The hygienic food options were perfect for my dietary restrictions.",
      image: "/testimonials/person2.jpg"
    },
    {
      name: "Mohan Patel",
      age: 75,
      location: "Ahmedabad",
      rating: 4,
      text: "The AI assistant answered all our questions instantly. The location tracking feature helped my family keep track of our journey. Very thoughtful service for seniors like us.",
      image: "/testimonials/person3.jpg"
    },
    {
      name: "Sarla Gupta",
      age: 70,
      location: "Jaipur",
      rating: 5,
      text: "Our guide knew exactly when I needed rest and arranged everything beautifully. The voice assistance feature made planning so much easier for someone who isn't tech-savvy.",
      image: "/testimonials/person4.jpg"
    },
  ];

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`h-5 w-5 ${i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-yatra text-devotion-dark mb-4">
            What Our Senior Pilgrims Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from senior citizens who experienced our services during their spiritual journeys.
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full bg-white">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="rounded-full w-16 h-16 overflow-hidden bg-muted">
                        {testimonial.image ? (
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-primary/10 text-primary font-medium">
                            {testimonial.name.charAt(0)}
                          </div>
                        )}
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">{testimonial.name}</h3>
                        <p className="text-muted-foreground text-sm">
                          {testimonial.age} years, {testimonial.location}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex mb-4">
                      {renderStars(testimonial.rating)}
                    </div>
                    
                    <p className="text-muted-foreground flex-grow">"{testimonial.text}"</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="senior-touch-target mr-4" />
            <CarouselNext className="senior-touch-target" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialSection;
