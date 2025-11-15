import { Send, Phone, Mail, MapPin } from "lucide-react";
import Form from "../components/Form";

export const metadata = {
    title: "Contact Us - RAJA BUFFING WORKS | Get a Quote for Buffing Services",
    description: "Contact RAJA BUFFING WORKS for professional utensil buffing services. Located in Vasai East, Maharashtra. Phone: +91-9096769473, Email: rajabuffingworks00@gmail.com",
    keywords: "contact RAJA BUFFING WORKS, buffing services quote, Vasai East location, utensil polishing contact",
    alternates: {
        canonical: 'https://rajabuffing.vercel.app/Contact',
    },
};

export default function Contact() {

    return (
        <div className="pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-center mb-12 text-black">
                    Contact Us
                </h1>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <Form />

                    {/* Map + Contact Info */}
                    <div className="space-y-8">
                        {/* Map */}
                        <div className="h-64 bg-gray-200 rounded-lg overflow-hidden shadow-2xl">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3762.906718117142!2d72.869743!3d19.416435999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDI0JzU5LjIiTiA3MsKwNTInMTEuMSJF!5e0!3m2!1sen!2sin!4v1738732379239!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                        {/* Contact Info */}
                        <div className="bg-white  p-6 rounded-lg shadow-2xl">
                            <h3 className="text-xl font-semibold mb-4 text-black">
                                Contact Information
                            </h3>

                            <div className="space-y-4">
                                <p className="flex items-center text-gray-600">
                                    <Phone className="mr-2 text-gray-500" size={18} />
                                    +91 9096769473 ,+91 9323269821
                                </p>

                                <p className="flex items-center text-gray-600">
                                    <Mail className="mr-2 text-gray-500" size={18} />
                                    rajabuffingworks@gmail.com
                                </p>

                                <p className="flex items-center text-gray-600">
                                    <MapPin className="mr-2 text-gray-500" size={18} />
                                    Behind Bengali Chawl
                                    <br />
                                    Naikpada Vasai - 401208 Palghar
                                    <br />
                                    MAHARASHTRA
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
