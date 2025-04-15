
#!/bin/bash
sudo apt update -y
sudo apt install -y nodejs npm git
git clone https://github.com/prabhgill02/TaskManagerApp.git /home/ubuntu/app
cd /home/ubuntu/app/TaskManagerApp/backend
npm install
nohup node server.js > app.log 2>&1 &
