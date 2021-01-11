// const Pool = require('pg').Pool;
const { Pool } = require('pg');
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'professors',
  password: 'password',
  port: 5432,
});

// index
const getProfessors = (request, response) => {
  pool.query('SELECT * FROM professors ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

// show 
const getProfessorById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

// create
const createProfessor = (request, response) => {
  const { name, title, school, department } = request.body;

  pool.query('INSERT INTO users (name, title, school, department) VALUES ($1, $2, $3, $4)', [name, title, school, department], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(201).send(`User added with ID: ${result.insertId}`);
  });
};

// update 
const updateProfessor = (request, response) => {
  const id = parseInt(request.params.id);
  const { name, title, school, department } = request.body;

  pool.query(
    'UPDATE professors SET name = $1, title = $2, school = $3, department = $4 WHERE id = $5',
    [name, title, school, department, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`User modified with ID: ${id}`);
    }
  );
};

// delete 
const deleteProfessor = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('DELETE FROM professors WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`User deleted with ID: ${id}`);
  });
};

module.exports = {
  getProfessors,
  getProfessorById,
  createProfessor,
  updateProfessor,
  deleteProfessor,
};