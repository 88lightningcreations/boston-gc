import { getPost } from '../../../lib/posts';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);

  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
          <span className="fs-4">General Contracting</span>
        </a>

        <ul className="nav nav-pills">
          <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="/#services" className="nav-link">Services</a></li>
          <li className="nav-item"><a href="/blog" className="nav-link">Blog</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
        </ul>
      </header>
      <main>
        {post ? (
            <article>
                <h1>{post.title}</h1>
                <p>{post.content}</p>
            </article>
        ) : (
            <p>Post not found</p>
        )}
      </main>

      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Home</a></li>
          <li className="nav-item"><a href="/#services" className="nav-link px-2 text-muted">Services</a></li>
          <li className="nav-item"><a href="/blog" className="nav-link px-2 text-muted">Blog</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Contact</a></li>
        </ul>
        <p className="text-center text-muted">© 2023 General Contracting Company</p>
      </footer>
    </div>
  );
}
