import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Nav from './components/Nav';
import Footer from './components/Footer';

export const metadata = {
  title: 'Dans Painting and General Contracting LLC | Boston, MA',
  description: 'Your trusted partner for residential and commercial contracting services in Boston, Massachusetts.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ paddingTop: '56px' }}>
        <Nav />
        <main id="content-container">
          {children}
        </main>
        <Footer />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
      </body>
    </html>
  );
}
