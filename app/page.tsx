export default function Home() {
  const styles = {
    container: {
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
      margin: 0,
      padding: 0,
    },
    nav: {
      backgroundColor: '#f8f9fa',
      borderBottom: '1px solid #e9ecef',
      position: 'sticky' as const,
      top: 0,
      zIndex: 50,
      padding: '1rem 2rem',
    },
    navContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logo: {
      height: '40px',
      width: 'auto',
    },
    navLinks: {
      display: 'flex',
      gap: '2rem',
      listStyle: 'none',
      margin: 0,
      padding: 0,
    },
    navLink: {
      color: '#374151',
      textDecoration: 'none',
      fontWeight: '500',
    },
    button: {
      backgroundColor: '#154563',
      color: 'white',
      border: 'none',
      padding: '0.75rem 1.5rem',
      borderRadius: '0.75rem',
      fontWeight: '500',
      cursor: 'pointer',
    },
    hero: {
      backgroundImage: "url('https://c.animaapp.com/rCgVzQtu/img/header---1--.svg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '600px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative' as const,
    },
    heroOverlay: {
      position: 'absolute' as const,
      inset: 0,
      backgroundColor: 'rgba(21, 69, 99, 0.8)',
    },
    heroContent: {
      position: 'relative' as const,
      zIndex: 10,
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 2rem',
      textAlign: 'center' as const,
      color: 'white',
    },
    heroTitle: {
      fontSize: '4rem',
      fontWeight: 'normal' as const,
      marginBottom: '1.5rem',
      lineHeight: '1.1',
    },
    heroSubtitle: {
      fontSize: '1.5rem',
      marginBottom: '2rem',
      color: '#e5e7eb',
      maxWidth: '800px',
      margin: '0 auto 2rem auto',
    },
    heroButtons: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      flexWrap: 'wrap' as const,
    },
    heroButtonPrimary: {
      backgroundColor: '#154563',
      color: 'white',
      border: 'none',
      padding: '1rem 2rem',
      borderRadius: '0.75rem',
      fontSize: '1.125rem',
      fontWeight: '500',
      cursor: 'pointer',
    },
    heroButtonSecondary: {
      backgroundColor: 'transparent',
      color: 'white',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      padding: '1rem 2rem',
      borderRadius: '0.75rem',
      fontSize: '1.125rem',
      fontWeight: '500',
      cursor: 'pointer',
    },
    section: {
      padding: '5rem 2rem',
    },
    sectionTitle: {
      fontSize: '3rem',
      fontWeight: 'normal' as const,
      textAlign: 'center' as const,
      marginBottom: '2rem',
      color: '#111827',
    },
    sectionSubtitle: {
      fontSize: '1.25rem',
      textAlign: 'center' as const,
      color: '#6b7280',
      maxWidth: '800px',
      margin: '0 auto 3rem auto',
    },
    servicesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    serviceCard: {
      backgroundColor: 'white',
      borderRadius: '1rem',
      padding: '2rem',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      border: '1px solid #f3f4f6',
    },
    serviceIcon: {
      width: '4rem',
      height: '4rem',
      backgroundColor: '#154563',
      borderRadius: '0.75rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '1.5rem',
    },
    serviceTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      marginBottom: '1rem',
      color: '#111827',
    },
    serviceDescription: {
      color: '#6b7280',
      lineHeight: '1.6',
    },
    contactForm: {
      maxWidth: '600px',
      margin: '0 auto',
      backgroundColor: 'white',
      borderRadius: '1.5rem',
      padding: '3rem',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      border: '1px solid #f3f4f6',
    },
    formGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1.5rem',
      marginBottom: '1.5rem',
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column' as const,
    },
    label: {
      fontSize: '0.875rem',
      fontWeight: '500',
      color: '#374151',
      marginBottom: '0.5rem',
    },
    input: {
      width: '100%',
      padding: '0.75rem 1rem',
      border: '1px solid #d1d5db',
      borderRadius: '0.75rem',
      fontSize: '1rem',
      outline: 'none',
    },
    textarea: {
      width: '100%',
      padding: '0.75rem 1rem',
      border: '1px solid #d1d5db',
      borderRadius: '0.75rem',
      fontSize: '1rem',
      outline: 'none',
      resize: 'none' as const,
      minHeight: '120px',
    },
    submitButton: {
      width: '100%',
      backgroundColor: '#154563',
      color: 'white',
      border: 'none',
      padding: '1rem',
      borderRadius: '0.75rem',
      fontSize: '1rem',
      fontWeight: '500',
      cursor: 'pointer',
      marginTop: '1.5rem',
    },
    footer: {
      backgroundColor: 'white',
      borderTop: '1px solid #e5e7eb',
      padding: '3rem 2rem',
      textAlign: 'center' as const,
    },
    footerLogo: {
      width: '128px',
      height: '128px',
      margin: '0 auto 2rem auto',
      objectFit: 'contain' as const,
    },
    footerText: {
      color: '#6b7280',
      fontSize: '0.875rem',
    },
  }

  return (
    <div style={styles.container}>
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContent}>
          <div>
            <img
              src="https://c.animaapp.com/rCgVzQtu/img/blue-logo@2x.png"
              alt="Jersey Elite Coatings"
              style={styles.logo}
            />
          </div>
          <ul style={styles.navLinks}>
            <li><a href="#services" style={styles.navLink}>Services</a></li>
            <li><a href="#about" style={styles.navLink}>About</a></li>
            <li><a href="#contact" style={styles.navLink}>Contact</a></li>
          </ul>
          <button style={styles.button}>Get Quote</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            Transform Your Space with Epoxy Flooring Today!
          </h1>
          <p style={styles.heroSubtitle}>
            Discover the durability and beauty of epoxy flooring for your home or business. 
            Our expert team in North Jersey is ready to help you achieve the perfect finish.
          </p>
          <div style={styles.heroButtons}>
            <button style={styles.heroButtonPrimary}>Get Quote</button>
            <button style={styles.heroButtonSecondary}>Learn More</button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Services</h2>
        <p style={styles.sectionSubtitle}>
          Professional epoxy flooring solutions for residential and commercial spaces
        </p>
        <div style={styles.servicesGrid}>
          <div style={styles.serviceCard}>
            <div style={styles.serviceIcon}>
              <img src="https://c.animaapp.com/rCgVzQtu/img/vector.svg" alt="" style={{width: '2rem', height: '2rem', filter: 'brightness(0) invert(1)'}} />
            </div>
            <h3 style={styles.serviceTitle}>Residential Epoxy Flooring</h3>
            <p style={styles.serviceDescription}>
              Turn your home into a showroom with stunning, spill-proof floors perfect for garages, basements, and more.
            </p>
          </div>
          <div style={styles.serviceCard}>
            <div style={styles.serviceIcon}>
              <img src="https://c.animaapp.com/rCgVzQtu/img/vector-1.svg" alt="" style={{width: '2rem', height: '2rem', filter: 'brightness(0) invert(1)'}} />
            </div>
            <h3 style={styles.serviceTitle}>Commercial Solutions</h3>
            <p style={styles.serviceDescription}>
              Elevate your workspace with flooring built for heavy use in warehouses, retail spaces, and industrial areas.
            </p>
          </div>
          <div style={styles.serviceCard}>
            <div style={styles.serviceIcon}>
              <img src="https://c.animaapp.com/rCgVzQtu/img/vector-2.svg" alt="" style={{width: '2rem', height: '2rem', filter: 'brightness(0) invert(1)'}} />
            </div>
            <h3 style={styles.serviceTitle}>Garage Flooring</h3>
            <p style={styles.serviceDescription}>
              Transform your garage into a polished, durable space with decorative flakes and custom finishes.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{...styles.section, backgroundColor: '#f9fafb'}}>
        <h2 style={styles.sectionTitle}>Get Your Free Quote</h2>
        <p style={styles.sectionSubtitle}>
          Ready to transform your space? Contact us for a free consultation.
        </p>
        <div style={styles.contactForm}>
          <form>
            <div style={styles.formGrid}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Full Name</label>
                <input type="text" style={styles.input} placeholder="Enter your name" />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Email</label>
                <input type="email" style={styles.input} placeholder="Enter your email" />
              </div>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Message</label>
              <textarea style={styles.textarea} placeholder="Tell us about your project"></textarea>
            </div>
            <button type="submit" style={styles.submitButton}>
              Get My Free Quote
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <img
          src="https://c.animaapp.com/rCgVzQtu/img/image-54@2x.png"
          alt="Jersey Elite Coatings"
          style={styles.footerLogo}
        />
        <p style={styles.footerText}>
          © 2025 Jersey Elite Coatings. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
