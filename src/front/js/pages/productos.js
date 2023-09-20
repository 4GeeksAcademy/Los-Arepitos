import React, { useState, useContext } from "react"
import { Context, appContext } from "../store/appContext"

export const Productos = () => {

    const flux = useContext(Context)

    const [producto, setProducto] = useState({
        name: "", amount: "", description: "", price: ""
    });
    function agregarProducto() {
        flux.actions.newProduct(producto)
    }
    return (
        <div className="container d-flex flex-column col-8 mt-5">
            <div className="mb-3">
                <label
                    for="name"
                    className="form-label">Nombre</label>
                <input
                    onChange={(event) => setProducto({ ...producto, name: event.target.value })}
                    type="text"
                    className="form-control"
                    id="name"
                    aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label
                    for="description"
                    className="form-label">Descripcion</label>
                <input
                    onChange={(event) => setProducto({ ...producto, description: event.target.value })}
                    defaultValue={"Arepa"}
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp" />

            </div>
            <div className="mb-3">
                <label
                    for="amount"
                    className="form-label">Amount</label>
                <input
                    onChange={(event) => setProducto({ ...producto, amount: parseInt(event.target.value) })}
                    defaultValue={1}
                    type="text"
                    className="form-control"
                    id="amount"
                    aria-describedby="emailHelp" />

            </div>
            <div
                className="mb-3">
                <label
                    for="exampleInputPassword1"
                    className="form-label">Price</label>
                <input
                    onChange={(event) => setProducto({ ...producto, price: parseFloat(event.target.value) })}
                    defaultValue={1.50}
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1" />
            </div>
            <button
                onClick={() => agregarProducto()}
                type="submit"
                className="btn btn-danger">Submit</button>
        </div>
    );
}