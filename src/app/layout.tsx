import type { Metadata } from "next";
import { Inter, Gloria_Hallelujah } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

const gloria = Gloria_Hallelujah({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rezha Bahari",
  description: "Rezha Bahari, a full stack developer with focus on web development using typescript, react and node.",
  keywords: "rezha bahari",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="google-site-verification" content="TDjclvcOIJh_7m5QuGfWKGlHJNbZeYDTuPo-slTg68Y" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
