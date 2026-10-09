import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
  totalPoints: { type: Number, default: 0 },
});

export default mongoose.model('User', userSchema);
