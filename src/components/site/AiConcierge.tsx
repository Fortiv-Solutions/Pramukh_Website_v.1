import React, { useState, useEffect, useRef } from "react";
import {
  X,
  Send,
  Sparkles,
  MapPin,
  Calendar,
  Phone,
  ArrowUpRight,
  RefreshCw,
  ChevronRight,
  Shield,
  Building2,
} from "lucide-react";
import { cn } from "@/lib/utils";

// --- Pramukh Official Monogram SVG Icon Component ---
function PramukhIcon({ className = "h-4 w-auto fill-[#AD945E]" }: { className?: string }) {
  return (
    <svg viewBox="240 0 885 410" className={className}>
      <path d="M712.24 224.63l0 36.1c0,0 108.25,16.5 123.84,129.03l60.14 0c0,0 -17.59,-8.96 -25.4,-30.49 -7.82,-21.57 -46.83,-120.06 -158.57,-134.64zm-245.29 -189.74l142.11 0 0 142.57c-103.09,-0.85 -139.19,-13.29 -142.11,-142.57zm-61.68 -34.89c0,0 27.52,18.54 27.76,53.04 0,3.32 0.24,6.44 0.57,9.4 9.57,128.22 64.5,146.25 175.46,147.65 0,0 -0.37,146.58 -0.54,146.58 0,0 -5.85,31.07 -21.97,33.07l22.51 0 19.65 0 15.08 0 0 -197.06 0 -175.25 0 -17.44 -195.19 0 -16.48 0 -26.85 0zm188.03 224.63l0 36.1c0,0 -108.21,16.5 -123.76,129.03l-60.22 0c0,0 17.64,-8.96 25.5,-30.49 7.76,-21.57 46.83,-120.06 158.48,-134.64zm103.17 -47.17l0 -142.57 142.07 0c-2.82,129.25 -38.94,141.69 -142.07,142.57zm177 -177.45l-16.53 0 -195.11 0 0 17.4 0 175.28 0 197.06 15 0 19.64 0 22.57 0c-16.18,-2 -21.93,-33.1 -21.93,-33.1 -0.21,0 -0.64,-146.54 -0.64,-146.54 111.03,-1.41 165.89,-19.44 175.46,-147.67 0.37,-2.96 0.61,-6.08 0.61,-9.4 0.26,-34.5 27.78,-53.03 27.78,-53.03l-26.85 0z" />
    </svg>
  );
}

interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
  chips?: Array<{ label: string; action: string }>;
  projectCard?: {
    title: string;
    location: string;
    type: string;
    link: string;
    image: string;
  };
  formTrigger?: boolean;
}

const INITIAL_PROMPTS = [
  { label: "✨ One Tapi 5 BHK", query: "Tell me about One Tapi in Piplod" },
  { label: "🏢 Surat Commercial Hubs", query: "What commercial retail and office projects do you have in Surat?" },
  { label: "🏡 Residential in Vesu & Pal", query: "Show me residential projects in Vesu and Pal" },
  { label: "📅 Schedule a Site Visit", query: "I would like to schedule a site visit" },
  { label: "💎 All-In Ownership™", query: "What is the Pramukh All-In Ownership philosophy?" },
  { label: "📍 Surat HQ Office", query: "Where is your Surat headquarters located?" },
];

function formatTime(date: Date) {
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export function AiConcierge({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome-1",
      sender: "bot",
      text: "Welcome to Pramukh Group. I am your AI Property Advisor. How may I assist your real estate journey today?",
      timestamp: formatTime(new Date()),
      chips: [
        { label: "One Tapi 5 BHK Penthouses", action: "Tell me about One Tapi in Piplod" },
        { label: "Surat Projects Portfolio", action: "What projects do you have in Surat?" },
        { label: "Book a Site Visit", action: "I would like to schedule a site visit" },
      ],
    },
  ]);
  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [leadForm, setLeadForm] = useState({ name: "", phone: "", project: "General Inquiry" });
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || inputVal).trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: query,
      timestamp: formatTime(new Date()),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputVal("");
    setIsTyping(true);

    // AI Context-Aware Response Engine
    setTimeout(() => {
      const botResponse = generateAiResponse(query);
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 600);
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLeadSubmitted(true);
    setTimeout(() => {
      const confirmMsg: ChatMessage = {
        id: `bot-confirm-${Date.now()}`,
        sender: "bot",
        text: `Thank you, ${leadForm.name}! Your request has been registered for ${leadForm.project}. Our Senior Property Advisor will reach out to you on ${leadForm.phone} shortly.`,
        timestamp: formatTime(new Date()),
      };
      setMessages((prev) => [...prev, confirmMsg]);
      setLeadSubmitted(false);
      setLeadForm({ name: "", phone: "", project: "General Inquiry" });
    }, 1100);
  };

  const resetChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: "bot",
        text: "Chat refreshed. How can I assist you with Pramukh's residential, commercial, or industrial properties today?",
        timestamp: formatTime(new Date()),
        chips: [
          { label: "One Tapi 5 BHK Penthouses", action: "Tell me about One Tapi in Piplod" },
          { label: "Surat Projects", action: "What projects do you have in Surat?" },
          { label: "Book a Site Visit", action: "I would like to schedule a site visit" },
        ],
      },
    ]);
  };

  function generateAiResponse(query: string): ChatMessage {
    const q = query.toLowerCase();
    const ts = formatTime(new Date());

    // 1. One Tapi
    if (q.includes("one tapi") || q.includes("tapi") || q.includes("piplod") || q.includes("penthouse")) {
      return {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: "One Tapi is Pramukh's ultra-luxury flagship development on the banks of the Tapi River in Piplod, Surat. It features limited-edition 5 BHK residences and sky penthouses with 180° panoramic water views, direct biometric elevator landings, and resort-grade amenities beside Surat City Gymkhana.",
        timestamp: ts,
        projectCard: {
          title: "One Tapi • 5 BHK Waterfront Penthouses",
          location: "Piplod, Surat (Beside City Gymkhana)",
          type: "Residential Flagship",
          link: "/one-tapi",
          image: "/images/projects/onetapi.webp",
        },
        chips: [
          { label: "Explore One Tapi Page", action: "Take me to One Tapi page" },
          { label: "Book One Tapi Site Tour", action: "Book a site tour for One Tapi" },
        ],
      };
    }

    // 2. Commercial / Orbit
    if (q.includes("commercial") || q.includes("orbit") || q.includes("office") || q.includes("shop") || q.includes("retail")) {
      return {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: "Pramukh has developed iconic commercial destinations across Surat's prime business corridors:\n\n• **Pramukh Orbit 5** (VIP Road, Vesu) — Premier corporate headquarters & medical hubs.\n• **Pramukh Orbit 4 & 3** (Vesu & Bhatar) — High-demand retail showrooms and modern boutique offices.\n• **Orbit Plaza** (Godadara) — High-visibility ground-level commercial retail.",
        timestamp: ts,
        chips: [
          { label: "View Surat Projects", action: "Show me all Surat projects" },
          { label: "Enquire for Commercial Space", action: "I want to enquire about commercial space" },
        ],
      };
    }

    // 3. Residential / Vesu / Pal / Agastya / Satva
    if (q.includes("residential") || q.includes("vesu") || q.includes("pal") || q.includes("agastya") || q.includes("satva") || q.includes("flat") || q.includes("home") || q.includes("apartment")) {
      return {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: "Pramukh offers high-end residential communities in Surat's most desirable micro-markets:\n\n• **One Tapi** (Piplod) — Ultra-luxury 5 BHK waterfront residences.\n• **Pramukh Agastya** (VIP Road, Vesu) — Luxury living with double-height entrance lobbies.\n• **Pramukh Satva** (Pal) — Family residences with serene landscaped open zones.\n• **Central Park** (Godadara) — Master-planned residential enclave.",
        timestamp: ts,
        chips: [
          { label: "View Residential Projects", action: "Show residential projects" },
          { label: "Schedule Site Visit", action: "I would like to schedule a site visit" },
        ],
      };
    }

    // 4. Site visit / Tour / Schedule / Booking
    if (q.includes("site visit") || q.includes("tour") || q.includes("schedule") || q.includes("visit") || q.includes("book") || q.includes("appointment")) {
      return {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: "We would be delighted to host you for a curated property walkthrough. Please submit your contact details below, and our relationship manager will confirm your preferred timing:",
        timestamp: ts,
        formTrigger: true,
      };
    }

    // 5. All-In Ownership
    if (q.includes("all-in") || q.includes("ownership") || q.includes("philosophy") || q.includes("trust") || q.includes("why pramukh")) {
      return {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: "Pramukh's All-In Ownership™ is our foundational commitment built over 30+ years:\n\n1. **Zero Hidden Charges** — Complete pricing transparency.\n2. **Timely Handover Assurance** — Proven 60+ delivered landmarks.\n3. **Precision Engineering** — Strict structural quality controls.\n4. **In-House Facility Care** — Long-term asset management.",
        timestamp: ts,
        chips: [
          { label: "View Delivered Landmarks", action: "Show delivered projects" },
          { label: "Contact Us", action: "Where is your office?" },
        ],
      };
    }

    // 6. Location / Office / Contact / Address
    if (q.includes("office") || q.includes("location") || q.includes("address") || q.includes("contact") || q.includes("phone") || q.includes("email") || q.includes("hq")) {
      return {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: "You are welcome to visit our Experience Centers:\n\n📍 **Surat Regional HQ:** 10th Floor, Orbit-2, Beside Celestial Dreams, Vesu Canal Road, Surat (Mon–Sat, 10 AM – 7 PM)\n📞 **Telephone:** +91 99789 86778\n✉️ **Email:** inquiry@mypramukh.com\n\nWe also have regional corporate offices in **Vapi** and **Silvassa**.",
        timestamp: ts,
        chips: [
          { label: "Explore Surat Page", action: "Take me to Surat page" },
          { label: "Schedule Visit", action: "I would like to schedule a site visit" },
        ],
      };
    }

    // 7. Navigation intents
    if (q.includes("take me to one tapi") || q.includes("open one tapi")) {
      if (typeof window !== "undefined") window.location.href = "/one-tapi";
      return {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: "Navigating to One Tapi Flagship page...",
        timestamp: ts,
      };
    }

    if (q.includes("take me to surat") || q.includes("open surat")) {
      if (typeof window !== "undefined") window.location.href = "/surat";
      return {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: "Navigating to Surat City Flagship page...",
        timestamp: ts,
      };
    }

    // Default intelligent advisory fallback
    return {
      id: `bot-${Date.now()}`,
      sender: "bot",
      text: "Pramukh Group has been crafting landmark spaces across South Gujarat for over 30 years with 60+ delivered projects and 17M+ sq. ft. constructed.\n\nWhether you are exploring luxury waterfront residences at One Tapi, high-street commercial showrooms in Vesu, or industrial logistics parks, I can provide detailed floor plans, micro-market analysis, and arrange site walkthroughs.",
      timestamp: ts,
      chips: [
        { label: "One Tapi 5 BHK", action: "Tell me about One Tapi in Piplod" },
        { label: "Surat Commercial Hubs", action: "What commercial retail and office projects do you have in Surat?" },
        { label: "Schedule a Site Visit", action: "I would like to schedule a site visit" },
      ],
    };
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-end sm:p-6 pointer-events-none select-none font-sans">
      {/* Background Overlay for mobile touch dismiss */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/35 backdrop-blur-sm transition-opacity duration-300 pointer-events-auto sm:bg-transparent sm:backdrop-blur-none"
      />

      {/* Floating AI Concierge Chat Container — Premium Light Luxury Theme */}
      <div className="pointer-events-auto relative flex flex-col w-full sm:w-[410px] md:w-[430px] h-[90vh] sm:h-[630px] max-h-[92vh] bg-[#FAF8F5] text-[#1C1A17] rounded-t-3xl sm:rounded-2xl border border-[#AD945E]/35 shadow-[0_25px_60px_rgba(173,148,94,0.22)] overflow-hidden animate-in slide-in-from-bottom-8 zoom-in-95 duration-300">
        
        {/* Header Bar: Luxury Gold Monogram + Live Indicator + Window Controls */}
        <div className="relative z-10 px-5 py-4 bg-white/95 backdrop-blur-md border-b border-[#AD945E]/20 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            {/* Gold Monogram Avatar with Live Pulsing Dot */}
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FAF8F5] border border-[#AD945E]/40 shadow-sm">
              <PramukhIcon className="h-5 w-auto fill-[#AD945E]" />
              <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-sm font-semibold tracking-wide text-[#1C1A17]">
                  WELCOME TO PRAMUKH AI
                </span>
              </div>
              <p className="text-[0.62rem] uppercase tracking-[0.2em] text-[#8C734B] font-bold">
                PROPERTY ADVISOR • 24/7 CONCIERGE
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            {/* Refresh Chat Button */}
            <button
              onClick={resetChat}
              title="Reset conversation"
              className="flex h-8 w-8 items-center justify-center rounded-full text-[#1C1A17]/60 hover:text-[#1C1A17] hover:bg-[#AD945E]/10 transition-colors cursor-pointer"
            >
              <RefreshCw className="h-3.5 w-3.5" />
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              title="Close concierge"
              className="flex h-8 w-8 items-center justify-center rounded-full text-[#1C1A17]/60 hover:text-[#1C1A17] hover:bg-[#AD945E]/10 transition-colors cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Chat History Messages Stream — Clean Light Aesthetic with Hidden Scrollbars */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 bg-[#FAF8F5] text-xs leading-relaxed scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {/* Subtle Security & Privacy Badge */}
          <div className="flex items-center justify-center gap-1.5 py-1 text-[0.62rem] text-[#1C1A17]/50 uppercase tracking-widest select-none">
            <Shield className="h-3.5 w-3.5 text-[#AD945E]" />
            <span>Official Pramukh Group AI Real Estate Advisor</span>
          </div>

          {messages.map((msg) => (
            <div
              key={msg.id}
              className={cn(
                "flex flex-col gap-1.5 max-w-[88%] animate-in fade-in duration-300",
                msg.sender === "user" ? "ml-auto items-end" : "mr-auto items-start"
              )}
            >
              {/* Bot / User Message Bubble */}
              <div className="flex items-start gap-2">
                {msg.sender === "bot" && (
                  <div className="h-6 w-6 rounded-full bg-white border border-[#AD945E]/40 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <PramukhIcon className="h-3 w-auto fill-[#AD945E]" />
                  </div>
                )}

                <div
                  className={cn(
                    "p-3.5 rounded-2xl shadow-sm leading-relaxed",
                    msg.sender === "user"
                      ? "bg-[#AD945E] text-white rounded-br-none font-medium shadow-md"
                      : "bg-white border border-[#AD945E]/25 text-[#1C1A17] rounded-bl-none"
                  )}
                >
                  <p className="whitespace-pre-line leading-relaxed font-light text-[0.78rem]">
                    {msg.text}
                  </p>

                  {/* Optional Project Card Inside Message */}
                  {msg.projectCard && (
                    <div className="mt-3 rounded-xl border border-[#AD945E]/30 bg-[#FAF8F5] p-2.5 space-y-2 overflow-hidden shadow-xs">
                      <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden bg-black/5">
                        <img
                          src={msg.projectCard.image}
                          alt={msg.projectCard.title}
                          className="h-full w-full object-cover"
                        />
                        <span className="absolute top-2 left-2 rounded-full bg-black/75 backdrop-blur-md px-2.5 py-0.5 text-[0.55rem] uppercase tracking-wider font-bold text-[#D4C39B]">
                          {msg.projectCard.type}
                        </span>
                      </div>
                      <div className="space-y-0.5 px-1">
                        <h4 className="font-serif font-medium text-[#1C1A17] text-xs">
                          {msg.projectCard.title}
                        </h4>
                        <p className="text-[0.66rem] text-[#1C1A17]/65 flex items-center gap-1">
                          <MapPin className="h-2.5 w-2.5 text-[#AD945E]" />
                          <span>{msg.projectCard.location}</span>
                        </p>
                      </div>
                      <a
                        href={msg.projectCard.link}
                        className="inline-flex items-center justify-center gap-1.5 w-full bg-[#AD945E] hover:bg-[#8C734B] text-white py-1.5 rounded-md text-[0.62rem] font-bold uppercase tracking-wider transition-colors shadow-xs"
                      >
                        <span>View Showcase</span>
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    </div>
                  )}

                  {/* Optional Inline Lead Capture Form */}
                  {msg.formTrigger && (
                    <form onSubmit={handleLeadSubmit} className="mt-3 space-y-2 pt-2 border-t border-[#AD945E]/20">
                      <input
                        type="text"
                        required
                        placeholder="Your Full Name *"
                        value={leadForm.name}
                        onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                        className="w-full h-8 px-3 text-[0.72rem] bg-white border border-[#AD945E]/30 rounded text-[#1C1A17] placeholder:text-[#1C1A17]/40 focus:outline-none focus:border-[#AD945E]"
                      />
                      <input
                        type="tel"
                        required
                        placeholder="Phone / WhatsApp *"
                        value={leadForm.phone}
                        onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                        className="w-full h-8 px-3 text-[0.72rem] bg-white border border-[#AD945E]/30 rounded text-[#1C1A17] placeholder:text-[#1C1A17]/40 focus:outline-none focus:border-[#AD945E]"
                      />
                      <select
                        value={leadForm.project}
                        onChange={(e) => setLeadForm({ ...leadForm, project: e.target.value })}
                        className="w-full h-8 px-2 text-[0.72rem] bg-white border border-[#AD945E]/30 rounded text-[#1C1A17] focus:outline-none focus:border-[#AD945E] cursor-pointer"
                      >
                        <option value="One Tapi Piplod">One Tapi (Piplod)</option>
                        <option value="Pramukh Agastya (Vesu)">Pramukh Agastya (VIP Road Vesu)</option>
                        <option value="Pramukh Orbit Commercial">Pramukh Orbit Commercial Hub</option>
                        <option value="General Surat Projects">General Surat Consultation</option>
                      </select>
                      <button
                        type="submit"
                        disabled={leadSubmitted}
                        className="w-full bg-[#AD945E] hover:bg-[#8C734B] text-white h-8 rounded text-[0.66rem] font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                      >
                        <span>{leadSubmitted ? "Confirming..." : "Confirm Site Walkthrough"}</span>
                        <Calendar className="h-3 w-3" />
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* Timestamp */}
              <span className="text-[0.58rem] text-[#1C1A17]/40 px-8 select-none">
                {msg.timestamp}
              </span>

              {/* Interactive Quick Response Chips */}
              {msg.chips && msg.chips.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-1 pl-8">
                  {msg.chips.map((chip, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(chip.action)}
                      className="rounded-full bg-white border border-[#AD945E]/35 px-3 py-1 text-[0.65rem] font-semibold text-[#8C734B] hover:bg-[#AD945E] hover:text-white hover:border-[#AD945E] transition-all cursor-pointer shadow-xs text-left flex items-center gap-1"
                    >
                      <span>{chip.label}</span>
                      <ChevronRight className="h-2.5 w-2.5 opacity-60" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-white border border-[#AD945E]/40 flex items-center justify-center shrink-0 shadow-xs">
                <PramukhIcon className="h-3 w-auto fill-[#AD945E]" />
              </div>
              <div className="flex items-center gap-1.5 bg-white border border-[#AD945E]/25 text-[#1C1A17]/70 p-3 rounded-2xl rounded-bl-none shadow-xs animate-in fade-in duration-200">
                <span className="h-1.5 w-1.5 rounded-full bg-[#AD945E] animate-bounce" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#AD945E] animate-bounce [animation-delay:0.15s]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#AD945E] animate-bounce [animation-delay:0.3s]" />
                <span className="text-[0.62rem] uppercase tracking-wider text-[#8C734B] ml-1 font-bold">
                  Advisor typing...
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Footer Input Box — Clean Alabaster & Gold Input */}
        <div className="p-3 sm:p-4 bg-white border-t border-[#AD945E]/20 shadow-lg">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="relative flex items-center gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Ask anything about Pramukh projects, pricing, site visits..."
              className="w-full h-11 pl-4 pr-12 rounded-xl bg-[#FAF8F5] border border-[#AD945E]/35 text-xs text-[#1C1A17] placeholder:text-[#1C1A17]/40 focus:outline-none focus:border-[#AD945E] focus:ring-1 focus:ring-[#AD945E]/40 transition-colors"
            />

            <button
              type="submit"
              disabled={!inputVal.trim()}
              className="absolute right-1.5 h-8 w-8 flex items-center justify-center rounded-lg bg-[#AD945E] text-white disabled:opacity-40 disabled:hover:bg-[#AD945E] hover:bg-[#8C734B] transition-colors cursor-pointer shadow-xs"
              aria-label="Send message"
            >
              <Send className="h-3.5 w-3.5" />
            </button>
          </form>

          <div className="pt-2 flex items-center justify-between text-[0.58rem] text-[#1C1A17]/50 select-none">
            <span className="font-serif tracking-wide text-[#8C734B]">Pramukh Real Estate Intelligence</span>
            <div className="flex items-center gap-2">
              <a href="tel:+919978986778" className="hover:text-[#AD945E] transition-colors flex items-center gap-0.5 font-medium">
                <Phone className="h-2.5 w-2.5 text-[#AD945E]" />
                <span>+91 99789 86778</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

