export default function Services() {
  const services = [
    {
      title: 'Orthopedic Consultation',
      description: 'Expert consultation for all your orthopedic needs, including diagnosis and treatment planning.',
      icon: '👨‍⚕️'
    },
    {
      title: 'Custom Braces',
      description: 'Personalized orthopedic braces designed for your specific needs and comfort.',
      icon: '🦿'
    },
    {
      title: 'Physical Therapy',
      description: 'Professional physical therapy services to aid in your recovery and rehabilitation.',
      icon: '💪'
    },
    {
      title: 'Surgical Implants',
      description: 'High-quality surgical implants for various orthopedic procedures.',
      icon: '🔧'
    },
    {
      title: 'Mobility Aids',
      description: 'Wide range of mobility aids to support your daily activities.',
      icon: '🦼'
    },
    {
      title: 'Post-Surgery Care',
      description: 'Comprehensive post-surgery care and support for optimal recovery.',
      icon: '🏥'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Our Services</h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          We offer a comprehensive range of orthopedic services to help you on your journey to recovery and better mobility.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8">Contact us today to schedule a consultation or learn more about our services.</p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
} 