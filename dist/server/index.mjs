globalThis.__nitro_main__ = import.meta.url;
import { N as NodeResponse, s as serve } from "./_libs/srvx.mjs";
import { H as HTTPError, d as defineHandler, t as toEventHandler, a as defineLazyEventHandler, b as H3Core } from "./_libs/h3.mjs";
import { d as decodePath, w as withLeadingSlash, a as withoutTrailingSlash, j as joinURL } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import "node:http";
import "node:stream";
import "node:stream/promises";
import "node:https";
import "node:http2";
import "./_libs/rou3.mjs";
function lazyService(loader) {
  let promise, mod;
  return {
    fetch(req) {
      if (mod) {
        return mod.fetch(req);
      }
      if (!promise) {
        promise = loader().then((_mod) => mod = _mod.default || _mod);
      }
      return promise.then((mod2) => mod2.fetch(req));
    }
  };
}
const services = {
  ["ssr"]: lazyService(() => import("./_ssr/index.mjs"))
};
globalThis.__nitro_vite_envs__ = services;
const errorHandler$1 = (error, event) => {
  const res = defaultHandler(error, event);
  return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
  const unhandled = error.unhandled ?? !HTTPError.isError(error);
  const { status = 500, statusText = "" } = unhandled ? {} : error;
  if (status === 404) {
    const url = event.url || new URL(event.req.url);
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      return {
        status: 302,
        headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
      };
    }
  }
  const headers2 = new Headers(unhandled ? {} : error.headers);
  headers2.set("content-type", "application/json; charset=utf-8");
  const jsonBody = unhandled ? {
    status,
    unhandled: true
  } : typeof error.toJSON === "function" ? error.toJSON() : {
    status,
    statusText,
    message: error.message
  };
  return {
    status,
    statusText,
    headers: headers2,
    body: {
      error: true,
      ...jsonBody
    }
  };
}
const errorHandlers = [errorHandler$1];
async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      const response = await handler(error, event, { defaultHandler });
      if (response) {
        return response;
      }
    } catch (error2) {
      console.error(error2);
    }
  }
}
const headers = ((m) => function headersRouteRule(event) {
  for (const [key2, value] of Object.entries(m.options || {})) {
    event.res.headers.set(key2, value);
  }
});
const assets = {
  "/assets/about-Dp4g-W5Q.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"11a1-BVdoH5fHeVjHXehaIMvTG64nRgg"',
    "mtime": "2026-06-05T19:10:31.598Z",
    "size": 4513,
    "path": "../client/assets/about-Dp4g-W5Q.js"
  },
  "/favicon.svg": {
    "type": "image/svg+xml",
    "etag": '"173-QncfkPdCksx6UorPE7vxQQOR+gg"',
    "mtime": "2026-06-05T19:10:32.304Z",
    "size": 371,
    "path": "../client/favicon.svg"
  },
  "/assets/arrow-right-DToJx-UA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a6-kl6Tzv3k2JJt38zisv0SuXjn4wQ"',
    "mtime": "2026-06-05T19:10:31.598Z",
    "size": 166,
    "path": "../client/assets/arrow-right-DToJx-UA.js"
  },
  "/assets/check-Zm36QU7c.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"78-aFHNJi4y3a/FW5TEjqIrmOMCT3M"',
    "mtime": "2026-06-05T19:10:31.598Z",
    "size": 120,
    "path": "../client/assets/check-Zm36QU7c.js"
  },
  "/assets/heart-C7eBZp5R.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"103-3S81r+dBp6j0QYtyYm1OuUYOFZ0"',
    "mtime": "2026-06-05T19:10:31.598Z",
    "size": 259,
    "path": "../client/assets/heart-C7eBZp5R.js"
  },
  "/assets/contact-Dh7XJ8YA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"14b4-JovGN6EeMfgkphVznAbuqce5azI"',
    "mtime": "2026-06-05T19:10:31.598Z",
    "size": 5300,
    "path": "../client/assets/contact-Dh7XJ8YA.js"
  },
  "/assets/index-C0BzyJC-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4325-CoeIVQ/zlo6ZKynDEreXS9WXoKA"',
    "mtime": "2026-06-05T19:10:31.598Z",
    "size": 17189,
    "path": "../client/assets/index-C0BzyJC-.js"
  },
  "/assets/layers-DArR5Ipv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1a6-eT+x/lZwCqscV1XUtlNBB01aXq4"',
    "mtime": "2026-06-05T19:10:31.598Z",
    "size": 422,
    "path": "../client/assets/layers-DArR5Ipv.js"
  },
  "/assets/products._slug-BSMHrZPC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-2nNay9N7Y0db06OSegFIZMO2w8I"',
    "mtime": "2026-06-05T19:10:31.598Z",
    "size": 350,
    "path": "../client/assets/products._slug-BSMHrZPC.js"
  },
  "/assets/products._slug-UB98n3Sw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1cd1-1WivUjLhOcu9rxEJ5cVkMtaZ7mM"',
    "mtime": "2026-06-05T19:10:31.598Z",
    "size": 7377,
    "path": "../client/assets/products._slug-UB98n3Sw.js"
  },
  "/assets/products._slug-DydwHU7l.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"14f-GXzn2iAZtTB105oxTRHn/lGYTGg"',
    "mtime": "2026-06-05T19:10:31.598Z",
    "size": 335,
    "path": "../client/assets/products._slug-DydwHU7l.js"
  },
  "/assets/products.index-BqVFj8Xo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"9ef-XPqOdw/UX7dbR5vfgyJEaQjy1j8"',
    "mtime": "2026-06-05T19:10:31.598Z",
    "size": 2543,
    "path": "../client/assets/products.index-BqVFj8Xo.js"
  },
  "/assets/index-CAmnkYkI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7b1db-wEESuqnyE8ZZ5llDx+ILCsnA+pA"',
    "mtime": "2026-06-05T19:10:31.598Z",
    "size": 504283,
    "path": "../client/assets/index-CAmnkYkI.js"
  },
  "/assets/resources-Ds6VcQnu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1499-8ZnwmVeXvNbAkYXxZnTCkrnkCTo"',
    "mtime": "2026-06-05T19:10:31.598Z",
    "size": 5273,
    "path": "../client/assets/resources-Ds6VcQnu.js"
  },
  "/assets/services-arb5ObvJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1124-hfum6sOjOQcBSTobdEyBEFLDK+E"',
    "mtime": "2026-06-05T19:10:31.598Z",
    "size": 4388,
    "path": "../client/assets/services-arb5ObvJ.js"
  },
  "/assets/styles-BHNFO20l.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"15519-sSnjbfPBmoW+ElqKaBmWInaFNVM"',
    "mtime": "2026-06-05T19:10:31.598Z",
    "size": 87321,
    "path": "../client/assets/styles-BHNFO20l.css"
  },
  "/assets/workflow-_boRhSXt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"226-wujlm79NgZ8R1RNNBigpjbUQJpE"',
    "mtime": "2026-06-05T19:10:31.598Z",
    "size": 550,
    "path": "../client/assets/workflow-_boRhSXt.js"
  },
  "/assets/shield-check-DZqDM42q.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"39f-r+STKbcVx/tfpqYCpEu+LMJHQbY"',
    "mtime": "2026-06-05T19:10:31.598Z",
    "size": 927,
    "path": "../client/assets/shield-check-DZqDM42q.js"
  }
};
function readAsset(id) {
  const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
  return promises.readFile(resolve(serverDir, assets[id].path));
}
const publicAssetBases = {};
function isPublicAssetURL(id = "") {
  if (assets[id]) {
    return true;
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) {
      return true;
    }
  }
  return false;
}
function getAsset(id) {
  return assets[id];
}
const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = {
  gzip: ".gz",
  br: ".br",
  zstd: ".zst"
};
const __xOgEu = defineHandler((event) => {
  if (event.req.method && !METHODS.has(event.req.method)) {
    return;
  }
  let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
  let asset;
  const encodingHeader = event.req.headers.get("accept-encoding") || "";
  const encodings = [...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.res.headers.delete("Cache-Control");
      throw new HTTPError({ status: 404 });
    }
    return;
  }
  if (encodings.length > 1) {
    event.res.headers.append("Vary", "Accept-Encoding");
  }
  const ifNotMatch = event.req.headers.get("if-none-match") === asset.etag;
  if (ifNotMatch) {
    event.res.status = 304;
    event.res.statusText = "Not Modified";
    return "";
  }
  const ifModifiedSinceH = event.req.headers.get("if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    event.res.status = 304;
    event.res.statusText = "Not Modified";
    return "";
  }
  if (asset.type) {
    event.res.headers.set("Content-Type", asset.type);
  }
  if (asset.etag && !event.res.headers.has("ETag")) {
    event.res.headers.set("ETag", asset.etag);
  }
  if (asset.mtime && !event.res.headers.has("Last-Modified")) {
    event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.res.headers.has("Content-Encoding")) {
    event.res.headers.set("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.res.headers.has("Content-Length")) {
    event.res.headers.set("Content-Length", asset.size.toString());
  }
  return readAsset(id);
});
const findRouteRules = /* @__PURE__ */ (() => {
  const $0 = [{ name: "headers", route: "/assets/**", handler: headers, options: { "cache-control": "public, max-age=31536000, immutable" } }];
  return (m, p) => {
    let r = [];
    if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
    let s = p.split("/"), l = s.length;
    if (l > 1) {
      if (s[1] === "assets") {
        r.unshift({ data: $0, params: { "_": s.slice(2).join("/") } });
      }
    }
    return r;
  };
})();
const _lazy_Gjzz8Q = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
const findRoute = /* @__PURE__ */ (() => {
  const data = { route: "/**", handler: _lazy_Gjzz8Q };
  return ((_m, p) => {
    return { data, params: { "_": p.slice(1) } };
  });
})();
const globalMiddleware = [
  toEventHandler(__xOgEu)
].filter(Boolean);
const APP_ID = "default";
function useNitroApp() {
  let instance = useNitroApp._instance;
  if (instance) {
    return instance;
  }
  instance = useNitroApp._instance = createNitroApp();
  globalThis.__nitro__ = globalThis.__nitro__ || {};
  globalThis.__nitro__[APP_ID] = instance;
  return instance;
}
function createNitroApp() {
  const hooks = void 0;
  const captureError = (error, errorCtx) => {
    if (errorCtx?.event) {
      const errors = errorCtx.event.req.context?.nitro?.errors;
      if (errors) {
        errors.push({
          error,
          context: errorCtx
        });
      }
    }
  };
  const h3App = createH3App({ onError(error, event) {
    return errorHandler(error, event);
  } });
  let appHandler = (req) => {
    req.context ||= {};
    req.context.nitro = req.context.nitro || { errors: [] };
    return h3App.fetch(req);
  };
  const app = {
    fetch: appHandler,
    h3: h3App,
    hooks,
    captureError
  };
  return app;
}
function createH3App(config) {
  const h3App = new H3Core(config);
  h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
  h3App["~middleware"].push(...globalMiddleware);
  {
    h3App["~getMiddleware"] = (event, route) => {
      const pathname = event.url.pathname;
      const method = event.req.method;
      const middleware = [];
      {
        const routeRules = getRouteRules(method, pathname);
        event.context.routeRules = routeRules?.routeRules;
        if (routeRules?.routeRuleMiddleware.length) {
          middleware.push(...routeRules.routeRuleMiddleware);
        }
      }
      middleware.push(...h3App["~middleware"]);
      if (route?.data?.middleware?.length) {
        middleware.push(...route.data.middleware);
      }
      return middleware;
    };
  }
  return h3App;
}
function getRouteRules(method, pathname) {
  const m = findRouteRules(method, pathname);
  if (!m?.length) {
    return { routeRuleMiddleware: [] };
  }
  const routeRules = {};
  for (const layer of m) {
    for (const rule of layer.data) {
      const currentRule = routeRules[rule.name];
      if (currentRule) {
        if (rule.options === false) {
          delete routeRules[rule.name];
          continue;
        }
        if (typeof currentRule.options === "object" && typeof rule.options === "object") {
          currentRule.options = {
            ...currentRule.options,
            ...rule.options
          };
        } else {
          currentRule.options = rule.options;
        }
        currentRule.route = rule.route;
        currentRule.params = {
          ...currentRule.params,
          ...layer.params
        };
      } else if (rule.options !== false) {
        routeRules[rule.name] = {
          ...rule,
          params: layer.params
        };
      }
    }
  }
  const middleware = [];
  const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
  for (const rule of orderedRules) {
    if (rule.options === false || !rule.handler) {
      continue;
    }
    middleware.push(rule.handler(rule));
  }
  return {
    routeRules,
    routeRuleMiddleware: middleware
  };
}
function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
  process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
  process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
const tracingSrvxPlugins = [];
const _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
const port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
const host = process.env.NITRO_HOST || process.env.HOST;
const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const nitroApp = useNitroApp();
serve({
  port,
  hostname: host,
  tls: cert && key ? {
    cert,
    key
  } : void 0,
  fetch: nitroApp.fetch,
  plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
const nodeServer = {};
export {
  nodeServer as default
};
