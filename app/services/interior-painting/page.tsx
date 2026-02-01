import Link from "next/link";

export default function InteriorPaintingPage() {
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <Link href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
          <span className="fs-4">General Contracting</span>
        </Link>
        <ul className="nav nav-pills">
          <li className="nav-item"><Link href="/" className="nav-link">Home</Link></li>
          <li className="nav-item"><Link href="/#services" className="nav-link active" aria-current="page">Services</Link></li>
          <li className="nav-item"><Link href="/blog" className="nav-link">Blog</Link></li>
          <li className="nav-item"><Link href="#" className="nav-link">Contact</Link></li>
        </ul>
      </header>
      <main>
        <div className="px-4 py-5 my-5 text-center">
          <h1 className="display-5 fw-bold">Interior & Exterior Painting</h1>
          <div className="col-lg-8 mx-auto">
            <p className="lead mb-4">A fresh coat of paint is one of the most effective and affordable ways to transform your home. Whether you&apos;re looking to update a single room or repaint the entire exterior of your house, our team of professional painters has the expertise to deliver a flawless finish.</p>
            <h2>Our Painting Services Include:</h2>
            <ul>
              <li>Color consultation</li>
              <li>Detailed surface preparation (sanding, patching, priming)</li>
              <li>Brush, roll, and spray application</li>
              <li>Trim, door, and ceiling painting</li>
              <li>Staining and finishing for wood surfaces</li>
              <li>Exterior power washing and painting</li>
              <li>Deck and fence staining</li>
            </ul>
            <p>We use only high-quality paints and materials to ensure a long-lasting and durable finish that you&apos;ll love for years to come. We take great care to protect your furniture and flooring and always leave your home clean and tidy.</p>
          </div>
        </div>
      </main>
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item"><Link href="/" className="nav-link px-2 text-muted">Home</Link></li>
          <li className="nav-item"><Link href="/#services" className="nav-link px-2 text-muted">Services</Link></li>
          <li className="nav-item"><Link href="/blog" className="nav-link px-2 text-muted">Blog</Link></li>
          <li className="nav-item"><Link href="#" className="nav-link px-2 text-muted">Contact</Link></li>
        </ul>
        <p className="text-center text-muted">© 2023 General Contracting Company</p>
      </footer>
    </div>
  );
}
