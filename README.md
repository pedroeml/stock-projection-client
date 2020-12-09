
![Node.js CI](https://github.com/pedroeml/stock-projection-client/workflows/Node.js%20CI/badge.svg)
![GitHub Pages CI](https://github.com/pedroeml/stock-projection-client/workflows/GitHub%20Pages%20CI/badge.svg)

# Stock Projection Client

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start
```

Navigate to [`http://localhost:4200/`](http://localhost:4200/) or [`http://127.0.0.1:4200/`](http://127.0.0.1:4200/). The app will automatically reload if you change any of the source files.

## Build

```bash
# development
$ npm run build

# production
$ npm run build --prod

# production (GitHub Pages via docs folder)
$ npm run build --prod --output-path docs --base-href /stock-projection-client/
```

## Deploy

Deploy on GitHub Pages via angular-cli-ghpages

```bash
# production
$ ng deploy --base-href=/stock-projection-client/ --repo=https://github.com/<username>/<repositoryname>.git --name="Your Git Username" --email=your.mail@example.org

# or using deploy information stored in angular.json
$ npm run deploy
```

## Test

```bash
# unit tests
$ npm run test

# end-to-end
$ npm run e2e
```

## Serve on a Docker container with NGINX

```bash
# starting up
$ docker-compose up

# shutting down
$ docker-compose down
```

Open your browser on [`http://localhost/`](http://localhost/) or [`http://127.0.0.1/`](http://127.0.0.1/).
