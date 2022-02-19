/* eslint-disable no-console */
import server from './server';
import mongooseConnection from './config/mongoose';

(async () => {
  try {
    await mongooseConnection();
  } catch (error) {
    console.log('mongooseConnection', error);
  }

  try {
    server.init();
  } catch (error) {
    console.log('expressServer', error);
  }
})();
