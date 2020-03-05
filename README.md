# Run with docker

## Build image

```
cd server-nhac
docker build -t marahub-music .
```

## Run the image

```
docker run -p 4444:4444 -d marahub-music
```