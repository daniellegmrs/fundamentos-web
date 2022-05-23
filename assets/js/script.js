/*
case sensitive : reconhece letras maiúsculas e minúsculas 

por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementsByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()

*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '98%'
email.style.width = '98%'

function validaNome(){

    let txtNome = document.querySelector('#txtNome')
        if(nome.value.length < 3){
            txtNome.innerHTML = 'Nome inválido'
            txtNome.style.color = 'red'
            txtNome.style.fontSize = '14px'
            nomeOk = false
    }   else {
            txtNome.innerHTML = 'Nome válido'
            txtNome.style.color = 'green'
            nomeOk = true
    }
}

function validaEmail(){

    let txtEmail = document.querySelector('#txtEmail')
        if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
            txtEmail.innerHTML = 'Email inválido'    
            txtEmail.style.color = 'red'
            txtEmail.style.fontSize = '14px'
            emailOk = false
    }   else {
            txtEmail.innerHTML = 'Email válido'    
            txtEmail.style.color = 'green'
            emailOk = true
    }
}

function validaAssunto(){

    let txtAssunto = document.querySelector('#txtAssunto')
        if(assunto.value.length >= 100){
            txtAssunto.innerHTML = 'Limite máximo atigindo! Digite até 100 caracteres.'
            txtAssunto.style.color = 'red'
            txtEmail.style.fontSize = '13px'
            txtAssunto.style.display = 'block'
            assuntoOk = false
    }   else {
            txtAssunto.style.display = 'none'
            assuntoOk = true
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert('Formulário enviando com sucesso!')
    }else {
        alert('Preenche o formulário corretamente antes de enviar.')
    }
}

function mapaZoom(){
    mapa.style.width = '800px'
    mapa.style.height = '600px'
    
}

function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.height = '250px'

}