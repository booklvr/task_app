import mongoose from 'mongoose';

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
}

const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  }
})

const Task = mongoose.model('Task', taskSchema);

export { connectDb };

export default Task;
