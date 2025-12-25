export interface CaseStudy {
    slug: string;
    title: string;
    category: string;
    client: string;
    year: string;
    description: string;
    challenge: string;
    solution: string;
    results: string[];
    image: string;
    content: string;
}

export const caseStudies: CaseStudy[] = [
    {
        slug: "fintech-revolution",
        title: "Fintech Revolution",
        category: "Banking & Finance",
        client: "GlobalBank Corp",
        year: "2024",
        description: "Reimagining the digital banking experience for the next generation of mobile-first users.",
        challenge: "GlobalBank needed to modernize their legacy infrastructure and compete with agile neobanks.",
        solution: "We built a microservices-based architecture and a Flutter mobile app that reduced transaction times by 40%.",
        results: ["2.5M New Users", "40% Faster Transactions", "99.99% Uptime"],
        image: "bg-gradient-to-br from-blue-600 to-indigo-800",
        content: "Detailed content about the fintech revolution architecture..."
    },
    {
        slug: "health-ai",
        title: "HealthAI Diagnostics",
        category: "Healthcare",
        client: "MediCare Systems",
        year: "2023",
        description: "AI-powered diagnostic tools for early detection of anomalies in X-Ray scans.",
        challenge: "Doctors were overwhelmed with scan volumes, leading to burnout and potential oversight.",
        solution: "We deployed a computer vision model that pre-screens scans with 98% accuracy.",
        results: ["98% Accuracy", "50% Less Review Time", "FDA Approved"],
        image: "bg-gradient-to-br from-emerald-600 to-teal-800",
        content: "Deep dive into the computer vision models used..."
    },
    {
        slug: "smart-logistics",
        title: "Smart Logistics",
        category: "Supply Chain",
        client: "LogiTech Solutions",
        year: "2024",
        description: "Real-time fleet tracking and route optimization using IoT sensors.",
        challenge: "Inefficient routing was costing millions in fuel and delays.",
        solution: "An IoT ecosystem tracking 5000+ trucks with predictive maintenance alerts.",
        results: ["15% Fuel Savings", "30% Fewer Delays", "ROI in 6 Months"],
        image: "bg-gradient-to-br from-orange-600 to-red-800",
        content: "How we implemented LoRaWAN sensors for fleet tracking..."
    }
];
