import React from 'react'
import { setCheckIn,setCheckOut } from '../Redux/BookingSlice'
const CheckOut = () => {
  return (
    <div>
       <div className="p-6 md:p-12 lg:p-16 bg-gray-100 flex flex-col items-center">
      <div className="bg-white rounded-md shadow-md p-8 md:p-12 lg:p-16 w-full max-w-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" value={bookingData.name} readOnly className="border rounded-md p-3 w-full" />
          <input type="email" value={bookingData.email} readOnly className="border rounded-md p-3 w-full" />
          <input type="tel" value={bookingData.phone} readOnly className="border rounded-md p-3 w-full" />
          <div className="flex space-x-4">
            <select value={`${bookingData.adults} Adult`} className="border rounded-md p-3 w-full">
              <option>1 Adult</option>
              <option>2 Adults</option>
            </select>
            <select value={`${bookingData.children} Children`} className="border rounded-md p-3 w-full">
              <option>0 Children</option>
              <option>1 Child</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div>
            <label className="text-gray-500 text-sm mb-1">CHECK-IN</label>
            <input type="date" value={bookingData.checkIn} readOnly className="border rounded-md p-2 w-full" />
          </div>
          <div>
            <label className="text-gray-500 text-sm mb-1">CHECK-OUT</label>
            <input type="date" value={bookingData.checkOut} readOnly className="border rounded-md p-2 w-full" />
          </div>
          <div className="flex flex-col items-center md:items-start">
            <label className="text-gray-500 text-sm mb-1">ROOMS</label>
            <div className="flex space-x-2">
              <button className="border rounded-md p-2 w-8" onClick={() => dispatch(decrementRooms())}>-</button>
              <span className="p-2">{bookingData.rooms}</span>
              <button className="border rounded-md p-2 w-8" onClick={() => dispatch(incrementRooms())}>+</button>
            </div>
          </div>
        </div>

        <button
          onClick={handlePayment}
          className="bg-blue-600 text-white rounded-md py-3 px-6 mt-6 w-full text-center hover:bg-blue-700 transition-colors"
        >
          Pay ₹{bookingData.price}
        </button>
      </div>
    </div>
    </div>
  )
}

export default CheckOut
