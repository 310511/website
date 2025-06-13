'use client';

import { useState } from 'react';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'braces', name: 'Braces & Supports' },
    { id: 'mobility', name: 'Mobility Aids' },
    { id: 'facility', name: 'Our Facility' }
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'braces',
      title: 'Knee Brace',
      description: 'Advanced knee support for optimal recovery',
      image: '/images/gallery-1.jpg'
    },
    {
      id: 2,
      category: 'mobility',
      title: 'Walking Aid',
      description: 'Premium walking support system',
      image: '/images/gallery-2.jpg'
    },
    {
      id: 3,
      category: 'facility',
      title: 'Treatment Room',
      description: 'State-of-the-art treatment facility',
      image: '/images/gallery-3.jpg'
    },
    {
      id: 4,
      category: 'braces',
      title: 'Back Support',
      description: 'Ergonomic back support system',
      image: '/images/gallery-4.jpg'
    },
    {
      id: 5,
      category: 'mobility',
      title: 'Wheelchair',
      description: 'Modern mobility solution',
      image: '/images/gallery-5.jpg'
    },
    {
      id: 6,
      category: 'facility',
      title: 'Consultation Room',
      description: 'Comfortable consultation space',
      image: '/images/gallery-6.jpg'
    }
  ];

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Our Gallery</h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Explore our range of orthopedic products and state-of-the-art facilities.
        </p>

        {/* Category Filter */}
        <div className="flex justify-center space-x-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full transition ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64 bg-gray-200">
                {/* Placeholder for gallery image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Image Placeholder
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Want to See More?</h2>
          <p className="text-gray-600 mb-8">Visit our facility or contact us to learn more about our products and services.</p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
} 