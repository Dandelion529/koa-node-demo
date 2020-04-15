const Router = require('@koa/router');
const router = new Router();
// 获取菜单列表接口
const { getMenuList } = require('./getMenuList');

getMemuList(router)
module.exports = router

