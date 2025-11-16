import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "RAJA BUFFING WORKS - Precision Utensil Buffing & Polishing Services",
  description: "Professional utensil buffing and polishing services in Vasai East. Expert mirror finishing for kitchen utensils, silverware, and commercial cookware. 30+ years experience.",
  keywords: "utensil buffing, polishing services, mirror finish, silverware polishing, cookware restoration, Vasai East, Maharashtra",
  authors: [{ name: "RAJA BUFFING WORKS" }],
  openGraph: {
    title: "RAJA BUFFING WORKS - Premium Utensil Buffing Services",
    description: "Bringing the shine back with precision buffing for perfect utensils. Serving Vasai East and surrounding areas.",
    url: "https://rajabuffing.vercel.app",
    siteName: "RAJA BUFFING WORKS",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://rajabuffing.vercel.app/og.webp",
        width: 1200,
        height: 630,
        alt: "RAJA BUFFING WORKS - Professional Utensil Buffing Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RAJA BUFFING WORKS - Utensil Buffing Experts",
    description: "Professional buffing and polishing services for all your kitchen utensils.",
    images: ["https://rajabuffing.vercel.app/og.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://rajabuffing.vercel.app" />
        <link rel="alternate" hrefLang="en" href="https://rajabuffing.vercel.app" />
        <link rel="alternate" hrefLang="x-default" href="https://rajabuffing.vercel.app" />
        {/* Open Graph / Twitter Card */}
        <meta property="og:title" content="RAJA BUFFING WORKS - Premium Utensil Buffing Services" />
        <meta property="og:description" content="Bringing the shine back with precision buffing for perfect utensils. Serving Vasai East and surrounding areas." />
        <meta property="og:image" content="https://rajabuffing.vercel.app/og.webp" />
        <meta property="og:url" content="https://rajabuffing.vercel.app" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="RAJA BUFFING WORKS - Utensil Buffing Experts" />
        <meta name="twitter:description" content="Professional buffing and polishing services for all your kitchen utensils." />
        <meta name="twitter:image" content="https://rajabuffing.vercel.app/og.webp" />
        <link rel="image_src" href="/og.webp" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "RAJA BUFFING WORKS",
              "description": "Professional utensil buffing and polishing services with 30+ years of experience",
              "url": "https://rajabuffing.vercel.app",
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
              "openingHours": [
                "Mo-Fr 08:00-20:00",
                "Sa 09:00-16:00"
              ],
              "serviceType": "Utensil Buffing and Polishing",
              "areaServed": "Vasai East, Palghar, Maharashtra",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Buffing Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Utensil Buffing",
                      "description": "Professional mirror finishing for kitchen utensils"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Silverware Polishing",
                      "description": "Restoration and polishing of silverware and cutlery"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "150"
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
                  "name": "What types of utensils do you buff and polish?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We specialize in buffing and polishing all types of kitchen utensils including sauce pots, milk pots, woks, silverware, and commercial cookware. Our services restore items to a mirror-like finish."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does the buffing process take?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Standard orders typically take 24-48 hours. Rush orders can be accommodated depending on volume and complexity."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you offer pickup and delivery services?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we provide pickup and delivery services within Vasai East and surrounding areas for your convenience."
                  }
                }
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "RAJA BUFFING WORKS",
              "url": "https://rajabuffing.vercel.app",
              "logo": "https://rajabuffing.vercel.app/logo.webp",
              "description": "Professional utensil buffing and polishing services with 30+ years of experience",
              "foundingDate": "1994",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9096769473",
                "contactType": "customer service",
                "availableLanguage": ["English", "Hindi", "Marathi"]
              },
              "sameAs": [
                "https://www.facebook.com/rajabuffingworks",
                "https://www.instagram.com/rajabuffingworks",
                "https://www.linkedin.com/company/raja-buffing-works"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Place",
              "name": "RAJA BUFFING WORKS",
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
              "telephone": "+91-9096769473",
              "url": "https://rajabuffing.vercel.app"
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
