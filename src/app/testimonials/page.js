
export const metadata = {
    title: "Customer Testimonials - RAJA BUFFING WORKS | Client Reviews & Success Stories",
    description: "Read testimonials from satisfied customers who trust RAJA BUFFING WORKS for their utensil buffing and polishing needs.",
    alternates: {
        canonical: 'https://rajabuffing.vercel.app/testimonials',
    },
};

const testimonials = [
    {
        name: "Rajesh Kumar",
        business: "Kumar Restaurant",
        testimonial: "RAJA BUFFING WORKS has been our trusted partner for over 5 years. Their attention to detail and consistent quality is unmatched. Our utensils always look brand new after their service.",
        rating: 5,
        date: "2024-11-01"
    },
    {
        name: "Priya Sharma",
        business: "Home Chef",
        testimonial: "I was amazed at how they restored my grandmother's old silverware. The mirror finish is absolutely perfect. Highly recommend their services!",
        rating: 5,
        date: "2024-10-15"
    },
    {
        name: "Vikram Patel",
        business: "Patel Caterers",
        testimonial: "For commercial kitchens, timing is everything. RAJA BUFFING WORKS always delivers on time with exceptional quality. Their 24-48 hour turnaround is perfect for our busy schedule.",
        rating: 5,
        date: "2024-09-20"
    },
    {
        name: "Anita Desai",
        business: "Desai Kitchenware",
        testimonial: "As a retailer, I send my customers to RAJA BUFFING WORKS for restoration services. The results speak for themselves - complete satisfaction guaranteed.",
        rating: 5,
        date: "2024-08-10"
    }
];

export default function Testimonials() {
    return (
        <div className="pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-center mb-12 text-black">
                    Customer Testimonials
                </h1>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    Don&apos;t just take our word for it. Here&apos;s what our satisfied customers have to say about our buffing services.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white border border-gray-300 rounded-lg shadow-lg p-6">
                            <div className="flex mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <span key={i} className="text-yellow-400 text-lg">★</span>
                                ))}
                            </div>
                            <blockquote className="text-gray-700 mb-4 italic">
                                &ldquo;{testimonial.testimonial}&rdquo;
                            </blockquote>
                            <div>
                                <cite className="font-semibold text-black">{testimonial.name}</cite>
                                <p className="text-gray-600 text-sm">{testimonial.business}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}