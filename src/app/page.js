import Image from "next/image";
import { CheckCircle, Download } from "lucide-react";

export const metadata = {
  title: "RAJA BUFFING WORKS - Expert Utensil Buffing & Polishing Services | Vasai East",
  description: "Leading utensil buffing and polishing company in Vasai East, Maharashtra. 30+ years experience in mirror finishing for kitchen utensils, silverware, and commercial cookware.",
  keywords: "utensil buffing Vasai, polishing services Maharashtra, mirror finish utensils, silverware restoration, commercial cookware buffing",
  alternates: {
    canonical: 'https://rajabuffing.vercel.app',
  },
};

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <video
            src="/home.mp4"
            alt="Polished utensils"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60" />
        </div>

        <div className="relative h-full flex items-center justify-center text-center">
          <div className=" px-4">
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
              RAJA BUFFING WORKS
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto text-white">
              Bringing the Shine Back <br />
              Precision Buffing for Perfect Utensils
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">
            About Us
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/about.webp"
                  alt="Factory worker"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-gray-700">
                With over 30 years of expertise, RAJA BUFFING WORKS leads the
                way in cutting-edge utensil buffing technology. Our advanced
                machinery and skilled craftsmen deliver unmatched mirror
                finishes that make your utensils look brand new.
              </p>
              <p className="text-gray-700">
                Powered by a vast array of state-of-the-art machines, we offer
                precision and perfection with every buff and press — truly
                Bringing the Shine Back.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">
            Our Capabilities
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "High Volume Processing",
                description:
                  "Capacity to handle large-scale buffing requirements.",
              },
              {
                title: "Premium Finish",
                description: "Advanced techniques for mirror-like shine.",
              },
              {
                title: "Quick Turnaround",
                description: "24–48 hour processing for standard orders.",
              },
            ].map((capability, index) => (
              <div
                key={index}
                className="bg-white  p-6 rounded-lg shadow-2xl"
              >
                <CheckCircle className="h-8 w-8 text-gray-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-black">
                  {capability.title}
                </h3>
                <p className="text-gray-600">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalogue Download Section */}
      <section className="h-[50vh] bg-gray-100 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white  rounded-lg shadow-2xl p-8 ">
            <h2 className="text-3xl font-bold mb-4 text-black">Download Our Catalogue</h2>
            <p className="text-xl mb-8 text-gray-700">
              Get detailed information about our services
            </p>

            <a
              href="/catalogue.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-black text-white font-semibold rounded-lg shadow-2xl hover:bg-gray-800 transition-all"
            >
              <Download className="mr-2" />
              Download Catalogue
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
