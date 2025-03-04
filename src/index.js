"use strict";
import 'dotenv/config';
import cors from 'cors';
import express from 'express';

const app = express();
app.use(cors());
app.use(express.static('public'))

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.listen(3000, () => {
  console.log(`Application listening on port: ${process.env.PORT}`)
});

console.log('Application running!');