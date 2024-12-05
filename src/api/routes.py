"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200





































# dejo espacios para no chocar con facu en sus lineas 

@api.route('/signup', methods=['POST']) 
def register():

    data= request.json
    name = data.get("name")
    last_name=data.get("last_name")
    email = data.get("email")
    password = data.get("password")

    exist_user = User.query.filter_by(email=email).first()
    if exist_user:
        return jsonify({"msg":"El usuario ya existe"}),400
    
    new_user = User(
        name = name,
        email = email , 
        last_name=last_name,
        password = password 
    )
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"message":"User created successfully"}),200


        #ceci tengo una pregunta en el post de arriba 
@api.route('/login', methods=['POST'])
def login():

    data= request.json
    #info desde el frontend
    email = data.get("email")
    password = data.get("password")

    user=User.query.filter_by(email=email).first()
    if email != user.email or password != user.password:
        return jsonify({"msg": "Bad username or password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token, user=user.serialize()),200



































































