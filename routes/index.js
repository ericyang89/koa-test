var router = require("koa-router")();
const readFile = require("./../utils/readFile.js");
const fileAddress = process.cwd() + "/resources/index.html";

router.get("/", async function(ctx, next) {
  await ctx.render("resources/index.html", { title: "this is dynamic title" });
});
module.exports = router;
