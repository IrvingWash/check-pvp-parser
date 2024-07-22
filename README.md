## Server
### Usage
Specify the path where the csv file should be saved in `./server/.env`.
Example:
```
CSV_SAVE_PATH=c:\temp\accounts.csv
```

Start the server by changing into the `./server` directory and running:
```
npm run start:prod
```

## Plugin
Run in the `./plugin` directory.
```
npm i
npm run build
```
Then add it to chrome (google how to add a custom plugin) by selecting the `./plugin/dist` directory
