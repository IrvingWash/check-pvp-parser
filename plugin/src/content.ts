import { TableParser } from "./table-parser";
import { Transport } from "./transport";

async function main(): Promise<void> {
    const transport = new Transport();

    await waitForElement("td");

    const rows = document.getElementsByTagName("table")[0]?.getElementsByTagName("tbody")[0]?.getElementsByTagName("tr");

    const tableParser = new TableParser(rows);

    const data = tableParser.data();

    await transport.checkPvpTable(data);
}

async function waitForElement(elementName: string): Promise<void> {
    return new Promise(
        (resolve) => {
            if (document.querySelector(elementName) !== null) {
                return resolve()
            }

            const observer = new MutationObserver(() => {
                if (document.querySelector(elementName) !== null) {
                    observer.disconnect();
                    resolve();
                }
            });

            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        }
    )
}

main();
