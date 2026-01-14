
import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="container py-5">
            <h1 className="mb-4">Privacy Policy</h1>
            <p className="text-muted">Last Updated: {new Date().toLocaleDateString()}</p>

            <h2 className="mt-5">1. Introduction</h2>
            <p>This Privacy Policy describes how Dans Painting and General Contracting LLC ("we," "us," or "our") collects, uses, and discloses your personal information when you use our website. We are committed to protecting your privacy and complying with applicable data protection laws.</p>

            <h2 className="mt-4">2. Information We Collect</h2>
            <p>We may collect several types of information from and about users of our website, including:</p>
            <ul>
                <li><strong>Personal Information:</strong> We may collect personal information that you voluntarily provide to us, such as your name, email address, phone number, and any other information you provide when you fill out a contact form or subscribe to our newsletter.</li>
                <li><strong>Usage Data:</strong> We may automatically collect information about how you access and use the website. This may include your IP address, browser type, operating system, the pages you visit, the time and date of your visit, and other statistics.</li>
                <li><strong>Cookies and Tracking Technologies:</strong> We may use cookies and similar tracking technologies to track the activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</li>
            </ul>

            <h2 className="mt-4">3. How We Use Your Information</h2>
            <p>We use the information we collect for various purposes, including to:</p>
            <ul>
                <li>Provide and maintain our website and services</li>
                <li>Notify you about changes to our website or services</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you marketing and promotional materials, if you have opted in to receive them</li>
                <li>Gather analysis or valuable information so that we can improve our website</li>
                <li>Monitor the usage of our website</li>
                <li>Detect, prevent, and address technical issues</li>
            </ul>

            <h2 className="mt-4">4. Disclosure of Your Information</h2>
            <p>We do not sell or rent your personal information to third parties. We may disclose your personal information to third-party service providers who perform services on our behalf, such as website hosting, data analysis, and email delivery. These service providers are obligated to protect your personal information and are not authorized to use or disclose your personal information for any other purpose.</p>
            <p>We may also disclose your personal information to comply with a legal obligation, to protect and defend our rights or property, or to prevent or investigate possible wrongdoing in connection with the website.</p>

            <h2 className="mt-4">5. Security of Your Information</h2>
            <p>We take reasonable measures to help protect your personal information from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction. However, no electronic storage or transmission of information is completely secure. We cannot guarantee the security of your personal information.</p>

            <h2 className="mt-4">6. Your Rights</h2>
            <p>Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your personal information. To exercise these rights, please contact us.</p>

            <h2 className="mt-4">7. Changes to This Privacy Policy</h2>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>

            <h2 className="mt-4">8. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us.</p>
        </div>
    );
};

export default PrivacyPolicy;
