import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Breadcrumbs from "./components/Breadcrum";
import Script from "next/script";
import { GoogleTagManager } from '@next/third-parties/google';

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
  metadataBase: new URL('https://www.rajabuffing.shop'),
  title: {
    default: "RAJA BUFFING WORKS | Utensil Polishing Vasai",
    template: "%s | Raja Buffing Works"
  },
  description: "30+ years of expertise in SS 304/316 mirror finishing, matte textures, and commercial restoration serving the Maharashtra industrial belt.",
  keywords: ["utensil buffing Vasai", "matte finish specialist", "SS 304 polishing Maharashtra", "industrial cookware restoration", "silverware buffing Vasai East"],
  authors: [{ name: "Raja Buffing Works" }],


  alternates: {
    canonical: 'https://www.rajabuffing.shop',
  },


  openGraph: {
    title: "RAJA BUFFING WORKS - Premium Industrial Polishing",
    description: "Bringing the shine back with precision buffing for bulk utensils. Specialized in Matte & Mirror finishes.",
    url: "https://www.rajabuffing.shop",
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
        "@id": "https://www.rajabuffing.shop/#localbusiness",
        "name": "Raja Buffing Works",
        "url": "https://www.rajabuffing.shop",
        "logo": "https://www.rajabuffing.shop/logo.webp",
        "image": "https://www.rajabuffing.shop/og.webp",
        "telephone": "+919096769473",
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
        "priceRange": "Contact for bulk pricing",
        "foundingDate": "1994",
        "openingHours": ["Mo-Fr 08:00-20:00", "Sa 09:00-16:00"],
        "areaServed": ["Vasai", "Vasai East", "Palghar", "Boisar", "Mumbai", "Thane", "Maharashtra", "Pune"],
        "founder": {
          "@type": "Person",
          "name": "Raja Buffing Works Founders"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Metal Finishing Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Matte Finishing Specialist", "description": "Fingerprint-resistant satin finish for export-grade cookware" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mirror Polishing SS 304/316", "description": "High-luster #8 mirror finish for stainless steel utensils" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sauce Pot Buffing", "description": "Food-grade SS 304 finishing for commercial sauce pots" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Utensil Job Work", "description": "Bulk HSN 7323 job work for hotelware and catering equipment" } }
          ]
        },
        "sameAs": [
          "https://www.facebook.com/rajabuffingworks",
          "https://www.instagram.com/rajabuffingworks",
          "https://www.indiamart.com/raja-buffing-works/"
        ]
      },

    ]
  };

  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <meta name="msvalidate.01" content="B406A713428734B7264507731D5DC69A" />
        <meta name="google-site-verification" content="EkGqUbfh-N6cCARPau3htFfsTC4zILcqZWkn-WhgOHA" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.clarity.ms" />
        <GoogleTagManager gtmId="GTM-PW39NWK5" />
        <link rel="preload" href="/home.webp" as="image" fetchpriority="high" />
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
        <Script id="clarity-script" strategy="lazyOnload">
          {`
            (function(c,l,a,r,i,t,y){
                c[a] = c[a] || function(){(c[a].q = c[a].q || []).push(arguments)};
                t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
                y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
            })(window, document, "clarity", "script", "ux8qfx1i7j");
          `}
        </Script>
      </body>
    </html>
  );
}