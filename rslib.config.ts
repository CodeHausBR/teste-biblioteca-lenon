import {pluginReact} from "@rsbuild/plugin-react";
import {defineConfig} from "@rslib/core";

export default defineConfig({
    source: {
        entry: {
            index: ["./src/biblioteca/index.tsx"],
        },
    },
    lib: [
        {
            bundle: false,
            dts: true,
            format: "esm",
            output: {
                distPath: {root: "./build"},
            },
        },
    ],
    output: {
        target: "web",
    },
    plugins: [pluginReact()],
});
