sudo yum update -y
sudo yum install git -y
sudo yum install docker -y

git clone https://github.com/Den15UrsaMajor/sdc_products_api.git

# Installs docker compose
sudo curl -L https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m) /usr/local/bin/docker-compose
# sudo mv docker-compose-$(uname -s)-$(uname -m) /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
docker-compose version

sudo service docker start
sudo usermod -a -G docker ec2-user

