$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature/demo4.feature");
formatter.feature({
  "line": 1,
  "name": "Login Action",
  "description": "",
  "id": "login-action",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Successful Login with Credentials",
  "description": "",
  "id": "login-action;successful-login-with-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "User opens the application",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "User click on signin Link",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Message displayed Login Successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "login-action;successful-login-with-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 9,
      "id": "login-action;successful-login-with-credentials;;1"
    },
    {
      "cells": [
        "lalitha",
        "password123"
      ],
      "line": 10,
      "id": "login-action;successful-login-with-credentials;;2"
    },
    {
      "cells": [
        "admin",
        "password456"
      ],
      "line": 11,
      "id": "login-action;successful-login-with-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "Successful Login with Credentials",
  "description": "",
  "id": "login-action;successful-login-with-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "User opens the application",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "User click on signin Link",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "User enters \"lalitha\" and \"password123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Message displayed Login Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Demo4_Parameterization.user_opens_the_application()"
});
formatter.result({
  "duration": 10046025700,
  "status": "passed"
});
formatter.match({
  "location": "Demo4_Parameterization.user_click_on_signin_Link()"
});
formatter.result({
  "duration": 1937315000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lalitha",
      "offset": 13
    },
    {
      "val": "password123",
      "offset": 27
    }
  ],
  "location": "Demo4_Parameterization.user_enters_and(String,String)"
});
formatter.result({
  "duration": 795037800,
  "status": "passed"
});
formatter.match({
  "location": "Demo4_Parameterization.message_displayed_Login_Successfully()"
});
formatter.result({
  "duration": 465988900,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Successful Login with Credentials",
  "description": "",
  "id": "login-action;successful-login-with-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "User opens the application",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "User click on signin Link",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "User enters \"admin\" and \"password456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Message displayed Login Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Demo4_Parameterization.user_opens_the_application()"
});
formatter.result({
  "duration": 9051303100,
  "status": "passed"
});
formatter.match({
  "location": "Demo4_Parameterization.user_click_on_signin_Link()"
});
formatter.result({
  "duration": 1471611200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 13
    },
    {
      "val": "password456",
      "offset": 25
    }
  ],
  "location": "Demo4_Parameterization.user_enters_and(String,String)"
});
formatter.result({
  "duration": 505393700,
  "status": "passed"
});
formatter.match({
  "location": "Demo4_Parameterization.message_displayed_Login_Successfully()"
});
formatter.result({
  "duration": 451163800,
  "status": "passed"
});
});