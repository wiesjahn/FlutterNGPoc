FROM nginx:alpine

COPY testapp/dist/testapp /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 443