<template>
  <section class="section">
    <h2 class="is-size-2">Blog posts tagged with <i>{{ $route.params.tag }}</i></h2>
    <div
      v-for="post in posts"
      :key="post.slug"
    >
      <blog-list-item :post="post"/>
    </div>
  </section>
</template>

<script>
  import BlogListItem from "@/components/BlogListItem"
  export default {
    name: "BlogTag",
    components: {BlogListItem},
    head() {
      return {
        titleTemplate: '%s Blog Tags - ' + this.$route.params.tag,
      }
    },
    async asyncData({store, params}) {
      return {posts: store.getters['blog/blogPostsByTag'](params.tag)};
    },
    computed: {}
  }
</script>

<style scoped>
  p {
    padding-bottom: 1rem;
  }

</style>
