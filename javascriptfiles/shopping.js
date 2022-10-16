// use function to get value of case product 
function updateCaseNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    } else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    calculateTotal()
}

function getInputValue(product) {
    const phoneInput = document.getElementById(product + '-number');
    const phoneNumber = parseInt(phoneInput.value);
    return phoneNumber;
}

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    // percentage ber korar niyom
    const taxAmount = (subTotal - 10) / 100;
    // total amoun 
    const totalPrice = subTotal + taxAmount;
    // update HTML file 
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = taxAmount;
    document.getElementById('total-price').innerText = totalPrice;
}
// count phone handler 
document.getElementById('phone-plus').addEventListener('click', function() {
    updateCaseNumber('phone', 1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function() {
    updateCaseNumber('phone', 1219, false);
});

// caseing event haldler 
document.getElementById('case-plus').addEventListener('click', function() {
    updateCaseNumber('case', 59, true);
});

document.getElementById('case-minus').addEventListener('click', function() {
    updateCaseNumber('case', 59, false);

});