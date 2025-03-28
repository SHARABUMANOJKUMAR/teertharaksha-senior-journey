
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Heart, Instagram, Facebook, Twitter, Accessibility, Stethoscope, Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted mt-20 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-yatra text-devotion-dark mb-6">TEERTHARAKSHA</h3>
            <p className="text-muted-foreground mb-6 senior-friendly-text">
              Making pilgrimage journeys accessible, comfortable, and spiritually fulfilling for senior citizens.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                className="senior-touch-target bg-white rounded-full shadow-sm hover:shadow-md transition-shadow" 
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6 text-devotion" />
              </a>
              <a 
                href="https://instagram.com" 
                className="senior-touch-target bg-white rounded-full shadow-sm hover:shadow-md transition-shadow" 
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6 text-devotion" />
              </a>
              <a 
                href="https://twitter.com" 
                className="senior-touch-target bg-white rounded-full shadow-sm hover:shadow-md transition-shadow" 
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6 text-devotion" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/temples" className="text-muted-foreground hover:text-primary transition-colors senior-friendly-text">
                  Explore Temples
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors senior-friendly-text">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/planner" className="text-muted-foreground hover:text-primary transition-colors senior-friendly-text">
                  Trip Planner
                </Link>
              </li>
              <li>
                <Link to="/chatbot" className="text-muted-foreground hover:text-primary transition-colors senior-friendly-text">
                  AI Assistance
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors senior-friendly-text">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-6">Special Services</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-muted-foreground senior-friendly-text">
                <Accessibility className="h-5 w-5 mr-2 text-primary" />
                <span>Wheelchair Assistance</span>
              </li>
              <li className="flex items-center text-muted-foreground senior-friendly-text">
                <Stethoscope className="h-5 w-5 mr-2 text-primary" />
                <span>Medical Support</span>
              </li>
              <li className="flex items-center text-muted-foreground senior-friendly-text">
                <Coffee className="h-5 w-5 mr-2 text-primary" />
                <span>Hygienic Restaurants</span>
              </li>
              <li className="flex items-center text-muted-foreground senior-friendly-text">
                <Heart className="h-5 w-5 mr-2 text-primary" />
                <span>Personal Guide</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start text-muted-foreground senior-friendly-text">
                <MapPin className="h-5 w-5 mr-2 text-primary mt-1 flex-shrink-0" />
                <span>Puttur, India</span>
              </li>
              <li className="flex items-center text-muted-foreground senior-friendly-text">
                <Phone className="h-5 w-5 mr-2 text-primary flex-shrink-0" />
                <a href="tel:8688386307" className="hover:text-primary transition-colors">
                  +91 8688386307
                </a>
              </li>
              <li className="flex items-center text-muted-foreground senior-friendly-text">
                <Mail className="h-5 w-5 mr-2 text-primary flex-shrink-0" />
                <a href="mailto:tenspickindia@gmail.com" className="hover:text-primary transition-colors break-all">
                  tenspickindia@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-6">
          <p className="text-center text-muted-foreground">
            &copy; {new Date().getFullYear()} TEERTHARAKSHA by tenspick group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
