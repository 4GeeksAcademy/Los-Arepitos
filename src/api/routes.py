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

        new_driver = Driver.query.filter_by(email="emaisl@gmail.com").one_or_none()

        new_address = Address.query.filter_by(postal_code="1080").one_or_none()

        new_customer = Customer.query.filter_by(email="emaisl2@gmasil.com").one_or_none()
        
        try:
            
            arepas = Products.query.filter_by(name="arepa").one_or_none()
            malta = Products.query.filter_by(name="malta").one_or_none()

            new_order = Order(customer=new_customer, delivery=new_driver)

            new_order.items.append(malta)
            new_order.items.append(arepas)

            db.session.add(new_order)
            db.session.commit()

            return jsonify(new_order.serialize()), 200
        except ValueError as err:
            db.session.rollback()
            return "Error "+err, 500

    else:
        return jsonify({ "message": "Driver created succesfully" }), 400

@api.route('/orders', methods=['GET'])
def get_orders():

    try:
        orders = Order.query.all()

        return jsonify([ord.serialize() for ord in orders]), 200
    except ValueError as err:
        db.session.rollback()
        return "Error "+err, 500

    else:
        return jsonify({ "message": "Driver created succesfully" }), 400