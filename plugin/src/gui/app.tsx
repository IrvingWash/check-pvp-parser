import { useMemo } from "react";

import { Transport } from "../transport";
import { HealthChecker } from "./health-checker";
import { HealthCheckerViewModel } from "./health-checker-view-model";

const transport = new Transport();

export function App(): JSX.Element {
    const healthCheckerViewModel = useMemo(() => new HealthCheckerViewModel(transport), []);

    return (
        <HealthChecker model={ healthCheckerViewModel } />
    )
}
