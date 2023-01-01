# build environment
FROM 958130917597.dkr.ecr.ap-southeast-1.amazonaws.com/node:14.21.1-alpine3.11 as build
LABEL stage=builder

ARG REACT_APP_MODE
ENV REACT_APP_MODE=$REACT_APP_MODE

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY yarn.lock ./
RUN env
RUN echo $REACT_APP_MODE
RUN yarn install --frozen-lockfile --silent
COPY . ./
RUN yarn build
RUN ls

# production environment
## Use Nginx-unprivileged image
FROM 958130917597.dkr.ecr.ap-southeast-1.amazonaws.com/nginx:1.22.1-alpine
COPY --from=build /app/dist /usr/share/nginx/html
RUN ls /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
