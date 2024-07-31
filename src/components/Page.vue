<template>
  <section :class="`page ${i_className}`">
    <div class="page__hd">
      <h1 class="page__title">{{ title }}</h1>
      <p class="page__desc">{{ subTitle }}</p>
    </div>
    <div :class="`page__bd ${spacing ? 'page__bd_spacing' : ''}`">
      <slot name="body"></slot>
    </div>
    <footer class="page__ft">
      <slot name="footer"></slot>
    </footer>
  </section>
</template>

<script>
export default {
  props: {
    title: String,
    subTitle: String,
    spacing: Boolean,
    className: String
  },
  data() {
    return {
      i_className: this.className,
      i_spacing: this.spacing
    };
  }
};
</script>

<style lang="less" scoped>
.page {
  padding: 10px;
}
</style>
