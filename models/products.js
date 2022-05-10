import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        minlength: 12
    },
    description: {
        type: String,
        trim: true,
        required: true,
        minlength: 100
    },
    price: {
        type: Number,
        trim: true,
        required: true,
        minlength: 32
    },
    category: {
        type: ObjectId,
        ref: "Category",
        required: true
    },
    stock: {
        type: Number
    },
    sold: {
        type: Number,
        default: 0
    },
    photo: {
        data: Buffer,
        contentType: String
    }
}, { timestamps: true })

const Product = mongoose.model('Product', productSchema);

module.exports = Product;