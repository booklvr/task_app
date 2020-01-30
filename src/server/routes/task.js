import { Router } from 'express';
import Task from '../../js/models/task';

const router = Router();

// Get all tasks

router.get('/', async (req, res) => {
  console.log();
  const tasks = await Task.find();
  res.send(tasks);
})

router.post('/', async (req, res) => {
  const task = await Task.create({
    task: req.body.task,
    description: req.body.description
  });
  return res.send(task);
})

export default router;
