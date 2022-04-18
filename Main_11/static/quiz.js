$(document).ready(function() {
    //quiz_json = JSON.parse(quiz_content)

    switch (question) {
        case 1:
            prompt = "What key is this?"
            $("#question").text(prompt)
            $("#media").append(`<img src='${media}'>`)
            $("#buttons").append(`<a class="btn btn-primary" href="/quiz/2" role="button">Next</a>`)
            break
        case 2:
            prompt = "How many sharps/flats does this have?"
            $("#question").text(prompt)
            $("#buttons").append(`<a class="btn btn-primary" href="/quiz/3" role="button">Next</a>`)
            break
        case 3:
            prompt = "What key is this scale in?"
            $("#question").text(prompt)
            $("#media").append(`<audio controls><source src='${media}'></audio>`)
            $("#buttons").append(`<a class="btn btn-primary" href="/quiz/4" role="button">Next</a>`)
            break
        case 4:
            prompt = "What key is this melody in?"
            $("#question").text(prompt)
            $("#media").append(`<audio controls><source src='${media}'></audio>`)
            $("#buttons").append(`<a class="btn btn-primary" href="/quiz/results" role="button">Finish</a>`)
            break
        default:
          console.log(`Sorry, ${expr} is not a valid question.`);
      }
})
