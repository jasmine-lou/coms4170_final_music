$(document).ready(function() {
    $("#results").empty();
    $("#results").append("<div class='row'>You Got " + num_correct + " correct answers out of 4, Congratulations!</div>")
    $("#buttons").append(`<a class="btn btn-primary" href="/home" role="button">Homepage</a>`)
    $("#buttons").append(`<a class="btn btn-primary" href="/quiz/1" role="button">Quiz Again</a>`)
})
