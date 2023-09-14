from flask_sqlalchemy import SQLAlchemy
import enum

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
    

class Address(db.Model):
    
    id = db.Column(db.Integer, primary_key=True)
    country = db.Column(db.String(80), nullable=False)
    city = db.Column(db.String(80), nullable=False)
    address = db.Column(db.String(80), nullable=False)
    postal_code = db.Column(db.String(40), nullable=False)


class Customer(User):

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    #user = db.relationship("User")
    delivery_address_id = db.Column(db.Integer, db.ForeignKey('address.id'))
    delivery_address = db.relationship('Address')


class VehicleType(enum.Enum):
    MOTO = "Bera"
    CARRO = "Twingo"

class Driver(User):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    matricula = db.Column(db.String(10), nullable=False)
    vehicle = db.Column(db.Enum(VehicleType), nullable=False)

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


class Order(db.Model):

    __tablename__ = "ordenes"
    id = db.Column(db.Integer, primary_key=True)

    delivery_id = db.Column(db.Integer, db.ForeignKey('driver.id'))
    custumer_id = db.Column(db.Integer, db.ForeignKey('customer.id'))

    products = db.relationship("Products", secondary=association_table)










