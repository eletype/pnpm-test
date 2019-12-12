# Run from root

pnpm i -r

# Run the node app from format dir

node app.js

# Run the serverless local from format dir (unzip format.zip in .serverless)

pnpx sls invoke local -f main

# Run the docker build from format dir

# fails to run

docker build -t my-nodejs-app .
