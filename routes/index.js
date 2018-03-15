var router = require("koa-router")();
const debug = require("debug")("yuba");

router.get("/", async function(ctx, next) {
  debug("this is index router %s", new Date());
  await ctx.render("index.html", {
    title: "this is dynamic title111index",
    data: "{}"
  });
});
module.exports = router;
