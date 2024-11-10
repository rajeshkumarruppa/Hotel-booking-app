import React from "react";
import Discover from "./Discover";
import Services from "./Services";
import Footer from "./Footer";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {
  setCheckIn,
  setCheckOut,
  incrementRooms,
  decrementRooms,
} from "../Redux/BookingSlice";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const bookingData = useSelector((state) => state.booking.data);
  console.log(bookingData);
  return (
    <>
      <div className="bg-[#ececec] mb-10  border mx-4 md:mx-16 xl:mx-24 rounded-md  mt-10 relative">
        {/* Container - Responsive Flex */}
        <div className="flex flex-col lg:flex-row lg:justify-between">
          {/* Left Section */}
          <div className="p-4 sm:p-6 md:pl-8 lg:pl-16 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
            <h1 className="text-2xl lg:text-4xl font-bold">Work from Ladakh</h1>
            <p className="text-xs sm:text-sm lg:text-lg mt-2 mb-4">
              India's first true digital tourism ecosystem
            </p>
            <div className="flex space-x-4 text-lg lg:text-2xl">
              <FaFacebook className="cursor-pointer hover:text-blue-600" />
              <FaInstagram className="cursor-pointer hover:text-pink-500" />
            </div>
          </div>

          {/* Right Section (Image) */}
          <div className="w-full lg:w-1/2">
            <img
              src="https://th.bing.com/th/id/OIP.2ZlGDvOuWKKQLAAURFs3FwAAAA?w=406&h=404&rs=1&pid=ImgDetMain"
              alt="Ladakh"
              className="object-cover w-full h-48 sm:h-64 md:h-80 lg:h-full"
            />
          </div>
        </div>

        {/* Booking Section */}
        <div className=" bg-white absolute bottom-[-32px] left-1/2 transform -translate-x-1/2 w-[95%] flex-col md:flex-row sm:w-[85%] md:w-[80%] lg:w-[60%] px-4 py-4 rounded-lg shadow-md flex items-center justify-between space-x-4">
          {/* Check-In Date */}
          <div className="flex flex-col items-center md:items-start w-1/3">
            <label className="text-gray-500 text-xs sm:text-sm mb-1">
              CHECK-IN
            </label>
            <input
              onClick={(e) => {
                dispatch(setCheckIn(e.target.value));
                console.log(e.target.value);
              }}
              type="date"
              className="border p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Check-Out Date */}
          <div className="flex flex-col items-center md:items-start w-1/3">
            <label className="text-gray-500 text-xs sm:text-sm mb-1">
              CHECK-OUT
            </label>
            <input
              onClick={(e) => {
                dispatch(setCheckOut(e.target.value));
                console.log(e.target.value);
              }}
              type="date"
              className="border p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Room Selection */}
          <div className="flex flex-col items-center md:items-start w-1/3">
            <label className="text-gray-500 text-xs sm:text-sm mb-1">
              ROOMS
            </label>
            <div className="flex items-center space-x-2">
              <button
                className="rounded-full h-6 w-6 border flex items-center justify-center hover:bg-gray-200"
                onClick={(e) => dispatch(incrementRooms(e.target.value))}
              >
                +
              </button>
              <span>{bookingData.rooms}</span>
              <button
                onClick={(e) => dispatch(decrementRooms(e.target.value))}
                className="rounded-full h-6 w-6 border flex items-center justify-center hover:bg-gray-200"
              >
                -
              </button>
            </div>
          </div>

          {/* Book Button */}
          <button
            onClick={() => navigate("/bookingpage")}
            className="bg-[#246c9c] px-8 py-2 rounded-lg text-white hover:bg-blue-500 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          >
            Book
          </button>
        </div>
      </div>
      <Discover/>
      <Services/>
    </>
  );
};

export default Home;
