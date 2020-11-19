import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
  nameTema: String,
  question: String,
  answer: String,
  variant: String,
  isAnswered:{
    type: Boolean,
    default: false
  } 
});

export default mongoose.model('Question', questionSchema);
