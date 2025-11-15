import { notFound } from 'next/navigation';

const blogPosts = {
    'utensil-maintenance-guide': {
        title: "Complete Guide to Utensil Maintenance and Care",
        content: `
      <h2>Daily Cleaning Practices</h2>
      <p>Proper daily cleaning is essential for maintaining your kitchen utensils. Always rinse immediately after use and avoid letting food residue dry on surfaces.</p>

      <h2>Storage Tips</h2>
      <p>Store utensils in a dry environment to prevent rust and corrosion. Use proper racks and avoid stacking heavy items on delicate surfaces.</p>

      <h2>When to Seek Professional Help</h2>
      <p>While regular maintenance helps, professional buffing services like ours can restore utensils to their original shine and extend their lifespan significantly.</p>
    `,
        date: "2025-01-15",
        readTime: "5 min read"
    },
    'benefits-professional-buffing': {
        title: "Why Choose Professional Utensil Buffing Services",
        content: `
      <h2>Expertise and Experience</h2>
      <p>With over 30 years in the industry, we understand the nuances of different metals and finishes.</p>

      <h2>Advanced Equipment</h2>
      <p>Our state-of-the-art machinery ensures consistent, high-quality results that DIY methods can't match.</p>

      <h2>Time and Cost Efficiency</h2>
      <p>Professional buffing saves you time and often costs less than replacing damaged utensils.</p>
    `,
        date: "2025-01-10",
        readTime: "4 min read"
    },
    'commercial-kitchen-equipment': {
        title: "Maintaining Commercial Kitchen Equipment",
        content: `
      <h2>Food Safety Standards</h2>
      <p>Regular maintenance ensures compliance with health and safety regulations.</p>

      <h2>Equipment Longevity</h2>
      <p>Proper care extends the life of expensive commercial equipment.</p>

      <h2>Operational Efficiency</h2>
      <p>Well-maintained equipment operates more efficiently and reduces downtime.</p>
    `,
        date: "2025-01-05",
        readTime: "6 min read"
    },
    'mirror-finish-techniques': {
        title: "Achieving Perfect Mirror Finish on Kitchen Utensils",
        content: `
      <h2>Understanding Mirror Finish</h2>
      <p>Mirror finish refers to the highest level of polish, creating a reflective surface that enhances both appearance and hygiene.</p>

      <h2>Our Process</h2>
      <p>We use multiple stages of buffing with progressively finer compounds to achieve that perfect mirror-like shine.</p>

      <h2>Material Considerations</h2>
      <p>Different metals require different techniques. Stainless steel, copper, and brass each have unique properties that affect the finishing process.</p>

      <h2>Maintenance Tips</h2>
      <p>To maintain mirror finish, avoid abrasive cleaners and handle utensils carefully to prevent scratches.</p>
    `,
        date: "2025-01-01",
        readTime: "7 min read"
    },
    'silverware-restoration': {
        title: "Silverware Restoration: Bringing Back the Shine",
        content: `
      <h2>Common Silverware Issues</h2>
      <p>Tarnish, scratches, and pitting are common problems that affect the appearance and value of silverware.</p>

      <h2>Restoration Process</h2>
      <p>Our restoration process involves careful cleaning, buffing, and polishing to remove tarnish and restore the original luster.</p>

      <h2>Preventive Care</h2>
      <p>Store silverware properly and use anti-tarnish cloths to prevent future oxidation.</p>

      <h2>When to Restore vs. Replace</h2>
      <p>Professional restoration is often more cost-effective than replacement, especially for valuable or antique pieces.</p>
    `,
        date: "2024-12-28",
        readTime: "5 min read"
    },
    'buffing-vs-polishing': {
        title: "Buffing vs Polishing: Understanding the Difference",
        content: `
      <h2>Technical Definitions</h2>
      <p>Buffing uses abrasive compounds and wheels to smooth surfaces, while polishing creates a protective finish.</p>

      <h2>When to Buff</h2>
      <p>Buffing is ideal for removing scratches, corrosion, and heavy oxidation from metal surfaces.</p>

      <h2>When to Polish</h2>
      <p>Polishing adds a protective layer and enhances shine on already smooth surfaces.</p>

      <h2>Our Combined Approach</h2>
      <p>We often combine both techniques for optimal results, starting with buffing and finishing with polishing.</p>
    `,
        date: "2024-12-25",
        readTime: "4 min read"
    },
    'kitchen-utensil-materials': {
        title: "Common Kitchen Utensil Materials and Their Care",
        content: `
      <h2>Stainless Steel</h2>
      <p>The most common material, stainless steel requires regular cleaning to maintain its hygienic properties.</p>

      <h2>Copper and Brass</h2>
      <p>These materials develop beautiful patinas but require careful cleaning to avoid damage.</p>

      <h2>Aluminum</h2>
      <p>Lightweight and affordable, aluminum utensils need protection from acidic foods that can cause pitting.</p>

      <h2>Cast Iron</h2>
      <p>Requires seasoning and careful maintenance to prevent rust and maintain cooking performance.</p>

      <h2>Care Guidelines</h2>
      <p>Each material has specific care requirements to maintain both appearance and functionality.</p>
    `,
        date: "2024-12-20",
        readTime: "6 min read"
    },
    'preventing-utensil-corrosion': {
        title: "Preventing Corrosion on Metal Kitchen Utensils",
        content: `
      <h2>Understanding Corrosion</h2>
      <p>Corrosion occurs when metal reacts with moisture, acids, or salts in the environment.</p>

      <h2>Prevention Strategies</h2>
      <p>Dry utensils immediately after washing, store in dry conditions, and avoid contact with dissimilar metals.</p>

      <h2>Material-Specific Tips</h2>
      <p>Different metals corrode at different rates and require specific preventive measures.</p>

      <h2>Professional Maintenance</h2>
      <p>Regular professional buffing removes early corrosion and applies protective finishes.</p>
    `,
        date: "2024-12-15",
        readTime: "5 min read"
    },
    'restaurant-equipment-maintenance': {
        title: "Restaurant Equipment Maintenance Checklist",
        content: `
      <h2>Daily Maintenance</h2>
      <p>Clean all equipment thoroughly after each use and inspect for damage.</p>

      <h2>Weekly Inspections</h2>
      <p>Check for wear, loose parts, and early signs of corrosion or damage.</p>

      <h2>Monthly Professional Service</h2>
      <p>Schedule professional buffing and maintenance to ensure optimal performance.</p>

      <h2>Seasonal Deep Cleaning</h2>
      <p>Perform thorough cleaning and maintenance before busy seasons.</p>

      <h2>Record Keeping</h2>
      <p>Maintain detailed records of all maintenance and repairs for compliance.</p>
    `,
        date: "2024-12-10",
        readTime: "8 min read"
    },
    'eco-friendly-buffing': {
        title: "Eco-Friendly Buffing Solutions for Modern Kitchens",
        content: `
      <h2>Environmentally Conscious Materials</h2>
      <p>We use biodegradable compounds and recycled materials in our buffing processes.</p>

      <h2>Water Conservation</h2>
      <p>Our modern equipment uses significantly less water than traditional methods.</p>

      <h2>Waste Reduction</h2>
      <p>We recycle buffing compounds and properly dispose of waste materials.</p>

      <h2>Sustainable Practices</h2>
      <p>Choose eco-friendly buffing services to reduce your environmental impact.</p>
    `,
        date: "2024-12-05",
        readTime: "4 min read"
    },
    'antique-utensil-restoration': {
        title: "Restoring Antique Kitchen Utensils",
        content: `
      <h2>Assessing Antique Value</h2>
      <p>Before restoration, evaluate the historical and monetary value of antique pieces.</p>

      <h2>Gentle Restoration Techniques</h2>
      <p>Antique restoration requires specialized techniques to preserve historical integrity.</p>

      <h2>Material Preservation</h2>
      <p>Use appropriate methods for different metals and patinas found on antique pieces.</p>

      <h2>Documentation</h2>
      <p>Document the restoration process for insurance and historical purposes.</p>
    `,
        date: "2024-11-30",
        readTime: "6 min read"
    },
    'buffing-safety-tips': {
        title: "Safety First: Essential Buffing Safety Guidelines",
        content: `
      <h2>Personal Protective Equipment</h2>
      <p>Always wear safety glasses, gloves, and appropriate clothing when buffing.</p>

      <h2>Equipment Safety</h2>
      <p>Regular maintenance and proper operation of buffing equipment prevents accidents.</p>

      <h2>Chemical Handling</h2>
      <p>Use buffing compounds safely and dispose of them according to environmental regulations.</p>

      <h2>Work Area Safety</h2>
      <p>Maintain a clean, well-lit workspace with proper ventilation.</p>

      <h2>Emergency Preparedness</h2>
      <p>Know emergency procedures and have first aid supplies readily available.</p>
    `,
        date: "2024-11-25",
        readTime: "5 min read"
    }
};

export async function generateMetadata({ params }) {
    const post = blogPosts[params.slug];
    if (!post) return {};

    return {
        title: `${post.title} - RAJA BUFFING WORKS Blog`,
        description: post.content.substring(0, 160).replace(/<[^>]*>/g, ''),
        alternates: {
            canonical: `https://rajabuffing.vercel.app/blog/${params.slug}`,
        },
    };
}

export default function BlogPost({ params }) {
    const post = blogPosts[params.slug];

    if (!post) {
        notFound();
    }

    return (
        <div className="pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <article className="bg-white border border-gray-300 rounded-lg shadow-lg p-8">
                    <header className="mb-8">
                        <h1 className="text-3xl font-bold text-black mb-4">{post.title}</h1>
                        <div className="flex justify-between text-gray-500 text-sm">
                            <span>{post.date}</span>
                            <span>{post.readTime}</span>
                        </div>
                    </header>

                    <div
                        className="prose prose-lg max-w-none text-gray-700"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </article>
            </div>
        </div>
    );
}