let answer = ""
let choices = []

// reused "check" onclick code
function check() {
    $("#check").click(function() {
        // checking if answer is correct
        // should 
        let correct = false
        $('input:radio').each(function() {
            console.log($(this).data("choice"))
            if($(this).is(':checked') && $(this).data("choice") == answer) {
                correct = true
            }
            // color feedback
            // if selection not correct, make color red
            if($(this).is(':checked') && $(this).data("choice") != answer) {
                r = $('label[for='+  this.id  +']')
                r.css({"background-color": "red", "color": "white"})
            }
            // highlight correct answer green
            if($(this).data("choice") == answer) {
                c = $('label[for='+  this.id  +']')
                c.css({"background-color": "green", "color": "white"})
            }
            // disabling buttons to solidify choice
            $(this).attr("disabled", true)
          })
        // textual feedback
        if(correct == true) {
            num_correct++
            alert("That's correct!")
        } else {
            alert("That's incorrect.")
        }

        // replace check button with next button
        $("#buttons").html("")
        // button to append is either "next" or "results"
        if(question == 4) {
            // link to results
            $("#buttons").append(`<a class="btn btn-primary" id="results" role="button">Results</a>`)
            $("#results").on("click", function() {
                window.location.replace(`http://127.0.0.1:5000/results/${num_correct}`)
            })
        }
        else {
            // go to next question
            $("#buttons").append(`<a class="btn btn-primary" id="next" role="button">Next</a>`)
            $("#next").on("click", function() {
                question++
                // if valid question count
                if(question < 5) {
                    // present next question
                    view_quiz(question)
                
                }
                // else ready for results 
                else {
                    alert(`You got ${num_correct}/4 questions correct.`)
                    window.location.replace("http://127.0.0.1:5000/")
                    /*
                    if(num_correct == 1) {
                        alert(`You got ${num_correct} question correct.`)
                    }
                    else {
                        alert(`You got ${num_correct} questions correct.`)
                    }
                    */
                }
            })
        }
        
    })
}


function view_quiz(question) {
    let media = quiz_content[question-1]["key_media"]
    choices = quiz_content[question-1]["choices"]
    answer = quiz_content[question-1]["answer"]
    console.log(typeof quiz_content[1])

    // clear page before displaying
    $("#question").text("")
    $("#media").html("")
    $("#buttons").html("")

    // clearing button html
    $("#option_1").html("")
    $("#option_2").html("")
    $("#option_3").html("")
    $("#option_4").html("")

    // clear disable and colors
    $('input:radio').each(function() {
        $(this).attr("disabled", false)
        $(this).prop("checked", false)
        $('label[for='+  this.id  +']').css({"background-color": "", "color": ""})
    })

    switch (question) {
        case 1:
            prompt = "What key is this?"
            $("#question").text(prompt)
            $("#media").append(`<img src='${media}'>`)
            $("#buttons").append(`<a class="btn btn-primary" id="check" role="button">Check</a>`)
            check()

            // add radio button values (text and data tags)
            $("#btnradio1").data("choice", choices[0])
            $("#btnradio2").data("choice", choices[1])
            $("#btnradio3").data("choice", choices[2])
            $("#btnradio4").data("choice", choices[3])
            $("#option_1").text(choices[0])
            $("#option_2").text(choices[1])
            $("#option_3").text(choices[2])
            $("#option_4").text(choices[3])
            break
        case 2:
            let choice_keys = quiz_content[question-1]["choice_keys"]
            prompt = `How many sharps/flats does ${media} have?`
            $("#question").text(prompt)
            $("#buttons").append(`<a class="btn btn-primary" id="check" role="button">Check</a>`)
            check()

            // add radio button values
            // choices are images
            // corresponding keys are passed in as data
            $("#btnradio1").data("choice", choice_keys[0])
            $("#btnradio2").data("choice", choice_keys[1])
            $("#btnradio3").data("choice", choice_keys[2])
            $("#btnradio4").data("choice", choice_keys[3])
            //`<img src="${choices[0]}" width="150">`
            $("#option_1").append(`<img src="${choices[0]}" width="200">`)
            $("#option_2").append(`<img src="${choices[1]}" width="200">`)
            $("#option_3").append(`<img src="${choices[2]}" width="200">`)
            $("#option_4").append(`<img src="${choices[3]}" width="200">`)
            break
        case 3:
            prompt = "What key is this scale in?"
            $("#question").text(prompt)
            $("#media").append(`<audio controls><source src='${media}'></audio>`)
            $("#buttons").append(`<a class="btn btn-primary" id="check" role="button">Check</a>`)
            check()

            // add radio button values
            $("#btnradio1").data("choice", choices[0])
            $("#btnradio2").data("choice", choices[1])
            $("#btnradio3").data("choice", choices[2])
            $("#btnradio4").data("choice", choices[3])
            $("#option_1").text(choices[0])
            $("#option_2").text(choices[1])
            $("#option_3").text(choices[2])
            $("#option_4").text(choices[3])
            break
        case 4:
            prompt = "What key is this melody in?"
            $("#question").text(prompt)
            $("#media").append(`<audio controls><source src='${media}'></audio>`)
            $("#buttons").append(`<a class="btn btn-primary" id="check" role="button">Check</a>`)
            check()

            // add radio button values
            $("#btnradio1").data("choice", choices[0])
            $("#btnradio2").data("choice", choices[1])
            $("#btnradio3").data("choice", choices[2])
            $("#btnradio4").data("choice", choices[3])
            $("#option_1").text(choices[0])
            $("#option_2").text(choices[1])
            $("#option_3").text(choices[2])
            $("#option_4").text(choices[3])
            break
        default:
            console.log(`hi.`);
      }
}

$(document).ready(function() {
    //console.log(typeof quiz_content)
    question = 1
    num_correct = 0
    view_quiz(question)
    
})