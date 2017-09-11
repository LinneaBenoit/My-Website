$(document).ready(function() {

  function getLocation() {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        //fix this!!
          x.innerHTML = "Geolocation is not supported by this browser.";
      }
  }

  function showPosition(position) {

      $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude)
        .done(function(data) {
          $("#display-box").attr('style', 'background:url(images/' + data.weather[0].description.replace(/\s+/g, '-') + '.png) no-repeat center fixed; background-size:cover;');
          $("#location-name").text(data.name);
          $("#location-temp").html(Math.round(convertCelcius(data.main.temp)));
          $("#scale").html("F");
          $("#location-conds").html(data.weather[0].description);
          $("#location-image").attr('src', data.weather[0].icon);
          $("#location-image").attr('alt', data.weather[0].description);
        });
  }

  function convertCelcius(cTemp) {
    return cTemp * 1.8 + 32;
  }

  function convertFarenheit(fTemp) {
    return (fTemp - 32) / 1.8;
  }

  function changeScale(temp, scale) {
    console.log("scale is " + scale);
    if (scale.localeCompare("F") == 0) { //currently in farenheit
      $("#location-temp").html(Math.round(convertFarenheit(temp)));
      $("#scale").html("C");
    } else {
      $("#location-temp").html(Math.round(convertCelcius(temp)));
      $("#scale").html("F");
    };
  }

  $("#scale").on('click', function() {
    changeScale($("#location-temp").html(), $("#scale").html());
  });

  getLocation();

});
