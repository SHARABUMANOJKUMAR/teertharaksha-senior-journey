
import React from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { 
  Accessibility, MapPin, Calendar, Clock, 
  Phone, Info, Heart, Shield, Users, Utensils
} from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from 'react-router-dom';

// This would ideally come from a database
const templesData = [
  {
    id: 1,
    name: "Tirupati Balaji Temple",
    location: "Andhra Pradesh",
    image: "/temples/tirupati.jpg",
    description: "One of the most visited religious sites in the world, dedicated to Lord Venkateswara.",
    fullDescription: "The Tirupati Balaji Temple, also known as the Sri Venkateswara Temple, is dedicated to Lord Venkateswara, an incarnation of Vishnu. Located in the hill town of Tirumala in Andhra Pradesh, it's one of the most visited religious sites in the world. The temple architecture is a beautiful example of Dravidian style.",
    features: ["Wheelchair Access", "Medical Center", "Senior Queue"],
    accessibility: 4.5,
    timings: "3:00 AM to 9:00 PM",
    bestTime: "October to March",
    nearbyAccommodation: "Multiple guesthouses and hotels available within 2-5 km",
    seniorFacilities: [
      "Special darshan for seniors",
      "Wheelchair availability",
      "Medical emergency center",
      "Rest areas with proper seating",
      "Special assistance counters"
    ],
    contactInfo: {
      phone: "+91 877 2277777",
      email: "info@tirumala.org",
      website: "www.tirumala.org"
    },
    nearbyAttractions: [
      "Akasa Ganga",
      "Silathoranam",
      "Sri Venkateswara Museum",
      "Chandragiri Fort"
    ]
  },
  {
    id: 2,
    name: "Varanasi Kashi Vishwanath",
    location: "Uttar Pradesh",
    image: "/temples/kashi.jpg",
    description: "Sacred temple on the banks of the Ganges, dedicated to Lord Shiva.",
    fullDescription: "The Kashi Vishwanath Temple is one of the most famous Hindu temples dedicated to Lord Shiva. Located in Varanasi, Uttar Pradesh, the temple stands on the western bank of the holy river Ganga. The temple is one of the twelve Jyotirlingas, the holiest of Shiva temples.",
    features: ["Wheelchair Access", "Rest Areas", "Assisted Darshan"],
    accessibility: 4.0,
    timings: "4:00 AM to 11:00 PM",
    bestTime: "November to February",
    nearbyAccommodation: "Multiple guesthouses and hotels along the Ganges within 1-3 km",
    seniorFacilities: [
      "Wheelchair assistance",
      "Senior citizen prioritized darshan",
      "Medical assistance booth",
      "Resting areas throughout the complex",
      "Electric carts for internal transportation"
    ],
    contactInfo: {
      phone: "+91 542 2392629",
      email: "info@kashivishwanath.org",
      website: "www.kashivishwanath.org"
    },
    nearbyAttractions: [
      "Ganges Riverfront",
      "Dashashwamedh Ghat",
      "Sarnath",
      "Ramnagar Fort"
    ]
  },
  {
    id: 3,
    name: "Golden Temple",
    location: "Amritsar, Punjab",
    image: "/temples/golden.jpg",
    description: "The holiest gurdwara and an important pilgrimage site for Sikhs.",
    fullDescription: "The Golden Temple, also known as Sri Harmandir Sahib, is the holiest gurdwara and an important pilgrimage site of Sikhism. Located in Amritsar, Punjab, the temple is built around a man-made pool with the gurdwara structure sitting in the middle, representing the Sikh belief in equality and openness.",
    features: ["Wheelchair Access", "Free Meals", "Senior Facilities"],
    accessibility: 4.8,
    timings: "Open 24 hours",
    bestTime: "October to March",
    nearbyAccommodation: "Multiple guesthouses and hotels within walking distance",
    seniorFacilities: [
      "Wheelchair availability",
      "Separate senior citizen entry",
      "Langar (free meals) service",
      "Medical assistance center",
      "Accessible restrooms"
    ],
    contactInfo: {
      phone: "+91 183 2553957",
      email: "info@sgpc.net",
      website: "www.goldentempleamritsar.org"
    },
    nearbyAttractions: [
      "Jallianwala Bagh",
      "Wagah Border",
      "Partition Museum",
      "Maharaja Ranjit Singh Museum"
    ]
  },
  {
    id: 4,
    name: "Meenakshi Temple",
    location: "Madurai, Tamil Nadu",
    image: "/temples/meenakshi.jpg",
    description: "Historic Hindu temple dedicated to Goddess Meenakshi and Lord Sundareswar.",
    fullDescription: "The Meenakshi Amman Temple is a historic Hindu temple located in the city of Madurai, Tamil Nadu. It is dedicated to Goddess Meenakshi, a form of Parvati, and her consort, Lord Sundareswar, a form of Shiva. The temple forms the heart and lifeline of the ancient city of Madurai.",
    features: ["Special Entry", "Rest Areas", "Guide Service"],
    accessibility: 3.9,
    timings: "5:00 AM to 9:30 PM",
    bestTime: "October to March",
    nearbyAccommodation: "Several hotels within 1-3 km of the temple",
    seniorFacilities: [
      "Special entry for seniors",
      "Wheelchair assistance",
      "Rest areas within the temple complex",
      "Medical help desk",
      "Guide service for seniors"
    ],
    contactInfo: {
      phone: "+91 452 2344360",
      email: "info@maduraimeenakshi.org",
      website: "www.maduraimeenakshi.org"
    },
    nearbyAttractions: [
      "Thirumalai Nayakkar Palace",
      "Gandhi Museum",
      "Vandiyur Mariamman Teppakulam",
      "Alagar Koil"
    ]
  }
];

const TempleDetails = () => {
  const { id } = useParams<{id: string}>();
  const templeId = parseInt(id || "1");
  
  // Find the temple data based on the ID
  const temple = templesData.find(t => t.id === templeId);
  
  if (!temple) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-destructive mb-4">Temple Not Found</h1>
            <p className="mb-6">Sorry, we couldn't find the temple you're looking for.</p>
            <Link to="/">
              <Button>Return to Home</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-96">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${temple.image || '/placeholder.svg'})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          <div className="container mx-auto px-4 h-full flex items-end relative z-10">
            <div className="pb-10">
              <h1 className="text-4xl md:text-5xl font-yatra text-white mb-2">
                {temple.name}
              </h1>
              <div className="flex items-center text-white mb-4">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{temple.location}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {temple.features.map((feature, index) => (
                  <Badge key={index} className="bg-blessing text-white">
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Temple Details */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Temple Info */}
              <div className="lg:col-span-2">
                <div className="prose max-w-none">
                  <h2 className="text-2xl font-yatra text-devotion-dark mb-4">About {temple.name}</h2>
                  <p className="text-lg mb-6">{temple.fullDescription}</p>
                  
                  <h3 className="text-xl font-medium mb-3">Senior-Friendly Facilities</h3>
                  <ul className="space-y-2 mb-6">
                    {temple.seniorFacilities.map((facility, index) => (
                      <li key={index} className="flex items-start">
                        <Accessibility className="w-5 h-5 text-primary mt-1 mr-2 shrink-0" />
                        <span>{facility}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <h3 className="text-xl font-medium mb-3">Nearby Attractions</h3>
                  <ul className="space-y-2 mb-6">
                    {temple.nearbyAttractions.map((attraction, index) => (
                      <li key={index} className="flex items-start">
                        <MapPin className="w-5 h-5 text-sacred mt-1 mr-2 shrink-0" />
                        <span>{attraction}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Right Column - Quick Info */}
              <div>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-yatra text-devotion mb-4">Quick Information</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Clock className="w-5 h-5 text-muted-foreground mr-3 shrink-0 mt-1" />
                        <div>
                          <h4 className="font-medium">Temple Timings</h4>
                          <p className="text-muted-foreground">{temple.timings}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Calendar className="w-5 h-5 text-muted-foreground mr-3 shrink-0 mt-1" />
                        <div>
                          <h4 className="font-medium">Best Time to Visit</h4>
                          <p className="text-muted-foreground">{temple.bestTime}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Accessibility className="w-5 h-5 text-muted-foreground mr-3 shrink-0 mt-1" />
                        <div>
                          <h4 className="font-medium">Accessibility Rating</h4>
                          <p className="text-muted-foreground">{temple.accessibility.toFixed(1)}/5.0</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Users className="w-5 h-5 text-muted-foreground mr-3 shrink-0 mt-1" />
                        <div>
                          <h4 className="font-medium">Accommodation</h4>
                          <p className="text-muted-foreground">{temple.nearbyAccommodation}</p>
                        </div>
                      </div>
                      
                      <Separator className="my-4" />
                      
                      <div className="space-y-3">
                        <h4 className="font-medium flex items-center">
                          <Phone className="w-5 h-5 mr-2" />
                          Contact Information
                        </h4>
                        <p className="text-muted-foreground">Phone: {temple.contactInfo.phone}</p>
                        <p className="text-muted-foreground">Email: {temple.contactInfo.email}</p>
                        <p className="text-muted-foreground">Website: {temple.contactInfo.website}</p>
                      </div>
                    </div>
                    
                    <div className="mt-6 space-y-3">
                      <Button className="w-full" variant="default">
                        <Heart className="mr-2" />
                        Add to Favorites
                      </Button>
                      <Button className="w-full" variant="outline">
                        <Link to="/planner" className="flex items-center w-full justify-center">
                          <Calendar className="mr-2" />
                          Plan a Visit
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TempleDetails;
