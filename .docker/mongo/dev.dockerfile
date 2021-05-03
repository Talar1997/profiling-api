FROM mongo:latest

CMD ["mongod"]

#   - 27017: process
EXPOSE 27017
#   - 28017: http
EXPOSE 28017