'''
questions bank
format:
    question number - indicates question type
        correct key - is also key for sub dict;
            sub dict contains answer options

    Check for correctness in front-end ui by checking if selected option is equal to the dictionary key
    flask request returns random key-pair combo to js each time page loads

    ### potentially include img/sound path as part of problem dict ###
'''
questions = {
    # choose matching key
    "q1" : {
        "G" : {
            "key_media": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/G-major_e-minor.svg/800px-G-major_e-minor.svg.png",
            "choices": ["G", "C", "Ab", "F#"],
        },
        "Bb" : {
            "key_media": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/B-flat-major_g-minor.svg/800px-B-flat-major_g-minor.svg.png",
            "choices": ["Eb", "Bb", "F", "D"],
        }
    },
    # make denoted key
    "q2" : {
        "C" : {
            "key_media": "C Major",
            "choices": ["insert keysig image for button", "insert keysig image for button", "insert keysig image for button", "insert keysig image for button"],
        }
    },
    # choose key of scale
    "q3" : {
        "G" : {
            "key_media": "https://upload.wikimedia.org/score/a/r/ary0vhsure9oohc1fpoii4c3630031k/ary0vhsu.mp3",
            "choices": ["G", "C", "Ab", "F#"],
        },
        "Bb" : {
            "key_media": "https://upload.wikimedia.org/score/7/j/7jec9d1y1u6y5zbwrlyxmri8hx4l3cd/7jec9d1y.mp3",
            "choices": ["Eb", "Bb", "F", "D"],
        }
    },
    # choose key of melody
    "q4" : {
        "G" : {
            "key_media": "https://upload.wikimedia.org/score/a/r/ary0vhsure9oohc1fpoii4c3630031k/ary0vhsu.mp3",
            "choices": ["G", "C", "Ab", "F#"],
        },
        "Bb" : {
            "key_media": "https://upload.wikimedia.org/score/7/j/7jec9d1y1u6y5zbwrlyxmri8hx4l3cd/7jec9d1y.mp3",
            "choices": ["Eb", "Bb", "F", "D"],
        }
    }
}