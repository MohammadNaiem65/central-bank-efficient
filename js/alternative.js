/* ---------------- Common Section ---------------- */
function getFieldAmount(fieldValue) {
    let getFieldValue = document.getElementById(fieldValue);
    const fieldValueFinal = parseFloat(getFieldValue.value);
    getFieldValue.value = "";
    return fieldValueFinal;
}
function previousAmount(setValue) {
    let getPreviousDeposit = document.getElementById(setValue);
    const previousAmountFinal = parseFloat(getPreviousDeposit.innerText);
    return previousAmountFinal;
}
function setNewValue(textId, textValue) {
    const previousAmount = document.getElementById(textId);
    previousAmount.innerText = textValue;
}
/* ---------------- Deposit Section ---------------- */
document.getElementById("deposit-btn").addEventListener("click", function () {
    const depositAmount = getFieldAmount("deposit-field")
    let previousDepositAmount = previousAmount("deposit-amount");
    previousDepositAmount = previousDepositAmount + depositAmount;
    setNewValue("deposit-amount", previousDepositAmount);
    let previousCurrentBalance = previousAmount("current-balance");
    previousCurrentBalance = previousCurrentBalance + depositAmount;
    setNewValue("current-balance", previousCurrentBalance);
})
/* ---------------- Withdraw Section ---------------- */
document.getElementById("withdraw-btn").addEventListener("click", function () {
    const withdrawAmount = getFieldAmount("withdraw-field")
    let previousCurrentBalance = previousAmount("current-balance");
    if (withdrawAmount <= 0) {
        alert("Please enter a valid amount!")
    }
    else if (withdrawAmount > previousCurrentBalance) {
        alert("Bap er bank a oto taka nai!!!")
        return
    }
    let previousWithdrawAmount = previousAmount("withdraw-amount");
    previousWithdrawAmount = previousWithdrawAmount + withdrawAmount;
    setNewValue("withdraw-amount", previousWithdrawAmount);
    previousCurrentBalance = previousCurrentBalance - withdrawAmount;
    setNewValue("current-balance", previousCurrentBalance);
})