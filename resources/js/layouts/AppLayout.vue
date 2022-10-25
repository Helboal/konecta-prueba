<template>
  <div>
    <AppToolbar></AppToolbar>
    <b-breadcrumb :items="$route.meta.breadcrumbs" v-if="$route.path != '/'"></b-breadcrumb>
    <b-container>
      <router-view></router-view>
    </b-container>    
  </div>
</template>

<script>
import AppToolbar from './AppToolbar.vue'
export default {
  name: 'AppLayout',
  components: {
    AppToolbar
  }
}
</script>