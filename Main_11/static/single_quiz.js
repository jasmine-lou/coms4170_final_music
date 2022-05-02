let answer = ""
let choices = []
let pressed_keys = []
let keyboard = `
    <div id="white-keys">
    <button id="c3" class="key" style="width:30px;height:120px;background-color:white;"></button>
    <button id="d3" class="key" style="width:30px;height:120px;background-color:white;"></button>
    <button id="e3" class="key" style="width:30px;height:120px;background-color:white;"></button>
    <button id="f3" class="key" style="width:30px;height:120px;background-color:white;"></button>
    <button id="g3" class="key" style="width:30px;height:120px;background-color:white;"></button>
    <button id="a4" class="key" style="width:30px;height:120px;background-color:white;"></button>
    <button id="b4" class="key" style="width:30px;height:120px;background-color:white;"></button>

    <button id="c4" class="key" style="width:30px;height:120px;background-color:white;"></button>
    <button id="d4" class="key" style="width:30px;height:120px;background-color:white;"></button>
    <button id="e4" class="key" style="width:30px;height:120px;background-color:white;"></button>
    <button id="f4" class="key" style="width:30px;height:120px;background-color:white;"></button>
    <button id="g4" class="key" style="width:30px;height:120px;background-color:white;"></button>
    <button id="a5" class="key" style="width:30px;height:120px;background-color:white;"></button>
    <button id="b5" class="key" style="width:30px;height:120px;background-color:white;"></button>
    <button id="c5" class="key" style="width:30px;height:120px;background-color:white;"></button>
    </div>
    <div id="black-keys" style="margin: -123px 17px;">
    <button id="cSharp3" class="key" style="width:30px;height:80px;background-color:black;"></button>
    <button id="dSharp3" class="key" style="width:30px;height:80px;background-color:black;"></button>
    <button class="key" style="width:30px;height:80px;background-color:transparent; border-color:transparent;" disabled></button>
    <button id="fSharp3" class="key" style="width:30px;height:80px;background-color:black;"></button>
    <button id="gSharp3" class="key" style="width:30px;height:80px;background-color:black;"></button>
    <button id="aSharp4" class="key" style="width:30px;height:80px;background-color:black;"></button>
    <button class="key" style="width:30px;height:80px;background-color:transparent; border-color:transparent;" disabled></button>

    <button id="cSharp4" class="key" style="width:30px;height:80px;background-color:black;"></button>
    <button id="dSharp4" class="key" style="width:30px;height:80px;background-color:black;"></button>
    <button class="key" style="width:30px;height:80px;background-color:transparent; border-color:transparent;" disabled></button>
    <button id="fSharp4" class="key" style="width:30px;height:80px;background-color:black;"></button>
    <button id="gSharp4" class="key" style="width:30px;height:80px;background-color:black;"></button>
    <button id="aSharp5" class="key" style="width:30px;height:80px;background-color:black;"></button>
    </div>`

let c3Note = new Audio("../static/mp3Notes/c3.mp3");
let d3Note = new Audio("../static/mp3Notes/d3.mp3");
let e3Note = new Audio("../static/mp3Notes/e3.mp3");
let f3Note = new Audio("../static/mp3Notes/f3.mp3");
let g3Note = new Audio("../static/mp3Notes/g3.mp3");
let a4Note = new Audio("../static/mp3Notes/a4.mp3");
let b4Note = new Audio("../static/mp3Notes/b4.mp3");
    
let c4Note = new Audio("../static/mp3Notes/c4.mp3");
let d4Note = new Audio("../static/mp3Notes/d4.mp3");
let e4Note = new Audio("../static/mp3Notes/e4.mp3");
let f4Note = new Audio("../static/mp3Notes/f4.mp3");
let g4Note = new Audio("../static/mp3Notes/g4.mp3");
let a5Note = new Audio("../static/mp3Notes/a5.mp3");
let b5Note = new Audio("../static/mp3Notes/b5.mp3");
let c5Note = new Audio("../static/mp3Notes/c5.mp3");
    
let cSharp3Note = new Audio("../static/mp3Notes/c-3.mp3");
let dSharp3Note = new Audio("../static/mp3Notes/d-3.mp3");
let fSharp3Note = new Audio("../static/mp3Notes/f-3.mp3");
let gSharp3Note = new Audio("../static/mp3Notes/g-3.mp3");
let aSharp4Note = new Audio("../static/mp3Notes/a-4.mp3");
    
let cSharp4Note = new Audio("../static/mp3Notes/c-4.mp3");
let dSharp4Note = new Audio("../static/mp3Notes/d-4.mp3");
let fSharp4Note = new Audio("../static/mp3Notes/f-4.mp3");
let gSharp4Note = new Audio("../static/mp3Notes/g-4.mp3");
let aSharp5Note = new Audio("../static/mp3Notes/a-5.mp3");

function activate_keyboard() {
    // ============
    $("#cSharp3").on("click", function() {
        pressed_keys.push("C#")
        cSharp3Note.currentTime = 0;
        cSharp3Note.play();
    })
    $("#dSharp3").on("click", function() {
        pressed_keys.push("D#")
        dSharp3Note.currentTime = 0;
        dSharp3Note.play();
    })
    $("#fSharp3").on("click", function() {
        pressed_keys.push("F#")
        fSharp3Note.currentTime = 0;
        fSharp3Note.play();
    })
    $("#gSharp3").on("click", function() {
        pressed_keys.push("G#")
        gSharp3Note.currentTime = 0;
        gSharp3Note.play();
    })
    $("#aSharp4").on("click", function() {
        pressed_keys.push("A#")
        aSharp4Note.currentTime = 0;
        aSharp4Note.play();
    })

    // =============
    $("#cSharp4").on("click", function() {
        pressed_keys.push("C#")
        cSharp4Note.currentTime = 0;
        cSharp4Note.play();
    })
    $("#dSharp4").on("click", function() {
        pressed_keys.push("D#")
        dSharp4Note.currentTime = 0;
        dSharp4Note.play();
    })
    $("#fSharp4").on("click", function() {
        pressed_keys.push("F#")
        fSharp4Note.currentTime = 0;
        fSharp4Note.play();
    })
    $("#gSharp4").on("click", function() {
        pressed_keys.push("G#")
        gSharp4Note.currentTime = 0;
        gSharp4Note.play();
    })
    $("#aSharp5").on("click", function() {
        pressed_keys.push("A#")
        aSharp5Note.currentTime = 0;
        aSharp5Note.play();
    })

    // =============
    $("#c3").on("click", function() {

        pressed_keys.push("C")
        c3Note.currentTime = 0;
        c3Note.play();
    })
    $("#d3").on("click", function() {
        pressed_keys.push("D")
        d3Note.currentTime = 0;
        d3Note.play();
    })
    $("#e3").on("click", function() {
        pressed_keys.push("E")
        e3Note.currentTime = 0;
        e3Note.play();
    })
    $("#f3").on("click", function() {
        pressed_keys.push("F")
        f3Note.currentTime = 0;
        f3Note.play();
    })
    $("#g3").on("click", function() {
        pressed_keys.push("G")
        g3Note.currentTime = 0;
        g3Note.play();
    })
    $("#a4").on("click", function() {
        pressed_keys.push("A")
        a4Note.currentTime = 0;
        a4Note.play();
    })
    $("#b4").on("click", function() {
        pressed_keys.push("B")
        b4Note.currentTime = 0;
        b4Note.play();
    })
    // =============

    $("#c4").on("click", function() {
        pressed_keys.push("C")
        c4Note.currentTime = 0;
        c4Note.play();
    })
    $("#d4").on("click", function() {
        pressed_keys.push("D")
        d4Note.currentTime = 0;
        d4Note.play();
    })
    $("#e4").on("click", function() {
        pressed_keys.push("E")
        e4Note.currentTime = 0;
        e4Note.play();
    })
    $("#f4").on("click", function() {
        pressed_keys.push("F")
        f4Note.currentTime = 0;
        f4Note.play();
    })
    $("#g4").on("click", function() {
        pressed_keys.push("G")
        g4Note.currentTime = 0;
        g4Note.play();
    })
    $("#a5").on("click", function() {
        pressed_keys.push("A")
        a5Note.currentTime = 0;
        a5Note.play();
    })
    $("#b5").on("click", function() {
        pressed_keys.push("B")
        b5Note.currentTime = 0;
        b5Note.play();
    })
    $("#c5").on("click", function() {
        pressed_keys.push("C")
        c5Note.currentTime = 0;
        c5Note.play();
    })

}

// reused "check" onclick code
function check() {
    $("#check").on("click", function() {
        // checking if answer is correct
        // should 
        let correct = false
        if(question < 5) {
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
        } else {
            correct = ((answer.length == pressed_keys.length) && answer.every(function(element, index) {
                return element === pressed_keys[index]
                }))
        }
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
        if(question == 5) {
            // link to results
            $("#buttons").append(`<a class="btn btn-primary" id="results" role="button">Results</a>`)
            $("#results").css({width: "150px"})
            $("#results").on("click", function() {
                window.location.replace(`http://127.0.0.1:5000/results/${num_correct}`)
            })
        }
        else {
            // go to next question
            $("#buttons").append(`<a class="btn btn-primary" id="next" role="button">Next</a>`)
            $("#next").css({width: "150px"})
            $("#next").on("click", function() {
                question++
                // if valid question count
                if(question < 6) {
                    // present next question
                    view_quiz(question)
                
                }
                // else ready for results 
                else {
                    alert(`You got ${num_correct}/5 questions correct.`)
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
    let hint = quiz_content[question-1]["hint"]
    // console.log(typeof quiz_content[1])
    console.log(hint)

    // change hint 
    $("#hint-href").attr("title", hint)

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
            $("#media").append(`<img src='${media}' width="100%">`)
            $("#buttons").append(`<a class="btn btn-primary" id="check" role="button">Check</a>`)
            check()
            $("#check").css({width: "150px"})

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
            $("#check").css({width: "150px"})

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
            $("#check").css({width: "150px"})

            // add radio button values
            $("#btnradio1").data("choice", choices[0])
            $("#btnradio2").data("choice", choices[1])
            $("#btnradio3").data("choice", choices[2])
            $("#btnradio4").data("choice", choices[3])
            $("#option_1").text(choices[0])
            $("#option_2").text(choices[1])
            $("#option_3").text(choices[2])
            $("#option_4").text(choices[3])

            // tooltip
            $("#hint-href").tooltip({
                content: `<img style="width:250px;" src=${hint} />`
            });
            break
        case 4:
            prompt = "What key is this melody in?"
            $("#question").text(prompt)
            $("#media").append(`<audio controls><source src='${media}'></audio>`)
            $("#buttons").append(`<a class="btn btn-primary" id="check" role="button">Check</a>`)
            check()
            $("#check").css({width: "150px"})

            // add radio button values
            $("#btnradio1").data("choice", choices[0])
            $("#btnradio2").data("choice", choices[1])
            $("#btnradio3").data("choice", choices[2])
            $("#btnradio4").data("choice", choices[3])
            $("#option_1").text(choices[0])
            $("#option_2").text(choices[1])
            $("#option_3").text(choices[2])
            $("#option_4").text(choices[3])

            // tooltip
            $("#hint-href").tooltip({
                content: `<img style="width:250px;" src="${hint}" />`
            });
            break
        case 5:
            //pressed_keys = []
            $(".app-container").css({width: "1300px", height: "800px"})
            $("#radio-buttons").empty()
            prompt = `Play ${media}`
            $("#question").text(prompt)
            $("#media").append(keyboard)
            activate_keyboard()
            $("#buttons").append(`<a class="btn btn-primary" id="check" role="button">Check</a>`)
            check()
            $("#check").css({width: "150px"})
            $("#buttons").css({position: "relative", bottom: "-120px"})
            // tooltip
            $("#hint-href").tooltip({
                content: `<img style="width:250px;" src="${hint}" />`
            });
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

    $("#hint").hover(
        function() {
            $(this).addClass("when_hover")
        },
        function() {
            $(this).removeClass("when_hover")
        }
    )
    $("#hint-href").tooltip({
        show: null,
        position: {
          my: "left top",
          at: "left bottom"
        },
        open: function( event, ui ) {
          ui.tooltip.animate({ top: ui.tooltip.position().top + 10 }, "fast" );
        }
      });
    /*$(function(){
        $(document).tooltip();
      });*/
    
})
