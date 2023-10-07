import React from "react";
import "../../styles/dashboard.css";

const AddNewProduct = () => {
    return (
        <>
            <div className="container tm-mt-big tm-mb-big">
                <div className="row">
                    <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12 mx-auto">
                        <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
                            <div className="row">
                                <div className="col-12">
                                    <h2 className="tm-block-title d-inline-block">Add Product</h2>
                                </div>
                            </div>
                            <div className="row tm-edit-product-row">
                                <div className="col-xl-6 col-lg-6 col-md-12">
                                    <div action="" className="tm-edit-product-form">
                                        <div className="form-group mb-3">
                                            <label
                                            >Product Name
                                            </label>
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                className="form-control validate"
                                                required
                                            />
                                        </div>
                                        <div className="form-group mb-3">
                                            <label
                                            >Description</label
                                            >
                                            <textarea
                                                className="form-control validate"
                                                rows="3"
                                                required
                                            ></textarea>
                                        </div>
                                        <div className="form-group mb-3">
                                            <label
                                            >Category</label
                                            >
                                            <select
                                                className="custom-select tm-select-accounts"
                                                id="category"
                                            >
                                                <option defaultValue={1}>Select category</option>
                                                <option value="1">New Arrival</option>
                                                <option value="2">Most Popular</option>
                                                <option value="3">Trending</option>
                                            </select>
                                        </div>
                                        <div className="row">
                                            <div className="form-group mb-3 col-xs-12 col-sm-6">
                                                <label
                                                >Expire Date
                                                </label>
                                                <input
                                                    id="expire_date"
                                                    name="expire_date"
                                                    type="text"
                                                    className="form-control validate"
                                                    data-large-mode="true"
                                                />
                                            </div>
                                            <div className="form-group mb-3 col-xs-12 col-sm-6">
                                                <label
                                                >Units In Stock
                                                </label>
                                                <input
                                                    id="stock"
                                                    name="stock"
                                                    type="text"
                                                    className="form-control validate"
                                                    required
                                                />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-12 mx-auto mb-4">
                                        <div className="tm-product-img-dummy mx-auto">
                                            <i
                                                className="fas fa-cloud-upload-alt tm-upload-icon"

                                            ></i>
                                        </div>
                                        <div className="custom-file mt-3 mb-3">
                                            <input id="fileInput" type="file" style={{ display: "none" }} />
                                            <input
                                                type="button"
                                                className="btn btn-primary btn-block mx-auto"
                                                value="UPLOAD PRODUCT IMAGE"

                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-primary btn-block text-uppercase">Add Product Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default AddNewProduct;