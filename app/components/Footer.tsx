
import React from 'react';

const Footer = () => {
    const gmbLink = "https://share.google/XyJXAd4BFOcL6hRoK";
    const currentYear = new Date().getFullYear();

    return (
        <div className="section">
            <div className="container">
                <footer className="py-3 my-4">
                    <div className="p-5 text-center bg-white rounded-3 border shadow-lg">
                        <h1 className="display-4 fw-bold lh-1">Contact us for a free quote</h1>
                        <p className="lead">New customers always receive a 10% discount!</p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <a
                            href={gmbLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary btn-lg px-4 fw-bold"
                        >
                            Contact Us
                        </a>
                        </div>
                    </div>
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <li className="nav-item"><a href="/terms-of-service" className="nav-link px-2 text-muted">Terms of Service</a></li>
                        <li className="nav-item"><a href="/privacy-policy" className="nav-link px-2 text-muted">Privacy Policy</a></li>
                        <li className="nav-item"><a href="/disclaimer" className="nav-link px-2 text-muted">Disclaimer</a></li>
                    </ul>
                    <p className="text-center text-muted">© {currentYear} Dans Painting and General Contracting LLC</p>
                </footer>
            </div>
        </div>
    );
};

export default Footer;
