import random
import json
from curses import keyname
from sre_parse import GLOBAL_FLAGS
from flask import Flask
from flask import render_template
from flask import Response, request, jsonify, redirect
from quiz_data import *

app = Flask(__name__)

keys_max = 4
keys = {
    "1": {
        "id": 1,
        "title": "Learn G Major Key",
        "type": "keys",
        "description1": "The key signature of G major has ONE sharp.",
        "description2": "The sharp means that the corresponding note will be raised by a semitone.",
        "description3": "The first and only sharp means that all F will be raised to F#, like what is shown in the figure.",
        "blueKeys": ["fSharp3", "fSharp4"],
        "orangeKeys": ["f3", "f4"],
    },
    "2": {
        "id": 2,
        "title": "Learn F Major Key",
        "type": "keys",
        "description1": "The key signature of F major has ONE flat.",
        "description2": "The flat means that the corresponding note will be lowered by a semitone.",
        "description3": "The first and only flat means that all B will be lowered to Bb, like what is shown in the figure.",
        "blueKeys": ["aSharp4", "aSharp5"],
        "orangeKeys": ["b4", "b5"],
    },
    "3": {
        "id": 3,
        "title": "Learn D Major Key",
        "type": "keys",
        "description1": "The key signature of D major has TWO sharps.",
        "description2": "The sharp means that the corresponding note will be raised by a semitone.",
        "description3": "The two sharps means that all F will be raised to F# and all C will be raised to C#, like what is shown in the figure.",
        "blueKeys": ["fSharp3", "fSharp4", "cSharp3", "cSharp4", "cSharp5"],
        "orangeKeys": ["f3", "f4", "c3", "c4"],
    },
    "4": {
        "id": 4,
        "title": "Learn Bb Major Key",
        "type": "keys",
        "description1": "The key signature of Bb major has TWO flats.",
        "description2": "The flat means that the corresponding note will be lowered by a semitone.",
        "description3": "The two flats means that all B will be lowered to Bb and all E will be lowered to Eb, like what is shown in the figure.",
        "blueKeys": ["aSharp4", "aSharp5", "dSharp3", "dSharp4"],
        "orangeKeys": ["b4", "b5", "e3", "e4"],
    },
}

notes_max = 4
notes = {
    "1": {
        "id": 1,
        "title": "Learn G NOTE",
        "type": "notes",
        "description1": "The key signature of G major has ONE sharp.",
        "blueKeys": ["fSharp3", "fSharp4"],
        "orangeKeys": ["f3", "f4"],
    },
    "2": {
        "id": 2,
        "title": "Learn F NOTE",
        "type": "notes",
        "description1": "The key signature of F major has ONE flat.",
        "blueKeys": ["aSharp4", "aSharp5"],
        "orangeKeys": ["b4", "b5"],
    },
    "3": {
        "id": 3,
        "title": "Learn D NOTE",
        "type": "notes",
        "description1": "The key signature of D major has TWO sharps.",
        "blueKeys": ["fSharp3", "fSharp4", "cSharp3", "cSharp4", "cSharp5"],
        "orangeKeys": ["f3", "f4", "c3", "c4"],
    },
    "4": {
        "id": 4,
        "title": "Learn Bb NOTE",
        "type": "notes",
        "description1": "The key signature of Bb major has TWO flats.",
        "blueKeys": ["aSharp4", "aSharp5", "dSharp3", "dSharp4"],
        "orangeKeys": ["b4", "b5", "e3", "e4"],
    },
}

scales_max = 4
scales = {
    "1": {
        "id": 1,
        "title": "Learn G Major Scale",
        "type": "scales",
        "description1": "GMajorDescription",
        "blueKeys": ["aSharp4", "aSharp5", "dSharp3", "dSharp4"],
        "orangeKeys": ["b4", "b5", "e3", "e4"],
    },
    "2": {
        "id": 2,
        "title": "Learn A Major Scale",
        "type": "scales",
        "description1": "AMajorDescription",
        "blueKeys": ["aSharp4", "aSharp5", "dSharp3", "dSharp4"],
        "orangeKeys": ["b4", "b5", "e3", "e4"],
    },
    "3": {
        "id": 3,
        "title": "Learn B Major Scale",
        "type": "scales",
        "description1": "BMajorDescription",
        "blueKeys": ["aSharp4", "aSharp5", "dSharp3", "dSharp4"],
        "orangeKeys": ["b4", "b5", "e3", "e4"],
    },
    "4": {
        "id": 4,
        "title": "Learn E Major Scale",
        "type": "scales",
        "description1": "EMajorDescription",
        "blueKeys": ["aSharp4", "aSharp5", "dSharp3", "dSharp4"],
        "orangeKeys": ["b4", "b5", "e3", "e4"],
    },
}


@app.route("/")
def base_url():
    return redirect("/home")


@app.route("/notes/<id>")
def notes_route(id=None):
    global notes
    datas = notes[id]
    return render_template("learn.html", data=[datas, notes_max])


@app.route("/keys/<id>")
def temp(id=None):
    global keys
    datas = keys[id]
    return render_template("learn.html", data=[datas, keys_max])


@app.route("/scales/<id>")
def scale(id=None):
    global scales
    datas = scales[id]
    return render_template("learn.html", data=[datas, scales_max])


@app.route("/home")
def home():
    return render_template("index.html")


# old learn
"""
@app.route("/learn/<page>")
def learn(page):
    # goal is to return the back-end content for the corresponding page
    # should integrate returned content using jQuery or jinja
    return redirect("/home")
    
"""

# old quiz
"""
@app.route("/quiz/<question>", methods=["GET", "POST"])
def quiz(question):

    global num_correct

    if request.method == "POST":
        None
    
    else:
        if question in ["1"]:
            num_correct = 0
        if question in ["1", "2", "3", "4"]:
            # return ("This should be question %s" % question)
            # pick random problem from question type
            random_key = random.choice(list(questions["q%s" % question]))
            # corresponding mc options from random problem
            multiple_choice = questions["q%s" % question][random_key]
            # return list w 2 items: key & value list
            # return_list = [random_key, list(multiple_choice)]
            return_json = questions["q%s" % question][random_key]
            # print(json.dumps(return_json), type(return_json), questions)
            # just for now, since sets are not json serializable
            # print(json.dumps(return_list), question)
            return render_template("quiz.html", quiz_content=return_json, question=question, key=random_key)
        else:
            return ("This is not a valid question number")
"""


@app.route("/quiz", methods=["GET", "POST"])
def full_quiz():
    if request.method == "POST":
        None

    else:
        # generate randomized quiz json
        quiz_content = []
        for question in questions:
            random_question = random.choice(list(questions[question]))
            quiz_content.append(questions[question][random_question])
        print(quiz_content, type(quiz_content))
        return render_template("single_quiz.html", quiz_content=quiz_content)
        # return json.dumps(quiz)


@app.route("/results/<correct>")
def results(correct):
    return render_template("results.html", correct=correct)


if __name__ == "__main__":
    app.run(debug=True)
