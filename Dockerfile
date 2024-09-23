FROM --platform=linux/amd64 debian:latest

ARG PB_VERSION=0.22.12

# Update and install required packages
RUN apt-get update && apt-get install -y \
    unzip \
    ca-certificates \
    curl && \
    rm -rf /var/lib/apt/lists/*

# Download and unzip PocketBase
RUN curl -Lo /tmp/pb.zip https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_amd64.zip && \
    unzip /tmp/pb.zip -d /pb/

# uncomment to copy the local pb_migrations dir into the image
# COPY ./pb_migrations /pb/pb_migrations

# uncomment to copy the local pb_hooks dir into the image
# COPY ./pb_hooks /pb/pb_hooks

EXPOSE 8080

# Start PocketBase
CMD ["/pb/pocketbase", "serve", "--http=0.0.0.0:8080"]