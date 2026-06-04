import type { Metadata } from "next";
import { Quicksand, Roboto } from "next/font/google";
import "../styles/globals.css";
import ProviderWrapper from "@/components/ProviderWrapper";
import Navbar from "@/components/Navbar";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fasika.vercel.app"),

  title: {
    default: "Fasika Dagnachew | Full-Stack Software Engineer",
    template: "%s | Fasika Dagnachew",
  },

  description:
    "Full-Stack Software Engineer from Ethiopia specializing in Next.js, React, Node.js, Express, MongoDB, and scalable SaaS applications. I build modern web apps, internal management systems, mobile applications, and digital products.",

  keywords: [
    "Fasika Dagnachew",
    "Full Stack Developer",
    "Software Engineer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "MERN Stack Developer",
    "MongoDB",
    "Express.js",
    "TypeScript",
    "SaaS Development",
    "Web Development",
    "Mobile App Development",
    "Backend Development",
    "Frontend Development",
    "Ethiopian Developer",
    "Addis Ababa Developer",
    "Portfolio",
  ],

  authors: [{ name: "Fasika Dagnachew" }],
  creator: "Fasika Dagnachew",
  publisher: "Fasika Dagnachew",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fasika.vercel.app",
    siteName: "Fasika Dagnachew Portfolio",
    title: "Fasika Dagnachew | Full-Stack Software Engineer",
    description:
      "Building scalable web applications, SaaS products, mobile apps, and business systems using modern technologies.",
    images: [
      {
        url: "/og-img.png",
        width: 1200,
        height: 630,
        alt: "Fasika Dagnachew Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Fasika Dagnachew | Full-Stack Software Engineer",
    description:
      "Building scalable web applications, SaaS products, mobile apps, and business systems.",
    images: ["/og-img.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "technology",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${quicksand.variable} ${roboto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ProviderWrapper>
          <Navbar />
          {children}
        </ProviderWrapper>
      </body>
    </html>
  );
}
