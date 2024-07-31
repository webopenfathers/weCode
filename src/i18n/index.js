// dont remove
import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

function importAll(r) {
  const locale = {};
  r.keys().forEach(key => {
    locale[key.replace('./', '').replace('.json', '')] = r(key);
  });
  return locale;
}

const messages = {
  enUS: importAll(require.context('./en_US', true, /.json$/)),
  zhCN: importAll(require.context('./zh_CN', true, /.json$/))
};

const i18n = new VueI18n({
  messages
});
export default i18n;
