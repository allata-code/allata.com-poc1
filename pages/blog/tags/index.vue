<template>
  <section class="section">
    <h1 class="is-size-2">Blog Tags</h1>
    <div
      v-for="tag in $store.getters['blog/blogTags']"
      :key="tag"
    >
      <nuxt-link
        :to="`/blog/tags/${tag}`"
        exact-active-class="is-active">
        <h2 class="is-size-4">{{ tag }}</h2>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
  export default {
    name: "BlogTagIndex",
    head () {
      return {
        titleTemplate: '%s Blog Tags',
      }
    },
    async asyncData({store}) {
      await store.dispatch('blog/loadBlogPosts')
    }
  }
</script>

<style scoped>

</style>
