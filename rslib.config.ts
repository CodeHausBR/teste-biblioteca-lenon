import {pluginReact} from "@rsbuild/plugin-react";
import {defineConfig} from "@rslib/core";

export default defineConfig({
    source: {
        entry: {
            index: ["./src/**"],
        },
    },
    lib: [
        {
            bundle: false,
            dts: true,
            format: "esm",
            output: {
                distPath: {root: "./build/biblioteca"},
            },
        },
    ],
    output: {
        target: "web",
    },
    plugins: [pluginReact()],
});
