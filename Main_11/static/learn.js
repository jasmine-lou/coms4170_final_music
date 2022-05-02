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

$(document).ready(function(){
    display_headers(data)
    $("#display_page_number").text("Page " + data['id'] + '/' + max)

    if(data['id'] == max && data['type'] == 'scales'){
        $("#next_button").empty()
        $("#next_button").text("Go to Quiz!")
    }

    if(data['id'] == 1 && data['type'] == 'scales'){
        $("#prev_button").empty()
        $("#prev_button").text("Return to Keys!")
    }

    if(data['id'] == max && data['type'] == 'keys'){
        $("#next_button").empty()
        $("#next_button").text("Learn Scales!")
    }

    if(data['id'] == max && data['type'] == 'notes'){
        $("#next_button").empty()
        $("#next_button").text("Learn Keys!")
    }

    $("#next_button").click(function () {
        if(data['id'] < max){
            window.location.replace('http://127.0.0.1:5000/' + String(data['type']) + '/' + String(data['id'] + 1))
        }
        else{
            if(data['type'] == 'notes'){
                window.location.replace('http://127.0.0.1:5000/keys/1')
            }
            if(data['type'] == 'keys'){
                window.location.replace('http://127.0.0.1:5000/scales/1')
            }
            if(data['type'] == 'scales'){
                window.location.replace('http://127.0.0.1:5000/quiz')
            }
        }
    })
    
    $("#prev_button").click(function () {
        if(data['id'] > 1){
            window.location.replace('http://127.0.0.1:5000/' + String(data['type']) + '/' + String(data['id'] - 1))
        }
        else{
            if (data['type'] == 'scales'){
                window.location.replace('http://127.0.0.1:5000/keys/4')
            }
            if (data['type'] == 'keys'){
                window.location.replace('http://127.0.0.1:5000/notes/4')
            }
            else {
                alert('this is the first item')
            }
        }
    })

    // ============
    $("#cSharp3").click(function() {
        cSharp3Note.currentTime = 0;
        cSharp3Note.play();
    })
    $("#dSharp3").click(function() {
        dSharp3Note.currentTime = 0;
        dSharp3Note.play();
    })
    $("#fSharp3").click(function() {
        fSharp3Note.currentTime = 0;
        fSharp3Note.play();
    })
    $("#gSharp3").click(function() {
        gSharp3Note.currentTime = 0;
        gSharp3Note.play();
    })
    $("#aSharp4").click(function() {
        aSharp4Note.currentTime = 0;
        aSharp4Note.play();
    })

    // =============
    $("#cSharp4").click(function() {
        cSharp4Note.currentTime = 0;
        cSharp4Note.play();
    })
    $("#dSharp4").click(function() {
        dSharp4Note.currentTime = 0;
        dSharp4Note.play();
    })
    $("#fSharp4").click(function() {
        fSharp4Note.currentTime = 0;
        fSharp4Note.play();
    })
    $("#gSharp4").click(function() {
        gSharp4Note.currentTime = 0;
        gSharp4Note.play();
    })
    $("#aSharp5").click(function() {
        aSharp5Note.currentTime = 0;
        aSharp5Note.play();
    })

    // =============
    $("#c3").click(function() {
        c3Note.currentTime = 0;
        c3Note.play();
    })
    $("#d3").click(function() {
        d3Note.currentTime = 0;
        d3Note.play();
    })
    $("#e3").click(function() {
        e3Note.currentTime = 0;
        e3Note.play();
    })
    $("#f3").click(function() {
        f3Note.currentTime = 0;
        f3Note.play();
    })
    $("#g3").click(function() {
        g3Note.currentTime = 0;
        g3Note.play();
    })
    $("#a4").click(function() {
        a4Note.currentTime = 0;
        a4Note.play();
    })
    $("#b4").click(function() {
        b4Note.currentTime = 0;
        b4Note.play();
    })
    // =============

    $("#c4").click(function() {
        c4Note.currentTime = 0;
        c4Note.play();
    })
    $("#d4").click(function() {
        d4Note.currentTime = 0;
        d4Note.play();
    })
    $("#e4").click(function() {
        e4Note.currentTime = 0;
        e4Note.play();
    })
    $("#f4").click(function() {
        f4Note.currentTime = 0;
        f4Note.play();
    })
    $("#g4").click(function() {
        g4Note.currentTime = 0;
        g4Note.play();
    })
    $("#a5").click(function() {
        a5Note.currentTime = 0;
        a5Note.play();
    })
    $("#b5").click(function() {
        b5Note.currentTime = 0;
        b5Note.play();
    })
    $("#c5").click(function() {
        c5Note.currentTime = 0;
        c5Note.play();
    })

})

function display_headers(data){
    $("#name_here").append(data["title"]);

    $("#description1").append(data["description1"]);
    $("#description2").append(data["description2"]);
    $("#description3").append(data["description3"]);

    for (let i = 0; i < data["blueKeys"].length; i++){
        $("#" + data["blueKeys"][i]).css("background-color", "#0063C6");
    }

    for (let i = 0; i < data["orangeKeys"].length; i++){
        $("#" + data["orangeKeys"][i]).css("background-color", "#ED7D31");
    }
}
