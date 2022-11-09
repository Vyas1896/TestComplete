Given("The tested app is running", function (){
  var url = "https://staging.alexatranslations.com/";

  Browsers.Item(btChrome).Run(url);
  var page = Sys.Browser("*").Page(url);  
});

Given("The Login form is on screen", function (){
  
});

When("I enter {arg} in the username and {arg} in password edit box", function (param1, param2){
    var page = Sys.Browser("*").Page(url);
    page.Login.TextBox("UserName").SetText(param1);
    page.Login.TextBox("Password").SetText(param2);
});

When("I click Log In once", function (){
  
});

Then("I should see the document translation page in the Homepage", function (){
  throw new NotImplementedError();
});
