document.getElementById('conversion-form').addEventListener('submit', async function(event) {
  event.preventDefault();

  const usdAmount = parseFloat(document.getElementById('usd-amount').value);
  const targetCurrency = document.getElementById('target-currency').value;

  if (isNaN(usdAmount)) {
    document.getElementById('conversion-result').textContent = 'Please enter a valid USD amount.';
    return;
  }

  const apiUrl = `https://v6.exchangerate-api.com/v6/93892423c8a0950320cc7780/latest/USD`;
  
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      const errorData = await response.json();
      const errorMessage = errorData.error_message || 'An error occurred during API call.';
      document.getElementById('error-notification').textContent = `Error: ${errorMessage}`;
      return;
    }
    
    const data = await response.json();

    const conversionRates = data.conversion_rates;

    if (!conversionRates[targetCurrency]) {
      document.getElementById('error-notification').textContent = `Error: Currency '${targetCurrency}' not found in conversion rates.`;
      document.getElementById('conversion-result').textContent = ''; 
      return;
    }

    const conversionResult = {};

    for (const currency in conversionRates) {
      conversionResult[currency] = (usdAmount * conversionRates[currency]).toFixed(2);
    }

    const resultHTML = `<p>${targetCurrency}: ${conversionResult[targetCurrency]}</p>`;

    document.getElementById('conversion-result').innerHTML = resultHTML;
    document.getElementById('error-notification').textContent = '';
  } catch (error) {
    document.getElementById('error-notification').textContent = 'An error occurred while fetching data.';
  }
});
