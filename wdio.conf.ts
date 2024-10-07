import type { Options } from '@wdio/types'
import { join } from 'path'

export const config: Options.Testrunner = {
    // ====================
    // Runner Configuration
    // ====================
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            transpileOnly: true,
            project: 'tsconfig.json'
        }
    },
    port: 4723,
    path: '/wd/hub/',
    specs: [

        './Apptest/specs/ABHA_PHR/Signup1.ts'
        // './Apptest/specs/Test1.ts'

        // './Apptest/specs/ABHA_PHR/Login_old.ts'
        

    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    capabilities: [{
        // "appium:udid": "192.168.1.130:37311",
       
        "appium:udid": "ae21a39", 
        "appium:deviceName": "POCO X3",
        "platformName": "Android",
        "appium:platformVersion": "12",
        "appium:automationName": "UiAutomator2",
        "appium:app": join(process.cwd(),'apps/app-ABHA-4.apk'),
        "appium:appPackage": "com.plenome.aayush",
        "appium:appWaitActivity": ".MainActivity",

        // "appium:udid": "emulator-5554",
        // "appium:deviceName": "emulator-5554",
        // "platformName": "Android",
        // "appium:platformVersion": "12",
        // "appium:automationName": "UiAutomator2",
        // "appium:app": join(process.cwd(),'apps/app-ABHA-2.apk'),
        // "appium:appPackage": "com.plenome.aayush",
        // "appium:appWaitActivity": ".MainActivity"
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'jasmine',
    reporters: ['spec'],
    jasmineOpts: {
        defaultTimeoutInterval: 60000,
        expectationResultHandler: function(passed, assertion) {
            // do something
        }
    }
}
