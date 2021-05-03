FROM node:latest as base

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install -g npm@7.6.0
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY ../.. .

EXPOSE 13000

# npm run docker-dev will start app with nodemon that listen for code changes
CMD [ "npm", "run", "docker-dev"]

#docker run -p 13000:13000 talar1997/resource-manager-api