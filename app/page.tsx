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
      padding: '1rem',
    },
    navContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap' as const,
    },
    logo: {
      height: '40px',
      width: 'auto',
    },
    navLinks: {
      display: 'flex',
      gap: '1.5rem',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      flexWrap: 'wrap' as const,
    },
    navLink: {
      color: '#374151',
      textDecoration: 'none',
      fontWeight: '500',
      fontSize: '0.9rem',
    },
    button: {
      backgroundColor: '#154563',
      color: 'white',
      border: 'none',
      padding: '0.75rem 1.5rem',
      borderRadius: '0.75rem',
      fontWeight: '500',
      cursor: 'pointer',
      fontSize: '0.9rem',
    },
    hero: {
      backgroundImage: "url('https://c.animaapp.com/rCgVzQtu/img/header---1--.svg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '500px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative' as const,
      padding: '2rem 1rem',
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
      padding: '0 1rem',
      textAlign: 'center' as const,
      color: 'white',
    },
    heroTitle: {
      fontSize: 'clamp(2rem, 5vw, 4rem)',
      fontWeight: 'normal' as const,
      marginBottom: '1.5rem',
      lineHeight: '1.2',
    },
    heroSubtitle: {
      fontSize: 'clamp(1rem, 3vw, 1.5rem)',
      marginBottom: '2rem',
      color: '#e5e7eb',
      maxWidth: '800px',
      margin: '0 auto 2rem auto',
      lineHeight: '1.5',
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
      fontSize: 'clamp(0.9rem, 2.5vw, 1.125rem)',
      fontWeight: '500',
      cursor: 'pointer',
      minWidth: '140px',
    },
    heroButtonSecondary: {
      backgroundColor: 'transparent',
      color: 'white',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      padding: '1rem 2rem',
      borderRadius: '0.75rem',
      fontSize: 'clamp(0.9rem, 2.5vw, 1.125rem)',
      fontWeight: '500',
      cursor: 'pointer',
      minWidth: '140px',
    },
    section: {
      padding: 'clamp(3rem, 8vw, 5rem) 1rem',
    },
    sectionTitle: {
      fontSize: 'clamp(2rem, 6vw, 3rem)',
      fontWeight: 'normal' as const,
      textAlign: 'center' as const,
      marginBottom: '2rem',
      color: '#111827',
      lineHeight: '1.2',
    },
    sectionSubtitle: {
      fontSize: 'clamp(1rem, 3vw, 1.25rem)',
      textAlign: 'center' as const,
      color: '#6b7280',
      maxWidth: '800px',
      margin: '0 auto 3rem auto',
      lineHeight: '1.6',
    },
    servicesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: 'clamp(1rem, 4vw, 2rem)',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    serviceCard: {
      backgroundColor: 'white',
      borderRadius: '1rem',
      padding: 'clamp(1.5rem, 4vw, 2rem)',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      border: '1px solid #f3f4f6',
    },
    serviceIcon: {
      width: 'clamp(3rem, 8vw, 4rem)',
      height: 'clamp(3rem, 8vw, 4rem)',
      backgroundColor: '#154563',
      borderRadius: '0.75rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '1.5rem',
    },
    serviceTitle: {
      fontSize: 'clamp(1.25rem, 4vw, 1.5rem)',
      fontWeight: '600',
      marginBottom: '1rem',
      color: '#111827',
      lineHeight: '1.3',
    },
    serviceDescription: {
      color: '#6b7280',
      lineHeight: '1.6',
      fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
    },
    contactForm: {
      maxWidth: '600px',
      margin: '0 auto',
      backgroundColor: 'white',
      borderRadius: '1.5rem',
      padding: 'clamp(2rem, 6vw, 3rem)',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      border: '1px solid #f3f4f6',
    },
    formGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
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
      boxSizing: 'border-box' as const,
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
      boxSizing: 'border-box' as const,
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
      padding: 'clamp(2rem, 6vw, 3rem) 1rem',
      textAlign: 'center' as const,
    },
    footerLogo: {
      width: 'clamp(80px, 20vw, 128px)',
      height: 'clamp(80px, 20vw, 128px)',
      margin: '0 auto 2rem auto',
      objectFit: 'contain' as const,
    },
    footerText: {
      color: '#6b7280',
      fontSize: 'clamp(0.8rem, 2vw, 0.875rem)',
    },
  }

  return (
    <>
      <style jsx>{`
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          
          .hero-title {
            font-size: 2.5rem !important;
            line-height: 1.1 !important;
          }
          
          .hero-subtitle {
            font-size: 1.1rem !important;
          }
          
          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .hero-buttons button {
            width: 100%;
            max-width: 280px;
          }
          
          .services-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          
          .form-grid {
            grid-template-columns: 1fr !important;
          }
          
          .nav-content {
            flex-direction: column;
            gap: 1rem;
          }
          
          .nav-content > div:last-child {
            order: -1;
          }
        }
        
        @media (max-width: 480px) {
          .hero {
            min-height: 400px !important;
            padding: 1rem !important;
          }
          
          .section {
            padding: 2rem 0.5rem !important;
          }
          
          .service-card {
            padding: 1.5rem !important;
          }
          
          .contact-form {
            padding: 1.5rem !important;
            margin: 0 0.5rem !important;
          }
        }
      `}</style>
      
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
            <ul style={styles.navLinks} className="nav-links">
              <li><a href="#services" style={styles.navLink}>Services</a></li>
              <li><a href="#about" style={styles.navLink}>About</a></li>
              <li><a href="#contact" style={styles.navLink}>Contact</a></li>
            </ul>
            <button style={styles.button}>Get Quote</button>
          </div>
        </nav>

        {/* Hero Section */}
        <section style={styles.hero} className="hero">
          <div style={styles.heroOverlay}></div>
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle} className="hero-title">
              Transform Your Space with Epoxy Flooring Today!
            </h1>
            <p style={styles.heroSubtitle} className="hero-subtitle">
              Discover the durability and beauty of epoxy flooring for your home or business. 
              Our expert team in North Jersey is ready to help you achieve the perfect finish.
            </p>
            <div style={styles.heroButtons} className="hero-buttons">
              <button style={styles.heroButtonPrimary}>Get Quote</button>
              <button style={styles.heroButtonSecondary}>Learn More</button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" style={styles.section} className="section">
          <h2 style={styles.sectionTitle}>Our Services</h2>
          <p style={styles.sectionSubtitle}>
            Professional epoxy flooring solutions for residential and commercial spaces
          </p>
          <div style={styles.servicesGrid} className="services-grid">
            <div style={styles.serviceCard} className="service-card">
              <div style={styles.serviceIcon}>
                <img src="https://c.animaapp.com/rCgVzQtu/img/vector.svg" alt="" style={{width: '2rem', height: '2rem', filter: 'brightness(0) invert(1)'}} />
              </div>
              <h3 style={styles.serviceTitle}>Residential Epoxy Flooring</h3>
              <p style={styles.serviceDescription}>
                Turn your home into a showroom with stunning, spill-proof floors perfect for garages, basements, and more.
              </p>
            </div>
            <div style={styles.serviceCard} className="service-card">
              <div style={styles.serviceIcon}>
                <img src="https://c.animaapp.com/rCgVzQtu/img/vector-1.svg" alt="" style={{width: '2rem', height: '2rem', filter: 'brightness(0) invert(1)'}} />
              </div>
              <h3 style={styles.serviceTitle}>Commercial Solutions</h3>
              <p style={styles.serviceDescription}>
                Elevate your workspace with flooring built for heavy use in warehouses, retail spaces, and industrial areas.
              </p>
            </div>
            <div style={styles.serviceCard} className="service-card">
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
        <section id="contact" style={{...styles.section, backgroundColor: '#f9fafb'}} className="section">
          <h2 style={styles.sectionTitle}>Get Your Free Quote</h2>
          <p style={styles.sectionSubtitle}>
            Ready to transform your space? Contact us for a free consultation.
          </p>
          <div style={styles.contactForm} className="contact-form">
            <form>
              <div style={styles.formGrid} className="form-grid">
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
    </>
  )
}
