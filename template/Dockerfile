FROM node:16.13.2

WORKDIR /usr/src/app/

COPY . .

RUN chmod +x ./start.sh

EXPOSE 3000

CMD [ "bash", "start.sh" ]