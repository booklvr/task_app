import path from 'path';
import 'dotenv/config';
import express from 'express';

import webpack from 'webpack';
import config from '../../webpack.config.js';


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

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Example app listenning on port ${PORT}`)
})
