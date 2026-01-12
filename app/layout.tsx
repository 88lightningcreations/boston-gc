import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: 'General Contracting Company | Boston, MA',
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
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
