'use client';

import Link from 'next/link';

const Header = () => {
  return (
    <header className="navbar navbar-light bg-white fixed-top border-bottom">
      <div className="container d-flex justify-content-between align-items-center">
        <Link href="/" className="navbar-brand">
          Dan's Paint & GC
        </Link>
        <a href="tel:+18577629752" className="nav-link text-dark">(857) 762-9752</a>
      </div>
    </header>
  );
};

export default Header;
