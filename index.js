const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();

// routes
const index = require("./routes/index");
const user = require("./routes/user");

router.use("/", index.routes(), index.allowedMethods());
router.use("/user", user.routes(), user.allowedMethods());

app.use(router.routes(), router.allowedMethods());
app.listen(3333);
