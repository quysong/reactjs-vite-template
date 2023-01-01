FROM node:14.20.1-alpine3.16 as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY yarn.lock ./
RUN env
RUN yarn install --frozen-lockfile --silent
COPY . ./
RUN yarn build

# Deployment step / image
# -------------------------------------------------- #

FROM nginx:1.22.1-alpine
COPY --from=build /app/dist /usr/share/nginx/html
RUN ls /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


## docker build -t retail-portal . --no-cache
## docker run -it --name "retail-portal" -p 3030:80 retail-portal
## Go http://localhost:3030/
