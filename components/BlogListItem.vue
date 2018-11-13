<template>
  <div v-if="post">
    <nuxt-link
      :to="{ name: 'blog-slug', params: { slug: post.slug }}"
      exact-active-class="is-active">
      <h2 class="is-size-4">{{ post.title }}</h2>
    </nuxt-link>
    <div class="">{{ post.description }}</div>
    <div class="">{{ post.author.fields.name }}</div>
  </div>
</template>

<script>
  export default {
    name: "BlogListItem",
    props: ['post']
  }
</script>

<style scoped>

</style>
