import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const data = Object.fromEntries(formData.entries());

    console.log("Form Data:", data);
    setIsSent(true);
    form.current.reset();

    toast.success("Message ready to send! ✅", {
      position: "top-right",
      autoClose: 3000,
      theme: "dark",
    });
  };

  return (
    <section
      id="contact"
      className="relative z-10 min-h-[calc(100vh-70px)] w-full overflow-hidden py-16 px-4 sm:px-8 bg-gradient-to-b from-slate-200 to-gray-400 dark:from-black dark:via-zinc-800 dark:to-gray-800 text-gray-800 dark:text-white"
      role="region"
      aria-label="Contact section"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Rahul Yadav",
            description: "Contact form for Rahul Yadav, a MERN stack developer, to discuss projects and opportunities.",
            url: "https://rahulydw.vercel.app/#contact",
            author: {
              "@type": "Person",
              name: "Rahul Yadav",
              email: "rahul.yadav@example.com",
              sameAs: [
                "https://x.com/rahulydw",
                "https://linkedin.com/in/rahulYdw",
                "https://github.com/rahulydw",
              ],
            },
          }),
        }}
      />
      <div className="absolute -top-1 left-0 w-full overflow-hidden leading-[0] rotate-180" aria-hidden="true">
        <svg
          className="relative block w-full h-[50px]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0,0V46.29c47.39,22.09,104.73,36.54,166,42,
              60.86,5.37,123.59-1.64,185-11.68,
              C466.71,64.59,524.29,43,585,39.43,
              c63.63-3.76,127.44,15.8,190,35.58,
              57.79,18.25,113.51,34.93,175,39.3,
              59.52,4.21,117.44-7.2,170-30.54V0Z"
            fill="currentColor"
            className="text-slate-200 dark:text-slate-900"
          ></path>
        </svg>
      </div>
      <ToastContainer aria-live="polite" />
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold" lang="en">CONTACT</h2>
        <p className="mt-4 text-lg font-semibold text-gray-700 dark:text-gray-300 font-code" lang="en">
          I’d love to hear from you — reach out for any opportunities or questions!
        </p>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="md:w-1/2 hidden md:block">
          <h2 className="text-4xl font-bold mb-4" lang="en">Let's Connect 🤝</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed" lang="en">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            Fill out the form or just shoot me an email—I'll get back to you as soon as possible.
          </p>
          <div className="mt-6 flex items-center gap-4 text-xl text-purple-600 dark:text-purple-400">
            <a href="https://x.com/rahulydw" className="hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500" aria-label="Visit Twitter profile">
              <FaXTwitter />
            </a>
            <a href="https://linkedin.com/in/rahulYdw" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500" aria-label="Visit LinkedIn profile">
              <FaLinkedin />
            </a>
            <a href="https://github.com/rahulydw" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500" aria-label="Visit GitHub profile">
              <FaGithub />
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-white/10 dark:bg-black/30 backdrop-blur-lg p-6 rounded-xl border border-gray-300 dark:border-gray-700 shadow-md">
          <form ref={form} onSubmit={handleSubmit} className="space-y-4" role="form" aria-label="Contact form">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                required
                aria-required="true"
                aria-label="First Name"
                className="flex-1 p-3 rounded-md bg-gray-100 dark:bg-zinc-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
                aria-required="true"
                aria-label="Last Name"
                className="flex-1 p-3 rounded-md bg-gray-100 dark:bg-zinc-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                required
                aria-required="true"
                aria-label="Phone Number"
                className="flex-1 p-3 rounded-md bg-gray-100 dark:bg-zinc-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                aria-required="true"
                aria-label="Subject"
                className="flex-1 p-3 rounded-md bg-gray-100 dark:bg-zinc-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              aria-required="true"
              aria-label="Email Address"
              className="w-full p-3 rounded-md bg-gray-100 dark:bg-zinc-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              required
              aria-required="true"
              aria-label="Message"
              className="w-full p-3 rounded-md bg-gray-100 dark:bg-zinc-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-md font-semibold hover:opacity-90 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label="Submit contact form"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;