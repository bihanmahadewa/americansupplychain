# American Supply Chain

> Forked from [@bihanmahadewa](https://github.com/bihanmahadewa/americansupplychain) who developed the idea and curated all this data!

This is a full-stack application in TypeScript for visualizing the American supply chain.

## Getting Started

This application runs in Docker.

In the root directory, run `docker compose build`, then `docker-compose up`.

## Services

The application is composed by two services, running in Docker. These are development containers, so they hot-reload on code changes.

### React

A React application lives under `/app`. It implements several best practices in React development I've picked up over the years, like the store, context providers, and prefetching.

It uses ESRI's ArcGIS SDK, to render a map and pin data.

### Express

An Express server lives under `/server`. It uses a singleton to read data from disk and return it to the client.
