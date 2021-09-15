const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-clear');
const confirmBtn = document.querySelector('#btn-confirm');
const expensesList = document.querySelector('#expenses-list');
const totalExpenses = document.querySelector('#total-expenses');

let totalExpensesAmount = 0;

clear = () => {
    enteredAmount.value = '';
    enteredReason.value = '';
}
confirmBtn.addEventListener('click', () => {
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;

    if(enteredReason.trim().length <= 0 
    || enteredAmount <= 0 || enteredAmount.trim().length <= 0) {
        return;
    }

    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + ': $' + enteredAmount;

    expensesList.appendChild(newItem);

    totalExpensesAmount += Number(enteredAmount);
    totalExpenses.textContent = totalExpensesAmount;
    clear()
});

cancelBtn.addEventListener('click', clear);