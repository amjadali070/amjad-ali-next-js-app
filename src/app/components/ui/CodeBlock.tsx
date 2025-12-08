"use client";

import React from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = "javascript", className = "" }) => {
  return (
    <div className={`font-mono text-sm relative group ${className}`}>
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-10 bg-panel border-r border-border text-xs text-muted/50 flex flex-col items-center pt-4 select-none">
             {code.split('\n').map((_, i) => (
                 <span key={i} className="leading-6">{i + 1}</span>
             ))}
        </div>
      <div className="pl-10 md:pl-12 pt-4 pb-4 overflow-x-auto">
        <pre className="text-foreground leading-6">
          <code className={`language-${language} whitespace-pre`}>
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
