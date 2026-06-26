import type { Metadata } from "next";
import { Syne, Nunito, JetBrains_Mono } from 'next/font/google'
import "./globals.css";

const syne = Syne({ 
  subsets: ['latin'], 
  weight: ['400','600','700','800'],
  variable: '--font-syne' 
})
const nunito = Nunito({ 
  subsets: ['latin'], 
  weight: ['400','500','600','700'],
  variable: '--font-nunito' 
})
const jetbrains = JetBrains_Mono({ 
  subsets: ['latin'], 
  weight: ['400','500'],
  variable: '--font-jetbrains' 
})

export const metadata: Metadata = {
  title: "Muzu — AI Brand Ambassador for Retail Shelves",
  description:
    "Muzu is the world's first AI brand ambassador that fits on a retail shelf. Speaks your customers' language. Works while you sleep. Reports every morning.",
  keywords: ["AI brand ambassador", "retail AI", "FMCG tech", "Muzu", "AdMesh"],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/muzu_color_128.png",
  },
  openGraph: {
    title: "Muzu — AI Brand Ambassador",
    description: "Your Brand. On Every Shelf.",
    type: "website",
  },
};

import { AuthContextProvider } from "@/context/AuthContext";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${syne.variable} ${nunito.variable} ${jetbrains.variable}`}>
      <body className="font-body antialiased">
        <AuthContextProvider>
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}


