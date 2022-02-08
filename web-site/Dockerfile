# https://hub.docker.com/_/nginx
# https://kbroman.org/github_tutorial/pages/init.html
# docker build .
# docker run --name nginx-server -d -p 8080:80 nginx
# Reach out the page locally -> http://localhost:8080
# if you need to delete all images from your computer use this command bellow:
# https://www.digitalocean.com/community/tutorials/how-to-remove-docker-images-containers-and-volumes
# docker rm $(docker ps -a -f status=exited -q)

# docker exec -it nginx-server 


FROM nginx:latest
# COPY command it doesn't working.
#COPY index.html /usr/share/nginx/html
ADD . /usr/share/nginx/html