import Link from "next/link";

export default function KitchenRemodelingPage() {
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
          <h1 className="display-5 fw-bold">Kitchen Remodeling</h1>
          <div className="col-lg-8 mx-auto">
            <p className="lead mb-4">The kitchen is the heart of the home, and we specialize in creating beautiful, functional kitchens that fit your lifestyle and budget. Whether you&apos;re looking for a complete overhaul or a few simple updates, our team can bring your vision to life.</p>
            <h2>Our Kitchen Remodeling Services Include:</h2>
            <ul>
              <li>Custom cabinet installation and refacing</li>
              <li>Countertop installation (granite, quartz, marble, etc.)</li>
              <li>Backsplash design and installation</li>
              <li>Appliance installation</li>
              <li>Lighting design and installation</li>
              <li>Flooring installation</li>
              <li>Island and peninsula construction</li>
            </ul>
            <p>We manage the entire process, from initial design and layout, to the final touches. Our goal is to create a kitchen that is not only stunning but also highly functional, with smart storage solutions and a workflow that makes cooking and entertaining a joy.</p>
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