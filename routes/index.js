var router = require("koa-router")();

router.get("/", async function(ctx, next) {
  await ctx.render("index.html", {
    title: "this is dynamic title111index",
    data: "{}"
  });
});
module.exports = router;
