# Apps for UKL SMK Telkom 2024 - Cloud Dev Expertise

## HOW TO

### Install this packages:
```bash
sudo yum install -y yum-utils
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
sudo yum install -y git nodejs docker
sudo systemctl start docker
```

### Clone this repository:
```bash
git clone https://github.com/adinur21/app-perpus-next.git

cd app-perpus-next/ # MAKE SURE YOU GET IN THIS DIRECTORY!

touch .env.local
nano .env.local

#fill with this :
NEXT_PUBLIC_API_URI = "XXXXXXXXXXXXXXXXXXXXXXX" # replace the X with AWS invoke URL API Gateway
API_URI = "XXXXXXXXXXXXXXXXXXXXX" # replace the X with AWS invoke URL API Gateway
```

### Create image docker container and RUN it:
```bash
sudo docker build -t ukl/perpus:1.0.0 .
sudo docker run -d -p 80:3000 ukl/perpus:1.0.0
```
