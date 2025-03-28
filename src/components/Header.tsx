
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Bell, Menu, Phone, X, Accessibility, Coffee, Stethoscope, 
  MapPin, MessageSquare, Mic, Calendar, Settings
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useToast } from "@/hooks/use-toast";

const Header = () => {
  const { toast } = useToast();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleVoiceAssistClick = () => {
    toast({
      title: "Voice Assistant",
      description: "Voice assistant is now active. Please speak.",
      duration: 3000,
    });
  };

  return (
    <header className="sticky top-0 w-full border-b bg-background/95 backdrop-blur z-50">
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <div className="relative">
              <h1 className="text-3xl md:text-4xl font-yatra text-devotion-dark divine-glow">
                TEERTHARAKSHA
              </h1>
              <span className="text-xs absolute -bottom-4 right-0 text-muted-foreground whitespace-nowrap">
                -by tenspick group
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6">
          <Link to="/" className="senior-friendly-text high-contrast hover:text-primary transition-colors">Home</Link>
          <Link to="/temples" className="senior-friendly-text high-contrast hover:text-primary transition-colors">Temples</Link>
          <Link to="/services" className="senior-friendly-text high-contrast hover:text-primary transition-colors">Services</Link>
          <Link to="/planner" className="senior-friendly-text high-contrast hover:text-primary transition-colors">Plan Trip</Link>
          <Link to="/chatbot" className="senior-friendly-text high-contrast hover:text-primary transition-colors">AI Assistant</Link>
          <Link to="/contact" className="senior-friendly-text high-contrast hover:text-primary transition-colors">Contact</Link>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button 
            onClick={handleVoiceAssistClick}
            className="accessibility-button bg-sacred hover:bg-sacred-dark text-white"
          >
            <Mic className="mr-2 h-5 w-5" /> Voice Assist
          </Button>
          
          <Link to="/chatbot">
            <Button className="accessibility-button bg-blessing hover:bg-blessing-dark text-white">
              <MessageSquare className="mr-2 h-5 w-5" /> AI Chat
            </Button>
          </Link>

          <Link to="/contact">
            <Button variant="outline" className="accessibility-button focus-ring">
              <Phone className="mr-2 h-5 w-5" /> Call Support
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="senior-touch-target">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full py-6">
                <div className="flex items-center mb-8">
                  <h2 className="text-2xl font-yatra text-devotion-dark">TEERTHARAKSHA</h2>
                </div>
                <nav className="flex flex-col space-y-5 flex-1">
                  <Link to="/" className="senior-friendly-text high-contrast hover:text-primary transition-colors">Home</Link>
                  <Link to="/temples" className="senior-friendly-text high-contrast hover:text-primary transition-colors">Temples</Link>
                  <Link to="/services" className="senior-friendly-text high-contrast hover:text-primary transition-colors">Services</Link>
                  <Link to="/planner" className="senior-friendly-text high-contrast hover:text-primary transition-colors">Plan Trip</Link>
                  <Link to="/chatbot" className="senior-friendly-text high-contrast hover:text-primary transition-colors">AI Assistant</Link>
                  <Link to="/contact" className="senior-friendly-text high-contrast hover:text-primary transition-colors">Contact</Link>
                  
                  <div className="pt-6 space-y-4">
                    <h3 className="text-xl font-medium">Quick Access</h3>
                    <Button 
                      onClick={handleVoiceAssistClick}
                      className="w-full accessibility-button bg-sacred text-white"
                    >
                      <Mic className="mr-2 h-5 w-5" /> Voice Assist
                    </Button>
                    
                    <Link to="/chatbot" className="block w-full">
                      <Button className="w-full accessibility-button bg-blessing text-white">
                        <MessageSquare className="mr-2 h-5 w-5" /> AI Chat
                      </Button>
                    </Link>
                    
                    <Link to="/contact" className="block w-full">
                      <Button variant="outline" className="w-full accessibility-button">
                        <Phone className="mr-2 h-5 w-5" /> Call Support
                      </Button>
                    </Link>
                  </div>
                </nav>
                <div className="mt-auto">
                  <p className="text-sm text-muted-foreground">
                    ©2023 TEERTHARAKSHA - by tenspick group
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
