export default function ContactPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-black">Get in Touch</h1>
          <div className="w-24 h-1 bg-burnt-orange mx-auto mb-4"></div>
          <p className="text-sand-dark text-lg max-w-2xl mx-auto">
            Ready to embark on your desert adventure? We'd love to hear from you. 
            Contact Omar for booking inquiries, pricing, or special arrangements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-black">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sand-light rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-burnt-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Phone</h3>
                    <p className="text-sand-dark">+966 XX XXX XXXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sand-light rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-burnt-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Email</h3>
                    <p className="text-sand-dark">info@desertadventures.com</p>
                    <p className="text-sand-dark">bookings@desertadventures.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sand-light rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-burnt-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Address</h3>
                    <p className="text-sand-dark">Desert Adventures Office</p>
                    <p className="text-sand-dark">Saudi Arabia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="pt-8 border-t border-sand-lighter">
              <h3 className="font-semibold text-black mb-4">Business Hours</h3>
              <div className="space-y-2 text-sand-dark">
                <p className="flex justify-between">
                  <span>Sunday - Thursday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Friday - Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-sand-lightest border border-sand-lighter rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-black">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-white border border-sand rounded-lg focus:outline-none focus:border-burnt-orange text-black"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-white border border-sand rounded-lg focus:outline-none focus:border-burnt-orange text-black"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-black mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 bg-white border border-sand rounded-lg focus:outline-none focus:border-burnt-orange text-black"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="booking">Booking Request</option>
                  <option value="group">Group Tours</option>
                  <option value="custom">Custom Experience</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-white border border-sand rounded-lg focus:outline-none focus:border-burnt-orange text-black resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-burnt-orange text-white font-bold rounded-lg hover:bg-orange-light transition-colors"
              >
                Send Message
              </button>
            </form>

            <p className="text-xs text-sand-dark/60 mt-4">
              * Required fields. We'll respond within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

