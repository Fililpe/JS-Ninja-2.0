const inputEl = document.querySelector("#password")
const upperCaseCharsEl = document.querySelector("#uppercase-check")
const numberCharsEl = document.querySelector("#number-check")
const symbolCharsEl = document.querySelector("#symbol-check")
const securityIndicatorBarEl = document.querySelector("#security-indicator-bar")

let passwordLength = "16";

function generatePassword() {
  let chars = "abcdefghjklmnpqrstuvwxyz"

  const upperCaseChars = "ABCDEFGHJKLMNPQRSTUVWXYZ"
  const numberChars = "123456789"
  const symbolChars = "?!@&*()[]$"

  if (upperCaseCharsEl.checked) {
    chars += upperCaseChars;
  }
  if (numberCharsEl.checked) {
    chars += numberChars;
  }
  if (symbolCharsEl.checked) {
    chars += symbolChars;
  }

  //String vazia. Essa variável será usada para armazenar a senha gerada.
  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }

  inputEl.value = password

  calculateQuality()
}

function calculateQuality() {

    const percent = Math.round((passwordLength / 64) * 100)
    
    console.log(percent)

    securityIndicatorBarEl.style.width = `${percent}%`
}

const passwordLengthEl = document.querySelector("#password-length");
passwordLengthEl.addEventListener("input", function () {
  passwordLength = passwordLengthEl.value;
  document.querySelector("#password-length-text").innerText = passwordLength;
  generatePassword();
});

upperCaseCharsEl.addEventListener("click", generatePassword);
numberCharsEl.addEventListener("click", generatePassword);
symbolCharsEl.addEventListener("click", generatePassword);

function copy() {
  navigator.clipboard.writeText(inputEl.value);
}

document.querySelector("#copy-1").addEventListener("click", copy);
document.querySelector("#copy-2").addEventListener("click", copy);

generatePassword();

// Guia para estudo //
/*
linha 8:
    const randomNumber = Math.floor(Math.random() * chars.length):
        Nesta linha, estamos gerando um número aleatório entre 0 e o comprimento da string 'chars'.
        Isso é feito multiplicando 'Math.random()', que retorna um número aleatório entre 0 e 1, pelo comprimento de 'chars'.

         'Math.floor()' é usado para arredondar o número para baixo e garantir que seja um número inteiro.
*/

/*
linha 9:
    password += chars.substring(randomNumber, randomNumber + 1):
        Aqui estamos adicionando um caractere aleatório à senha.
        'chars.substring(randomNumber, randomNumber + 1)' retorna um trecho da string 'chars', começando no índice 'randomNumber' e indo até o próximo caractere.

         O operador '+=' é usado para concatenar o caractere à senha existente.
*/

/*
linha 12,13
    const inputEl = document.querySelector("#password"):
        Nesta linha, estamos utilizando o método 'querySelector()' do objeto 'document' para selecionar um elemento no documento HTML o id '#password'

    inputEl.value = password:
        Aqui, estamos atribuindo o valor da variável 'password' ao atributo 'value' do elemento selecionado 'inputEl'.
            o elemento selecionado é um campo de entrada (input), isso significa que estamos definindo o valor desse campo de entrada com a senha gerada.    
*/
