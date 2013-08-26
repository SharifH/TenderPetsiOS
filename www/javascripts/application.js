
// steroids.view.navigationBar.show("Hello World");
function loginClick(){
  var webView = new steroids.views.WebView();
  steroids.layers.push(webView);
};

function showInfoModal() {
    var modalWebView = new steroids.views.WebView("info.html");
    steroids.modal.show(modalWebView);
  };




steroids.view.navigationBar.show("TenderPets");