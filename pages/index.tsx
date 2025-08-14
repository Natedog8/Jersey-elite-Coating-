import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jersey Elite Coatings - Professional Epoxy Flooring</title>
        <meta name="description" content="Transform your space with professional epoxy flooring services in North Jersey." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0 }}>
        {/* Navigation */}
        <nav style={{ 
          backgroundColor: '#f8f9fa', 
          borderBottom: '1px solid #e9ecef', 
          position: 'sticky', 
          top: 0, 
          zIndex: 50,
          padding: '1rem 2rem'
        }}>
          <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto', 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center' 
          }}>
            <div>
              <img
                src="https://c.animaapp.com/rCgVzQtu/img/blue-logo@2x.png"
                alt="Jersey Elite Coatings"
                style={{ height: '40px', width: 'auto' }}
              />
            </div>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <a href="#services" style={{ color: '#374151', textDecoration: 'none', fontWeight: '500' }}>Services</a>
              <a href="#about" style={{ color: '#374151', textDecoration: 'none', fontWeight: '500' }}>About</a>
              <a href="#contact" style={{ color: '#374151', textDecoration: 'none', fontWeight: '500' }}>Contact</a>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button style={{
                backgroundColor: '#154563',
                color: 'white',
                border: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.75rem',
                fontWeight: '500',
                cursor: 'pointer'
              }}>
                Get Quote
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section style={{
          backgroundImage: "url('https://c.animaapp.com/rCgVzQtu/img/header---1--.svg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '600px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(21, 69, 99, 0.8)'
          }}></div>
          <div style={{
            position: 'relative',
            zIndex: 10,
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 2rem',
            textAlign: 'center',
            color: 'white'
          }}>
            <h1 style={{
              fontSize: '4rem',
              fontWeight: 'normal',
              marginBottom: '1.5rem',
              lineHeight: '1.1'
            }}>
              Transform Your Space with <span style={{ color: '#5B7C91' }}>Epoxy Flooring</span> Today!
            </h1>
            <p style={{
              fontSize: '1.5rem',
              marginBottom: '2rem',
              color: '#e5e7eb',
              maxWidth: '800px',
              margin: '0 auto 2rem auto'
            }}>
              Discover the durability and beauty of epoxy flooring for your home or business. 
              Our expert team in North Jersey is ready to help you achieve the perfect finish.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button style={{
                backgroundColor: '#154563',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '0.75rem',
                fontSize: '1.125rem',
                fontWeight: '500',
                cursor: 'pointer'
              }}>
                Get Quote
              </button>
              <button style={{
                backgroundColor: 'transparent',
                color: 'white',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                padding: '1rem 2rem',
                borderRadius: '0.75rem',
                fontSize: '1.125rem',
                fontWeight: '500',
                cursor: 'pointer'
              }}>
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" style={{
          backgroundImage: "url('https://c.animaapp.com/rCgVzQtu/img/layout---245--.svg')",
          backgroundSize: 'cover',
          position: 'relative',
          padding: '5rem 2rem'
        }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(91, 124, 145, 0.95), rgba(21, 69, 99, 0.95))'
          }}></div>
          <div style={{
            position: 'relative',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
              <span style={{
                color: 'rgba(255, 255, 255, 0.8)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontWeight: '600',
                fontSize: '0.875rem',
                display: 'block',
                marginBottom: '1.5rem'
              }}>
                Transform
              </span>
              <h2 style={{
                fontSize: '4rem',
                fontWeight: 'normal',
                color: 'white',
                lineHeight: '1.1',
                marginBottom: '1.5rem'
              }}>
                Exceptional Epoxy Flooring Solutions
              </h2>
              <p style={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: '1.125rem',
                maxWidth: '800px',
                margin: '0 auto'
              }}>
                Our epoxy flooring services are designed to enhance the beauty and durability of your spaces.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              marginBottom: '3rem'
            }}>
              {[
                {
                  icon: 'https://c.animaapp.com/rCgVzQtu/img/vector.svg',
                  title: 'Residential Epoxy Flooring Services',
                  description: 'Turn your home into a showroom with stunning, spill-proof floors.'
                },
                {
                  icon: 'https://c.animaapp.com/rCgVzQtu/img/vector-1.svg',
                  title: 'Commercial Epoxy Flooring Solutions',
                  description: 'Elevate your workspace with flooring built for heavy use.'
                },
                {
                  icon: 'https://c.animaapp.com/rCgVzQtu/img/vector-2.svg',
                  title: 'Garage Epoxy Flooring Installation',
                  description: 'Transform your garage into a polished, durable space.'
                }
              ].map((service, index) => (
                <div key={index} style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '1rem',
                  padding: '2rem',
                  transition: 'all 0.3s ease'
                }}>
                  <div style={{
                    width: '4rem',
                    height: '4rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem'
                  }}>
                    <img src={service.icon} alt="" style={{ width: '2rem', height: '2rem', filter: 'brightness(0) invert(1)' }} />
                  </div>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 'normal',
                    color: 'white',
                    marginBottom: '1rem'
                  }}>
                    {service.title}
                  </h3>
                  <p style={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    marginBottom: '1.5rem'
                  }}>
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" style={{
          background: 'linear-gradient(to bottom, white, #f9fafb)',
          padding: '5rem 2rem'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
              <h2 style={{
                fontSize: '3rem',
                fontWeight: 'normal',
                color: '#111827',
                marginBottom: '1.5rem'
              }}>
                Get Your Free Quote
              </h2>
              <p style={{
                fontSize: '1.25rem',
                color: '#6b7280'
              }}>
                Ready to transform your space? Contact us for a free consultation.
              </p>
            </div>

            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
              <div style={{
                backgroundColor: 'white',
                borderRadius: '1.5rem',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                border: '1px solid #f3f4f6',
                padding: '3rem'
              }}>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>
                        Full Name
                      </label>
                      <input
                        type="text"
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          border: '1px solid #d1d5db',
                          borderRadius: '0.75rem',
                          fontSize: '1rem',
                          outline: 'none'
                        }}
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>
                        Email
                      </label>
                      <input
                        type="email"
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          border: '1px solid #d1d5db',
                          borderRadius: '0.75rem',
                          fontSize: '1rem',
                          outline: 'none'
                        }}
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>
                      Message
                    </label>
                    <textarea
                      rows={4}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '0.75rem',
                        fontSize: '1rem',
                        outline: 'none',
                        resize: 'none'
                      }}
                      placeholder="Tell us about your project"
                    />
                  </div>
                  <button
                    type="submit"
                    style={{
                      width: '100%',
                      backgroundColor: '#154563',
                      color: 'white',
                      border: 'none',
                      padding: '1rem',
                      borderRadius: '0.75rem',
                      fontSize: '1rem',
                      fontWeight: '500',
                      cursor: 'pointer'
                    }}
                  >
                    Get My Free Quote
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{
          backgroundColor: 'white',
          borderTop: '1px solid #e5e7eb',
          padding: '5rem 2rem'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ marginBottom: '2rem' }}>
              <img
                src="https://c.animaapp.com/rCgVzQtu/img/image-54@2x.png"
                alt="Jersey Elite Coatings"
                style={{ width: '128px', height: '128px', margin: '0 auto', objectFit: 'contain' }}
              />
            </div>
            <p style={{ color: '#6b7280' }}>
              © 2025 Jersey Elite Coatings. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </>
  )
}
