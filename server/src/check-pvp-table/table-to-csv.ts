import { existsSync, readFileSync, writeFileSync } from "fs";

import { TableRowDto } from "./table-row.dto";
import { EOL } from "os";
import { normalize } from "path";

const encoding = "utf-8";

const header = [
    'Side',
    'Name-Realm',
    'Max Arena',
];

export class TableToCsv {
    private _savePath: string;

    public constructor() {
        const path = process.env.CSV_SAVE_PATH;

        if (path === undefined) {
            throw new Error("Please specify where to save the csv in the `/server/.env` file");
        }

        this._savePath = normalize(path);
    }

    public async parse(dto: TableRowDto[]): Promise<void> {
        this._createCsvIfNeeded();

        // Load csv
        const prev_csv = readFileSync(this._savePath, { encoding });
        let rows = prev_csv.split(EOL);

        // Append new rows
        for (const new_row of dto) {
            rows.push(Object.values(new_row).join(","));
        }

        // Remove old rows
        if (rows.length > 1000) {
            rows = rows.slice(1, dto.length);
        }

        // Remove duplicates
        rows = Array.from(new Set(rows));

        // Save to file
        writeFileSync(this._savePath, rows.join(EOL));
    }

    private _createCsvIfNeeded(): void {
        if (existsSync(this._savePath)) {
            return;
        };

        writeFileSync(this._savePath, header.join(","));
    }
}
