$(document).ready(function() {

  // Convenience function for inserting innerHTML for 'select'
  var insertHtml = function(selector, html) {
      var targetElem = document.getElementById(selector);
      targetElem.innerHTML = html;
  };

  var generateQuote = function(){
    var quoteText = "";
    var quoteAuthor = "";
    var responseObj;

    $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en").done (function(data) {
      var jsonObj = JSON.parse(data);
      quoteText = jsonObj.quoteText;
      quoteAuthor = jsonObj.quoteAuthor;
    });

    return quoteText;
  };

  insertHtml ("quote", generateQuote());

  $("button").on("click", function(){

    generateQuote();

    });

    $("quote").html();
  });
