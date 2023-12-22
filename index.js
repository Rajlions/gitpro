/*const express = require('express');
const app = express();
const port = 4000;

app.use(express.json());

app.post('/getCurrentDateAndTime', (req, res) => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });

  res.json({ response: formattedDate });
});

app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));*/

const express = require('express');
const app = express();
const port = 4000;

app.use(express.json());

app.post('/calculate', (req, res) => {
  const operand1 = parseFloat(req.body.operand1) || 3;
  const operand2 = parseFloat(req.body.operand2) || 2;
  const operator = req.body.operator || 'add';

  let result;

  switch (operator) {
    case 'add':
      result = operand1 + operand2;
      break;
    case 'subtract':
      result = operand1 - operand2;
      break;
    case 'multiply':
      result = operand1 * operand2;
      break;
    case 'divide':
      result = operand1 / operand2;
      break;
    default:
      res.status(400).json({ error: 'Invalid operator' });
      return;
  }

  res.json({ operand1, operand2, operator, result });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});




