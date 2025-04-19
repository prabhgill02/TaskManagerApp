// const express = require('express');
// const cors = require('cors');
// const routes = require('./routes');
// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use('/api', routes);

// app.listen(3000, '0.0.0.0', () => {
//   console.log('Server running on http://0.0.0.0:3000');
// });

// ------------------------------------------------------------------------------------------------------

const express = require('express');
const path = require('path');
const app = express();
const routes = require('./routes');

const PORT = 3000;

// Serve static frontend files
app.use(express.static(path.join(__dirname, '../frontend')));

// API routes
app.use('/api', routes);

// Fallback: serve index.html for any unmatched route (optional for SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
