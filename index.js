    //ver senha

    //inputs 
    const inputVerPass = document.querySelector("#form-pass")
    const inputVerPassConfirm = document.querySelector("#form-pass-confirm")

    //botões
    const btnVerPass = document.querySelector("#btn-ver-pass")
    const btnVerPassConfirm = document.querySelector("#btn-ver-pass-confirm")


    btnVerPass.addEventListener('click', function(){

        if (inputVerPass.type == "password"){
            inputVerPass.type = "text";
        } else {
            inputVerPass.type = "password"
        }

    })


    btnVerPassConfirm.addEventListener('click', function(){
        if (inputVerPassConfirm.type == "password"){
            inputVerPassConfirm.type = "text";
        } else {
            inputVerPassConfirm.type = "password"
        }
    })


    //Menu responsivo

    const iconeMenu = document.querySelector("#header > div.logo > div > i")
    const menuEsconder = document.querySelector("#menu-responsivo")

    iconeMenu.addEventListener("click", ()=>{
            
        if (menuEsconder.style.display === "none") {
            menuEsconder.style.display = "flex";
          } else {
            menuEsconder.style.display = "none";
          }
        
    })

    // formatar telefone

    const formato = {

        phone (value) {
      
          return value
      
            .replace(/\D/g, '')
      
            .replace(/(\d{2})(\d)/, '($1)$2')
      
            .replace(/(\d{4})(\d)/, '$1-$2')
      
            .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
      
            .replace(/(-\d{4})\d+?$/, '$1')
      
        }
      
      }
      
       
      
      document.querySelectorAll('input').forEach(($input) => {
      
        const field = $input.dataset.js
      
        $input.addEventListener('input', (e) => {
      
          e.target.value = formato[field](e.target.value)
      
        }, false)
      
      })

