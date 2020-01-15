# A simple, dockerized hello world Node ExpressJS app.

To see and run the undockerized version, run (requires node to be installed on your machine):
```bash
git checkout tags/v0.2
node index.js
```

To use the the dockerized version, run (requires docker to be installed, but doesn't require local node):

To execute, run: 

```bash
git checkout tags/v0.3
docker build -t my-hello-world .
docker run -p 3000:3000 my-hello-world
```

If your local port 3000 is already taken replace the 3000 before the '`:`' with another port.
After that, there will be two endpoints available for your browser (assuming port 3000):<br><br>
http://localhost:3000<br>
http://localhost:3000/api/items
