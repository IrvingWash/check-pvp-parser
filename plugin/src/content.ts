import { TableParser } from "./table-parser";
import { Transport } from "./transport";
import { waitForElement } from "./utils";

async function main(): Promise<void> {
    const lastLoadedSignificantElement = "td";
    await waitForElement(lastLoadedSignificantElement);

    const table = document.getElementsByTagName("table")[0];
    const rows = table.getElementsByTagName("tbody")[0]?.getElementsByTagName("tr");

    const transport = new Transport();

    const observer = new MutationObserver(async () => {
        const tableParser = new TableParser(rows);
        const data = tableParser.data();
        await transport.checkPvpTable(data);
    });
    observer.observe(
        table,
        {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true,
        }
    );
}

main();
