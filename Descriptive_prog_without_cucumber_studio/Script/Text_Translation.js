When("I click on Text button", function (){
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  browser.pageStagingAlexatranslationsCom.textnodeDocuments.textnodeText.linkText.Click();
});

Then("I should see the text translation block", function (){
  aqObject.CheckProperty(Aliases.browser.pageStagingAlexatranslationsCom.FindElement("//a[contains(., 'Documents')]"), "contentText", cmpEqual, "Documents");
  aqObject.CheckProperty(Aliases.browser.pageStagingAlexatranslationsCom.FindElement("//a[contains(., 'Text')]"), "contentText", cmpEqual, "Text");
});

When("I enter any text on source text box", function (){
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  let textarea = browser.pageStagingAlexatranslationsCom.textareaSourceSentence;
  textarea.Click();
  textarea.Keys("Hello");
});

Then("It should give translation on target side", function (){
  aqObject.CheckProperty(Aliases.browser.pageStagingAlexatranslationsCom.FindElement("#target_sentence"), "contentText", cmpEqual, "Bonjour");
});

Then("close the browser", function (){
  let browser = Aliases.browser;
  let browserWindow = browser.BrowserWindow;
  browserWindow.Maximize();
  let textNode = browser.pageStagingAlexatranslationsCom.textnodeEn.textnodeTest;
  textNode.linkTest.textnodeTest2.Click();
  textNode.linkLogout.textnodeLogout.Click();
  browserWindow.Close();
});
