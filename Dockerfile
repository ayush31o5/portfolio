# Dockerfile

FROM node:18-slim

WORKDIR /app

COPY . .

RUN npm install --legacy-peer-deps
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
