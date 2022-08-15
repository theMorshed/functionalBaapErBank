document.getElementById('btn-deposit').addEventListener('click', function(){
    // deposit input field and his value
    const depositInputField = document.getElementById('input-deposit');
    const depositFieldValue = depositInputField.value;
    if (isNaN(depositFieldValue) || depositFieldValue === '') {
        alert('Please enter a valid number.');
        depositInputField.value = '';
        return;
    }
    const deposit = parseFloat(depositFieldValue);

    // take deposit display box item and this value
    const depositDisplayBox = document.getElementById('deposit');
    const depositDisplayValue = depositDisplayBox.innerText;
    const depositOldValue = parseFloat(depositDisplayValue);

    // total display field and his value 
    const balanceDisplayBox = document.getElementById('balance');
    const balanceDisplayValue = balanceDisplayBox.innerText;
    const balance = parseFloat(balanceDisplayValue);

    // sum the both deposit old and new value and show this in deposit display area
    const totalDeposit = deposit + depositOldValue;
    depositDisplayBox.innerText = totalDeposit;
    balanceDisplayBox.innerText = balance + deposit;

    // clear the input field
    depositInputField.value = '';
});