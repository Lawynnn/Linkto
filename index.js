const app = require('./server/server.js');

app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`);
});
