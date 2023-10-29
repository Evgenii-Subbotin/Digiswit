# Digiswit
Test Exercise

1. How to Use documentation.
- It have been created via Google Documents but should be available via MS Office or familiar tool (API Test Plan.docx)
  
2. How to Use API Automation
- Download SoapUI from Corporate site https://www.soapui.org/tools/soapui
- Install the package
- Open XML from branch by SoapUI tool (API-Automation-soapui-project.xml)
- Tests can be run from TestSuite section.
- notice: Failed (or more accurate, tests that can be done due to lack of test env functionality) are disabled
  
3.1 How to Configure UI Tests.
 - Download and Install Visual Studio Code
 - Download and Setup NodeJS on your computer.
 - Create a new folder for your project named “playwright-demo”.
 - In your project folder, run `npm install @playwright/test`;
 - Create a new file called ‘playwright.config.ts’ with the following code:
     import { PlaywrightTestConfig } from '@playwright/test';
     const config: PlaywrightTestConfig = {
       timeout: 5 * 60 * 1000, // Setup timeout to 5 minutes.  
     use: {    
     headless: false, // Turn off headless mode.
     },
     };
  - export default config;
  - Create a new folder inside your project named “tests”.
  - Place File SwagLabs.spec from Branch inside “playwright-demo/tests”
    
 3.2 How to run and verify UI tests.
    From the playwright-demo directory, run the following command: `npx playwright test` OR use right click on code with Run Tests in Current File
    Test execution proof are present in two forms:
      - Playwright own reporting (can be checked against test name and at right bottom corner of screen
      - Each test makes a screenshot at the end of tests (all screenshots are placed in folder SwagLabsSreens)
