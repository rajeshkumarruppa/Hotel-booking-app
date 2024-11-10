import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  completeOrder,
  incrementRooms,
  decrementRooms,
  setName,
  setEmail,
  setPhone,
  setAdults,
  setChildren,
  setCheckIn,
  setCheckOut,
  updateNoOfDays,
  updateRoomPrice,
  updateTotalPrice,
} from "../Redux/BookingSlice";

const BookingPage = () => {
  const dispatch = useDispatch();
  const bookingData = useSelector((state) => state.booking.data);
  const Data = useSelector((state) => state.booking);
  console.log(bookingData);
  const isOrderComplete = useSelector((state) => state.booking.isOrderComplete);

  const date1 = new Date(bookingData.checkIn); // First date
  const date2 = new Date(bookingData.checkOut); // Second date

  // Calculate the difference in milliseconds
  const differenceInMs = date2 - date1;

  // Convert milliseconds to days
  const differenceInDays = differenceInMs / (1000 * 60 * 60 * 24);

  console.log(`Difference in days: ${differenceInDays}`);
  const totalPriceOfBooking = Number(
    differenceInDays * (Data.roomPrice * bookingData.rooms)
  );
  console.log(totalPriceOfBooking);
  console.log(typeof differenceInDays);
  const handlePayment = () => {
    dispatch(completeOrder());
  };

  if (isOrderComplete) {
    return (
      <div className="p-6 md:p-12 lg:p-16 bg-gray-100 flex flex-col items-center">
        <div className="bg-white rounded-md shadow-md p-8 md:p-12 lg:p-16 w-full max-w-3xl">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-bold">
                {bookingData.name}
              </h2>
              <p className="text-gray-600">{bookingData.phone}</p>
              <p className="text-gray-600">{bookingData.email}</p>
              <p className="text-gray-600">
                {bookingData.adults} Adults and {bookingData.children} Children
              </p>
            </div>
            <div className="flex items-center mt-4 md:mt-0">
              <div className="bg-green-100 rounded-full p-3 flex items-center justify-center">
                <svg
                  className="text-green-500 w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex flex-col justify-center items-center pl-3 mt-4">
                <p className="text-lg md:text-xl font-semibold text-green-600 ">
                  Order Complete
                </p>
                <p className="text-center md:text-left text-gray-500 mb-6">
                  Have questions?{" "}
                  <a href="#" className="text-blue-600 underline">
                    Contact us
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 rounded-md shadow-inner p-4 flex flex-col md:flex-row justify-between">
            <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
              <label className="text-gray-500 text-sm">CHECK-IN</label>
              <p className="text-gray-800 font-semibold">
                {bookingData.checkIn}
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
              <label className="text-gray-500 text-sm">CHECK-OUT</label>
              <p className="text-gray-800 font-semibold">
                {bookingData.checkOut}
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
              <label className="text-gray-500 text-sm">ROOMS</label>
              <p className="text-gray-800 font-semibold">{bookingData.rooms}</p>
            </div>
            <div className="text-center md:text-right">
              <button className="bg-blue-600 text-white rounded-md py-3 px-6 mt-6 w-full text-center hover:bg-blue-700 transition-colors">
                Payed ₹{bookingData.totalPrice}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-12 lg:p-16 bg-gray-100 flex flex-col items-center">
      <div className="bg-white rounded-md shadow-md p-8 md:p-12 lg:p-16 w-full max-w-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            placeholder="Enter user name"
            type="text"
            onChange={(e) => dispatch(setName(e.target.value))}
            className="border rounded-md p-3 w-full"
          />
          <input
            placeholder="Enter Your Email"
            type="email"
            onChange={(e) => dispatch(setEmail(e.target.value))}
            className="border rounded-md p-3 w-full"
          />
          <input
            placeholder="Enter your mobile number"
            type="number"
            onChange={(e) => dispatch(setPhone(e.target.value))}
            className="border rounded-md p-3 w-full"
          />
          <div className="flex space-x-4">
            <select
              className="border rounded-md p-3 w-full"
              onChange={(e) => dispatch(setAdults(e.target.value))}
            >
              <option value-={1}>1 Adult</option>
              <option value={2}>2 Adults</option>
            </select>
            <select
              onChange={(e) => dispatch(setChildren(e.target.value))}
              className="border rounded-md p-3 w-full"
            >
              <option value={0}>0 Children</option>
              <option value={1}>1 Child</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div>
            <label className="text-gray-500 text-sm mb-1">CHECK-IN</label>
            <input
              type="date"
              value={bookingData.checkIn}
              onChange={(e) => dispatch(setCheckIn(e.target.value))}
              className="border rounded-md p-2 w-full"
            />
          </div>
          <div>
            <label className="text-gray-500 text-sm mb-1">CHECK-OUT</label>
            <input
              value={bookingData.checkOut}
              type="date"
              onChange={(e) => {
                dispatch(setCheckOut(e.target.value));
              }}
              className="border rounded-md p-2 w-full"
            />
          </div>
          <div className="flex flex-col items-center md:items-start">
            <label className="text-gray-500 text-sm mb-1">ROOMS</label>
            <div className="flex space-x-2">
              <button
                className="border rounded-md p-2 w-8"
                onClick={() => {
                  dispatch(decrementRooms());
                  dispatch(updateTotalPrice(totalPriceOfBooking));
                }}
                value={bookingData.rooms}
              >
                -
              </button>
              <span className="p-2">{bookingData.rooms}</span>
              <button
                className="border rounded-md p-2 w-8"
                onClick={() => {
                  dispatch(incrementRooms());
                  dispatch(updateTotalPrice(totalPriceOfBooking));
                  dispatch(updateNoOfDays(differenceInDays));
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>

        <button
          onClick={handlePayment}
          className="bg-blue-600 text-white rounded-md py-3 px-6 mt-6 w-full text-center hover:bg-blue-700 transition-colors"
        >
          Pay ₹{bookingData.totalPrice}
        </button>
      </div>
    </div>
  );
};

export default BookingPage;
