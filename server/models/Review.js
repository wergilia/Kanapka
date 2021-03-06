const mongoose = require('mongoose');
const Schema = mongoose.Schema

const reviewSchema = new Schema({
    author:{type:Schema.Types.ObjectId, ref:'User'},
    sandwich:{type:Schema.Types.ObjectId, ref:'Sandwich'},
    rating: {type: Number, min: 0, max: 5}

}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'         
    }
})


const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;