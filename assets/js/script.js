var button = $(".button")

button.on("click", function(event) {
    event.preventDefault();
    var searchTerm = $("#search-term").val().trim();
    $("#search-term").val("");    

    query(searchTerm);

});

function query(search) {

var APIKey = "03bcff2180c6d2724009dc9ca02a8daf2b3bed636f4ca3ae537b04eccc8cfb75";
var queryURL = "https://www.themuse.com/api/public/jobs?page=1&api-key=" + APIKey;

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
    jobName.addClass("company-name");

    $("#results").append(jobName);
    $("#results").append(jobCompany);

        
    }
    
    
    
}





var button = $('.button');
button.on('click', function(event) {
    event.preventDefault();
    $.ajax({
        method: 'get',
        url: 'https://github-jobs-proxy.appspot.com/positions?description=javascript&location=san+francisco'
    })
    .then(response => {
        console.log(response);
    })
    })




});
}



  