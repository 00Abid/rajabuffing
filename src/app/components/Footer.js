import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-300">
            <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

                    {/* Logo + About */}
                    <div>
                        <div className="flex items-center mb-4 space-x-2">
                            <div className="relative">
                                <Image
                                    src="/logo.webp"
                                    alt="RAJA BUFFING WORKS Logo"
                                    className="object-contain"
                                    width={55}
                                    height={55}
                                />
                            </div>
                            <h3 className="text-lg font-bold text-black">
                                RAJA BUFFING WORKS
                            </h3>
                        </div>
                        <p className="text-gray-600">
                            Bringing the Shine Back <br /> Precision Buffing for Perfect Utensils
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-black">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-gray-600 hover:text-black">Home</Link></li>
                            <li><Link href="/Products" className="text-gray-600 hover:text-black">Products</Link></li>
                            <li><Link href="/Machinery" className="text-gray-600 hover:text-black">Machinery</Link></li>
                            <li><Link href="/blog" className="text-gray-600 hover:text-black">Blog</Link></li>
                            <li><Link href="/testimonials" className="text-gray-600 hover:text-black">Testimonials</Link></li>
                            <li><Link href="/Contact" className="text-gray-600 hover:text-black">Contact</Link></li>
                        </ul>
                    </div>


                    {/* Hours */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-black">Hours</h3>
                        <div className="space-y-2 text-gray-600">
                            <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                            <p>Saturday: 9:00 AM - 4:00 PM</p>
                            <p>Sunday: Closed</p>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 mt-8 border-t border-gray-300">
                    <p className="text-center text-gray-600">
                        © {new Date().getFullYear()} RAJA BUFFING WORKS.
                    </p>
                </div>
            </div>
        </footer>
    );
}
