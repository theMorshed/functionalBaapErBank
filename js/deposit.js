document.getElementById('btn-deposit').addEventListener('click', function () {
    // deposit input field and his value
    const deposit = getInputFieldValueById('input-deposit');

    // take deposit display box item and this value
    const depositDisplayBox = document.getElementById('deposit');
    const depositOldValue = getHTMLElementValueById('deposit');

    // total display field and his value 
    const balanceDisplayBox = document.getElementById('balance');
    const balance = getHTMLElementValueById('balance');

    // sum the both deposit old and new value and show this in deposit display area
    const totalDeposit = deposit + depositOldValue;
    depositDisplayBox.innerText = totalDeposit;
    balanceDisplayBox.innerText = balance + deposit;
});