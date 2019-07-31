import falcon
import json
from utils import EasyAI, HardAI, parse_body


class CORS:
    def on_options(self, req, resp):
        resp.status = falcon.HTTP_200
        resp.set_header('Access-Control-Allow-Origin', '*')
        resp.set_header('Access-Control-Allow-Methods', 'GET')
        resp.set_header('Access-Control-Allow-Headers', 'Content-Type')


class EasyEP(CORS):
    def on_get(self, req, resp):
        # Parse Request 
        body = req.query_string
        parsed_body = parse_body(body)

        # Get computer move
        state = parsed_body.get('state')
        count = parsed_body.get('count')
        computerTurn = parsed_body.get('compTurn')
        move = EasyAI(state, count, computerTurn)

        # Respond
        resp.body = str(move)
        resp.status = falcon.HTTP_200
        resp.set_header('Access-Control-Allow-Origin', '*')


class HardEP(CORS):
    def on_get(self, req, resp):
        body = req.query_string

        json_body = json.dumps(dict(parse.parse_qsl(body)))

        resp.body = json_body
        resp.status = falcon.HTTP_200
        resp.set_header('Access-Control-Allow-Origin', '*')

api = falcon.API()
api.add_route('/easy', EasyEP())
api.add_route('/hard', HardEP())