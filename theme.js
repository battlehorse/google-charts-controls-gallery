var theme = (function() {
  var wrapperElementId;
  
  var themeRegistry = {};
  
  var switchTheme = function(theme) {
    document.getElementById(wrapperElementId).setAttribute('class', theme);
    var customTheme = document.getElementById('__customTheme');
    if (!!customTheme &&  customTheme.parentNode) {
      customTheme.parentNode.removeChild(customTheme);
    }

    if (!theme) {
      return;
    }
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute('href', 'themes/' + theme + '.css');
    link.setAttribute('id', '__customTheme');
    head.appendChild(link);
  };
    
  var bindToTheme = function(element, theme) {
    themeRegistry[theme] = true;
    if (element.addEventListener) {  
      element.addEventListener('click', function() {
        switchTheme(theme);
      }, false);   
    } else if (element.attachEvent) {  
      element.attachEvent('onclick', function() {
        switchTheme(theme);
      });  
    }     
  };
  
  return {
    setWrapperElementId: function(id) {
      wrapperElementId = id;
    },
    setFromHash: function() {
      var t = window.location.hash.substring(1);
      if (t in themeRegistry) {
        switchTheme(t);
      }
    },
    bindToTheme: bindToTheme
  };
})();