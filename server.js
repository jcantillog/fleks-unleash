const unleash = require('unleash-server');

unleash
  .start({
    db: {
      ssl: false,
      host: 'localhost',
      port: 5432,
      database: 'unleash',
      user: 'postgres',
      password: 'password',
    },
    server: {
      port: 4242,
    },
  })
  .then(unleash => {
    console.log(
      `Unleash started on http://localhost:${unleash.app.get('port')}`,
    );
  });