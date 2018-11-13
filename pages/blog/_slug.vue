<template>
  <section class="section">
    <h2 class="is-size-2">{{ post.title }}</h2>
    {{ post.author.fields.name }}

    <div class="tags">
      <span
        v-for="tag in post.tags"
        :key="tag"
        class="tag">
        {{ tag }}
      </span>
    </div>
    <div>{{ post.body }}</div>
  </section>
</template>

<script>
  export default {
    name: "BlogPost",
    head() {
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
