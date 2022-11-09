function Doctranslation_withoutrecaptcha()
{
  //Rotates the mouse wheel to -5 over the 'FolderView' object.
  Aliases.explorer.wndProgman.SHELLDLL_DefView.FolderView.MouseWheel(-5);
  //Launches the specified browser and opens the specified URL in it.
  Browsers.Item(btChrome).Run("https://staging.alexatranslations.com/translate/signin/?next=/");
  //Clicks the 'BrowserWindow' object.
  Aliases.browser.BrowserWindow.Click(194, 103);
  Aliases.browser.BrowserWindow.Maximize();
  //Double-clicks the 'RichEditD2DPT' object.
  Aliases.Notepad.wndNotepad.RichEditD2DPT.DblClick(89, 48);
  //Clicks the 'RichEditD2DPT' object.
  Aliases.Notepad.wndNotepad.RichEditD2DPT.Click(90, 48);
  //Double-clicks the 'RichEditD2DPT' object.
  Aliases.Notepad.wndNotepad.RichEditD2DPT.DblClick(99, 76);
  //Enters '^c^c' in the 'RichEditD2DPT' object.
  Aliases.Notepad.wndNotepad.RichEditD2DPT.Keys("^c^c");

  //Drags the 'textboxUsernameOrEmail' object.
  Aliases.browser.pageLogInAlexaTranslationsAI.formFormLogin.textboxUsernameOrEmail.Drag(78, 25, -89, 7);
  //Enters '^v' in the 'textboxUsernameOrEmail' object.
  Aliases.browser.pageLogInAlexaTranslationsAI.formFormLogin.textboxUsernameOrEmail.Keys("^v");
  //Double-clicks the 'RichEditD2DPT' object.
  Aliases.Notepad.wndNotepad.RichEditD2DPT.DblClick(80, 37);
  //Drags the 'RichEditD2DPT' object.
  Aliases.Notepad.wndNotepad.RichEditD2DPT.Drag(141, 32, -143, 2);
  //Enters '^c^c' in the 'RichEditD2DPT' object.
  Aliases.Notepad.wndNotepad.RichEditD2DPT.Keys("^c^c");
  //Drags the 'textboxPassword' object.
  Aliases.browser.pageLogInAlexaTranslationsAI.formFormLogin.textboxPassword.Drag(88, 12, -96, 27);
  //Enters '^v' in the 'textboxPassword' object.
  Aliases.browser.pageLogInAlexaTranslationsAI.formFormLogin.textboxPassword.Keys("^v");
  //Clicks the 'buttonLogIn' button.
  Aliases.browser.pageLogInAlexaTranslationsAI.formFormLogin.buttonLogIn.ClickButton();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageStagingAlexatranslationsCom.Wait();
  //Clicks the 'BrowserWindow' object.
  Aliases.browser.BrowserWindow.Click(1218, 91);
  //Clicks the 'buttonBtnremove' button.
  Aliases.browser.pageStagingAlexatranslationsCom.buttonBtnremove.ClickButton();
  //Clicks the 'buttonYesProceed' button.
  Aliases.browser.pageStagingAlexatranslationsCom.buttonYesProceed.ClickButton();
  //Clicks the 'panelDivDragDrop' control..0
  Aliases.browser.pageStagingAlexatranslationsCom.formFileUpload.panelDivDragDrop.Click();
  //Opens the 'C:\Users\alexa\Downloads\Test Document\Document Translation\English\docx_sample_EN.docx' file via the 'dlgOpen' dialog.
  Aliases.browser.dlgOpen.OpenFile("C:\\Users\\alexa\\Downloads\\Test Document\\Document Translation\\English\\docx_sample_EN.docx", "Custom Files (*.docx;*.pdf;*.xlsx;*.potx;*.pptx;*.idml;*.xml;*.htm;*.html;*.vsdx;*.txt;*.xliff;*.csv)");
  //Checks whether the 'contentText' property of the Aliases.browser.pageStagingAlexatranslationsCom.FindElement("//table[@id='tech-companies-1']//tr/td/span[contains(@class, 'align-middle')]") object equals 'Not Started'.
  aqObject.CheckProperty(Aliases.browser.pageStagingAlexatranslationsCom.FindElement("//table[@id='tech-companies-1']//tr/td/span[contains(@class, 'align-middle')]"), "contentText", cmpEqual, "Not Started");
  //Clicks the 'linkStart' link.
  Aliases.browser.pageStagingAlexatranslationsCom.linkStart.Click();
  //Clicks the 'cellTechCompanies1Col6' control.
  Aliases.browser.pageStagingAlexatranslationsCom.cellTechCompanies1Col6.Click();
  //Checks whether the 'contentText' property of the Aliases.browser.pageStagingAlexatranslationsCom.FindElement("//table[@id='tech-companies-1']//tr/td/span[contains(@class, 'text-success')]") object equals 'Completed'.
  aqObject.CheckProperty(Aliases.browser.pageStagingAlexatranslationsCom.FindElement("//table[@id='tech-companies-1']//tr/td/span[contains(@class, 'text-success')]"), "contentText", cmpEqual, "Completed");
  //Clicks the 'textnodeTest2' control.
  Aliases.browser.pageStagingAlexatranslationsCom.textnodeEn.textnodeTest.linkTest.textnodeTest2.Click();
  //Clicks the 'textnodeLogout' control.
  Aliases.browser.pageStagingAlexatranslationsCom.textnodeEn.textnodeParth.linkLogout.textnodeLogout.Click();
  //Closes the 'BrowserWindow' window.
  Aliases.browser.BrowserWindow.Close();
}