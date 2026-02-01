
import React from 'react';
import Image from 'next/image';
import Cta from '@/app/components/Cta';

const StaircasesRailingsPage = () => {
    return (
        <div className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="lg:w-1/2">
                        <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-cyan-400">Staircases & Railings</h1>
                        <p className="text-lg text-gray-400 mb-6">
                            We build and install custom staircases and railings that are both functional and beautiful. Our team can help you design a staircase that complements your home&apos;s style and meets your needs.
                        </p>
                        <ul className="list-disc list-inside text-gray-400 space-y-2">
                            <li>Custom staircase design and construction</li>
                            <li>Wood, metal, and glass railings</li>
                            <li>Staircase repair and refinishing</li>
                            <li>Free design consultations</li>
                        </ul>
                    </div>
                    <div className="lg:w-1/2">
                        <Image
                            src="/top-stairs-after-general-contractor-boston.jpeg"
                            alt="Custom staircase and railings"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
            <Cta />
        </div>
    );
};

export default StaircasesRailingsPage;
