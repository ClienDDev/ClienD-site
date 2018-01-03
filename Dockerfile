FROM node:8.9.1-alpine

RUN npm i -g gulp

WORKDIR /app

COPY ./package.json .
RUN npm i
COPY . .

RUN gulp

COPY ./host.conf /etc/nginx/conf.d/default.conf

CMD /bin/true
