import { Transport } from "../transport";

export interface HealthInfo {
    text: string,
    intent: string,
}

const healthy: HealthInfo = {
    text: "Healthy)))",
    intent: "healthy",
} as const

const sick: HealthInfo = {
    text: "Sick(((",
    intent: "sick",
} as const

export class HealthCheckerViewModel {
    private readonly _transport: Transport;

    public constructor(transport: Transport) {
        this._transport = transport;
    }

    public async checkHealth(): Promise<Readonly<HealthInfo>> {
        return await this._transport.checkHealth()
            ? healthy
            : sick;
    }
}
