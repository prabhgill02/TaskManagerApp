# Task Manager App (CI/CD Project)

This is a full-stack Task Manager web application designed and deployed as part of a DevOps group assignment. The project demonstrates an end-to-end CI/CD pipeline using GitHub Actions, Terraform, and AWS services.

## 🔧 Project Overview

- **Frontend**: HTML/CSS/JavaScript hosted on AWS S3
- **Backend**: Node.js + Express running on EC2
- **Database**: SQLite (local to EC2)
- **CI/CD**: GitHub Actions
- **IaC**: Terraform

## 🚀 Features

- Full CRUD operations for task management (Create, Read, Update, Delete)
- API endpoints served via Express.js
- Frontend automatically fetches and displays tasks
- Backend logging using Winston
- Logs streamed to AWS CloudWatch Logs

## 🛠️ Technologies

- Node.js / Express
- SQLite
- GitHub Actions
- Terraform (modular)
- AWS EC2, S3, IAM, CloudWatch

## 🗂️ Directory Structure

```
.
├── backend/                 # Node.js Express API
│   ├── routes.js           # API endpoints
│   ├── server.js           # Express app + Winston logging
│   └── db.js               # SQLite database setup
├── frontend/               # HTML/CSS/JS files
│   └── index.html
├── terraform/              # IaC using Terraform
│   ├── main/               # Root Terraform config
│   └── modules/            # VPC, EC2, S3 etc.
└── .github/workflows/      # GitHub Actions CI/CD pipelines
```

## 🧪 How to Run

### Locally (for testing)
1. `cd backend && npm install`
2. `node server.js`
3. Open `frontend/index.html` in your browser

### On AWS
- Run `terraform apply` to provision infra
- Push code to GitHub to trigger the GitHub Actions workflow

## ✅ API Endpoints

- `GET /api/tasks` - Get all tasks
- `POST /api/tasks` - Create a task
- `PUT /api/tasks/:id` - Mark task as complete
- `DELETE /api/tasks/:id` - Delete a task

## 🧩 CI/CD Workflow

- Lint & test code on push
- Deploy frontend to S3
- SSH into EC2 and deploy backend
- Stream logs to CloudWatch

## 📈 Monitoring & Logging

- `winston` logs to `backend/logs/server.log`
- CloudWatch Agent installed on EC2
- Logs sent to AWS CloudWatch Log Group: `task-manager-backend`

## 📄 License

MIT License

---
*This project was built for academic purposes as part of a DevOps course at Conestoga College.*
