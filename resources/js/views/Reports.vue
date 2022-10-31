<template>
    <div>
        <h4 class="text-primary">Seleccione el reporte</h4>
        <hr>
        <b-row>
            <b-col v-for="(item, index) in items" :key="index" class="text-center">
                <router-link :to="item.to">
                    <b-button>{{ item.text }}</b-button>
                </router-link>
            </b-col>
        </b-row>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Reports',
    data() {
        return {
            items: [ 
                { id: 1, text: 'Producto con más stock', to: '/reports/more-stock' },
                { id: 2, text: 'Producto más vendido', to: '/reports/best-seller'},
            ]
        }
    }
}
</script>