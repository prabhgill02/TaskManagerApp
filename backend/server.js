const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', routes);


// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

// Updated the code so that is accessible on all other interfaces as well

app.listen(3000, '0.0.0.0', () => {
  console.log('Server running on http://0.0.0.0:3000');
});

