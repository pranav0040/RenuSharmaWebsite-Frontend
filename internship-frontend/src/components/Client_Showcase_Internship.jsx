import React from 'react';
import all_logos from '../assets/all_logos.png';

export default function ClientShowcase() {
  return (
    <section className="bg-white py-10 px-4 text-center">
      <h2 className="text-4xl font-semibold text-black mb-1 max-w-2xl mx-auto">
        We are happy to work with
      </h2>
      <p className="text-4xl font-semibold text-black mb-6">
        incredible clients
      </p>
      <p className="text-sm text-gray-800 mb-8 max-w-md mx-auto">
        Fortune 500 companies and renowned global brands place their trust in our products, solutions, and bespoke software development services.
      </p>

      <div className="w-full flex justify-center items-center">
        <img
          src={all_logos}
          alt="All client logos"
          className="w-full max-w-[600px] h-auto object-contain"
        />
      </div>
    </section>
  );
}
