# OTP Automation POC | CodeceptJS + Mailosaur

✅ Automates OTP flow using [Mailosaur](https://mailosaur.com) for temporary email management.

✅ UI Automation handled by [CodeceptJS](https://codecept.io/) + Playwright.

✅ Clean folder structure with locators separated and `.env` used for secrets.

---

## 🚀 Features:
- ✅ Smart wait conditions (`waitForElement`)
- ✅ Reusable locators via `locators/otpLocators.js`
- ✅ Secrets hidden in `.env` file
- ✅ Ready for future upgrades like helper functions & Page Objects

---

## 📁 Folder Structure:
otp-mailosaur-poc/
│
├── locators/otpLocators.js
├── tests/otp_test.js
├── .env (not tracked)
└── README.md


---

## 📢 How to Use

1. Clone the repo:
```bash
git clone https://github.com/kapil971390/otp-mailosaur-poc.git

Install dependencies
npm install

Setup .env file:
API_KEY=your_mailosaur_api_key
SERVER_ID=your_server_id

Run Test:
npx codeceptjs run --debug

🛣️ Roadmap:
 Initial POC with OTP flow

 Reusable helper function for OTP fetch

 Page Object refactor

 GitHub Actions CI pipeline

---

## 📩 Let's Connect

Looking to automate OTP flows or end-to-end testing for your product?

📧 **Reach out for consultation!**  
📬 Email: veriqalabs@gmail.com
💼 LinkedIn: https://www.linkedin.com/in/veriqa-labs-274008376/


