// hooks/useActiveSection.js
"use client";
import { useEffect, useState } from "react";

export default function useActiveSection(sectionIds = []) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const offset = 120; // header height offset
      let current = "";

      for (let id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const top = section.getBoundingClientRect().top;
          if (top <= offset && top + section.offsetHeight > offset) {
            current = id;
            break;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);

  return activeSection;
}
