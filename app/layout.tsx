import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Preloader from "../components/Preloader";
import { Toaster } from "../components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oluwaseyi Adeoti",
  description: "Frontend Developer",
  icons: {
    icon: "/favicon.ico?v=1",
  },
  openGraph: {
    title: "Oluwaseyi Adeoti - Frontend Developer",
    description: "Frontend Developer crafting amazing user interfaces",
    url: "https://oluwaseyiadeoti.netlify.app",
    siteName: "Engr Seyi Portfolio",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Oluwaseyi  - Frontend Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ouwaseyi Adeoti - Full stack Developer",
    description: "Frontend Developer crafting amazing user interfaces",
    creator: "@iamajfred_",
    images: ["/assets/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Preloader />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
