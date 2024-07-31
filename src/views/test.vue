<template>
  <div class="test-content">
    <div class='content'>
      <p v-for='i in 60' :key='i'>{{i}}</p>
    </div>
    <div class='footer'>
    <div>通过</div>
    <div>驳回</div>
    </div>
  </div>
</template>

<script>
import '../common/css/index.less';
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {};
  },
  created() {
     window.HWH5.navTitle({ title: '审核页面' });
  },
  computed: {
 
  },
  methods: {

  }
};
</script>

<style lang="less" scoped>
.test-content {
    height:100vh;
    width:100%
}

.content{
    height:calc(100% - 50px);
    overflow-y:scroll
}

.footer{
    position:fixed;
    bottom:0;
    left:0;
    right:0;
    display:flex;
    div{
        height:50px;
        background:pink;
        flex:1;
        display:flex;
        justify-content:center;
        align-items:center;
        text-align:center;
        border:1px solid #ccc;
        &:first-child{
         border-right:0
        }
    }
}
</style>
