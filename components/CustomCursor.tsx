import React, { useState, useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [hotspot, setHotspot] = useState({ x: 0, y: 0 });
  // No need for isHovering state if we rely on body class

  useEffect(() => {
    // Read hotspot values from CSS variables once on mount
    if (typeof window !== 'undefined') {
      try {
        const style = getComputedStyle(document.documentElement);
        const xString = style.getPropertyValue('--cursor-hotspot-x').trim();
        const yString = style.getPropertyValue('--cursor-hotspot-y').trim();
        
        // Robust parsing, defaulting to 0 if parsing fails or value is not purely numeric
        const x = parseFloat(xString.replace('px', '')) || 0;
        const y = parseFloat(yString.replace('px', '')) || 0;
        
        setHotspot({ x, y });
      } catch (error) {
        console.error("Failed to read cursor hotspot CSS variables:", error);
        // Fallback to default hotspot if CSS variables are not found or invalid
        setHotspot({ x: 0, y: 16 }); // Default for a 32px high, left-centered arrow
      }
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (cursorRef.current) {
      cursorRef.current.style.left = `${mousePosition.x - hotspot.x}px`;
      cursorRef.current.style.top = `${mousePosition.y - hotspot.y}px`;
    }
  }, [mousePosition, hotspot]);
  
  useEffect(() => {
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input[type="submit"], input[type="checkbox"], input[type="radio"], select, label[for]'
    );
    const textInputElements = document.querySelectorAll(
        'input[type="text"], input[type="email"], input[type="password"], input[type="search"], input[type="tel"], input[type="url"], textarea, [contenteditable="true"]'
    );

    const showCustomCursor = () => {
      if(cursorRef.current) cursorRef.current.style.opacity = '1';
      document.body.style.cursor = 'none';
    };

    const hideCustomCursor = (systemCursorType: string = 'auto') => {
      if(cursorRef.current) cursorRef.current.style.opacity = '0';
      document.body.style.cursor = systemCursorType;
    };

    const handleMouseEnterInteractive = (e: Event) => {
      const target = e.target as HTMLElement;
      // Check if the target or its parent is a text input. If so, defer to text input handling.
      if (target.closest('input[type="text"], input[type="email"], input[type="password"], input[type="search"], input[type="tel"], input[type="url"], textarea, [contenteditable="true"]')) {
        hideCustomCursor('text');
      } else {
        document.body.classList.add('cursor-hover');
        showCustomCursor();
      }
    };

    const handleMouseLeaveInteractive = () => {
      document.body.classList.remove('cursor-hover');
      // Only restore custom cursor if not over a text input that currently has focus
      const activeElement = document.activeElement;
      if (!activeElement || !activeElement.matches('input[type="text"], input[type="email"], input[type="password"], input[type="search"], input[type="tel"], input[type="url"], textarea, [contenteditable="true"]')) {
        showCustomCursor();
      }
    };
    
    const handleTextInputFocus = () => {
      hideCustomCursor('text');
    };

    const handleTextInputBlur = () => {
      showCustomCursor();
       // Check if mouse is currently over an interactive element to re-apply hover if needed
      const hoveredInteractive = document.querySelector('a:hover, button:hover, [role="button"]:hover, input[type="submit"]:hover, input[type="checkbox"]:hover, input[type="radio"]:hover, select:hover, label[for]:hover');
      if (hoveredInteractive) {
        document.body.classList.add('cursor-hover');
      } else {
        document.body.classList.remove('cursor-hover');
      }
    };

    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnterInteractive);
      el.addEventListener('mouseleave', handleMouseLeaveInteractive);
    });
    textInputElements.forEach(el => {
      el.addEventListener('focus', handleTextInputFocus);
      el.addEventListener('blur', handleTextInputBlur);
       // Also handle mouseenter/mouseleave for text inputs directly for immediate effect
      el.addEventListener('mouseenter', handleTextInputFocus); 
      el.addEventListener('mouseleave', handleTextInputBlur);
    });

    // Initial check in case a text field is already focused on load
    const activeElement = document.activeElement;
    if (activeElement && activeElement.matches('input[type="text"], input[type="email"], input[type="password"], input[type="search"], input[type="tel"], input[type="url"], textarea, [contenteditable="true"]')) {
        handleTextInputFocus();
    }


    return () => {
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnterInteractive);
        el.removeEventListener('mouseleave', handleMouseLeaveInteractive);
      });
      textInputElements.forEach(el => {
        el.removeEventListener('focus', handleTextInputFocus);
        el.removeEventListener('blur', handleTextInputBlur);
        el.removeEventListener('mouseenter', handleTextInputFocus);
        el.removeEventListener('mouseleave', handleTextInputBlur);
      });
      document.body.classList.remove('cursor-hover');
      document.body.style.cursor = 'auto'; // Restore default system cursor on unmount
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount


  return (
    <div ref={cursorRef} className="custom-cursor-pointer" aria-hidden="true"></div>
  );
};

export default CustomCursor;