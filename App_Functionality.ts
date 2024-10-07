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

    await (await $("~phoneNumberInput")).setValue("934426952");
    await driver.pause(2000);

    await (await $("~Get OTP")).click();
    await driver.pause(5000);

    const error_message_Moblie_number = await (await $("~errorText")).getText();
    if (error_message_Moblie_number === "Expected Text") {
      await (await $("~phoneNumberInput")).setValue("934426952");
      console.log("Setting phone number to 934426952 based on Error text");
      await driver.pause(2000);
    } else {
      await (await $("~phoneNumberInput")).setValue("9344269524");
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
      '//android.widget.Button[@resource-id="com.google.android.gms:id/positive_button"]'
    );
    await Allow_button.click();
    await driver.pause(3000);

    await (await $("~MPININPUT")).setValue("5555");
    await driver.pause(2000);
    await (await $("~tab")).click();
  });

  it("Dashboard Screen ", async () => {
    await driver.pause(5000);
  });
});

describe("Display Profile Details with status as KYC Verified / Self-Declared", () => {
  var originalTimeout: number;

  beforeEach(function () {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
  });

  afterEach(function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });

  it("6.Showing individuals profile details in the PHR app", async () => {
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
    const error_message_Moblie_number = await (await $("~errorText")).getText();
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
      '//android.widget.Button[@resource-id="com.google.android.gms:id/positive_button"]'
    );
    await Allow_button.click();
    await driver.pause(3000);

    await (await $("~phoneNumberInput")).setValue("9344269524");
    await driver.pause(2000);

    await (await $("~Continue")).click();
    await driver.pause(2000);

    const error_message_Moblie_number = await (await $("~errorText")).getText();
    if (error_message_Moblie_number === "Expected Text") {
      await (await $("~phoneNumberInput")).setValue("934426952");
      console.log("Setting phone number to 934426952 based on Error text");
      await driver.pause(2000);
    } else {
      await (await $("~phoneNumberInput")).setValue("9344269524");
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

    // const Create_New_Abha_Address = await $('//android.view.ViewGroup[@content-desc="Create New ABHA Addressbutton"]');

    // await Create_New_Abha_Address.click();
    // await driver.pause(3000);
  });
});

describe("6. Display Profile Details with status as KYC Verified / Self-Declared", () => {
  var originalTimeout: number;

  beforeEach(function () {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
  });

  afterEach(function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });

  it("Showing individual`s profile details in the PHR app", async () => {
    const ABHA_Dashboard = await $('~Dashboard"]');

    await ABHA_Dashboard.isDisplayed();
    await driver.pause(3000);

    const Setting = await $("~Setting");

    await Setting.click();
    await driver.pause(3000);

    const Profile = await $("~Profile");

    await Profile.click();
    await driver.pause(3000);
  });

  it("Individual`s profile is displayed in the PHR app with their status such as KYC verified and Self-Declared. ", async () => {
    const profile_status = await $("~profile_status");

    const profile_status_Text = await profile_status.getText();

    if (profile_status_Text === "KYC Verified") {
      console.log("Profile status is KYC Verified");
    } else if (profile_status_Text === "Self-Declared") {
      console.log("Profile Status is Self-Declared");
    } else {
      console.log("Profile status is unknown or not displayed correctly");
    }

    expect(await profile_status_Text).toBe(["KYC Verified", "Self-Declared"]);

    // const back_button = await $('~back_button');

    // await back_button.click();
    // await driver.pause(3000);
  });
});

describe("17.Edit profile for KYC verified profile", () => {
  var originalTimeout: number;

  beforeEach(function () {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
  });

  afterEach(function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });

  it("Edit profile for KYC verified profile", async () => {
    const profile_status = await $("~profile_status");

    expect(await profile_status.getText()).toBe("KYC Verified");

    const Edit_Profile = await $("~Edit Profile");
    await Edit_Profile.click();
    await driver.pause(3000);
  });

  it("17.1 Update mobile number", async () => {
    await (await $("~phoneNumberInput")).setValue("934426952");
    await driver.pause(2000);

    await (await $("~Get OTP")).click();
    await driver.pause(5000);

    const error_message_Moblie_number = await (await $("~errorText")).getText();
    if (error_message_Moblie_number === "Expected Text") {
      await (await $("~phoneNumberInput")).setValue("934426952");
      console.log("Setting phone number to 934426952 based on Error text");
      await driver.pause(2000);
    } else {
      await (await $("~phoneNumberInput")).setValue("9344269524");
      console.log("Setting phone number to 7092327667 based on Error text");
    }

    await (await $("~Get OTP")).click();
    await driver.pause(5000);

    await driver.pause(60000);
    const Resend_Moblie = await $("~Resend");
    await Resend_Moblie.click();

    const Allow_button = await $(
      '//android.widget.Button[@resource-id="com.google.android.gms:id/positive_button"]'
    );
    await Allow_button.click();
    await driver.pause(3000);
  });

  it("17.2 Update Email-ID number", async () => {
    const Email_Update = await $("~Email_Update");
    await Email_Update.click();
    await driver.pause(3000);

    await (await $("~Email_Input")).setValue("venktrmn2114@gmail.com");
    await driver.pause(2000);

    await (await $("~Get OTP")).click();
    await driver.pause(5000);

    const error_message_Email = await (await $("~errorText")).getText();
    if (error_message_Email === "Expected Text") {
      await (await $("~phoneNumberInput")).setValue("venktrmn2114gmail.com");
      console.log("Setting phone number to 934426952 based on Error text");
      await driver.pause(2000);
    } else {
      await (await $("~phoneNumberInput")).setValue("venktrmn2114@gmail.com");
      console.log(
        "Setting phone number to venktrmn2114@gmail.com based on Error text"
      );
    }

    await (await $("~Get OTP")).click();
    await driver.pause(5000);

    await driver.pause(60000);
    const Resend = await $("~Resend");
    await Resend.click();
    await driver.pause(5000);

    // Enter the email - OTP manually.
  });

  it("17.3 Update Address", async () => {
    const Full_name = await $("~Full_name");
    const isEditable = await Full_name.getAttribute("VenkataRamanan");
    expect(isEditable).toBe("false");

    const Gender = await $("~Gender");
    const isClickable = await Gender.getAttribute("clickable");
    expect(isClickable).toBe("false");

    const DOB = await $("~DOB");
    const isEditables = await DOB.getAttribute("14-11-2000");
    expect(isEditables).toBe("false");

    const Mobile_Number_Update = await $("~Moblie numeber Update");
    await Mobile_Number_Update.click();
    await driver.pause(3000);

    const addressInput = await $("~Address input");
    await addressInput.setValue("24/30 Morrison 6th street");
    await driver.pause(3000);

    const state = await $("~Statedropdown");
    await state.click();
    const stateinput = await $("~Statedropdown input");
    await stateinput.setValue("Tamil Nadu");
    await driver.pause(3000);
    const stateOption = await $("~StateDropdownItem_33");
    await stateOption.click();
    await driver.pause(3000);

    const district = await $("~Districtdropdown");
    await district.click();
    const districtinput = await $("~Districtdropdown input");
    await driver.pause(3000);
    await districtinput.setValue("Chennai");
    const districtOption = await $("~DistrictDropdownItem_568");
    await districtOption.click();
    await driver.pause(3000);

    const pincodeInput = await $("~Pincode input");
    await pincodeInput.setValue("600016");
    await driver.pause(3000);

    const Update_Button = await $("~Update_Button");
    await Update_Button.click();
    await driver.pause(3000);
  });
});

describe("18.Edit profile for Self-Declared profile", () => {
  var originalTimeout: number;

  beforeEach(function () {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
  });

  afterEach(function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });

  it("Edit profile for Self-Declared profile", async () => {
    const profile_status = await $("~profile_status");

    expect(await profile_status.getText()).toBe("Self-Declared");

    const Edit_Profile = await $("~Edit Profile");
    await Edit_Profile.click();
    await driver.pause(3000);

});

it("18.1 Update Photo", async () => {

    const Photo_Edit = await $("~Photo_Edit");
    await Photo_Edit.click();
    await driver.pause(3000);

    const Photo_Edit_Document = await $("~Photo_Edit_Document");
    await Photo_Edit_Document.click();
    await driver.pause(3000);

   

});


it("18.2 Update Full Name", async () => {

    const fullNameInput = await $("~Full Name input");
    await fullNameInput.setValue("Venkat");
    await driver.pause(3000);
});

it("18.4 Update DoB", async () => {

    const dobInput = await $("~Date of Birth");
    await dobInput.setValue("14-11-2000");
    await driver.pause(3000);

});


    it("18.3 Update Gender", async () => {
    const genderInput = await $("~Genderdropdown");
    await genderInput.click();
    const genderOption = await $('//android.view.ViewGroup[@content-desc="GenderDropdownItem_M"]');
    await genderOption.click();
    await driver.pause(3000);


});



    it("18.5 Update Mobile No", async () => {
      await (await $("~phoneNumberInput")).setValue("934426952");
      await driver.pause(2000);

      await (await $("~Get OTP")).click();
      await driver.pause(5000);

      const error_message_Moblie_number = await (
        await $("~errorText")
      ).getText();

      if (error_message_Moblie_number === "Expected Text") {
        await (await $("~phoneNumberInput")).setValue("934426952");
        console.log("Setting phone number to 934426952 based on Error text");
        await driver.pause(2000);
      } else {
        await (await $("~phoneNumberInput")).setValue("9344269524");
        console.log("Setting phone number to 7092327667 based on Error text");
      }

      await (await $("~Get OTP")).click();
      await driver.pause(5000);

      await driver.pause(60000);
      const Resend_Moblie = await $("~Resend");
      await Resend_Moblie.click();

      const Allow_button = await $(
        '//android.widget.Button[@resource-id="com.google.android.gms:id/positive_button"]'
      );
      await Allow_button.click();
      await driver.pause(3000);
    });

    it("18.6 Update Email-ID number", async () => {
      const Email_Update = await $("~Email_Update");
      await Email_Update.click();
      await driver.pause(3000);

      await (await $("~Email_Input")).setValue("venktrmn2114@gmail.com");
      await driver.pause(2000);

      await (await $("~Get OTP")).click();
      await driver.pause(5000);

      const error_message_Email = await (await $("~errorText")).getText();
      if (error_message_Email === "Expected Text") {
        await (await $("~phoneNumberInput")).setValue("venktrmn2114gmail.com");
        console.log("Setting phone number to 934426952 based on Error text");
        await driver.pause(2000);
      } else {
        await (await $("~phoneNumberInput")).setValue("venktrmn2114@gmail.com");
        console.log(
          "Setting phone number to venktrmn2114@gmail.com based on Error text"
        );
      }

      await (await $("~Get OTP")).click();
      await driver.pause(5000);

      await driver.pause(60000);
      const Resend = await $("~Resend");
      await Resend.click();
      await driver.pause(5000);

      // Enter the email - OTP manually.
    });

    it("18.7 Update Address", async () => {


        const addressInput = await $("~Address input");
        await addressInput.setValue("24/30 Morrison 6th street");
        await driver.pause(3000);
    
        const state = await $("~Statedropdown");
        await state.click();
        const stateinput = await $("~Statedropdown input");
        await stateinput.setValue("Tamil Nadu");
        await driver.pause(3000);
        const stateOption = await $("~StateDropdownItem_33");
        await stateOption.click();
        await driver.pause(3000);
    
        const district = await $("~Districtdropdown");
        await district.click();
        const districtinput = await $("~Districtdropdown input");
        await driver.pause(3000);
        await districtinput.setValue("Chennai");
        const districtOption = await $("~DistrictDropdownItem_568");
        await districtOption.click();
        await driver.pause(3000);
    
        const pincodeInput = await $("~Pincode input");
        await pincodeInput.setValue("600016");
        await driver.pause(3000);

       
       
       
       
        const Update_Button = await $("~Update_Button");
    await Update_Button.click();
    await driver.pause(3000);


    });

    
  
});



    

    

    

   