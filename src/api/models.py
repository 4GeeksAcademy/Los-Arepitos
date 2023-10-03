from flask_sqlalchemy import SQLAlchemy
import enum

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)

    name = db.Column(db.String(120), unique=False, nullable=False)

    password = db.Column(db.String(80), unique=False, nullable=False)

    salt = db.Column(db.String(40), unique=False, nullable=False)

    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __init__(self, email, password, name, salt):
        self.name = name
        self.email = email
        self.password = password
        self.is_active = True
        self.salt = salt


    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name
        }
    

class Address(db.Model):
    
    id = db.Column(db.Integer, primary_key=True)
    country = db.Column(db.String(80), nullable=False)
    city = db.Column(db.String(80), nullable=False)
    address = db.Column(db.String(80), nullable=False)
    postal_code = db.Column(db.String(40), nullable=False)

    def __init__(self, country, city, address, postal_code):
        self.country = country
        self.city = city
        self.address = address
        self.postal_code = postal_code

    def serialize(self):
        return {
            "id": self.id,
            "address": self.address,
            "postal_code": self.postal_code
        }



class Customer(User):

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    delivery_address_id = db.Column(db.Integer, db.ForeignKey('address.id'))
    
    delivery_address = db.relationship('Address')

    def __init__(self, email, password, address, salt, name):
        super().__init__(email=email, password=password, salt=salt, name=name)
        self.delivery_address = address

    def serialize(self):
        return {
                "user":  super().serialize(),
                "address": self.delivery_address.serialize()
            }

class VehicleType(enum.Enum):
    MOTO = "Bera"
    CARRO = "Twingo"

class Driver(User):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    matricula = db.Column(db.String(10), nullable=False)
    vehicle = db.Column(db.Enum(VehicleType), nullable=False)

    def __init__(self, email, password, matricula, vehicle, salt, name):
        super().__init__(email=email, password=password, salt=salt, name=name)
        self.matricula = matricula
        self.vehicle = vehicle

    def serialize(self):
        return {
            "driver" : super().serialize(),
            "vehicle": self.vehicle.value
            }

association_table = db.Table(
    "association_table_orders",
    db.Column("products", db.Integer ,db.ForeignKey("products.id")),
    db.Column("ordenes", db.Integer ,db.ForeignKey("ordenes.id")),
)

class Products(db.Model):
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(256), nullable=False)
    description = db.Column(db.String(1000), nullable=False)
    amount = db.Column(db.Integer, nullable=False)
    price = db.Column(db.Float(4,2), nullable=False)

    def __init__(self, name, price, amount=1, description=''):
        self.name = name
        self.description = description
        self.amount = amount
        self.price = price
    
    @classmethod
    def create(cls, name, price, amount, description):
        new_product = cls(name=name, price=price, amount=amount, description=description)
        try:
            db.session.add(new_product)
            db.session.commit()
            return new_product
        except ValueError as err:
            print(err)
            return None
        
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "quantity": self.amount,
            "price": self.price,
            "description": self.description
        }
    
class Order(db.Model):

    __tablename__ = "ordenes"
    id = db.Column(db.Integer, primary_key=True)

    delivery_id = db.Column(db.Integer, db.ForeignKey('driver.id'))
    delivery = db.relationship("Driver")

    customer_id = db.Column(db.Integer, db.ForeignKey('customer.id'))
    customer = db.relationship("Customer")

    products = db.relationship("Products", secondary=association_table)

    def __init__(self, delivery, customer):
        self.delivery = delivery 
        self.customer = customer


    def serialize(self):
        return {
            "id" : self.id,
            "customer_address" : self.customer.delivery_address.serialize(),
            "items": [ pro.serialize() for pro in self.products ]
        }






