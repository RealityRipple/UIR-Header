if (!com) var com = {};
if (!com.RealityRipple) com.RealityRipple = {};
com.RealityRipple.UIRHrader = function()
{
 var pub = {};
 var priv = {};
 priv.Cc = Components.classes;
 priv.Ci = Components.interfaces;
 pub.init = function()
 {
  var httpRequestObserver =
  {
    observe: function(subject, topic, data) 
    {
      if (topic == "http-on-modify-request") 
      {
       var httpChannel = subject.QueryInterface(priv.Ci.nsIHttpChannel);
       if (httpChannel.URI.scheme == 'http')
       {
        httpChannel.setRequestHeader("Upgrade-Insecure-Requests", "1", false);
       }
      }
    }
  };
  var observerService = priv.Cc["@mozilla.org/observer-service;1"].getService(priv.Ci.nsIObserverService);
  observerService.addObserver(httpRequestObserver, "http-on-modify-request", false);
 }
 return pub;
}();

addEventListener("load", com.RealityRipple.UIRHrader.init, false);
