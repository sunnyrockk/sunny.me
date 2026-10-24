import { useMemo, useState } from "react";
import { Bot, Send, X } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { SITE } from "@/data/site";

const INITIAL_MESSAGE = `Hi, I can answer questions about ${SITE.name}, skills, projects, education, resume, and contact details.`;

type Message = { role: "user" | "assistant"; text: string };

function answerQuestion(question: string) {
  const query = question.toLowerCase();
  const projects = PROJECTS.map((project) => `${project.title}: ${project.description}`).join(" ");

  if (query.includes("project") || query.includes("work") || query.includes("portfolio")) {
    return `Sunny's projects include ${projects}`;
  }
  if (query.includes("skill") || query.includes("tech") || query.includes("stack")) {
    return "Sunny works with Java, Python, HTML, CSS, Bootstrap, Tailwind CSS, React.js, Node.js, Express.js, MongoDB, REST APIs, Git, GitHub, VS Code, Figma, Data Structures & Algorithms, and OOP.";
  }
  if (query.includes("education") || query.includes("college") || query.includes("university") || query.includes("study")) {
    return "Sunny is pursuing a B.Tech in Computer Science & Engineering at Shri Ramswaroop Memorial University (SRMU), Lucknow, from 2024 to 2028.";
  }
  if (query.includes("resume") || query.includes("cv")) {
    return `You can view or download Sunny's resume here: ${SITE.resume}`;
  }
  if (query.includes("email") || query.includes("contact") || query.includes("phone") || query.includes("reach")) {
    return `You can contact Sunny at ${SITE.email} or ${SITE.phone}. Location: ${SITE.location}.`;
  }
  if (query.includes("github") || query.includes("code")) {
    return `Sunny's GitHub profile is ${SITE.github}.`;
  }
  if (query.includes("linkedin") || query.includes("professional")) {
    return `Sunny's LinkedIn profile is ${SITE.linkedin}.`;
  }
  if (query.includes("name") || query.includes("who") || query.includes("about")) {
    return `${SITE.name} is a ${SITE.title} based in ${SITE.location}.`;
  }

  return "I can help with Sunny's skills, projects, education, resume, GitHub, LinkedIn, email, phone, and location. Try asking: What projects has Sunny built?";
}

export function PortfolioChatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([{ role: "assistant", text: INITIAL_MESSAGE }]);
  const suggestions = useMemo(() => ["What are Sunny's skills?", "Tell me about the projects", "How can I contact Sunny?"], []);

  function submitQuestion(question = input) {
    const trimmed = question.trim();
    if (!trimmed) return;
    setMessages((current) => [...current, { role: "user", text: trimmed }, { role: "assistant", text: answerQuestion(trimmed) }]);
    setInput("");
  }

  return (
    <aside className={`portfolio-chat${open ? " is-open" : ""}`} aria-label="Portfolio assistant">
      {open && (
        <section className="portfolio-chat-panel" aria-label="Chat with Sunny's portfolio assistant">
          <header className="portfolio-chat-header">
            <div><strong>Sunny&apos;s Assistant</strong><span>Ask about my work</span></div>
            <button type="button" className="portfolio-chat-close" onClick={() => setOpen(false)} aria-label="Close assistant"><X size={17} /></button>
          </header>
          <div className="portfolio-chat-messages" aria-live="polite">
            {messages.map((message, index) => <p key={`${message.role}-${index}`} className={`portfolio-chat-message ${message.role}`}>{message.text}</p>)}
          </div>
          <div className="portfolio-chat-suggestions">
            {suggestions.map((suggestion) => <button type="button" key={suggestion} onClick={() => submitQuestion(suggestion)}>{suggestion}</button>)}
          </div>
          <form className="portfolio-chat-form" onSubmit={(event) => { event.preventDefault(); submitQuestion(); }}>
            <input value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask about Sunny..." aria-label="Ask about Sunny" />
            <button type="submit" aria-label="Send question"><Send size={16} /></button>
          </form>
        </section>
      )}
      <button type="button" className="portfolio-chat-launcher" onClick={() => setOpen((current) => !current)} aria-expanded={open} aria-label={open ? "Close portfolio assistant" : "Open portfolio assistant"}>
        {open ? <X size={20} /> : <Bot size={20} />}<span>{open ? "Close" : "Chat"}</span>
      </button>
    </aside>
  );
}
