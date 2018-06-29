$(document).ready(function () {
  $("button").on("click", function () {
    var input = $("#data-input").val();
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      input + "&api_key=iZUd4TnqSidctRLrT3nT3kTTfDoYFfoL";
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function (response) {
        console.log(response);
        var results = response.data;
        for (var i = 0; i < 10; i++) {
          var inputDiv = $(".column");
          var inputImage = $("#images");
          inputImage.attr("src", results[i].images.fixed_height.url);
          inputDiv.append(inputImage);
          $(".gifs-appear-here").prepend(inputDiv);
        }
      });
  });
});