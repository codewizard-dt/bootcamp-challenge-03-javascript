// Assignment Code
var generateBtn = document.querySelector("#generate");
var message = document.querySelector("#message");

const specialChars = ` !"#$%&'()*+,-.\/:;<=>?@\[\\\]^_\`{|}~`.split('')
const upperCase = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`.split('')
const lowerCase = `abcdefghijklmnopqrstuvwxyz`.split('')
const digit = `0123456789`.split('')

function generatePassword() {
  // Collect input from user
  const useSpecialChars = confirm('Use special characters? (cancel for no)')
  const useUpperCase = confirm('Use upper case letters? (cancel for no)')
  const useLowerCase = confirm('Use lower case letters? (cancel for no)')
  const useDigit = confirm('Use numbers? (cancel for no)')
  let length = Number(prompt('Password length (8 to 128)'))

  // Create array of available characters
  // Keep track of which sets are included
  const availableChars = [];
  const availableMsg = [];
  if (useSpecialChars) {
    availableChars.push(...specialChars)
    availableMsg.push('special characters')
  }
  if (useUpperCase) {
    availableChars.push(...upperCase)
    availableMsg.push('upper case letters')
  }
  if (useLowerCase) {
    availableChars.push(...lowerCase)
    availableMsg.push('lower case letters')
  }
  if (useDigit) {
    availableChars.push(...digit)
    availableMsg.push('numbers')
  }

  // If no available characters display error and break
  if (availableChars.length === 0) {
    message.textContent = "You must include at least one set of characters"
    return ''
  } else message.textContent = ""

  // If length is invalid ask user for valid input
  while (!length || length < 8 || length > 128) {
    length = Number(prompt('INVALID. Please enter a password length between 8 and 128'))
  }

  // Generate pw incrementally with random characters
  let pw = ''
  while (pw.length < length) {
    pw += availableChars[Math.floor(Math.random() * availableChars.length)]
  }

  // Generate a message for the user
  message.innerHTML = `Using: ${availableMsg.join(', ')}<br>Length: ${length}`

  return pw;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
