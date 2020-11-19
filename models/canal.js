import mongoose from 'mongoose';

const canalSchema = mongoose.Schema({
  name: {
    type: String,
  unique: true,
required: true}
});

export default mongoose.model('Canal', canalSchema);
