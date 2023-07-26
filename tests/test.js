const pageUnderTest = 'http://127.0.0.1:5500/';
const {By, Builder, until} = require('selenium-webdriver');
require('geckodriver');

async function testCreateElementWithImplicitWait() {
    const driver = await new Builder().forBrowser('firefox').build();

    // The element is created after 3 seconds,
    // so the following line is necessary to wait until it appears
    await driver.manage().setTimeouts( { implicit: 5000 } );

    await driver.get(pageUnderTest);

    await driver.findElement(By.css('#frmCreateButton input[type="submit"]')).click();
    await driver.findElement(By.id('btnOther')).click();

    await driver.quit();
}

async function testCreateElementWithExplicitWait() {
    const driver = await new Builder().forBrowser('firefox').build();

    await driver.get(pageUnderTest);

    await driver.findElement(By.css('#frmCreateButton input[type="submit"]')).click();
    await driver.wait(until.elementLocated(By.id('btnOther')), 5000);
    await driver.findElement(By.id('btnOther')).click();

    await driver.quit();
}

async function runTests() {
    await testCreateElementWithImplicitWait();
    await testCreateElementWithExplicitWait();
}

runTests();