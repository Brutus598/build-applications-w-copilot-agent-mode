import mongoose from 'mongoose';

const workoutSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  description: { type: String, required: true },
  type: { type: String, enum: ['cardio', 'strength', 'flexibility', 'mixed'], required: true },
  duration: { type: Number, required: true }, // minutes
  difficulty: { type: String, enum: ['easy', 'medium', 'hard'], default: 'medium' },
  date: { type: Date, default: Date.now },
});

export default mongoose.model('Workout', workoutSchema);
