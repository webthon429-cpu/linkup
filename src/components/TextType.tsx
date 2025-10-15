import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface TextTypeProps {
  text: string[];
  typingSpeed?: number;
  pauseDuration?: number;
  showCursor?: boolean;
  cursorCharacter?: string;
}

const TextType = ({
  text,
  typingSpeed = 75,
  pauseDuration = 1500,
  showCursor = true,
  cursorCharacter = '|'
}: TextTypeProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (cursorRef.current && showCursor) {
      gsap.to(cursorRef.current, {
        opacity: 0,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      });
    }
  }, [showCursor]);

  useEffect(() => {
    const currentText = text[currentIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === currentText) {
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % text.length);
    } else {
      const speed = isDeleting ? typingSpeed / 2 : typingSpeed;
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentText.substring(0, displayText.length - 1)
            : currentText.substring(0, displayText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, text, typingSpeed, pauseDuration]);

  return (
    <span className="inline-block">
      {displayText}
      {showCursor && (
        <span ref={cursorRef} className="ml-1">
          {cursorCharacter}
        </span>
      )}
    </span>
  );
};

export default TextType;
