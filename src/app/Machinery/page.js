export const metadata = {
    title: "Our Machinery - RAJA BUFFING WORKS | Advanced Buffing Equipment",
    description: "State-of-the-art buffing machinery including industrial buffing systems, precision polishers, hydraulic presses, lathe machines, and laser engravers.",
    keywords: "industrial buffing machines, precision polishing equipment, hydraulic presses, lathe machines, laser engraving",
    alternates: {
        canonical: 'https://rajabuffing.vercel.app/Machinery',
    },
};

const machines = [
    {
        id: 1,
        name: "Industrial Buffing System",
        description: "High-capacity buffing machine for commercial utensils.",
        image: "/buff.mp4",
        specs: [
            "Processing speed: 500 pieces/hour",
            "Multiple buffing stages",
            "20 Buffing Motors",
        ],
    },
    {
        id: 2,
        name: "Precision Polisher",
        description: "Specialized equipment for delicate and intricate items.",
        image: "/matte.mp4",
        specs: [
            "Variable speed control",
            "Custom buffing patterns",
            "8 Matte Machines",
        ],
    },
    {
        id: 3,
        name: "Hydraulic Press",
        description: "Advanced machinery for premium press of utensils.",
        image: "/press.mp4",
        specs: [
            "Multi-stage treatment process",
            "Environmental control system",
            "2 Hydraulic Press",
        ],
    },
    {
        id: 4,
        name: "Bidding Lathe Machine",
        description: "Advanced machinery for premium bidding.",
        image: "/lathe.mp4",
        specs: [
            "Multi-stage treatment process",
            "Environmental control system",
            "2 Bidding Lathe Machine",
        ],
    },
    {
        id: 5,
        name: "Laser Engraving Machine",
        description: "Advanced machinery for premium engraving.",
        image: "/laser.mp4",
        specs: [
            "Multi-stage treatment process",
            "Environmental control system",
            "1 Laser Engraving Machine",
        ],
    },
];

export default function Machinery() {
    return (
        <div className="pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-center mb-12 text-black">
                    Our Machinery
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {machines.map((machine, index) => (
                        <div
                            key={machine.id}
                            className="bg-white  rounded-lg shadow-2xl overflow-hidden"
                        >
                            {/* Vdeo */}
                            <div className="relative w-full">
                                <video
                                    src={machine.image}
                                    alt={machine.name}
                                    className="object-cover"
                                    autoPlay muted loop
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-4">
                                <div className="flex items-center space-x-2">
                                    <h3 className="text-2xl font-semibold text-black">
                                        {machine.name}
                                    </h3>
                                </div>

                                <p className="text-gray-700">{machine.description}</p>

                                <div className="bg-gray-100 p-4 rounded-lg">
                                    <h4 className="font-semibold mb-2 text-black">
                                        Specifications:
                                    </h4>
                                    <ul className="space-y-2">
                                        {machine.specs.map((spec, i) => (
                                            <li
                                                key={i}
                                                className="text-sm text-gray-600 flex items-center"
                                            >
                                                <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                                                {spec}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
