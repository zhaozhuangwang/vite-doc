import 'normalize.css'
import '@/styles/element-variables.scss'
import '@/styles/index.scss'
import '@/icons/components'
import '@/permission'
import '@/utils/error-log'
import '@/pwa/register-service-worker'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import 'mutationobserver-shim'

import App from '@/App.vue'
import { AppModule } from '@/store/modules/app'
import ECharts from 'vue-echarts'
import Echart from 'echarts'
import ElementUI from 'element-ui'
import SvgIcon from 'vue-svgicon'
import Vue from 'vue'
import i18n from '@/lang'
import router from '@/router'
import store from '@/store'
import dayjs from "dayjs";

Vue.use(ElementUI, {
  size: AppModule.size, // Set element-ui default size
  i18n: (key: string, value: string) => i18n.t(key, value)
})

Vue.use(SvgIcon, {
  tagName: 'svg-icon',
  defaultWidth: '1em',
  defaultHeight: '1em'
})
Vue.component('v-chart', ECharts)
Vue.prototype.$echarts = Echart
// Register global directives
// Object.keys(directives).forEach(key => {
//   Vue.directive(key, (directives as { [key: string ]: DirectiveOptions })[key])
// })

// Register global filter functions
// Object.keys(filters).forEach(key => {
//   Vue.filter(key, (filters as { [key: string ]: Function })[key])
// })
Vue.filter("statusFilter", (status: number) => {
  const map: { [key: number]: string } = {
    0: "停用",
    1: "启用"
  };
  return map[status];
});
Vue.filter(
  "dateformat",
  (dataStr: string, pattern: string = "YYYY-MM-DD HH:mm:ss") => {
    return dayjs(dataStr).format(pattern) ;
  }
);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
