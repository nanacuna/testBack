import dotenv from 'dotenv'
import server from './src/server.js';
import { conn } from './src/db.js';

dotenv.config()

const PORT = process.env.PORT // || 3002

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => 
    console.log(`listening at ${PORT}`) // eslint-disable-line no-console
  );
});