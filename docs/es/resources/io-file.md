# IO Format file

[block:html]
{
  "html": "<!-- This page has content shared with the partner docs. If you update\nthis page, be sure to check if the same change applies to\n\"Online ordering webhooks\". -->\n\n<!--JIRA DS-3009; Region pill icon added to topic on 3.22.2023-->\n<!--JIRA DS-4731 & DS-5009; Added Postman related steps and clarified the technical information -->\n\n<meta name=\" description\" content= \"Learn how to set up and manage webhooks to receive real-time notifications and take action on them.\" >\n\n\n<div class=\"container\">\n<!--US-->\n  <div class=\"pill\">\n    <div class=\"label\">United States</div></div>\n<!--Canada-->\n  <div class=\"pill\">\n    <div class=\"label\">Canada</div>\n</div>\n</div>\n\n<style>\nbody {\n  font-family: \"Segoe UI\", \"Roboto\",\n    \"Segoe UI Symbol\";\n}\n.container {\n  align-items: center;\n  min-width: 10%;\n  text-align: left;\n   overflow: auto;\n}\n/*Pill format*/\n.pill {\n  background: #44BB44;\n  border: .5px solid #44BB44;\n  margin-left: 5px;\n  overflow: auto;\n\n}\n/*Text positioning inside the pill*/\n.pill,\n.pill__addon {\n  display: inline-block;\n  box-sizing: border-box;\n  padding: 0px 10px;\n  border-radius: 10px;\n  position: relative;\n  height: 1.5rem;\n}\n/*Text format inside the pill*/\n.pill .label,\n.pill__addon .label {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 0.70rem;\n  color: #fff;\n  display: inline-block;\n  vertical-align: middle;\n \n}\n</style>"
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "/assets/images/cat-dog.png",
        "cat-dog.png",
        1600
      ],
      "align": "center",
      "sizing": "300",
      "border": true
    }
  ]
}
[/block]

[block:parameters]
{
  "data": {
    "h-0": "Field",
    "h-1": "Description",
    "0-0": "`appId`",
    "0-1": "Identifier (`ID`) of the application that sends the data updates.",
    "1-0": "`merchants`",
    "1-1": "One or more merchant arrays indicated by the merchant identifier (`mID`).",
    "2-0": "`update`",
    "2-1": "One or more `update` objects, each containing an:  \n- `objectId`  \n-`type`  \n- `ts`  \nSee [Update object](https://docs.clover.com/docs/webhooks#update-object)."
  },
  "cols": 2,
  "rows": 3,
  "align": [
    "left",
    "left"
  ]
}
[/block]
