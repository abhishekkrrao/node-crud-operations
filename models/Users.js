import mongoose from 'mongoose';
const User = new mongoose.Schema({ name: { type: String }, email: { type: String }, password: { type: String }, token: { type: String } });
const user = mongoose.model('User', User);
export default user;