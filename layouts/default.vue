<template>
  <div>
    <nav
      class="navbar header has-shadow is-primary"
      role="navigation"
      aria-label="main navigation">
      <div class="navbar-brand">
        <nuxt-link
          class="navbar-item"
          to="/">
          <img
            src="logo.png"
            alt="Allata"
            height="28">
        </nuxt-link>
      </div>
    </nav>

    <section class="main-content columns">

      <aside class="column is-2 section">
        <p class="menu-label is-hidden-touch">General</p>
        <ul class="menu-list">
          <li
            v-for="(item, key) of items"
            :key="key">
            <nuxt-link
              :to="item.to"
              exact-active-class="is-active">
              <b-icon :icon="item.icon"/> {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </aside>

      <div class="container column is-10">
        <nuxt />
      </div>

    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: 'Home', icon: 'home', to: { name: 'index' } },
        { title: 'Careers', icon: 'timelapse', to: { name: 'careers' } },
        { title: 'Blog', icon: 'folder', to: { name: 'blog' } }
      ]
    }
  },
  head () {
    return {
      title: 'Allata',
    }
  }
}
</script>
