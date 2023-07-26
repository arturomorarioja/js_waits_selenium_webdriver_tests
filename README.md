# Waits - Selenium WebDriver tests

## Purpose
Examples of Selenium WebDriver implicit and explicit waits in JavaScript.

When clicking on the "Submit" button, the application will create and display a "Click me" button after three seconds.

To wait for the button's creation, the test `testCreateElementWithImplicitWait()` sets an implicit wait of five seconds applicable to every action.

The test `testCreateElementWithExplicitWait()` does also set a five second wait, but an explicit one, only when locating the new button.

## Prerequisites
- Mozilla Firefox web browser
- NodeJS

## Instructions
1. Open the application in http://127.0.0.1:5500/ (default address for Visual Studio Code's Live Server extension)
2. Open a console and run `node tests\test.js`

## Tools
Selenium WebDriver / NodeJS / JavaScript / HTML5

## Author:
Arturo Mora-Rioja