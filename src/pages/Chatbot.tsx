
import React, { useState, useRef, useEffect } from 'react';
import { Send, Mic, MicOff, PauseCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Chatbot = () => {
  const { toast } = useToast();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [input, setInput] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Namaste! I'm your AI temple guide. How can I assist with your pilgrimage journey today?",
    },
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === "") return;

    // Add user message
    setMessages((prev) => [
      ...prev,
      { role: "user", content: input },
    ]);
    
    // Clear input
    setInput("");
    
    // Simulate AI response (in a real app, this would call an API)
    setTimeout(() => {
      simulateResponse(input);
    }, 1000);
  };

  const simulateResponse = (userInput: string) => {
    let response = "";
    
    // Simulate responses based on user input keywords
    const lowercaseInput = userInput.toLowerCase();
    
    if (lowercaseInput.includes("wheelchair") || lowercaseInput.includes("accessibility")) {
      response = "All temples in our network offer wheelchair services. You can pre-book a wheelchair or bring your own. Our guides are trained to assist with mobility needs.";
    } else if (lowercaseInput.includes("medical") || lowercaseInput.includes("doctor")) {
      response = "We provide medical assistance at all locations. There are onsite medical staff at major temples, and emergency services are just a button press away through our app.";
    } else if (lowercaseInput.includes("guide") || lowercaseInput.includes("assistance")) {
      response = "Our personal guides are trained in senior care and temple history. They'll help with rituals, explain traditions, and ensure your comfort throughout the journey.";
    } else if (lowercaseInput.includes("cost") || lowercaseInput.includes("price") || lowercaseInput.includes("expensive")) {
      response = "The cost varies based on your specific needs. Basic packages start at ₹15,000 for a 3-day trip. Adding services like personal guides, premium medical support, or special transportation will increase the cost. Would you like a detailed quote?";
    } else if (lowercaseInput.includes("food") || lowercaseInput.includes("restaurant") || lowercaseInput.includes("meal")) {
      response = "We partner with hygienic restaurants that cater to dietary restrictions. All meals are prepared following strict cleanliness standards, and we can accommodate special diets like diabetic, low-sodium, or vegetarian options.";
    } else if (lowercaseInput.includes("temple") || lowercaseInput.includes("visit")) {
      response = "We cover all major temples across India, including Tirupati, Varanasi, Amritsar Golden Temple, and Meenakshi Temple. Is there a specific temple you're interested in visiting?";
    } else {
      response = "Thank you for your question. Our team specializes in making temple journeys accessible and comfortable for seniors. Would you like more specific information about our wheelchair services, medical assistance, or personal guides?";
    }
    
    setMessages((prev) => [
      ...prev,
      { role: "assistant", content: response },
    ]);
  };

  const toggleListening = () => {
    if (!isListening) {
      startListening();
    } else {
      stopListening();
    }
  };

  const startListening = () => {
    // In a real app, this would implement Web Speech API
    setIsListening(true);
    toast({
      title: "Voice Recognition Active",
      description: "Please speak clearly. Tap the microphone again to stop.",
      duration: 3000,
    });
    
    // Simulate voice recognition after 3 seconds
    setTimeout(() => {
      setInput("Do you provide wheelchair facilities at Tirupati temple?");
      stopListening();
      
      // Auto-submit after voice input
      setTimeout(() => {
        handleSubmit({ preventDefault: () => {} } as React.FormEvent);
      }, 500);
    }, 3000);
  };

  const stopListening = () => {
    setIsListening(false);
    toast({
      title: "Voice Recognition Stopped",
      duration: 1500,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-yatra text-devotion-dark mb-6">
            AI Temple Guide & Assistant
          </h1>
          
          <div className="bg-muted p-3 rounded-lg mb-6">
            <p className="text-muted-foreground">
              Ask me anything about temple visits, accessibility, medical services, or trip planning. 
              You can type or use voice commands!
            </p>
          </div>
          
          <Card className="border shadow-md mb-4">
            <CardContent className="p-0">
              <div className="h-[500px] overflow-y-auto p-6">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`mb-4 flex ${
                      message.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`rounded-lg px-4 py-2 max-w-[80%] ${
                        message.role === "user"
                          ? "bg-primary text-white ml-auto"
                          : "bg-muted"
                      }`}
                    >
                      <p className="whitespace-pre-wrap">{message.content}</p>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
              
              <div className="p-4 border-t">
                <form onSubmit={handleSubmit} className="flex space-x-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your question here..."
                    className="flex-grow text-lg p-6 focus-ring"
                    disabled={isListening}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="senior-touch-target"
                    onClick={toggleListening}
                  >
                    {isListening ? (
                      <MicOff className="h-5 w-5 text-destructive" />
                    ) : (
                      <Mic className="h-5 w-5 text-sacred" />
                    )}
                  </Button>
                  <Button 
                    type="submit" 
                    size="icon"
                    className="senior-touch-target bg-primary text-white"
                    disabled={input.trim() === "" && !isListening}
                  >
                    <Send className="h-5 w-5" />
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-8">
            <h2 className="text-xl font-medium mb-4">Popular Questions</h2>
            <div className="flex flex-wrap gap-2">
              <Badge 
                className="px-4 py-2 cursor-pointer bg-muted hover:bg-muted/80 text-foreground"
                onClick={() => {
                  setInput("What wheelchair facilities are available?");
                  setTimeout(() => {
                    handleSubmit({ preventDefault: () => {} } as React.FormEvent);
                  }, 500);
                }}
              >
                What wheelchair facilities are available?
              </Badge>
              
              <Badge 
                className="px-4 py-2 cursor-pointer bg-muted hover:bg-muted/80 text-foreground"
                onClick={() => {
                  setInput("How do I get medical assistance during my visit?");
                  setTimeout(() => {
                    handleSubmit({ preventDefault: () => {} } as React.FormEvent);
                  }, 500);
                }}
              >
                How do I get medical assistance during my visit?
              </Badge>
              
              <Badge 
                className="px-4 py-2 cursor-pointer bg-muted hover:bg-muted/80 text-foreground"
                onClick={() => {
                  setInput("What's the cost for a 5-day temple tour?");
                  setTimeout(() => {
                    handleSubmit({ preventDefault: () => {} } as React.FormEvent);
                  }, 500);
                }}
              >
                What's the cost for a 5-day temple tour?
              </Badge>
              
              <Badge 
                className="px-4 py-2 cursor-pointer bg-muted hover:bg-muted/80 text-foreground"
                onClick={() => {
                  setInput("Are special meals available for diabetic seniors?");
                  setTimeout(() => {
                    handleSubmit({ preventDefault: () => {} } as React.FormEvent);
                  }, 500);
                }}
              >
                Are special meals available for diabetic seniors?
              </Badge>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Chatbot;
