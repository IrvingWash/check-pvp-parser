import { config } from "dotenv";

config();

import { App } from "./app.config";

function main() {
  new App().bootstrap();
}

main();
