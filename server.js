require('dotenv').config();

const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

app.use(express.json());

app.post('/user', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = {name: req.body.name, password: hashedPassword };
    user.push(user);
    res.status(201).send();
  } catch {
    res.status(500).send();
  }
});

app.post('/user/login', async (req,res) => {
  const user = user.find(user => user.name = req.body.name);
  if (user == null) {
    return res.status(400).send('cannot find user');
  } 
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      res.send('Success');
    } else {
      res.send('not allowed');
    }
  } catch {
    res.status(500).send();
  }
});

app.listen(3000);