// src/features/bookingSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';



const BookingSlice = createSlice({
  name: 'booking',
  initialState: {
    data: {
      name: '',
      email: '',
      phone: '',
      adults: 1,
      children: 0,
      checkIn: '',
      checkOut: '',
      rooms: 1,
      totalPrice:12430 ,
      noOfDays:1,
    },
   
    roomPrice:1776,
    status: 'idle',
    error: null,
    isOrderComplete: false,  // New state for order completion
  },
  reducers: {
    incrementRooms: (state) => {
      state.data.rooms += 1;
    },
    decrementRooms: (state) => {
      if (state.data.rooms > 1) state.data.rooms -= 1;
    },
    updateRoomPrice(state, action) {
        state.roomPrice = action.payload;
    },
    updateTotalPrice(state, action) {
        state.data.totalPrice = action.payload;
    },
    updateNoOfDays(state, action) {
        state.data.noOfDays = action.payload;
    },

    completeOrder: (state) => {  // New action to mark order as complete
      state.isOrderComplete = true;
    },
    setCheckIn: (state,action) => {
        state.data.checkIn = action.payload;
    },
    setCheckOut: (state,action) => {
        state.data.checkOut = action.payload;
    },
    setAdults: (state, action) => {
        state.data.adults = action.payload;
    },
    setChildren: (state, action) => {
        state.data.children = action.payload;
    },
    setName: (state, action) => {
        state.data.name = action.payload;
    },
    setEmail: (state, action) => {
        state.data.email = action.payload;
    },
    setPhone: (state, action) => {
        state.data.phone = action.payload;
    }
}
 
});

export const {updateTotalPrice,updateNoOfDays,updateRoomPrice, incrementRooms, decrementRooms,setChildren, completeOrder,setAdults,setCheckIn,setCheckOut,setEmail,setName,setPhone } = BookingSlice.actions;
export default BookingSlice.reducer;
