import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Hotels = () => {
  const [posts, setPosts] = useState([]);

  // Fetch all posts
  const getAllPosts = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/post/get-all-post`
      );
      setPosts(res.data.posts);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  // Image rotation logic
  const [imageIndexes, setImageIndexes] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndexes((prevIndexes) => {
        const newIndexes = { ...prevIndexes };
        posts.forEach((post) => {
          const currentIndex = newIndexes[post._id] || 0;
          newIndexes[post._id] = (currentIndex + 1) % post.images.length;
        });
        return newIndexes;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [posts]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-12 text-center">
        Popular Hotels
      </h2>
      <Carousel
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        className="py-4"
      >
        {posts.map((hotel) => (
          <div
            key={hotel._id}
            className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden mx-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="relative">
              <img
                src={hotel.images[imageIndexes[hotel._id] || 0]}
                alt={hotel.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                ${hotel.price}
              </div>
            </div>
            <div className="p-6">
              <Link
                to={`product/${hotel.slug}`}
                className="text-xl font-bold text-gray-800 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 cursor-pointer block mb-2"
              >
                {hotel.title}
              </Link>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                {hotel.hotelLocation}
              </p>
              <div className="flex items-center text-yellow-500 mb-3">
                <span className="text-sm font-semibold">4.5</span>
                <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">(120 reviews)</span>
              </div>
              <Link
                to={`product/${hotel.slug}`}
                className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Hotels;
