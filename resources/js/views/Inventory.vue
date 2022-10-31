<template>
    <div>
        <InventoryCreate v-if="InventoryCreateModal"></InventoryCreate>
        <InventoryEdit v-if="InventoryEdit.modal"></InventoryEdit>
        <b-row>
            <b-col cols="12">
                <b-card header-tag="header">
                    <template v-slot:header>
                        <h4 class="text-primary">Inventario</h4>          
                    </template>
                    <b-card-text>
                        <b-button variant="primary" class="mb-3" @click="create">Crear producto</b-button>
                        <b-form-group id="search" label="Buscar" label-for="input-search">
                            <b-form-input id="input-search" v-model="search"></b-form-input>
                        </b-form-group>
                        <b-table responsive bordered striped hover :items="inventoriesFiltered" :fields="headers" id="products-table" :per-page="perPage" :current-page="currentPage" show-empty>
                            <template v-slot:empty>
                                <h5 class="text-center">No se encontraron registros</h5>
                            </template>
                            <template v-slot:cell(price)="data">
                                {{ formatNumber(data.item.price) }}
                            </template>
                            <template v-slot:cell(created)="data">
                                {{ formatDate(data.item.created) }}
                            </template>                        
                            <template v-slot:cell(Acciones)="data">
                                <span class="text-primary" @click="edit(data.item.id)" style="cursor: pointer;">
                                <b-icon icon="pencil" variant="primary"></b-icon>                                    
                                </span>
                                <span class="text-danger" @click="destroy(data.item.id)" style="cursor: pointer;">
                                    <b-icon icon="trash" variant="danger"></b-icon>                                  
                                </span>
                            </template>
                        </b-table>
                        <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" align="center" aria-controls="products-table" first-number last-number></b-pagination>
                    </b-card-text>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>

import { mapGetters, mapMutations, mapActions } from 'vuex';
import InventoryEdit from '../components/inventory/InventoryEdit.vue'
import InventoryCreate from '../components/inventory/InventoryCreate.vue'

export default {
    name: 'Inventory',    
    components: {
        InventoryEdit, InventoryCreate
    },
    data() {
        return {
            perPage: 15,
            currentPage: 1,
            headers: [
                { key: 'id', label:'Id', class: 'text-center' },
                { key: 'name', label:'Nombre', class: 'text-center'},
                { key: 'reference', label:'Referencia', class: 'text-center'},
                { key: 'price', label:'Precio', class: 'text-center'},
                { key: 'weight', label:'Peso', class: 'text-center'},
                { key: 'stock', label:'Stock', class: 'text-center'},
                { key: 'category', label:'Categoría', class: 'text-center'},
                { key: 'created', label:'Creación', class: 'text-center'},
                { key: 'Acciones', label: 'Acciones', class: 'text-center'}
            ],
            search: ''
        }
    },
    mounted(){
        this.getInventories()
    },
    computed: {
        ...mapGetters({
            inventories: 'Inventory/inventories',
            InventoryEdit: 'Inventory/inventoryEdit',
            InventoryCreateModal: 'Inventory/inventoryCreateModal'
        }),
        rows() {
            return this.inventoriesFiltered.length
        },
        inventoriesFiltered() {
            if(this.search != '') {
                return this.inventories.filter(inventory => inventory.name.includes(this.search));
            }
            return this.inventories;
        }
    },
    methods: {
        ...mapMutations({
            setModalCreate: 'Inventory/SET_INVENTORY_CREATE_MODAL',
        }),
        ...mapActions({
            getInventories: 'Inventory/getInventories',
            inventoryEdit: 'Inventory/inventoryEdit',
            inventoryCreate: 'Inventory/inventoryCreate',
            deleteInventory: 'Inventory/deleteInventory'
        }),
        create() {
            this.inventoryCreate().catch( error => {
                this.handleError(error)
            })
            this.setModalCreate(true)
        },
        edit(value) {
            this.inventoryEdit(value).catch( error => {
                this.handleError(error)
            })
        },
        destroy(value) {
            swal({title: "¿Desea eliminar los datos del producto?", icon: "warning", closeOnClickOutside: false, closeOnEsc: false, dangerMode: true,
                buttons: {
                    cancel: { text: "Cancelar", value: false, visible: true, closeModal: true },
                    confirm: { text: "Eliminar", value: true, visible: true, closeModal: false},           
                }        
            })
            .then(enviar => {
                if (!enviar) throw null;
                var m = document.querySelector(".swal-button--cancel");
                m.setAttribute("disabled", "disabled");
                return this.deleteInventory(value);
            })
            .then( response => {                
                swal({title: "Se ha eliminado el producto con éxito", icon: "success", button: "Cerrar"})
            })
            .catch((error) => {
                if(error) {
                    this.handleError(error)
                }
                else {
                    swal.stopLoading();
                    swal.close();
                }
            });
        }
    }
}
</script>