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

2. Client

```
cd server-music
npm i
npm run watch
```

@note:

When client side run the command `npm run build` or `npm run watch`, it will build client code to `server-nhac/dist`.
