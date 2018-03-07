const Koa = require("koa");
const Router = require("koa-router");
const views = require("koa-views");
const path = require("path");

const readFile = require("./utils/readFile.js");

const templateRootDir = path.join(__dirname, "/../build/");

const app = new Koa();
const router = new Router();

// 超时处理 错误处理
app.use(async (ctx, next) => {
  const returnDefault = async function() {
    const defaultHtml = await readFile(templateRootDir + "index.html");
    console.log(333, defaultHtml);
    ctx.body = defaultHtml
      .replace(`{{title}}`, "鱼吧-斗鱼社区,直播爱好者的聚集地")
      .replace("{{data|safe}}", "{}");
  };
  // let timer = setTimeout(returnDefautl, 1);
  try {
    await next();
    // clearTimeout(timer);
  } catch (e) {
    const defaultHtml = await returnDefault();
  }
});

// routes
const index = require("./routes/index");
const user = require("./routes/user");
const post = require("./routes/post");

// 匹配任意路由
router.use("/:x", index.routes(), index.allowedMethods());
router.use("/user", user.routes(), user.allowedMethods());
router.use("/p/:pid", post.routes(), post.allowedMethods());

app.use(views(templateRootDir, { map: { html: "nunjucks" } }));
app.use(router.routes());
app.use(
  router.allowedMethods({
    throw: true,
    methodNotAllowed: () => {
      console.log(3344444);
    },
    notImplemented: () => {
      console.log(332233);
    }
  })
);

app.listen(3333);
