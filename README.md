# SharedWorker publicPath reproduction

Use Node.js 22.12 or newer. Run `npm ci` and `npm start`, then open
<http://127.0.0.1:8080/> in a browser with SharedWorker support.

The page loads its entry bundle from the local dev server. The bundler's default
asset URL points at an unrelated origin. The worker rule explicitly sets
`publicPath: "/workers/"`, and the dev server serves the worker at
`/workers/echo.js`.

- With the published loader 3.1.5, the page shows a `SecurityError` for
  `https://static.example.invalid/assets/echo.js`.
- With the fix, the worker loads from `/workers/echo.js` and the page shows `pong`.

To try the [loader fix](https://github.com/Sec-ant/worker-rspack-loader/tree/fix/worker-public-path),
check out that branch and run `pnpm install --frozen-lockfile`, `pnpm run build`,
and `npm pack`. Stop the reproduction server, then run the following commands
in this repository, using the path to the tarball you just built.

```sh
npm install --no-save --package-lock=false /path/to/worker-rspack-loader-3.1.5.tgz
npm start
```
