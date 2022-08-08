

window.onload = function(){

    //ver senha

    //inputs 
    const inputVerPass = document.querySelector("#form-pass")
    const inputVerPassConfirm = document.querySelector("#form-pass-confirm")

    //botões
    const btnVerPass = document.querySelector("#btn-ver-pass")
    const btnVerPassConfirm = document.querySelector("#btn-ver-pass-confirm")


    let textPassword = {
        'text': ( el ) =>{ el.setAttribute ('type', 'password')},
        'password': ( el ) =>{ el.setAttribute ('type', 'text')},
    }

    //alternar senha
    btnVerPass.addEventListener('click', function(){
        textPassword[inputVerPass.type](inputVerPass)
    })

    //alternar confirmar senha
    btnVerPassConfirm.addEventListener('click', function(){
        textPassword[inputVerPassConfirm.type](inputVerPassConfirm)
    })

    

}