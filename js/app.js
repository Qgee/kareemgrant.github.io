$(function(){

  $("#itunes-search").submit(function(){
    event.preventDefault();
    var searchTerm = $("#search-term").val();
    search(searchTerm);
    $("#results-table tbody").html("");
    $("#search-term").val("");
  });

  function displayResults(data){
    $.each(data.results, function(index, result){
      $("#results-table tbody")
        .append("<tr><td><img src=" + result.artworkUrl60 + " " + "/></td><td>" + result.artistName + "</td><td>" +  result.trackName + "</td><td>" + result.collectionName + "</td><td>" + result.primaryGenreName + "</td><td><a href="+ result.previewUrl + " " + "target='_blank'>Preview Track</a></td></tr>");
    });
  }

  function search(term){
    var url = "https://itunes.apple.com/search";

    $.ajax({
      url: url,
      type: "GET",
      dataType: 'jsonp',
      data: {term: term},
      success: function(data){
        console.log(data);
        displayResults(data);
      }
    });
  }
});
