import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fuel Cost Impact Calculator (India 2026) – Know Your Monthly Petrol Expense",
  description: "Calculate your daily, monthly, and yearly fuel cost instantly. Discover how much of your income goes to petrol and get smart insights to reduce expenses. Free tool for India 2026.",
  keywords: "fuel cost calculator india, petrol expense calculator, fuel impact on salary, monthly fuel cost, petrol price impact",
  authors: [{ name: "Prashanth" }],
  openGraph: {
    title: "Fuel Cost Impact Calculator",
    description: "Calculate your fuel expenses and see how it affects your income",
    type: "website",
    url: "https://fuel-impact.vercel.app/",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "FuelImpact",
              "url": "https://fuel-impact.vercel.app/",
              "description": "Fuel cost impact calculator that shows daily, monthly, and yearly petrol expenses and percentage of income spent on fuel.",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web",
              "author": {
                "@type": "Person",
                "name": "Prashanth"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How do I calculate fuel cost per month?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Fuel cost per month is calculated by multiplying daily fuel cost with number of days."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much of salary goes to fuel?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Fuel expenses ideally should be below 10% of income."
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
