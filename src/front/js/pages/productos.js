import React, { useState, useContext } from "react";
import { Context, appContext } from "../store/appContext";
import { storage } from "../hooks/useFirebase";
import { getDownloadURL, ref as storageRef, uploadBytes } from "firebase/storage";
import { Modal } from "react-bootstrap";
import { FcOk } from "react-icons/fc";

export const Productos = () => {
    const id = new Date();

    const [submitModal, setSubmitModal] = useState(false);
    const [uploadModal, setUploadModal] = useState(false);

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
                        setProducto({ ...producto, product_url: url });
                        setUploadModal(true);
                        setTimeout(() => {
                            setUploadModal(false);
                            navigate("/");
                        }, 1000);
                    })
                    .catch((error) => {
                        alert(error.message);
                    });
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    const flux = useContext(Context);

    const [producto, setProducto] = useState({
        name: "",
        amount: "",
        description: "",
        price: "",
        image: null,
        product_url: "",
    });

    function eliminarImagen() {
        setProducto({ ...producto, image: null });
    }

    function agregarProducto() {
        flux.actions.newProduct(producto);
        setSubmitModal(true);
        setTimeout(() => {
            setSubmitModal(false);
            navigate("/order");
        }, 2000);

    }

    return (
        <div className="container d-flex flex-column col-md-8 col-lg-6 mt-5">
            <div className="mb-3">
                <label htmlFor="name" className="form-label">
                    Nombre
                </label>
                <input
                    onChange={(event) =>
                        setProducto({ ...producto, name: event.target.value })
                    }
                    type="text"
                    className="form-control"
                    id="name"
                    aria-describedby="emailHelp"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">
                    Descripcion
                </label>
                <input
                    onChange={(event) =>
                        setProducto({ ...producto, description: event.target.value })
                    }
                    // defaultValue={"Arepa"}
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="amount" className="form-label">
                    Amount
                </label>
                <input
                    onChange={(event) =>
                        setProducto({ ...producto, amount: parseInt(event.target.value) })
                    }
                    // defaultValue={1}
                    type="text"
                    className="form-control"
                    id="amount"
                    aria-describedby="emailHelp"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                    Price
                </label>
                <input
                    onChange={(event) =>
                        setProducto({ ...producto, price: parseFloat(event.target.value) })
                    }
                    // defaultValue={1.5}
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Picture</label>
                <div className="input-group d-flex justify-content-start mb-3">
                    <label className="btn btn-secondary mx-5">
                        Seleccionar Imagen
                        <input
                            onChange={(event) =>
                                setProducto({ ...producto, image: event.target.files[0] })
                            }
                            type="file"
                            accept="image/png,image/jpeg"
                            className="form-control d-none"
                        />
                    </label>
                    <button
                        onClick={() => uploadFile()}
                        type="submit"
                        className="btn btn-success"
                    >
                        Subir Imagen
                    </button>
                </div>
                {producto.image && (
                    <div className="position-relative">
                        <img
                            src={URL.createObjectURL(producto.image)}
                            width={"300px"}
                            alt={"selected image"}
                            className="img-fluid"
                        />
                        <button
                            onClick={() => eliminarImagen()}
                            type="button"
                            className="btn btn-danger position-absolute top-0 end-0 badge mt-2 me-2"
                        >
                            X
                        </button>
                    </div>
                )}
            </div>

            <button
                onClick={() => agregarProducto()}
                type="submit"
                className="btn btn-danger mb-3 btn-lg btn-block"
            >
                Submit
            </button>

            {submitModal && (
                <Modal show={submitModal} onHide={() => setSubmitModal(false)}>
                    <Modal.Body>
                        <div className="d-flex justify-content-center align-items-center flex-column">
                            <FcOk size={100} className="text-success mr-2" />
                            <p className="mb-0 text-black mt-3 fw-bold fs-3">
                                Product submitted successfully!
                            </p>
                        </div>
                    </Modal.Body>
                </Modal>
            )}

            {uploadModal && (
                <Modal show={uploadModal} onHide={() => setUploadModal(false)}>
                    <Modal.Body>
                        <div className="d-flex justify-content-center align-items-center flex-column">
                            <FcOk size={100} className="text-success mr-2" />
                            <p className="mb-0 text-black mt-3 fw-bold fs-3">
                                Image uploaded successfully!
                            </p>
                        </div>
                    </Modal.Body>
                </Modal>
            )}
        </div>
    );
};