'use client';

import { useState } from 'react';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-8">
            <div className="text-2xl font-bold text-blue-600">Cooter</div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col space-y-4">
            <a
              href="/"
              className="text-lg font-semibold hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="/services"
              className="text-lg font-semibold hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a
              href="/gallery"
              className="text-lg font-semibold hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </a>
            <a
              href="/contact"
              className="text-lg font-semibold hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <a
              href="/about"
              className="text-lg font-semibold hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
} 