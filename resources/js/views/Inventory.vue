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
                        <b-table responsive bordered striped hover :items="inventories" :fields="headers">
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
                    </b-card-text> 
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>

import { mapGetters, mapMutations, mapActions } from 'vuex';
//import Inventory from '../components/inventory/Inventory.vue'
import InventoryEdit from '../components/inventory/InventoryEdit.vue'
import InventoryCreate from '../components/inventory/InventoryCreate.vue'

export default {
    name: 'Inventory',    
    components: {
        InventoryEdit, InventoryCreate
    },
    data() {
        return {
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
            ]
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
        })
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