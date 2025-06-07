import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import dts from "vite-plugin-dts";
// import { libInjectCss } from "vite-plugin-lib-inject-css"; // For injecting CSS
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // Generates type declarations (.d.ts files)
    dts({
      include: "src/lib", // Specify the directory where your library source code is
      insertTypesEntry: true, // Inserts a `types` entry into package.json
      outDir: "dist/types", // Output directory for types
    }),
    // Injects component CSS directly into the JS bundle as a <style> tag
    // This is often preferred for component libraries to avoid separate CSS files
    // libInjectCss(),
  ],
  build: {
    // Keep public directory contents out of the library build
    copyPublicDir: false,
    lib: {
      entry: resolve(
        dirname(fileURLToPath(import.meta.url)),
        "src/index.ts"
      ),
      // entry: resolve(__dirname, "lib/index.ts"),
      name: "reui", // The global variable name for UMD build
      fileName: (format) => `reui.${format}.js`, // Naming convention for output files
      // Supported output formats for your library
      formats: ["es", "cjs", "umd"], // ES Module, CommonJS, UMD
    },
    rollupOptions: {
      // Make sure to externalize dependencies that shouldn't be bundled into your library.
      // These are usually 'peerDependencies' in your package.json.
      external: ["react", "react-dom"],
      output: {
        // Provide global variables to use in the UMD build for externalized deps.
        // This is important for UMD consumers.
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        // Enable tree-shaking by default
        // Vite's Rollup configuration already handles this well for ES modules.
        // For individual component files to be tree-shakable (similar to Rollup's preserveModules)
        // you might need to adjust your entry point or create separate entry points per component.
        // For a single entry point that re-exports, Rollup will still tree-shake unused exports.
        // manualChunks: (id) => {
        //   if (id.includes('node_modules')) {
        //     return 'vendor'; // Example: create a vendor chunk for third-party deps
        //   }
        // },
      },
    },
    // Set sourcemap to true for easier debugging in consuming projects
    sourcemap: true,
  },
});
