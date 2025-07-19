const { fields } = require('../locators/otpLocators');
const MailosaurClient = require('mailosaur');
const now = new Date();

const mailosaur = new MailosaurClient(process.env.API_KEY);
const emailAddress = `anything@${process.env.SERVER_ID}.mailosaur.net`;

Feature('OTP Flow with Mailosaur');

Scenario('Generate and verify OTP', async ({ I }) => {
    I.amOnPage('/');

    // ✅ Wait for login button
    I.waitForElement(fields.loginButton, 10);
    I.click(fields.loginButton);

    // ✅ Wait for email input
    I.waitForElement(fields.emailInput, 10);
    await mailosaur.messages.deleteAll(process.env.SERVER_ID);

    I.fillField(fields.emailInput, emailAddress);
    I.waitForElement(fields.submitButton, 10);
    I.click(fields.submitButton);

    // ✅ Wait for OTP field to appear
    I.waitForElement(fields.otpInput, 30);

    const email = await mailosaur.messages.get(process.env.SERVER_ID, {
        sentTo: emailAddress,
        receivedAfter: now
    }, { timeout: 30000 });

    const otp = email.html.body.match(/\d{6}/)[0];
    console.log('OTP:', otp);

    I.fillField(fields.otpInput, otp);
});