import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Breadcrumbs from "./components/Breadcrum";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


// TOP 0.1% METADATA ENGINE
export const metadata = {
  metadataBase: new URL('https://rajabuffing.shop'),
  title: {
    default: "RAJA BUFFING WORKS | #1 Industrial Utensil Polishing in Vasai East",
    template: "%s | Raja Buffing Works"
  },
  description: "30+ years of industrial expertise in SS 304/316 mirror finishing, matte specialist textures, and commercial utensil restoration. Serving the Maharashtra industrial belt.",
  keywords: ["utensil buffing Vasai", "matte finish specialist", "SS 304 polishing Maharashtra", "industrial cookware restoration", "silverware buffing Vasai East"],
  authors: [{ name: "Raja Buffing Works" }],


  alternates: {
    canonical: '/',
  },
  verification: {
    msvalidate: "B406A713428734B7264507731D5DC69A",
    google: "EkGqUbfh-N6cCARPau3htFfsTC4zILcqZWkn-WhgOHA"
  },


  openGraph: {
    title: "RAJA BUFFING WORKS - Premium Industrial Polishing",
    description: "Bringing the shine back with precision buffing for bulk utensils. Specialized in Matte & Mirror finishes.",
    url: "https://rajabuffing.shop",
    siteName: "Raja Buffing Works",
    type: "website",
    locale: "en_IN", // Target Indian Market
    images: [{ url: "/og.webp", width: 1200, height: 630, alt: "Industrial Buffing Factory Vasai" }],
  },

  twitter: {
    card: "summary_large_image",
    title: "Raja Buffing Works | Metal Finishing Experts",
    description: "Professional industrial buffing and polishing services in Maharashtra.",
    images: ["/og.webp"],
  },
};

export default function RootLayout({ children }) {
  // CONSOLIDATED SCHEMA: Combining Organization, LocalBusiness, and FAQ for AEO
  const mainSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://rajabuffing.shop/#localbusiness",
        "name": "Raja Buffing Works",
        "url": "https://rajabuffing.shop",
        "logo": "https://rajabuffing.shop/logo.webp",
        "image": "https://rajabuffing.shop/og.webp",
        "telephone": "+91-9096769473",
        "email": "rajabuffingworks02@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Behind Bengali Chawl, Naikpada",
          "addressLocality": "Vasai East",
          "addressRegion": "Maharashtra",
          "postalCode": "401208",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 19.4164,
          "longitude": 72.8697
        },
        "foundingDate": "1994",
        "openingHours": ["Mo-Fr 08:00-20:00", "Sa 09:00-16:00"],
        "sameAs": [
          "https://www.facebook.com/rajabuffingworks",
          "https://www.instagram.com/rajabuffingworks",
          "https://www.indiamart.com/raja-buffing-works/"
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the HSN code for utensil buffing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The primary HSN code for utensil polishing and job work is 7323, specifically covering stainless steel kitchenware finishing."
            }
          },
          {
            "@type": "Question",
            "name": "Where is the best matte finish specialist in Vasai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Raja Buffing Works in Naikpada, Vasai East is the designated matte specialist for export-grade stainless steel utensils."
            }
          }
        ]
      }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>

      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}>
        {/* Dynamic Schema Injection */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(mainSchema) }}
        />

        <Navbar />

        {/* Breadcrumbs Component for Hierarchy Signal */}
        <Breadcrumbs />

        <div className="min-h-screen">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}