# run the backend
node backend/server.js

# serve the frontend
serve frontend

# 3-Tier Task Manager App

This project demonstrates a 3-tier application deployed on AWS with:

- **Frontend**: Static HTML hosted on S3
- **Backend**: Node.js app on EC2
- **Database**: SQLite bundled with backend

## 🛠 Technologies

- AWS (S3, EC2, VPC)
- Terraform (modular)
- GitHub Actions (CI/CD)

##  Deployment Overview

### CI/CD

- Frontend is deployed to S3 automatically on push.
- Backend is pulled and restarted on EC2 using SSH via GitHub Actions.

### Setup Secrets

In your GitHub repository, add these secrets:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `EC2_PUBLIC_IP`
- `EC2_SSH_KEY` (private key for SSH)

## 📦 Terraform Modules

- `modules/s3` – Sets up static site hosting
- `modules/ec2` – Launches and configures EC2
- `modules/security_group` – Opens ports for HTTP and SSH

##  Structure

```
terraform/
  ├── main/            # Root configs
  └── modules/
      ├── s3/
      ├── ec2/
      └── security_group/
.github/workflows/
  └── deploy.yml       # CI/CD pipeline
frontend/
  └── index.html       # Static UI
backend/
  └── server.js        # Node.js app
```

##  Next Steps

1. Initialize Terraform:
   ```bash
   terraform init
   terraform apply
   ```

2. Push code to GitHub and watch GitHub Actions deploy.

terraform plan -var-file="terraform.tfvars"
terraform apply -var-file="terraform.tfvars"

