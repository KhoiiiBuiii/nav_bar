// app/components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <header style={styles.header}>
      <div style={styles.topBanner}>
        <p>Sign up and get your first free coin: <Link href="/signup" style={styles.signupLink}>Sign Up Now</Link></p>
      </div>
      <nav style={styles.nav}>
        <div style={styles.logo}>
          <Link href="/">Celler</Link>
        </div>
        <ul style={styles.navLinks}>
          <li><Link href="/" style={styles.link}>Home</Link></li>
          <li><Link href="/sell" style={styles.link}>Sell</Link></li>
          <li><Link href="/about" style={styles.link}>About us</Link></li>
        </ul>
        <div style={styles.actions}>
          <input type="text" placeholder="Search for products..." style={styles.searchInput} />
          <span style={styles.icon}>❤️</span>
          <span style={styles.icon}>👤</span>
        </div>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    width: '100%',
    marginBottom: '1rem',
  },
  topBanner: {
    backgroundColor: '#0056d2',
    color: '#fff',
    padding: '0.5rem 1rem',
    textAlign: 'center',
    fontSize: '0.9rem',
  },
  signupLink: {
    color: '#fff',
    textDecoration: 'underline',
    fontWeight: 'bold',
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    borderBottom: '1px solid #ddd',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    gap: '1.5rem',
    margin: 0,
    padding: 0,
  },
  link: {
    color: '#000',
    textDecoration: 'none',
    fontWeight: '500',
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  searchInput: {
    padding: '0.5rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
    outline: 'none',
  },
  icon: {
    fontSize: '1.2rem',
    cursor: 'pointer',
  },
};

export default Navbar;
