document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawValue = getInputFieldValueById('input-withdraw');
    
    // get withdraw display box
    const withdrawDisplayBox = document.getElementById('withdraw');
    const withdrawDispalyValue = getHTMLElementValueById('withdraw');
    
    // calculate the withdraw and total
    const balanceDisplayBox = document.getElementById('balance');
    const balanceOldValue = getHTMLElementValueById('balance');
    if (withdrawValue > balanceOldValue) {
        alert('You dont have enough money to withdraw!!!');
    }
    else {
        if (withdrawValue !== undefined) {
            withdrawDisplayBox.innerText = withdrawValue + withdrawDispalyValue;
            const balance = balanceOldValue - withdrawValue;
            balanceDisplayBox.innerText = balance;
        }
    }
});