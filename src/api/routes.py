from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Menu
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

import cloudinary
import cloudinary.uploader
from cloudinary.utils import cloudinary_url

import os 

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

    if img:
        upload_result = cloudinary.uploader.upload(img)
        img_url = upload_result["secure_url"]
    else:
        img_url = None  # You can set a default image if required

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
    
