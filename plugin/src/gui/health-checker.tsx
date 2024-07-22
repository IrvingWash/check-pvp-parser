import { useEffect, useState } from "react"

import { HealthCheckerViewModel, HealthInfo } from "./health-checker-view-model";

import s from './health-checker.module.css';

interface HealthCheckerProps {
    model: HealthCheckerViewModel,
}

export function HealthChecker(props: HealthCheckerProps): JSX.Element {
    const [health, setHealth] = useState<HealthInfo | null>(null);

    useEffect(() => {
        checkHealth()
    }, []);

    return (
        <div>
            { health &&
                <p className={ s[health.intent] }>{ health.text }</p>
            }
            <button onClick={ checkHealth }>Check health</button>
        </div>
    );

    async function checkHealth(): Promise<void> {
        const message = await props.model.checkHealth();

        setHealth(message);
    }
}
