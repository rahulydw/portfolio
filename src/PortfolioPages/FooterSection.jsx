import React from "react";

const Footer = () => {
  return (
    <footer
      className="w-full border-t border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-zinc-900 text-center py-6 px-4 transition-colors duration-300"
      role="contentinfo"
      aria-label="Website footer"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Rahul Yadav",
            url: "https://github.com/rahulydw",
            sameAs: ["https://github.com/rahulydw"],
            description: "MERN stack developer and designer of this portfolio website.",
          }),
        }}
      />
      <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base font-light" lang="en">
        © {new Date().getFullYear()} — Designed & Developed by{" "}
        <a
          href="https://github.com/rahulydw"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-purple-400 hover:underline font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          aria-label="Visit Rahul Yadav's GitHub profile"
        >
          Rahul Yadav
        </a>
      </p>
    </footer>
  );
};

export default Footer;