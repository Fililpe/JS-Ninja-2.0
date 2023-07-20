let passwordLength = '16'
const inputEl = document.querySelector("#password")

function generatePassword() {
    const chars = "abcdefghjklmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ123456789.+-[]*_@#$?"

    let password = ""

        for (let i = 0; i < passwordLength; i++) {
            const randomNumber = Math.floor(Math.random() * chars.length)
            password += chars.substring(randomNumber, randomNumber + 1)
        }

    
     inputEl.value = password    
    }

        // função copy pensada por mim utilizando function anonima
    const copyButtonEl = document.querySelector("#copy")
    copyButtonEl.addEventListener("click", function () {
        navigator.clipboard.writeText(inputEl.value)
    })

    const passwordLengthEl = document.querySelector("#password-length")
    passwordLengthEl.addEventListener("input", function(){
        passwordLength = passwordLengthEl.value 
        generatePassword()
    })

    /*  função copy do projeto original  */

    // function copy() {
    //     navigator.clipboard.writeText(inputEl.value)
    // }
  
    // const copyButtonEl = document.querySelector("#copy")
    // copyButtonEl.addEventListener("click", copy)

generatePassword()