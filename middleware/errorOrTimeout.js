const path = require("path");
const readFile = require("./../utils/readFile.js");
const templateRootUri = require("./../configs/templateRoot").uri;
const maxResponseTime = 500;

const middleware = async function(ctx, next) {
  const returnDefault = async function() {
    const defaultHtml = await readFile(templateRootUri);
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
  try {
    await next();
    clearTimeout(timer);
  } catch (e) {
    const defaultHtml = await returnDefault();
  }
};

module.exports = middleware;
