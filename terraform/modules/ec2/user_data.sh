
#!/bin/bash
sudo apt update -y
sudo apt install -y nodejs npm git
git clone https://github.com/YOUR_USER/YOUR_REPO.git /home/ubuntu/app
cd /home/ubuntu/app/backend
npm install
nohup node server.js > app.log 2>&1 &
