//"appium:appPackage": "com.plenome.aayush",
//"appium:appWaitActivity": "com.plenome.aayush.MainActivity",
// "app : app9.apk"
//  specs: [ './Apptest/specs/Test1.ts']

describe("My Login application", () => {
  var originalTimeout;

  beforeEach(function () {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
  });

  afterEach(function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });

  it("It Sholud Validate the Moblie Number and Press on Get OTP Button", async () => {
    await driver.pause(10000);

    await (await $("~Get Started!")).click();
    await driver.pause(2000);

    await (await $("~phoneNumberInput")).setValue("709232767");
    await driver.pause(2000);

    const error_message_Moblie_number = await (await $("~errorText")).getText();
    if (error_message_Moblie_number === "~errorText") {
      await (await $("~phoneNumberInput")).setValue("7092327657");
      console.log("Setting phone number to 7092327657 based on Error text");
      await driver.pause(2000);
    } else {
      await (await $("~phoneNumberInput")).setValue("7092327667");
      console.log("Setting phone number to 7092327667 based on Error text");
    }

    await driver.pause(2000);
    await (await $("~agreeTermsCheckbox")).click();
    await driver.pause(2000);

    const shouldClickCloseButton = false;
    if (shouldClickCloseButton) {
      await (await $("~Close")).click();
      await driver.pause(2000);
    }
    await (await $("~checkBox")).click();
    await driver.pause(2000);

    await (await $("~Get OTP")).click();
    await driver.pause(5000);
  });

  it("It Sholud Validate ", async () => {
    await (await $("~OTPInput")).setValue("270423");
    await driver.pause(3000);

    await (await $("~MPININPUT")).setValue("2222");
    await driver.pause(2000);
    await (await $("~Confirm")).click();
  });
});

describe("Consultation Process", () => {
  var originalTimeout: number;

  beforeEach(function () {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
  });

  afterEach(function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });

  it("Appointment process sholud done", async () => {
    await driver.pause(7000);

    // await (await $('~QRPatient')).click();
    // await driver.pause(5000);

    // await (await $('~QRPatient')).isDisplayed();
    // await driver.pause(5000);

    // await (await $('~QrPatientBack')).click();
    // await driver.pause(5000);

    await (await $("~Consultation")).click();
    await driver.pause(5000);

    await (await $("~BookAppt")).click();
    await driver.pause(5000);

    await (await $("~Athome")).click();
    await driver.pause(5000);

    // await (await $('~Hospitals')).click();
    // await driver.pause(5000);
  });

  it("Appointment process to select Doctor", async () => {
    await (await $("~Doctors")).click();
    await driver.pause(5000);

    await (
      await $("~Search Hospitals/Doctors/Diseasessearch")
    ).setValue("Cardio");
    await driver.pause(5000);

    await (
      await $("~Search Hospitals/Doctors/Diseasessearch")
    ).setValue("Venkat");
    await driver.pause(5000);

    await (await $("~Book Appointment")).click();
    await driver.pause(5000);

    await (await $("~2024-09-05")).click();
    await driver.pause(5000);

    await (await $("~Confirm Slot")).click();
    await driver.pause(5000);

    await (
      await $("~Time slot from 19:13:00 to 23:13:00. Not selected")
    ).click();
    await driver.pause(5000);

    await (await $("~Confirm Slot")).click();
    await driver.pause(5000);
  });

  it("Appointment Payment", async () => {
    await (await $("~Pay Laterbutton")).click();
    await driver.pause(5000);
  });

  
  it("Appointment process to select Doctor", async () => {


await (await $('~Backbutton')).click();
await driver.pause(5000);
     
await (await $('~Hospitals')).click();
await driver.pause(5000);

await (await $('~Search Hospitals/Doctors/Diseasessearch')).setValue("Plenome");
await driver.pause(5000);

await (await $('~Book Appointment')).click();
await driver.pause(5000);

await (await $('~2024-08-17')).click();
await driver.pause(5000);

// Enter OTP code	  QrPatient

const otpInput = await $('~otpInput');
    const isOtpInputDisplayed = await otpInput.isDisplayed();

    if (!isOtpInputDisplayed) {
        console.log('OTP not received, exiting the test.');
        return;
    }
    await otpInput.setValue("270423");
    await driver.pause(2000);

it('should login with valid credentials', async () => {

    await driver.pause(10000)

    await (await $('~Get Started!')).click()
    await driver.pause(2000)

    await (await $('~phoneNumberInput')).setValue("709232767");
    await driver.pause(2000)

    const errormessage = await (await $('~errorText')).getText();
    if (errormessage === 'Expected Text') {
        await (await $('~phoneNumberInput')).setValue("7092327657");
        console.log('Setting phone number to 7092327657 based on Error text');
        await driver.pause(2000)

    } else {
        await (await $('~phoneNumberInput')).setValue("7092327667");
        console.log('Setting phone number to 7092327667 based on Error text');
    }

    await driver.pause(2000)
    await (await $('~agreeTermsCheckbox')).click()
    await driver.pause(2000)

    const shouldClickCloseButton = false;
    if (shouldClickCloseButton) {
        await (await $('~Close')).click();
        await driver.pause(2000);
    }
    await (await $('~checkBox')).click()
    await driver.pause(2000)

    await (await $('~Get OTP')).click()
    await driver.pause(5000)

    // await (await $('~open menu')).click()
    // await driver.pause(2000)

    // await (await $('~menu item log in')).click();sddsdqsq
    // await browser.pause(2000)

    // await (await $('~Username input field')).setValue("madhu.com");
    // await (await $('~Password input field')).setValue("10203040");
    // await (await $('~Login button')).click();
    // await browser.pause(2000)
});
});

});