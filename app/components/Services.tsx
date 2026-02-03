
import React from 'react';
import Link from 'next/link';

const Services = () => {
    const services = [
        {
            title: "Interior & Exterior Painting",
            description: "Transform your home with a fresh coat of paint. We handle everything from single rooms to full exteriors.",
            link: "/services/interior-exterior-painting",
            image: "/exterior_painting_boston_massachusetts.png"
        },
        {
            title: "Bathroom Remodeling",
            description: "Create a spa-like retreat with our expert bathroom remodeling services. From design to installation.",
            link: "/services/bathroom-remodeling",
            image: "/finished-bathroom-general-contractor-boston.jpeg"
        },
        {
            title: "Kitchen Remodeling",
            description: "From custom cabinets to modern appliances, we'll help you build the kitchen of your dreams.",
            link: "/services/kitchen-remodeling",
            image: "/kitchen-reno-after-general-contractor-boston.jpeg"
        },
        {
            title: "Deck Building",
            description: "Enjoy the outdoors with a beautiful, custom-built deck. We handle design, construction, and finishing.",
            link: "/services/deck-building",
            image: "/deck-after-general-contractor-boston.jpeg"
        },
        {
            title: "Basement Finishing",
            description: "Unlock the potential of your basement. We can turn it into a living space, home office, or entertainment area.",
            link: "/services/basement-finishing",
            image: "/basement-reno-nook-after-general-contractor-boston.jpeg"
        },
        {
            title: "Flooring Installation",
            description: "From hardwood to tile, we install a wide variety of flooring to enhance the beauty and value of your home.",
            link: "/services/flooring-installation",
            image: "/basement-flooring-boston-general-contracting.webp"
        },
        {
            title: "Siding",
            description: "Protect and beautify your home with our high-quality siding installation and repair services.",
            link: "/services/siding",
            image: "/house-wrap-siding-general-contractor-boston.jpeg"
        },
        {
            title: "Staircases & Railings",
            description: "We build and install custom staircases and railings that are both functional and beautiful.",
            link: "/services/staircases-railings",
            image: "/top-stairs-after-general-contractor-boston.jpeg"
        },
        {
            title: "Sunrooms & Additions",
            description: "Add more space and light to your home with a custom sunroom or addition.",
            link: "/services/sunrooms-additions",
            image: "/sun-room-walls-general-contractor-boston.jpeg"
        }
    ];

    return (
        <div id="services" className="section">
            <div className="container px-4 py-5">
                <h2 className="pb-2 border-bottom text-center">A Few of Our Many Services</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4 py-5">
                    {services.map((service, index) => (
                        <div className="col" key={index}>
                            <Link href={service.link} className="text-decoration-none">
                                <div className="card h-100 text-center text-white" style={{ 
                                    backgroundImage: `url(${service.image})`, 
                                    backgroundSize: 'cover', 
                                    backgroundPosition: 'center' 
                                }}>
                                    <div className="card-body" style={{
                                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center'
                                    }}>
                                        <h5 className="card-title">{service.title}</h5>
                                        <p className="card-text">{service.description}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
