$(document).ready(function() {

  var generateQuote = function(){
    $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?")
      .done(function(data) {
        var tweetURL = "https://twitter.com/intent/tweet?text="

        $("#quote").html("&ldquo;" + data.quoteText + "&rdquo;");
        $("#author").html("&#8213;" + data.quoteAuthor);
        $(".twitter-share-button").attr('href', encodeURI(tweetURL + data.quoteText + " - " + data.quoteAuthor));
        console.log("href is " + $(".twitter-share-button").attr('href'));
      })
      .fail(errorHandler);
  };

  function errorHandler(jqxhr, textStatus, err) {
    console.log("Request Failed: " + textStatus + ", " + err);
  };

  $("button").on("click", function(){
    generateQuote();
  });

  generateQuote();

  //test

});
