import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { crx } from "@crxjs/vite-plugin"
import manifest from './manifest.json';

const viteManifestHackIssue846: Plugin & { renderCrxManifest: (manifest: any, bundle: any) => void } = {
    // Workaround from https://github.com/crxjs/chrome-extension-tools/issues/846#issuecomment-1861880919.
    name: 'manifestHackIssue846',
    renderCrxManifest(_manifest, bundle) {
        bundle['manifest.json'] = bundle['.vite/manifest.json']
        bundle['manifest.json'].fileName = 'manifest.json'
        delete bundle['.vite/manifest.json']
    },
}

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        viteManifestHackIssue846,
        crx({ manifest }),
    ],
    build: {
        rollupOptions: {
            input: {
                content: "src/content.ts",
            },
        },
    },
});
