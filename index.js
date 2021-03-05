require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const db = require('./queries');
var cors = require('cors');


app.use(cors());

app.use(express.json());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);


// Professor Routes
app.get('/api/professors', db.getProfessors);
app.get('/api/professors/:id', db.getProfessorById);
app.post('/api/professors', db.createProfessor);
app.put('/api/professors/:id', db.updateProfessor);
app.delete('/api/professors/:id', db.deleteProfessor);

// Reviews Routes
app.get('/api/reviews', db.getReviews);
app.get('/api/reviews/:id', db.getReviewById);
app.post('/api/reviews', db.createReview);
app.put('/api/reviews/:id', db.updateReview);
app.delete('/api/reviews/:id', db.deleteReview);

app.use(express.static('dist'));
app.listen(port, () => console.log(`listening on port ${port}...`));
