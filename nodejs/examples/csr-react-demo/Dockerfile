FROM agiletechvn/nodejs as builder


# use t/nginx to serve static file
FROM agiletechvn/tengine

COPY --from=builder /usr/src/app/build /var/www/html
