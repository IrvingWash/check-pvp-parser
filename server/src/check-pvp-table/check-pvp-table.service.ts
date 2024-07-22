import { Injectable } from "@nestjs/common";

import { TableRowDto } from "./table-row.dto";
import { createObjectCsvWriter } from "csv-writer";
import { TableToCsv } from "./table-to-csv";

@Injectable()
export class CheckPvpTableService {
    private _tableToCsv: TableToCsv;

    public constructor() {
        this._tableToCsv = new TableToCsv();
    }

    public async parseAndSave(dto: TableRowDto[]): Promise<void> {
        this._tableToCsv.parse(dto);
    }
}
