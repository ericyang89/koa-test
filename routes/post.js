const router = require("koa-router")();
const axios = require("axios");
const debug = require("debug")("yuba");
// https://yuba.douyu.com/wbapi/web/post/detail/980352521520247677

router.get("/", async function(ctx, next) {
  debug("this is post" + new Date());
  const pid = ctx.params.pid;
  // console.log(new Date().getTime());
  const emotionObj = await axios("https://yuba.douyu.com/wbapi/web/emotion");
  const emotionString = JSON.stringify({ emotion: emotionObj.data.emotion });
  // console.log(new Date().getTime());
  await ctx.render("index.html", {
    title: "this is dynamic title111",
    data: emotionString
  });
});

module.exports = router;
