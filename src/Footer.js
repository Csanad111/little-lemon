function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <section>
            <h3>Doormat Navigation</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/menu">Menu</a></li>
              <li><a href="/reservations">Reservations</a></li>
            </ul>
          </section>

          <section>
            <h3>Contact</h3>
            <p>Address: 123 Town Street, Chicago</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@littlelemon.com</p>
          </section>

          <section>
            <h3>Social Media Links</h3>
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Twitter</a></li>
            </ul>
          </section>
        </div>
        <p style={{ marginTop: '2rem', textAlign: 'center' }}>© 2025 Little Lemon. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;