import path from 'path';
import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import webpack from 'webpack';
import config from '../../webpack.config.js';

//import models and routes
import task, { connectDb } from '../js/models/task';
import taskRoute from './routes/task';

const app = express()
const DIST_DIR = __dirname;
const HTML_FILE = path.join(DIST_DIR, 'index.html');
const compiler = webpack(config);

app.use(
    require("webpack-dev-middleware")(compiler, {
        noInfo: true,
        publicPath: config.output.publicPath
    })
);

app.use(require("webpack-hot-middleware")(compiler));

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

// app.use(express.json);
// ROUTES
app.use('/task', taskRoute);

const PORT = process.env.PORT || 3000;
const eraseDataBaseOnSync = true;

connectDb().then(async () => {
  if (eraseDataBaseOnSync) {
    await Promise.all([
      task.deleteMany({})
    ])
    createTask();
  }
  app.listen(PORT, () => {
    console.log(`Example app listenning on port ${PORT}`)
  })
})

const createTask = async () => {
  console.log('YOU ARE ADDING A TASK');
  const task1 = new task({
    task: 'learn to code',
    description: 'finish this website'
  })
  await task1.save();
}
