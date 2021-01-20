const dotenv = require('dotenv')
const server = require('./src/server.js')
const { conn } = require('./src/db.js')

dotenv.config()

const PORT = process.env.PORT // || 3002

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(PORT, () => {
    console.log(`%s listening at ${PORT}`); // eslint-disable-line no-console
  });
});