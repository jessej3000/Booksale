import calculator from '../handlers/calculator';
import { Router } from 'express';

const router = Router({
  strict: true,
  caseSensitive: true
});

router.post('/books', (req, res) => {
  try {
    const param = req.body
    console.log(JSON.stringify(req.body))
    const value = calculator(param);
    console.log(JSON.stringify(value))
    res.send(value);
  } catch (err) {
    res.status(400).send(err);
  }
});

export default router;