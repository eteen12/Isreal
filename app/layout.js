import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/pages/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Isreal | Talon James Toye",
  description:
    "The unoffical misspelled website domain of Israel and Talon James Toye",
  author: "Ethan Breitkreutz",
  schema: {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Talon James Toye",
    url: "https://isreal.ca",
    description:
      "The un-offical misspelled website domain of Israel and Talon James Toye",
    sameAs: "https://www.instagram.com/talon_toye_/",
    image: "https://isreal.ca/talonJamesToye.webp",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://isreal.ca/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        rel="icon"
        type="image/png"
        href="/favicon/favicon-96x96.png"
        sizes="96x96"
      />
      <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <meta name="apple-mobile-web-app-title" content="Isreal" />
      <link rel="manifest" href="/favicon/site.webmanifest" />

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
