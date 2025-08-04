import React from "react";
import { FaUsers, FaGlobe, FaHeart, FaAward } from "react-icons/fa";

const About = () => {
  const stats = [
    { icon: FaUsers, number: "10,000+", label: "Happy Travelers" },
    { icon: FaGlobe, number: "50+", label: "Destinations" },
    { icon: FaHeart, number: "98%", label: "Satisfaction Rate" },
    { icon: FaAward, number: "15+", label: "Years Experience" }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      bio: "Passionate about creating unforgettable travel experiences."
    },
    {
      name: "Michael Chen",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      bio: "Ensuring every journey is seamless and memorable."
    },
    {
      name: "Priya Sharma",
      role: "Travel Curator",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      bio: "Crafting unique experiences that connect travelers with local culture."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About DreamPlace
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-100">
            We're passionate about making travel accessible, authentic, and unforgettable
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              At DreamPlace, we believe that travel has the power to transform lives. Our mission is to connect travelers with authentic experiences that go beyond the typical tourist path, creating meaningful connections with local cultures and communities.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Founded in 2009, we've been helping adventurers discover the world's most beautiful destinations while supporting local communities and promoting sustainable tourism practices.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Whether you're seeking a luxury getaway, a cultural immersion, or an adventure in the great outdoors, we're here to make your travel dreams a reality.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Travelers exploring"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white dark:bg-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="text-4xl text-primary-600" />
                </div>
                <div className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-12">
          Our Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-primary-100 dark:bg-primary-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaHeart className="text-2xl text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              Authenticity
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              We believe in authentic experiences that connect you with real local culture and traditions.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-primary-100 dark:bg-primary-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaGlobe className="text-2xl text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              Sustainability
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              We're committed to sustainable tourism that benefits local communities and preserves natural beauty.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-primary-100 dark:bg-primary-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaAward className="text-2xl text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              Excellence
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              We strive for excellence in every aspect of your journey, from planning to execution.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-100 dark:bg-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white dark:bg-slate-700 rounded-xl shadow-lg overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
          Ready to Start Your Journey?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Let us help you create memories that will last a lifetime. Start planning your next adventure with DreamPlace today.
        </p>
        <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
          Start Planning
        </button>
      </div>
    </div>
  );
};

export default About; 