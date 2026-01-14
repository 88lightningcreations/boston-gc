
import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className="section">
            <div className="container">
                <footer className="py-3 my-4">
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
