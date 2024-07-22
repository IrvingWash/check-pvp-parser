import { createRoot } from "react-dom/client";

import { App } from "./app";

const element = document.getElementById('root');

if (element === null) {
    throw new Error("Failed to get root element");
}

const root = createRoot(element);

root.render(<App />);
