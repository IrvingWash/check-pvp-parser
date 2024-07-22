export class Transport {
    private _baseUrl = "http://localhost:6285";

    public checkHealth = async (): Promise<boolean> => {
        const url = new URL("check-health", this._baseUrl);

        try {
            const response = await fetch(url);

            return response.ok;
        } catch (error) {
            return false;
        }
    }
}
