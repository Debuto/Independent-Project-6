# Project Name: Currency Exchanger

### By: **Deante Cacatian**

## Setup/Install Instructions:

* In order to run install and run project you'll need to have Node installed on your computer.
1. Clone Project, in  Bash terminal: `$ git clone https://github.com/Debuto/Independent-Project-6.git`
2. Navigate to project directory: `$ cd portfolio6-project`
3. Install dependencies: `$ npm install`
4. Build project and run server: `$ npm run start`

* Further explained: API setup
1. Go to this site: https://www.exchangerate-api.com/
2. Create an account and log in
3. Get an API key
4. Update key in BL in the JS to yours! (BE SURE TO READ GUIDLINES OF USAGE AND ADD THE KEY TO YOUR .ENV FILE!!!)
5. Refer to API keys official documentation for specifics.

<br>

## Description:

A currency exchange application

<br>

---

# Technologies used: 

* VScode
* Javasript
* HTML
* CSS
* Git Bash
* Github
* Jest
* Npm
* Babel
* Eslint

<br>

# Tests:
To run tests: `$ npm test`

---

# Known bugs:

Issue on form branch, able to build and start envvironment. When attempting to test environment with puppeteer module, getting eeror message, "Cannot find module 'puppeteer.js' from 'scripts.test.js'".

Troubleshooting -->

npm install --save-dev puppeteer
npm ls puppeteer
Checked imporrt statement (Correct)
Checked json (Correct)

#### Copyright (c) 2023 Deante Cacatian

- Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

- The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

- THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.