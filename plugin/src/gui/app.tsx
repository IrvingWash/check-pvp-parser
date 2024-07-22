import { Transport } from "../transport";
import { HealthChecker } from "./health-checker";

const transport = new Transport();

export function App(): JSX.Element {
    return (
        <HealthChecker healthChecker={ transport.checkHealth } />
    )
}
