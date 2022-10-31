<template>
    <div>       
        <b-modal size="lg" v-model="modal" centered no-close-on-esc no-close-on-backdrop>
            <template v-slot:modal-header>      
                <h5>Agregar Producto - ({{ selectedProduct.id }}) {{ selectedProduct.name }}</h5>
            </template>
            <template v-slot:default>      
                <b-form ref="form" @submit.prevent>
                    <b-form-group id="quantity" label="Cantidad producto" label-for="input-quantity">
                        <b-form-input id="input-quantity" type="number" v-model="dataSelected.quantity" :state="quantityState" min="1" required></b-form-input>
                    </b-form-group>            
                </b-form>
            </template>
            <template v-slot:modal-footer>
                <b-button variant="secondary" @click="closeModal">Cerrar</b-button>     
                <b-button variant="success" @click="add">Agregar</b-button>
            </template>
        </b-modal>
        <!--  -->
        <div>
            <b-card title="Carrito de compras" tag="article" class="mb-2">
                <b-card-text>
                    <div v-if="data.length == 0">
                        <span>Carrito vacio.</span>
                    </div>
                    <div v-else>
                        <ul>
                            <template v-for="(product, index) in data">
                                <li :key="index">Producto: {{ product.name }} - Cantidad: {{ product.quantity }}</li>
                            </template>                        
                        </ul>
                    </div>
                </b-card-text>
                <b-button variant="success" @click="shop" :disabled="data.length == 0">Comprar</b-button>
            </b-card>
        </div>       
        <hr>
        <!--  -->
        <b-row>
            <b-col cols="12">
                <b-card header-tag="header">
                    <template v-slot:header>
                        <h4 class="text-primary">Productos</h4>          
                    </template>
                    <b-card-text>                        
                        <b-table responsive bordered striped hover :items="products" :fields="headers">
                            <template v-slot:cell(price)="data">
                                {{ formatNumber(data.item.price) }}
                            </template>
                            <template v-slot:cell(Acciones)="data">
                                <template v-if="validateButtons(data.item.id)">
                                    <span class="text-danger" @click="destroy(data.item.id)" style="cursor: pointer;">
                                        <b-icon icon="trash" variant="danger"></b-icon>
                                        Eliminar
                                    </span>
                                </template>
                                <template v-else>                                   
                                    <span class="text-success" @click="addModal(data.item)" style="cursor: pointer;">
                                    <b-icon icon="cart-plus" variant="success"></b-icon>
                                        Agregar
                                    </span>
                                </template>
                            </template>
                        </b-table>
                    </b-card-text> 
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    name: 'Sale',
    data() {
        return {
            modal: false,
            quantityState: null,
            data: [],
            selectedProduct: '',
            dataSelected: {
                quantity: ''
            },
            products: [],
            headers: [
                { key: 'id', label:'Id', class: 'text-center' },
                { key: 'name', label:'Nombre', class: 'text-center'},
                { key: 'reference', label:'Referencia', class: 'text-center'},
                { key: 'price', label:'Precio', class: 'text-center'},
                { key: 'weight', label:'Peso', class: 'text-center'},
                { key: 'stock', label:'Stock', class: 'text-center'},
                { key: 'category', label:'Categoría', class: 'text-center'},
                { key: 'Acciones', label: 'Acciones', class: 'text-center'}
            ]
        }
    },
    mounted() {
        this.getProducts();
    },
    methods: {
        getProducts() {
            axios.get('products').then((response) => {
                this.products =  response.data.data
            })
            .catch((error) => {
                reject(error)
            })
        },
        addModal(value) {
            this.modal = true;
            this.selectedProduct = value;
        },
        closeModal() {
            this.selectedProduct = '';
            this.dataSelected.quantity = '';
            this.modal = false;
        },
        validateForm() {
            const valid = this.$refs.form.checkValidity()            
            this.quantityState = valid
            return valid
        },
        add() {
            if (!this.validateForm()) {
                return
            }
            if(this.selectedProduct.stock < this.dataSelected.quantity) {
                swal({
                    title: 'No se puede completar la acción.', 
                    text: 'La cantidad seleccionada es superior al stock disponible.', 
                    icon: 'error',
                    className: 'swalError',
                    buttons:{            
                        cancel:{ text: "Cerrar", value: null, visible: true, closeModal: true }                         
                    }             
                });
                return false;
            }
            this.selectedProduct.quantity = this.dataSelected.quantity;
            this.data.push(this.selectedProduct);            
            this.selectedProduct = '';
            this.dataSelected.quantity = '';
            this.quantityState = null;
            this.modal = false;
        },
        destroy(value) {
            let i = this.data.map(product => product.id).indexOf(value)  
            this.data.splice(i, 1);
        },
        validateButtons(value) {
            let index = this.data.map(product => product.id).indexOf(value)
            if (index > -1){
                return true;
            }      
            return false;    
        },
        shop() {
            swal({ title: "¿Desea completar la compra?", icon: "warning", closeOnClickOutside: false, closeOnEsc: false,
                buttons: {
                    cancel:{ text: "Cancelar", value: false, visible: true, closeModal: true },
                    confirm:{ text: "Completar", value: true, visible: true, className: "bg-success", closeModal: false }
                }
            })
            .then(enviar => {        
                if (!enviar) throw null;
                var m = document.querySelector(".swal-button--cancel");
                m.setAttribute("disabled", "disabled");
                const formData = new FormData();               
                formData.append('purchase', JSON.stringify(this.data));               
                return new Promise((resolve, reject) => {
                    axios.post('order', formData).then((response) => {
                        this.getProducts();
                       swal({title: "Se ha completado la compra con exito",icon: "success",button: "Cerrar"})
                    })
                    .catch((error) => {
                        swal({
                        title: 'Ha ocurrido un error', 
                        text: error.response.data.message, 
                        icon: 'error',
                        className: 'swalError',
                        buttons:{            
                            cancel:{ text: "Cerrar", value: null, visible: true, closeModal: true }                         
                        }             
                        });
                    })
                });                
            })
        }
    },    
}
</script>