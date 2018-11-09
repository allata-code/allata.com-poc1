<template>
  <section class="section">
    <h1 class="is-size-1">Work at Allata!</h1>
    <div
      v-for="(job, slug) in $store.state.jobs"
      :key="slug"
    >

      <nuxt-link
        :to="{ name: 'careers-slug', params: { slug: slug }}"
        exact-active-class="is-active">
        <h2 class="is-size-4">{{ job.title }}</h2>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
  export default {
    name: "Careers"
  }
</script>

<style scoped>

</style>
