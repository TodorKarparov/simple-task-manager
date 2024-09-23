#!/bin/bash

docker buildx build --platform linux/amd64 -t pocketbase-backend:latest . --load