from node:22.20.0-alpine3.22

WORKDIR /home/app/

COPY package* .
RUN npm install
COPY index.js index.js

EXPOSE 8000
CMD [ "npm","start" ]