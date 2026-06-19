import React, { useState } from 'react';

export default function StashHouseMembership() {
  const [hoveredTier, setHoveredTier] = useState(null);

  const tiers = [
    {
      id: 'small',
      name: 'Small Tilt',
      size: '8×10',
      total: 100,
      down: 50,
      balance: 50,
      description: 'Your entry point into StashHouse Gallery.'
    },
    {
      id: 'medium',
      name: 'Medium Tilt',
      size: '18×24',
      total: 200,
      down: 100,
      balance: 100,
      description: 'The core entry. Your full-size statement piece.',
      featured: true
    },
    {
      id: 'large',
      name: 'Large Tilt',
      size: '24×36',
      total: 500,
      down: 250,
      balance: 250,
      description: 'Museum-scale. Command the room.'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero */}
      <section className="px-6 py-20 md:py-32 max-w-7xl mx-auto">
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.05em' }}>
            <span style={{ color: '#FFFF00' }}>STASHOUSE</span>
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#0088CC' }}>
            Membership
          </h2>
          <p className="text-xl md:text-2xl max-w-2xl leading-relaxed mb-4">
            Hand-original commissions. Limited first round: 50 members.
          </p>
          <p className="text-lg text-gray-400 max-w-2xl">
            You choose the vision. Malcolm Xavior Seven brings it to life. Acrylic, oil, gold leaf on canvas.
          </p>
        </div>

        {/* What's Included */}
        <div className="grid md:grid-cols-3 gap-8 mb-20 py-12 border-t border-b" style={{ borderColor: '#FFFF00' }}>
          <div>
            <p style={{ color: '#FFFF00', fontFamily: 'Bebas Neue', fontSize: '0.875rem', letterSpacing: '0.1em' }}>
              TIMELINE
            </p>
            <p className="text-2xl font-bold mt-2">4–6 Weeks</p>
            <p className="text-gray-400 mt-2">From approved concept to finished piece.</p>
          </div>
          <div>
            <p style={{ color: '#0088CC', fontFamily: 'Bebas Neue', fontSize: '0.875rem', letterSpacing: '0.1em' }}>
              WHAT YOU CAN CREATE
            </p>
            <p className="text-sm mt-2 text-gray-300">Characters • Anime • Animals • Flowers • Abstract • Your vision</p>
          </div>
          <div>
            <p style={{ color: '#FFD700', fontFamily: 'Bebas Neue', fontSize: '0.875rem', letterSpacing: '0.1em' }}>
              WHAT'S EXCLUDED
            </p>
            <p className="text-sm mt-2 text-gray-300">No portraits (no realistic faces or likenesses)</p>
          </div>
        </div>
      </section>

      {/* Tier Cards */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <h3 className="text-4xl font-bold mb-16" style={{ fontFamily: 'Bebas Neue' }}>
          Choose Your Tier
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              onMouseEnter={() => setHoveredTier(tier.id)}
              onMouseLeave={() => setHoveredTier(null)}
              className={`relative p-8 border-2 transition-all duration-300 ${
                tier.featured
                  ? 'border-yellow-300 bg-yellow-500 bg-opacity-5 scale-105 md:scale-110'
                  : 'border-gray-700 bg-gray-950'
              } ${hoveredTier === tier.id ? 'border-cyan-400' : ''}`}
            >
              {tier.featured && (
                <div
                  className="absolute top-0 left-0 right-0 text-center py-2 text-sm font-bold"
                  style={{ fontFamily: 'Bebas Neue', color: '#FFFF00', letterSpacing: '0.1em' }}
                >
                  CORE ENTRY
                </div>
              )}

              <div className={tier.featured ? 'mt-8' : ''}>
                <h4
                  className="text-3xl font-bold mb-2"
                  style={{
                    fontFamily: 'Bebas Neue',
                    color: tier.featured ? '#FFFF00' : '#0088CC'
                  }}
                >
                  {tier.name}
                </h4>
                <p className="text-gray-400 mb-6">{tier.size} canvas</p>

                <p className="text-gray-300 mb-8 leading-relaxed">{tier.description}</p>

                <div className="bg-black bg-opacity-50 p-6 mb-8 border border-gray-700">
                  <p className="text-sm text-gray-400 mb-2">INVESTMENT</p>
                  <p className="text-4xl font-bold mb-6" style={{ color: '#FFD700' }}>
                    ${tier.total}
                  </p>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Down payment</span>
                      <span className="text-white">${tier.down}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Balance on delivery</span>
                      <span className="text-white">${tier.balance}</span>
                    </div>
                  </div>
                </div>

                <button
                  className="w-full py-3 font-bold transition-all duration-300"
                  style={{
                    fontFamily: 'Bebas Neue',
                    backgroundColor: tier.featured ? '#FFFF00' : '#0088CC',
                    color: tier.featured ? '#000' : '#FFF',
                    letterSpacing: '0.05em'
                  }}
                  onMouseOver={(e) => e.target.style.opacity = '0.9'}
                  onMouseOut={(e) => e.target.style.opacity = '1'}
                >
                  Join StashHouse
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="px-6 py-20 max-w-7xl mx-auto border-t" style={{ borderColor: '#333' }}>
        <h3 className="text-4xl font-bold mb-12" style={{ fontFamily: 'Bebas Neue' }}>
          How It Works
        </h3>

        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div
              className="text-4xl font-bold mb-4"
              style={{ color: '#FFFF00', fontFamily: 'Bebas Neue' }}
            >
              1
            </div>
            <h4 className="text-lg font-bold mb-2">Choose & Pay</h4>
            <p className="text-gray-400">Select your tier. Pay the down payment.</p>
          </div>

          <div>
            <div
              className="text-4xl font-bold mb-4"
              style={{ color: '#0088CC', fontFamily: 'Bebas Neue' }}
            >
              2
            </div>
            <h4 className="text-lg font-bold mb-2">Intake Form</h4>
            <p className="text-gray-400">Tell us your vision. Subject, style, mood, references.</p>
          </div>

          <div>
            <div
              className="text-4xl font-bold mb-4"
              style={{ color: '#FFD700', fontFamily: 'Bebas Neue' }}
            >
              3
            </div>
            <h4 className="text-lg font-bold mb-2">Creation</h4>
            <p className="text-gray-400">4–6 weeks. Hand-original, one-of-a-kind.</p>
          </div>

          <div>
            <div
              className="text-4xl font-bold mb-4"
              style={{ color: '#FFFF00', fontFamily: 'Bebas Neue' }}
            >
              4
            </div>
            <h4 className="text-lg font-bold mb-2">Delivery</h4>
            <p className="text-gray-400">Pay balance. Own the art. Join the community.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="px-6 py-12 max-w-7xl mx-auto text-center border-t" style={{ borderColor: '#333' }}>
        <p className="text-sm text-gray-500 mb-4">
          Limited first round: 50 members. Certificate of authenticity included.
        </p>
        <p className="text-xs text-gray-600">
          Questions? Contact us at commissions@stashhousegallery.com
        </p>
      </section>
    </div>
  );
}
