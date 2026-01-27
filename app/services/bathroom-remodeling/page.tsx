import Link from "next/link";

export default function BathroomRemodelingPage() {
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
          <h1 className="display-5 fw-bold">Bathroom Remodeling</h1>
          <div className="col-lg-8 mx-auto">
            <p className="lead mb-4">Ready to create the bathroom of your dreams? From small powder rooms to luxurious master suites, we can handle every aspect of your bathroom remodel. We combine functional design with high-quality materials to create a space that is both beautiful and practical.</p>
            <h2>Our Bathroom Remodeling Services Include:</h2>
            <ul>
              <li>Custom tile and stonework</li>
              <li>Shower and bathtub installation</li>
              <li>Vanity and countertop replacement</li>
              <li>Lighting and ventilation upgrades</li>
              <li>Plumbing and fixture installation</li>
              <li>Heated flooring</li>
              <li>Universal design and accessibility features</li>
            </ul>
            <p>Our team will work with you from the initial design concept to the final installation, ensuring your new bathroom meets your specific needs and style. We focus on creating a spa-like retreat that adds value and comfort to your home.</p>
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