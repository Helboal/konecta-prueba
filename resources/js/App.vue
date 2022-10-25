<template>
  <div id="app">
    <b-overlay class="vh-100" :show="overlay" variant="dark" rounded="sm" spinner-variant="primary"> 
      <router-view/>
    </b-overlay>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapGetters({
      overlay: 'overlay'
    })
  }
}
</script>