import mongoose from 'mongoose';

const gameSchema = mongoose.Schema({
  user: String,
  score: {
    type: Number,
    default: 0
  } 
  ,
  date: {
    type: String,
    default: Date.now()
  }
});

export default mongoose.model('Game', gameSchema);
