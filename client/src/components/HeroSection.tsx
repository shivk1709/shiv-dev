import { useEffect, useState } from "react";
import { Mail, Linkedin, Github } from "lucide-react";

export default function HeroSection() {
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTypingComplete(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-8">
          <img
            src="https://github.com/shivk1709/shiv-dev/blob/main/Shiv_Image.jpg?raw=true"
            alt="Shiv Kumar Sharma Profile"
            className="w-[15rem] h-[15rem] rounded-full mx-auto object-cover shadow-2xl shadow-primary/50 hover:shadow-primary/70 transition-shadow duration-300"
            data-testid="profile-image"
          />
        </div>

        <div className="font-mono space-y-4">
          <div className="text-muted-foreground text-lg">
            <span className="terminal-prompt">whoami</span>
          </div>
          <h1
            className={`text-4xl md:text-6xl font-bold text-primary ${
              isTypingComplete ? "terminal-cursor" : ""
            }`}
            data-testid="hero-title"
          >
            Shiv Kumar Sharma
          </h1>
          <div className="text-xl md:text-2xl text-secondary font-semibold">
            <span className="json-bracket">{`{`}</span>{" "}
            <span className="json-string">"role"</span>
            <span className="json-bracket">:</span>{" "}
            <span className="json-value">"Software Engineer"</span>{" "}
            <span className="json-bracket">{`}`}</span>
          </div>
          <div className="text-lg text-muted-foreground max-w-3xl mx-auto">
            <span className="json-key">"specialization"</span>
            <span className="json-bracket">:</span>{" "}
            <span className="json-string">
              "Java | Spring Boot | Microservices | Kafka | Docker | Kubernetes | Jenkins"
            </span>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 max-w-4xl mx-auto">
          <a
            href="mailto:shivksharma2332@gmail.com"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors terminal-prompt inline-flex items-center justify-center gap-2"
            data-testid="contact-email"
          >
            <Mail size={20} />
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/shiv-sharma-a79a9a185/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors terminal-prompt inline-flex items-center justify-center gap-2"
            data-testid="connect-linkedin"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
          <a
            href="https://github.com/shivk1709"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-secondary text-secondary px-6 py-3 rounded-lg hover:bg-secondary hover:text-secondary-foreground transition-colors terminal-prompt inline-flex items-center justify-center gap-2"
            data-testid="view-github"
          >
            <Github size={20} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
