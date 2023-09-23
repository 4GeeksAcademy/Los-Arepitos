"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Address, Customer, Driver, VehicleType, Products, Order
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
import re
import bcrypt
 
# Define a function for
# for validating an Email
def check(email):
    regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b'
    # pass the regular expression
    # and the string into the fullmatch() method
    if(re.fullmatch(regex, email)):
        return True
    else:
        return False

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


@api.route('/token', methods=['POST'])
def create_token():
    email = request.json.get('email', None)   
    password = request.json.get('password', None)  
    if email  is None or password is None:
        return {'message': 'parameters missing'}, 400
    user = User.query.filter_by(email= email).one_or_none()
    if user is None:
        return {'message': "user doesn't exist"}, 400
    password_byte =bytes(password, 'utf-8')
    # hash_password = bcrypt.hashpw(password_byte)
    if bcrypt.checkpw(password_byte, user.password.encode('utf-8')):
        return {'token': create_access_token(identity = user.email)},200
    return {'message': 'you shall no pass'}, 501

# bpassword = bytes(password, 'utf-8')

#     salt = bcrypt.gensalt(14)

#     hashed_password = bcrypt.hashpw(password=bpassword, salt=salt)
    
#     print( len(hashed_password.decode('utf-8')), len(salt.decode('utf-8')))

@api.route('/profile/customer')
@jwt_required()
def get_customer_profile():
    email = get_jwt_identity()
    customer = Customer.query.filter_by(email= email).one_or_none()
    if customer is not None:
        return customer.serialize(), 200
    return {"message": "Customer not Authorized"}, 401 


@api.route('/accounts/customer', methods=['POST'])
def create_driver():
    
    body = request.get_json()

    country = body.get("country", None)
    city = body.get("city", None)
    address = body.get("address", None)
    postal_code = body.get("postal_code", None)

    if city == None:
        return { "message": "city field is missing in request body" }, 400
    if address == None:
        return { "message": "address field is missing in request body" }, 400
    if country == None:
            return { "message": "country field is missing in request body" }, 400
    if postal_code == None:
        return { "message": "postal_code field is missing in request body" }, 400

    email = body.get("email", None)
    name = body.get("name", None)
    password = body.get("password", None)

    bpassword = bytes(password, 'utf-8')

    salt = bcrypt.gensalt(14)

    hashed_password = bcrypt.hashpw(password=bpassword, salt=salt)
    
    print( len(hashed_password.decode('utf-8')), len(salt.decode('utf-8')))

    if email != None and password != None:

        if check(email) == False:
            return { "message" : "email format is invalid" }, 400

        try:
            new_address = Address(country=country, city=city, address=address, postal_code=postal_code)

            db.session.add(new_address) # Memoria Ram los querys a la BD

            new_customer = Customer(email=email, password=hashed_password.decode('utf-8'), address=new_address, salt=salt.decode('utf-8'), name=name)

            db.session.add(new_customer)

            db.session.commit() # Datos en la BD postgrest

            return new_customer.serialize(), 200

        except ValueError as error:

            return { "message " : "Ah ocurrido un error inesperado " + error} , 500
    else:
        return { "message" : "user fields missing in request body" }, 400

    
    return jsonify(body), 200


@api.route('/accounts/driver', methods=['POST'])
def create_customer():
    
    body = request.get_json()

    email = body.get("email", None)
    password = body.get("password", None)

    vehicle = body.get("vehicle", None)
    matricula = body.get("matricula", None)

    if email != None and password != None:

        if check(email) == False:
            return { "message" : "email format is invalid" }, 400

        try:

            if vehicle == 'moto':
                new_driver = Driver(email=email, password=password, matricula=matricula, vehicle=VehicleType.MOTO)
            else:
                new_driver = Driver(email=email, password=password, matricula=matricula, vehicle=VehicleType.CARRO)

            db.session.add(new_driver)

            db.session.commit() # Datos en la BD postgrest

            return new_driver.serialize(), 200

        except ValueError as error:

            return { "message " : "Ah ocurrido un error inesperado " + error} , 500
    else:
        return { "message" : "user fields missing in request body" }, 400

    
    return jsonify(body), 200


@api.route("/products", methods=['POST'])
def create_product():
    body = request.get_json()

    name = body.get("name", None)
    description = body.get("description", '')
    amount = body.get("amount", 1)
    price = body.get("price", None)

    if name == None or price == None:
        return { "message" : "request body missing name or price" }, 400

    new_product = Products.create(name=name, amount=amount, description=description, price=price)
    if new_product == None:
        return { "message" : "An error has occurd during product creation" }, 500

    return new_product.serialize() , 200


@api.route("/orders", methods=['GET'])
def get_all_orders():

    try:
        all_orders = Order.query.all()

        return [ orden.serialize() for orden in all_orders ]

    except ValueError as err:
        return {"message": "failed to retrive orders " + err}, 500


@api.route("/orders/", methods=['POST'])
def new_order():

    body = request.get_json()

    delivery_email = body.get("delivery", None)
    customer_email = body.get("customer", None)

    if delivery_email != None:
        delivery = Driver.query.filter_by(email=delivery_email).one_or_none()
        
    if customer_email != None:
        customer = Customer.query.filter_by(email=customer_email).one_or_none()

        items = body.get("products", [])
        
        products = []

        for i in items:
            products.append( Products.query.get(i) )    

        new_order = Order(customer=customer, delivery=delivery)

        new_order.products = products

        try:
            db.session.add(new_order)
            db.session.commit()

            return new_order.serialize(), 200
        
        except ValueError as err:
            return { "message" : "Something go wrong :(" }, 500


    else:
        return { "Something is missing or incorrect" }, 500