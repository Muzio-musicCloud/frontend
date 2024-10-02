docker build . -t muzio-frontend
docker rm -f muzio-frontend
docker run --name=muzio-frontend --restart=always --network=my-network -d muzio-frontend