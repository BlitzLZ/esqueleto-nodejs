from node:18-alpine

WORKDIR /app

COPY . /app/

RUN npm ci --quiet

RUN npm run build

CMD ["node", "/app/build/app.js"]