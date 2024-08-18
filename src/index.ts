import express from 'express';
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const port = process.env.PORT || 8080;

app.get('/status', (req, res) => {
   const status = {
      'Status': 'Running',
   };

   res.send(status);

});

app.listen(port, () => {
   console.log("Server listening on PORT:", port);
});
