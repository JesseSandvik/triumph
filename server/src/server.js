const app = require('./app');

const runServer = (port) => {
    if (!port) throw new Error('A port for the server is required.');
    app.listen(port, () => {
        console.log(`:istening at http://localhost:${port}`);
        })
}

runServer(5000);