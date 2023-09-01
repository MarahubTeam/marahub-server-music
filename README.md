# Development on localhost

1. Server

```
cd server
npm i
npm start
```

2. Client

```
cd client
npm i
npm start
```

Open http://localhost:4200 and happy coding!

# Deploy

1. Copy client build to `/var/www/music-server`

2. Copy Server code to `/path/to/music-server`

3. Run pm2 in server code `pm2 start index.js --name music-server`

4. Write nginx.conf content to `/etc/nginx/sites-available/music-server`

```
nano /etc/nginx/sites-available/music-server
```

Then paste nginx.conf content to new file

5. Create link to nginx site enables `ln -s /etc/nginx/sites-available/music-server /etc/nginx/sites-enabled/`

6. Restart nginx `service nginx restart`

7. Poin domain amnhac.marahub.com to server IP

8. Run Certbot to get SSL

```
sudo certbot --nginx -d amnhac.marahub.com
```