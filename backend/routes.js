const express = require('express');
const router = express.Router();
const db = require('./db');

router.get('/tasks', (req, res) => {
  db.all('SELECT * FROM tasks', (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

router.post('/tasks', (req, res) => {
  const { title } = req.body;
  db.run('INSERT INTO tasks (title, completed) VALUES (?, ?)', [title, 0], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID, title, completed: 0 });
  });
});

router.put('/tasks/:id', (req, res) => {
  const { id } = req.params;
  db.run('UPDATE tasks SET completed = 1 WHERE id = ?', [id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true });
  });
});

router.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM tasks WHERE id = ?', [id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true });
  });
});

module.exports = router;
