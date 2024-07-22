import { TableRowData } from "./objects";

export class Transport {
    private _baseUrl = "http://localhost:6285/";

    public checkHealth = async (): Promise<boolean> => {
        const url = new URL("check-health", this._baseUrl);

        try {
            const response = await fetch(url);

            return response.ok;
        } catch (error) {
            return false;
        }
    }

    public async checkPvpTable(data: TableRowData[]): Promise<void> {
        const url = new URL("check-pvp-table", this._baseUrl);

        try {
            await fetch(
                url,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json"},
                    body: JSON.stringify(data)
                }
            );
        } catch (error) {
            console.error(error);
        }
    }
}
