function SSOLogin_DocTranslations_withCheckpoints()
{
  //Launches the specified browser and opens the specified URL in it.
  Browsers.Item(btChrome).Run("https://staging.alexatranslations.com/translate/signin/?next=/");
  OCR.Recognize(Aliases.browser.BrowserWindow).BlockByText("Log In | Alexa Transl...", spLeftMost).Click();
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
  //Clicks the 'panelDropFilesHereOrClickTo' control.
  Aliases.browser.pageStagingAlexatranslationsComT.FindElement("#btnRemove").Click();
  Aliases.browser.pageStagingAlexatranslationsComT.FindElement("//button[.='Yes, proceed!']").click();
  Aliases.browser.pageStagingAlexatranslationsComT.formFileUpload.panelDropFilesHereOrClickTo.Click();
  //Opens the 'C:\Users\alexa\Downloads\Test Document\Document Translation\English\docx_sample_EN.docx' file via the 'dlgOpen' dialog.
  Aliases.browser.dlgOpen.OpenFile("C:\\Users\\alexa\\Downloads\\Test Document\\Document Translation\\English\\docx_sample_EN.docx", "Custom Files (*.docx;*.pdf;*.xlsx;*.potx;*.pptx;*.idml;*.xml;*.htm;*.html;*.vsdx;*.txt;*.xliff;*.csv)");
  //Clicks the 'buttonAr' button.
  Aliases.browser.pageStagingAlexatranslationsComT.buttonAr.ClickButton();
  //Clicks the 'textnodeFrenchFr' control.
  Aliases.browser.pageStagingAlexatranslationsComT.textnodeFrenchFr.Click();
  //Clicks the 'buttonBtnstart' button.
  Aliases.browser.pageStagingAlexatranslationsComT.buttonBtnstart.ClickButton();
  //Double-clicks the 'textnodeCompleted2' object.
  aqUtils.Delay(3600);
   //aqUtils.Delay(125000);
  //Aliases.browser.pageStagingAlexatranslationsComT.textnodeCompleted2.DblClick(36, 13);
  //Checks whether the 'contentText' property of the Aliases.browser.pageStagingAlexatranslationsComT.FindElement("//table[@id='tech-companies-1']//tr/td/span[contains(@class, 'text-success')]") object equals 'Completed'..
  
  Log.Message(Aliases.browser.pageStagingAlexatranslationsComT.FindElement("//table[@id='tech-companies-1']//tr[0]//td[7]"));
  aqObject.CheckProperty(Aliases.browser.pageStagingAlexatranslationsComT.FindElement("//table[@id='tech-companies-1']//tr[0]//td[7]"), "innerText", cmpEqual, "Completed");

  //Clicks the 'textnodeParth2' control.
  //Aliases.browser.pageStagingAlexatranslationsComT.textnodeEn2.textnodeParth.linkParth.textnodeParth2.Click();
  //Clicks the 'linkLogout' link.
  Aliases.browser.pageStagingAlexatranslationsComT.textnodeEn2.textnodeParth.linkLogout.Click();
  //Closes the 'BrowserWindow' window.
  Aliases.browser.BrowserWindow.Close();
}