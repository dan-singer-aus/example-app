"use strict";
import express from 'express';

const app = express();
app.use(express.static('public'))

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.listen(3000, () => {
  console.log('Application running!');
});
