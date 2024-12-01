#!/bin/bash

CONTAINER_NAME="pocketbase-backend"

# Check if the container exists
if [ "$(docker ps -aq -f name=$CONTAINER_NAME)" ]; then
  # Check if the container is running
  if [ "$(docker ps -q -f name=$CONTAINER_NAME)" ]; then
    echo "Container $CONTAINER_NAME is already running."
  else
    echo "Starting existing container $CONTAINER_NAME."
    docker start $CONTAINER_NAME
  fi
else
  echo "Creating and starting new container $CONTAINER_NAME."
  docker run -d \
    --platform linux/amd64 \
    --name $CONTAINER_NAME \
    -v "$(pwd)"/data:/pb/pb_data \
    -p 8080:8080 \
    pocketbase-backend:latest
fi