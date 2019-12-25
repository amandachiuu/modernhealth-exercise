// import pool from './config';
// const Pool = require('pg').Pool
// const pool = new Pool({
//   user: 'me',
//   host: 'localhost',
//   database: 'postgres',
//   port: 5432,
// })

require('dotenv').config()

const { Pool } = require('pg')
// const isProduction = process.env.NODE_ENV === 'production'
const isProduction = true;
const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`
console.log('Postgres data stored on Heroku at:\n', connectionString)

const pool = new Pool({
    connectionString: connectionString,
    ssl: isProduction,
})

const getPrograms = (request, response) => {
    pool.query('SELECT * FROM programs ORDER BY program_id', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

module.exports = {
    getPrograms
}