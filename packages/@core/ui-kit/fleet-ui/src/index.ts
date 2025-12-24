import 'fleet-ui/theme-project/index.js'; // 标准风格需要修改Element Plus组件的一些默认值
import 'fleet-ui/theme-chalk/index-standard.css'; // fleet-ui样式
import 'fleet-ui/theme-project/index.css'; // 引入标准风格主题样式
import { markRaw, type App } from 'vue';
import FleetUI from 'fleet-ui';

/**
 * 注册全局组件
 * @param app
 */
export function setupFleetUI(app: App<Element>, http: any) {
  app.use(FleetUI, { http: markRaw(http) });
}
