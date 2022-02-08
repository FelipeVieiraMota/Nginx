#--------------------------------------------------------------------------------
# Run these commands on terminal to prepare the file run.sh to run on your machine
# Without chmod command it's impossible to run a script on linux.
#--------------------------------------------------------------------------------
# # 1 #     sudo chmod +x run.sh
# # 2 #     ./run.sh
#--------------------------------------------------------------------------------

# clean the terminal
clear

# Kill the container before start it.
docker kill nginx-server
docker rm $(docker ps -a -f status=exited -q)

# Build docker image from your Dockerfile
docker build --tag nginx-server:latest .

# Detached mode -> use -d
docker run --name nginx-server -d -p 8080:80 nginx-server:latest

# Undetached mode -> without -d
# docker run --name nginx-server -p 8080:80 nginx-server:latest