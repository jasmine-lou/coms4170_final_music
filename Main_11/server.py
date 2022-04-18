import random
import json
from curses import keyname
from sre_parse import GLOBAL_FLAGS
from flask import Flask
from flask import render_template
from flask import Response, request, jsonify, redirect
from quiz_data import *

app = Flask(__name__)

keys_max=4
keys = {"1": {"id": 1,
              "title": "Learn G Major Key",
              "type": "keys",
              "description": "GMajorDescription",
              },

        "2": {"id": 2,
              "title": "Learn A Major Key",
              "type": "keys",
              "description": "AMajorDescription",
              },

        "3": {"id": 3,
              "title": "Learn B Major Key",
              "type": "keys",
              "description": "BMajorDescription",
              },

        "4": {"id": 4,
              "title": "Learn E Major Key",
              "type": "keys",
              "description": "EMajorDescription",
              }
        }

scales_max=4
scales = {"1": {"id": 1,
                "title": "Learn G Major Scale",
                "type": "scales",
                "description": "GMajorDescription",
                },

          "2": {"id": 2,
                "title": "Learn A Major Scale",
                "type": "scales",
                "description": "AMajorDescription",
                },

          "3": {"id": 3,
                "title": "Learn B Major Scale",
                "type": "scales",
                "description": "BMajorDescription",
                },

          "4": {"id": 4,
                "title": "Learn E Major Scale",
                "type": "scales",
                "description": "EMajorDescription",
                }
          }


@app.route("/")
def base_url():
    return redirect("/home")

@app.route('/keys/<id>')
def temp(id=None):
    global keys
    datas = keys[id]
    return render_template('learn.html', data=[datas, keys_max])


@app.route('/scales/<id>')
def scale(id=None):
    global scales
    datas = scales[id]
    return render_template('learn.html', data=[datas, scales_max])

@app.route("/home")
def home():
    return render_template("index.html")

'''
@app.route("/learn/<page>")
def learn(page):
    # goal is to return the back-end content for the corresponding page
    # should integrate returned content using jQuery or jinja
    return redirect("/home")
    
'''

# post doesn't seem entirely necessary here tbh
@app.route("/quiz/<question>", methods=["GET", "POST"])
def quiz(question):
    if request.method == "POST":
        None
    
    else:
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
        elif question == "results":
            return redirect("/home")
        else:
            return ("This is not a valid question number")

if __name__ == "__main__":
    app.run(debug = True)
