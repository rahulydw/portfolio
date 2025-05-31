"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CanvasBg from "@/components/CanvasBg"; 

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white overflow-hidden relative">
      {/* Starry Background */}
      <div className="absolute inset-0 z-0">
        <CanvasBg />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center space-y-6">
        <h1 className="text-9xl font-bold text-blue-500 dark:text-cyan-400 animate-pulse">
          404
        </h1>
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-300">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-400 max-w-md mx-auto">
          Oops! The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back to safety.
        </p>
        <Link href="/">
          <Button
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold"
          >
            Go Back Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
