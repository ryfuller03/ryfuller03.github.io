$(document).ready(function() {
  var bb_score = 0;
  var got_score = 0;


    $('#clicker').click(function() {
      $.ajax({
        dataType: "json",
        url: "https://api.breakingbadquotes.xyz/v1/quotes",
        success: function(results) {
          console.log(results[0]["quote"]);
          $('#bb-quote').text(results[0]["quote"]);
          $('#author-bb').text("-" + results[0]["author"]);
        },
        error: function(xhr,status,error) {
          console.log(error);
        }
      });
    $.ajax({
      dataType: "json",
      url: "https://api.gameofthronesquotes.xyz/v1/random",
      success: function(results) {
        console.log(results["sentence"]);
        $('#got-quote').text(results["sentence"]);
        $('#author-got').text("-" + results["character"]["name"]);
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
    });
  });

  $('#vote-got').click(function() {
    got_score += 1;
    $("#score-got").text(got_score);
  })

  $('#vote-bb').click(function() {
    bb_score += 1;
    $("#score-bb").text(bb_score);
  })
});