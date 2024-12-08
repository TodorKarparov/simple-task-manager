CONTAINER_NAME="pocketbase-backend"

build-image:
    docker buildx build --platform linux/amd64 -t pocketbase-backend:latest . --load

run-backend:
	bash ./backend/run_backend.sh

run-frontend:
	cd task-manager-fe && pnpm run dev