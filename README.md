SIC Search
==========

Proof of concept on building a more intelligent Standard Industrial Classification (SIC) search service. 

Install dependencies

    npm i

Start Elasticsearch

    docker-compose up -d

Run in dev mode to auto restart after source changes

    npm run start:dev

Format the code according to [prettier](https://prettier.io) rules.

    npm run fmt

### Environment variables

If you are running on a Mac and use [direnv](https://direnv.net/) to manage project level environment variables then use the `.envrc-default` template.

### Endpoints

Search: [http://localhost:3000/search](http://localhost:3000/search)

Healthcheck: [http://localhost:3000/healthcheck](http://localhost:3000/healthcheck)
