<template>
  <section class="section">
    <h1 class="is-size-2">Blog</h1>
    <div
      v-for="post in $store.getters.blogPosts(0)"
      :key="post.slug"
    >

      <nuxt-link
        :to="{ name: 'blog-slug', params: { slug: post.slug }}"
        exact-active-class="is-active">
        <h2 class="is-size-4">{{ post.title }}</h2>
      </nuxt-link>
      <div class="">{{ post.author }} ({{ post.publishDate }})</div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "BlogIndex",
    head () {
      return {
        titleTemplate: '%s Blog',
      }
    },
    async asyncData({store}) {
      await store.dispatch('loadBlogPosts')
    }
  }
</script>

<style scoped>

</style>
