const puppeteer = require('puppeteer');

describe('Currency Conversion', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('../src/index.html'); 
  });

  afterAll(async () => {
    await browser.close();
  });

  test('Converts USD amount', async () => {
    const usdAmount = 100; 

    await page.type('#usd-amount', usdAmount.toString());
    await page.click('button[type="submit"]');
    await page.waitForSelector('#conversion-result');

    const conversionResult = await page.evaluate(() => {
      const results = Array.from(document.querySelectorAll('#conversion-result p'));
      return results.map(result => result.textContent);
    });

    console.log(conversionResult);
  });
});
