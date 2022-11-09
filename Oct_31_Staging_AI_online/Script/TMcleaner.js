function TMCleaner()
{
  //Launches the specified browser and opens the specified URL in it.
  Browsers.Item(btChrome).Run("https://staging.alexatranslations.com/translate/signin/?next=/");
  //Clicks the 'BrowserWindow' object.
  Aliases.browser.BrowserWindow.Click(222, 99);
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
  //Clicks the 'linkTmCleaner' link.
  Aliases.browser.pageStagingAlexatranslationsComT.textnodeSideMenu.linkTmCleaner.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageStagingAlexatranslationsComT4.Wait();
  //Clicks the 'labelTmx' control.
  Aliases.browser.pageStagingAlexatranslationsComT4.formFileUpload.labelTmx.Click();
  //Clicks the 'labelText2TxtFiles' control.
  Aliases.browser.pageStagingAlexatranslationsComT4.formFileUpload.labelText2TxtFiles.Click();
  //Clicks the 'textnodeDropFilesHereOrClickTo' control.
  Aliases.browser.pageStagingAlexatranslationsComT4.formFileUpload.textnodeDropFilesHereOrClickTo.Click();
  //Clicks the 256 item of the 'toolbarUpBand' toolbar.
  Aliases.browser.dlgOpen.WorkerW.ReBarWindow32.UpBand.toolbarUpBand.ClickItem(256, false);
  //Clicks the 256 item of the 'toolbarUpBand' toolbar.
  Aliases.browser.dlgOpen.WorkerW.ReBarWindow32.UpBand.toolbarUpBand.ClickItem(256, false);
  //Rotates the mouse wheel to -1 over the 'TM_TB_fix_documents_Epic_1214_' object.
  Aliases.browser.dlgOpen.DUIViewWndClassName.Explorer_Pane.CtrlNotifySink2.ShellView.Items_View.Earlier_this_year.TM_TB_fix_documents_Epic_1214_.MouseWheel(-1);
  //Rotates the mouse wheel to -1 over the 'Name' object.
  Aliases.browser.dlgOpen.DUIViewWndClassName.Explorer_Pane.CtrlNotifySink2.ShellView.Items_View.Earlier_this_year.Files_for_testing_TrendMicro_virus_scan.Name.MouseWheel(-1);
  //Clicks the 'Name' object.
  Aliases.browser.dlgOpen.DUIViewWndClassName.Explorer_Pane.CtrlNotifySink2.ShellView.Items_View.Earlier_this_year.TM_TB_testing_package.Name.Click(90, 20);
  OCR.Recognize(Aliases.browser.dlgOpen.DUIViewWndClassName.Explorer_Pane.CtrlNotifySink2.ShellView.Items_View.Earlier_this_year.TM_TB_testing_package.Name).BlockByText("package").DblClick();
  //Clicks the 'Items_View' object.
  Aliases.browser.dlgOpen.DUIViewWndClassName.Explorer_Pane.CtrlNotifySink2.ShellView.Items_View.Click(151, 231);
  //Double-clicks the 'Name' object.
  Aliases.browser.dlgOpen.DUIViewWndClassName.Explorer_Pane.CtrlNotifySink2.ShellView.Items_View.Earlier_this_year.EN_to_FR.Name.DblClick(41, 3);
  OCR.Recognize(Aliases.browser.dlgOpen.DUIViewWndClassName.Explorer_Pane.CtrlNotifySink2.ShellView.Items_View.Earlier_this_year.bohan_low_tm_eng_fra_docx_sample_EN_mod1216_xlsx.Name).BlockByText("bohan_low_tm_eng_fra_docx_sample_EN_m").Click();
  //Clicks the 'Edit' object.
  Aliases.browser.dlgOpen.cbxFileName.ComboBox.Edit.Click(304, 2);
  //Enters '^[ReleaseLast]' in the 'Edit' object.
  Aliases.browser.dlgOpen.cbxFileName.ComboBox.Edit.Keys("^[ReleaseLast]");
  //Clicks the 'Edit' object.
  Aliases.browser.dlgOpen.cbxFileName.ComboBox.Edit.Click(348, 11);
  //Enters '^a^c' in the 'Edit' object.
  Aliases.browser.dlgOpen.cbxFileName.ComboBox.Edit.Keys("^a^c");
  //Clicks the 'toolbar' object.
  Aliases.browser.dlgOpen.WorkerW.ReBarWindow32.AddressBandRoot.progress.BreadcrumbParent.toolbar.Click(439, 18);
  //Enters '^c^c^c' in the 'Edit' object.
  Aliases.browser.dlgOpen.WorkerW.ReBarWindow32.AddressBandRoot.progress.comboBox.ComboBox.Edit.Keys("^c^c^c");
  //Clicks the 'Items_View' object.
  Aliases.browser.dlgOpen.DUIViewWndClassName.Explorer_Pane.CtrlNotifySink2.ShellView.Items_View.Click(248, 192);
  //Clicks the 'toolbar' object.
  Aliases.browser.dlgOpen.WorkerW.ReBarWindow32.AddressBandRoot.progress.BreadcrumbParent.toolbar.Click(425, 4);
  //Enters '^c' in the 'Edit' object.
  Aliases.browser.dlgOpen.WorkerW.ReBarWindow32.AddressBandRoot.progress.comboBox.ComboBox.Edit.Keys("^c");
  //Double-clicks the 'Edit' object.
  Aliases.browser.dlgOpen.cbxFileName.ComboBox.Edit.DblClick(321, 11);
  //Enters '^a' in the 'Edit' object.
  Aliases.browser.dlgOpen.cbxFileName.ComboBox.Edit.Keys("^a");
  //Enters the text 'C:\Users\alexa\Downloads\Test Document\TM TB testing package\EN to FR' in the 'cbxFileName' text editor.
  Aliases.browser.dlgOpen.cbxFileName.SetText("C:\\Users\\alexa\\Downloads\\Test Document\\TM TB testing package\\EN to FR");
  //Clicks the 'Edit' object.
  Aliases.browser.dlgOpen.cbxFileName.ComboBox.Edit.Click(420, 7);
  //Enters the text 'C:\Users\alexa\Downloads\Test Document\TM TB testing package\EN to FR\bohan_low_tm_eng_fra_docx_sample_EN_mod1216.xlsx' in the 'cbxFileName' text editor.
  Aliases.browser.dlgOpen.cbxFileName.SetText("C:\\Users\\alexa\\Downloads\\Test Document\\TM TB testing package\\EN to FR\\bohan_low_tm_eng_fra_docx_sample_EN_mod1216.xlsx");
  //Clicks the 'dlgOpen' object.
  Aliases.browser.dlgOpen.Click(703, 503);
  //Clicks the 'dlgOpen' object.
  Aliases.browser.dlgOpen.Click(647, 497);
  //Clicks the 'ComboBox' object.
  Aliases.browser.dlgOpen.cbxFileName.ComboBox.Click(423, 1);
  //Clicks the 'Edit' object.
  Aliases.browser.dlgOpen.cbxFileName.ComboBox.Edit.Click(418, 7);
  //Clicks the 'btnOpen' button.
  Aliases.browser.dlgOpen.btnOpen.ClickButton();
  //Clicks the 'buttonTgtUpload' button.
  Aliases.browser.pageStagingAlexatranslationsComT4.formFileUpload.buttonTgtUpload.ClickButton();
  //Clicks the 'textnodeFrenchFr' control.
  Aliases.browser.pageStagingAlexatranslationsComT4.formFileUpload.textnodeFrenchFr.Click();
  //Clicks the 'buttonBtnstart' button.
  Aliases.browser.pageStagingAlexatranslationsComT4.formFileUpload.buttonBtnstart.ClickButton();
   aqUtils.Delay(4000); 
  //Checks whether the 'contentText' property of the Aliases.browser.pageStagingAlexatranslationsComT4.FindElement("//th[.='File Name']") object equals 'File Name'.
  aqObject.CheckProperty(Aliases.browser.pageStagingAlexatranslationsComT4.FindElement("//th[.='File Name']"), "contentText", cmpEqual, "File Name");
  //Checks whether the 'contentText' property of the Aliases.browser.pageStagingAlexatranslationsComT4.FindElement("//th[.='Actions']") object equals 'Actions'.
  aqObject.CheckProperty(Aliases.browser.pageStagingAlexatranslationsComT4.FindElement("//th[.='Actions']"), "contentText", cmpEqual, "Actions");
  //Clicks the 'textnodeLogout' control.
  Aliases.browser.pageStagingAlexatranslationsComT4.textnodeEn.textnodeParth.linkLogout.textnodeLogout.Click();
  //Clicks the 'Confirm' object.
  Aliases.browser.pageStagingAlexatranslationsComT4.Confirm.Click(182, 98);
  //Clicks the 'buttonOk' control.
  Aliases.browser.pageStagingAlexatranslationsComT4.Confirm.buttonOk.ClickButton();
  //Closes the 'BrowserWindow' window.
  Aliases.browser.BrowserWindow.Close();
}