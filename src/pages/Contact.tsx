
import React from 'react';
import { 
  Phone, Mail, MapPin, Clock, MessageSquare, 
  Mic, Calendar, Send 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from "@/hooks/use-toast";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. We'll contact you shortly.",
      duration: 5000,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-yatra text-devotion-dark mb-2">
              Contact Us
            </h1>
            <p className="text-muted-foreground mb-8 text-lg">
              We're here to assist you with planning your temple journey
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card className="border shadow">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-medium mb-6">Send Us a Message</h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="name" className="text-lg mb-2 block">Your Name</Label>
                          <Input 
                            id="name" 
                            placeholder="Full Name" 
                            className="senior-friendly-text focus-ring h-12" 
                            required 
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="phone" className="text-lg mb-2 block">Phone Number</Label>
                          <Input 
                            id="phone" 
                            placeholder="Phone Number" 
                            className="senior-friendly-text focus-ring h-12" 
                            required 
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="email" className="text-lg mb-2 block">Email Address</Label>
                        <Input 
                          id="email" 
                          type="email"
                          placeholder="Email Address" 
                          className="senior-friendly-text focus-ring h-12" 
                          required 
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="subject" className="text-lg mb-2 block">Subject</Label>
                        <Input 
                          id="subject" 
                          placeholder="How can we help you?" 
                          className="senior-friendly-text focus-ring h-12" 
                          required 
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="message" className="text-lg mb-2 block">Message</Label>
                        <textarea 
                          id="message" 
                          placeholder="Please describe your requirements..."
                          className="w-full h-32 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 senior-friendly-text focus-ring"
                          required
                        ></textarea>
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="accessibility-button bg-primary hover:bg-saffron-dark text-white w-full md:w-auto"
                      >
                        <Send className="mr-2 h-5 w-5" /> Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <Card className="border shadow mb-6">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-medium mb-6">Contact Information</h2>
                    
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <Phone className="h-6 w-6 text-primary mr-4 mt-1" />
                        <div>
                          <h3 className="font-medium text-lg">Phone</h3>
                          <p className="text-muted-foreground">
                            <a href="tel:8688386307" className="hover:text-primary transition-colors">
                              +91 8688386307
                            </a>
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Mail className="h-6 w-6 text-primary mr-4 mt-1" />
                        <div>
                          <h3 className="font-medium text-lg">Email</h3>
                          <p className="text-muted-foreground break-all">
                            <a href="mailto:tenspickindia@gmail.com" className="hover:text-primary transition-colors">
                              tenspickindia@gmail.com
                            </a>
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <MapPin className="h-6 w-6 text-primary mr-4 mt-1" />
                        <div>
                          <h3 className="font-medium text-lg">Address</h3>
                          <p className="text-muted-foreground">
                            Puttur, India
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Clock className="h-6 w-6 text-primary mr-4 mt-1" />
                        <div>
                          <h3 className="font-medium text-lg">Working Hours</h3>
                          <p className="text-muted-foreground">
                            Monday - Saturday<br />
                            9:00 AM - 6:00 PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border shadow">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-medium mb-6">Quick Assistance</h2>
                    
                    <div className="space-y-4">
                      <Button 
                        className="w-full accessibility-button bg-sacred hover:bg-sacred-dark text-white justify-start"
                      >
                        <Phone className="mr-3 h-5 w-5" /> Call Support
                      </Button>
                      
                      <Button 
                        className="w-full accessibility-button bg-blessing hover:bg-blessing-dark text-white justify-start"
                      >
                        <MessageSquare className="mr-3 h-5 w-5" /> Chat with AI
                      </Button>
                      
                      <Button 
                        className="w-full accessibility-button bg-devotion hover:bg-devotion-dark text-white justify-start"
                      >
                        <Mic className="mr-3 h-5 w-5" /> Voice Assistance
                      </Button>
                      
                      <Button 
                        className="w-full accessibility-button bg-primary hover:bg-saffron-dark text-white justify-start"
                      >
                        <Calendar className="mr-3 h-5 w-5" /> Schedule a Call
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="mt-12">
              <div className="bg-muted rounded-lg p-6">
                <h2 className="text-2xl font-medium mb-4">Frequently Asked Questions</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">How can I customize my temple journey?</h3>
                    <p className="text-muted-foreground">
                      You can use our Trip Planner to customize all aspects of your journey including accessibility options, medical assistance, and accommodation preferences.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">What medical support is available?</h3>
                    <p className="text-muted-foreground">
                      We offer three levels of medical support: Basic, Standard, and Premium, with varying degrees of assistance from on-call doctors to dedicated medical attendants.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">Are all temples wheelchair accessible?</h3>
                    <p className="text-muted-foreground">
                      Most major temples have wheelchair facilities. Our platform provides detailed accessibility ratings and assistance options for each temple location.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">How far in advance should I book?</h3>
                    <p className="text-muted-foreground">
                      We recommend booking at least 4-6 weeks in advance, especially during festival seasons, to ensure availability of all services and accommodations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
