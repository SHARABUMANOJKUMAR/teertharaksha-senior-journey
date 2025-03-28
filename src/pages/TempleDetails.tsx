import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, Calendar, Accessibility, Stethoscope, Heart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const TempleDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [temple, setTemple] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTempleDetails = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await fetch(`https://your-backend-api.com/temples/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setTemple(data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchTempleDetails();
  }, [id]);

  if (loading) {
    return <div>Loading temple details...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!temple) {
    return <div>Temple not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-muted py-12">
          <div className="container mx-auto px-4">
            <Link to="/temples" className="inline-flex items-center mb-4 text-sm font-medium hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Temples
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h1 className="text-4xl font-yatra text-devotion-dark mb-4">{temple.name}</h1>
                <Badge className="bg-secondary text-secondary-foreground mb-4">{temple.category}</Badge>
                <img src={temple.imageUrl || "https://via.placeholder.com/600x400"} alt={temple.name} className="rounded-lg shadow-md w-full h-auto" />
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
                      <li className="flex items-center">
                        <Accessibility className="w-5 h-5 mr-2 text-primary" />
                        <span>Wheelchair access available</span>
                      </li>
                      <li className="flex items-center">
                        <Stethoscope className="w-5 h-5 mr-2 text-primary" />
                        <span>Medical assistance on-site</span>
                      </li>
                      <li className="flex items-center">
                        <Heart className="w-5 h-5 mr-2 text-primary" />
                        <span>Senior citizen assistance</span>
                      </li>
                    </ul>
                  </TabsContent>
                  <TabsContent value="health">
                    <h2 className="text-2xl font-medium mb-4">Health & Safety Measures</h2>
                    <p className="text-muted-foreground">First-aid services and emergency protocols are in place to ensure the safety and well-being of all pilgrims.</p>
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
