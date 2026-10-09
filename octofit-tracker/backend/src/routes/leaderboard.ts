import { Router } from 'express';
import Leaderboard from '../models/Leaderboard.js';
import User from '../models/User.js';

const router = Router();

router.get('/', async (_req, res) => {
  try {
    const entries = await Leaderboard.find().populate('userId').sort('-points');
    res.json(entries);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});

router.post('/', async (req, res) => {
  try {
    const entry = new Leaderboard(req.body);
    await entry.save();
    res.status(201).json(entry);
  } catch (err) {
    res.status(400).json({ error: (err as Error).message });
  }
});

router.get('/top/:n', async (req, res) => {
  try {
    const n = parseInt(req.params.n, 10) || 10;
    const entries = await Leaderboard.find()
      .populate('userId')
      .sort('-points')
      .limit(n);
    res.json(entries);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});

export default router;
