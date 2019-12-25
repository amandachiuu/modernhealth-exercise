const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;

const cors = require('cors');
const db = require('./queries')

app.use(cors());
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/programs', db.getPrograms)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})