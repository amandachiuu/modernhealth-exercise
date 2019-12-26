# modernhealth-exercise

Amanda Chiu - amanda.chiu@nyu.edu

**Run by** opening two terminals,
`cd client && yarn install && yarn start`
`cd node-api-postgres && yarn install && node index.js`

Please note: if `/programs` page (under Core Pillars) only shows two programs, then program data was not fetched and loaded into Redux from the Heroku Postgres store (please check that the NodeJS backend in node-api-postgres/ is running!)

I've had fun with the exercise and learned from it :-) 
Look forward to our conversation about it!

With more time, I would put more efforts into styling and error checking (links like /programs/Mindfulness (capital M don't work)).

Folder overview:

`client/`

- hosted on localhost:3000
- React, Redux

`node-api-postgres/`

- hosted on localhost:8080
- ExpressJS api, Postgres datastore on Heroku (only for Programs)