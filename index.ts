import { coolPath, rootPath } from "./paths";

Bun.serve({
    port: Bun.env.PORT || 3000,
    fetch(req) {
        const url = new URL(req.url);
        console.log(url.pathname);

        if (url.pathname === "/") return rootPath();
        else if (url.pathname === "/cool" || url.pathname === "/cool/") return coolPath();

        return new Response(null, {status: 404});
    },
});