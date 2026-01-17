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
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
