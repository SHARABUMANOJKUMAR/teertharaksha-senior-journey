import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { 
  Calendar, Clock, Accessibility, Heart, Shield, Coffee, 
  Plus, Minus, BadgeIndianRupee, ArrowRight, Check, MapPin, Home
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { 
  Card, 
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle 
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';

const TripPlanner = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [tripData, setTripData] = useState({
    destination: "",
    duration: 5,
    travelers: 2,
    startDate: "",
    wheelchair: false,
    personalGuide: false,
    medicalAssistance: "standard",
    mealPreference: "regular",
    accommodation: "standard",
  });
  
  const [estimatedPrice, setEstimatedPrice] = useState({
    min: 20000,
    max: 25000
  });

  const handleCheckboxChange = (field: string) => {
    setTripData({
      ...tripData,
      [field]: !tripData[field as keyof typeof tripData]
    });
    
    recalculatePrice();
  };
  
  const handleSelectChange = (field: string, value: string) => {
    setTripData({
      ...tripData,
      [field]: value
    });
    
    recalculatePrice();
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTripData({
      ...tripData,
      [name]: value
    });
  };
  
  const incrementValue = (field: 'duration' | 'travelers') => {
    setTripData({
      ...tripData,
      [field]: Number(tripData[field]) + 1
    });
    
    recalculatePrice();
  };
  
  const decrementValue = (field: 'duration' | 'travelers') => {
    if (Number(tripData[field]) > 1) {
      setTripData({
        ...tripData,
        [field]: Number(tripData[field]) - 1
      });
      
      recalculatePrice();
    }
  };
  
  const recalculatePrice = () => {
    let basePrice = 5000 * Number(tripData.duration);
    
    basePrice *= Number(tripData.travelers);
    
    const servicesCost = 
      (tripData.wheelchair ? 2000 : 0) +
      (tripData.personalGuide ? 3000 * Number(tripData.duration) : 0);
    
    let medicalCost = 0;
    switch(tripData.medicalAssistance) {
      case "basic":
        medicalCost = 1000;
        break;
      case "standard":
        medicalCost = 3000;
        break;
      case "premium":
        medicalCost = 6000;
        break;
    }
    
    let accommodationFactor = 1;
    switch(tripData.accommodation) {
      case "budget":
        accommodationFactor = 0.8;
        break;
      case "standard":
        accommodationFactor = 1;
        break;
      case "premium":
        accommodationFactor = 1.5;
        break;
    }
    
    const totalPrice = (basePrice + servicesCost + medicalCost) * accommodationFactor;
    
    setEstimatedPrice({
      min: Math.round(totalPrice * 0.9),
      max: Math.round(totalPrice * 1.1)
    });
  };
  
  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      toast({
        title: "Trip Plan Created!",
        description: "Your personalized trip plan has been created. A representative will contact you shortly.",
        duration: 5000,
      });
    }
  };
  
  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  
  const popularDestinations = [
    {
      name: "Tirupati",
      image: "/temples/tirupati.jpg",
      accessibility: 4.8,
    },
    {
      name: "Varanasi",
      image: "/temples/kashi.jpg",
      accessibility: 4.2,
    },
    {
      name: "Amritsar",
      image: "/temples/golden.jpg",
      accessibility: 4.9,
    },
    {
      name: "Madurai",
      image: "/temples/meenakshi.jpg",
      accessibility: 4.0,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-yatra text-devotion-dark mb-2">
              Personalized Trip Planner
            </h1>
            <p className="text-muted-foreground mb-8 text-lg">
              Create your senior-friendly temple journey with customized accessibility options
            </p>
            
            <div className="flex items-center mb-8">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 1 ? 'bg-primary text-white' : 'bg-muted'}`}>
                1
              </div>
              <div className={`flex-1 h-1 mx-2 ${step >= 2 ? 'bg-primary' : 'bg-muted'}`}></div>
              <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 2 ? 'bg-primary text-white' : 'bg-muted'}`}>
                2
              </div>
              <div className={`flex-1 h-1 mx-2 ${step >= 3 ? 'bg-primary' : 'bg-muted'}`}></div>
              <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 3 ? 'bg-primary text-white' : 'bg-muted'}`}>
                3
              </div>
            </div>
            
            {step === 1 && (
              <Card className="border shadow">
                <CardHeader>
                  <CardTitle>Trip Basics</CardTitle>
                  <CardDescription>Tell us about your desired temple journey</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="destination" className="text-lg mb-2 block">Select Destination</Label>
                    <Select
                      value={tripData.destination}
                      onValueChange={(value) => handleSelectChange('destination', value)}
                    >
                      <SelectTrigger className="w-full senior-friendly-text focus-ring py-6">
                        <SelectValue placeholder="Choose your temple destination" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tirupati">Tirupati Balaji Temple</SelectItem>
                        <SelectItem value="varanasi">Varanasi (Kashi Vishwanath)</SelectItem>
                        <SelectItem value="amritsar">Golden Temple, Amritsar</SelectItem>
                        <SelectItem value="madurai">Meenakshi Temple, Madurai</SelectItem>
                        <SelectItem value="multiple">Multiple Destinations</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="duration" className="text-lg mb-2 block">Trip Duration (Days)</Label>
                      <div className="flex items-center">
                        <Button 
                          type="button" 
                          variant="outline" 
                          size="icon" 
                          className="rounded-l-md h-12 w-12"
                          onClick={() => decrementValue('duration')}
                        >
                          <Minus className="h-5 w-5" />
                        </Button>
                        
                        <Input
                          type="number"
                          id="duration"
                          name="duration"
                          value={tripData.duration}
                          onChange={handleInputChange}
                          className="rounded-none h-12 text-center text-lg focus-ring"
                          min="1"
                        />
                        
                        <Button 
                          type="button" 
                          variant="outline" 
                          size="icon" 
                          className="rounded-r-md h-12 w-12"
                          onClick={() => incrementValue('duration')}
                        >
                          <Plus className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="travelers" className="text-lg mb-2 block">Number of Travelers</Label>
                      <div className="flex items-center">
                        <Button 
                          type="button" 
                          variant="outline" 
                          size="icon" 
                          className="rounded-l-md h-12 w-12"
                          onClick={() => decrementValue('travelers')}
                        >
                          <Minus className="h-5 w-5" />
                        </Button>
                        
                        <Input
                          type="number"
                          id="travelers"
                          name="travelers"
                          value={tripData.travelers}
                          onChange={handleInputChange}
                          className="rounded-none h-12 text-center text-lg focus-ring"
                          min="1"
                        />
                        
                        <Button 
                          type="button" 
                          variant="outline" 
                          size="icon" 
                          className="rounded-r-md h-12 w-12"
                          onClick={() => incrementValue('travelers')}
                        >
                          <Plus className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="startDate" className="text-lg mb-2 block">Preferred Start Date</Label>
                    <Input
                      type="date"
                      id="startDate"
                      name="startDate"
                      value={tripData.startDate}
                      onChange={handleInputChange}
                      className="h-12 text-lg focus-ring"
                    />
                  </div>
                  
                  <div>
                    <Label className="text-lg mb-4 block">Popular Destinations</Label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {popularDestinations.map((destination, index) => (
                        <div 
                          key={index}
                          className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
                            tripData.destination === destination.name.toLowerCase() 
                              ? 'border-primary shadow-md scale-105' 
                              : 'border-transparent hover:border-muted hover:shadow'
                          }`}
                          onClick={() => handleSelectChange('destination', destination.name.toLowerCase())}
                        >
                          <div className="aspect-square relative">
                            <div 
                              className="w-full h-full bg-cover bg-center"
                              style={{ backgroundImage: `url(${destination.image || '/placeholder.svg'})` }}
                            ></div>
                            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                              <h3 className="text-white font-medium text-lg drop-shadow-lg">{destination.name}</h3>
                            </div>
                            {tripData.destination === destination.name.toLowerCase() && (
                              <div className="absolute top-2 right-2 bg-primary rounded-full p-1">
                                <Check className="h-4 w-4 text-white" />
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="justify-between pt-6 border-t flex">
                  <div className="text-muted-foreground">Step 1 of 3</div>
                  <Button 
                    onClick={nextStep}
                    disabled={!tripData.destination || !tripData.startDate}
                    className="accessibility-button bg-primary text-white group"
                  >
                    Continue <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            )}
            
            {step === 2 && (
              <Card className="border shadow">
                <CardHeader>
                  <CardTitle>Accessibility & Special Needs</CardTitle>
                  <CardDescription>Customize services for a comfortable journey</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <Checkbox 
                      id="wheelchair" 
                      checked={tripData.wheelchair}
                      onCheckedChange={() => handleCheckboxChange('wheelchair')}
                      className="mt-1 h-5 w-5"
                    />
                    <div>
                      <Label htmlFor="wheelchair" className="text-lg font-medium cursor-pointer">
                        Wheelchair Assistance
                      </Label>
                      <p className="text-muted-foreground">
                        Includes wheelchair rental and assistance throughout the journey
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Checkbox 
                      id="personalGuide" 
                      checked={tripData.personalGuide}
                      onCheckedChange={() => handleCheckboxChange('personalGuide')}
                      className="mt-1 h-5 w-5"
                    />
                    <div>
                      <Label htmlFor="personalGuide" className="text-lg font-medium cursor-pointer">
                        Personal Guide
                      </Label>
                      <p className="text-muted-foreground">
                        Dedicated guide specialized in senior care and temple knowledge
                      </p>
                    </div>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div>
                    <Label htmlFor="medicalAssistance" className="text-lg mb-2 block">
                      Medical Assistance Level
                    </Label>
                    <Tabs 
                      defaultValue={tripData.medicalAssistance}
                      onValueChange={(value) => handleSelectChange('medicalAssistance', value)}
                      className="w-full"
                    >
                      <TabsList className="grid w-full grid-cols-3 h-auto">
                        <TabsTrigger value="basic" className="py-3 text-base">Basic</TabsTrigger>
                        <TabsTrigger value="standard" className="py-3 text-base">Standard</TabsTrigger>
                        <TabsTrigger value="premium" className="py-3 text-base">Premium</TabsTrigger>
                      </TabsList>
                      <TabsContent value="basic" className="p-4 border rounded-md mt-2">
                        <h3 className="font-medium mb-2">Basic Package</h3>
                        <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                          <li>First aid kit availability</li>
                          <li>Emergency contact setup</li>
                          <li>Basic health monitoring</li>
                        </ul>
                      </TabsContent>
                      <TabsContent value="standard" className="p-4 border rounded-md mt-2">
                        <h3 className="font-medium mb-2">Standard Package</h3>
                        <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                          <li>All Basic package features</li>
                          <li>On-call medical professional</li>
                          <li>Regular health check-ins</li>
                          <li>Medicine management</li>
                        </ul>
                      </TabsContent>
                      <TabsContent value="premium" className="p-4 border rounded-md mt-2">
                        <h3 className="font-medium mb-2">Premium Package</h3>
                        <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                          <li>All Standard package features</li>
                          <li>Dedicated medical attendant</li>
                          <li>24/7 medical supervision</li>
                          <li>Specialized equipment if needed</li>
                          <li>Priority emergency services</li>
                        </ul>
                      </TabsContent>
                    </Tabs>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div>
                    <Label htmlFor="mealPreference" className="text-lg mb-2 block">
                      Meal Preferences
                    </Label>
                    <Select
                      value={tripData.mealPreference}
                      onValueChange={(value) => handleSelectChange('mealPreference', value)}
                    >
                      <SelectTrigger className="w-full senior-friendly-text focus-ring py-6">
                        <SelectValue placeholder="Choose your meal preference" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="regular">Regular Vegetarian</SelectItem>
                        <SelectItem value="jain">Jain Food</SelectItem>
                        <SelectItem value="diabetic">Diabetic-Friendly</SelectItem>
                        <SelectItem value="lowsodium">Low Sodium</SelectItem>
                        <SelectItem value="custom">Custom Diet Plan</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="accommodation" className="text-lg mb-2 block">
                      Accommodation Preference
                    </Label>
                    <Select
                      value={tripData.accommodation}
                      onValueChange={(value) => handleSelectChange('accommodation', value)}
                    >
                      <SelectTrigger className="w-full senior-friendly-text focus-ring py-6">
                        <SelectValue placeholder="Choose accommodation type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="budget">Budget-Friendly</SelectItem>
                        <SelectItem value="standard">Standard Comfort</SelectItem>
                        <SelectItem value="premium">Premium Comfort</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
                
                <CardFooter className="justify-between pt-6 border-t flex">
                  <Button 
                    variant="outline" 
                    onClick={prevStep}
                    className="accessibility-button"
                  >
                    Back
                  </Button>
                  <Button 
                    onClick={nextStep}
                    className="accessibility-button bg-primary text-white group"
                  >
                    Continue <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            )}
            
            {step === 3 && (
              <Card className="border shadow">
                <CardHeader>
                  <CardTitle>Review Your Trip Plan</CardTitle>
                  <CardDescription>Confirm your customized pilgrimage journey</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="bg-muted rounded-lg p-6 space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-medium">Trip Summary</h3>
                      <Button 
                        variant="outline" 
                        onClick={prevStep}
                        className="text-sm"
                      >
                        Edit Details
                      </Button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start space-x-3">
                        <MapPin className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <p className="text-muted-foreground">Destination</p>
                          <p className="font-medium text-lg">
                            {tripData.destination === 'tirupati' && 'Tirupati Balaji Temple'}
                            {tripData.destination === 'varanasi' && 'Varanasi (Kashi Vishwanath)'}
                            {tripData.destination === 'amritsar' && 'Golden Temple, Amritsar'}
                            {tripData.destination === 'madurai' && 'Meenakshi Temple, Madurai'}
                            {tripData.destination === 'multiple' && 'Multiple Destinations'}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Calendar className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <p className="text-muted-foreground">Start Date</p>
                          <p className="font-medium text-lg">
                            {new Date(tripData.startDate).toLocaleDateString('en-IN', { 
                              day: 'numeric',
                              month: 'long', 
                              year: 'numeric'
                            })}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Clock className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <p className="text-muted-foreground">Duration</p>
                          <p className="font-medium text-lg">{tripData.duration} Days</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <BadgeIndianRupee className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <p className="text-muted-foreground">Estimated Cost</p>
                          <p className="font-medium text-lg">
                            ₹{estimatedPrice.min.toLocaleString()} - ₹{estimatedPrice.max.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Accordion type="single" collapsible defaultValue="accessibility">
                    <AccordionItem value="accessibility">
                      <AccordionTrigger className="text-lg">Accessibility Services</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4 pl-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <Accessibility className="h-5 w-5 text-primary" />
                              <span>Wheelchair Assistance</span>
                            </div>
                            <Badge variant={tripData.wheelchair ? "default" : "outline"}>
                              {tripData.wheelchair ? "Included" : "Not Included"}
                            </Badge>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <Heart className="h-5 w-5 text-primary" />
                              <span>Personal Guide</span>
                            </div>
                            <Badge variant={tripData.personalGuide ? "default" : "outline"}>
                              {tripData.personalGuide ? "Included" : "Not Included"}
                            </Badge>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <Shield className="h-5 w-5 text-primary" />
                              <span>Medical Assistance</span>
                            </div>
                            <Badge>
                              {tripData.medicalAssistance === 'basic' && 'Basic Package'}
                              {tripData.medicalAssistance === 'standard' && 'Standard Package'}
                              {tripData.medicalAssistance === 'premium' && 'Premium Package'}
                            </Badge>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="preferences">
                      <AccordionTrigger className="text-lg">Preferences</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4 pl-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <Coffee className="h-5 w-5 text-primary" />
                              <span>Meal Preference</span>
                            </div>
                            <Badge>
                              {tripData.mealPreference === 'regular' && 'Regular Vegetarian'}
                              {tripData.mealPreference === 'jain' && 'Jain Food'}
                              {tripData.mealPreference === 'diabetic' && 'Diabetic-Friendly'}
                              {tripData.mealPreference === 'lowsodium' && 'Low Sodium'}
                              {tripData.mealPreference === 'custom' && 'Custom Diet Plan'}
                            </Badge>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <Home className="h-5 w-5 text-primary" />
                              <span>Accommodation</span>
                            </div>
                            <Badge>
                              {tripData.accommodation === 'budget' && 'Budget-Friendly'}
                              {tripData.accommodation === 'standard' && 'Standard Comfort'}
                              {tripData.accommodation === 'premium' && 'Premium Comfort'}
                            </Badge>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  
                  <div className="bg-card rounded-lg p-6 border">
                    <h3 className="text-lg font-medium mb-4">Contact Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="mb-2 block">Your Name</Label>
                        <Input id="name" placeholder="Full Name" className="senior-friendly-text focus-ring" />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="mb-2 block">Phone Number</Label>
                        <Input id="phone" placeholder="Phone Number" className="senior-friendly-text focus-ring" />
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="email" className="mb-2 block">Email Address</Label>
                        <Input id="email" placeholder="Email Address" className="senior-friendly-text focus-ring" />
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="specialRequests" className="mb-2 block">Special Requests</Label>
                        <textarea 
                          id="specialRequests" 
                          placeholder="Any special requirements or questions"
                          className="w-full h-24 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 senior-friendly-text focus-ring"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="justify-between pt-6 border-t flex">
                  <Button 
                    variant="outline" 
                    onClick={prevStep}
                    className="accessibility-button"
                  >
                    Back
                  </Button>
                  <Button 
                    onClick={nextStep}
                    className="accessibility-button bg-primary hover:bg-saffron-dark text-white"
                  >
                    Submit Trip Plan <Check className="ml-2 h-5 w-5" />
                  </Button>
                </CardFooter>
              </Card>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TripPlanner;
