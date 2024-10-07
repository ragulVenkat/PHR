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

    await (
      await $(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.EditText"
      )
    ).setValue("934426952");
    await driver.pause(2000);

    await (await $("~Get OTP")).click();
    await driver.pause(5000);

    const error_message_Moblie_number = await (
      await $(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[3]"
      )
    ).getText();
    if (error_message_Moblie_number === "Expected Text") {
      await (
        await $(
          "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.EditText"
        )
      ).setValue("934426952");
      console.log("Setting phone number to 934426952 based on Error text");
      await driver.pause(2000);
    } else {
      await (
        await $(
          "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.EditText"
        )
      ).setValue("9344269524");
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
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.Button[2]"
    );
    await Allow_button.click();
    await driver.pause(3000);

    await (
      await $(
        '//android.view.ViewGroup[@content-desc="Enter MPIN, Forgot MPIN?"]/android.widget.EditText[1]'
      )
    ).setValue("1");
    await driver.pause(2000);
    await (
      await $(
        '//android.view.ViewGroup[@content-desc="Enter MPIN, Forgot MPIN?"]/android.widget.EditText[2]'
      )
    ).setValue("1");
    await driver.pause(2000);
    await (
      await $(
        '//android.view.ViewGroup[@content-desc="Enter MPIN, Forgot MPIN?"]/android.widget.EditText[3]'
      )
    ).setValue("1");
    await driver.pause(2000);
    await (
      await $(
        '//android.view.ViewGroup[@content-desc="Enter MPIN, Forgot MPIN?"]/android.widget.EditText[4]'
      )
    ).setValue("1");
    await driver.pause(2000);
  });

  it("Dashboard Screen ", async () => {
    await driver.pause(5000);
  });
});

//   describe("Registration Flow : ABHA address creation with mobile number flow (Self Declared Flow - without KYC)", () => {
//     var originalTimeout: number;

//     beforeEach(function () {
//       originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
//       jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
//     });

//     afterEach(function () {
//       jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
//     });

//     it("Registration Flow : ABHA address creation with mobile number flow", async () => {
//       await driver.pause(5000);
//       const ABHA = await $('(//android.widget.Button[@content-desc="tab"])[4]');
//       await driver.pause(5000);
//       await ABHA.click(); // Click on Record
//     });

//     it('Click on "Register" to create a new ABHA address', async () => {
//       const Create_ABHA = await $("~Create Now");
//       await Create_ABHA.click();
//       await driver.pause(5000); // Create Abha
//     });
//     it('Click on "Register" to create a new ABHA address And Select the "Mobile Number" option to create ABHA address via mobile number and click on "Continue" button', async () => {
//       await driver.pause(5000);
//       const Mobile_Number = await $('//android.widget.Button[@content-desc="Mobile Number"]/android.view.ViewGroup');
//       await Mobile_Number.click(); // Create Abha Address
//     });

//     it('Enter the mobile number and click on "Continue" button', async () => {
//       const Moblie_num = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.EditText')
//       const MoblieText = await Moblie_num.getText();
//       expect(MoblieText).toBe('9344269524');
//       await driver.pause(5000);

//       await (await $("~Continue")).click();
//       await driver.pause(3000);
//     });

//     it(" Validate mobile OTP received on entered mobile number", async () => {

//       await driver.pause(10000);

//       // await (await $('~OTPInput')).setValue("270423");
//       const Allow_button = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.Button[2]'
//       );
//       await Allow_button.click();
//       await driver.pause(3000);
//       await (await $("~OTPInput")).getText();
//     });

//     it(" Display ABHA addresses linked with entered validated mobile number. So that an individul can select an ABHA address in which one wishes to login.", async () => {
//       await driver.pause(5000);

//     //   try {
//     //     const randomAddressIndex = Math.floor(Math.random() * 3) + 1;

//     //     let selectedAddress = false;
//     //     switch (randomAddressIndex) {
//     //       case 1:
//     //         const Abha_Address_List1 = await $('//android.view.ViewGroup[@content-desc="S Venkata Ramanan, venktrmn2114@sbx, 91-2351-5621-1577"]');
//     //         if (await Abha_Address_List1.isDisplayed()) {
//     //           await Abha_Address_List1.click();
//     //           selectedAddress = true;
//     //         }
//     //         break;
//     //       case 2:
//     //         const Abha_Address_List2 = await $('//android.view.ViewGroup[@content-desc="Venkat, venkat_v.20@sbx"]');
//     //         if (await Abha_Address_List2.isDisplayed()) {
//     //           await Abha_Address_List2.click();
//     //           selectedAddress = true;
//     //         }
//     //         break;
//     //       case 3:
//     //         const Abha_Address_List3 = await $('//android.view.ViewGroup[@content-desc="Venkata, venkata_20.00@sbx"]');
//     //         if (await Abha_Address_List3.isDisplayed()) {
//     //           await Abha_Address_List1.click();
//     //           selectedAddress = true;
//     //         }
//     //         break;
//     //       default:
//     //         throw new Error("Invalid address selection index");
//     //     }

//     //     if (selectedAddress) {
//     //       await driver.pause(3000);
//     //       const selectedAbhaAddress = await $("~Selected_ABHA_Address");
//     //       expect(await selectedAbhaAddress.isDisplayed()).toBe(true);
//     //     } else {
//     //       throw new Error("No address selected");
//     //     }
//     //   } catch (error) {
//     //     console.log(
//     //       "No ABHA address available or selected, creating a new ABHA address."
//     //     );

//         const Create_New_Abha_Address = await $(
//           '//android.view.ViewGroup[@content-desc="Create New ABHA Addressbutton"]'
//         );
//         await Create_New_Abha_Address.click();
//         await driver.pause(3000);
//     //   }

//       // const Create_New_Abha_Address = await $('//android.view.ViewGroup[@content-desc="Create New ABHA Addressbutton"]');

//       // await Create_New_Abha_Address.click();
//       // await driver.pause(3000);
//     });

//     it("Fill profile details", async () => {
//       await driver.touchAction([
//         { action: "press", x: 500, y: 2000 },
//         { action: "moveTo", x: 500, y: 600 },
//         "release",
//       ]);
//       await driver.pause(3000);

//       const checkbox = await $("~checkBox");
//       await checkbox.click();
//       await driver.pause(3000);

//       await checkbox.click();
//       await driver.pause(3000);

//       const continueButton = await $("~Submit");
//       await continueButton.click();
//       await driver.pause(3000);

//       const fullNameError = await $(
//         '//android.widget.TextView[@content-desc="Enter a Valid Name"]'
//       );
//       expect(await fullNameError.getText()).toBe("Enter a Valid Name");

//       const dobError = await $(
//         '(//android.widget.TextView[@content-desc="tab"])[2]'
//       );
//       expect(await dobError.getText()).toBe("Date of Birth is required.");

//       const genderError = await $(
//         '(//android.widget.TextView[@content-desc="tab"])[3]'
//       );
//       expect(await genderError.getText()).toBe("Select the Gender");

//       const addressError = await $(
//         '//android.widget.TextView[@content-desc="Enter the Address"]'
//       );
//       expect(await addressError.getText()).toBe("Enter the Address");

//       const stateError = await $(
//         '(//android.widget.TextView[@content-desc="tab"])[4]'
//       );
//       expect(await stateError.getText()).toBe("Please select a state");

//       const districtError = await $(
//         '//android.widget.TextView[@content-desc="tab" and @text="Please Select a District"]'
//       );
//       expect(await districtError.getText()).toBe("Please Select a District");

//       const pincodeError = await $(
//         '//android.widget.TextView[@content-desc="Pincode must be exactly 6 digits."]'
//       );
//       expect(await pincodeError.getText()).toBe(
//         "Pincode must be exactly 6 digits."
//       );

//       const fullNameInput = await $('//android.widget.EditText[@content-desc="Full Name"]');
//       await fullNameInput.setValue("Venkat");
//       await driver.pause(3000);

//       const dobInput = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.EditText');
//       await dobInput.setValue("14-11-2000");
//       await driver.pause(3000);

//       const genderInput = await $('//android.view.ViewGroup[@content-desc="Genderdropdown"]/android.widget.ImageView');
//       await genderInput.click();
//       const genderOption = await $(
//         '//android.view.ViewGroup[@content-desc="Male"]/android.view.ViewGroup/android.widget.TextView'
//       );
//       await genderOption.click();
//       await driver.pause(3000);

//       const emailInput = await $('//android.widget.EditText[@content-desc="Email"]');
//       await emailInput.click();
//       await driver.pause(3000);
//       await emailInput.setValue("venktrmn2114@gmail.com");
//       await driver.pause(3000);
//       await emailInput.click();

//       const addressInput = await $('//android.widget.EditText[@content-desc="Address"]');
//       await addressInput.setValue("24/30 Morrison 6th street");
//       await driver.pause(3000);

//       const state = await $('~Statedropdown');
//       await state.click();
//       const stateinput = await $('~Statedropdown input');
//       await stateinput.setValue("Tamil Nadu");
//       await driver.pause(3000);
//       const stateOption = await $('//android.view.ViewGroup[@content-desc="TAMIL NADU"]');
//       await stateOption.click();
//       await driver.pause(3000);

//       const district = await $('~Districtdropdown');
//       await district.click();
//       const districtinput = await $('~Districtdropdown input');
//       await driver.pause(3000);
//       await districtinput.setValue("Chennai");
//       const districtOption = await $('//android.view.ViewGroup[@content-desc="CHENNAI"]/android.view.ViewGroup');
//       await districtOption.click();
//       await driver.pause(3000);

//       const pincodeInput = await $('//android.widget.EditText[@content-desc="Pincode"]');
//       await pincodeInput.setValue("600016");
//       await driver.pause(3000);
//     });

//     it('Click on checkbox beside "User Information Agreement" to voluntary share profile details with NHA for creating ABHA address and click on "Continue" button', async () => {
//       const checkbox = await $("~checkBox");
//       await checkbox.click();
//       await driver.pause(3000);

//       await checkbox.click();
//       await driver.pause(3000);

//       const continueButton = await $("~Submit");
//       await continueButton.click();
//       await driver.pause(3000);
//     });

//     // it('Create ABHA address. ABHA address needs to be created as per ABHA address policy', async () => {

//     //     const Abha_Address_Creation = await($('//android.widget.EditText[@text="Create Abha Address"]'));
//     //     await Abha_Address_Creation.click();
//     //     await driver.pause(3000);

//     //     await Abha_Address_Creation.setValue("venktrmn2114");
//     //     await driver.pause(3000);

//     //     await Abha_Address_Creation.setValue("venktrmn2114");
//     //     await driver.pause(3000);

//     //     const Abha_Address_Value = await Abha_Address_Creation.getText();
//     //     expect(Abha_Address_Value).toBe("venktrmn2114@abdm")
//     //     await driver.pause(3000);

//     //     const Abha_Address_Suggestion = (await $('//android.widget.TextView[@text="venkat@abdm"]'));
//     //     await Abha_Address_Suggestion.click();
//     //     await driver.pause(3000);

//     //     const Create_New_Abha_Address = await $('~Create_Abha_Address');
//     //     await Create_New_Abha_Address.setValue("venktrmn2114@abdm");

//     //     const Abha_Address_Taken = await $('~Address Taken')
//     //     await Abha_Address_Taken.getText();

//     //     await Create_New_Abha_Address.setValue("venktrmn2424@abdm");

//     //     const Abha_Address_Creation_Button = await $('~Create New ABHA Addressbutton');
//     //     await Abha_Address_Creation_Button.click();

//     // });

//     it("Create ABHA address. ABHA address needs to be created as per ABHA address policy", async () => {
//       const Abha_Address_Creation = await $(
//         '//android.widget.EditText[@text="Create Abha Address"]'
//       );
//       await Abha_Address_Creation.click();
//       await driver.pause(3000);

//       await Abha_Address_Creation.setValue("venktrmn2114");
//       await driver.pause(3000);

//       const Abha_Address_Creation_Button = await $(
//         '//android.view.ViewGroup[@content-desc="Create New ABHA Addressbutton"]'
//       );
//       await Abha_Address_Creation_Button.click();

//       const Abha_Address_Taken = await $(
//         '//android.widget.TextView[@text="The address is already in use."]'
//       );
//       const errorMsg = await Abha_Address_Taken.getText();

//       if (errorMsg.includes("Already taken")) {
//         console.log("ABHA Address is already taken. Selecting suggestion...");

//         // const Abha_Address_Suggestion = await $('//android.widget.TextView[@text="venkata_2000"]');
//         // await Abha_Address_Suggestion.click();
//         // await driver.pause(3000);
//       }

//       await Abha_Address_Creation.setValue("._"); ///////////////////////////////////////
//       await driver.pause(3000);
//       await Abha_Address_Creation_Button.click();
//        const Abha_Address_Value = await Abha_Address_Creation.getText();  //// policy sholud view
//        expect(Abha_Address_Value).toBe(" Minimum length - 8 characters  Maximum length - 18 characters Special characters allowed - 1 dot (.) and/or 1 underscore (_) Special character dot and underscore should be in between. Special characters cannot be in the beginning or at the end   Alphanumeric - only numbers, only letters or any combination of numbers and letters is allowed.");
//       await driver.pause(3000);

//       await Abha_Address_Creation.setValue("venkata_934426"); ///////////////////////////////////////
//       await driver.pause(3000);

//       const Abha_value = Abha_Address_Creation.getText();

//       await Abha_Address_Creation_Button.click();
//       await driver.pause(3000);
//     });

//     it('Create password, confirm password and click on "Submit" button. Password needs to be created as per password policy. ', async () => {
//       const passwordField = await $(
//         '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.EditText'
//       );
//       const passwordeye = await $(
//         '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.ImageView'
//       );
//       const confirmPasswordField = await $(
//         '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.EditText'
//       );
//       const confirmpasswordeye = await $(
//         '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.widget.ImageView'
//       );
//       const submitButton = await $(
//         '//android.view.ViewGroup[@content-desc="Submitbutton"]'
//       );
//       const errormessage = await $(
//         '//android.widget.TextView[@text="Passwords do not match."]'
//       );

//       const password = "Venkat@2002";
//       const password2 = "Venkata@2001";

//       await passwordField.setValue(password);
//       await driver.pause(2000);
//       await passwordeye.click();
//       await driver.pause(2000);

//       await confirmPasswordField.setValue(password2);
//       await driver.pause(2000);
//       await confirmpasswordeye.click();
//       await driver.pause(3000);

//       expect(await errormessage.getText()).toBe("Passwords do not match.");

//       await passwordField.setValue(password);
//       await driver.pause(2000);

//       await confirmPasswordField.setValue(password);
//       await driver.pause(2000);

//       await submitButton.click();
//       await driver.pause(3000);
//     });

//     it('Congratulation Screen is displayed stating "Congratulations! ABHA address is created successfully " and click on "Login" button ', async () => {
//       const Login_Button = await $("~Login");
//       await Login_Button.click();
//       await driver.pause(3000);
//     });

//     it('Provide Consent after clicking on login button. Click on "I Agree" against "Personal Data Processing Consent Form". Post this user is able to successfully Login', async () => {
//       const Agree_Statement = await $(
//         '//android.widget.TextView[@text="I Agree against personal Data Processing consent Form"]'
//       );
//       const Submit = await $("~Submitbutton");

//       await Agree_Statement.getText();
//       await driver.pause(3000);

//       await Submit.click();
//       await driver.pause(3000);

//       const Abha_value = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[6]/android.view.ViewGroup[2]/android.widget.TextView[5]')

//       await Abha_value.getText();

//     });

//     it('Logout', async () => {

//       const setting = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]');
//         await setting.click();
//         await driver.pause(2000);

//         const Logout = await $('//android.view.ViewGroup[@content-desc="Log out"]');
//         await Logout.click();
//         await driver.pause(2000);

//         const Logout_Yes = await $('//android.view.ViewGroup[@content-desc="Yes"]');
//         await Logout_Yes.click();
//         await driver.pause(2000);

//   });

//  });

// describe("Registration Flow : ABHA address creation with email ID flow(Self Declared Flow - without KYC)", () => {
//   var originalTimeout: number;

//   beforeEach(function () {
//     originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
//     jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
//   });

//   afterEach(function () {
//     jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
//   });

//   it('Click on "Register" to create a new ABHA address', async () => {
//     await driver.pause(5000);
//     const Login_email = await $('//android.widget.Button[@content-desc="Login With Other Options"]/android.view.ViewGroup');
//     await driver.pause(5000);
//     await Login_email.click(); // Click on Record
//   });

//   it('Select the "Email ID" option to create ABHA address via email ID and click on "Continue" button', async () => {
//       const Email_ID = await $('//android.view.ViewGroup[@content-desc="Email ID"]');
//       await Email_ID.click();
//       await driver.pause(5000);

//   });

//   it('Enter the e-mail id and click on "Continue" button', async () => {
//     await (
//       await $('//android.widget.EditText[@text="Email ID"]')
//     ).setValue("venktrmn2114@gmail.com");
//     await driver.pause(2000);

//     await (await $("~Continue")).click();
//     await driver.pause(2000);

//     const error_message_Moblie_number = await (await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[3]")).getText();
//     if (error_message_Moblie_number === "Expected Text") {
//       await (
//         await $('//android.widget.EditText[@text="Email ID"]')
//       ).setValue("venktrmn211@gmail.com");
//       console.log("Setting phone number to 934426952 based on Error text");
//       await driver.pause(2000);
//     } else {
//       await (
//         await $('//android.widget.EditText[@text="Email ID"]')
//       ).setValue("venktrmn2114@gmail.com");
//       console.log("Setting phone number to 7092327667 based on Error text");
//     }

//     const Checkbox = await $(
//       '//android.view.ViewGroup[@content-desc="checkBox"]'
//     );
//     await Checkbox.click();
//     await driver.pause(3000);

//     await (await $("~Continue")).click();
//     await driver.pause(5000);

//     await Checkbox.click();
//     await driver.pause(3000);

//     await (await $("~Continue")).click();
//     await driver.pause(5000);
//     await driver.pause(20000);
//   });

//   it(" Validate e-mail OTP received on entered e-mail ID", async () => {
//     // const otpInputs = [
//     //     await $('~Digit1'),
//     //     await $('~Digit2'),
//     //     await $('~Digit3'),
//     //     await $('~Digit4'),
//     //     await $('~Digit5'),
//     //     await $('~Digit6')
//     // ];

//     // const otp = "270423";

//     // for (let i = 0; i < otp.length; i++) {
//     //     await otpInputs[i].setValue(otp[i]);
//     // }

//     // await driver.pause(3000);
//     // const errorMessageElement = await $('~ErrorMessage');

//     // const errorMessageText = await errorMessageElement.getText();

//     // expect(errorMessageText).toBe('Invalid OTP');

//     // console.log('Error Message:', errorMessageText);

//     await driver.pause(20000);
//   });

//   it("Display ABHA addresses linked with entered validated e-mail id. So that an individul can choose an ABHA address in which one wishes to login.", async () => {
//     await driver.pause(5000);

//     try {
//       const randomAddressIndex = Math.floor(Math.random() * 3) + 1;

//       let selectedAddress = false;
//       switch (randomAddressIndex) {
//         case 1:
//           const Abha_Address_List1 = await $("~Abha_Address_List1");
//           if (await Abha_Address_List1.isDisplayed()) {
//             await Abha_Address_List1.click();
//             selectedAddress = true;
//           }
//           break;
//         case 2:
//           const Abha_Address_List2 = await $("~Abha_Address_List2");
//           if (await Abha_Address_List2.isDisplayed()) {
//             await Abha_Address_List2.click();
//             selectedAddress = true;
//           }
//           break;
//         case 3:
//           const Abha_Address_List3 = await $("~Abha_Address_List3");
//           if (await Abha_Address_List3.isDisplayed()) {
//             await Abha_Address_List3.click();
//             selectedAddress = true;
//           }
//           break;
//         default:
//           throw new Error("Invalid address selection index");
//       }

//       if (selectedAddress) {
//         await driver.pause(3000);
//         const selectedAbhaAddress = await $("~Selected_ABHA_Address");
//         expect(await selectedAbhaAddress.isDisplayed()).toBe(true);
//       } else {
//         throw new Error("No address selected");
//       }
//     } catch (error) {
//       console.log(
//         "No ABHA address available or selected, creating a new ABHA address."
//       );

//       const Create_New_Abha_Address = await $(
//         '//android.view.ViewGroup[@content-desc="Create New ABHA Addressbutton"]'
//       );
//       await Create_New_Abha_Address.click();
//       await driver.pause(3000);
//     }

//     // const Create_New_Abha_Address = await $('//android.view.ViewGroup[@content-desc="Create New ABHA Addressbutton"]');

//     // await Create_New_Abha_Address.click();
//     // await driver.pause(3000);
//   });

//   it("Fill profile details", async () => {
//     await driver.touchAction([
//       { action: "press", x: 500, y: 1500 },
//       { action: "moveTo", x: 500, y: 300 },
//       "release",
//     ]);
//     await driver.pause(3000);

//     const checkbox = await $("~checkBox");
//     await checkbox.click();
//     await driver.pause(3000);

//     await checkbox.click();
//     await driver.pause(3000);

//     const continueButton = await $("~Submit");
//     await continueButton.click();
//     await driver.pause(3000);

//     const fullNameError = await $(
//       '//android.widget.TextView[@text="Enter a Valid Name"]'
//     );
//     expect(await fullNameError.getText()).toBe("Enter a Valid Name");

//     const dobError = await $(
//       '//android.widget.TextView[@text="Date of Birth is required."]'
//     );
//     expect(await dobError.getText()).toBe("Date of Birth is required.");

//     const genderError = await $(
//       '//android.widget.TextView[@content-desc="tab" and @text="Select the Gender"]'
//     );
//     expect(await genderError.getText()).toBe("Select the Gender");

//     const addressError = await $(
//       '//android.widget.TextView[@text="Enter the Address"]'
//     );
//     expect(await addressError.getText()).toBe("Enter the Address");

//     const stateError = await $(
//       '//android.widget.TextView[@content-desc="tab" and @text="Please select a state"]'
//     );
//     expect(await stateError.getText()).toBe("Please select a state");

//     const districtError = await $(
//       '//android.widget.TextView[@content-desc="tab" and @text="Please Select a District"]'
//     );
//     expect(await districtError.getText()).toBe("Please Select a District");

//     const pincodeError = await $(
//       '//android.widget.TextView[@text="Pincode must be exactly 6 digits."]'
//     );
//     expect(await pincodeError.getText()).toBe(
//       "Pincode must be exactly 6 digits."
//     );

//     const fullNameInput = await $("~Full Name input");
//     await fullNameInput.setValue("Venkat");
//     await driver.pause(3000);

//     const dobInput = await $("~Date of Birth");
//     await dobInput.setValue("14-11-2000");
//     await driver.pause(3000);

//     const genderInput = await $("~Genderdropdown");
//     await genderInput.click();
//     const genderOption = await $(
//       '//android.view.ViewGroup[@content-desc="GenderDropdownItem_M"]'
//     );
//     await genderOption.click();
//     await driver.pause(3000);

//     const emailInput = await $("~Email input");
//     await emailInput.setValue("venktrmn2114@gmail.com");
//     await driver.pause(3000);

//     const addressInput = await $("~Address input");
//     await addressInput.setValue("24/30 Morrison 6th street");
//     await driver.pause(3000);

//     const state = await $("~Statedropdown");
//     await state.click();
//     const stateinput = await $("~Statedropdown input");
//     await stateinput.setValue("Tamil Nadu");
//     await driver.pause(3000);
//     const stateOption = await $("~StateDropdownItem_33");
//     await stateOption.click();
//     await driver.pause(3000);

//     const district = await $("~Districtdropdown");
//     await district.click();
//     const districtinput = await $("~Districtdropdown input");
//     await driver.pause(3000);
//     await districtinput.setValue("Chennai");
//     const districtOption = await $("~DistrictDropdownItem_568");
//     await districtOption.click();
//     await driver.pause(3000);

//     const pincodeInput = await $("~Pincode input");
//     await pincodeInput.setValue("600016");
//     await driver.pause(3000);
//   });

//   it('Click on checkbox beside "User Information Agreement" to voluntary share profile details with NHA for creating ABHA address and click on "Continue" button', async () => {
//     const checkbox = await $("~checkBox");
//     await checkbox.click();
//     await driver.pause(3000);

//     await checkbox.click();
//     await driver.pause(3000);

//     const continueButton = await $("~Submit");
//     await continueButton.click();
//     await driver.pause(3000);
//   });

//   // it('Create ABHA address. ABHA address needs to be created as per ABHA address policy', async () => {

//   //     const Abha_Address_Creation = await($('//android.widget.EditText[@text="Create Abha Address"]'));
//   //     await Abha_Address_Creation.click();
//   //     await driver.pause(3000);

//   //     await Abha_Address_Creation.setValue("venktrmn2114");
//   //     await driver.pause(3000);

//   //     await Abha_Address_Creation.setValue("venktrmn2114");
//   //     await driver.pause(3000);

//   //     const Abha_Address_Value = await Abha_Address_Creation.getText();
//   //     expect(Abha_Address_Value).toBe("venktrmn2114@abdm")
//   //     await driver.pause(3000);

//   //     const Abha_Address_Suggestion = (await $('//android.widget.TextView[@text="venkat@abdm"]'));
//   //     await Abha_Address_Suggestion.click();
//   //     await driver.pause(3000);

//   //     const Create_New_Abha_Address = await $('~Create_Abha_Address');
//   //     await Create_New_Abha_Address.setValue("venktrmn2114@abdm");

//   //     const Abha_Address_Taken = await $('~Address Taken')
//   //     await Abha_Address_Taken.getText();

//   //     await Create_New_Abha_Address.setValue("venktrmn2424@abdm");

//   //     const Abha_Address_Creation_Button = await $('~Create New ABHA Addressbutton');
//   //     await Abha_Address_Creation_Button.click();

//   // });

//   it("Create ABHA address. ABHA address needs to be created as per ABHA address policy", async () => {
//     const Abha_Address_Creation = await $(
//       '//android.widget.EditText[@text="Create Abha Address"]'
//     );
//     await Abha_Address_Creation.click();
//     await driver.pause(3000);

//     await Abha_Address_Creation.setValue("venktrmn2114");
//     await driver.pause(3000);

//     const Abha_Address_Creation_Button = await $(
//       '//android.view.ViewGroup[@content-desc="Create New ABHA Addressbutton"]'
//     );
//     await Abha_Address_Creation_Button.click();

//     const Abha_Address_Taken = await $(
//       '//android.widget.TextView[@text="The address is already in use."]'
//     );
//     const errorMsg = await Abha_Address_Taken.getText();

//     if (errorMsg.includes("Already taken")) {
//       console.log("ABHA Address is already taken. Selecting suggestion...");

//       // const Abha_Address_Suggestion = await $('//android.widget.TextView[@text="venkata_2000"]');
//       // await Abha_Address_Suggestion.click();
//       // await driver.pause(3000);
//     }

//     await Abha_Address_Creation.setValue("venkata_2424");
//     await driver.pause(3000);
//     await driver.pause(3000);
//     // const Abha_Address_Value = await Abha_Address_Creation.getText();
//     // expect(Abha_Address_Value).toBe("venkatas14");
//     // await driver.pause(3000);

//     await Abha_Address_Creation_Button.click();
//     await driver.pause(3000);
//   });

//   it('Create password, confirm password and click on "Submit" button. Password needs to be created as per password policy. ', async () => {
//     const passwordField = await $(
//       '//android.widget.EditText[@text="New Password"]'
//     );
//     const passwordeye = await $(
//       '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.ImageView'
//     );
//     const confirmPasswordField = await $(
//       '//android.widget.EditText[@text="Confirm Password"]'
//     );
//     const confirmpasswordeye = await $(
//       '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.widget.ImageView'
//     );
//     const submitButton = await $(
//       '//android.view.ViewGroup[@content-desc="Submitbutton"]'
//     );
//     const errormessage = await $(
//       '//android.widget.TextView[@text="Passwords do not match."]'
//     );

//     const password = "Venkat@2002";
//     const password2 = "Venkata@2001";

//     await passwordField.setValue(password);
//     await driver.pause(2000);
//     await passwordeye.click();
//     await driver.pause(2000);

//     await confirmPasswordField.setValue(password2);
//     await driver.pause(2000);
//     await confirmpasswordeye.click();
//     await driver.pause(3000);

//     expect(await errormessage.getText()).toBe("Passwords do not match.");

//     await passwordField.setValue(password);
//     await driver.pause(2000);

//     await confirmPasswordField.setValue(password);
//     await driver.pause(2000);

//     await submitButton.click();
//     await driver.pause(3000);
//   });

//   it('Congratulation Screen is displayed stating "Congratulations! ABHA address is created successfully " and click on "Login" button ', async () => {
//     const Login_Button = await $("~Login");
//     await Login_Button.click();
//     await driver.pause(3000);
//   });

//   it('Provide Consent after clicking on login button. Click on "I Agree" against "Personal Data Processing Consent Form". Post this user is able to successfully Login', async () => {
//     const Agree_Statement = await $(
//       '//android.widget.TextView[@text="I Agree against personal Data Processing consent Form"]'
//     );
//     const Submit = await $("~Submitbutton");

//     await Agree_Statement.getText();
//     await driver.pause(3000);

//     await Submit.click();
//     await driver.pause(3000);
//   });
// });

describe('"Registration Flow : ABHA address creation with ABHA number flow(KYC verified flow)"', () => {
  var originalTimeout: number;

  beforeEach(function () {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
  });

  afterEach(function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });

  it('Select the "ABHA number" option to create ABHA address via ABHA number and click on "Continue" button', async () => {
    const ABHA = await $('(//android.widget.Button[@content-desc="tab"])[4]');
    await driver.pause(5000);
    await ABHA.click(); // Click on Record

    const Create_ABHA = await $("~Create Now");
    await Create_ABHA.click();
    await driver.pause(5000); // Create Abha

    const ABHA_number = await $(
      '//android.widget.Button[@content-desc="ABHA Number"]/android.view.ViewGroup'
    );
    await ABHA_number.click(); // Create Abha Address
  });

  it('Enter the 14 - digit ABHA number and click on "Continue" button', async () => {
    await (
      await $('//android.widget.EditText[@content-desc="Mobile Number"]')
    ).setValue("91235156211577");
    await driver.pause(2000);

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

  it(" Validate mobile OTP received on entered mobile number", async () => {
    // const otpInputs = [
    //     await $('~Digit1'),
    //     await $('~Digit2'),
    //     await $('~Digit3'),
    //     await $('~Digit4'),
    //     await $('~Digit5'),
    //     await $('~Digit6')
    // ];

    // const otp = "270423";

    // for (let i = 0; i < otp.length; i++) {
    //     await otpInputs[i].setValue(otp[i]);
    // }

    // await driver.pause(3000);
    // const errorMessageElement = await $('~ErrorMessage');

    // const errorMessageText = await errorMessageElement.getText();

    // expect(errorMessageText).toBe('Invalid OTP');

    // console.log('Error Message:', errorMessageText);

    const select_otp = await $(
      '(//android.view.ViewGroup[@content-desc="tab, tab"])[2]'
    );
    await select_otp.click();
    await driver.pause(3000);

    const Allow_button = await $(
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.Button[2]"
    );
    await Allow_button.click();
    await driver.pause(3000);

    // const error_message_Moblie_number = await (await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[3]")).getText();
    // if (error_message_Moblie_number === "Expected Text") {
    //   await (await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.EditText")).setValue("934426952");
    //   console.log("Setting phone number to 934426952 based on Error text");
    //   await driver.pause(2000);
    // } else {
    //   await (await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.EditText")).setValue("9344269524");
    //   console.log("Setting phone number to 7092327667 based on Error text");
    // }
  });

  it(" Display ABHA addresses linked with entered validated ABHA number. So that an individul can select an ABHA address in which one wishes to login.", async () => {
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

      const Create_New_Abha_Address = await $("~Create New ABHA Addressbutton");
      await Create_New_Abha_Address.click();
      await driver.pause(3000);
    }
    // const Create_New_Abha_Address = await $('//android.view.ViewGroup[@content-desc="Create New ABHA Addressbutton"]');

    // await Create_New_Abha_Address.click();
    // await driver.pause(3000);
  });

  it("Fill profile details", async () => {
    await driver.touchAction([
      { action: "press", x: 500, y: 2000 },
      { action: "moveTo", x: 500, y: 600 },
      "release",
    ]);
    await driver.pause(3000);

    const checkbox = await $("~checkBox");
    await checkbox.click();
    await driver.pause(3000);

    await checkbox.click();
    await driver.pause(3000);

    const continueButton = await $("~Submit");
    await continueButton.click();
    await driver.pause(3000);

    const fullNameError = await $(
      '//android.widget.TextView[@content-desc="Enter a Valid Name"]'
    );
    expect(await fullNameError.getText()).toBe("Enter a Valid Name");

    const dobError = await $(
      '(//android.widget.TextView[@content-desc="tab"])[2]'
    );
    expect(await dobError.getText()).toBe("Date of Birth is required.");

    const genderError = await $(
      '(//android.widget.TextView[@content-desc="tab"])[3]'
    );
    expect(await genderError.getText()).toBe("Select the Gender");

    const addressError = await $(
      '//android.widget.TextView[@content-desc="Enter the Address"]'
    );
    expect(await addressError.getText()).toBe("Enter the Address");

    const stateError = await $(
      '(//android.widget.TextView[@content-desc="tab"])[4]'
    );
    expect(await stateError.getText()).toBe("Please select a state");

    const districtError = await $(
      '//android.widget.TextView[@content-desc="tab" and @text="Please Select a District"]'
    );
    expect(await districtError.getText()).toBe("Please Select a District");

    const pincodeError = await $(
      '//android.widget.TextView[@content-desc="Pincode must be exactly 6 digits."]'
    );
    expect(await pincodeError.getText()).toBe(
      "Pincode must be exactly 6 digits."
    );

    const fullNameInput = await $(
      '//android.widget.EditText[@content-desc="Full Name"]'
    );
    await fullNameInput.setValue("Venkat");
    await driver.pause(3000);

    const dobInput = await $(
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.EditText"
    );
    await dobInput.setValue("14-11-2000");
    await driver.pause(3000);

    const genderInput = await $(
      '//android.view.ViewGroup[@content-desc="Genderdropdown"]/android.widget.ImageView'
    );
    await genderInput.click();
    const genderOption = await $(
      '//android.view.ViewGroup[@content-desc="Male"]/android.view.ViewGroup/android.widget.TextView'
    );
    await genderOption.click();
    await driver.pause(3000);

    const emailInput = await $(
      '//android.widget.EditText[@content-desc="Email"]'
    );
    await emailInput.click();
    await driver.pause(3000);
    await emailInput.setValue("venktrmn2114@gmail.com");
    await driver.pause(3000);
    await emailInput.click();

    const addressInput = await $(
      '//android.widget.EditText[@content-desc="Address"]'
    );
    await addressInput.setValue("24/30 Morrison 6th street");
    await driver.pause(3000);

    const state = await $("~Statedropdown");
    await state.click();
    const stateinput = await $("~Statedropdown input");
    await stateinput.setValue("Tamil Nadu");
    await driver.pause(3000);
    const stateOption = await $(
      '//android.view.ViewGroup[@content-desc="TAMIL NADU"]'
    );
    await stateOption.click();
    await driver.pause(3000);

    const district = await $("~Districtdropdown");
    await district.click();
    const districtinput = await $("~Districtdropdown input");
    await driver.pause(3000);
    await districtinput.setValue("Chennai");
    const districtOption = await $(
      '//android.view.ViewGroup[@content-desc="CHENNAI"]/android.view.ViewGroup'
    );
    await districtOption.click();
    await driver.pause(3000);

    const pincodeInput = await $(
      '//android.widget.EditText[@content-desc="Pincode"]'
    );
    await pincodeInput.setValue("600016");
    await driver.pause(3000);
  });

  it('Click on checkbox beside "User Information Agreement" to voluntary share profile details with NHA for creating ABHA address and click on "Continue" button', async () => {
    const checkbox = await $("~checkBox");
    await checkbox.click();
    await driver.pause(3000);

    await checkbox.click();
    await driver.pause(3000);

    const continueButton = await $("~Submit");
    await continueButton.click();
    await driver.pause(3000);
  });

  // it('Create ABHA address. ABHA address needs to be created as per ABHA address policy', async () => {

  //     const Abha_Address_Creation = await($('//android.widget.EditText[@text="Create Abha Address"]'));
  //     await Abha_Address_Creation.click();
  //     await driver.pause(3000);

  //     await Abha_Address_Creation.setValue("venktrmn2114");
  //     await driver.pause(3000);

  //     await Abha_Address_Creation.setValue("venktrmn2114");
  //     await driver.pause(3000);

  //     const Abha_Address_Value = await Abha_Address_Creation.getText();
  //     expect(Abha_Address_Value).toBe("venktrmn2114@abdm")
  //     await driver.pause(3000);

  //     const Abha_Address_Suggestion = (await $('//android.widget.TextView[@text="venkat@abdm"]'));
  //     await Abha_Address_Suggestion.click();
  //     await driver.pause(3000);

  //     const Create_New_Abha_Address = await $('~Create_Abha_Address');
  //     await Create_New_Abha_Address.setValue("venktrmn2114@abdm");

  //     const Abha_Address_Taken = await $('~Address Taken')
  //     await Abha_Address_Taken.getText();

  //     await Create_New_Abha_Address.setValue("venktrmn2424@abdm");

  //     const Abha_Address_Creation_Button = await $('~Create New ABHA Addressbutton');
  //     await Abha_Address_Creation_Button.click();

  // });

  it("Create ABHA address. ABHA address needs to be created as per ABHA address policy", async () => {
    const Abha_Address_Creation = await $(
      '//android.widget.EditText[@text="Create Abha Address"]'
    );
    await Abha_Address_Creation.click();
    await driver.pause(3000);

    await Abha_Address_Creation.setValue("venktrmn2114");
    await driver.pause(3000);

    const Abha_Address_Creation_Button = await $(
      '//android.view.ViewGroup[@content-desc="Create New ABHA Addressbutton"]'
    );
    await Abha_Address_Creation_Button.click();

    const Abha_Address_Taken = await $(
      '//android.widget.TextView[@text="The address is already in use."]'
    );
    const errorMsg = await Abha_Address_Taken.getText();

    if (errorMsg.includes("Already taken")) {
      console.log("ABHA Address is already taken. Selecting suggestion...");

      // const Abha_Address_Suggestion = await $('//android.widget.TextView[@text="venkata_2000"]');
      // await Abha_Address_Suggestion.click();
      // await driver.pause(3000);
    }

    await Abha_Address_Creation.setValue("._"); ///////////////////////////////////////
    await driver.pause(3000);
    await Abha_Address_Creation_Button.click();
    const Abha_Address_Value = await Abha_Address_Creation.getText(); //// policy sholud view
    expect(Abha_Address_Value).toBe(
      " Minimum length - 8 characters  Maximum length - 18 characters Special characters allowed - 1 dot (.) and/or 1 underscore (_) Special character dot and underscore should be in between. Special characters cannot be in the beginning or at the end   Alphanumeric - only numbers, only letters or any combination of numbers and letters is allowed."
    );
    await driver.pause(3000);

    await Abha_Address_Creation.setValue("venkata_934426"); ///////////////////////////////////////
    await driver.pause(3000);

    const Abha_value = Abha_Address_Creation.getText();

    await Abha_Address_Creation_Button.click();
    await driver.pause(3000);
  });

  it('Create password, confirm password and click on "Submit" button. Password needs to be created as per password policy. ', async () => {
    const passwordField = await $(
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.EditText"
    );
    const passwordeye = await $(
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.ImageView"
    );
    const confirmPasswordField = await $(
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.EditText"
    );
    const confirmpasswordeye = await $(
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.widget.ImageView"
    );
    const submitButton = await $(
      '//android.view.ViewGroup[@content-desc="Submitbutton"]'
    );
    const errormessage = await $(
      '//android.widget.TextView[@text="Passwords do not match."]'
    );

    const password = "Venkat@2002";
    const password2 = "Venkata@2001";

    await passwordField.setValue(password);
    await driver.pause(2000);
    await passwordeye.click();
    await driver.pause(2000);

    await confirmPasswordField.setValue(password2);
    await driver.pause(2000);
    await confirmpasswordeye.click();
    await driver.pause(3000);

    expect(await errormessage.getText()).toBe("Passwords do not match.");

    await passwordField.setValue(password);
    await driver.pause(2000);

    await confirmPasswordField.setValue(password);
    await driver.pause(2000);

    await submitButton.click();
    await driver.pause(3000);
  });

  it('Congratulation Screen is displayed stating "Congratulations! ABHA address is created successfully " and click on "Login" button ', async () => {
    const Login_Button = await $("~Login");
    await Login_Button.click();
    await driver.pause(3000);
  });

  it('Provide Consent after clicking on login button. Click on "I Agree" against "Personal Data Processing Consent Form". Post this user is able to successfully Login', async () => {
    const Agree_Statement = await $(
      '//android.widget.TextView[@text="I Agree against personal Data Processing consent Form"]'
    );
    const Submit = await $("~Submitbutton");

    await Agree_Statement.getText();
    await driver.pause(3000);

    await Submit.click();
    await driver.pause(3000);

    const Abha_value = await $(
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[6]/android.view.ViewGroup[2]/android.widget.TextView[5]"
    );

    await Abha_value.getText();
  });

  it("Logout", async () => {
    const setting = await $(
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]"
    );
    await setting.click();
    await driver.pause(2000);

    const Logout = await $('//android.view.ViewGroup[@content-desc="Log out"]');
    await Logout.click();
    await driver.pause(2000);

    const Logout_Yes = await $('//android.view.ViewGroup[@content-desc="Yes"]');
    await Logout_Yes.click();
    await driver.pause(2000);
  });
});

// describe('"ABHA number creation with KYC such as aadhar, DL, etc.Suppose an individual is creating ABHA number using Aadhar as KYC"', () => {
//   var originalTimeout: number;

//   beforeEach(function () {
//     originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
//     jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
//   });

//   afterEach(function () {
//     jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
//   });

//   it('Click on "Register" to create a new ABHA Number', async () => {
//     await driver.pause(5000);
//     const ABHA = await $('//android.widget.Button[@content-desc=" Records"]');
//     await driver.pause(5000);
//     await ABHA.click(); // Click on Record
//   });

//   it('Click on "Register" to create a new ABHA Number', async () => {
//     const Create_ABHA = await $("~Create Now");
//     await Create_ABHA.click();
//     await driver.pause(5000); // Create Abha
//   });
//   it("Click on option (aadhar / DL) through which an individual wants to create the ABHA no. Suppose an individual select aadhar as an option to create the ABHA no. Ensure that aadhar is linked to mobile no as aadhar OTP authentication is needed to create ABHA no with aadhar flow. ", async () => {
//     await driver.pause(5000);

//     const Email_ID = await $(
//       '//android.view.ViewGroup[@content-desc="ABHA Number"]'
//     );
//     await Email_ID.click(); // Create Abha Address
//   });

//   it("Enter 12 - digit aadhar no and provide consent to voluntary share aadhar demographic information for creation of ABHA no", async () => {
//     await (
//       await $('//android.widget.EditText[@content-desc="Aadhar Number"]')
//     ).setValue("934426952424"); ///MOBILE NUMBER --- aBHA NUMBER
//     await driver.pause(2000);

//     await (await $("~Continue")).click();
//     await driver.pause(2000);

//     const Checkbox = await $(
//       '//android.view.ViewGroup[@content-desc="checkBox"]'
//     );
//     await Checkbox.click();
//     await driver.pause(3000);

//     await (await $("~Continue")).click();
//     await driver.pause(5000);

//     await Checkbox.click();
//     await driver.pause(3000);

//     await (await $("~Continue")).click();
//     await driver.pause(5000);
//     await driver.pause(20000);
//   });

//   it(" Validate mobile OTP received on entered mobile number", async () => {
//     // const otpInputs = [
//     //     await $('~Digit1'),
//     //     await $('~Digit2'),
//     //     await $('~Digit3'),
//     //     await $('~Digit4'),
//     //     await $('~Digit5'),
//     //     await $('~Digit6')
//     // ];

//     // const otp = "270423";

//     // for (let i = 0; i < otp.length; i++) {
//     //     await otpInputs[i].setValue(otp[i]);
//     // }

//     // await driver.pause(3000);
//     // const errorMessageElement = await $('~ErrorMessage');

//     // const errorMessageText = await errorMessageElement.getText();

//     // expect(errorMessageText).toBe('Invalid OTP');

//     // console.log('Error Message:', errorMessageText);

//     const Allow_button = await $(
//       '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.Button[2]'
//     );
//     await Allow_button.click();
//     await driver.pause(3000);

//     await (await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.EditText")).setValue("9344269524");
//     await driver.pause(2000);

//     await (await $("~Continue")).click();
//     await driver.pause(2000);

//     const error_message_Moblie_number = await (await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[3]")).getText();
//     if (error_message_Moblie_number === "Expected Text") {
//       await (await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.EditText")).setValue("934426952");
//       console.log("Setting phone number to 934426952 based on Error text");
//       await driver.pause(2000);
//     } else {
//       await (await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.EditText")).setValue("9344269524");
//       console.log("Setting phone number to 7092327667 based on Error text");
//     }

//     await (await $("~Verify")).click();
//     await driver.pause(5000);

//     await Allow_button.click();
//     await driver.pause(3000);
//   });

//   it('ABHA number card is created using aadhar demographic information. Click on "Download ABHA number card" to download the ABHA number card. All details in the ABHA number card are as per aadhar KYC. ', async () => {
//     await driver.pause(5000);

//     const Abha_Card_Download = await $("~Abha_Card_Download");
//     await Abha_Card_Download.click();
//   });
// });

// describe("Reset Password", () => {
//   var originalTimeout: number;

//   beforeEach(function () {
//     originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
//     jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
//   });

//   afterEach(function () {
//     jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
//   });

//   it("Login with any mode - mobile number / email ID / default ABHA address / easy to remember ABHA address / ABHA number and Post successful login, click on reset password withing setting of the menu bar ", async () => {
//     await driver.pause(5000);

//     const Setting = await $("~Setting");
//     await Setting.click();

//     await driver.pause(5000);

//     const Change_Password = await $("~Setting");
//     await Change_Password.click();
//   });

//   it("Create password as per password policy. and Confirm password", async () => {
//     const passwordField = await $(
//       '//android.widget.EditText[@text="New Password"]'
//     );
//     const passwordeye = await $(
//       '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.ImageView'
//     );
//     const confirmPasswordField = await $(
//       '//android.widget.EditText[@text="Confirm Password"]'
//     );
//     const confirmpasswordeye = await $(
//       '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.widget.ImageView'
//     );
//     const submitButton = await $(
//       '//android.view.ViewGroup[@content-desc="Submitbutton"]'
//     );
//     const errormessage = await $(
//       '//android.widget.TextView[@text="Passwords do not match."]'
//     );

//     const password = "Venkat@2002";
//     const password2 = "Venkata@2001";

//     await passwordField.setValue(password);
//     await driver.pause(2000);
//     await passwordeye.click();
//     await driver.pause(2000);

//     await confirmPasswordField.setValue(password2);
//     await driver.pause(2000);
//     await confirmpasswordeye.click();
//     await driver.pause(3000);

//     expect(await errormessage.getText()).toBe("Passwords do not match.");

//     await passwordField.setValue(password);
//     await driver.pause(2000);

//     await confirmPasswordField.setValue(password);
//     await driver.pause(2000);

//     await submitButton.click();
//     await driver.pause(3000);
//   });

//   it('A message is displayed called "Your password is successfully changed" ', async () => {
//     const Password_Changed = await $("~Password_Changed");
//     expect(await Password_Changed.getText()).toBe(
//       "Your password is successfully changed"
//     );
//     await driver.pause(5000);
//   });
// });
