import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pairr | High-End Matching Platform",
  description: "Connect with the elite. Experience matching redefined through AI analysis and premium fingerprints.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-black text-white`}>
        {/* Global Theme Wrapper or Providers can be added here */}
        <main className="relative flex min-h-screen flex-col">
          {children}
        </main>
        
        {/* Global Footer or Navigation if applicable to all pages */}
      </body>
    </html>
  );
}
