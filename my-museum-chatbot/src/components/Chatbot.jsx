import React, { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "system" },
  ]);
  const [input, setInput] = useState("");

  // Track booking details
  const [step, setStep] = useState(null); // Track conversation stage
  const [selectedMuseum, setSelectedMuseum] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTickets, setSelectedTickets] = useState("");

  const responses = {
    hello: "Hello! Which museum do you want to book?",
    hi: "Hi there! Looking to book a museum ticket?",
    "book ticket": "Sure! Which museum are you interested in?",
    "museum info":
      "We have various museums available. Which one would you like details about?",
    default: "I'm not sure about that. Can you rephrase your question?",
  };

  // Museum database with information (simulating web scraping)
  const museumDatabase = {
    "metropolitan museum": {
      name: "Metropolitan Museum of Art",
      location: "New York City, NY",
      description: "One of the world's largest and most prestigious art museums, featuring over 2 million works spanning 5,000+ years of art.",
      highlights: ["Egyptian Art", "European Paintings", "American Art", "Modern Art"],
      hours: "10:00 AM - 5:30 PM (Closed Mondays)",
      admission: "$25 for adults, $17 for seniors, $12 for students",
      website: "https://www.metmuseum.org",
      rating: 4.8,
      special_exhibits: ["Ancient Egypt", "Impressionism", "Contemporary Art"]
    },
    "louvre": {
      name: "Louvre Museum",
      location: "Paris, France",
      description: "The world's largest art museum and a historic monument, home to the Mona Lisa and thousands of other masterpieces.",
      highlights: ["Mona Lisa", "Venus de Milo", "Winged Victory", "Egyptian Antiquities"],
      hours: "9:00 AM - 6:00 PM (Closed Tuesdays)",
      admission: "€17 for adults, free for EU residents under 26",
      website: "https://www.louvre.fr",
      rating: 4.7,
      special_exhibits: ["Renaissance Art", "Islamic Art", "Greek Antiquities"]
    },
    "british museum": {
      name: "British Museum",
      location: "London, UK",
      description: "A public museum dedicated to human history, art and culture, with over 8 million works from all continents.",
      highlights: ["Rosetta Stone", "Parthenon Marbles", "Egyptian Mummies", "Assyrian Reliefs"],
      hours: "10:00 AM - 5:30 PM (Daily)",
      admission: "Free admission",
      website: "https://www.britishmuseum.org",
      rating: 4.6,
      special_exhibits: ["Ancient Civilizations", "World Cultures", "Archaeological Discoveries"]
    },
    "uffizi": {
      name: "Uffizi Gallery",
      location: "Florence, Italy",
      description: "One of the most important Italian museums and the most visited, housing the world's finest collection of Italian Renaissance art.",
      highlights: ["Birth of Venus", "Primavera", "Medici Collection", "Renaissance Masterpieces"],
      hours: "8:15 AM - 6:50 PM (Closed Mondays)",
      admission: "€20 for adults, €10 for EU citizens 18-25",
      website: "https://www.uffizi.it",
      rating: 4.5,
      special_exhibits: ["Botticelli", "Renaissance Portraits", "Medieval Art"]
    },
    "prado": {
      name: "Museo del Prado",
      location: "Madrid, Spain",
      description: "Spain's main national art museum, featuring one of the world's finest collections of European art.",
      highlights: ["Las Meninas", "Goya's Black Paintings", "El Greco", "Velázquez"],
      hours: "10:00 AM - 8:00 PM (Closed Mondays)",
      admission: "€15 for adults, free for students under 25",
      website: "https://www.museodelprado.es",
      rating: 4.7,
      special_exhibits: ["Spanish Golden Age", "Flemish Art", "Italian Renaissance"]
    }
  };

  const getResponse = (userMessage) => {
    const lowerCaseMsg = userMessage.toLowerCase();

    if (step === "ask_museum") {
      setSelectedMuseum(userMessage);
      setStep("ask_date");
      return `Great! You chose ${userMessage}. On which date would you like to visit?`;
    }

    if (step === "ask_date") {
      setSelectedDate(userMessage);
      setStep("ask_tickets");
      return `Got it! You want to visit on ${userMessage}. How many tickets do you need?`;
    }

    if (step === "ask_tickets") {
      setSelectedTickets(userMessage);
      setStep(null);
      return `Booking confirmed! 🎉 You have booked ${userMessage} ticket(s) for ${selectedMuseum} on ${selectedDate}.`;
    }

    if (lowerCaseMsg.includes("book ticket")) {
      setStep("ask_museum");
      return "Sure! Which museum are you interested in?";
    }

    // Handle museum information queries
    for (const [museumKey, museumData] of Object.entries(museumDatabase)) {
      if (lowerCaseMsg.includes(museumKey) || lowerCaseMsg.includes(museumData.name.toLowerCase())) {
        return `🏛️ **${museumData.name}**\n\n📍 **Location:** ${museumData.location}\n\n📝 **Description:** ${museumData.description}\n\n⭐ **Rating:** ${museumData.rating}/5\n\n🕒 **Hours:** ${museumData.hours}\n\n💰 **Admission:** ${museumData.admission}\n\n🎨 **Highlights:** ${museumData.highlights.join(", ")}\n\n🖼️ **Special Exhibits:** ${museumData.special_exhibits.join(", ")}\n\n🌐 **Website:** ${museumData.website}`;
      }
    }

    // Handle general museum info requests
    if (lowerCaseMsg.includes("museum") && (lowerCaseMsg.includes("info") || lowerCaseMsg.includes("information"))) {
      const museumList = Object.keys(museumDatabase).map(key => museumDatabase[key].name).join(", ");
      return `I have information about these museums: ${museumList}. Which one would you like to know more about?`;
    }

    // Handle general questions
    if (lowerCaseMsg.includes("hello") || lowerCaseMsg.includes("hi")) {
      return "Hello! I'm your museum assistant. I can help you book tickets, provide museum information, or answer questions about exhibits. What would you like to do?";
    }

    if (lowerCaseMsg.includes("help")) {
      return "I can help you with:\n• Booking museum tickets\n• Getting museum information and details\n• Finding exhibits and highlights\n• Checking admission prices and hours\n• Providing visitor tips\n\nWhat would you like to know?";
    }

    if (lowerCaseMsg.includes("price") || lowerCaseMsg.includes("cost") || lowerCaseMsg.includes("admission")) {
      return "I can provide admission prices for specific museums. Which museum are you interested in?";
    }

    if (lowerCaseMsg.includes("hours") || lowerCaseMsg.includes("time") || lowerCaseMsg.includes("open")) {
      return "I can tell you the opening hours for specific museums. Which museum would you like to know about?";
    }

    if (lowerCaseMsg.includes("exhibit") || lowerCaseMsg.includes("collection")) {
      return "I can provide information about exhibits and collections at various museums. Which museum are you interested in?";
    }

    return responses[lowerCaseMsg] || "I'm here to help with museum bookings and information! You can ask me about specific museums, book tickets, or get general information. What would you like to know?";
  };

  const handleSendMessage = () => {
    if (input.trim() !== "") {
      const userMessage = { text: input, sender: "user" };
      const botResponse = { text: getResponse(input), sender: "system" };

      setMessages([...messages, userMessage, botResponse]);
      setInput("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleVoiceInput = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
  
    if (!SpeechRecognition) {
      alert("Your browser does not support Speech Recognition.");
      return;
    }
  
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";
  
    recognition.start();
  
    recognition.onstart = () => {
      console.log("Voice recognition started. Speak now...");
    };
  
    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      alert("Microphone error or not allowed. Please check permissions.");
    };
  
    recognition.onresult = (event) => {
      const voiceText = event.results[0][0].transcript;
      setInput(voiceText);
    };
  
    recognition.onend = () => {
      console.log("Voice recognition ended.");
    };
  };
  

  return (
    <div className="chatbot">
      <div className="chatbox">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}-message`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
        <button onClick={handleVoiceInput}>🎤</button>
      </div>
    </div>
  );
};

export default Chatbot;
