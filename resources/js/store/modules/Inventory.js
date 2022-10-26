export default {
    namespaced: true,
    state: {
        inventories: [],
        inventoryCreateModal: false,
        inventoryCreate: {
            values: {}
        },
        inventoryEdit: {
          modal: false,
          values: {}
        }
    },
    getters: {
        inventories(state){
          return state.inventories;
        },
        inventoryCreate(state) {
            return state.inventoryCreate
        },
        inventoryEdit(state) {
          return state.inventoryEdit
        },
        inventoryCreateModal(state) {
          return state.inventoryCreateModal
        }
    },
    mutations: {
        SET_INVENTORIES(state, values) {
          state.inventories = values
        },
        SET_INVENTORY_CREATE_VALUES(state, value) {
            state.inventoryCreate.values = value
        },
        SET_INVENTORY_CREATE_MODAL(state, value) {
          state.inventoryCreateModal = value
        },
        PUSH_INVENTORY(state, value){
          state.inventories.push(value);
        },
        SET_INVENTORY_EDIT_MODAL(state, value) {
          state.inventoryEdit.modal = value
        },
        SET_INVENTORY_EDIT_VALUES(state, values) {
          state.inventoryEdit.values = values
        },
        SET_UPDATE_VALUES(state, values) {
          var editedIndex = state.inventories.map(inventory => inventory.id).indexOf(values.id)
          if (editedIndex > -1){
            Object.assign(state.inventories[editedIndex], values)          
          }      
          return;       
        },
        SPLICE_INVENTORY(state, value){
          let i = state.inventories.map(inventory => inventory.id).indexOf(value)  
          state.inventories.splice(i, 1)
        },
    },
    actions: {
        getInventories({ commit }) {
            return new Promise((resolve, reject) => {
              axios.get('products').then((response) => {
                    commit('SET_INVENTORIES', response.data.data)
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
            });
        },
        inventoryCreate({ commit }) {
            return new Promise((resolve, reject) => {
                axios.get('products/create').then((response) =>{
                    commit('SET_INVENTORY_CREATE_VALUES', response.data.data)
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
            });
        },
        inventoryStore({commit}, payload) {
            const formData = new FormData();
            for(var key in payload) {
                formData.append(key, payload[key]);
            }
            return new Promise((resolve, reject) => {
                axios.post('products', formData).then((response) => {
                    commit('PUSH_INVENTORY', response.data.data);
                    console.log(response.data.data)
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
            });
        },
        inventoryEdit({ commit }, value) {
            return new Promise((resolve, reject) => {
                axios.get('products/' + value + '/edit').then((response) =>{
                    commit('SET_INVENTORY_EDIT_VALUES', response.data.data)
                    commit('SET_INVENTORY_EDIT_MODAL', true)
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
            });
        },
        inventoryUpdate({commit}, payload) {
            var value = payload.id;            
            return new Promise((resolve, reject) => {
                axios.put('products/' + value, payload).then((response) => {          
                    commit('SET_UPDATE_VALUES', response.data.data);
                    resolve(response)   
                })
                .catch((error) => {
                    reject(error)
                })
            })
        },
        deleteInventory({ commit }, value) {
            return new Promise((resolve, reject) => {
                axios.delete('products/' + value).then((response) => {
                    commit('SPLICE_INVENTORY', value);
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
            });      
        },
    }
}