$(document).ready(function()  {
$("button").on("click", function() {
var animal = $("#data-animal").val();
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
animal + "&api_key=iZUd4TnqSidctRLrT3nT3kTTfDoYFfoL";
$.ajax({
url: queryURL,
method: "GET"
})
.then(function(response) {
console.log(response);
var results = response.data;
for (var i = 0; i < 10; i++) {
var animalDiv = $(".column");
var animalImage = $("#images");
animalImage.attr("src", results[i].images.fixed_height.url);
animalDiv.append(animalImage);
$("#gifs-appear-here").prepend(animalDiv);
}
});
});
});