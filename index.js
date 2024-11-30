document.getElementById('credit-card').addEventListener('input', function (event) {
    let input = event.target.value;
    
    // Remove all non-digit characters
    input = input.replace(/\D/g, '');
    
    // Format the input as groups of four digits
    let formattedInput = '';
    for (let i = 0; i < input.length; i++) {
        if (i > 0 && i % 4 === 0) {
            formattedInput += ' '; // Add a space after every four digits
        }
        formattedInput += input[i];
    }

    // Update the input field value
    event.target.value = formattedInput;
});

document.getElementById('expiration-data').addEventListener('input',function(event){
    let input = event.target.value;

    input = input.replace(/\D/g,'');

    let formattedInput = '';
    for (let i = 0; i < input.length; i++){
        if (i > 0 && i === 2){
            formattedInput += '/';
        }
        formattedInput += input[i];
    }

    event.target.value = formattedInput;
})
