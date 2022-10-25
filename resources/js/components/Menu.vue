<template>
  <div>
    <b-row>
      <b-col cols="12" lg="4" v-for="(item, index) in items" :key="index" class="my-2">
        <router-link :to="item.route">
          <b-card class="text-center text-secondary" :title="item.title">
            <b-card-text>
              <b-icon :icon="item.icon" font-scale="5" variant="primary"></b-icon>
            </b-card-text>
          </b-card>
        </router-link>
      </b-col>
    </b-row>    
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      items: [
        { title: 'Venta', icon: 'cart', route: '/sale' },
        { title: 'Reportes', icon: 'list', route: '/reports' },
        { title: 'Inventario', icon: 'box', route: '/inventory' }       
      ]
    }
  }
}
</script>