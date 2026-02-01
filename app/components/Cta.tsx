const Cta = () => {
  const gmbLink = "https://share.google/XyJXAd4BFOcL6hRoK";

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
