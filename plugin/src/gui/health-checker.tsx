import { useEffect, useState } from "react"
import s from './health-checker.module.css';

interface HealthCheckerProps {
    healthChecker: () => Promise<boolean>
}

interface MessageInfo {
    text: string,
    intent: string,
}

const healthy: MessageInfo = { text: "Healthy)))", intent: "healthy" };
const sick: MessageInfo = { text: "Sick(((", intent: "sick" };

export function HealthChecker(props: HealthCheckerProps): JSX.Element {
    const [health, setHealth] = useState(sick)

    useEffect(() => {
        checkHealth()
    }, []);

    return (
        <div>
            <p className={ s[health.intent] }>{ health.text }</p>
            <button onClick={ checkHealth }>Check health</button>
        </div>
    )

    async function checkHealth(): Promise<void> {
        const message = await props.healthChecker()
            ? healthy
            : sick;

        setHealth(message);
    }
}
