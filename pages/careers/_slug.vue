<template>
  <section class="section">
    <h2 class="is-size-3">{{ job.title }}</h2>
    {{ job.description }}
  </section>
</template>

<script>
  export default {
    name: "Career",
    computed: {
      job() {
        return this.$store.state.jobs[this.$route.params.slug]
      }
    }
  }
</script>

<style scoped>

</style>
