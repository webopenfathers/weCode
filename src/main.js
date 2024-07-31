import Vue from 'vue';
import App from './App.vue';
import i18n from '@/i18n';
import store from '@/store';
import router from '@/router';
import getLang from './utils/getLang';

function init(i18n) {
  return new Vue({
    el: '#app',
    i18n,
    store,
    router,
    render: h => h(App)
  });
}

// 获取当前app语言参数，并初始化国际化和渲染页面。开发时，mock数据默认返回中文。
getLang()
  .then(language => {
    i18n.locale = language === 'zh' ? 'zhCN' : 'enUS';
    // i18n.locale = 'enUS';
    init(i18n);
  })
  .catch(() => {
    init();
  });
