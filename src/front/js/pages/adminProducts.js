import React from "react";

const AdminProducts = () => {

    return (
        <section className="d-flex mt-5 mx-5 ">
            <table className="table table-hover">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Product</th>
                        <th scope="col">Descrption</th>
                        <th scope="col">State</th>
                        <th scope="col">Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td><div className="d-flex align-items-center">
                            <img
                                src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                alt=""
                                style={{ width: "45px", height: "45px" }}
                                className="rounded-circle"
                            />
                            <div className="ms-3">
                                <p className="fw-bold mb-1">Tittle</p>

                            </div>
                        </div></td>
                        <td><p className="text-muted mb-0">description</p></td>
                        <td><span className="badge rounded-pill bg-success">Active</span></td>
                        <td><span>Quantity</span></td>
                    </tr>

                </tbody>
            </table>
        </section>
    )

}

export default AdminProducts;