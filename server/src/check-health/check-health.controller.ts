import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common";

@Controller('check-health')
export class CheckHealthController {
    @Get()
    @HttpCode(HttpStatus.OK)
    public async checkHealth(): Promise<void> {}
}
