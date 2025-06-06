"use client"
import React, { useState } from "react";
import ThemeToggel from "@/components/ThemeToggel";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import useActiveSection from "@/hooks/useActiveSection";
import { Button } from "@/components/ui/button";
import { FaXTwitter, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa6";
import { Menu, X } from "lucide-react";
import CanvasBg from "@/components/CanvasBg";
import SkillsSection from "@/PortfolioPages/SkillsSection";
import AboutSection from "@/PortfolioPages/AboutSection";
import ProjectSection from "@/PortfolioPages/ProjectSection";
import ContactSection from "@/PortfolioPages/ContactSection";
import FooterSection from "@/PortfolioPages/FooterSection";

export default function Home() {
  const activeSection = useActiveSection(["home", "about", "skills", "projects", "contact"]);

  const [mobileDropdown, setMobileDropdown] = useState(false);

  const menuList = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
    { name: "Blogs", link: "/blogs" },
  ];

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] gap-0 select-none">

      {/* Header */}
      <header className="sticky top-0 z-50 w-full h-[70px] bg-slate-50 dark:bg-slate-950 flex justify-between md:justify-around items-center px-4 md:px-0">
        {mobileDropdown && (
          <div className="block md:hidden fixed left-0 top-0 h-[calc(100vh-70px)] mt-[70px] w-[220px] bg-slate-100 dark:bg-gray-950 shadow-md z-50 transition-all">
            <ul className="flex flex-col justify-center items-start gap-5 p-6 text-lg font-fancy">
              {menuList.map((item, index) => (
                <li key={index} className="hover:text-blue-600 transition-colors">
                  <Link href={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
            <div className="absolute left-0 bottom-4 w-full flex justify-center items-center gap-4 px-4">
              <a href="https://www.instagram.com/iamrahulydw" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={20} className="text-pink-600 dark:text-pink-400 hover:scale-110 transition-transform cursor-pointer" />
              </a>
              <a href="https://www.facebook.com/iamrahulydw" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={20} className="text-blue-700 dark:text-blue-400 hover:scale-110 transition-transform cursor-pointer" />
              </a>
              <a href="https://www.linkedin.com/in/rahulydw" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={20} className="text-sky-700 dark:text-sky-400 hover:scale-110 transition-transform cursor-pointer" />
              </a>
              <a href="https://twitter.com/rahulydw" target="_blank" rel="noopener noreferrer">
                <FaXTwitter size={20} className="text-blue-500 dark:text-white hover:scale-110 transition-transform cursor-pointer" />
              </a>
            </div>
          </div>
        )}

        <div className="flex justify-between items-center gap-4">
          {mobileDropdown ? (
            <X
              onClick={() => setMobileDropdown(!mobileDropdown)}
              className="text-2xl md:hidden cursor-pointer"
            />
          ) : (
            <Menu
              onClick={() => setMobileDropdown(!mobileDropdown)}
              className="text-2xl md:hidden cursor-pointer"
            />
          )}
          <Link href="#">
            <div className="text-2xl dark:text-blue-500 md:text-3xl font-cursive cursor-pointer">
              Rahul Yadav
            </div>
          </Link>
        </div>

        {/* Nav Menu */}
        <ul className="hidden md:flex justify-between items-center gap-5 text-[18px] font-tinos">
          {menuList.map((item, index) => {
            const isActive = activeSection === item.link.replace("#", "");
            return (
              <li
                key={index}
                className={`relative group cursor-pointer hover:text-blue-700 transition-colors duration-300 ${
                  isActive ? "text-orange-500 font-bold" : ""
                }`}
              >
                <Link href={item.link}>
                  {item.name}
                </Link>
                <span
                  className={`absolute left-0 bottom-0 h-[2px] transition-all ease-linear duration-300 ${
                    isActive
                      ? "w-full bg-orange-500"
                      : "w-0 group-hover:w-full group-hover:bg-blue-700 dark:group-hover:bg-white"
                  }`}
                ></span>
              </li>
            );
          })}
        </ul>

        <div className="flex justify-between items-center gap-4">
          <ThemeToggel />
          <Link href="#contact">
            <Button
              variant="outline"
              className="font-fancy font-semibold cursor-pointer !bg-blue-500 text-white hover:!text-black hover:dark:!bg-orange-300 hover:dark:!text-white"
            >
              Hire Me
            </Button>
          </Link>
        </div>
      </header>

      {/* Sections */}
      <section
        id="home"
        className="relative min-h-[calc(100vh-70px)] flex items-center px-6 sm:px-12 bg-slate-50 dark:bg-zinc-900 overflow-hidden"
      >
        <div className="absolute inset-0 z-0 ">
          <CanvasBg />
        </div>
        <div className="relative z-10 max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-10 items-center overflow-hidden">
          <div className="space-y-6 text-left">
            <h1 className="text-4xl sm:text-5xl font-fancy font-bold text-gray-800 dark:text-gray-100">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Rahul Yadav</span>
            </h1>
            <h2
              className="text-2xl sm:text-3xl font-semibold text-transparent bg-clip-text
              bg-gradient-to-r from-blue-500 to-purple-500
              dark:from-purple-400 dark:via-pink-500 dark:to-orange-400 font-tinos"
            >
              <Typewriter
                words={[
                  "Full Stack Web Developer",
                  "MERN Stack Developer",
                  "Next.js Expert",
                  "Dashboard Builder",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg max-w-xl font-tinos">
              MERN stack developer skilled in <strong>Next.js</strong> and <strong>Node.js</strong>, building clean dashboards, admin panels, and analytics views. I turn complex data into beautiful, responsive UIs and powerful full-stack apps.
            </p>
            <div className="flex justify-left items-center gap-5">
              <a href="https://www.instagram.com/iamrahulydw" target="_blank" rel="noopener noreferrer">
                <FaInstagram
                  size={20}
                  className="text-pink-600 dark:text-pink-400 hover:scale-110 transition-transform cursor-pointer"
                />
              </a>
              <a href="https://www.facebook.com/iamrahulydw" target="_blank" rel="noopener noreferrer">
                <FaFacebook
                  size={20}
                  className="text-blue-700 dark:text-blue-400 hover:scale-110 transition-transform cursor-pointer"
                />
              </a>
              <a href="https://www.linkedin.com/in/rahulydw" target="_blank" rel="noopener noreferrer">
                <FaLinkedin
                  size={20}
                  className="text-sky-700 dark:text-sky-400 hover:scale-110 transition-transform cursor-pointer"
                />
              </a>
              <a href="https://twitter.com/rahulydw" target="_blank" rel="noopener noreferrer">
                <FaXTwitter
                  size={20}
                  className="text-blue-500 dark:text-white hover:scale-110 transition-transform cursor-pointer"
                />
              </a>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full">
                Download CV
              </Button>
              <Link href="#projects">
                <Button
                  variant="outline"
                  className="cursor-pointer border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-2 rounded-full"
                >
                  Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <AboutSection />
      <SkillsSection />
      <ProjectSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
