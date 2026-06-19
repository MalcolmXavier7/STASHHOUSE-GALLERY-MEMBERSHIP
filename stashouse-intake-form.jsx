import React, { useState } from 'react';

export default function IntakeForm() {
  const [formData, setFormData] = useState({
    tier: 'medium',
    subject: '',
    style: '',
    mood: '',
    references: '',
    inspiration: '',
    fullName: '',
    email: '',
    phone: '',
    additionalNotes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you'd send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        tier: 'medium',
        subject: '',
        style: '',
        mood: '',
        references: '',
        inspiration: '',
        fullName: '',
        email: '',
        phone: '',
        additionalNotes: ''
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: 'Bebas Neue', color: '#FFFF00', letterSpacing: '0.05em' }}>
            Commission Intake
          </h1>
          <p className="text-gray-300 text-lg">
            Welcome to StashHouse Gallery. Let's bring your vision to life.
          </p>
        </div>

        {submitted ? (
          <div className="bg-green-900 bg-opacity-30 border-2 border-green-500 p-8 text-center rounded">
            <h2 className="text-2xl font-bold mb-2" style={{ color: '#00DD00' }}>
              Commission Received
            </h2>
            <p className="text-gray-300">
              We'll review your vision and reach out within 48 hours to confirm details.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Tier Selection */}
            <div>
              <label className="block text-sm font-bold mb-4" style={{ color: '#FFFF00', fontFamily: 'Bebas Neue', letterSpacing: '0.1em' }}>
                Your Tier
              </label>
              <select
                name="tier"
                value={formData.tier}
                onChange={handleChange}
                className="w-full bg-gray-950 border-2 border-gray-700 p-4 text-white focus:border-cyan-400 focus:outline-none"
              >
                <option value="small">Small Tilt (8×10) — $100</option>
                <option value="medium">Medium Tilt (18×24) — $200</option>
                <option value="large">Large Tilt (24×36) — $500</option>
              </select>
            </div>

            {/* Personal Identity */}
            <div className="border-t border-gray-700 pt-8">
              <h3 className="text-lg font-bold mb-6" style={{ fontFamily: 'Bebas Neue', color: '#0088CC', letterSpacing: '0.05em' }}>
                Who You Are
              </h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Any nicknames that are special or close to your heart?</label>
                  <input
                    type="text"
                    placeholder="e.g., 'The Builder', 'Seven', something meaningful..."
                    className="w-full bg-gray-950 border-2 border-gray-700 p-3 text-white placeholder-gray-600 focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Zodiac sign (if it matters to you)</label>
                  <input
                    type="text"
                    placeholder="e.g., Aquarius, Leo, etc."
                    className="w-full bg-gray-950 border-2 border-gray-700 p-3 text-white placeholder-gray-600 focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Spirit animal? (if you have one)</label>
                  <textarea
                    placeholder="What is it and why?"
                    className="w-full bg-gray-950 border-2 border-gray-700 p-3 text-white placeholder-gray-600 focus:border-cyan-400 focus:outline-none h-16 resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Cities or neighborhoods you love</label>
                  <input
                    type="text"
                    placeholder="Places that represent you or inspire you..."
                    className="w-full bg-gray-950 border-2 border-gray-700 p-3 text-white placeholder-gray-600 focus:border-cyan-400 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Interests & Collections */}
            <div className="border-t border-gray-700 pt-8">
              <h3 className="text-lg font-bold mb-6" style={{ fontFamily: 'Bebas Neue', color: '#0088CC', letterSpacing: '0.05em' }}>
                Your Interests
              </h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Pets (names, breeds, markings, favorite toy)?</label>
                  <textarea
                    placeholder="Tell us about them—we might weave them in..."
                    className="w-full bg-gray-950 border-2 border-gray-700 p-3 text-white placeholder-gray-600 focus:border-cyan-400 focus:outline-none h-16 resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Favorite flower(s)</label>
                  <input
                    type="text"
                    placeholder="e.g., Sunflowers, roses, wildflowers..."
                    className="w-full bg-gray-950 border-2 border-gray-700 p-3 text-white placeholder-gray-600 focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Hobbies & passions</label>
                  <input
                    type="text"
                    placeholder="What do you love doing?"
                    className="w-full bg-gray-950 border-2 border-gray-700 p-3 text-white placeholder-gray-600 focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Are you a collector of anything?</label>
                  <textarea
                    placeholder="Sneakers? Comics? Records? Anything we can weave into the piece?"
                    className="w-full bg-gray-950 border-2 border-gray-700 p-3 text-white placeholder-gray-600 focus:border-cyan-400 focus:outline-none h-16 resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Favorite sport or team?</label>
                  <input
                    type="text"
                    placeholder="e.g., Basketball, Pittsburgh Pirates, etc."
                    className="w-full bg-gray-950 border-2 border-gray-700 p-3 text-white placeholder-gray-600 focus:border-cyan-400 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* The Core Vision */}
            <div className="border-t border-gray-700 pt-8">
              <h3 className="text-lg font-bold mb-6" style={{ fontFamily: 'Bebas Neue', color: '#FFD700', letterSpacing: '0.05em' }}>
                Your Vision
              </h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold mb-2" style={{ color: '#0088CC' }}>
                    What's the subject or concept?
                  </label>
                  <p className="text-xs text-gray-400 mb-3">
                    Character, animal, flowers, abstract, scene, cultural theme, your vision...
                  </p>
                  <textarea
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Describe what you want the piece to be about..."
                    className="w-full bg-gray-950 border-2 border-gray-700 p-4 text-white placeholder-gray-600 focus:border-cyan-400 focus:outline-none h-20 resize-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2" style={{ color: '#0088CC' }}>
                    Style & Aesthetic
                  </label>
                  <p className="text-xs text-gray-400 mb-3">
                    Realism? Abstract? Geometric? Neo-expressionist? Minimalist? Mixed media?
                  </p>
                  <textarea
                    name="style"
                    value={formData.style}
                    onChange={handleChange}
                    placeholder="How should it look and feel?"
                    className="w-full bg-gray-950 border-2 border-gray-700 p-4 text-white placeholder-gray-600 focus:border-cyan-400 focus:outline-none h-20 resize-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2" style={{ color: '#0088CC' }}>
                    Mood & Energy
                  </label>
                  <p className="text-xs text-gray-400 mb-3">
                    Bold? Serene? Chaotic? Powerful? Dreamy? Dark? Vibrant?
                  </p>
                  <input
                    type="text"
                    name="mood"
                    value={formData.mood}
                    onChange={handleChange}
                    placeholder="e.g., Bold and powerful, Serene and contemplative..."
                    className="w-full bg-gray-950 border-2 border-gray-700 p-4 text-white placeholder-gray-600 focus:border-cyan-400 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2" style={{ color: '#0088CC' }}>
                    Colors you LOVE
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Bright yellows, teals, golds, deep blues..."
                    className="w-full bg-gray-950 border-2 border-gray-700 p-4 text-white placeholder-gray-600 focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2" style={{ color: '#0088CC' }}>
                    Colors you DON'T want
                  </label>
                  <input
                    type="text"
                    placeholder="Colors to avoid..."
                    className="w-full bg-gray-950 border-2 border-gray-700 p-4 text-white placeholder-gray-600 focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2" style={{ color: '#0088CC' }}>
                    Do you prefer a vibrant sky or neutral/darker sky?
                  </label>
                  <input
                    type="text"
                    placeholder="If applicable to your piece..."
                    className="w-full bg-gray-950 border-2 border-gray-700 p-4 text-white placeholder-gray-600 focus:border-cyan-400 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Lyrics, Quotes, Poetry */}
            <div className="border-t border-gray-700 pt-8">
              <h3 className="text-lg font-bold mb-6" style={{ fontFamily: 'Bebas Neue', color: '#0088CC', letterSpacing: '0.05em' }}>
                Words & Meaning
              </h3>

              <div>
                <label className="block text-sm font-bold mb-2">Song lyrics, quotes, or poetry?</label>
                <p className="text-xs text-gray-400 mb-3">
                  Want specific lyrics on the piece? A quote? A poem? Or would you like us to choose based on a few song recommendations?
                </p>
                <textarea
                  name="inspiration"
                  value={formData.inspiration}
                  onChange={handleChange}
                  placeholder="Paste lyrics, quotes, or give us 3 songs to choose from..."
                  className="w-full bg-gray-950 border-2 border-gray-700 p-4 text-white placeholder-gray-600 focus:border-cyan-400 focus:outline-none h-20 resize-none"
                />
              </div>
            </div>

            {/* References & Details */}
            <div className="border-t border-gray-700 pt-8">
              <h3 className="text-lg font-bold mb-6" style={{ fontFamily: 'Bebas Neue', color: '#0088CC', letterSpacing: '0.05em' }}>
                References & Details
              </h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold mb-2">Visual references & inspiration</label>
                  <p className="text-xs text-gray-400 mb-3">
                    Links to artists, images, art styles, mood boards...
                  </p>
                  <textarea
                    name="references"
                    value={formData.references}
                    onChange={handleChange}
                    placeholder="Paste links or describe what inspires you..."
                    className="w-full bg-gray-950 border-2 border-gray-700 p-4 text-white placeholder-gray-600 focus:border-cyan-400 focus:outline-none h-20 resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">Any other details you'd like to see?</label>
                  <p className="text-xs text-gray-400 mb-3">
                    Anything we haven't covered. Details to weave in. Ideas. Anything.
                  </p>
                  <textarea
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleChange}
                    placeholder="Anything else we should know?"
                    className="w-full bg-gray-950 border-2 border-gray-700 p-4 text-white placeholder-gray-600 focus:border-cyan-400 focus:outline-none h-20 resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="border-t border-gray-700 pt-8">
              <h3 className="text-lg font-bold mb-6" style={{ fontFamily: 'Bebas Neue', color: '#FFD700' }}>
                Your Contact Information
              </h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full bg-gray-950 border-2 border-gray-700 p-3 text-white placeholder-gray-600 focus:border-cyan-400 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-950 border-2 border-gray-700 p-3 text-white placeholder-gray-600 focus:border-cyan-400 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Phone (optional)</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-gray-950 border-2 border-gray-700 p-3 text-white placeholder-gray-600 focus:border-cyan-400 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Hard Rules */}
            <div className="bg-red-900 bg-opacity-20 border-2 border-red-600 p-6">
              <h4 className="font-bold mb-3" style={{ color: '#FF6B6B' }}>
                Important Restrictions
              </h4>
              <p className="text-sm text-gray-300 mb-2">
                ❌ <strong>No portraits</strong> — We don't create realistic depictions of real people or faces.
              </p>
              <p className="text-sm text-gray-300">
                ✅ Characters, anime, animals, flowers, abstract concepts, and other subjects are fair game.
              </p>
            </div>

            {/* Timeline */}
            <div className="bg-gray-950 border-2 border-gray-700 p-6">
              <p className="text-sm mb-2">
                <strong style={{ color: '#FFFF00' }}>Timeline:</strong> 4–6 weeks from approval to finished piece
              </p>
              <p className="text-xs text-gray-400">
                We'll confirm your concept within 48 hours. Once approved, the creation clock starts.
              </p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-4 font-bold text-black transition-all duration-200"
              style={{
                fontFamily: 'Bebas Neue',
                backgroundColor: '#FFFF00',
                letterSpacing: '0.05em',
                fontSize: '1.125rem'
              }}
              onMouseOver={(e) => e.target.style.opacity = '0.9'}
              onMouseOut={(e) => e.target.style.opacity = '1'}
            >
              Submit Your Vision
            </button>

            <p className="text-xs text-gray-500 text-center">
              We'll review your intake and reach out within 48 hours to confirm details and timeline.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
