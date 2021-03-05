import { expect } from "chai";
import { format } from "path";
import ContactUsPage from "../pageObjects/ContactUsPage";
import HomePage from "../pageObjects/HomePage";
import { CUSTOMER_SERVICE, EMAIL_ADDRESS, SUPPORT_MESSAGE } from "../helpers/Constants";
import browserCapabilities from "../config/browserCapabilities";
const request = require("sync-request");
const assert = require("assert");

// // Navigate to specific URL before each test
// beforeEach(() => {
//   browser.url("/");
// });

// describe("This is how we can set Hooks within describe", () => {
//   beforeEach(() => {
//     console.log("Hook inside describe block");
//   });
// });

// describe("When I am on Home page", () => {
//   it.only("should have the right title", () => {
//     browser.customCommand();
//     console.log("Test Number 1");
//     const title = browser.getTitle();
//     expect(title).to.equal(
//       "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js"
//     );
//   });

//   it.skip("test 2", () => {
//     console.log("Test Number 2");
//   });
// });

// describe("When I am on Home page 2", () => {
//   it.only("test 3", () => {
//     console.log("Test Number 3");
//   });

//   it("test 4", () => {
//     console.log("Test Number 4");
//   });
// });

// //TO-DO check how requests are sent
// describe("This is how we can use requests in our scripts", () => {
//   it("Use sync-request", () => {
//     let res = request("GET", "https://jsonplaceholder.typicode.com/users");
//     console.log("response body is:", res.getBody("utf-8"));
//     console.log("only response is:", res);
//     //Deserialize response
//     let responseData = JSON.parse(res.getBody("utf-8"));
//     console.log("Response after deserialization:", responseData);
//     //Get all Names
//     responseData.forEach((property) => {
//       console.log("Name is:", property.name);
//     });
//   });
// });

describe("I should be able to open Contact us page", () => {
  it("Should send Email to support center", () => {
    HomePage.navigateToContactUsPage();
    ContactUsPage.selectSubject(CUSTOMER_SERVICE);
    ContactUsPage.enterEmail(EMAIL_ADDRESS);
    ContactUsPage.enterMessage(SUPPORT_MESSAGE);
    ContactUsPage.submitEmail();
    //To Do asserts
    browser.pause(5000);
    expect(ContactUsPage.isEmailIsSent(), "Error message").to.equal(true);
  });
});
