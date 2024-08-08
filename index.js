const express = require('express');

const app = express();
app.use(express.json());

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log("Server listening on PORT:", port);
});

app.get('/status', (request, response) => {
   const status = {
      'Status': 'Running'
   };

   response.send(status);
});
