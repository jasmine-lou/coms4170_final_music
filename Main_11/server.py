import random
import json
from curses import keyname
from sre_parse import GLOBAL_FLAGS
from flask import Flask
from flask import render_template
from flask import Response, request, jsonify, redirect
from quiz_data import *

app = Flask(__name__)


notes_max = 5
notes = {
    "1": {
        "id": 1,
        "title": "Keyboard",
        "type": "notes",
        "explanation": "../static/explanation/pianoKeys.jpeg",
        "description1": "A keyboard has white and black keys.",
        "description2": "White keys are big and black keys are small.",
        "description3": "You can somehow notice a pattern by looking at a piano keyboard.",
        "blueKeys": [],
        "orangeKeys": [],
    },
    "2": {
        "id": 2,
        "title": "Pitch Names",
        "type": "notes",
        "explanation": "../static/explanation/pitchNames.png",
        "description1": "We divide the whole keyboard by the pattern of black keys.",
        "description2": "For every five black keys (and seven white keys), we give seven pitch names to the white keys.",
        "description3": "The pitch names, from low to high, are: C, D, E, F, G, A, B. It will then go to another C.",
        "keyboardNote": "Here, we use orange and blue to divide the following keyboard into two groups.<br> Each group has seven white keys: C, D, E, F, G, A, B.",
        "blueKeys": ["c3", "d3", "e3", "f3", "g3", "a4", "b4"],
        "orangeKeys": ["c4", "d4", "e4", "f4", "g4", "a5", "b5"],
    },
    "3": {
        "id": 3,
        "title": "Semitone",
        "type": "notes",
        "explanation": "../static/explanation/semitone.jpeg",
        "description1": "A semitone is the distance from a white key to a neighboring black key on the piano keyboard.",
        "description2": "If a white key has no neighboring black keys on the left or right, the neighboring white key becomes the key that is one semitone away.",
        "keyboardNote": "Here, we use orange and blue to mark out four pairs of notes that are one semitone away.",
        "blueKeys": ["c3", "cSharp3", "f4", "fSharp4"],
        "orangeKeys": ["e3", "f3", "b4", "c4"],
    },
    "4": {
        "id": 4,
        "title": "Sharp & Flat",
        "type": "notes",
        "explanation": "../static/explanation/sharpFlat.png",
        "description1": "A sharp sign can raise a note by a semitone.",
        "description2": "A flat sign can lower a note by a semitone.",
        "description3": "In this way, we can give pitch names to every note.",
        "keyboardNote": "Try all notes on the keyboard to see their pitch names. Notice how a note can have more than one pitch name.",
        "blueKeys": [],
        "orangeKeys": [],
    },
    "5": {
        "id": 5,
        "title": "Staff",
        "type": "notes",
        "explanation": "../static/explanation/staff.png",
        "description1": "A staff contains a clef and five lines. We write music notes on the lines or in between two lines.",
        "description2": "We use quarter notes on this website to denote all music notes. The black round parts, called note heads, denote the pitch of the note.",
        "description3": "The figure on the left shows some notes with their pitch names on them.",
        "keyboardNote": "The orange key is the C above. Other two C's are in blue.<br> Only the orange C correspond to the note above. Other C's are higher or lower than it.",
        "blueKeys": ["c3", "c5"],
        "orangeKeys": ["c4"],
    },
}

keys_max = 5
keys = {
    "1": {
        "id": 1,
        "title": "Learn C Major Key",
        "type": "keys",
        "description1": "The key signature of C major has no sharps or flats.",
        "description2": "No sharps and flats means that no notes will be raised or lowered.",
        "description3": "",
        "explanation": "../static/learn/Cmajor.png",
        "keyboardNote": "",
        "blueKeys": [],
        "orangeKeys": [],
    },
    "2": {
        "id": 2,
        "title": "Learn G Major Key",
        "type": "keys",
        "description1": "The key signature of G major has ONE sharp.",
        "description2": "The sharp means that the corresponding note will be raised by a semitone.",
        "description3": "The first and only sharp means that all F will be raised to F#, like what is shown in the figure.",
        "explanation": "../static/learn/Gmajor.png",
        "keyboardNote": "ORANGE keys are those notes being raised or lowered.<br> BLUE keys are the results (and the ones that actually in this key).",
        "blueKeys": ["fSharp3", "fSharp4"],
        "orangeKeys": ["f3", "f4"],
    },
    "3": {
        "id": 3,
        "title": "Learn F Major Key",
        "type": "keys",
        "description1": "The key signature of F major has ONE flat.",
        "description2": "The flat means that the corresponding note will be lowered by a semitone.",
        "description3": "The first and only flat means that all B will be lowered to Bb, like what is shown in the figure.",
        "explanation": "../static/learn/Fmajor.png",
        "keyboardNote": "ORANGE keys are those notes being raised or lowered.<br> BLUE keys are the results (and the ones that actually in this key).",
        "blueKeys": ["aSharp4", "aSharp5"],
        "orangeKeys": ["b4", "b5"],
    },
    "4": {
        "id": 4,
        "title": "Learn D Major Key",
        "type": "keys",
        "description1": "The key signature of D major has TWO sharps.",
        "description2": "The sharp means that the corresponding note will be raised by a semitone.",
        "description3": "The two sharps means that all F will be raised to F# and all C will be raised to C#, like what is shown in the figure.",
        "explanation": "../static/learn/Dmajor.png",
        "keyboardNote": "ORANGE keys are those notes being raised or lowered.<br> BLUE keys are the results (and the ones that actually in this key).",
        "blueKeys": ["fSharp3", "fSharp4", "cSharp3", "cSharp4"],
        "orangeKeys": ["f3", "f4", "c3", "c4", "c5"],
    },
    "5": {
        "id": 5,
        "title": "Learn Bb Major Key",
        "type": "keys",
        "description1": "The key signature of Bb major has TWO flats.",
        "description2": "The flat means that the corresponding note will be lowered by a semitone.",
        "description3": "The two flats means that all B will be lowered to Bb and all E will be lowered to Eb, like what is shown in the figure.",
        "explanation": "../static/learn/Bbmajor.png",
        "keyboardNote": "ORANGE keys are those notes being raised or lowered.<br> BLUE keys are the results (and the ones that actually in this key).",
        "blueKeys": ["aSharp4", "aSharp5", "dSharp3", "dSharp4"],
        "orangeKeys": ["b4", "b5", "e3", "e4"],
    },
}

scales_max = 5
scales = {
    "1": {
        "id": 1,
        "title": "Learn C Major Scale",
        "type": "scales",
        "description1": "The C Major scale looks like this on the left.",
        "description2": "Remember that no sharps and flats means that no notes will be raised or lowered.",
        "description3": "The pitch names are: C, D, E, F, G, A, B, C.",
        "explanation": "../static/learn/Cscale.png",
        "keyboardNote": "Two C's are marked in BLUE. All other notes in the C Major scale between two C's are in ORANGE.",
        "blueKeys": ["c4", "c5"],
        "orangeKeys": ["d4", "e4", "f4", "g4", "a5", "b5"],
    },
    "2": {
        "id": 2,
        "title": "Learn G Major Scale",
        "type": "scales",
        "description1": "The G Major scale looks like this on the left.",
        "description2": "Remember that the sharp means that all F should be raised by a semitone.",
        "description3": "The pitch names are: G, A, B, C, D, E, F#, G.",
        "explanation": "../static/learn/Gscale.png",
        "keyboardNote": "Two G's are marked in BLUE. All other notes in the G Major scale between two G's are in ORANGE.",
        "blueKeys": ["g3", "g4"],
        "orangeKeys": ["a4", "b4", "c4", "d4", "e4", "fSharp4"],
    },
    "3": {
        "id": 3,
        "title": "Learn F Major Scale",
        "type": "scales",
        "description1": "The F Major scale looks like this on the left.",
        "description2": "Remember that the flat means that all B should be lowered by a semitone.",
        "description3": "The pitch names are: F, G, A, Bb, C, D, E, F.",
        "explanation": "../static/learn/Fscale.png",
        "keyboardNote": "Two F's are marked in BLUE. All other notes in the F Major scale between two F's are in ORANGE.",
        "blueKeys": ["f3", "f4"],
        "orangeKeys": ["g3", "a4", "aSharp4", "c4", "d4", "e4"],
    },
    "4": {
        "id": 4,
        "title": "Learn D Major Scale",
        "type": "scales",
        "description1": "The D Major scale looks like this on the left.",
        "description2": "Remember that the two sharps mean that all F and C should be raised by a semitone.",
        "description3": "The pitch names are: D, E, F#, G, A, B, C#, D.",
        "explanation": "../static/learn/Dscale.png",
        "keyboardNote": "Two D's are marked in BLUE. All other notes in the D Major scale between two D's are in ORANGE.",
        "blueKeys": ["d3", "d4"],
        "orangeKeys": ["e3", "fSharp3", "g3", "a4", "b4", "cSharp4"],
    },
    "5": {
        "id": 5,
        "title": "Learn Bb Major Scale",
        "type": "scales",
        "description1": "The Bb Major scale looks like this on the left.",
        "description2": "Remember that the two flats mean that all B and E should be lowered by a semitone.",
        "description3": "The pitch names are: Bb, C, D, Eb, F, G, A, Bb.",
        "explanation": "../static/learn/Bbscale.png",
        "keyboardNote": "Two Bb's are marked in BLUE. All other notes in the Bb Major scale between two Bb's are in ORANGE.",
        "blueKeys": ["aSharp4", "aSharp5"],
        "orangeKeys": ["c4", "d4", "dSharp4", "f4", "g4", "a5"],
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
