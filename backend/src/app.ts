import express from 'express';
import calcRouter from './router/request'
var cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3300;

app.use(cors());
app.use(express.json());

app.use('/calculate', calcRouter);
// app.post('/calculate', (req, res) => {
//   res.send(req.body);
// })

app.get('/calculate/:name/:lastname', (req, res) => {
  res.send(req.params);
})

app.listen(PORT, () => console.log(`server is listening port ${PORT}`));