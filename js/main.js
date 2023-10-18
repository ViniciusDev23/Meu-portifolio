let ul = document.querySelector('div .ul')

function openMenu(){
    ul.classList.add('open')
}

function closeMenu(){
    ul.classList.remove('open')
}
document.getElementById("enviar").addEventListener("click", function() {
    alert("Mensagem enviada, retornarei em breve!");
    document.querySelector(".mob-form-500").reset(); // Opcional: redefinir o formulário após o alerta
});