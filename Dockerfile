FROM node:22
WORKDIR /app

COPY . .
# RUN npm install

VOLUME [ "/app" ]

CMD ["/bin/bash"]
