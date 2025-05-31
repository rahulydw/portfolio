import "./globals.css";
import { Geist, Geist_Mono, Tinos, Dancing_Script, Playfair_Display, Fira_Code } from "next/font/google";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const tinos = Tinos({
  variable: "--font-tinos",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const dancing = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  // metadataBase: new URL("https://rahulydw.vercel.app"),
  title: "Rahul Yadav | Full Stack Developer",
  description:
    "Portfolio of Rahul Yadav – a MERN/Next.js full-stack developer. Explore my projects, skills, and experience in building scalable web apps.",
    icons: {
      icon: '/favicon.ico',
    },
  keywords: [
    "Rahul Yadav",
    "MERN Developer",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Portfolio",
    "JavaScript",
    "MongoDB",
    "Express.js",
    "Node.js",
    "Web Development",
  ],
  authors: [{ name: "Rahul Yadav", url: "https://github.com/rahulydw" }],
  creator: "Rahul Yadav",
  publisher: "Rahul Yadav",
  robots: "index, follow",
  openGraph: {
    title: "Rahul Yadav | Portfolio",
    description:
      "Full Stack Developer skilled in MERN and Next.js. Explore my personal portfolio showcasing real projects and skills.",
    url: "https://rahulydw.vercel.app",
    siteName: "Rahul Yadav Portfolio",
    images: [
      {
        url: "/og-cover.png",
        width: 1200,
        height: 630,
        alt: "Rahul Yadav Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@rahulYdw",
    creator: "@rahulYdw",
    title: "Rahul Yadav | Full Stack Developer",
    description:
      "Explore Rahul Yadav's web dev portfolio built with JavaScript, MERN stack, and Next.js.",
    images: ["/og-cover.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <link rel="icon" type="image/png" href="/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Rahul Yadav",
              jobTitle: "Full Stack Developer",
              url: "https://rahulydw.vercel.app",
              sameAs: [
                "https://www.linkedin.com/in/rahulydw",
                "https://github.com/rahulydw",
                "https://twitter.com/rahulydw",
                "https://www.instagram.com/iamrahulydw",
                "https://www.facebook.com/iamrahulydw",
              ],
              description:
                "MERN stack developer skilled in Next.js, Node.js, and building responsive web applications.",
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${tinos.variable} ${dancing.variable} ${playfair.variable} ${firaCode.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <main role="main">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}