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
  "duration": 14200462000,
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
  "duration": 229393600,
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
  "duration": 151042700,
  "status": "passed"
});
formatter.match({
  "location": "Loginsteps.user_click_on_login_button()"
});
formatter.result({
  "duration": 9059022000,
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
  "duration": 3056224400,
  "status": "passed"
});
formatter.match({
  "location": "Loginsteps.user_click_on_logout_link()"
});
formatter.result({
  "duration": 1963625800,
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
  "duration": 42447200,
  "status": "passed"
});
formatter.match({
  "location": "Loginsteps.close_brawser()"
});
formatter.result({
  "duration": 1080219200,
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
  "duration": 5670238500,
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
  "duration": 352839400,
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
  "duration": 317529500,
  "status": "passed"
});
formatter.match({
  "location": "Loginsteps.user_click_on_login_button()"
});
formatter.result({
  "duration": 6750068600,
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
  "duration": 3037918100,
  "status": "passed"
});
formatter.match({
  "location": "Loginsteps.user_click_on_logout_link()"
});
formatter.result({
  "duration": 1820722100,
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
  "duration": 35650300,
  "status": "passed"
});
formatter.match({
  "location": "Loginsteps.close_brawser()"
});
formatter.result({
  "duration": 863798300,
  "status": "passed"
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
  "duration": 4389476600,
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
  "duration": 321368800,
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
  "duration": 162167800,
  "status": "passed"
});
formatter.match({
  "location": "Loginsteps.user_click_on_login_button()"
});
formatter.result({
  "duration": 663302800,
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
  "duration": 36597200,
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
formatter.result({
  "duration": 4725163800,
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
  "duration": 283402800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 24
    }
  ],
  "location": "Loginsteps.user_enter_password_as(String)"
});
formatter.result({
  "duration": 148387700,
  "status": "passed"
});
formatter.match({
  "location": "Loginsteps.user_click_on_login_button()"
});
formatter.result({
  "duration": 785839000,
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
  "duration": 24848800,
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
});