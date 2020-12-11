# Dev Env
## dev server
```bash
npm install
npm start
```
## scss to css: open a new terminal 
```bash
yarn run sass
```
# Deployment
## Build image
```bash
docker build -f Dockerfile-prod -t [imageName] .
```
## Save image to tar file
```bash
docker save -o [tar file path name] [imageName]
```
## SCP image to server, then reload there
```bash
docker load -i [tar file path name]
```
## Remove old image, stop current running container, run new image 
```bash
docker run -td --net=host -p 3003:3003 [imageName]
```
## Deploy to live example
```bash
./deploy-live.sh werewolf-first v.0.7 v.0.6
```