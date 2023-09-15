"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Address
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


@api.route('/accounts', methods=['POST'])
def create_account():
    
    body = request.get_json()

    country = body.get("country", None)
    city = body.get("city", None)
    address = body.get("address", None)
    postal_code = body.get("postal_code", None)


    try:
        new_address = Address(country=country, city=city, address=address, postal_code=postal_code)

        db.session.add(new_address) # Memoria Ram los querys a la BD

        db.session.commit()

        return new_address.serialize(), 200

    except ValueError as error:

        return { "message " : "Ah ocurrido un error inesperado"} , 500

    # email
    # password
    #Country
    #city
    #address
    #postal_code
    
    return jsonify(body), 200