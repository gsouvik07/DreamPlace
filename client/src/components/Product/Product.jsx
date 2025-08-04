import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  FaWifi,
  FaBriefcase,
  FaSwimmingPool,
  FaCar,
  FaStar,
  FaShoppingCart,
  FaHeart,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import axios from "axios";
import RelatedProduct from "./RelatedProduct";
import Spinner from "../Spinner";
import { useCart } from "../../context/Cart";
import { toast } from "react-toastify";
import { useAuth } from "../../context/UserContext";
import { useBook } from "../../context/Booking";

const Product = () => {
  const { slug } = useParams();
  const [postDetails, setPostDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [auth] = useAuth();
  const [booking, setBooking] = useBook();

  const handleCheckIn = () => {
    console.log("Check-in clicked", postDetails);
    if (!auth?.token) {
      toast.error("Authentication required to proceed!");
      return navigate("/login");
    }
    if (!postDetails?.isAvailable) {
      toast.error("This item is not available for booking");
      return;
    }
    navigate("/payment", {
      state: {
        price: postDetails?.price,
        product: postDetails?.title,
        postId: postDetails?._id,
      },
    });
  };

  console.log("This is postId", postDetails?._id);
  console.log("This is product categoryID", postDetails?.category._id);

  useEffect(() => {
    if (slug) getPostBySlug();
  }, [slug]);

  const getPostBySlug = async (e) => {
    try {
      console.log("Fetching post with slug:", slug);
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/post/get-post/${slug}`
      );
      const product = res.data.product;
      console.log("Fetched product:", product);
      setPostDetails(product);
      getRelatedPost(product?._id, product?.category._id);
    } catch (error) {
      console.error("Error fetching post details:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const getRelatedPost = async (pid, cid) => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/post/related-post/${pid}/${cid}`
      );
      setRelatedProducts(res.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToCart = () => {
    console.log("Add to cart clicked", postDetails);
    if (postDetails?.isAvailable) {
      addToCart(postDetails);
      toast.success("Added to cart successfully!");
    } else {
      toast.error("This item is not available");
    }
  };

  if (loading) {
    return (
      <div className="p-8">
        <Spinner />
      </div>
    );
  }

  if (!postDetails) {
    return <Spinner />;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Images Section */}
          <div className="lg:w-1/2">
            <div className="space-y-4">
              {postDetails.images?.length > 0 && (
                <>
                  <img
                    src={postDetails.images[0]}
                    alt="Main Image"
                    className="w-full h-96 lg:h-[500px] object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
                  />
                  {postDetails.images.length > 1 && (
                    <div className="grid grid-cols-2 gap-4">
                      {postDetails.images.slice(1, 3).map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt={`Additional Image ${idx + 1}`}
                          className="h-48 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                        />
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Details Section */}
          <div className="lg:w-1/2">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 lg:p-8">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                {postDetails.title}
              </h1>
              
              <div className="flex items-center space-x-2 text-yellow-500 mb-4">
                <FaStar />
                <span className="text-xl font-semibold">4.5</span>
                <span className="text-gray-500 dark:text-gray-400">(1200 Reviews)</span>
              </div>
              
              <p className="flex items-center text-gray-600 dark:text-gray-400 mb-6">
                <MdLocationOn className="text-xl mr-2" />
                {postDetails.hotelLocation || "Location unavailable"}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  className={`flex-1 px-6 py-4 font-semibold rounded-lg shadow-lg transition-all duration-200 ${
                    postDetails.isAvailable
                      ? "bg-primary-600 text-white hover:bg-primary-700 transform hover:scale-105"
                      : "bg-gray-300 dark:bg-slate-600 text-gray-500 dark:text-slate-400 cursor-not-allowed"
                  }`}
                  disabled={!postDetails.isAvailable}
                  onClick={handleCheckIn}
                >
                  Check-In Now
                </button>

                <button
                  className={`flex-1 px-6 py-4 font-semibold rounded-lg shadow-lg transition-all duration-200 flex items-center justify-center space-x-2 ${
                    postDetails.isAvailable
                      ? "bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-600 border border-gray-300 dark:border-slate-600"
                      : "bg-gray-300 dark:bg-slate-600 text-gray-500 dark:text-slate-400 cursor-not-allowed"
                  }`}
                  disabled={!postDetails.isAvailable}
                  onClick={handleAddToCart}
                >
                  <FaShoppingCart className="w-5 h-5" />
                  <span>Add to Cart</span>
                </button>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Overview</h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{postDetails.description}</p>
              </div>

              <div className="mb-8 p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
                <p className="text-lg font-bold text-primary-600 dark:text-primary-400">
                  Price Per Day:{" "}
                  <span className="text-2xl text-gray-800 dark:text-white">
                    {postDetails.price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </span>
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Nearby Areas */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Nearby Areas</h2>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 list-disc pl-5">
                    {postDetails?.nearArea?.flatMap((area, idx) =>
                      area
                        .split(",")
                        .map((subArea, subIdx) => (
                          <li key={`${idx}-${subIdx}`}>{subArea.trim()}</li>
                        ))
                    )}
                  </ul>
                </div>
                
                {/* Facilities */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                    Facilities
                  </h2>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 list-disc pl-5">
                    {postDetails?.facilities?.flatMap((facility, idx) =>
                      facility
                        .split(",")
                        .map((subFacility, subIdx) => (
                          <li key={`${idx}-${subIdx}`}>{subFacility.trim()}</li>
                        ))
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            You may also like
          </h2>
          <RelatedProduct relatedProducts={relatedProducts} />
        </div>
      </div>
    </div>
  );
};

export default Product;
