export default function Footer() {
  const navigationLinks = [
    'About Us',
    'Our Services', 
    'Testimonials',
    'Contact Us',
    'Get a Quote',
  ]

  const legalLinks = [
    'Privacy Policy',
    'Terms of Use', 
    'Cookie Policy'
  ]

  return (
    <footer className="bg-white section-padding">
      <div className="container-max">
        <div className="max-w-2xl mx-auto text-center mb-20">
          <div className="mb-8">
            <img
              src="https://c.animaapp.com/rCgVzQtu/img/image-54@2x.png"
              alt="Jersey Elite Coatings"
              className="w-64 h-64 mx-auto object-contain"
            />
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-8 mb-20">
            {navigationLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-gray-700 hover:text-chathams-blue font-semibold transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © 2025 Jersey Elite Coatings. All rights reserved.
            </p>
            
            <nav className="flex items-center gap-6">
              {legalLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-600 hover:text-chathams-blue text-sm underline transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
