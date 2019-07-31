from numpy.random import randint
from urllib import parse 


def parse_body(body):
    body = dict(parse.parse_qsl(body))
    parsed_body = {}

    for key, value in body.items():
        if key == "state":
            parsed_state = value.split(",")
            parsed_body[key] = parsed_state
        elif key == "moveCount":
            parsed_int = int(value)
            parsed_body[key] = parsed_int
        else:
            parsed_body[key] = value
    return parsed_body


def EasyAI(state, count, computerTurn):
    taken = False
    while taken == False and count != 5:
        computerMove = randint(0, 9)
        if state[computerMove] == "#":
            taken = True
            return computerMove

def HardAI(state, count, computerTurn):
    NotImplemented