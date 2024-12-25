// app/layout.js
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: 'Arial, sans-serif' }}>
        <Navbar />
        <main style={{ minHeight: '80vh', padding: '2rem' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
