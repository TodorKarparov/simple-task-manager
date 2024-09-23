# Use Ubuntu as base image with amd64 platform
FROM --platform=linux/amd64 ubuntu:latest
# FROM ubuntu:latest

# Install dependencies
RUN apt-get update && apt-get install -y \
    curl \
    git \
    vim \
    build-essential \
    sudo \
    passwd \
    nano \
    iputils-ping \
    && rm -rf /var/lib/apt/lists/*

RUN echo "ubuntu:pass" | chpasswd

USER ubuntu

# Install NVM
RUN curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash

RUN bash -c 'source /home/ubuntu/.nvm/nvm.sh && nvm install v20.13.1 && /home/ubuntu/.nvm/versions/node/v20.13.1/bin/npm install -g pnpm@9.1.4'
RUN bash -c 'source /home/ubuntu/.bashrc'

ENV SHELL /bin/bash
