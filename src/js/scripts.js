// businessLogic.js

// Function to perform the currency conversion
async function performConversion(usdAmount, targetCurrency) {
  const apiUrl = `https://v6.exchangerate-api.com/v6/93892423c8a0950320cc7780/latest/USD`;

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
