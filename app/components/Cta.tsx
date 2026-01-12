
import Link from 'next/link';

const Cta = () => {
  const gmbLink = "https://www.google.com/maps/place/Dans+Painting+%26+General+Contracting+LLC/@42.4543633,-71.7678142,157057m/data=!3m2!1e3!4b1!4m6!3m5!1s0x67f5386030fd2fa9:0xbb9e23ce85130ee5!8m2!3d42.456253!4d-71.1084279!16s%2Fg%2F11sx19hqyr?entry=ttu&g_ep=EgoyMDI2MDEwNC4wIKXMDSoASAFQAw%3D%3D";

  return (
    <div className="container my-5">
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
    </div>
  );
};

export default Cta;
