FROM node:8.11.2
run npm i npm@6

ENV HOST 0.0.0.0
ENV PORT 80

RUN mkdir -p /app
COPY . /app
WORKDIR /app
# Expose the app port
RUN npm install
RUN npm run build
EXPOSE 80

CMD ["npm", "start"]
