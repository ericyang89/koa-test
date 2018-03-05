const router = require("koa-router")();
const axios = require("axios");
// https://yuba.douyu.com/wbapi/web/post/detail/980352521520247677

router.get("/p/:pid", async function(ctx, next) {
  await ctx.render("resources/index.html", { title: "this is dynamic title" });
});
module.exports = router;
