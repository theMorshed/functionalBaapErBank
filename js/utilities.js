// one function for get value of both input field or html tag
/************
function getValue(fieldId) {
    const element = document.getElementById(fieldId);
    if (element.tagName.toLowerCase() === 'input') {
        const elementString = element.value;
        if (isNaN(elementString) || elementString === '') {
            alert('Please enter a valid number.');
            element.value = '';
            return undefined;
        }
        const elementValue = parseFloat(elementString);
        element.value = '';
        return elementValue;
    }else {
        const elementString = element.innerText;
        const elementValue = parseFloat(elementString);
        return elementValue;
    }
}
****************/

// get input field value function 
function getInputFieldValueById(fieldId) {
    const element = document.getElementById(fieldId);
    const elementString = element.value;
    if (isNaN(elementString) || elementString === '') {
        alert('Please enter a valid number.');
        element.value = '';
        return undefined;
    }
    const elementValue = parseFloat(elementString);
    element.value = '';
    return elementValue;
}

// get html tag value function
function getHTMLElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementString = element.innerText;
    const elementValue = parseFloat(elementString);
    return elementValue;
}