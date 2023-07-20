const inputEl = document.querySelector("#password")

let passwordLength = 16

function generatePassword() {
    const chars = "abcdefghjklmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ123456789.+-[]*_@#$?"

    //String vazia. Essa variável será usada para armazenar a senha gerada.
    let password = ""

    for (let i = 0; i < passwordLength ; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNumber, randomNumber + 1)
    }
    
    inputEl.value = password
    
} 

    const passwordLengthEl = document.querySelector("#password-length")
    passwordLengthEl.addEventListener("input", function() {
        passwordLength = passwordLengthEl.value
        generatePassword()
    })


    function copy() {
        navigator.clipboard.writeText(inputEl.value)
    }
  
    const copyButtonEl = document.querySelector("#copy")
    copyButtonEl.addEventListener("click", copy)

       /* função copy pensada por mim utilizando function anonima */
    //  const copyButtonEl = document.querySelector("#copy")
    //  copyButtonEl.addEventListener("click", function () {
    //      navigator.clipboard.writeText(inputEl.value)
    //  })
 

    
generatePassword()


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