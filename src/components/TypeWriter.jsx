"use client"; // If using Next.js App Router
import { useState, useEffect } from "react";
import { Typography, useMediaQuery } from "@mui/material";

const TypewriterEffect = () => {
  const isMobile = useMediaQuery("(max-width:600px)"); // Detect mobile screens

  // Define separate texts for mobile and desktop
  const mobileTexts = [
    "Web Developer",
    "UI/UX Designer",
    "Tech Enthusiast",
    "Problem Solver",
  ];
  const desktopTexts = [
    "A Full Stack Developer",
    "Building Web Applications",
    "Crafting UIs & APIs",
    "Solving Problems with Code",
  ];

  const texts = isMobile ? mobileTexts : desktopTexts; // Choose based on screen size

  const typingSpeed = 100; // Adjust for faster/slower typing
  const deletingSpeed = 50; // Adjust for faster/slower deleting
  const pauseTime = 1000; // Pause after typing

  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[textIndex];

    if (!isDeleting && charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }

    if (!isDeleting && charIndex === currentText.length) {
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, deletingSpeed);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && charIndex === 0) {
      const timeout = setTimeout(() => {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, isDeleting, textIndex, texts]);

  return (
    <Typography
      fontWeight={"bolder"}
      fontSize={["2rem", "3rem", "3rem", "4rem"]}
      variant="h5"
      className="gradient-font"
      sx={{
        display: "inline-block",
        minHeight: "4rem",
      }}
    >
      {displayText}
      <Typography
        component="span"
        sx={{
          fontSize: ["2.5rem", "3rem", "3rem", "4rem"],
          color: "black !important",
        }}
      >
        |
      </Typography>
    </Typography>
  );
};

export default TypewriterEffect;
