
import React from 'react';

const TermsOfService = () => {
    return (
        <div className="container py-5">
            <h1 className="mb-4">Terms of Service</h1>
            <p className="text-muted">Last Updated: {new Date().toLocaleDateString()}</p>

            <h2 className="mt-5">1. Agreement to Terms</h2>
            <p>By accessing or using our website and services, you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of the terms, then you may not access the service. These Terms apply to all visitors, users, and others who access or use the Service.</p>

            <h2 className="mt-4">2. Our Services</h2>
            <p>Dans Painting and General Contracting LLC provides general contracting services in the Boston, MA area, including but not limited to kitchen and bathroom remodeling, interior painting, and more. The information on our website is for informational purposes only and does not constitute a formal offer or contract.</p>

            <h2 className="mt-4">3. Intellectual Property</h2>
            <p>The Service and its original content, features, and functionality are and will remain the exclusive property of Dans Painting and General Contracting LLC and its licensors. The content, including photographs, text, graphics, and logos, is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Dans Painting and General Contracting LLC.</p>

            <h2 className="mt-4">4. User Conduct</h2>
            <p>You agree not to use the website in a way that is illegal, harmful, or fraudulent. You agree not to post or transmit any material which is defamatory, offensive, or of an obscene or menacing character, or that may cause annoyance, inconvenience, or needless anxiety.</p>

            <h2 className="mt-4">5. Limitation of Liability</h2>
            <p>In no event shall Dans Painting and General Contracting LLC, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage.</p>

            <h2 className="mt-4">6. Disclaimer</h2>
            <p>Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.</p>
            <p>Dans Painting and General Contracting LLC does not warrant that a) the Service will function uninterrupted, secure or available at any particular time or location; b) any errors or defects will be corrected; c) the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your requirements.</p>

            <h2 className="mt-4">7. Governing Law</h2>
            <p>These Terms shall be governed and construed in accordance with the laws of the Commonwealth of Massachusetts, United States, without regard to its conflict of law provisions.</p>
            <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.</p>

            <h2 className="mt-4">8. Changes</h2>
            <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>

            <h2 className="mt-4">9. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us.</p>
        </div>
    );
};

export default TermsOfService;
