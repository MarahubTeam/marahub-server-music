# Run with docker

## Docker composer

```
docker-compose up -d --build
```

## For development on localhost

1. Server

```
cd server-nhac
npm i
nodemon index.js
```

@note:

When client side run the command `npm run build` or `npm run watch`, it will build client code to `server-nhac/dist`.

If you run Docker on server, Docker already copied entire `server-nhac` folder to `/usr/src/app` on first time so you won't see any changes on client. That is the reason that we need to run `nodemon index.js` to see changes from client.

2. Client

```
cd server-music
npm i
npm run watch
```
