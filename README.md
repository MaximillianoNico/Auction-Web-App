# Online Auction System

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated by [Nx, a Smart, fast and extensible build system.](https://nx.dev)** ✨

## Application Purpose
We created an Auction Application that allows users to sell their products using the bidding method.

Currently we are using NX Monorepo with MERN Stack. by using monorepo, it will make easy to maintain multiple apps and also able to share component and libs to other apps.

## Stack We Used
- Next JS (React Framework)
- Express JS
- MongoDB
- Redis
- SocketIO

## Development server

### Client
Run `npx nx serve client` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

### Server
Run `npx nx serve api --watch` for a api dev server. Navigate to http://localhost:8080/app/health-check. The API will return status API

## Development Documentation
Here is the API Documentation which is include:
- Authentication
- Products
- Transactions
- Users
- Websocket (SocketIO)

API: [Postman Documentation](https://bettradsv01.postman.co/workspace/Jitera~882cf0e5-d6bf-4089-949e-78a039aec78d/collection/4055949-f97357e6-c4a6-45d5-a133-beda1167caef?action=share&creator=4055949)

## Applications Flow
### Bidding Product
here is the bidding flow

### Authentication
here is the auth flow for sign-in, sign-out and register

### Publishing Product

## Understand this workspace

Run `nx graph` to see a diagram of the dependencies of the projects.

## Remote caching

Run `npx nx connect-to-nx-cloud` to enable [remote caching](https://nx.app) and make CI faster.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.