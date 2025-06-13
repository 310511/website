export default function About() {
  const team = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Chief Medical Officer',
      description: 'With over 15 years of experience in orthopedic care, Dr. Johnson leads our medical team.',
      image: '/images/team-1.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Product Development',
      description: 'Specializing in innovative orthopedic solutions and product design.',
      image: '/images/team-2.jpg'
    },
    {
      name: 'Dr. Rajesh Patel',
      role: 'Senior Orthopedic Specialist',
      description: 'Expert in surgical procedures and patient care.',
      image: '/images/team-3.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-blue-500 to-blue-700">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">About Cooter</h1>
            <p className="text-xl">Dedicated to enhancing lives with innovative orthopedic solutions.</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 mb-8">
              At Cooter, we are committed to providing high-quality orthopedic solutions that improve the quality of life for our patients. Our mission is to combine cutting-edge technology with compassionate care to deliver the best possible outcomes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                <p className="text-gray-600">To be the leading provider of innovative orthopedic solutions worldwide.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-xl font-semibold mb-2">Our Values</h3>
                <p className="text-gray-600">Quality, innovation, and patient-centered care drive everything we do.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold mb-2">Our Promise</h3>
                <p className="text-gray-600">To provide exceptional care and support throughout your recovery journey.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-64 bg-gray-200">
                  {/* Placeholder for team member image */}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <p className="text-xl">Products</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <p className="text-xl">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10k+</div>
              <p className="text-xl">Happy Patients</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 