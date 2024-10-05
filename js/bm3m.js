(function() {
    const secretCode = encryptedText;
    const inputField = document.getElementById('inputCode');
    const nextButton = document.getElementById('nextButton');

    function validateInput() {
        const userInput = inputField.value.trim();
        if (encrypt(userInput, 3) === secretCode) {
            var slm = decrypt("vwuhdw", 3); 
            nextButton.href = slm + ".html"; 
            nextButton.style.pointerEvents = "auto";
            nextButton.style.opacity = "1";
        } else {
            nextButton.href = "#";
            nextButton.style.pointerEvents = "none";
            nextButton.style.opacity = "0.5";
        }
    }

    inputField.addEventListener('keyup', validateInput);
})();