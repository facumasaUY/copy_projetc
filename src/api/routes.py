from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Menu, MenuOptions, Reserva
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
import mercadopago
import json
import os

import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

import cloudinary
import cloudinary.uploader
from cloudinary.utils import cloudinary_url



sdk = mercadopago.SDK("APP_USR-7717264634749554-120508-c40d3f9932b4e9f7de4477bfa5ef733b-2136972767")



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

sender_email = os.getenv("SMTP_USERNAME")
sender_password = os.getenv("SMTP_APP_PASSWORD")
smtp_host = os.getenv("SMTP_HOST")
smtp_port = os.getenv("SMTP_PORT")

receiver_email = ["","",""]
# linea 59 poner lo mismo en los corchetes

def send_signup_email(receivers_emails):
    message =MIMEMultipart("alternative")

    message["Subject"]="Prueba de envio de correo - Olvidaste tu contraseña"

    message["from"]="anda@gmail.com"

    message ["To"] = ",".join(receivers_emails)

    html_context = """
        <html>
            <body>
                <h1>Hola</h1>
                <p>Correo de recuperacion de contraseña</p>
                <p>Nos alegramos de poder ayudarte a recuperar tu contraseña!</p>
            </body>
        </html>
    """

    text = "Hola ya recuperaste tu contraseña"
     
    message.attach(MIMEText(html_context,"html"))
    message.attach(MIMEText(text ,"plain"))



    server = smtplib.SMTP(smtp_host,smtp_port)
    server.starttls()
    server.login(send_email,sender_password)
    server.sendmail(sender_email,receiver_email,message.as_string())
    server.quit()

@api.route('/send-email',methods=['POST'])
def send_email():
    
    message =MIMEMultipart("alternative")

    message["Subject"]="Prueba de envio de correo - Olvidaste tu contraseña"

    message["from"]="anda@gmail.com"

    message ["To"] = ["","",""]
    # linea 49 poner lo mismo en los corchetes
    
    html_context = """
        <html>
            <body>
                <h1>Hola</h1>
                <p>Correo de recuperacion de contraseña</p>
                <p>Nos alegramos de poder ayudarte a recuperar tu contraseña!</p>
            </body>
        </html>
    """

    text = "Hola ya recuperaste tu contraseña"
     
    message.attach(MIMEText(html_context,"html"))
    message.attach(MIMEText(text ,"plain"))



    server = smtplib.SMTP(smtp_host,smtp_port)
    server.starttls()
    server.login(send_email,sender_password)
    server.sendmail(sender_email,receiver_email,message.as_string())
    server.quit()
    return jsonify({"msg":"Correo enviado exitosamente"}),200
        



@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():
    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }
    return jsonify(response_body), 200

#Menu

@api.route('/menu', methods=['POST'])
def create_menu():
    body = request.form

    if not body or "day" not in body or "name" not in body or "description" not in body or "price" not in body:
        raise APIException("Missing name, price, description, or img", status_code=400)

    day = body.get("day")
    name = body.get("name")
    description = body.get("description")
    price = body.get("price")
    img = request.files.get("img")

    try:
        upload_result = cloudinary.uploader.upload(img)
        img_url = upload_result["secure_url"]
    except:
        raise APIException("Image upload failed", status_code=500)

    new_menu = Menu(
        day=day,
        name=name,
        description=description,
        img=img_url,
        price=price
    )

    db.session.add(new_menu)
    db.session.commit()
    send_signup_email([email])

    return jsonify({"msg": "Menu created successfully"}), 200


@api.route('/menu/<string:day>', methods=['GET'])
def get_menu_by_day(day):
    menu = Menu.query.filter_by(day=day).all()

    if not menu:
        return jsonify({"msg": "No menus found"}), 404

    menu_list = []
    for item in menu:
        menu_list.append({
            "id": item.id,
            "day": item.day,
            "name": item.name,
            "description": item.description,
            "price": item.price,
            "img": item.img
        })

    return jsonify(menu_list), 200


@api.route('/menuoptions', methods=['POST'])
def create_options():
    body = request.form

    if not body or "name" not in body or "price" not in body :
        raise APIException("Missing name, price, or img", status_code=400)

    name = body.get("name")
    price = body.get("price")

    img = request.files["img"]

   
    try:
        upload_result = cloudinary.uploader.upload(img)
        img_url = upload_result["secure_url"]
    except:
        raise APIException("Image upload failed", status_code=500)


    new_option = MenuOptions(
        name=name,
        img=img_url,
        price=price
    )

    db.session.add(new_option)
    db.session.commit()

    return jsonify({"msg": "Menu option created successfully"}), 200


@api.route('/menuoptions', methods=['GET'])
def get_option():
   
    options = MenuOptions.query.all()

    if not options:
        return jsonify({"msg": "No menus found"}), 404

    option_list = [] 
    for item in options:
        option_list.append({
            "id": item.id,
            "name": item.name,
            "price": item.price,
            "img": item.img
        })

    return jsonify(option_list), 200



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
            "pending": f"{frontendurl}/menu",
            "success": f"{frontendurl}/menuoptions", 
            "failure": f"{frontendurl}/menuoptions", 
            "pending": f"{frontendurl}/menuoptions"

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
    num_funcionario=data.get("num_funcionario")

    exist_user = User.query.filter_by(email=email).first()
    if exist_user:
        return jsonify({"msg":"El usuario ya existe"}),400
    
    new_user = User(
        name = name,
        email = email , 
        last_name=last_name,
        password = password ,
        num_funcionario = num_funcionario
    )
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"message":"User created successfully"}),201


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


# Endpoint para guardar reservas
@api.route('/reservations', methods=['POST'])
def guardar_reserva():
    data = request.json
    nueva_reserva = Reserva(user_id=data['user_id'], 
                            lunes=data['lunes'], 
                            martes=data['martes'], 
                            miercoles=data['miercoles'], 
                            jueves=data['jueves'], 
                            viernes=data['viernes'], 
                            sabado=data['sabado'])
    db.session.add(nueva_reserva)
    db.session.commit()
    return jsonify({"message": "Reserva guardada con éxito"}), 200
    

