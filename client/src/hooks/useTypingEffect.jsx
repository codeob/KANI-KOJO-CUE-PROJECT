import { useState, useEffect } from "react";

export default function useTypingEffect(text, duration = 60000) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!text) return;

    let index = -1;
    const intervalTime = duration / text.length;

    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;

      if (index >= text.length) {
        clearInterval(interval);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [text, duration]);

  return displayedText;
}
