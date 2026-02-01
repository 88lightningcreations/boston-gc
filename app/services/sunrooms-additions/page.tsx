
import React from 'react';
import Image from 'next/image';
import Cta from '@/app/components/Cta';

const SunroomsAdditionsPage = () => {
    return (
        <div className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="lg:w-1/2">
                        <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-cyan-400">Sunrooms & Additions</h1>
                        <p className="text-lg text-gray-400 mb-6">
                            Add more space and light to your home with a custom sunroom or addition. Our team can help you design and build a beautiful and functional space that you&apos;ll enjoy for years to come.
                        </p>
                        <ul className="list-disc list-inside text-gray-400 space-y-2">
                            <li>Custom sunroom and addition design</li>
                            <li>High-quality materials and construction</li>
                            <li>Energy-efficient windows and doors</li>
                            <li>Free in-home consultations</li>
                        </ul>
                    </div>
                    <div className="lg:w-1/2">
                        <Image
                            src="/sun-room-walls-general-contractor-boston.jpeg"
                            alt="Sunroom and home addition"
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

export default SunroomsAdditionsPage;
