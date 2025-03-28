
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, Calendar, Accessibility, Stethoscope, Heart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Mock data for temples
const templesData = [
  {
    id: "1",
    name: "Tirupati Balaji Temple",
    location: "Tirupati, Andhra Pradesh, India",
    category: "Hindu",
    description: "Tirupati Balaji Temple, also known as Sri Venkateswara Swamy Temple, is dedicated to Lord Venkateswara, an incarnation of Vishnu. Located in the hill town of Tirumala in Andhra Pradesh, it is one of the most visited religious sites in the world. The temple's origins date back to the 8th century CE, with inscriptions referring to the temple dating as far back as 300 CE. Pilgrims from across India and abroad visit this sacred site to seek blessings and fulfill vows.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tirumala_090615.jpg/1200px-Tirumala_090615.jpg",
    openHours: "3:00 AM to 12:00 PM and 2:00 PM to 10:00 PM",
    bestTimeToVisit: "Weekdays during non-festival periods",
    accessibility: ["Wheelchair access", "Special darshan for elderly", "Medical facilities"],
    healthSafety: ["First-aid centers", "Emergency medical services", "Clean drinking water stations"]
  },
  {
    id: "2",
    name: "Varanasi Kashi Vishwanath",
    location: "Varanasi, Uttar Pradesh, India",
    category: "Hindu",
    description: "The Kashi Vishwanath Temple is one of the most famous Hindu temples dedicated to Lord Shiva. It is located in Vishwanath Gali of Varanasi, Uttar Pradesh. The temple stands on the western bank of the holy river Ganga, and is one of the twelve Jyotirlingas, the holiest of Shiva temples. The main deity is known by the name Vishwanatha or Vishweshwara meaning Ruler of the Universe. The temple has been destroyed and rebuilt several times throughout history, with the current structure built in 1780 by Queen Ahilyabai Holkar of Indore.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Ahilya_Ghat_by_the_Ganges%2C_Varanasi.jpg/1200px-Ahilya_Ghat_by_the_Ganges%2C_Varanasi.jpg",
    openHours: "4:00 AM to 11:00 PM",
    bestTimeToVisit: "Early morning or after sunset",
    accessibility: ["Wheelchair access", "Assistance for elderly", "Special entry for disabled"],
    healthSafety: ["Medical assistance available", "Clean water facilities", "Regular sanitization"]
  },
  {
    id: "3",
    name: "Golden Temple",
    location: "Amritsar, Punjab, India",
    category: "Sikh",
    description: "The Golden Temple, also known as Harmandir Sahib, is a gurdwara located in the city of Amritsar, Punjab, India. It is the preeminent spiritual site of Sikhism. The temple is built around a man-made pool (sarovar) that was completed by the fourth Sikh Guru, Guru Ram Das in 1577. The Harmandir Sahib was designed by the fifth Sikh Guru, Guru Arjan, who had the cornerstone laid by the Muslim Sufi saint Mir Sai Mir on 28 December 1588. The temple was repeatedly rebuilt by the Sikhs after it became a target of persecution and was destroyed several times by the Mughal and invading Afghan armies.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Golden_Temple_Reflection.jpg/1200px-Golden_Temple_Reflection.jpg",
    openHours: "Open 24 hours",
    bestTimeToVisit: "Early morning or evening",
    accessibility: ["Wheelchair access", "Free volunteer assistance", "Senior citizen support"],
    healthSafety: ["On-site medical facilities", "Clean drinking water", "Hygienic free food service"]
  },
  {
    id: "4",
    name: "Meenakshi Temple",
    location: "Madurai, Tamil Nadu, India",
    category: "Hindu",
    description: "Meenakshi Temple, officially known as Arulmigu Meenakshi Sundareshwarar Temple, is a historic Hindu temple located on the southern bank of the Vaigai River in the temple city of Madurai, Tamil Nadu, India. It is dedicated to Meenakshi, a form of Parvati, and her consort, Sundareshwar, a form of Shiva. The temple forms the heart and lifeline of the 2,500-year-old city of Madurai and is a significant symbol for the Tamil people. The temple is known for its stunning architecture, with 14 gateway towers (gopurams) ranging from 45-50m in height, covered with thousands of colorful stone figures of deities, mythical animals, and monsters.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Madurai_Meenakshi_Amman_Temple.jpg/1200px-Madurai_Meenakshi_Amman_Temple.jpg",
    openHours: "5:00 AM to 12:30 PM and 4:00 PM to 10:00 PM",
    bestTimeToVisit: "October to March",
    accessibility: ["Wheelchair access", "Special queues for elderly", "Assistance for disabled"],
    healthSafety: ["Medical help desk", "Clean drinking water", "First-aid facilities"]
  }
];

const TempleDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [temple, setTemple] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate API call using the mock data
    const fetchTempleDetails = async () => {
      try {
        // Simulate network delay for realism
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Find the temple with matching id
        const foundTemple = templesData.find(temple => temple.id === id);
        
        if (foundTemple) {
          setTemple(foundTemple);
        } else {
          throw new Error("Temple not found");
        }
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchTempleDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading temple details...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <p className="text-red-500 mb-4">Error: {error.message}</p>
            <Link to="/temples">
              <Button>Return to Temples</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!temple) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <p className="text-lg mb-4">Temple not found</p>
            <Link to="/temples">
              <Button>Return to Temples</Button>
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
        <section className="bg-muted py-12">
          <div className="container mx-auto px-4">
            <Link to="/" className="inline-flex items-center mb-4 text-sm font-medium hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Home
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h1 className="text-4xl font-yatra text-devotion-dark mb-4">{temple.name}</h1>
                <Badge className="bg-secondary text-secondary-foreground mb-4">{temple.category}</Badge>
                <img 
                  src={temple.imageUrl || "https://via.placeholder.com/600x400"} 
                  alt={temple.name} 
                  className="rounded-lg shadow-md w-full h-auto object-cover aspect-video" 
                />
                <div className="mt-4 space-y-2">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{temple.location}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>Open Hours: {temple.openHours}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>Best Time to Visit: {temple.bestTimeToVisit}</span>
                  </div>
                </div>
              </div>

              <div>
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
                    <TabsTrigger value="health">Health & Safety</TabsTrigger>
                  </TabsList>
                  <TabsContent value="overview">
                    <h2 className="text-2xl font-medium mb-4">About {temple.name}</h2>
                    <p className="text-muted-foreground">{temple.description}</p>
                  </TabsContent>
                  <TabsContent value="accessibility">
                    <h2 className="text-2xl font-medium mb-4">Accessibility Services</h2>
                    <ul className="space-y-2">
                      {temple.accessibility.map((service, index) => (
                        <li key={index} className="flex items-center">
                          <Accessibility className="w-5 h-5 mr-2 text-primary" />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                  <TabsContent value="health">
                    <h2 className="text-2xl font-medium mb-4">Health & Safety Measures</h2>
                    <ul className="space-y-2">
                      {temple.healthSafety.map((measure, index) => (
                        <li key={index} className="flex items-center">
                          <Stethoscope className="w-5 h-5 mr-2 text-primary" />
                          <span>{measure}</span>
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                </Tabs>
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
