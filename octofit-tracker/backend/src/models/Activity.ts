import mongoose from 'mongoose';

const activitySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  activityType: { type: String, enum: ['running', 'walking', 'strength', 'cycling', 'swimming'], required: true },
  duration: { type: Number, required: true }, // minutes
  distance: { type: Number, default: 0 }, // kilometers
  calories: { type: Number, default: 0 },
  date: { type: Date, default: Date.now },
});

export default mongoose.model('Activity', activitySchema);
