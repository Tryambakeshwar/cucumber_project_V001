$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Test sips-site Login functionality",
  "description": "",
  "id": "test-sips-site-login-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "verify login functinality with valid credential",
  "description": "",
  "id": "test-sips-site-login-functionality;verify-login-functinality-with-valid-credential",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user need to be on sips login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enter email as \"admin@yourstore.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enter password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "dashbord page title should be visible \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user click on logout link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "login page title should be visible \"Your store. Login\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "close brawser",
  "keyword": "And "
});
formatter.match({
  "location": "Loginsteps.user_need_to_be_on_sips_login_page()"
});
formatter.result({
  "duration": 13478752400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 21
    }
  ],
  "location": "Loginsteps.user_enter_email_as(String)"
});
formatter.result({
  "duration": 292514500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 24
    }
  ],
  "location": "Loginsteps.user_enter_password_as(String)"
});
formatter.result({
  "duration": 217426400,
  "status": "passed"
});
formatter.match({
  "location": "Loginsteps.user_click_on_login_button()"
});
formatter.result({
  "duration": 7465675900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 39
    }
  ],
  "location": "Loginsteps.dashbord_page_title_should_be_visible(String)"
});
formatter.result({
  "duration": 3252836800,
  "status": "passed"
});
formatter.match({
  "location": "Loginsteps.user_click_on_logout_link()"
});
formatter.result({
  "duration": 1765939500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your store. Login",
      "offset": 36
    }
  ],
  "location": "Loginsteps.login_page_title_should_be_visible(String)"
});
formatter.result({
  "duration": 35270100,
  "status": "passed"
});
formatter.match({
  "location": "Loginsteps.close_brawser()"
});
formatter.result({
  "duration": 852364900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "verify login functinality with valid and invalid credential",
  "description": "",
  "id": "test-sips-site-login-functionality;verify-login-functinality-with-valid-and-invalid-credential",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "user need to be on sips login page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "user enter email as \"\u003cemail\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user enter password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "dashbord page title should be visible \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user click on logout link",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "login page title should be visible \"Your store. Login\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "close brawser",
  "keyword": "And "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "test-sips-site-login-functionality;verify-login-functinality-with-valid-and-invalid-credential;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 24,
      "id": "test-sips-site-login-functionality;verify-login-functinality-with-valid-and-invalid-credential;;1"
    },
    {
      "cells": [
        "admin@yourstore.com",
        "admin"
      ],
      "line": 25,
      "id": "test-sips-site-login-functionality;verify-login-functinality-with-valid-and-invalid-credential;;2"
    },
    {
      "cells": [
        "admin234@yourstore.com",
        "admin"
      ],
      "line": 26,
      "id": "test-sips-site-login-functionality;verify-login-functinality-with-valid-and-invalid-credential;;3"
    },
    {
      "cells": [
        "admin@yourstore.com",
        "admin123"
      ],
      "line": 27,
      "id": "test-sips-site-login-functionality;verify-login-functinality-with-valid-and-invalid-credential;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
  "name": "verify login functinality with valid and invalid credential",
  "description": "",
  "id": "test-sips-site-login-functionality;verify-login-functinality-with-valid-and-invalid-credential;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "user need to be on sips login page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "user enter email as \"admin@yourstore.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user enter password as \"admin\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "dashbord page title should be visible \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user click on logout link",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "login page title should be visible \"Your store. Login\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "close brawser",
  "keyword": "And "
});
formatter.match({
  "location": "Loginsteps.user_need_to_be_on_sips_login_page()"
});
formatter.result({
  "duration": 4018624300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 21
    }
  ],
  "location": "Loginsteps.user_enter_email_as(String)"
});
formatter.result({
  "duration": 250367100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 24
    }
  ],
  "location": "Loginsteps.user_enter_password_as(String)"
});
formatter.result({
  "duration": 188118100,
  "status": "passed"
});
formatter.match({
  "location": "Loginsteps.user_click_on_login_button()"
});
formatter.result({
  "duration": 3474962500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 39
    }
  ],
  "location": "Loginsteps.dashbord_page_title_should_be_visible(String)"
});
formatter.result({
  "duration": 3044397800,
  "status": "passed"
});
formatter.match({
  "location": "Loginsteps.user_click_on_logout_link()"
});
formatter.result({
  "duration": 776375800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your store. Login",
      "offset": 36
    }
  ],
  "location": "Loginsteps.login_page_title_should_be_visible(String)"
});
formatter.result({
  "duration": 662503100,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d108.0.5359.125)\nBuild info: version: \u00273.5.2\u0027, revision: \u002710229a9\u0027, time: \u00272017-08-21T17:29:55.15Z\u0027\nSystem info: host: \u0027DESKTOP-4MFCGRI\u0027, ip: \u0027192.168.72.39\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.15\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d108.0.5359.71 (1e0e3868ee06e91ad636a874420e3ca3ae3756ac-refs/branch-heads/5359@{#1016}), userDataDir\u003dC:\\Users\\Tryambak\\AppData\\Local\\Temp\\scoped_dir12588_564659664}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dANY, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:64170}, webauthn:extension:credBlob\u003dtrue, acceptInsecureCerts\u003dfalse, browserVersion\u003d108.0.5359.125, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dwindows, setWindowRect\u003dtrue, webauthn:extension:largeBlob\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: a974b8bd53a6e8ca60ec41c1076409ab\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:698)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getTitle(RemoteWebDriver.java:372)\r\n\tat stepDefinations.Loginsteps.login_page_title_should_be_visible(Loginsteps.java:69)\r\n\tat ✽.And login page title should be visible \"Your store. Login\"(./Features/login.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Loginsteps.close_brawser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 26,
  "name": "verify login functinality with valid and invalid credential",
  "description": "",
  "id": "test-sips-site-login-functionality;verify-login-functinality-with-valid-and-invalid-credential;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "user need to be on sips login page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "user enter email as \"admin234@yourstore.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user enter password as \"admin\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "dashbord page title should be visible \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user click on logout link",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "login page title should be visible \"Your store. Login\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "close brawser",
  "keyword": "And "
});
formatter.match({
  "location": "Loginsteps.user_need_to_be_on_sips_login_page()"
});
formatter.result({
  "duration": 4669883000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin234@yourstore.com",
      "offset": 21
    }
  ],
  "location": "Loginsteps.user_enter_email_as(String)"
});
formatter.result({
  "duration": 401810100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 24
    }
  ],
  "location": "Loginsteps.user_enter_password_as(String)"
});
formatter.result({
  "duration": 256362000,
  "status": "passed"
});
formatter.match({
  "location": "Loginsteps.user_click_on_login_button()"
});
formatter.result({
  "duration": 769341800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 39
    }
  ],
  "location": "Loginsteps.dashbord_page_title_should_be_visible(String)"
});
formatter.result({
  "duration": 54869000,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[Your store. Logi]n\u003e but was:\u003c[Dashboard / nopCommerce administratio]n\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat stepDefinations.Loginsteps.dashbord_page_title_should_be_visible(Loginsteps.java:53)\r\n\tat ✽.Then dashbord page title should be visible \"Dashboard / nopCommerce administration\"(./Features/login.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Loginsteps.user_click_on_logout_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Your store. Login",
      "offset": 36
    }
  ],
  "location": "Loginsteps.login_page_title_should_be_visible(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Loginsteps.close_brawser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 27,
  "name": "verify login functinality with valid and invalid credential",
  "description": "",
  "id": "test-sips-site-login-functionality;verify-login-functinality-with-valid-and-invalid-credential;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "user need to be on sips login page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "user enter email as \"admin@yourstore.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user enter password as \"admin123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "dashbord page title should be visible \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user click on logout link",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "login page title should be visible \"Your store. Login\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "close brawser",
  "keyword": "And "
});
formatter.match({
  "location": "Loginsteps.user_need_to_be_on_sips_login_page()"
});
