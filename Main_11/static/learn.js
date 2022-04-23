$(document).ready(function(){
    display_headers(data)
    display_remaining_data(data)
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

    $("#next_button").click(function () {
        if(data['id'] < max){
            window.location.replace('http://127.0.0.1:5000/' + String(data['type']) + '/' + String(data['id'] + 1))
        }
        else{
            if(data['type'] == 'keys'){
                window.location.replace('http://127.0.0.1:5000/scales/1')
            }
            if(data['type'] == 'scales'){
                window.location.replace('http://127.0.0.1:5000/quiz/1')
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
            else {
                alert('this is the first item')
            }
        }
    })

})

function display_headers(data){
    $("#name_here").append(data["title"])
    $("#details_here").append(data["description"])
}