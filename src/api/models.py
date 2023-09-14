from flask_sqlalchemy import SQLAlchemy
import enum

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __init__(self, email, password):
        self.email = email
        self.password = password
        self.is_active = True
 
    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
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
            "city" : self.city,
            "address" : self.address
        }


class Customer(User):

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    #user = db.relationship("User")
    delivery_address_id = db.Column(db.Integer, db.ForeignKey('address.id'))
    delivery_address = db.relationship('Address')

    def __init__(self, email, password, address):
        super().__init__(email=email, password=password)
        self.address = address

    def serialize(self):
        return {
            "email" : self.email,
            "matricula": self.matricula,
            "address": self.address.serialize()
        }



class VehicleType(enum.Enum):
    MOTO = "Bera"
    CARRO = "Twingo"

class Driver(User):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    matricula = db.Column(db.String(10), nullable=False)
    vehicle = db.Column(db.Enum(VehicleType), nullable=False)

    def __init__(self, email, password, matricula, vehicle):
        super().__init__(email=email, password=password)
        self.matricula = matricula
        self.vehicle = vehicle

    def serialize(self):
        return {
            "email" : self.email,
            "matricula": self.matricula,
            "vehicle": self.vehicle.value
        }
        
    

# association_table = db.Table(
#     "association_table_orders",
#     db.Column("products", db.Integer ,db.ForeignKey("products.id")),
#     db.Column("ordenes", db.Integer ,db.ForeignKey("ordenes.id")),
# )

class Order(db.Model):

    __tablename__ = "ordenes"
    id = db.Column(db.Integer, primary_key=True)

    # delivery_id = db.Column(db.Integer, db.ForeignKey('driver.id'))
    # delivery = db.relationship("Driver")

    # customer_id = db.Column(db.Integer, db.ForeignKey('customer.id'))
    # customer = db.relationship('Customer')

    #items = db.relationship("Products", secondary=association_table, backref="active_orders")

    def __init__(self, customer, delivery, items):
        # self.customer = customer
        # self.delivery = delivery
        self.items = items

    def serialize(self):
        return {
            "delivery": self.delivery.serialize(),
            #"products" : [ pro.serialize() for pro in self.products]
        }

class Products(db.Model):
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(256), nullable=False)
    description = db.Column(db.String(1000), nullable=False)
    amount = db.Column(db.Integer, nullable=False)
    price = db.Column(db.Float(4,2), nullable=False)

    def __init__(self, name, description, amount, price):
        self.name = name
        self.description = description
        self.amount = amount
        self.price = price

    @classmethod
    def new_product(cls, name, description, amount, price):
        new_prod = cls(name, description, amount, price)
        db.session.add(new_prod)
        try:
            db.session.commit()
            return new_prod
        except Exception as error:
            print(error)
            return None

    def serialize(self):
        return {
            "name" : self.name,
            "price" : self.price
        }













