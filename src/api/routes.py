from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Menu
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
import mercadopago
import json

sdk = mercadopago.SDK("APP_USR-7717264634749554-120508-c40d3f9932b4e9f7de4477bfa5ef733b-2136972767")




from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

import cloudinary
import cloudinary.uploader
from cloudinary.utils import cloudinary_url

import os 

frontendurl = os.getenv("FRONTEND_URL")


cloudinary.config( 
    cloud_name = "dqspjepfs", 
    api_key = "992526845141794", 
    api_secret = os.getenv("CLOUDINARY_SECRET_2", ""), # Click 'View API Keys' above to copy your API secret
    secure=True
)



api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():
    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }
    return jsonify(response_body), 200

@api.route('/menu', methods=['POST'])
def create_new_menu():
    
    body = request.form

    if not body or "day" not in body or "name" not in body or "description" not in body or "price" not in body:
        raise APIException("Missing name, price, description, or img", status_code=400)

    day = body.get("day")
    name = body.get("name")
    description = body.get("description")
    price = body.get("price") 

    img = request.files.get("img")

   
    upload_result = cloudinary.uploader.upload(img)
    img_url = upload_result["secure_url"]
   
    new_menu = Menu(
        day=day,
        name=name,
        description=description,
        img=img_url,
        price=price 
    )
    
    db.session.add(new_menu)
    db.session.commit()

    return jsonify({"msg": "Menu created successfully"}), 200


@api.route('/menu', methods=['GET'])
def get_menus():

    menus = Menu.query.all()


    if not menus:
        return jsonify({"msg": "No menus found"}), 404

    menu_list = []
    for menu in menus:
        menu_list.append({
            "id": menu.id,
            "day": menu.day,
            "name": menu.name,
            "description": menu.description,
            "price": menu.price,
            "img": menu.img
        })

    return jsonify(menu_list), 200
    








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
            "success": f"{frontendurl}/menu", 
            "failure": f"{frontendurl}/menu", 
            "pending": f"{frontendurl}/menu"

            # que url es la que va aca . o implementar backendurl
        },
        "auto_return": "approved"
    }

    preference_response = sdk.preference().create(preference_data) 
    preference = preference_response["response"] 
    return jsonify(preference), 200
    # return jsonify({"init_point": preference["init_point"]}), 200


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


@api.route('/menu/<string:day>', methods=['GET'])
def get_menus_by_days(day):
    menu = Menu.query.filter_by(day=day).all()
    
    if not menu:
        return jsonify({"msg": "No menus found"}), 404

    menu_list = []
    for menu in menu:
        menu_list.append({
            "id": menu.id,
            "day": menu.day,
            "name": menu.name,
            "description": menu.description,
            "price": menu.price,
            "img": menu.img
        })

    return jsonify(menu_list), 200
