<template>
  <section class="section">
    <h2 class="is-size-2">{{ post.title }}</h2>
    {{ post.author }}
    <div v-html="post.body"/>
  </section>
</template>

<script>
  export default {
    name: "BlogPost",
    head () {
      return {
        titleTemplate: '%s Blog - ' + this.post.title,
      }
    },
    async asyncData({store, params}) {
      return {post: store.getters.post(params.slug)}
    },
    computed: {}
  }
</script>

<style scoped>
  p {
    padding-bottom: 1rem;
  }

</style>
