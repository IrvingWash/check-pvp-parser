import { createObjectCsvWriter } from "csv-writer";
import { CsvWriter } from "csv-writer/src/lib/csv-writer";
import { existsSync, writeFileSync } from "fs";

import { TableRowDto } from "./table-row.dto";

export class TableToCsv {
    private _savePath: string;
    private _csvWriter: CsvWriter<TableRowDto>;

    public constructor() {
        this._savePath = process.env.CSV_SAVE_PATH;

        this._csvWriter = createObjectCsvWriter({
            path: this._savePath,
            header: [
                { id: 'side', title: 'Side' },
                { id: 'nameRealm', title: 'Name-Realm' },
                { id: 'maxArena', title: 'Max Arena' }
            ],
            append: true,
        });

        if (this._savePath === undefined) {
            throw new Error("Please specify where to save the csv in the `/server/.env` file");
        }

        this._createCsvIfNeeded();
    }

    public async parse(dto: TableRowDto[]): Promise<void> {
        await this._csvWriter.writeRecords(dto);
    }

    private _createCsvIfNeeded() {
        if (existsSync(this._savePath)) {
            return;
        }

        writeFileSync(this._savePath, "");
    }
}
