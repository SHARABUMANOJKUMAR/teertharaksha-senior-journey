import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, Clock, MapPin, BadgeIndianRupee, 
  Accessibility, Heart, Coffee, Shield, ArrowRight 
} from 'lucide-react';
import { Button } from "@/components/ui/button";

const TripPlannerPreview = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-yatra text-devotion-dark mb-6">
              Personalized Trip Planning for Seniors
            </h2>
            <p className="text-muted-foreground mb-6 text-lg">
              Our intelligent trip planner takes into account your mobility, medical needs, 
              and preferences to create the perfect pilgrimage experience.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <Calendar className="h-6 w-6 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="font-medium text-lg">Customized Itineraries</h3>
                  <p className="text-muted-foreground">
                    Plan visits with appropriate rest periods and senior-friendly scheduling.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <BadgeIndianRupee className="h-6 w-6 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="font-medium text-lg">Price Predictor</h3>
                  <p className="text-muted-foreground">
                    Get accurate cost estimates based on your selected services and itinerary.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="font-medium text-lg">Accessibility Mapping</h3>
                  <p className="text-muted-foreground">
                    Routes and locations optimized for ease of movement and convenience.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Shield className="h-6 w-6 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="font-medium text-lg">Safety Recommendations</h3>
                  <p className="text-muted-foreground">
                    Get personalized safety tips and emergency contact setup for your journey.
                  </p>
                </div>
              </div>
            </div>
            
            <Link to="/planner">
              <Button className="accessibility-button bg-primary hover:bg-saffron-dark text-white group">
                Plan Your Trip Now <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
          
          <div className="bg-card rounded-xl p-6 shadow-lg divine-glow relative overflow-hidden">
            <div className="absolute top-0 right-0 h-24 w-24">
              <div className="bg-primary/10 transform rotate-45 h-48 w-48 translate-x-12 -translate-y-12"></div>
            </div>
            
            <h3 className="text-2xl font-medium mb-6">Trip Customization Options</h3>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div className="flex items-center">
                  <Accessibility className="h-6 w-6 text-primary mr-3" />
                  <span className="text-lg">Wheelchair Assistance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="outline" className="rounded-full px-4">No</Button>
                  <Button size="sm" className="rounded-full px-4 bg-primary text-white">Yes</Button>
                </div>
              </div>
              
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div className="flex items-center">
                  <Heart className="h-6 w-6 text-devotion mr-3" />
                  <span className="text-lg">Personal Guide</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="outline" className="rounded-full px-4">No</Button>
                  <Button size="sm" className="rounded-full px-4 bg-primary text-white">Yes</Button>
                </div>
              </div>
              
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div className="flex items-center">
                  <Shield className="h-6 w-6 text-sacred mr-3" />
                  <span className="text-lg">Medical Assistance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="outline" className="rounded-full px-4">Basic</Button>
                  <Button size="sm" className="rounded-full px-4 bg-primary text-white">Standard</Button>
                  <Button size="sm" variant="outline" className="rounded-full px-4">Premium</Button>
                </div>
              </div>
              
              <div className="flex items-center justify-between pb-4">
                <div className="flex items-center">
                  <Coffee className="h-6 w-6 text-blessing mr-3" />
                  <span className="text-lg">Meal Preferences</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="outline" className="rounded-full px-4">Standard</Button>
                  <Button size="sm" className="rounded-full px-4 bg-primary text-white">Dietary</Button>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-border">
                <div className="flex justify-between items-center text-lg font-medium">
                  <span>Estimated Cost:</span>
                  <span className="text-xl text-primary">₹24,500 - ₹28,500</span>
                </div>
                <p className="text-muted-foreground text-sm mt-1">
                  For a 5-day journey with selected services
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TripPlannerPreview;
