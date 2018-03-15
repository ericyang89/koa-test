const Koa = require("koa");
const Router = require("koa-router");
const views = require("koa-views");
const debug = require("debug")("yuba");

const templateRootDir = require("./configs/templateRoot").dir;
const errorOrTimeout = require("./middleware/errorOrTimeout");

const app = new Koa();
const router = new Router();

// routes
const index = require("./routes/index");
const user = require("./routes/user");
const post = require("./routes/post");

// 超时处理 错误处理
app.use(errorOrTimeout);

app.use(views(templateRootDir, { map: { html: "nunjucks" } }));

// do NOT use a router multi times scence https://github.com/alexmingoia/koa-router/issues/244;
// for this case, a workaround is to use RegExp-like string path
// example: rootRouter.use('/(foo|bar)?', sharedRouter.routes());
// to match :
// GET /hello
// GET /foo/hello
// GET /bar/hello
router.use("/user", user.routes(), user.allowedMethods());
router.use("/p/:pid", post.routes(), post.allowedMethods());

// 匹配任意路由; * 什么意思？ https://github.com/pillarjs/path-to-regexp
router.use("/:any*", index.routes(), index.allowedMethods());

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3333);
debug("node is running...");
