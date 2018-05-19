FROM node:carbon
RUN npm i yarn -g
ENV NODE_ENV=production
ENV HOST 0.0.0.0
ENV PORT 80

RUN mkdir -p /app
COPY . /app
WORKDIR /app
# Expose the app port
RUN yarn install
RUN yarn run build
EXPOSE 80

CMD ["npm", "start"]
