$(document).ready(function() {

  $("#search-btn").on('click', function() {
    document.querySelector('#wiki-results').innerHTML = "";
    getData();
    postMessage();
  });

  function getData () {
    $.getJSON("https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=" + $("#input").val() + "&format=json&prop=info|extracts&inprop=url&exsentences=2&exintro=true&callback=?", function(data) {

      for (var key in data.query.pages) {
        if (data.query.pages.hasOwnProperty(key)) {

          var wikiItem = '<a href=" ' + data.query.pages[key].fullurl + ' " target="_blank"><div class=wiki-item><strong>' + data.query.pages[key].title + '</strong><br>' + data.query.pages[key].extract + '</div></a>';
          document.querySelector('#wiki-results').innerHTML += wikiItem;
        };
      };
    });
  };

  function postMessage() {
    var text = "<br>You searched \"" + $("#input").val() + "\"";
    console.log(text);
//    console.log("page text is " + $("#message").text);
    document.querySelector('#message').innerHTML = text;
    $("#input").val('');
  };
});
