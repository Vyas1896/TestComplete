function Testing_all_left_side_button()
{
     Browsers.Item(btChrome).RunOptions = "-incognito"
    Delay(3000)
    Browsers.Item(btChrome).Run();
  //Launches the specified browser and opens the specified URL in it.
  Browsers.Item(btChrome).Run("https://staging.alexatranslations.com/translate/signin/?next=/");
  OCR.Recognize(Aliases.browser.BrowserWindow).BlockByText("Alexa", spLeftMost).Click();
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'textnodeSignInWithSso' control.
  Aliases.browser.pageLogInAlexaTranslationsAI.linkSignInWithSso.textnodeSignInWithSso.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageCorporateIdLogin.Wait();
  //Clicks the 'textboxEmail' control.
  Aliases.browser.pageCorporateIdLogin.formFormLogin.textboxEmail.Click();
  //Sets the text 'parth.vyas@alexatranslations.com' in the 'textboxEmail' text editor.
  Aliases.browser.pageCorporateIdLogin.formFormLogin.textboxEmail.SetText("parth.vyas@alexatranslations.com");
  //Enters '[Enter]' in the 'textboxEmail' object.
  Aliases.browser.pageCorporateIdLogin.formFormLogin.textboxEmail.Keys("[Enter]");
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageStagingAlexatranslationsComT.Wait();
  //Clicks the 'buttonNewProject' button.
  Aliases.browser.pageStagingAlexatranslationsComT.textnodeSideMenu.buttonNewProject.ClickButton();
  //Waits until the browser loads the page and is ready to accept user input.
 aqUtils.Delay(28000); 
  Aliases.browser.pageStagingAlexatranslationsComD.Wait(-1);
  
  //Checks whether the 'contentText' property of the Aliases.browser.pageStagingAlexatranslationsComD.FindElement("//h4[.='Manage Projects']") object equals 'Manage Projects'.
  aqObject.CheckProperty(Aliases.browser.pageStagingAlexatranslationsComD.FindElement("//h4[.='Manage Projects']"), "contentText", cmpEqual, "Manage Projects");
  //Clicks the 'textnodeTmCreator' control.
  Aliases.browser.pageStagingAlexatranslationsComD.textnodeSideMenu.textnodeTmCreator.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageStagingAlexatranslationsComT2.Wait();
  //Checks whether the 'contentText' property of the Aliases.browser.pageStagingAlexatranslationsComT2.FindElement("//h4[contains(@class, 'header-title')]") object equals 'Create Translation Memories for a Faster and More Efficient Workflow'.
  aqObject.CheckProperty(Aliases.browser.pageStagingAlexatranslationsComT2.FindElement("//h4[contains(@class, 'header-title')]"), "contentText", cmpEqual, "Create Translation Memories for a Faster and More Efficient Workflow");
  //Clicks the 'textnodeTbExtractor' control.
  Aliases.browser.pageStagingAlexatranslationsComT2.textnodeSideMenu.textnodeTbExtractor.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageStagingAlexatranslationsComT3.Wait();
  //Checks whether the 'contentText' property of the Aliases.browser.pageStagingAlexatranslationsComT3.FindElement("//h4[.='Create Term Bases for a Faster and More Efficient Workflow']") object equals 'Create Term Bases for a Faster and More Efficient Workflow'.
  aqObject.CheckProperty(Aliases.browser.pageStagingAlexatranslationsComT3.FindElement("//h4[.='Create Term Bases for a Faster and More Efficient Workflow']"), "contentText", cmpEqual, "Create Term Bases for a Faster and More Efficient Workflow");
  //Clicks the 'linkTmCleaner' link.
  Aliases.browser.pageStagingAlexatranslationsComT3.textnodeSideMenu.linkTmCleaner.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageStagingAlexatranslationsComT4.Wait();
  //Checks whether the 'contentText' property of the Aliases.browser.pageStagingAlexatranslationsComT4.FindElement("//h4[.='Clean and Customize TM Files to Your Desired Processing Level']") object equals 'Clean and Customize TM Files to Your Desired Processing Level'.
  aqObject.CheckProperty(Aliases.browser.pageStagingAlexatranslationsComT4.FindElement("//h4[.='Clean and Customize TM Files to Your Desired Processing Level']"), "contentText", cmpEqual, "Clean and Customize TM Files to Your Desired Processing Level");
  //Clicks the 'textnodePdfConverter' control.
  Aliases.browser.pageStagingAlexatranslationsComT4.textnodeSideMenu.textnodePdfConverter.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageStagingAlexatranslationsComT10.Wait();
  //Clicks the 'textnodeTermBases' control.
  Aliases.browser.pageStagingAlexatranslationsComT10.textnodeSideMenu.textnodeTermBases.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageStagingAlexatranslationsComT5.Wait();
  //Checks whether the 'contentText' property of the Aliases.browser.pageStagingAlexatranslationsComT5.FindElement("//h4[.='Upload and Prioritize']") object equals 'Upload and Prioritize'.
 // aqObject.CheckProperty(Aliases.browser.pageStagingAlexatranslationsComT5.FindElement("//h4[.='Upload and Prioritize']"), "contentText", cmpEqual, "Upload and Prioritize");
  //Waits until the browser loads the page and is ready to accept user input.
  // aqUtils.Delay(28000); 
//  Aliases.browser.pageStagingAlexatranslationsComT6.Wait();
  //Checks whether the 'contentText' property of the Aliases.browser.pageStagingAlexatranslationsComT6.FindElement("//p[contains(., 'Note:')]") object equals 'Note:
  //If a new Translation Memory is uploaded with the same name as a previously uploaded Translation Memory, the previous Translation Memory will be replaced with the new one.'.
  aqObject.CheckProperty(Aliases.browser.pageStagingAlexatranslationsComT6.FindElement("//p[contains(., 'Note:')]"), "contentText", cmpEqual, "Note:\nIf a new Translation Memory is uploaded with the same name as a previously uploaded Translation Memory, the previous Translation Memory will be replaced with the new one.");
  //Clicks the 'textnodeMyEdits' control.
  Aliases.browser.pageStagingAlexatranslationsComT6.textnodeSideMenu.textnodeMyEdits.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageStagingAlexatranslationsComT7.Wait();
  //Checks whether the 'contentText' property of the Aliases.browser.pageStagingAlexatranslationsComT7.FindElement("//h4[.='Manage edited translations']") object equals 'Manage edited translations'.
  aqObject.CheckProperty(Aliases.browser.pageStagingAlexatranslationsComT7.FindElement("//h4[.='Manage edited translations']"), "contentText", cmpEqual, "Manage edited translations");
  //Clicks the 'textnodeMyProjects' control.
  Aliases.browser.pageStagingAlexatranslationsComT7.textnodeSideMenu.textnodeMyProjects.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageStagingAlexatranslationsComD.Wait();
  //Checks whether the 'contentText' property of the Aliases.browser.pageStagingAlexatranslationsComD.FindElement("//td[contains(., 'US Project2')]") object equals 'US Project2'.
  aqObject.CheckProperty(Aliases.browser.pageStagingAlexatranslationsComD.FindElement("//td[contains(., 'US Project2')]"), "contentText", cmpEqual, "US Project2");
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageStagingAlexatranslationsComT8.Wait();
  //Checks whether the 'contentText' property of the Aliases.browser.pageStagingAlexatranslationsComT8.FindElement("//h4[.='Add new segments to TM/TB database.']") object equals 'Add new segments to TM/TB database.'.
  aqObject.CheckProperty(Aliases.browser.pageStagingAlexatranslationsComT8.FindElement("//h4[.='Add new segments to TM/TB database.']"), "contentText", cmpEqual, "Add new segments to TM/TB database.");
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageStagingAlexatranslationsComT9.Wait();
  //Checks whether the 'contentText' property of the Aliases.browser.pageStagingAlexatranslationsComT9.FindElement("//div/div[contains(@class, 'mt-3')]") object equals 'Enterprise Usage
  //100%
  //Word Count
  //10293870
  //Quota
  //300000
  //Download Report (.csv)
  //Download Monthly Report (.csv)'.
  aqObject.CheckProperty(Aliases.browser.pageStagingAlexatranslationsComT9.FindElement("//div/div[contains(@class, 'mt-3')]"), "contentText", cmpEqual, "Enterprise Usage\n100%\nWord Count\n10293870\nQuota\n300000\nDownload Report (.csv)\nDownload Monthly Report (.csv)");
  //Double-clicks the 'textnodeParth2' object.
  Aliases.browser.pageStagingAlexatranslationsComT9.textnodeEn.textnodeParth.linkParth.textnodeParth2.DblClick(12, 1);
  //Clicks the 'textnodeParth2' control.
  Aliases.browser.pageStagingAlexatranslationsComT9.textnodeEn.textnodeParth.linkParth.textnodeParth2.Click();
  //Clicks the 'textnodeLogout' control.
  Aliases.browser.pageStagingAlexatranslationsComT9.textnodeEn.textnodeParth.linkLogout.textnodeLogout.Click();
  //Closes the 'BrowserWindow' window.
  Aliases.browser.BrowserWindow.Close();
}