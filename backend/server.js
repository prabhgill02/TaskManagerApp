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

// ----------------------------

const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const winston = require('winston');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Create a logs directory if not exists
const logDir = path.join(__dirname, 'logs');
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

// Create logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
    })
  ),
  transports: [
    new winston.transports.File({ filename: path.join(logDir, 'server.log') })
  ]
});

// Middleware to log incoming requests
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

app.use(cors());
app.use(express.json());
app.use('/api', routes);

// Start server
app.listen(PORT, '0.0.0.0', () => {
  logger.info(`Server running on http://0.0.0.0:${PORT}`);
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
