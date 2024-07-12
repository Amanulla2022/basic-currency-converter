const amountInput = document.getElementById("amount");
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const resultDiv = document.getElementById("result");

const exchangeRates = {
  USD: { USD: 1, EUR: 0.85, INR: 74.85 },
  EUR: { USD: 1.18, EUR: 1, INR: 88.3 },
  INR: { USD: 0.013, EUR: 0.011, INR: 1 },
};

function convertCurrency() {
  const amount = parseFloat(amountInput.value);
  const from = fromCurrency.value;
  const to = toCurrency.value;

  if (isNaN(amount) || amount <= 0) {
    resultDiv.textContent = "Please enter a valid amount";
    return;
  }

  const rate = exchangeRates[from][to];
  const convertedAmount = (amount * rate).toFixed(2);
  resultDiv.textContent = `${amount} ${from} = ${convertedAmount} ${to}`;
}

document.querySelector("button").addEventListener("click", convertCurrency);
