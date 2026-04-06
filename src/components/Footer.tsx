import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-sand-lightest border-t border-sand-lighter mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-black font-bold text-lg mb-4">About Us</h3>
            <p className="text-sand-dark text-sm leading-relaxed">
              Discover the magic of the Arabian desert with our expert-guided tours and unforgettable adventures.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-black font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sand-dark hover:text-burnt-orange transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sand-dark hover:text-burnt-orange transition-colors text-sm">
                  All Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sand-dark hover:text-burnt-orange transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sand-dark hover:text-burnt-orange transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-black font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-sand-dark">
              <li>
                <span className="text-black font-semibold">Phone:</span> +966 XX XXX XXXX
              </li>
              <li>
                <span className="text-black font-semibold">Email:</span> info@desertadventures.com
              </li>
              <li>
                <span className="text-black font-semibold">Address:</span> Saudi Arabia
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-sand-lighter text-center">
          <p className="text-sand-dark/60 text-sm">
            © {currentYear} Desert Adventures. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

