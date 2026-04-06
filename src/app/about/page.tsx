export default function AboutPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-black">About Desert Adventures</h1>
          <div className="w-24 h-1 bg-burnt-orange mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Introduction */}
          <section className="prose max-w-none">
            <div
              className="text-lg text-sand-dark leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: `
                  <p class="text-xl mb-6">
                    Welcome to Desert Adventures, your gateway to authentic Arabian desert experiences. 
                    We specialize in creating unforgettable journeys through the stunning landscapes of 
                    the Arabian wilderness.
                  </p>
                  <p class="mb-4">
                    Our mission is to connect travelers with the natural beauty, rich culture, and unique 
                    landscapes of the desert. Whether you're seeking an authentic camping experience under 
                    the stars, wildlife photography opportunities, or stargazing adventures, we curate 
                    personalized tours that create lasting memories.
                  </p>
                  <p>
                    Our team combines local expertise with a passion for adventure and a commitment to 
                    sustainable tourism. Join us for an adventure that goes beyond ordinary travel—discover 
                    the magic of the desert with experienced guides who call this landscape home.
                  </p>
                `,
              }}
            />
          </section>

          {/* Team Section */}
          <section className="pt-12 border-t border-sand-lighter">
            <h2 className="text-3xl font-bold mb-8 text-black">Meet Our Team</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Ali - Tour Guide */}
              <div className="bg-sand-lightest border border-sand-lighter rounded-lg p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-burnt-orange rounded-full flex items-center justify-center text-3xl">
                    👨‍🏫
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-black">Ali</h3>
                    <p className="text-sand-dark text-sm">Lead Tour Guide</p>
                  </div>
                </div>
                <p className="text-sand-dark leading-relaxed">
                  Ali has spent over 15 years exploring the Arabian desert. With extensive knowledge of 
                  local wildlife, traditional navigation techniques, and desert storytelling, he ensures 
                  every adventure is both safe and authentic. Fluent in Arabic and English, Ali is also 
                  certified in wilderness first aid.
                </p>
              </div>

              {/* Omar - Reservation Manager */}
              <div className="bg-sand-lightest border border-sand-lighter rounded-lg p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-burnt-orange rounded-full flex items-center justify-center text-3xl">
                    📋
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-black">Omar</h3>
                    <p className="text-sand-dark text-sm">Reservation & Experience Manager</p>
                  </div>
                </div>
                <p className="text-sand-dark leading-relaxed">
                  Omar handles all booking inquiries, logistics, and ensures your experience is seamless 
                  from start to finish. With years of experience in travel management, he's your point of 
                  contact for questions, special requests, or group arrangements. Fluent in Arabic and English.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center pt-12 border-t border-sand-lighter">
            <h2 className="text-3xl font-bold mb-4 text-black">Ready for Your Adventure?</h2>
            <p className="text-sand-dark text-lg mb-8">
              Join us for an unforgettable journey into the heart of the Arabian desert
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-burnt-orange text-white font-bold rounded-lg hover:bg-orange-light transition-colors shadow-lg"
            >
              Get in Touch
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}

