<template>
  <section class="section">
    <h2 class="is-size-2">{{ job.title }}</h2>
    {{ job.description }}
  </section>
</template>

<script>
  export default {
    name: "Career",
    async asyncData ({ store, params }) {
      return { job: store.state.jobs[params.slug]}
    },
    computed: {
    }
  }
</script>

<style scoped>

</style>
