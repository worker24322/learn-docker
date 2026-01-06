const express = require('express');
const app = express();
console.log('Server started at', new Date().toISOString());
app.get('/', (req, res) => {
    console.log(new Date().toISOString());
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});