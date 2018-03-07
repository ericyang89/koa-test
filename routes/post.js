const router = require("koa-router")();
const axios = require("axios");
// https://yuba.douyu.com/wbapi/web/post/detail/980352521520247677

router.get("/", async function(ctx, next) {
  const pid = ctx.params.pid;
  const emotionObj = await axios("https://yuba.douyu.com/wbapi/web/emotion");
  const emotionString = JSON.stringify({ emotion: emotionObj.data.emotion });
  await ctx.render("index.html", {
    title: "this is dynamic title111",
    data: emotionString
  });
});

module.exports = router;
