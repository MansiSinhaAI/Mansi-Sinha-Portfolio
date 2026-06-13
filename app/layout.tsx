import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Mansi | Data Scientist & ML Engineer",
  description:
    "Premium portfolio for Mansi, a Data Scientist and Machine Learning Engineer focused on business analytics, production ML, and trustworthy AI solutions.",
  keywords: [
    "Mansi",
    "Data Scientist",
    "Machine Learning Engineer",
    "Business Analytics",
    "MLOps",
    "Power BI",
    "Python",
    "SQL"
  ],
  authors: [{ name: "Mansi" }],
  creator: "Mansi",
  openGraph: {
    title: "Mansi | Data Scientist & ML Engineer",
    description:
      "Projects, research, dashboards, and ML engineering work by Mansi.",
    type: "website",
    locale: "en_US"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} bg-[#fbfcff] font-sans text-ink-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
