const app = require('./server/server.js');
require('./server/database/database');

app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`);
});