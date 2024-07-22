## Server
Specify the path where the csv file should be saved in `./server/.env`.
Example:
```
CSV_SAVE_PATH=C:\temp\accounts.csv
```

Install dependencies by changing into the `./server` directory and running:
```
npm i
```
Then start the server like this (still in the `./server` directory):
```
npm run start:prod
```

## Plugin
Run in the `./plugin` directory:
```
npm i --force
npm run build
```
Then add it to chrome (google how to add a custom plugin) by selecting the `./plugin/dist` directory
