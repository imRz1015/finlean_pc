/*
 * @Author: hzq
 * @Date: 2018-08-28 17:18:05
 * @Last Modified by: hzq
 * @Last Modified time: 2018-08-30 17:25:52
 * @文件说明: 全局$tool插件
 */
import validator from './validator';
export default {
  install(Vue) {
    let tool = {
      ...validator
    };
    Vue.prototype.$tool = tool;
    Vue.$tool = tool;
  }
};
