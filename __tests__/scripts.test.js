import { performConversion } from '../src/js/scripts.js';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        conversion_rates: {
          USD: 1,
          EUR: 0.85,
          GBP: 0.75,
        },
      }),
    ok: true,
  })
);

describe('Business Logic: performConversion', () => {
  test('converts USD to target currency', async () => {
    const usdAmount = 100;
    const targetCurrency = 'EUR';

    const { result, error } = await performConversion(usdAmount, targetCurrency);

    expect(error).toBeUndefined();
    expect(result).toBeDefined();
    expect(result[targetCurrency]).toBe('85.00');
  });

  test('handles invalid target currency', async () => {
    const usdAmount = 100;
    const targetCurrency = 'INVALID';

    const { result, error } = await performConversion(usdAmount, targetCurrency);

    expect(result).toBeUndefined();
    expect(error).toBe(`Currency '${targetCurrency}' not found in conversion rates.`);
  });

  test('handles API error', async () => {
    global.fetch.mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve({ error_message: 'API error' }),
        ok: false,
      })
    );

    const usdAmount = 100;
    const targetCurrency = 'EUR';

    const { result, error } = await performConversion(usdAmount, targetCurrency);

    expect(result).toBeUndefined();
    expect(error).toBe('API error');
  });

  test('handles fetch error', async () => {
    global.fetch.mockImplementationOnce(() => Promise.reject('Fetch error'));

    const usdAmount = 100;
    const targetCurrency = 'EUR';

    const { result, error } = await performConversion(usdAmount, targetCurrency);

    expect(result).toBeUndefined();
    expect(error).toBe('An error occurred while fetching data.');
  });
});
