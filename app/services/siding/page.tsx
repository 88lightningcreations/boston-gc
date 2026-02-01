
import React from 'react';
import Image from 'next/image';
import Cta from '@/app/components/Cta';

const SidingPage = () => {
    return (
        <div className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="lg:w-1/2">
                        <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-cyan-400">Siding</h1>
                        <p className="text-lg text-gray-400 mb-6">
                            Protect and beautify your home with our high-quality siding installation and repair services. We offer a variety of siding options to fit your style and budget.
                        </p>
                        <ul className="list-disc list-inside text-gray-400 space-y-2">
                            <li>Vinyl, wood, and fiber cement siding</li>
                            <li>Siding repair and replacement</li>
                            <li>Gutter and downspout installation</li>
                            <li>Free in-home consultations</li>
                        </ul>
                    </div>
                    <div className="lg:w-1/2">
                        <Image
                            src="/house-wrap-siding-general-contractor-boston.jpeg"
                            alt="Siding installation"
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

export default SidingPage;
