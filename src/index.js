// uiLogic.js

import performConversion from '../src/js/scripts.js';
import './css/styles.css';

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
