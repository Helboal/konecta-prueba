<template>
  <b-navbar type="dark" variant="dark">
    <b-navbar-brand href="/">
      <b-img :src="require('../assets/logo.svg')" fluid alt="Logo"></b-img>      
    </b-navbar-brand>               
    <b-navbar-nav class="ml-auto">
      <span class="text-white">Hector Bolaño</span>           
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: 'AppToolbar'
}
</script>