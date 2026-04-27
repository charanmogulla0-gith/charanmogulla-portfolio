import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ToasterProvider } from "@/components/ToasterProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Charan Mogulla — AI Engineer",
  description:
    "AI Engineer building scalable LLM, RAG, and multi-agent systems. 5+ years shipping production AI on Azure, AWS, and GCP.",
  metadataBase: new URL("https://charanmogulla-portfolio.vercel.app"),
  openGraph: {
    title: "Charan Mogulla — AI Engineer",
    description:
      "Building scalable AI systems that deliver real business impact. LLM, RAG, multi-agent, MLOps.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body>
        {children}
        <ToasterProvider />
      </body>
    </html>
  );
}
