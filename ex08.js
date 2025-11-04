// ex07.js

function isNationalIDValid(name, age, zip, password) {
	if (name != "" && age > 17 && age < 66 && zip > 0 && zip < 99999 && password != "azerty" && password != "qwerty" && password != "1234") {
      return true
    }
  else {
    return false
  }
}

console.log(isNationalIDValid("", 18, 69100, "hello"));
console.log(isNationalIDValid("John", 18, 69100, "amerty"));