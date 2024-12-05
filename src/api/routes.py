"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
import mercadopago
import json

sdk = mercadopago.SDK("TEST-7033493027347872-120109-447e5e8cbdd1b8f28a34bcd75ac8f9b0-71923886")





api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route("/preference", methods=["POST"]) 
def preference(): 
    # body = json.loads(request.data)
    # total = body["total"]
    # Crea un ítem en la preferencia 
    preference_data = { 
        "items": [ 
            { 
                "title": "Mi producto", 
                "quantity": 1,  
                "unit_price": 75.76   
            } 
        ],
        "payer": { 
            "email": "test_user_17805074@testuser.com"
        },
        "back_urls": { 
            "success": "https://crispy-rotary-phone-x59p57vpggwjfv5x5-3000.app.github.dev/menu", 
            "failure": "https://crispy-rotary-phone-x59p57vpggwjfv5x5-3000.app.github.dev/menu", 
            "pending": "https://crispy-rotary-phone-x59p57vpggwjfv5x5-3000.app.github.dev/menu"
        },
        "auto_return": "approved"
    }

    preference_response = sdk.preference().create(preference_data) 
    preference = preference_response["response"] 
    return jsonify(preference), 200
    # return jsonify({"init_point": preference["init_point"]}), 200

