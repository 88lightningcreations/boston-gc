'use client';

import Link from 'next/link';

const Nav = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-white fixed-top border-bottom">
      <div className="container">
        <Link href="/" className="navbar-brand">
          Dan&apos;s Paint & GC
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link href="#about" className="nav-link">About</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Services
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link href="/services/interior-painting" className="dropdown-item">Interior & Exterior Painting</Link></li>
                <li><Link href="/services/bathroom-remodeling" className="dropdown-item">Bathroom Remodeling</Link></li>
                <li><Link href="/services/kitchen-remodeling" className="dropdown-item">Kitchen Remodeling</Link></li>
                <li><Link href="/services/deck-building" className="dropdown-item">Deck Building</Link></li>
                <li><Link href="/services/basement-finishing" className="dropdown-item">Basement Finishing</Link></li>
                <li><Link href="/services/flooring-installation" className="dropdown-item">Flooring Installation</Link></li>
                <li><Link href="/services/siding" className="dropdown-item">Siding</Link></li>
                <li><Link href="/services/staircases-railings" className="dropdown-item">Staircases & Railings</Link></li>
                <li><Link href="/services/sunrooms-additions" className="dropdown-item">Sunrooms & Additions</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link href="#contact" className="nav-link">Contact</Link>
            </li>
            <li className="nav-item">
              <a href="tel:+18577629752" className="nav-link text-dark">(857) 762-9752</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Nav;
