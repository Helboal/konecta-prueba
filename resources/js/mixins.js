export const mixins = {
    methods: {
        handleError(error) {
            var message = error.response.data.message;
            var errors = error.response.data.errors;
            this.errorResponse(message, errors);
        },
        errorResponse(message, errors) {
            var n=0;
            var error = "";
            if (typeof errors == 'string') {
                error = "° " + errors;
            }
            if (typeof errors == 'object') {
                for (n in errors){
                    error += "° " + errors[n]+ "\n";
                }
            }
            return swal({
                title: message,
                text: error,
                icon: 'error',
                className: 'swalError',
                buttons:{            
                    cancel:{ text: "Cerrar", value: null, visible: true, closeModal: true }
                }
            });
        },
        formatDate(date) {
            date = new Date(date)
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var ampm = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            minutes = minutes < 10 ? '0'+minutes : minutes;
            var strTime = hours + ':' + minutes + ' ' + ampm;      
            return date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear() + "  " + strTime;
        },
        formatNumber(value) {
            let val = (value/1).toFixed(2).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        }
    }
}