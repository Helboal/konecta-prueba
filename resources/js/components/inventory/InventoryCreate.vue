<template>
    <b-modal size="lg" v-model="modal" centered no-close-on-esc no-close-on-backdrop>
        <template v-slot:modal-header>
            <h5>Nuevo Producto</h5>
        </template>
        <template v-slot:default>      
        <b-form ref="formCreate" @submit.prevent>
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
                <b-form-select id="input-category" v-model="data.category" :options="inventoryCreate.values.categories" :state="categoryState" value-field="id" text-field="category"></b-form-select>
            </b-form-group>            
      </b-form>
        </template>
        <template v-slot:modal-footer>
            <b-button variant="secondary" @click="closeModal">Cerrar</b-button>
            <b-button variant="primary" @click="create">Continuar</b-button>
        </template>
  </b-modal>
</template>

<script>

import { mapGetters, mapMutations, mapActions } from 'vuex';

export default {
    name: 'InventoryCreate',
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
                name: '',
                reference: '',
                price: '',
                weight: '',
                stock: '',
                category: ''
            }
        }
    },
    computed: {
        ...mapGetters({
            inventoryCreate: 'Inventory/inventoryCreate'
        })
    },
    methods: {
        ...mapMutations({
            setModal: 'Inventory/SET_INVENTORY_CREATE_MODAL',
        }),
        ...mapActions({
            getInventories: 'Inventory/getInventories',
            inventoryStore: 'Inventory/inventoryStore'
        }),
        closeModal() {
            this.setModal(false)
        },
        validateForm() {
            const valid = this.$refs.formCreate.checkValidity()
            this.nameState = valid
            this.referenceState = valid
            this.priceState = valid
            this.weightState = valid
            this.stockState = valid
            this.categoryState = valid
            return valid
        },
        create() {
            if (!this.validateForm()) {
                return
            }
            swal({ title: "¿Desea enviar los datos del producto?", icon: "warning", closeOnClickOutside: false, closeOnEsc: false,
                buttons: {
                    cancel:{ text: "Cancelar", value: false, visible: true, closeModal: true },
                    confirm:{ text: "Enviar", value: true, visible: true, className: "bg-primary", closeModal: false }
                }
            })
            .then(enviar => {        
                if (!enviar) throw null;
                var m = document.querySelector(".swal-button--cancel");
                m.setAttribute("disabled", "disabled");
                return this.inventoryStore(this.data);
            })
            .then( response => {
                this.getInventories();
                swal({title: "Se ha creado el producto con éxito",icon: "success",button: "Cerrar"})
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