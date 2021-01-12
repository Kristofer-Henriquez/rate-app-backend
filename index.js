const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const db = require('./queries');


app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);



app.listen(port, () => console.log(`listening on port ${port}...`));

// Professor Routes
app.get('/professors', db.getProfessors);
app.get('/professors/:id', db.getProfessorById);
app.post('/professors', db.createProfessor);
app.put('/professors/:id', db.updateProfessor);
app.delete('/professors/:id', db.deleteProfessor);

// Reviews Routes
app.get('/reviews', db.getReviews);
app.get('/reviews/:id', db.getReviewById);
app.post('/reviews', db.createReview);
app.put('/reviews/:id', db.updateReview);
app.delete('/reviews/:id', db.deleteReview);


// // may not be needed
// app.get('/api/reviews/:id', (req, res) => {
//   const review = reviews.find(r => r.id === parseInt(req.params.id));
//   if (!review) res.status(404).send('the review does not exist');
//   res.send(review);
// });

// app.post('/api/reviews', (req, res) => {
//   const { error } = Joi.validate(req.body, schema);
//   if (error) {
//     res.status(400).send(error.detail[0].message);
//     return;
//   }

//   const review = {
//     text: req.body.text,
//     professor: req.body.professor,
//   };
//   reviews.push(review);
//   res.send(review);
// });

// app.put('/api/reviews/:id', (req, res) => {
//   const review = reviews.find(r => r.id === parseInt(req.params.id));
//   if (!review) res.status(404).send('the review does not exist');

//   const result = validateReview(req.body);

//   const schema = {
//     name: Joi.string().min3.required(),
//     text: req.body.text,
//     professor: req.body.professor,
//   }

//   const { error } = Joi.validate(req.body, schema);
//   if (error) {
//     res.status(400).send(error.detail[0].message);
//     return;
//   }

//   review.name = req.body.name;
//   res.send(review);
// });

// function validateReview(review) {
//   const schema = {
//     name: Joi.string().min3.required(),
//   };

//   return Joi.validate(review, schema);
// }

// app.delete('/api/reviews/:id', (req, res) => {
//   const review = reviews.find(r => r.id === parseInt(req.params.id));
//   if (!review) res.status(404).send('the review does not exist');

//   const index = reviews.indexOf(review);
//   reviews.splice(index, 1);

//   res.send(reviews);
// });