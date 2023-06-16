const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
require('dotenv').config();
const mongoose = require('mongoose');
const Count = require('./models/Count');

app.use(cors()); // Prevents CORS error
process.env.MONGO_URL

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open');
});

// If the connection throws an error
mongoose.connection.on('error', function (err) {
  console.log('Mongoose default connection error');
});

/*
* Find the count, increse if there is not create one.
 */
app.get('/count', function (req, res) {
  // Ends request for favicon without counting
  if (req.url === '/favicon.ico') {
    res.end();
  }

  Count.findOne({ id: 'prod' })
    .then((count) => {
      if (count) {
        console.log(count);
        count.totalCount += 1;
        count.save();
        res.status(200).send('Success');
      } else {
        const newCount = new Count({ id: 'prod', totalCount: 1 });
        newCount.save();
        res.status(200).send('Success');
      }
    })
    .then(() => {
      console.log('Counts saved');
    })
    .catch((error) => {
      console.error('Error:', error);
    })
})

/**
 * Counts so far
 */
app.get('/so-far', function (req, res) {
  Count.findOne({ id: 'prod' })
    .then((count) => {
      if (count) {
        res.send({ count: count.totalCount })
      } else {
        res.send({ count: 'error' })
      }
    })
})

/*
* Deletes the counts
*/
app.get('/restart', function (req, res) {
  Count.findOneAndDelete({ id: 'prod' })
    .then((count) => {
      if (count) {
        res.status(200).send('counts deleted');
      } else {
        res.send({ count: 'error' })
      }
    })
})

app.listen(5001, () => {
  console.log("Server running on port 5001");
})
