document.getElementById('conversion-form').addEventListener('submit', async function(event) {
  event.preventDefault();

  const usdAmount = parseFloat(document.getElementById('usd-amount').value);

  if (isNaN(usdAmount)) {
    document.getElementById('conversion-result').textContent = 'Please enter a valid USD amount.';
    return;
  }

  const apiUrl = `https://v6.exchangerate-api.com/v6/93892423c8a0950320cc7780/latest/USD`;
  const response = await fetch(apiUrl);
  const data = await response.json();

  const conversionRates = data.conversion_rates;
  const conversionResult = {};

  for (const currency in conversionRates) {
    conversionResult[currency] = (usdAmount * conversionRates[currency]).toFixed(2);
  }

  const resultHTML = Object.entries(conversionResult)
    .map(([currency, amount]) => `<p>${currency}: ${amount}</p>`)
    .join('');

  document.getElementById('conversion-result').innerHTML = resultHTML;
});