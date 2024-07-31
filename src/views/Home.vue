<template>
  <div class="App">
    <div class="App-header"></div>
    <h1 class="App-title">{{ $t('common.appTitle') }}</h1>
    <p class="App-intro">
      {{ $t('home.edit') }}
      <code>/src/views/Home.vue</code>
      {{ $t('home.saveReload') }}
    </p>
    <router-link to="/vueTemplateIntro" class="desc-link">{{
      $t('home.wlkVueTemplateIntro')
    }}</router-link>
    <div style="display:none;">{{ deviceInfo }}</div>


    <router-link to="/test" class="desc-link">张博文</router-link>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {};
  },
  created() {
    window.HWH5.navTitle({ title: this.$i18n.t('common.title') });
    this.getDeviceInfo();
  },
  computed: {
    ...mapState(['deviceInfo'])
  },
  methods: {
    ...mapActions(['getDeviceInfo'])
  }
};
</script>

<style lang="less" scoped>
.App {
  padding: 10px;

  .App-logo {
    margin: 20px 0;
    text-align: center;
  }

  .App-header {
    height: 90px;
    text-align: center;
  }

  .App-title {
    margin-bottom: 30px;
    font-size: 1.5em;
    text-align: center;
  }

  .App-intro {
    margin-bottom: 10px;
    // font-size: large;
    text-align: center;
  }

  .desc-link {
    display: block;
    line-height: 2.2em;
    margin: 0 auto;

    color: #2b88e6;
    font-size: 14px;
    text-align: center;
  }
  code {
    padding: 2px 4px;
    color: #c0341d;
    background-color: #fbe5e1;
    border-radius: 4px;
  }

  .develop-doc {
    h3 {
      margin-bottom: 5px;
    }

    ul {
      list-style: circle;
      padding-left: 30px;
    }

    li {
      margin-bottom: 5px;
      color: #2b88e6;
      cursor: pointer;
    }
  }
}
</style>
