<template>
    <b-modal size="lg" v-model="modal" centered no-close-on-esc no-close-on-backdrop>
        <template v-slot:modal-header>      
            <h5>Editar Producto - {{ inventoryEdit.values.product.name }}</h5>
        </template>
        <template v-slot:default>
            <b-form ref="formEdit" @submit.prevent>
                <b-form-group id="name" label="Nombre producto" label-for="input-name">
                    <b-form-input id="input-name" v-model="data.name" :state="nameState" required></b-form-input>
                </b-form-group>
                <b-form-group id="reference" label="Referencia producto" label-for="input-reference">
                    <b-form-input id="input-reference" v-model="data.reference" :state="referenceState" required></b-form-input>
                </b-form-group>
                <b-form-group id="price" label="Precio producto" label-for="input-price">
                    <b-form-input id="input-price" v-model="data.price" :state="priceState" required></b-form-input>
                </b-form-group>
                <b-form-group id="weight" label="Peso producto" label-for="input-weight">
                    <b-form-input id="input-weight" v-model="data.weight" :state="weightState" required></b-form-input>
                </b-form-group>
                <b-form-group id="stock" label="Stock producto" label-for="input-stock">
                    <b-form-input id="input-stock" v-model="data.stock" :state="stockState" required></b-form-input>
                </b-form-group>
                <b-form-group id="category" label="Categoría producto" label-for="input-category">
                    <b-form-select id="input-category" v-model="data.category" :options="inventoryEdit.values.categories" :state="categoryState" value-field="id" text-field="category"></b-form-select>
                </b-form-group>
            </b-form>
        </template>
        <template v-slot:modal-footer>       
            <b-button variant="secondary" @click="closeModal">Cerrar</b-button>     
            <b-button variant="primary" @click="update">Continuar</b-button>
        </template>
    </b-modal>
</template>

<script>

import { mapGetters, mapMutations, mapActions } from 'vuex';

export default {
    name: 'InventoryEdit',
    data() {
        return {
            modal: true,
            nameState: null,
            referenceState: null,
            priceState: null,
            weightState: null,
            stockState: null,
            categoryState: null,
            data: {
                id: '',
                name: '',
                reference: '',
                price: '',
                weight: '',
                stock: '',
                category: ''
            }
        }
    },
    mounted() {
        this.data.id = this.inventoryEdit.values.product.id 
        this.data.name = this.inventoryEdit.values.product.name 
        this.data.reference = this.inventoryEdit.values.product.reference 
        this.data.price = this.inventoryEdit.values.product.price 
        this.data.weight = this.inventoryEdit.values.product.weight 
        this.data.stock = this.inventoryEdit.values.product.stock 
        this.data.category = this.inventoryEdit.values.product.category_id 
    },
    computed: {
        ...mapGetters({
            inventoryEdit: 'Inventory/inventoryEdit'
        })
    },
    methods: {
        ...mapMutations({
            setModal: 'Inventory/SET_INVENTORY_EDIT_MODAL',
            setModalValues: 'Inventory/SET_INVENTORY_EDIT_VALUES'
        }),
        ...mapActions({
            inventoryUpdate: 'Inventory/inventoryUpdate'
        }),
        closeModal() {
            this.setModal(false)
            this.setModalValues({})
        },
        validateForm() {
            const valid = this.$refs.formEdit.checkValidity()
            this.nameState = valid
            this.referenceState = valid
            this.priceState = valid
            this.weightState = valid
            this.stockState = valid
            this.categoryState = valid
            return valid
        },
        update() {
            if (!this.validateForm()) {
                return
            }
            swal({ title: "¿Desea editar los datos del producto?", icon: "warning", closeOnClickOutside: false, closeOnEsc: false,
                buttons: {
                    cancel:{ text: "Cancelar", value: false, visible: true, closeModal: true },
                    confirm:{ text: "Editar", value: true, visible: true, className: "bg-primary", closeModal: false }
                }
            })
            .then(enviar => {        
                if (!enviar) throw null;
                var m = document.querySelector(".swal-button--cancel");
                m.setAttribute("disabled", "disabled");        
                return this.inventoryUpdate(this.data);
            })
            .then( response => {        
                swal({title: "Se ha editado el producto con éxito",icon: "success",button: "Cerrar"})        
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