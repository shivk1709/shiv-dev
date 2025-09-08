import { Mail, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <div className="font-mono space-y-4">
          <div className="text-muted-foreground">
            <span className="terminal-prompt">exit 0</span>
          </div>
          <div className="text-sm text-muted-foreground">
            <span className="json-bracket">{`{`}</span>{" "}
            <span className="json-string">"status"</span>
            <span className="json-bracket">:</span>{" "}
            <span className="json-value">"Thanks for visiting!"</span>{" "}
            <span className="json-bracket">{`}`}</span>
          </div>

          <div className="flex justify-center space-x-6 mt-6">
            <a
              href="mailto:shivksharma2332@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="footer-email"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/shiv-sharma-a79a9a185/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="footer-linkedin"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/shivk1709"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="footer-github"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>

          <div className="text-xs text-muted-foreground mt-8">
            &copy; 2025 Shiv Kumar Sharma — Built with React, Fueled by APIs ⚙️
          </div>
        </div>
      </div>
    </footer>
  );
}
