const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let feildOne = document.getElementById("password-one")
let feildTwo = document.getElementById("password-two")
let generateBtn = document.getElementById("generate-btn")

let passwordLength = 12 // Password length

generateBtn.addEventListener('click', function(){
    // Generating random Characters
    function getRandomCharacter() {
        let randomChar = Math.floor(Math.random() * characters.length)
        return characters[randomChar]
    }
    // console.log(getRandomCharacter()); // Getting some random characters
    
    // Generating random password
    function generateRandomPassword() {
        let randomPassword = ""
        for (let i = 1; i < passwordLength; i++) {
            randomPassword += getRandomCharacter() // Pushing 12 characters in randomPassword
        }
        return randomPassword
    }
    // console.log(generateRandomPassword()); // Random 12 characters password generating
    
    // Adding generated passwords in password feilds
    feildOne.textContent = generateRandomPassword()
    feildTwo.textContent = generateRandomPassword()
});