
import React from 'react';
import Image from 'next/image';
import Cta from '@/app/components/Cta';

const DeckBuildingPage = () => {
    return (
        <div className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="lg:w-1/2">
                        <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-cyan-400">Deck Building</h1>
                        <p className="text-lg text-gray-400 mb-6">
                            Enjoy the outdoors with a beautiful, custom-built deck. We handle everything from design and construction to finishing touches, creating the perfect space for you to relax and entertain.
                        </p>
                        <ul className="list-disc list-inside text-gray-400 space-y-2">
                            <li>Custom deck design to fit your home and lifestyle</li>
                            <li>High-quality materials for a long-lasting deck</li>
                            <li>Professional construction and installation</li>
                            <li>Finishing options including railings, stairs, and lighting</li>
                        </ul>
                    </div>
                    <div className="lg:w-1/2">
                        <Image
                            src="/deck-after-general-contractor-boston.jpeg"
                            alt="Custom deck"
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

export default DeckBuildingPage;
