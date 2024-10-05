// Get input elements
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');

const promt2 = document.getElementById('promt2');
const promt3 = document.getElementById('promt3');

// AJAX function to send a POST request to PHP
function validateInput(inputField, inputValue, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "validate.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                callback(xhr.responseText); // Call the callback function with response
            }
        }
    };

    // Sending data to the PHP script
    xhr.send(inputField + "=" + encodeURIComponent(inputValue));
}

// Event listener for input 1 (name)
input1.addEventListener('input', () => {
    if (input1.value.trim() !== "") {
        // Check the name with the database
        validateInput("name", input1.value, (response) => {
            if (response === "valid") {
                promt2.classList.remove('hidden'); // Show second input if valid
            } else {
                alert("Name not found!");
            }
        });
    }
});

// Event listener for input 2 (last name)
input2.addEventListener('input', () => {
    if (input2.value.trim() !== "") {
        // Check the last name with the database
        validateInput("lastname", input2.value, (response) => {
            if (response === "valid") {
                promt3.classList.remove('hidden'); // Show third input if valid
            } else {
                alert("Last name not found!");
            }
        });
    }
});

// Event listener for input 3 (password)
input3.addEventListener('input', () => {
    if (input3.value.trim() !== "") {
        // Check the password with the database
        validateInput("password", input3.value, (response) => {
            if (response === "valid") {
                alert("All inputs are valid!");
            } else {
                alert("Password is incorrect!");
            }
        });
    }
});