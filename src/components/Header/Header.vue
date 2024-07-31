<template>
  <header>
    <img id="back" :src="backImg" :alt="title" @click="backHandle" />
    <div class="tit">
      {{ title }}
    </div>
  </header>
</template>

<script>
import backImg from './images/back.png';

export default {
  props: {
    title: String,
    backHandle: Function
  },
  data() {
    return {
      backImg
    };
  }
};
</script>

<style lang="less" scoped>
header {
  position: relative;
  width: 100%;
  height: 44px;
  background: #343745 100%;
  z-index: 999;
}

header #back {
  position: absolute;
  top: 6px;
  left: 6px;
  width: 32px;
  height: 32px;
}

header #share {
  position: absolute;
  top: 6px;
  right: 6px;
  width: 32px;
  height: 32px;
}

header .tit {
  top: 90px;
  width: 100%;
  height: 44px;
  color: #fff;
  font-size: 17px;
  font-family: PingFangSC-Regular;
  line-height: 44px;
  text-align: center;
}
</style>
