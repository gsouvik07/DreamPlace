import React from "react";
import { FaMapMarkerAlt, FaClock, FaUsers, FaStar } from "react-icons/fa";

const Activities = () => {
  const activities = [
    {
      id: 1,
      title: "City Heritage Walk",
      location: "Kolkata, India",
      duration: "3 hours",
      groupSize: "Max 15 people",
      price: "$25",
      rating: 4.8,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Explore the rich cultural heritage of Kolkata through its historic buildings, temples, and colonial architecture."
    },
    {
      id: 2,
      title: "River Cruise on Hooghly",
      location: "Kolkata, India",
      duration: "2 hours",
      groupSize: "Max 20 people",
      price: "$35",
      rating: 4.6,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Enjoy a scenic cruise along the Hooghly River while learning about the city's maritime history."
    },
    {
      id: 3,
      title: "Food Tour - Bengali Cuisine",
      location: "Kolkata, India",
      duration: "4 hours",
      groupSize: "Max 12 people",
      price: "$45",
      rating: 4.9,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Taste authentic Bengali dishes and street food while exploring local markets and restaurants."
    },
    {
      id: 4,
      title: "Art Gallery Tour",
      location: "Kolkata, India",
      duration: "2.5 hours",
      groupSize: "Max 10 people",
      price: "$30",
      rating: 4.7,
      reviews: 67,
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Visit renowned art galleries and discover the vibrant contemporary art scene of Kolkata."
    },
    {
      id: 5,
      title: "Sunset Photography Tour",
      location: "Kolkata, India",
      duration: "3 hours",
      groupSize: "Max 8 people",
      price: "$40",
      rating: 4.5,
      reviews: 94,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Capture stunning sunset views of Kolkata's iconic landmarks with professional photography guidance."
    },
    {
      id: 6,
      title: "Traditional Craft Workshop",
      location: "Kolkata, India",
      duration: "5 hours",
      groupSize: "Max 6 people",
      price: "$55",
      rating: 4.8,
      reviews: 78,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Learn traditional Bengali crafts like pottery, weaving, or painting from local artisans."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Exciting Activities & Experiences
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-100">
            Immerse yourself in local culture and create unforgettable memories
          </p>
        </div>
      </div>

      {/* Activities Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {activity.price}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {activity.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {activity.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <FaMapMarkerAlt className="mr-2 text-primary-600" />
                    <span className="text-sm">{activity.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <FaClock className="mr-2 text-primary-600" />
                    <span className="text-sm">{activity.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <FaUsers className="mr-2 text-primary-600" />
                    <span className="text-sm">{activity.groupSize}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-yellow-500">
                    <FaStar />
                    <span className="ml-1 text-sm font-semibold">{activity.rating}</span>
                    <span className="ml-1 text-xs text-gray-500 dark:text-gray-400">({activity.reviews} reviews)</span>
                  </div>
                </div>
                
                <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-100 dark:bg-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Ready for an Adventure?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Book your preferred activities and let our expert guides show you the best of Kolkata's culture, history, and traditions.
          </p>
          <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
            Contact Us for Custom Tours
          </button>
        </div>
      </div>
    </div>
  );
};

export default Activities; 