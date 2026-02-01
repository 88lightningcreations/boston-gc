
import React from 'react';
import Image from 'next/image';
import Cta from '@/app/components/Cta';

const FlooringInstallationPage = () => {
    return (
        <div className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="lg:w-1/2">
                        <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-cyan-400">Flooring Installation</h1>
                        <p className="text-lg text-gray-400 mb-6">
                            From hardwood to tile, we install a wide variety of flooring to enhance the beauty and value of your home. Our team will help you choose the right material and install it with precision and care.
                        </p>
                        <ul className="list-disc list-inside text-gray-400 space-y-2">
                            <li>Hardwood, laminate, vinyl, and tile flooring</li>
                            <li>Expert installation and finishing</li>
                            <li>Subfloor preparation and repair</li>
                            <li>Free in-home estimates</li>
                        </ul>
                    </div>
                    <div className="lg:w-1/2">
                        <Image
                            src="/basement-flooring-boston-general-contracting.webp"
                            alt="Flooring installation"
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

export default FlooringInstallationPage;
