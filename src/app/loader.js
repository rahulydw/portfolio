"use client";

export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-800 via-gray-900 to-black">
      <div className="relative w-24 h-24">
        {/* Rotating Dots Container */}
        <div className="absolute inset-0 flex items-center justify-center animate-spin">
          {/* Dot 1 */}
          <div className="absolute w-6 h-6 bg-blue-500 dark:bg-cyan-400 rounded-full animate-pulse" style={{ transform: "translateY(-40px)" }}></div>
          {/* Dot 2 */}
          <div className="absolute w-6 h-6 bg-purple-500 dark:bg-purple-400 rounded-full animate-pulse" style={{ transform: "rotate(45deg) translateY(-40px)" }}></div>
          {/* Dot 3 */}
          <div className="absolute w-6 h-6 bg-pink-500 dark:bg-pink-400 rounded-full animate-pulse" style={{ transform: "rotate(90deg) translateY(-40px)" }}></div>
          {/* Dot 4 */}
          <div className="absolute w-6 h-6 bg-blue-500 dark:bg-cyan-400 rounded-full animate-pulse" style={{ transform: "rotate(135deg) translateY(-40px)" }}></div>
          {/* Dot 5 */}
          <div className="absolute w-6 h-6 bg-purple-500 dark:bg-purple-400 rounded-full animate-pulse" style={{ transform: "rotate(180deg) translateY(-40px)" }}></div>
          {/* Dot 6 */}
          <div className="absolute w-6 h-6 bg-pink-500 dark:bg-pink-400 rounded-full animate-pulse" style={{ transform: "rotate(225deg) translateY(-40px)" }}></div>
          {/* Dot 7 */}
          <div className="absolute w-6 h-6 bg-blue-500 dark:bg-cyan-400 rounded-full animate-pulse" style={{ transform: "rotate(270deg) translateY(-40px)" }}></div>
          {/* Dot 8 */}
          <div className="absolute w-6 h-6 bg-purple-500 dark:bg-purple-400 rounded-full animate-pulse" style={{ transform: "rotate(315deg) translateY(-40px)" }}></div>
        </div>
        {/* Center Glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 bg-blue-500 dark:bg-cyan-400 rounded-full opacity-50 animate-ping"></div>
          <div className="w-8 h-8 bg-blue-500 dark:bg-cyan-400 rounded-full opacity-75 blur-sm"></div>
        </div>
      </div>
    </div>
  );
}