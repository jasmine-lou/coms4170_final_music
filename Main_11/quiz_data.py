"""
questions bank
format:
    question number - indicates question type
        correct key - is also key for sub dict;
            sub dict contains answer options

    Check for correctness in front-end ui by checking if selected option is equal to the dictionary key
    flask request returns random key-pair combo to js each time page loads

    ### potentially include img/sound path as part of problem dict ###
"""
questions = {
    # choose matching key
    "q1": {
        "G": {
            "key_media": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/G-major_e-minor.svg/800px-G-major_e-minor.svg.png",
            "choices": ["G", "C", "Ab", "F#"],
            "answer": "G",
            "hint": "The tonic note has no accidentals!",
        },
        "Bb": {
            "key_media": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/B-flat-major_g-minor.svg/800px-B-flat-major_g-minor.svg.png",
            "choices": ["Eb", "Bb", "F", "D"],
            "answer": "Bb",
            "hint": "It has a flat in the tonic note!",
        },
        "C": {
            "key_media": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/C-major_a-minor.svg/1920px-C-major_a-minor.svg.png",
            "choices": ["G", "C", "Ab", "F#"],
            "answer": "C",
            "hint": "This is the middle note on the keyboard.",
        },
        "D": {
            "key_media": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/D-major_b-minor.svg/440px-D-major_b-minor.svg.png",
            "choices": ["Eb", "Bb", "F", "D"],
            "answer": "D",
            "hint": "The tonic note has no accidentals!",
        },
        "F": {
            "key_media": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/F-major_d-minor.svg/440px-F-major_d-minor.svg.png",
            "choices": ["Eb", "Bb", "F", "D"],
            "answer": "F",
            "hint": "The tonic note has no accidentals!",
        },
    },
    # make denoted key
    "q2": {
        "C": {
            "key_media": "C Major",
            "choices": [
                "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/A-flat-major_f-minor.svg/2560px-A-flat-major_f-minor.svg.png",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/F-major_d-minor.svg/1920px-F-major_d-minor.svg.png",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/C-major_a-minor.svg/1920px-C-major_a-minor.svg.png",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/C-flat-major_a-flat-minor.svg/2880px-C-flat-major_a-flat-minor.svg.png",
            ],
            "answer": "C",
            "choice_keys": ["Ab", "F", "C", "Cb"],
            "hint": "The key signature ~may~ not have accidentals.",
        },
        "F": {
            "key_media": "F Major",
            "choices": [
                "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/D-major_b-minor.svg/440px-D-major_b-minor.svg.png",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/G-major_e-minor.svg/800px-G-major_e-minor.svg.png",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/C-major_a-minor.svg/1920px-C-major_a-minor.svg.png",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/F-major_d-minor.svg/1920px-F-major_d-minor.svg.png",
            ],
            "answer": "F",
            "choice_keys": ["D", "G", "C", "F"],
            "hint": "The key signature doesn't have sharps.",
        }
    },
    # choose key of scale
    "q3": {
        "G": {
            "key_media": "https://upload.wikimedia.org/score/a/r/ary0vhsure9oohc1fpoii4c3630031k/ary0vhsu.mp3",
            "choices": ["G", "C", "Ab", "F#"],
            "answer": "G",
            "hint": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/G-major_e-minor.svg/800px-G-major_e-minor.svg.png",
        },
        "Bb": {
            "key_media": "https://upload.wikimedia.org/score/7/j/7jec9d1y1u6y5zbwrlyxmri8hx4l3cd/7jec9d1y.mp3",
            "choices": ["Eb", "Bb", "F", "D"],
            "answer": "Bb",
            "hint": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/B-flat-major_g-minor.svg/800px-B-flat-major_g-minor.svg.png",
        },
        "C": {
            "key_media": "https://upload.wikimedia.org/score/a/z/azat41br3gg1onuhy0jkmcg67ipxatu/azat41br.mp3",
            "choices": ["F", "Bb", "D", "C"],
            "answer": "C",
            "hint": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/C-major_a-minor.svg/1920px-C-major_a-minor.svg.png",
        },
        "D": {
            "key_media": "https://upload.wikimedia.org/score/8/t/8tsdx6xxrgsgq0pzf4zamnhhhcu8ukh/8tsdx6xx.mp3",
            "choices": ["Bb", "G", "D", "C"],
            "answer": "D",
            "hint": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/D-major_b-minor.svg/440px-D-major_b-minor.svg.png",
        },
        "F": {
            "key_media": "https://upload.wikimedia.org/score/7/z/7ztgwg4pvf20q021xlawoz5ai4fau73/7ztgwg4p.mp3",
            "choices": ["Eb", "Bb", "F", "D"],
            "answer": "F",
            "hint": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/F-major_d-minor.svg/440px-F-major_d-minor.svg.png",
        },
    },
    # choose key of melody
    "q4": {
        "G": {
            "key_media": "/static/g_melody.mp3",
            "choices": ["G", "C", "Ab", "F#"],
            "answer": "G",
            "hint": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/G-major_e-minor.svg/800px-G-major_e-minor.svg.png",
        },
        "Bb": {
            "key_media": "/static/bb_melody.mp3",
            "choices": ["Eb", "Bb", "F", "D"],
            "answer": "Bb",
            "hint": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/B-flat-major_g-minor.svg/800px-B-flat-major_g-minor.svg.png",
        },
        "C": {
            "key_media": "/static/c_melody.mp3",
            "choices": ["F", "Bb", "D", "C"],
            "answer": "C",
            "hint": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/C-major_a-minor.svg/1920px-C-major_a-minor.svg.png",
        },
        "D": {
            "key_media": "/static/d_melody.mp3",
            "choices": ["Bb", "G", "D", "C"],
            "answer": "D",
            "hint": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/D-major_b-minor.svg/440px-D-major_b-minor.svg.png",
        },
        "F": {
            "key_media": "/static/f_melody.mp3",
            "choices": ["Eb", "Bb", "F", "D"],
            "answer": "F",
            "hint": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/F-major_d-minor.svg/440px-F-major_d-minor.svg.png",
        },
    },
    "q5": {
        "C": {
            "key_media": "C major",
            "choices": [],
            "answer": ["C", "D", "E", "F", "G", "A", "B", "C"],
            "hint": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/C-major_a-minor.svg/1920px-C-major_a-minor.svg.png",
        },
        "D": {
            "key_media": "D major",
            "choices": [],
            "answer": ["D", "E", "F#", "G", "A", "B", "C#", "D"],
            "hint": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/D-major_b-minor.svg/440px-D-major_b-minor.svg.png",
        },
        "Bb": {
            "key_media": "Bb major",
            "choices": [],
            "answer": ["A#", "C", "D", "D#", "F", "G", "A", "A#"],
            "hint": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/B-flat-major_g-minor.svg/440px-B-flat-major_g-minor.svg.png",
        },
        "G": {
            "key_media": "G major",
            "choices": [],
            "answer": ["G", "A", "B", "C", "D", "E", "F#", "G"],
            "hint": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/G-major_e-minor.svg/440px-G-major_e-minor.svg.png",
        },
        "F": {
            "key_media": "F major",
            "choices": [],
            "answer": ["F", "G", "A", "A#", "C", "D", "E", "F"],
            "hint": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/F-major_d-minor.svg/440px-F-major_d-minor.svg.png",
        },
    }
}
