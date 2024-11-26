import express from 'express';
import postsRoute from './routes/posts.js'
const app = express();

app.use('/posts', postsRoute);

export default app;