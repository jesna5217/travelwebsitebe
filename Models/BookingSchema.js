const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    fullName: { 
        type: String, 
        required: true 
    },
    phone: { 
        type: String, 
        required: true 
    },
    guestNo: { 
        type: Number, 
        required: true 
    },
    bookAt: { 
        type: String, 
        required: true 
    },
   
    userId: { 
        type: String, 
        required: true 
    },
  
    userEmail: { 
        type: String, 
        required: true 
    },
    tourName: { 
        type: String, 
        required: true 
    },
    price:{
        type:Number,
        required:true
    }
});

const bookings = mongoose.model('bookings', BookingSchema);

module.exports = bookings;
