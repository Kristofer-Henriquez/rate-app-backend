require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const db = require('./queries');
var cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

app.use(cors());

app.use(express.json());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// const users = [];

// let refreshTokens = [];

// app.get('/users', (req, res) => {
//   res.json(users);
// });

// app.post('/token', (req, res) => {
//   const refreshToken = req.body.token;
//   if (refreshToken == null) return res.sendStatus(401);
//   if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);
//   jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
//     if (err) return res.sendStatus(403);
//     const accessToken = generateAccessToken({ name: user.name });
//     res.json({ accessToken: accessToken });
//   });
// });

// app.post('/login', (req, res) => {
//   // Authenticate User

//   const username = req.body.username;
//   const user = { name: username };
//   const accessToken = generateAccessToken(user);
//   const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
//   refreshTokens.push(refreshToken);
//   res.json({ accessToken: accessToken, refreshToken: refreshToken });
// });

// function generateAccessToken(user) {
//   return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15s' });
// }

// app.delete('/logout', (req, res) => {
//   refreshTokens = refreshTokens.filter(token => token !== req.body.token);
//   res.sendStatus(204);
// });

// app.post('/users', async (req, res) => {
//   try {
//     const hashedPassword = await bcrypt.hash(req.body.password, 10);
//     const user = { email: req.body.email, password: hashedPassword, username: req.body.username };
//     users.push(user);
//     res.status(201).send();
//   } catch {
//     res.status(500).send();
//   }
// });

// app.post('/users/login', authenticateToken, (req, res) => {
// const user = users.find(user => user.name === req.body.name);
// if (user == null) {
//   return res.status(400).send('Cannot find user');
// }
// try {
//   if (await bcrypt.compare(req.body.password, user.password)) {
//     res.send('Success');
//   } else {
//     res.send('Not Allowed');
//   }
// } catch {
//   res.status(500).send();
// }

//   const username = req.body.username;
//   const user = { name: username };

//   const accessToken = generateAccessToken(user);
//   const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
//   refreshTokens.push(refreshToken);
//   res.json({ accessToken: accessToken, refreshToken: refreshToken });
// });

// function authenticateToken(req, res, next) {
//   const authHeader = req.header['authorization'];
//   const token = authHeader && authHeader.split(' ')[1];
//   if (token == null) return res.sendStatus(401);

//   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//     if (err) return res.sendStatus(403);
//     req.user = user;
//     next();
//   });
// }


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

app.listen(port, () => console.log(`listening on port ${port}...`));