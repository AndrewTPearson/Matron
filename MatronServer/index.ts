// Index file - sets up server, passes incoming requests to the router

import Koa from 'koa';
import bodyparser from 'koa-bodyparser';
import { PORT } from './config/config';
import router from './router';

const app = new Koa();
app.use(bodyparser)
  .use(async ctx => {
  ctx.body = ctx.request.body;
})
  .use(router.routes)
  .listen(PORT, () => console.log(`Listening at localhost:${PORT}`));