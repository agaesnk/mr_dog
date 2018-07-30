const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const placeSchema = new Schema({
  name: { 
    type: String, 
    required: true 
  },
  type:{ 
    type: String, 
    enum: ['bar', 'accomodation','store', 'beach'] 
  },
  description: { 
    type: String, 
    required: true 
  },
  location: { 
    type: String, 
    required: true 
  },
  imgUrl: { 
    type: String, 
    default: 'images/dog-default.jpg' 
  }
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const Place = mongoose.model('Place', placeSchema);

module.exports = Place;