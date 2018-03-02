var router = require("koa-router")();

router.get("/", async function(ctx, next) {
  ctx.body = "this is index";
});
module.exports = router;
