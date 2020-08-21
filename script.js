//Assignment Code + Event Listener to prompt questions when button pushed
document.querySelector("#generate").addEventListener("click", writePassword);

      // Various Arrays 
      var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
      var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
      var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

      // Variables
      var confirmLength = "";
      var confirmSpecialCharacter;
      var confirmNumericCharacter;
      var confirmUpperCase;
      var confirmLowerCase;

      // Initial Prompt
      function generatePassword() {
        var confirmLength = (prompt("How long would you like this awesome password to be??"));

      // Loop if answer is outside the parameters 
      while(confirmLength <= 7 || confirmLength >= 129) {
          alert("Why don't we try something at least 8 characters and no more than 128 characters");
          var confirmLength = (prompt("How long would you like this awesome password to be??"));
          } 

      // Repeat back
      alert(`Your password will have ${confirmLength} characters`);

      // Determine parameters of password 
      var confirmSpecialCharacter = confirm("Click OK to confirm you would like special characters");
      var confirmNumericCharacter = confirm("Click OK to confirm you would like numeric characters");    
      var confirmLowerCase = confirm("Click OK to confirm you would like lowercase characters");
      var confirmUpperCase = confirm("Click OK to confirm you would like uppercase characters");

      // Loop if answer is outside the parameters 
      while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
        alert("I don't have invisible ink, let's try that again");
        var confirmSpecialCharacter = confirm("Click OK to confirm you would like special characters");
        var confirmNumericCharacter = confirm("Click OK to confirm you would like numeric characters");    
        var confirmLowerCase = confirm("Click OK to confirm you would like lowercase characters");
        var confirmUpperCase = confirm("Click OK to confirm you would like uppercase characters");   
    } 

      // Combine the selected parameters
      var passwordCharacters = []
        
      if (confirmSpecialCharacter) {
        passwordCharacters = passwordCharacters.concat(specialChar)
      }

      if (confirmNumericCharacter) {
        passwordCharacters = passwordCharacters.concat(number)
      }
        
      if (confirmLowerCase) {
        passwordCharacters = passwordCharacters.concat(alphaLower)
      }

      if (confirmUpperCase) {
        passwordCharacters = passwordCharacters.concat(alphaUpper)
      }

      //Creating the final password
        var randomPassword = ""
        
        for (var i = 0; i < confirmLength; i++) {
          randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        }
        return randomPassword;
  }

      // Show password to user
      function writePassword() {
        var password = generatePassword();
        var passwordText = document.querySelector("#password");

        passwordText.value = password;
}