$(document).ready(function(){
    display_headers(data)
    display_remaining_data(data)

        if(data['id'] == max && data['type'] == 'scales'){
        $("#next_button").empty()
        $("#next_button").text("Go to Quiz!")
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
            alert('this is the first item')
        }
    })

})

function display_headers(data){
    $("#name_here").append(data["title"])
    $("#details_here").append(data["description"])
}

function display_remaining_data(data){
    $("#ui_here").append("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt " +
        "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi " +
        "ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum " +
        "dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia " +
        "deserunt mollit anim id est laborum.")
}
