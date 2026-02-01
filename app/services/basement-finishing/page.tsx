
import React from 'react';
import Image from 'next/image';
import Cta from '@/app/components/Cta';

const BasementFinishingPage = () => {
    return (
        <div className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="lg:w-1/2">
                        <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-cyan-400">Basement Finishing</h1>
                        <p className="text-lg text-gray-400 mb-6">
                            Unlock the full potential of your basement. We can transform it into a beautiful and functional living space, home office, or entertainment area.
                        </p>
                        <ul className="list-disc list-inside text-gray-400 space-y-2">
                            <li>Custom design to meet your needs</li>
                            <li>High-quality materials and construction</li>
                            <li>Egress windows and waterproofing</li>
                            <li>Electrical, plumbing, and HVAC services</li>
                        </ul>
                    </div>
                    <div className="lg:w-1/2">
                        <Image
                            src="/basement-reno-nook-after-general-contractor-boston.jpeg"
                            alt="Finished basement"
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

export default BasementFinishingPage;
