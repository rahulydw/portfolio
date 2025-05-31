import ThemeToggel from "@/components/ThemeToggel";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";


export const metadata = {
  title: "Rahul-Yadav | Blogs",
  description: "Testing multiple fonts in Tailwind with Next.js",
};

const BlogsLayout = ({ children }) => {
  return (
    <div className="w-screen min-h-screen" role="main" aria-label="Blogs layout oveflow-hidden">
        {/* Navbar */}
        <nav className="sticky top-0 z-50 h-[60px] flex justify-around items-center p-4 border-b-2 border-gray-200 ">
        <Link href="/" ><Button variant="primary" className="text-xl bg-blue-500 text-white cursor-pointer hover:bg-orange-400">Home</Button></Link>
        <ThemeToggel />
        </nav>
      {children}
    </div>
  );
};

export default BlogsLayout;