"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Driver, VehicleType, Products, Order, Customer, Address
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/account/<string:tipo>', methods=['POST'])
def create_account(tipo):

    if tipo == 'driver':
        
        # name = request.json.get("name", None)

        new_driver = Driver(email="emaisl@gmail.com", password="paranguacutirimicuaro", matricula="VF346S9", vehicle=VehicleType.MOTO)

        new_address = Address(country="Venezuela", city="Caracas", address="Los Guayabitos", postal_code=1080)

        new_customer = Customer(email="emaisl2@gmasil.com", password="paranguacutirimicuaro2", address=new_address)
        
        db.session.add(new_driver)
        db.session.add(new_address)
        db.session.add(new_customer)
        
        try:
            
            arepas = Products.new_product("arepa", "la mejor comida", 1, 1.5)
            malta = Products.new_product("malta", "la mejor bebida", 1, 1)
            cachapa = Products.new_product("cachapa", "el mejor desayuno", 1, 3)

            db.session.add(cachapa)
            db.session.add(malta)
            db.session.add(arepas)

            new_order = Order(customer=new_customer, delivery=new_driver, products=[arepas, malta, cachapa] )

            db.session.add(new_order)
            db.session.commit()

            return jsonify(new_order.serialize()), 200
        except ValueError as err:
            return "Error "+err, 500

    else:
        return jsonify({ "message": "Driver created succesfully" }), 400

