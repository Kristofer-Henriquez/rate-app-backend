
const { Pool } = require('pg');
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'professors',
  password: 'password',
  port: 5432,
});

// Professors
// index
const getProfessors = (request, response) => {
  pool.query("SELECT professors.*, AVG(reviews.rating) FROM professors FULL OUTER JOIN reviews ON professors.id = reviews.professors_id GROUP BY professors.id ORDER BY id ASC;", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

// show 
const getProfessorById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('SELECT * FROM professors WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    const professor = results.rows[0];
    pool.query('SELECT * FROM reviews WHERE professors_id = $1', [id], (error, results) => {
      if (error) {
        throw error;
      }
      professor.reviews = results.rows;
      response.status(200).json(professor);
    });
  });
};

// create
const createProfessor = (request, response) => {
  const { name, title, school, department } = request.body;

  pool.query('INSERT INTO professors (name, title, school, department) VALUES ($1, $2, $3, $4)', [name, title, school, department], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(201).send(`Professor added with ID: ${results.insertId}`);
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
      response.status(200).send(`Professor modified with ID: ${id}`);
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
    response.status(200).send(`Professor deleted with ID: ${id}`);
  });
};


// Reviews
// index
const getReviews = (request, response) => {
  pool.query('SELECT * FROM reviews ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

// show 
const getReviewById = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query('SELECT * FROM reviews WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    const review = results.rows[0];
    pool.query('SELECT * FROM professors WHERE professors.id = $1', [review.professors_id], (error, results) => {
      if (error) {
        throw error;
      }
      review.professor = results.rows[0];
      response.status(200).json(review);
    });
  });
};

// create
const createReview = (request, response) => {
  const { professors_id, rating, text } = request.body;

  pool.query('INSERT INTO reviews (professors_id, rating, text) VALUES ($1, $2, $3)', [professors_id, rating, text], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(201).send(`Review added with ID: ${results.insertId}`);
  });
};

// update 
const updateReview = (request, response) => {
  const id = parseInt(request.params.id);
  const { professors_id, rating, text } = request.body;

  pool.query(
    'UPDATE reviews SET professors_id = $1, rating = $2, text = $3 WHERE id = $4',
    [professors_id, rating, text, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Review modified with ID: ${id}`);
    }
  );
};

// delete 
const deleteReview = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('DELETE FROM reviews WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`Review deleted with ID: ${id}`);
  });
};

module.exports = {
  getProfessors,
  getProfessorById,
  createProfessor,
  updateProfessor,
  deleteProfessor,
  getReviews,
  getReviewById,
  createReview,
  updateReview,
  deleteReview,
  pool,
};