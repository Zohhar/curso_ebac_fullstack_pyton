const form = document.getElementById('form-calculo');

function validaCampo() {

const campoA = Number(document.getElementById('A').value); 
const campoB = Number(document.getElementById('B').value);
//const MensagemSucesso = `Parabéns <b>${A.value}</b> e maior que <b>${B.value}</b>`;
const MensagemSucesso ='Parabéns, o valor de B a maior que A';
const MensagemErro = 'Tente novamente, o valor de B deve ser maior que A';

//if (!isNaN(campoA) && !isNaN(campoB)) {
    if (campoA >= campoB) {
        //Desabilita sucess-mesage para A >= B
        
        //Habilita error-mesage
        const ContainerMensagemErro = document.querySelector('.error-message');
        ContainerMensagemErro.innerHTML = MensagemErro;
        ContainerMensagemErro.style.display = 'block';
        document.querySelector('.sucess-message').style.display = 'none';

        //Limpa o formulário
        A.value = '';
        B.value = '';
    } else {

        //Desabilita error-mesage para B > A
        
         //Habilita sucess-mesage
        const ContainerMensagemSucesso = document.querySelector('.sucess-message');
        ContainerMensagemSucesso.innerHTML = MensagemSucesso;
        ContainerMensagemSucesso.style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';

        //Limpa o formulário
        A.value = '';
        B.value = '';
    }  
    }
  //  else {
  //      alert("Por favor, insira valores númericos nos campos A e B.");
 //   } 
  //  }   

document.getElementById("btn-calcular").addEventListener("click", validaCampo);

form.addEventListener('submit', function(e){
    e.preventDefault();
})
console.log(form);