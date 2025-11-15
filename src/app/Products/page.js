import Image from "next/image";

export const metadata = {
    title: "Our Products - RAJA BUFFING WORKS | Utensil Types We Service",
    description: "Explore the range of utensils we buff and polish: sauce pots, milk pots, wok pans, silverware collections, and commercial cookware. Premium mirror finishing services.",
    keywords: "sauce pot buffing, milk pot polishing, wok buffing, silverware restoration, commercial utensils polishing",
    alternates: {
        canonical: 'https://rajabuffing.vercel.app/Products',
    },
};

const products = [
    {
        id: 1,
        name: "Sauce Pot",
        description: "Expert Buffing for a Smooth, Mirror-Like Finish!.",
        image: "/saucepot.webp",
        features: ["Custom handling", "Restoration", "Preservation"],
    },
    {
        id: 2,
        name: "Milk Pot",
        description: "Expert Buffing for a Smooth, Mirror-Like Finish!.",
        image: "/milkpot.webp",
        features: ["Custom handling", "Restoration", "Preservation"],
    },
    {
        id: 3,
        name: "Wok / Deep Frying Pan",
        description: "Expert Buffing for a Smooth, Mirror-Like Finish!.",
        image: "/kadhai.webp",
        features: ["Custom handling", "Restoration", "Preservation"],
    },
    {
        id: 4,
        name: "Silverware Collection",
        description: "Expert Buffing for a Smooth, Mirror-Like Finish!.",
        image: "/silverware.webp",
        features: ["Custom handling", "Restoration", "Preservation"],
    },
    {
        id: 5,
        name: "Commercial Utensils",
        description: "Expert Buffing for a Smooth, Mirror-Like Finish!.",
        image: "/commercial.webp",
        features: ["Custom handling", "Restoration", "Preservation"],
    },
    {
        id: 6,
        name: "Specialty Items",
        description: "Expert Buffing for a Smooth, Mirror-Like Finish!.",
        image: "/special.webp",
        features: ["Custom handling", "Restoration", "Preservation"],
    },
];

export default function Products() {
    return (
        <div className="pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-center mb-12 text-black">
                    Our Products
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white  rounded-lg shadow-2xl overflow-hidden"
                        >
                            <div className="relative h-48">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 text-black">
                                    {product.name}
                                </h3>

                                <p className="text-gray-600 mb-4">{product.description}</p>

                                <div className="space-y-2">
                                    {product.features.map((feature, i) => (
                                        <p
                                            key={i}
                                            className="text-sm text-gray-600 flex items-center"
                                        >
                                            <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                                            {feature}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
