.PHONY: generate-sic-code-file
generate-sic-code-file:
	cd data && node parse-codes.js

.PHONY: es-index
es-index:
	cd data && ./setup.sh

.PHONY: es-setup
es-setup: generate-sic-code-file es-index
	printf "\nBuild elasticsearch index!\n\n"

.PHONY: runserver
runserver:
	npm start

.PHONY: runserver-dev
runserver-dev:
	npm run start:dev

.PHONY: fmt
fmt:
	npm run fmt
