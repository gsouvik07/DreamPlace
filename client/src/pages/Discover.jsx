import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaStar, FaSearch } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";

const Discover = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchDestinations();
  }, []);

  const fetchDestinations = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/post/get-all-post`
      );
      setDestinations(response.data.posts);
    } catch (error) {
      console.error("Error fetching destinations:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredDestinations = destinations.filter(destination =>
    destination.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    destination.hotelLocation?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-slate-900 flex items-center justify-center">
        <div className="text-gray-600 dark:text-gray-400">Loading destinations...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover Amazing Destinations
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-100">
            Explore the world's most beautiful places and create unforgettable memories
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search destinations, hotels, or locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((destination) => (
            <div
              key={destination._id}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={destination.images[0]}
                  alt={destination.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  ${destination.price}
                </div>
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-lg text-sm">
                  <FaMapMarkerAlt className="inline mr-1" />
                  {destination.hotelLocation || "Location"}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {destination.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {destination.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-yellow-500">
                    <FaStar />
                    <span className="ml-1 text-sm font-semibold">4.5</span>
                    <span className="ml-1 text-xs text-gray-500 dark:text-gray-400">(120 reviews)</span>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    destination.isAvailable 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                  }`}>
                    {destination.isAvailable ? 'Available' : 'Unavailable'}
                  </span>
                </div>
                
                <Link
                  to={`/product/${destination.slug}`}
                  className="block w-full bg-primary-600 hover:bg-primary-700 text-white text-center py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {filteredDestinations.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 dark:text-gray-600 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              No destinations found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your search terms or browse all destinations
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Discover; 