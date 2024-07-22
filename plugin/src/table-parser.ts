import { TableRowData } from "./objects";

export class TableParser {
    private _rows: HTMLCollectionOf<HTMLTableRowElement>;

    public constructor(rows: HTMLCollectionOf<HTMLTableRowElement>) {
        this._rows = rows;
    }

    public data(): TableRowData[] {
        const result: TableRowData[] = [];

        for (const row of this._rows) {
            const cells = row.getElementsByTagName("td");

            result.push({
                side: cells[1].getElementsByTagName("img")[0].getAttribute("src")?.includes("0-colorized")
                    ? "H"
                    : "A",
                nameRealm: cells[3].getElementsByTagName("a")[0].textContent ?? "",
                maxArena: Number(cells[5].getElementsByTagName("span")[0].textContent),
            });
        }

        return result;
    }
}
