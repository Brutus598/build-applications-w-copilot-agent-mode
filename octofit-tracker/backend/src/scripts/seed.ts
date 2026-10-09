import mongoose from 'mongoose';
import User from '../models/User.js';
import Team from '../models/Team.js';
import Activity from '../models/Activity.js';
import Leaderboard from '../models/Leaderboard.js';
import Workout from '../models/Workout.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);
    console.log('Connected to octofit_db');

    // Clear existing data
    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    // Create teams
    const teams = await Team.insertMany([
      { name: 'Thunder Octolings', totalPoints: 0 },
      { name: 'Mighty Squids', totalPoints: 0 },
      { name: 'Lightning Sharks', totalPoints: 0 },
    ]);

    // Create users
    const users = await User.insertMany([
      { name: 'Alice Johnson', email: 'alice@mergington.edu', team: teams[0]._id, totalPoints: 850 },
      { name: 'Bob Smith', email: 'bob@mergington.edu', team: teams[0]._id, totalPoints: 720 },
      { name: 'Charlie Brown', email: 'charlie@mergington.edu', team: teams[1]._id, totalPoints: 910 },
      { name: 'Diana Prince', email: 'diana@mergington.edu', team: teams[1]._id, totalPoints: 680 },
      { name: 'Ethan Hunt', email: 'ethan@mergington.edu', team: teams[2]._id, totalPoints: 540 },
      { name: 'Fiona Green', email: 'fiona@mergington.edu', team: teams[2]._id, totalPoints: 790 },
    ]);

    // Update team members
    await Team.findByIdAndUpdate(teams[0]._id, { members: [users[0]._id, users[1]._id] });
    await Team.findByIdAndUpdate(teams[1]._id, { members: [users[2]._id, users[3]._id] });
    await Team.findByIdAndUpdate(teams[2]._id, { members: [users[4]._id, users[5]._id] });

    // Create activities
    await Activity.insertMany([
      { userId: users[0]._id, activityType: 'running', duration: 30, distance: 5, calories: 320, date: new Date('2025-01-15') },
      { userId: users[0]._id, activityType: 'strength', duration: 45, distance: 0, calories: 250, date: new Date('2025-01-17') },
      { userId: users[1]._id, activityType: 'walking', duration: 60, distance: 4, calories: 180, date: new Date('2025-01-16') },
      { userId: users[2]._id, activityType: 'cycling', duration: 40, distance: 15, calories: 400, date: new Date('2025-01-15') },
      { userId: users[2]._id, activityType: 'running', duration: 25, distance: 4, calories: 280, date: new Date('2025-01-18') },
      { userId: users[3]._id, activityType: 'swimming', duration: 50, distance: 2, calories: 350, date: new Date('2025-01-16') },
      { userId: users[4]._id, activityType: 'strength', duration: 60, distance: 0, calories: 300, date: new Date('2025-01-17') },
      { userId: users[5]._id, activityType: 'running', duration: 35, distance: 6, calories: 360, date: new Date('2025-01-18') },
    ]);

    // Create leaderboard entries
    await Leaderboard.insertMany([
      { userId: users[0]._id, points: 850, rank: 2 },
      { userId: users[1]._id, points: 720, rank: 4 },
      { userId: users[2]._id, points: 910, rank: 1 },
      { userId: users[3]._id, points: 680, rank: 5 },
      { userId: users[4]._id, points: 540, rank: 6 },
      { userId: users[5]._id, points: 790, rank: 3 },
    ]);

    // Create workouts
    await Workout.insertMany([
      { userId: users[0]._id, description: 'Morning jog around the track', type: 'cardio', duration: 30, difficulty: 'easy' },
      { userId: users[0]._id, description: 'Upper body strength training', type: 'strength', duration: 45, difficulty: 'medium' },
      { userId: users[1]._id, description: 'Power walk in the park', type: 'cardio', duration: 60, difficulty: 'easy' },
      { userId: users[2]._id, description: 'Bike ride to the beach', type: 'cardio', duration: 40, difficulty: 'medium' },
      { userId: users[3]._id, description: 'Swimming laps', type: 'cardio', duration: 50, difficulty: 'hard' },
      { userId: users[4]._id, description: 'Full body strength workout', type: 'strength', duration: 60, difficulty: 'hard' },
      { userId: users[5]._id, description: 'Interval running training', type: 'cardio', duration: 35, difficulty: 'medium' },
      { userId: users[5]._id, description: 'Yoga and stretching', type: 'flexibility', duration: 30, difficulty: 'easy' },
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
