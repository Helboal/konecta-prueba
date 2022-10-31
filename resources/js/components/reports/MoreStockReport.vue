<template>
    <div class="my-5">
        <h1>Producto(s) con mayor stock</h1>
        <b-table-lite responsive small hover :items="products" :fields="headers">
            <template v-slot:cell(price)="data">
                {{ formatNumber(data.item.price) }}
            </template>
            <template v-slot:cell(created)="data">
                {{ formatDate(data.item.created) }}
            </template>
        </b-table-lite>
    </div>
</template>
<script>

import { mapGetters, mapMutations } from 'vuex';

export default {
    name: "ReportsMoreStock",
    data() {
        return {
            products: [],
            headers: [
                { key: 'id', label:'Id', class: 'text-center' },
                { key: 'name', label:'Nombre', class: 'text-center'},
                { key: 'reference', label:'Referencia', class: 'text-center'},
                { key: 'price', label:'Precio', class: 'text-center'},
                { key: 'weight', label:'Peso', class: 'text-center'},
                { key: 'stock', label:'Stock', class: 'text-center'},
                { key: 'category', label:'Categoría', class: 'text-center'},
                { key: 'created', label:'Creado', class: 'text-center'},
            ],
        }
    },
    mounted() {
        this.getProducts();
    },
    computed : {
        ...mapGetters({
            overlay: 'overlay'
        })
    },
    methods: {
        ...mapMutations({
            setOverlay: 'SET_OVERLAY'
        }),
        getProducts() {
            this.setOverlay(true);
            axios.get('reports/max-stock').then((response) => {
                this.products =  response.data.data;
                this.setOverlay(false);
            })
            .catch((error) => {
                reject(error)
            })
        }
    }
}
</script>