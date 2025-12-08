"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiPaperAirplane, HiSparkles } from "react-icons/hi";
import TerminalWindow from "./ui/TerminalWindow";
import Button from "./ui/Button";

const ContactMe: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [currentDate, setCurrentDate] = useState<string>("");

  React.useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString());
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Actual mailto for functionality (since no backend is setup yet)
    if (typeof window !== "undefined") {
      const subject = encodeURIComponent(formState.subject || "Inquiry from Website");
      const body = encodeURIComponent(
        `Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`
      );
      window.location.href = `mailto:amjadpitafi070@gmail.com?subject=${subject}&body=${body}`;
    }
    
    setIsSubmitting(false);
    setIsSent(true);
    setFormState({ name: "", email: "", subject: "", message: "" });
    
    // Reset success message after a delay
    setTimeout(() => setIsSent(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative py-20 overflow-hidden bg-[#0d1117]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-white mb-4">
             <span className="text-secondary">$</span> ./contact-me.sh
          </h2>
          <p className="text-muted font-mono">// Initialize communication protocol</p>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <TerminalWindow title="mail ~ compose">
            <div className="space-y-4">
                <div className="text-muted text-sm pb-2 border-b border-border">
                    <div>Last login: {currentDate || "..."} on ttys001</div>
                    <div>user@portfolio:~/contact$ mail -s "Project Inquiry" amjadpitafi070@gmail.com</div>
                </div>

                {isSent ? (
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }}
                        className="py-12 text-center space-y-4"
                    >
                         <div className="text-success text-5xl">✔</div>
                         <div className="text-xl font-mono text-white">Message sent successfully!</div>
                         <div className="text-muted">Return code: 0 (OK)</div>
                         <Button onClick={() => setIsSent(false)} variant="outline" className="mt-4">
                            Send another
                         </Button>
                    </motion.div>
                ) : (
                    <form onSubmit={handleSubmit} className="font-mono space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                             <div className="space-y-1">
                                 <label className="text-secondary text-xs uppercase font-bold">--from-name</label>
                                 <input 
                                    name="name"
                                    value={formState.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="John Doe"
                                    className="w-full bg-[#161b22] border border-border rounded p-2 text-foreground focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary/50 placeholder:text-muted/30"
                                 />
                             </div>
                             <div className="space-y-1">
                                 <label className="text-secondary text-xs uppercase font-bold">--reply-to</label>
                                 <input 
                                    name="email"
                                    type="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="john@example.com"
                                    className="w-full bg-[#161b22] border border-border rounded p-2 text-foreground focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary/50 placeholder:text-muted/30"
                                 />
                             </div>
                        </div>
                        
                        <div className="space-y-1">
                             <label className="text-secondary text-xs uppercase font-bold">--subject</label>
                             <input 
                                name="subject"
                                value={formState.subject}
                                onChange={handleChange}
                                required
                                placeholder="Project Collaboration"
                                className="w-full bg-[#161b22] border border-border rounded p-2 text-foreground focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary/50 placeholder:text-muted/30"
                             />
                        </div>

                         <div className="space-y-1">
                             <label className="text-secondary text-xs uppercase font-bold">--body</label>
                             <textarea 
                                name="message"
                                value={formState.message}
                                onChange={handleChange}
                                required
                                rows={6}
                                placeholder="Write your message here..."
                                className="w-full bg-[#161b22] border border-border rounded p-2 text-foreground focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary/50 placeholder:text-muted/30 resize-none"
                             />
                        </div>

                        <div className="pt-4 flex justify-end items-center gap-4">
                            <span className="text-muted text-xs animate-pulse hidden md:block">
                                _cursor waiting for input...
                            </span>
                            <Button type="submit" variant="primary" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <span className="flex items-center gap-2">
                                        <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                                        Sending...
                                    </span>
                                ) : (
                                    <span className="flex items-center gap-2">
                                        Execute <HiPaperAirplane className="rotate-90" />
                                    </span>
                                )}
                            </Button>
                        </div>
                    </form>
                )}
            </div>
          </TerminalWindow>
        </motion.div>
        
        {/* Connection Details Footer */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-sm font-mono text-muted">
            <div className="p-4 border border-dashed border-border rounded hover:border-secondary transition-colors group">
                <div className="text-secondary mb-2 group-hover:text-white transition-colors">protocol: email</div>
                <a href="mailto:amjadpitafi070@gmail.com" className="hover:text-neon-blue">amjadpitafi070@gmail.com</a>
            </div>
            <div className="p-4 border border-dashed border-border rounded hover:border-secondary transition-colors group">
                <div className="text-secondary mb-2 group-hover:text-white transition-colors">protocol: phone</div>
                 <a href="tel:+923033663070" className="hover:text-neon-blue">+92 3033663070</a>
            </div>
             <div className="p-4 border border-dashed border-border rounded hover:border-secondary transition-colors group">
                <div className="text-secondary mb-2 group-hover:text-white transition-colors">location: region</div>
                <span className="hover:text-neon-blue">Pakistan (PK)</span>
            </div>
        </div>

      </div>
    </section>
  );
};

export default ContactMe;
