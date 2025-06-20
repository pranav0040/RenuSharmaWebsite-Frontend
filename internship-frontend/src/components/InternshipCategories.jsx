import React, { useEffect, useState } from 'react';
import axios from 'axios';

const InternshipCategories = () => {
  const [categories, setCategories] = useState([]);
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/api/internship-categories.json')
      .then(res => {
        setCategories(res.data.categories || []);
        setCards(res.data.cards || []);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load internship categories.");
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-12 px-6 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        ONE STEP TO <span className="text-blue-600">VOLUNTEERING</span>
      </h2>
      <p className="max-w-3xl mx-auto text-black mb-6 text-sm md:text-base">
        Launch your career with our prestigious internship program. Contribute
        to cutting-edge projects in healthcare and education while developing
        invaluable professional skills under expert guidance.
      </p>

      {loading && <p className="text-blue-500 mt-4">Loading...</p>}
      {error && <p className="text-red-500 mt-4">{error}</p>}

      {/* Category Buttons */}
      {!loading && (
        <div className="flex flex-wrap justify-center gap-5 mb-8">
          {categories.map((cat, index) => (
            <button
              key={index}
              className="px-7 py-2 bg-white rounded-md shadow-md text-black font-semibold text-sm hover:shadow-lg transition"
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Cards for image*/}
      <div className="flex flex-wrap justify-center gap-4">
        {!loading && cards.map((card, index) => (
          <img
            key={index}
            src={card.src}
            alt={card.alt}
            className="w-32 md:w-40 rounded-xl shadow-md hover:scale-105 transition-transform duration-200"
          />
        ))}
      </div>
    </section>
  );
};

export default InternshipCategories;
