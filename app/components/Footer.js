// app/components/Footer.js
const Footer = () => {
    return (
      <footer style={styles.footer}>
        <div style={styles.newsletter}>
          <p style={styles.newsletterText}>Stay up to date about our latest auctions</p>
          <div style={styles.subscribe}>
            <input
              type="email"
              placeholder="Enter your email address"
              style={styles.emailInput}
            />
            <button style={styles.subscribeButton}>Subscribe to Newsletter</button>
          </div>
        </div>
        <div style={styles.footerLinks}>
          <div style={styles.column}>
            <h4>Company</h4>
            <ul style={styles.list}>
              <li><a href="#">About</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Works</a></li>
              <li><a href="#">Career</a></li>
            </ul>
          </div>
          <div style={styles.column}>
            <h4>Help</h4>
            <ul style={styles.list}>
              <li><a href="#">Customer Support</a></li>
              <li><a href="#">Delivery Details</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div style={styles.column}>
            <h4>FAQ</h4>
            <ul style={styles.list}>
              <li><a href="#">Account</a></li>
              <li><a href="#">Manage Deliveries</a></li>
              <li><a href="#">Orders</a></li>
              <li><a href="#">Payments</a></li>
            </ul>
          </div>
          <div style={styles.column}>
            <h4>Resources</h4>
            <ul style={styles.list}>
              <li><a href="#">Free eBooks</a></li>
              <li><a href="#">Development Tutorial</a></li>
              <li><a href="#">How to: Blog</a></li>
              <li><a href="#">YouTube Playlist</a></li>
            </ul>
          </div>
        </div>
        <div style={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} Celler. All Rights Reserved.</p>
        </div>
      </footer>
    );
  };
  
  const styles = {
    footer: {
      backgroundColor: '#1779D8',
      padding: '2rem 1rem',
    },
    newsletter: {
      textAlign: 'center',
      marginBottom: '2rem',
    },
    newsletterText: {
      fontSize: '1.2rem',
      fontWeight: '500',
    },
    subscribe: {
      display: 'flex',
      justifyContent: 'center',
      gap: '0.5rem',
      marginTop: '1rem',
    },
    emailInput: {
      padding: '0.5rem',
      border: '1px solid #ddd',
      borderRadius: '4px',
      flex: '1',
    },
    subscribeButton: {
      padding: '0.5rem 1rem',
      backgroundColor: '#0056d2',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    footerLinks: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '1rem',
      textAlign: 'left',
    },
    column: {
      fontSize: '0.9rem',
    },
    list: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    copyright: {
      textAlign: 'center',
      marginTop: '2rem',
      fontSize: '0.8rem',
      color: '#777',
    },
  };
  
  export default Footer;
  