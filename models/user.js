import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: String
});



export default mongoose.model('User', userSchema);
