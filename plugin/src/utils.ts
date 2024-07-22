export async function waitForElement(elementName: string): Promise<void> {
    return new Promise(
        (resolve) => {
            if (document.querySelector(elementName) !== null) {
                return resolve()
            }

            const observer = new MutationObserver(() => {
                if (document.querySelector(elementName) !== null) {
                    observer.disconnect();
                    resolve();
                }
            });

            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        }
    )
}
