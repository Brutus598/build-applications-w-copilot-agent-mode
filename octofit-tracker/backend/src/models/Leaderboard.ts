import mongoose from 'mongoose';

const leaderboardSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  points: { type: Number, default: 0 },
  rank: { type: Number, default: 0 },
});

export default mongoose.model('Leaderboard', leaderboardSchema);
