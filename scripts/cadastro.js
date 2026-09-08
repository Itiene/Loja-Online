const fuser=document.querySelector(".fuser")
const femail=document.querySelector(".femail")
const password=document.querySelector(".password")
const confirm_password=document.querySelector(".confirm_password")
const btn_criar=document.querySelector(".btn_criar")

btn_criar.addEventListener("click",(e)=>{
    e.preventDefault()

    let senha=password.value
    let confirmar=confirm_password.value
    let email=femail.value
    let usuario=fuser.value

    if(usuario!== ''){
        alert("nome correto")
    }else{
        alert("Precisa inserir o seu nome")
    }

    if(email !== '' && email.includes("@")){
        alert("email correto")
    }else{
        alert("Precisa inserir o seu email")
    }
    
    if(senha.length>=8 && 
        (
            senha.includes("!")|| 
            senha.includes("@")|| 
            senha.includes("$")||
            senha.includes("%")||
            senha.includes("&")||
            senha.includes("*")||
            senha.includes("(")||
            senha.includes(")")||
            senha.includes("#")
        )
    ){
        alert("Password Correta")
    }else{
        alert("Password Incorreta")
    }

    if((confirmar===senha)){
        alert("As senhas coincidem")
    }else{
        alert("As senhas não coincidem")
    }
})