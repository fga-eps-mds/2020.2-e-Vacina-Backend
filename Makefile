.PHONY: up-build

up-build:
	docker-compose up --build

.PHONY: up

up:
	docker-compose up
	
.PHONY: down

down:
	docker-compose down -v
	sudo rm -r node_modules


.PHONY: test

test:
	npm install
	npm run test

