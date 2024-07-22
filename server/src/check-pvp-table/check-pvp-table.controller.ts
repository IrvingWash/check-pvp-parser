import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";

import { CheckPvpTableService } from "./check-pvp-table.service";
import { TableRowDto } from "./table-row.dto";

@Controller("check-pvp-table")
export class CheckPvpTableController {
    public constructor(
        private _service: CheckPvpTableService
    ) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    public async parseTable(
        @Body()
            dto: TableRowDto[]
    ): Promise<void> {
        this._service.parseAndSave(dto);
    }
}
