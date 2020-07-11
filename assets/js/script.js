var button = $(".button");


button.on("click", function(event) {
    event.preventDefault();
    searchTerm = $("#search-term").val().trim();
    $("#search-term").val("");    

    query(searchTerm);

});


// The Muse API
function query() {

var currentPage = "page=1";
var location = $("#location").val().trim();     
var category = "Engineering";    
var APIKey = "03bcff2180c6d2724009dc9ca02a8daf2b3bed636f4ca3ae537b04eccc8cfb75";
var queryURL = "https://www.themuse.com/api/public/jobs?" + currentPage + "&api-key=" + APIKey + "&category=" + category + "&location=" + location;


$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(queryURL);
  console.log(response);
  renderSearch();


  function renderSearch() { 
    $("#results").empty();
    for (i = 0; i < response.results.length; i++)  {

    var jobName = $("<p>");
    jobName.append(response.results[i].name);
    jobName.addClass("job-name");

    var jobCompany = $("<p>");
    jobCompany.append(response.results[i].company.name);
    jobCompany.addClass("company-name");

    var jobLocation = $("<p>");
    jobLocation.append(response.results[i].locations[0].name);
    jobLocation.addClass("job-location");

    var jobLink = $("<a href=" + response.results[i].refs.landing_page + "> Apply </a>");
    jobLink.addClass("job-link");

    $("#results").append(jobName);
    $("#results").append(jobCompany);
    $("#results").append(jobLocation);
    $("#results").append(jobLink);

    } 
}

});
}


