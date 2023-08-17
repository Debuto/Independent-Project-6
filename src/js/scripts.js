import '../css/styles.css';


// uiLogic.js

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('conversion-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const usdAmount = parseFloat(document.getElementById('usd-amount').value);
    const targetCurrency = document.getElementById('target-currency').value;

    if (isNaN(usdAmount)) {
      document.getElementById('conversion-result').textContent = 'Please enter a valid USD amount.';
      return;
    }

    const { result, error } = await performConversion(usdAmount, targetCurrency);

    if (error) {
      document.getElementById('error-notification').textContent = `Error: ${error}`;
      document.getElementById('conversion-result').textContent = '';
      return;
    }

    const resultHTML = `<p>${targetCurrency}: ${result[targetCurrency]}</p>`;
    document.getElementById('conversion-result').innerHTML = resultHTML;
    document.getElementById('error-notification').textContent = '';
  });
});


// businessLogic.js

// Function to perform the currency conversion
async function performConversion(usdAmount, targetCurrency) {
  
  const apiUrl = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      const errorData = await response.json();
      const errorMessage = errorData.error_message || 'An error occurred during API call.';
      return { error: errorMessage };
    }

    const data = await response.json();
    const conversionRates = data.conversion_rates;

    if (!conversionRates[targetCurrency]) {
      return { error: `Currency '${targetCurrency}' not found in conversion rates.` };
    }

    const conversionResult = {};
    for (const currency in conversionRates) {
      conversionResult[currency] = (usdAmount * conversionRates[currency]).toFixed(2);
    }

    return { result: conversionResult };
  } catch (error) {
    return { error: 'An error occurred while fetching data.' };
  }
}

export { performConversion };
