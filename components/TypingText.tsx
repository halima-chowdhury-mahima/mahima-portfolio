
"use client";

import { useEffect, useState } from "react";

const phrases = [
  "Full Stack Developer",
  "React & Next.js Developer",
  "Creative Problem Solver",
  "Building Modern Web Apps",
];

export default function TypingText() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let delay = deleting ? 40 : 85;

    if (!deleting && text === currentPhrase) {
      delay = 1400;
    } else if (deleting && text === "") {
      delay = 300;
    }

    const timer = window.setTimeout(() => {
      if (!deleting && text === currentPhrase) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setPhraseIndex((previous) => (previous + 1) % phrases.length);
      } else if (deleting) {
        setText(currentPhrase.slice(0, text.length - 1));
      } else {
        setText(currentPhrase.slice(0, text.length + 1));
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [text, deleting, phraseIndex]);

  return (
    <span className="typing-text" aria-label={phrases[phraseIndex]}>
      <span aria-hidden="true">{text}</span>
      <span className="typing-cursor" aria-hidden="true">
        |
      </span>
    </span>
  );
}
