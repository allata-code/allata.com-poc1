<template>
  <section class="section">
    <h1 class="is-size-2">Blog</h1>
    <div
      v-for="post in $store.getters.blogPosts(0)"
      :key="post.slug"
    >
      <blog-list-item :post="post"/>
    </div>
  </section>
</template>

<script>
  import BlogListItem from "@/components/BlogListItem"
  export default {
    name: "BlogIndex",
    components: {BlogListItem},
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
