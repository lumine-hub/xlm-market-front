#docker build -t xuluming/xlm-market-front-app:1.0 .

docker buildx build --platform linux/amd64,linux/arm64 -t xuluming/xlm-market-front-app:1.0 --push .
