"use client";

import { useState } from "react";
import Link from "next/link";

const initialForm = {
  tier: "medium",
  nicknames: "",
  zodiac: "",
  spiritAnimal: "",
  favoriteCities: "",
  pets: "",
  favoriteFlowers: "",
  hobbies: "",
  collections: "",
  favoriteSport: "",
  subject: "",
  style: "",
  mood: "",
  colorsLove: "",
  colorsAvoid: "",
  skyPreference: "",
  lyrics: "",
  references: "",
  additionalNotes: "",
  fullName: "",
  email: "",
  phone: "",
};

export default function IntakePage() {
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, submittedAt: new Date().toISOString() }),
      });

      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full bg-gray-950 border-2 border-gray-700 p-3 text-white placeholder-gray-600 focus:border-cyan-400 focus:outline-none";
  const textareaClass = inputClass + " h-20 resize-none";
  const labelClass = "block text-sm font-semibold mb-2";
  const sectionHeading = (text, color = "#0088CC") => (
    <h3 className="text-lg font-bold mb-6" style={{ fontFamily: "var(--font-bebas)", color, letterSpacing: "0.05em" }}>
      {text}
    </h3>
  );

  if (submitted) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        <div className="max-w-lg text-center">
          <div className="bg-green-900/30 border-2 border-green-500 p-8">
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-bebas)", color: "#00DD00" }}>
              Commission Received
            </h2>
            <p className="text-gray-300 mb-6">
              We&rsquo;ll review your vision and reach out within 48 hours to confirm details.
            </p>
            <Link
              href="/"
              className="inline-block px-6 py-3 font-bold"
              style={{ fontFamily: "var(--font-bebas)", backgroundColor: "#FFFF00", color: "#000" }}
            >
              Back to StashHouse
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white py-12 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Nav */}
        <nav className="mb-12">
          <Link
            href="/"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            &larr; Back to StashHouse
          </Link>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <h1
            className="text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-bebas)", color: "#FFFF00", letterSpacing: "0.05em" }}
          >
            Commission Intake
          </h1>
          <p className="text-gray-300 text-lg">
            Welcome to StashHouse Gallery. Let&rsquo;s bring your vision to life.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Tier */}
          <div>
            <label
              className="block text-sm font-bold mb-4"
              style={{ color: "#FFFF00", fontFamily: "var(--font-bebas)", letterSpacing: "0.1em" }}
            >
              Your Tier
            </label>
            <select name="tier" value={formData.tier} onChange={handleChange} className={inputClass}>
              <option value="small">Small Tilt (8×10) — $100</option>
              <option value="medium">Medium Tilt (18×24) — $200</option>
              <option value="large">Large Tilt (24×36) — $500</option>
            </select>
          </div>

          {/* Personal Identity */}
          <div className="border-t border-gray-700 pt-8">
            {sectionHeading("Who You Are")}
            <div className="space-y-6">
              <div>
                <label className={labelClass}>Any nicknames that are special or close to your heart?</label>
                <input type="text" name="nicknames" value={formData.nicknames} onChange={handleChange} placeholder="e.g., 'The Builder', 'Seven', something meaningful..." className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Zodiac sign (if it matters to you)</label>
                <input type="text" name="zodiac" value={formData.zodiac} onChange={handleChange} placeholder="e.g., Aquarius, Leo, etc." className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Spirit animal? (if you have one)</label>
                <textarea name="spiritAnimal" value={formData.spiritAnimal} onChange={handleChange} placeholder="What is it and why?" className={inputClass + " h-16 resize-none"} />
              </div>
              <div>
                <label className={labelClass}>Cities or neighborhoods you love</label>
                <input type="text" name="favoriteCities" value={formData.favoriteCities} onChange={handleChange} placeholder="Places that represent you or inspire you..." className={inputClass} />
              </div>
            </div>
          </div>

          {/* Interests */}
          <div className="border-t border-gray-700 pt-8">
            {sectionHeading("Your Interests")}
            <div className="space-y-6">
              <div>
                <label className={labelClass}>Pets (names, breeds, markings, favorite toy)?</label>
                <textarea name="pets" value={formData.pets} onChange={handleChange} placeholder="Tell us about them—we might weave them in..." className={inputClass + " h-16 resize-none"} />
              </div>
              <div>
                <label className={labelClass}>Favorite flower(s)</label>
                <input type="text" name="favoriteFlowers" value={formData.favoriteFlowers} onChange={handleChange} placeholder="e.g., Sunflowers, roses, wildflowers..." className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Hobbies & passions</label>
                <input type="text" name="hobbies" value={formData.hobbies} onChange={handleChange} placeholder="What do you love doing?" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Are you a collector of anything?</label>
                <textarea name="collections" value={formData.collections} onChange={handleChange} placeholder="Sneakers? Comics? Records? Anything we can weave into the piece?" className={inputClass + " h-16 resize-none"} />
              </div>
              <div>
                <label className={labelClass}>Favorite sport or team?</label>
                <input type="text" name="favoriteSport" value={formData.favoriteSport} onChange={handleChange} placeholder="e.g., Basketball, Pittsburgh Pirates, etc." className={inputClass} />
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="border-t border-gray-700 pt-8">
            {sectionHeading("Your Vision", "#FFD700")}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold mb-2" style={{ color: "#0088CC" }}>
                  What&rsquo;s the subject or concept?
                </label>
                <p className="text-xs text-gray-400 mb-3">Character, animal, flowers, abstract, scene, cultural theme, your vision...</p>
                <textarea name="subject" value={formData.subject} onChange={handleChange} placeholder="Describe what you want the piece to be about..." className={textareaClass} required />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2" style={{ color: "#0088CC" }}>Style & Aesthetic</label>
                <p className="text-xs text-gray-400 mb-3">Realism? Abstract? Geometric? Neo-expressionist? Minimalist? Mixed media?</p>
                <textarea name="style" value={formData.style} onChange={handleChange} placeholder="How should it look and feel?" className={textareaClass} required />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2" style={{ color: "#0088CC" }}>Mood & Energy</label>
                <p className="text-xs text-gray-400 mb-3">Bold? Serene? Chaotic? Powerful? Dreamy? Dark? Vibrant?</p>
                <input type="text" name="mood" value={formData.mood} onChange={handleChange} placeholder="e.g., Bold and powerful, Serene and contemplative..." className={inputClass} required />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2" style={{ color: "#0088CC" }}>Colors you LOVE</label>
                <input type="text" name="colorsLove" value={formData.colorsLove} onChange={handleChange} placeholder="e.g., Bright yellows, teals, golds, deep blues..." className={inputClass} />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2" style={{ color: "#0088CC" }}>Colors you DON&rsquo;T want</label>
                <input type="text" name="colorsAvoid" value={formData.colorsAvoid} onChange={handleChange} placeholder="Colors to avoid..." className={inputClass} />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2" style={{ color: "#0088CC" }}>Do you prefer a vibrant sky or neutral/darker sky?</label>
                <input type="text" name="skyPreference" value={formData.skyPreference} onChange={handleChange} placeholder="If applicable to your piece..." className={inputClass} />
              </div>
            </div>
          </div>

          {/* Words & Meaning */}
          <div className="border-t border-gray-700 pt-8">
            {sectionHeading("Words & Meaning")}
            <div>
              <label className="block text-sm font-bold mb-2">Song lyrics, quotes, or poetry?</label>
              <p className="text-xs text-gray-400 mb-3">
                Want specific lyrics on the piece? A quote? A poem? Or would you like us to choose based on a few song recommendations?
              </p>
              <textarea name="lyrics" value={formData.lyrics} onChange={handleChange} placeholder="Paste lyrics, quotes, or give us 3 songs to choose from..." className={textareaClass} />
            </div>
          </div>

          {/* References */}
          <div className="border-t border-gray-700 pt-8">
            {sectionHeading("References & Details")}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold mb-2">Visual references & inspiration</label>
                <p className="text-xs text-gray-400 mb-3">Links to artists, images, art styles, mood boards...</p>
                <textarea name="references" value={formData.references} onChange={handleChange} placeholder="Paste links or describe what inspires you..." className={textareaClass} />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Any other details you&rsquo;d like to see?</label>
                <p className="text-xs text-gray-400 mb-3">Anything we haven&rsquo;t covered. Details to weave in. Ideas. Anything.</p>
                <textarea name="additionalNotes" value={formData.additionalNotes} onChange={handleChange} placeholder="Anything else we should know?" className={textareaClass} />
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="border-t border-gray-700 pt-8">
            {sectionHeading("Your Contact Information", "#FFD700")}
            <div className="space-y-6">
              <div>
                <label className={labelClass}>Full Name</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className={inputClass} required />
              </div>
              <div>
                <label className={labelClass}>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className={inputClass} required />
              </div>
              <div>
                <label className={labelClass}>Phone (optional)</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} />
              </div>
            </div>
          </div>

          {/* Hard Rules */}
          <div className="bg-red-900/20 border-2 border-red-600 p-6">
            <h4 className="font-bold mb-3" style={{ color: "#FF6B6B" }}>Important Restrictions</h4>
            <p className="text-sm text-gray-300 mb-2">
              <strong>No portraits</strong> — We don&rsquo;t create realistic depictions of real people or faces.
            </p>
            <p className="text-sm text-gray-300">
              Characters, anime, animals, flowers, abstract concepts, and other subjects are fair game.
            </p>
          </div>

          {/* Timeline */}
          <div className="bg-gray-950 border-2 border-gray-700 p-6">
            <p className="text-sm mb-2">
              <strong style={{ color: "#FFFF00" }}>Timeline:</strong> 4&ndash;6 weeks from approval to finished piece
            </p>
            <p className="text-xs text-gray-400">
              We&rsquo;ll confirm your concept within 48 hours. Once approved, the creation clock starts.
            </p>
          </div>

          {error && (
            <div className="bg-red-900/20 border border-red-600 p-4 text-sm text-red-300">
              {error}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full py-4 font-bold text-black transition-opacity duration-200 hover:opacity-90 disabled:opacity-50"
            style={{ fontFamily: "var(--font-bebas)", backgroundColor: "#FFFF00", letterSpacing: "0.05em", fontSize: "1.125rem" }}
          >
            {submitting ? "Submitting..." : "Submit Your Vision"}
          </button>

          <p className="text-xs text-gray-500 text-center">
            We&rsquo;ll review your intake and reach out within 48 hours to confirm details and timeline.
          </p>
        </form>
      </div>
    </div>
  );
}
