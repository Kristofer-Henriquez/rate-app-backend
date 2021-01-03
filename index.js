const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const reviews = [
  { id: 1, text: 'stuff1'},
  { id: 2, text: 'stuff2'},
  { id: 3, text: 'stuff3'},
];

app.listen(port, () => console.log(`listening on port ${port}...`));

app.get('/api/reviews', (req, res) => {
  res.send(reviews);
});

// may not be needed
app.get('/api/reviews/:id', (req, res) => {
  const review = reviews.find(r => r.id === parseInt(req.params.id));
  if (!review) res.status(404).send('the review does not exist');
  res.send(review);
});

app.post('/api/reviews', (req, res) => {
  const review = {
    id: 
    text:
  }
});