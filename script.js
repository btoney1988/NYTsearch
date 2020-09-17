var searchTerm = $("#data-term").val()
var searchAmount = $("#data-number").val()
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
  searchTerm + "&api-key=XifkJtNweRbppBE2JopGNncGKjHiUlNZ&limit=" + searchAmount;

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function (response) {
  $("#search-button").on("click", function () {
    console.log(response);
  })
});