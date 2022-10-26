export const mixins = {
    methods: {
      handleError(error){      
        var code = error.response.data.code;
        if(code == undefined){
          var status = error.response.status;
          this.errorResponse('', status);        
        }
        else{
          var message = error.response.data.error;         
          this.errorResponse(message, code);
        }
      },
      errorResponse(messages, code){
        var n=0;
        var message = "";
        if (typeof messages == 'string'){            
          message= "° " + messages;          
        }
        if (typeof messages == 'object'){                           
          for (n in messages){
            message += "° " + messages[n]+ "\n";             
          }
        }
        return swal({
          title: 'Se han econtrado algunos errores', 
          text: message, 
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
      },
    }
  }