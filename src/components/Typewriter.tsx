"use client";

import React, { useState, useEffect } from "react";
import { Text } from "@/once-ui/components";

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}

export const Typewriter: React.FC<TypewriterProps> = ({
  text,
  speed = 100,
  delay = 0,
  className,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setStarted(true);
    }, delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    setDisplayedText(""); // Ensure it starts empty

    const typingInterval = setInterval(() => {
      setDisplayedText((prev) => {
        if (prev.length < text.length) {
          return text.slice(0, prev.length + 1);
        }
        clearInterval(typingInterval);
        return prev;
      });
    }, speed);

    return () => clearInterval(typingInterval);
  }, [started, text, speed]);

  if (!mounted) return null;

  return (
    <span className={className}>
      {displayedText}
      <span className="typewriter-cursor">|</span>
      <style jsx>{`
        .typewriter-cursor {
          animation: blink 1s step-end infinite;
          color: var(--accent-solid-strong);
          margin-left: 2px;
        }
        @keyframes blink {
          from, to { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </span>
  );
};
