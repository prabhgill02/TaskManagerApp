const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const db = require('./db');

const app = express();
app.use(bodyParser.json());
app.use('/', routes);

let createdTaskId;

describe('Task API Integration Tests', () => {
  test('POST /tasks - should create a new task', async () => {
    const res = await request(app)
      .post('/tasks')
      .send({ title: 'Test task' });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('id');
    expect(res.body.title).toBe('Test task');
    expect(res.body.completed).toBe(0);

    createdTaskId = res.body.id; // save the ID for next tests
  });

  test('GET /tasks - should return all tasks including the one just created', async () => {
    const res = await request(app).get('/tasks');

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);

    const task = res.body.find(t => t.id === createdTaskId);
    expect(task).toBeDefined();
    expect(task.title).toBe('Test task');
  });

  test('PUT /tasks/:id - should mark task as completed', async () => {
    const res = await request(app).put(`/tasks/${createdTaskId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ success: true });
  });

  test('DELETE /tasks/:id - should delete the task', async () => {
    const res = await request(app).delete(`/tasks/${createdTaskId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ success: true });
  });
});
