const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/html/index.html");
});

app.get('/sobre', (req, res) => {
    res.sendFile(__dirname + "/html/sobre.html");
  });

app.listen(8081, function(){console.log('Server is running on port 8081')}); 