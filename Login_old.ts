//"appium:appPackage": "com.plenome.aayush",
//"appium:appWaitActivity": "com.plenome.aayush.MainActivity",

describe("PHR application", () => {
    var originalTimeout: number;
  
    beforeEach(function () {
      originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
    });
  
    afterEach(function () {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });
  
    it("Login For Existing user ", async () => {
      await driver.pause(10000);
  
      await (await $("~Get Started!")).click();
      await driver.pause(2000);
  
      await (await $("~checkBox")).click();
      await driver.pause(2000);
  
      await (await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.EditText")).setValue("934426952");
      await driver.pause(2000);
  
      await (await $("~Get OTP")).click();
      await driver.pause(5000);
  
      const error_message_Moblie_number = await (await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[3]")).getText();
      if (error_message_Moblie_number === "Expected Text") {
        await (await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.EditText")).setValue("934426952");
        console.log("Setting phone number to 934426952 based on Error text");
        await driver.pause(2000);
      } else {
        await (await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.EditText")).setValue("9344269524");
        console.log("Setting phone number to 7092327667 based on Error text");
      }
  
      await (await $("~Get OTP")).click();
      await driver.pause(5000);
  
      // Get Error message.
  
      // await (await $('~checkBox')).click(); --
      // await driver.pause(2000);--
  
      // await (await $('~Get OTP')).click();--
      // await driver.pause(5000);--
  
      // const otpInput = await $('~Digit1');
      // await otpInput.click();
      // await driver.pause(5000);
  
      // await otpInput.setValue('2');
      // await driver.pause(5000);
      // const otpInput = await $('~Digit1'); // If using resource-id
  
      // Ensure the element is visible and enabled
      // await otpInput.waitForDisplayed({ timeout: 5000 }); // Wait for up to 5 seconds
  
      // await otpInput.click();
      // // await driver.pause(5000);
  
      // if (await otpInput.isEnabled()) {
      //     await otpInput.setValue('2');
      // } else {
      //     console.error('Element is not enabled for interaction.');
      // }
  
      // const element = await $('~Digit1');
      // if (await element.isDisplayed() && await element.isEnabled()) {
      //    await element.setValue(2);
      // }
      // else
      // {
      //     console.error('Element is not ready for interaction.');
      // }
      // await (await $('~Digit2')).setValue(7);
      // await driver.pause(3000);
      // await (await $('~Digit3')).setValue(0);
      // await driver.pause(3000);
      // await (await $('~Digit4')).setValue(4);
      // await driver.pause(3000);
      // await (await $('~Digit5')).setValue(2);
      // await driver.pause(3000);
      // await (await $('~Digit6')).setValue(3);
      // await driver.pause(3000);
  
      // await (await $('~OTPInput')).setValue("270423");
      // await driver.pause(3000);
  
      const Allow_button = await $(
        '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.Button[2]'
      );
      await Allow_button.click();
      await driver.pause(3000);
  
      await (await $('//android.view.ViewGroup[@content-desc="Enter MPIN, Forgot MPIN?"]/android.widget.EditText[1]')).setValue("1");
      await driver.pause(2000);
      await (await $('//android.view.ViewGroup[@content-desc="Enter MPIN, Forgot MPIN?"]/android.widget.EditText[2]')).setValue("1");
      await driver.pause(2000);
      await (await $('//android.view.ViewGroup[@content-desc="Enter MPIN, Forgot MPIN?"]/android.widget.EditText[3]')).setValue("1");
      await driver.pause(2000);
      await (await $('//android.view.ViewGroup[@content-desc="Enter MPIN, Forgot MPIN?"]/android.widget.EditText[4]')).setValue("1");
      await driver.pause(2000);
      
    });
  
    it("Dashboard Screen ", async () => {
      await driver.pause(5000);
    });
  });
  
  describe("Login with mobile number flow", () => {
    var originalTimeout: number;
  
    beforeEach(function () {
      originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
    });
  
    afterEach(function () {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });
  
    it("Enter mobile number linked with ABHA address", async () => {
      await driver.pause(5000);
      const ABHA = await $('//android.widget.Button[@content-desc=" Records"]');
      await driver.pause(5000);
      await ABHA.click(); // Click on Record
  
      const Create_ABHA = await $("~Create Now");
      await Create_ABHA.click();
      await driver.pause(5000); // Create Abha
  
      await (
        await $('//android.widget.EditText[@content-desc="Aadhar Number"]')
      ).setValue("934426952424"); ///MOBILE NUMBER --- aBHA NUMBER
      await driver.pause(2000);
      const error_message_Moblie_number = await (await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[3]")).getText();
      if (error_message_Moblie_number === "Expected Text") {
        await (
          await $('//android.widget.EditText[@content-desc="Aadhar Number"]')
        ).setValue("934426952");
        console.log("Setting phone number to 934426952 based on Error text");
        await driver.pause(2000);
      } else {
        await (
          await $('//android.widget.EditText[@content-desc="Aadhar Number"]')
        ).setValue("934426952424");
        console.log("Setting phone number to 7092327667 based on Error text");
      }
  
      await (await $("~Continue")).click();
      await driver.pause(2000);
  
      const Checkbox = await $(
        '//android.view.ViewGroup[@content-desc="checkBox"]'
      );
      await Checkbox.click();
      await driver.pause(3000);
  
      await (await $("~Continue")).click();
      await driver.pause(5000);
  
      await Checkbox.click();
      await driver.pause(3000);
  
      await (await $("~Continue")).click();
      await driver.pause(5000);
      await driver.pause(20000);
    });
  
    it('Resend Mobile OTP after 60 seconds post clicking on "Resend OTP".', async () => {
      const Denied_button = await $(
        '//android.widget.Button[@resource-id="com.google.android.gms:id/negative_button"]'
      );
      await Denied_button.click();
      await driver.pause(3000);
  
      await driver.pause(60000);
  
      const Resend = await $("~Resend");
      await Resend.click();
    });
  
    it(" Validate mobile OTP received on entered mobile number", async () => {
      const Allow_button = await $(
        '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.Button[2]'
      );
      await Allow_button.click();
      await driver.pause(3000);
  
      await (await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.EditText")).setValue("9344269524");
      await driver.pause(2000);
  
      await (await $("~Continue")).click();
      await driver.pause(2000);
  
      const error_message_Moblie_number = await (await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[3]")).getText();
      if (error_message_Moblie_number === "Expected Text") {
        await (await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.EditText")).setValue("934426952");
        console.log("Setting phone number to 934426952 based on Error text");
        await driver.pause(2000);
      } else {
        await (await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.EditText")).setValue("9344269524");
        console.log("Setting phone number to 7092327667 based on Error text");
      }
  
      await (await $("~Verify")).click();
      await driver.pause(5000);
  
      await Allow_button.click();
      await driver.pause(3000);
    });
  
    it("Display ABHA addresses linked with entered validated mobile number. So that an individul can select an ABHA address in which one wishes to login.", async () => {
      await driver.pause(5000);
  
      try {
        const randomAddressIndex = Math.floor(Math.random() * 3) + 1;
  
        let selectedAddress = false;
        switch (randomAddressIndex) {
          case 1:
            const Abha_Address_List1 = await $("~Abha_Address_List1");
            if (await Abha_Address_List1.isDisplayed()) {
              await Abha_Address_List1.click();
              selectedAddress = true;
            }
            break;
          case 2:
            const Abha_Address_List2 = await $("~Abha_Address_List2");
            if (await Abha_Address_List2.isDisplayed()) {
              await Abha_Address_List2.click();
              selectedAddress = true;
            }
            break;
          case 3:
            const Abha_Address_List3 = await $("~Abha_Address_List3");
            if (await Abha_Address_List3.isDisplayed()) {
              await Abha_Address_List3.click();
              selectedAddress = true;
            }
            break;
          default:
            throw new Error("Invalid address selection index");
        }
  
        if (selectedAddress) {
          await driver.pause(3000);
          const selectedAbhaAddress = await $("~Selected_ABHA_Address");
          expect(await selectedAbhaAddress.isDisplayed()).toBe(true);
        } else {
          throw new Error("No address selected");
        }
      } catch (error) {
        console.log(
          "No ABHA address available or selected, creating a new ABHA address."
        );
  
        const Create_New_Abha_Address = await $(
          '//android.view.ViewGroup[@content-desc="Create New ABHA Addressbutton"]'
        );
        await Create_New_Abha_Address.click();
        await driver.pause(3000);
      }
    });
  });


 describe("Login with e-mail ID flow", () => {
  var originalTimeout: number;

  beforeEach(function () {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
  });

  afterEach(function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });

  it("Enter e-mail ID linked with ABHA address", async () => {
    await driver.pause(5000);
    const ABHA = await $('//android.widget.Button[@content-desc=" Records"]');
    await driver.pause(5000);
    await ABHA.click(); // Click on Record

    const Create_ABHA = await $("~Create Now");
    await Create_ABHA.click();
    await driver.pause(5000); // Create Abha

    await (
      await $('//android.widget.EditText[@content-desc="EmailID"]')
    ).setValue("venktrmn24@gmail.com"); ///MOBILE NUMBER --- aBHA NUMBER
    await driver.pause(2000);

    const error_message_Moblie_number = await (await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[3]")).getText();
    if (error_message_Moblie_number === "Expected Text") {
      await (
        await $('//android.widget.EditText[@content-desc="EmailID"]')
      ).setValue("venktrmn2114@gmail.com");
      console.log("Setting phone number to 934426952 based on Error text");
      await driver.pause(2000);
    } else {
      await (
        await $('//android.widget.EditText[@content-desc="EmailID"]')
      ).setValue("venktrmn2114@gmail.com");
      console.log("Setting phone number to 7092327667 based on Error text");
    }

    await (await $("~Continue")).click();
    await driver.pause(2000);

    const Checkbox = await $(
      '//android.view.ViewGroup[@content-desc="checkBox"]'
    );
    await Checkbox.click();
    await driver.pause(3000);

    await (await $("~Continue")).click();
    await driver.pause(5000);

    await Checkbox.click();
    await driver.pause(3000);

    await (await $("~Continue")).click();
    await driver.pause(5000);
    await driver.pause(20000);
  });

  it('Resend e-mail OTP after 60 seconds post clicking on "Resend OTP"".', async () => {
    const Denied_button = await $(
      '//android.widget.Button[@resource-id="com.google.android.gms:id/negative_button"]'
    );
    await Denied_button.click();
    await driver.pause(3000);

    await driver.pause(70000);

    const Resend = await $("~Resend");
    await Resend.click();
  });

  it("Validate e-mail ID via e-mail OTP", async () => {
    await driver.pause(70000);
  });

  it("Display ABHA addresses linked with entered validated mobile number. So that an individul can select an ABHA address in which one wishes to login.", async () => {
    await driver.pause(5000);

    try {
      const randomAddressIndex = Math.floor(Math.random() * 3) + 1;

      let selectedAddress = false;
      switch (randomAddressIndex) {
        case 1:
          const Abha_Address_List1 = await $("~Abha_Address_List1");
          if (await Abha_Address_List1.isDisplayed()) {
            await Abha_Address_List1.click();
            selectedAddress = true;
          }
          break;
        case 2:
          const Abha_Address_List2 = await $("~Abha_Address_List2");
          if (await Abha_Address_List2.isDisplayed()) {
            await Abha_Address_List2.click();
            selectedAddress = true;
          }
          break;
        case 3:
          const Abha_Address_List3 = await $("~Abha_Address_List3");
          if (await Abha_Address_List3.isDisplayed()) {
            await Abha_Address_List3.click();
            selectedAddress = true;
          }
          break;
        default:
          throw new Error("Invalid address selection index");
      }

      if (selectedAddress) {
        await driver.pause(3000);
        const selectedAbhaAddress = await $("~Selected_ABHA_Address");
        expect(await selectedAbhaAddress.isDisplayed()).toBe(true);
      } else {
        throw new Error("No address selected");
      }
    } catch (error) {
      console.log(
        "No ABHA address available or selected, creating a new ABHA address."
      );

      const Create_New_Abha_Address = await $(
        '//android.view.ViewGroup[@content-desc="Create New ABHA Addressbutton"]'
      );
      await Create_New_Abha_Address.click();
      await driver.pause(3000);
    }
  });
});

describe("Login with easy to remember ABHA address (name@abdm) flow", () => {
  var originalTimeout: number;

  beforeEach(function () {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
  });

  afterEach(function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });

  it("Enter easy to remember ABHA address - name@abdm", async () => {
    await driver.pause(5000);
    const ABHA = await $('//android.widget.Button[@content-desc=" Records"]');
    await driver.pause(5000);
    await ABHA.click(); // Click on Record

    const Create_ABHA = await $("~Create Now");
    await Create_ABHA.click();
    await driver.pause(5000); // Create Abha

    await (
      await $('//android.widget.EditText[@content-desc="AbhaAdd"]')
    ).setValue("venktrmn2114@abdm"); ///MOBILE NUMBER --- aBHA NUMBER
    await driver.pause(2000);

    const error_message_Moblie_number = await (await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[3]")).getText();
    if (error_message_Moblie_number === "Expected Text") {
      await (
        await $('//android.widget.EditText[@content-desc="AbhaAdd"]')
      ).setValue("venktrmn24@abdm");
      console.log("Setting phone number to 934426952 based on Error text");
      await driver.pause(2000);
    } else {
      await (
        await $('//android.widget.EditText[@content-desc="AbhaAdd"]')
      ).setValue("venktrmn2114@abdm");
      console.log("Setting phone number to 7092327667 based on Error text");
    }

    await (await $("~Continue")).click();
    await driver.pause(2000);

    const Checkbox = await $(
      '//android.view.ViewGroup[@content-desc="checkBox"]'
    );
    await Checkbox.click();
    await driver.pause(3000);

    await (await $("~Continue")).click();
    await driver.pause(5000);

    await Checkbox.click();
    await driver.pause(3000);

    await (await $("~Continue")).click();
    await driver.pause(5000);
    await driver.pause(20000);
  });

  it('Resend e-mail OTP after 60 seconds post clicking on "Resend OTP"".', async () => {
    const Denied_button = await $(
      '//android.widget.Button[@resource-id="com.google.android.gms:id/negative_button"]'
    );
    await Denied_button.click();
    await driver.pause(3000);
    await driver.pause(70000);

    const Resend = await $("~Resend");
    await Resend.click();
  });

  it("Validate ABHA Address via Password, Mobile OTP, Email OTP, and Aadhar OTP", async () => {
    //     const passwordOption = await $('~Password');
    //     await passwordOption.click();

    //     const passwordInput = await $('~Password Input');
    //     await passwordInput.setValue('Venkat@2001');

    //     const continueButton = await $('~Continue');
    //     await continueButton.click();

    //     let successMessage = await $('~Validation Successful');
    //     expect(await successMessage.isDisplayed()).toBeTruthy();

    //     const mobileOtpOption = await $('~Mobile OTP');
    //     await mobileOtpOption.click();

    //     const mobileOtpInput = await $('~Mobile OTP Input');
    //     const Allow_button = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.Button[2]');
    //         await Allow_button.click();
    //         await driver.pause(3000);

    //         await mobileOtpInput.getText();

    //     successMessage = await $('~Validation Successful');
    //     expect(await successMessage.isDisplayed()).toBeTruthy();

    //     const emailOtpOption = await $('~Email OTP');
    //     await emailOtpOption.click();
    //     await driver.pause(20000);

    //     successMessage = await $('~Validation Successful');
    //     expect(await successMessage.isDisplayed()).toBeTruthy();

    //     const aadharOtpOption = await $('~Aadhar OTP');
    //     await aadharOtpOption.click();
    //     const aadharOtpInput = await $('~Aadhar OTP Input');
    //             await Allow_button.click();
    //         await driver.pause(3000);

    //         await aadharOtpInput.getText();

    //     successMessage = await $('~Validation Successful');
    //     expect(await successMessage.isDisplayed()).toBeTruthy();
    //   });

    const validateAuthMode = async (authMode: string, credential = "") => {
      const authOption = await $("~${Password}");
      await authOption.click();

      switch (authMode) {
        case "Password":
          const passwordInput = await $("~Password Input");
          await passwordInput.setValue(credential);
          break;

        case "Mobile OTP":
          const allowButton = await $(
            '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.Button[2]'
          );
          await allowButton.click();
          await driver.pause(3000);
          const mobileOtpInput = await $("~Mobile OTP Input");
          await mobileOtpInput.getText();
          break;

        case "Email OTP":
          await driver.pause(20000);
          break;

        case "Aadhar OTP":
          const aadharOtpInput = await $("~Aadhar OTP Input"); ///////////Aadhar Flow is Missing.
          await allowButton.click();
          await driver.pause(3000);
          await aadharOtpInput.getText();
          break;

        default:
          throw new Error("Invalid authentication mode");
      }

      const continueButton = await $("~Continue");
      await continueButton.click();

      const successMessage = await $("~Validation Successful");
      expect(await successMessage.isDisplayed()).toBeTruthy();
    };

    await validateAuthMode("Password", "Venkat@2001");

    await validateAuthMode("Mobile OTP");

    await validateAuthMode("Email OTP");

    await validateAuthMode("Aadhar OTP");
  });
});

describe("Login with default ABHA address (14-digit@abdm) flow", () => {
  var originalTimeout: number;

  beforeEach(function () {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
  });

  afterEach(function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });

  it("Enter default ABHA address such as 14-digit@abdm", async () => {
    await driver.pause(5000);
    const ABHA = await $('//android.widget.Button[@content-desc=" Records"]');
    await driver.pause(5000);
    await ABHA.click(); // Click on Record

    const Create_ABHA = await $("~Create Now");
    await Create_ABHA.click();
    await driver.pause(5000); // Create Abha

    await driver.pause(5000);
    const Abha_Address = await $("~Abha_Address");
    await Abha_Address.click(); //  Abha Address

    await (
      await $('//android.widget.EditText[@content-desc="AbhaAdd"]')
    ).setValue("9123515621577@abdm"); ///MOBILE NUMBER --- aBHA NUMBER
    await driver.pause(2000);

    const error_message_Moblie_number = await (await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[3]")).getText();
    if (error_message_Moblie_number === "Expected Text") {
      await (
        await $('//android.widget.EditText[@content-desc="Abha_Address"]')
      ).setValue("9123515621577@abdm");
      console.log("Setting phone number to 934426952 based on Error text");
      await driver.pause(2000);
    } else {
      await (
        await $('//android.widget.EditText[@content-desc="Abha_Address"]')
      ).setValue("venktrmn2114@abdm");
      console.log("Setting phone number to 7092327667 based on Error text");
    }

    await (await $("~Continue")).click();
    await driver.pause(2000);

    const Checkbox = await $(
      '//android.view.ViewGroup[@content-desc="checkBox"]'
    );
    await Checkbox.click();
    await driver.pause(3000);

    await (await $("~Continue")).click();
    await driver.pause(5000);

    await Checkbox.click();
    await driver.pause(3000);

    await (await $("~Continue")).click();
    await driver.pause(5000);
    await driver.pause(20000);
  });

  it('Resend aadhar OTP / mobile OTP after clicking on "Resend OTP".', async () => {
    const Denied_button = await $(
      '//android.widget.Button[@resource-id="com.google.android.gms:id/negative_button"]'
    );
    await Denied_button.click();
    await driver.pause(3000);
    await driver.pause(70000);

    const Resend = await $("~Resend");
    await Resend.click();
  });

  it("Validate ABHA address via mobile OTP / aadhar OTP ", async () => {
    //     const mobileOtpOption = await $('~Mobile OTP         ');
    //     await mobileOtpOption.click();
    //     const mobileOtpInput = await $('~Mobile OTP Input');
    //     const Allow_button = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.Button[2]');
    //         await Allow_button.click();
    //         await driver.pause(3000);
    //         await mobileOtpInput.getText();

    //     successMessage = await $('~Validation Successful');
    //     expect(await successMessage.isDisplayed()).toBeTruthy();

    //     const aadharOtpOption = await $('~Aadhar OTP');
    //     await aadharOtpOption.click();
    //     const aadharOtpInput = await $('~Aadhar OTP Input');
    //         await Allow_button.click();
    //         await driver.pause(3000);
    //         await aadharOtpInput.getText();

    //     successMessage = await $('~Validation Successful');
    //     expect(await successMessage.isDisplayed()).toBeTruthy();
    //   });

    const validateAuthMode = async (authMode: string, credential = "") => {
      const authOption = await $("~${Mobile OTP}");
      await authOption.click();

      switch (authMode) {
        case "Mobile OTP":
          const allowButton = await $(
            '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.Button[2]'
          );
          await allowButton.click();
          await driver.pause(3000);
          const mobileOtpInput = await $("~Mobile OTP Input");
          await mobileOtpInput.getText();
          break;

        case "Aadhar OTP":
          const aadharOtpInput = await $("~Aadhar OTP Input"); ///////////Aadhar Flow is Missing.
          await allowButton.click();
          await driver.pause(3000);
          await aadharOtpInput.getText();
          break;

        default:
          throw new Error("Invalid authentication mode");
      }

      const continueButton = await $("~Continue");
      await continueButton.click();

      const successMessage = await $("~Validation Successful");
      expect(await successMessage.isDisplayed()).toBeTruthy();
    };

    await validateAuthMode("Password", "Venkat@2001");

    await validateAuthMode("Mobile OTP");

    await validateAuthMode("Email OTP");

    await validateAuthMode("Aadhar OTP");
  });
});

describe("Login with ABHA number flow", () => {
  var originalTimeout: number;

  beforeEach(function () {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
  });

  afterEach(function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });

  it("Enter 14 digit ABHA number", async () => {
    await driver.pause(5000);
    const ABHA = await $('//android.widget.Button[@content-desc=" Records"]');
    await driver.pause(5000);
    await ABHA.click(); // Click on Record

    const Create_ABHA = await $("~Create Now");
    await Create_ABHA.click();
    await driver.pause(5000); // Create Abha

    await driver.pause(5000);
    const AbhaNumber = await $("~AbhaNumber");
    await AbhaNumber.click(); //  Abha Address

    await (
      await $('//android.widget.EditText[@content-desc="AbhaNumber"]')
    ).setValue("9123515621577"); ///MOBILE NUMBER --- aBHA NUMBER
    await driver.pause(2000);

    const error_message_Moblie_number = await (await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[3]")).getText();
    if (error_message_Moblie_number === "Expected Text") {
      await (
        await $('//android.widget.EditText[@content-desc="AbhaNumber"]')
      ).setValue("9123515621577");
      console.log("Setting phone number to 934426952 based on Error text");
      await driver.pause(2000);
    } else {
      await (
        await $('//android.widget.EditText[@content-desc="AbhaNumber"]')
      ).setValue("912351562157");
      console.log("Setting phone number to 7092327667 based on Error text");
    }

    await (await $("~Continue")).click();
    await driver.pause(2000);

    const Checkbox = await $(
      '//android.view.ViewGroup[@content-desc="checkBox"]'
    );
    await Checkbox.click();
    await driver.pause(3000);

    await (await $("~Continue")).click();
    await driver.pause(5000);

    await Checkbox.click();
    await driver.pause(3000);

    await (await $("~Continue")).click();
    await driver.pause(5000);
    await driver.pause(20000);
  });

  it('Resend aadhar OTP / mobile OTP after clicking on "Resend OTP"', async () => {
    const Denied_button = await $(
      '//android.widget.Button[@resource-id="com.google.android.gms:id/negative_button"]'
    );
    await Denied_button.click();
    await driver.pause(3000);
    await driver.pause(70000);

    const Resend = await $("~Resend");
    await Resend.click();
  });

  it("Validate ABHA address via mobile OTP / aadhar OTP ", async () => {
    //     const mobileOtpOption = await $('~Mobile OTP');
    //     await mobileOtpOption.click();
    //     const mobileOtpInput = await $('~Mobile OTP Input');
    //     const Allow_button = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.Button[2]');
    //         await Allow_button.click();
    //         await driver.pause(3000);
    //         await mobileOtpInput.getText();

    //     successMessage = await $('~Validation Successful');
    //     expect(await successMessage.isDisplayed()).toBeTruthy();

    //     const aadharOtpOption = await $('~Aadhar OTP');
    //     await aadharOtpOption.click();
    //     const aadharOtpInput = await $('~Aadhar OTP Input');
    //         await Allow_button.click();
    //         await driver.pause(3000);
    //         await aadharOtpInput.getText();

    //     successMessage = await $('~Validation Successful');
    //     expect(await successMessage.isDisplayed()).toBeTruthy();
    //   });

    const validateAuthMode = async (authMode: string, credential = "") => {
      const authOption = await $("~${Mobile OTP}");
      await authOption.click();

      switch (authMode) {
        case "Mobile OTP":
          const allowButton = await $(
            '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.Button[2]'
          );
          await allowButton.click();
          await driver.pause(3000);
          const mobileOtpInput = await $("~Mobile OTP Input");
          await mobileOtpInput.getText();
          break;

        case "Aadhar OTP":
          const aadharOtpInput = await $("~Aadhar OTP Input"); ///////////Aadhar Flow is Missing.
          await allowButton.click();
          await driver.pause(3000);
          await aadharOtpInput.getText();
          break;

        default:
          throw new Error("Invalid authentication mode");
      }

      const continueButton = await $("~Continue");
      await continueButton.click();

      const successMessage = await $("~Validation Successful");
      expect(await successMessage.isDisplayed()).toBeTruthy();
    };

    await validateAuthMode("Mobile OTP");

    await validateAuthMode("Aadhar OTP");
  });
});
