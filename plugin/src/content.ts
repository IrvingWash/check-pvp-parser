import { TableParser } from "./table-parser";
import { Transport } from "./transport";
import { waitForElement } from "./utils";

async function main(): Promise<void> {
    const lastLoadedSignificantElement = "td";
    await waitForElement(lastLoadedSignificantElement);

    const transport = new Transport();

    const table = document.getElementsByTagName("table")[0];

    const rows = table.getElementsByTagName("tbody")[0]?.getElementsByTagName("tr");

    const tableParser = new TableParser(rows);
    const data = tableParser.data();
    await transport.checkPvpTable(data);

    const config: MutationObserverInit = { attributes: true, childList: true, characterData: true, subtree: true };
    const observer = new MutationObserver(async () => {
        const tableParser = new TableParser(rows);
        const data = tableParser.data();
        await transport.checkPvpTable(data);
    });

    observer.observe(table, config);
}

main();
