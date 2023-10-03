import React, { useState, useContext } from "react"
import { Context, appContext } from "../store/appContext"

import { storage } from "../hooks/useFirebase"

import {
    getDownloadURL,
    ref as storageRef,
    uploadBytes,
} from "firebase/storage";

export const Productos = () => {

    const id = new Date()

    const uploadFile = () => {
        if (producto.image === null) {
            alert("Please select an image");
            return;
        }
        const imageRef = storageRef(storage, `products/${id}`);

        uploadBytes(imageRef, producto.image)
            .then((snapshot) => {
                getDownloadURL(snapshot.ref)
                    .then((url) => {

                        setProducto({ ...producto, product_url: url })

                    })
                    .catch((error) => {
                        alert(error.message);
                    });
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    const flux = useContext(Context)

    const [producto, setProducto] = useState({
        name: "", amount: "", description: "", price: "", image: null, product_url: ""
    });
    function agregarProducto() {
        flux.actions.newProduct(producto)
    }
    return (
        <div className="container d-flex flex-column col-8 mt-5">
            <div className="mb-3">
                <label
                    htmlFor="name"
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
                    htmlFor="description"
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
                    htmlFor="amount"
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
                    htmlFor="exampleInputPassword1"
                    className="form-label">Price</label>
                <input
                    onChange={(event) => setProducto({ ...producto, price: parseFloat(event.target.value) })}
                    defaultValue={1.50}
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1" />
            </div>
            <div
                className="mb-3">
                <label className="form-label">Picture</label>
                <input
                    onChange={(event) => setProducto({ ...producto, image: event.target.files[0] })}
                    type="file"
                    accept="image/png,image/jpeg"
                    className="form-control" />

                {
                    producto.image && <img src={URL.createObjectURL(producto.image)} width={"300px"} alt={"selected image"} />
                }
            </div>

            <button
                onClick={() => agregarProducto()}
                type="submit"
                className="btn btn-danger mb-2">Submit</button>

            <button
                onClick={() => uploadFile()}
                type="submit"
                className="btn btn-success">Upload Image</button>
        </div>
    );
}