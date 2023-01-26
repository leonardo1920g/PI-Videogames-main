const server = require('./src/app.js'); //llama el server de app
const { conn } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => { //aqui se hace la sincronizacion de la BDD
  server.listen(3001, () => {  // correr el puerto en el puerto 3001
    console.log('%s listening at 3001'); // eslint-disable-line no-console  //llama el puerto del servidor, se crea la app
  });
});
