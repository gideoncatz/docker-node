FROM node:10

COPY package.json .
RUN npm install
RUN npm install --save couchbase@3.0.0-beta.2
COPY . .
CMD ["node", "index.js"]
