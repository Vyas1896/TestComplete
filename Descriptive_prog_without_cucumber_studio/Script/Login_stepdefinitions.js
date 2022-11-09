Given("The application is up and running", function (){
 // Browsers.Item(btEdge).Run()
 //Browsers.Item(btEdge).RunOptions = "-inprivate"
 Browsers.Item(btEdge).Run("https://staging.alexatranslations.com/")  
// Sys.Browser().BrowserWindow(0).Maximize();
});
When("user enter valid username {arg}", function (param1){ 
  browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  textbox = browser.pageLogInAlexaTranslationsAI.formFormLogin.textboxUsernameOrEmail;
  textbox.Click();
  textbox.Keys(param1);
});
When("user enter valid password {arg}", function (param1){
  browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  passwordBox = browser.pageLogInAlexaTranslationsAI.formFormLogin.passwordboxPassword;
  passwordBox.Click();
  passwordBox.SetText(param1);
});
Then("user should log in and see documnent translation dashboard", function (){
  let browser = Aliases.browser;
  let browserWindow = browser.BrowserWindow;
  browserWindow.Maximize();
  browser.pageLogInAlexaTranslationsAI.formFormLogin.buttonLogIn.ClickButton();
  let page = browser.pageStagingAlexatranslationsCom;
  page.Wait();
  aqObject.CheckProperty(Aliases.browser.pageStagingAlexatranslationsCom.FindElement("//form//div[contains(@class, 'fileupload-buttonbar')]"), "contentText", cmpEqual, "Drop Files Here or Click to Browse\nSupported File Types: DOCX, HTM, HTML, IDML, PDF, POTX, PPTX, TXT, VSDX, XLIFF, XLSX, CSV or XML files and then click the \"Start\" button to begin translation.\nEach file must be less than 20MB in size.\nUploading...");
  let textNode = page.textnodeEn.textnodeTest;
  textNode.linkTest.textnodeTest2.Click();
  textNode.linkLogout.textnodeLogout.Click();
  browserWindow.Close();
 });

When("user enter in-valid username {arg}", function (username){
 let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  let textbox = browser.pageLogInAlexaTranslationsAI.formFormLogin.textboxUsernameOrEmail;
  textbox.Click();
  textbox.SetText(username);  
});
When("user enter in-valid password {arg}", function (password){
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  let passwordBox = browser.pageLogInAlexaTranslationsAI.formFormLogin.passwordboxPassword;
  passwordBox.Click();
  passwordBox.SetText(password);  
});
Then("user should not log in to A.I.online and see the error message", function (){  
  let browser = Aliases.browser;
  let browserWindow = browser.BrowserWindow;
  browserWindow.Maximize();
  browser.pageLogInAlexaTranslationsAI.formFormLogin.buttonLogIn.ClickButton();
  aqObject.CheckProperty(Aliases.browser.pageLogInAlexaTranslationsAI.FindElement("#error"), "contentText", cmpEqual, "Error verifying reCAPTCHA, please try again.");
  browserWindow.Close();
});
