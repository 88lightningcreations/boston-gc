import Link from 'next/link';
import { getPosts } from '../../lib/posts';

export default function BlogPage() {
  const posts = getPosts();

  return (
    <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <Link href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <span className="fs-4">General Contracting</span>
            </Link>

            <ul className="nav nav-pills">
                <li className="nav-item"><Link href="/" className="nav-link">Home</Link></li>
                <li className="nav-item"><Link href="/#services" className="nav-link">Services</Link></li>
                <li className="nav-item"><Link href="/blog" className="nav-link active" aria-current="page">Blog</Link></li>
                <li className="nav-item"><Link href="#" className="nav-link">Contact</Link></li>
            </ul>
        </header>

        <main>
            <h1>Blog</h1>
            <ul>
                {posts.map((post) => (
                <li key={post.slug}>
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </li>
                ))}
            </ul>
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
