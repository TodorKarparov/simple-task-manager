#!/bin/bash

docker run -d \
  --platform linux/amd64 \
  --name pocketbase-backend \
  -v "$(pwd)"/data:/pb/pb_data \
  -p 8080:8080 \
  pocketbase-backend:latest