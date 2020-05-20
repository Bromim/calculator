FROM "node:latest"

WORKDIR "/usr/app"

COPY ./package.json .

RUN npm install --loglevel error

COPY . .

CMD ["npm", "run", "start"]
