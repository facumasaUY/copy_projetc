from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True, nullable=False)
    last_name = db.Column(db.String(100), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def __init__(self, name, email,last_name, password):
        self.name = name
        self.last_name=last_name
        self.email = email
        self.password = password
        self.is_active = True

    def serialize(self):
        return {
           "id":self.id,
            "name":self.name,
            "last_name":self.last_name,
            "email":self.email,
            "is_active":self.is_active
            
        }

#Menú
class Menu(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    day = db.Column(db.String(50), nullable=False)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(255), nullable=True)
    img = db.Column(db.String(1000), nullable=False)
    price = db.Column(db.String(20), nullable=False)  

    def __repr__(self):
        return f'<Menu {self.name}>'
     
    def __init__(self, day,name,description, img, price):
        self.day = day
        self.name=name
        self.description = description
        self.img = img
        self.price= price

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "img": self.img,
            "price": self.price,
        }


class Reserva(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user = db.Column(db.String(100), nullable=False)
    dia = db.Column(db.String(20), nullable=False)
    hora = db.Column(db.String(10), nullable=False)

    def __repr__(self):
        return f'<Reserva {self.user}>'

    def serialize(self):
        return {
            "id": self.id,
            "user": self.user,
            "dia": self.dia,
            "hora":self.hora
        }
            
        
