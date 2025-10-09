from node:22.20.0-alpine3.22

WORKDIR /home/app/
RUN apk add --no-cache curl

COPY package* .
RUN npm install
COPY index.js index.js

EXPOSE 8000

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 CMD curl -f http://localhost:8000/health || exit 1
CMD [ "npm","start" ]