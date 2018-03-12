const Koa = require("koa");
const Router = require("koa-router");
const views = require("koa-views");
const path = require("path");

const readFile = require("./utils/readFile.js");

const templateRootDir = path.join(__dirname, "/../build/");

const app = new Koa();
const router = new Router();

const maxResponseTime = 500;

// 超时处理 错误处理
app.use(async (ctx, next) => {
  const returnDefault = async function() {
    const defaultHtml = await readFile(templateRootDir + "index.html");
    // console.log(333, defaultHtml);
    ctx.body = defaultHtml
      .replace(`{{title}}`, "鱼吧-斗鱼社区,直播爱好者的聚集地")
      .replace("{{data|safe}}", "{}");
  };
  let timer = setTimeout(async () => {
    // 绕过koa 标示
    ctx.respond = false;

    const defaultHtml = await returnDefault();
    ctx.res.end(ctx.body);
  }, maxResponseTime);
  // console.log(444, ctx);
  try {
    await next();
    clearTimeout(timer);
  } catch (e) {
    const defaultHtml = await returnDefault();
  }
});

// routes
const index = require("./routes/index");
const user = require("./routes/user");
const post = require("./routes/post");

router.use("/", index.routes(), index.allowedMethods());

// 匹配任意路由
router.use("/:x", index.routes(), index.allowedMethods());
router.use("/user", user.routes(), user.allowedMethods());
router.use("/p/:pid", post.routes(), post.allowedMethods());

app.use(views(templateRootDir, { map: { html: "nunjucks" } }));
app.use(router.routes());
app.use(
  router.allowedMethods({
    throw: true,
    methodNotAllowed: () => {},
    notImplemented: () => {}
  })
);

app.listen(3333);
