import server from './server';

try {
  server.init();
} catch (error) {
  // eslint-disable-next-line no-console
  console.log(error);
}
