function encrypt(text, shift) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char.match(/[a-z]/i)) {
            let code = text.charCodeAt(i);
            let isUpperCase = char === char.toUpperCase();
            let base = isUpperCase ? 65 : 97; 
            char = String.fromCharCode(((code - base + shift) % 26) + base);
        }
        result += char;
    }
    return result;
}
function decrypt(text, shift) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char.match(/[a-z]/i)) {
            let code = text.charCodeAt(i);
            let isUpperCase = char === char.toUpperCase();
            let base = isUpperCase ? 65 : 97;
            char = String.fromCharCode(((code - base - shift + 26) % 26) + base);
        }
        result += char;
    }
    return result;
}

function encryptDecrypt(text, shift) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        
        if (char.match(/[0-9]/)) {  // Gestion des chiffres
            let code = parseInt(char);
            let newChar = (code + shift + 10) % 10;  // Ajoute le décalage et gère le cas des nombres négatifs
            char = newChar.toString();
        }
        
        result += char;
    }
    return result;
}



var encryptedText = "hjbswh";
var encryptedText1 = "foh5";
var encryptedText2 = "yduwd12";
var encryptedText3 = "w";
var  variable_page = "qhax"
var formule = "3f;k5" 
var pass = "99999999" ;
