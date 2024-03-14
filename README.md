# App Perpus UKL

## Penggunaan

### Install package-package ini:
```bash
sudo yum install -y yum-utils
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
sudo yum install -y nodejs docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
sudo systemctl start docker
```

### Clone repository ini kemudian jalankan:
```bash
touch .env.local
nano .env.local

#Isi file .env.local :
NEXT_PUBLIC_API_URI = "XXXXXXXXXXXXXXXXXXXXXXX" # ganti placeholder X menjadi invoke URL api gateway
API_URI = "XXXXXXXXXXXXXXXXXXXXX" # ganti placeholder X menjadi invoke URL api gateway
```

### Buat image container docker dan jalankan:
```bash
docker build -t ukl/perpus:1.0.0 .
docker run -d -p 80:3000 ukl/perpus:1.0.0
```