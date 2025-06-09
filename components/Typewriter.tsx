
import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  className?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 150, className }) => {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    setDisplayedText(''); // Reset on text change
    let i = 0;
    if (text.length > 0) {
        const typingInterval = setInterval(() => {
        if (i < text.length) {
            setDisplayedText(prevText => prevText + text.charAt(i));
            i++;
        } else {
            clearInterval(typingInterval);
        }
        }, speed);
        return () => clearInterval(typingInterval);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, speed]);

  // Ensure JetBrains Mono font is applied, though parent class should ideally handle this.
  return <span className={`${className} font-jetbrains-mono`}>{displayedText}</span>;
};

export default Typewriter;