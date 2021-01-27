import typescript from "rollup-plugin-typescript2"
import resolve from "@rollup/plugin-node-resolve"
import babel from "rollup-plugin-babel"
import { terser } from "rollup-plugin-terser"
import replace from "@rollup/plugin-replace"
import commonjs from "@rollup/plugin-commonjs"
import url from "@rollup/plugin-url"
import peerDepsExternal from "rollup-plugin-peer-deps-external"
import scss from "rollup-plugin-scss"
import pkg from "./package.json"

const globals = {
  react: "React",
  "react-dom": "ReactDOM",
  "styled-components": "styled",
}
const extensions = [".js", ".jsx", ".ts", ".tsx"]
const external = ["react", "react-dom", "styled-components"]

export default {
  input: "./lib/index.ts",
  output: [
    {
      name: pkg.name,
      file: pkg.main,
      format: "es",
      sourcemap: true,
      globals,
    },
  ],
  external,
  plugins: [
    replace(),
    resolve({ extensions }),
    commonjs({
      include: "node_modules/**",
    }),
    typescript({
      tsconfig: "tsconfig.build.json",
      clean: true,
    }),
    babel({
      babelrc: true,
      exclude: "node_modules/**",
    }),
    terser(),
    peerDepsExternal(),
    url({
      include: ["**/*.woff", "**/*.woff2"],
    }),
    scss(),
  ],
}
