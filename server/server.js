const express = require('express')
const mongoose = require('mongoose');

const cors = require('cors');
const postRouter = require('./routes/Posts');
const tagRouter = require('./routes/Tags');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.use('/api/posts', postRouter);
app.use('/api/tags', tagRouter);

mongoose.connect('mongodb+srv://shivamdurgude:11112222@cluster0.hny5grp.mongodb.net/blog');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
});