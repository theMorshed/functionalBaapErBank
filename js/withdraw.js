document.getElementById('btn-withdraw').addEventListener('click', function(){
    // get withdraw input field and value of his
    const withdrawInputField = document.getElementById('input-withdraw');
    const withdrawInputFieldValue = withdrawInputField.value;
    if (withdrawInputFieldValue === '' || isNaN(withdrawInputFieldValue)) {
        alert('Please input a valid number');
        withdrawInputField.value = '';
        return;
    }
    const withdrawValue = parseFloat(withdrawInputFieldValue);
    
    // get withdraw display box
    const withdrawDisplayBox = document.getElementById('withdraw');
    const withdrawDisplayOldValue = withdrawDisplayBox.innerText;
    const withdrawDispalyValue = parseFloat(withdrawDisplayOldValue);
    
    // calculate the withdraw and total
    const balanceDisplayBox = document.getElementById('balance');
    const balanaceBoxValue = balanceDisplayBox.innerText;
    const balanceOldValue = parseFloat(balanaceBoxValue);
    withdrawDisplayBox.innerText = withdrawValue + withdrawDispalyValue;
    const balance = balanceOldValue - withdrawValue;
    balanceDisplayBox.innerText = balance;

    // clear the field 
    withdrawInputField.value = '';
});