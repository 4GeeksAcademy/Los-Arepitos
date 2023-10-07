import React from "react";
import "../../styles/dashboard.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";

const Dashboard = () => {
    const { store } = useContext(Context);
    const products = store.products;
    return (
        <>
            <div className="container mt-5  mx-auto">
                <div className="row tm-content-row">
                    <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 mx-auto">
                        <div className="tm-bg-primary-dark tm-block tm-block-products">
                            <div className="tm-product-table-container">
                                <table className="table table-hover tm-table-small tm-product-table">
                                    <thead>
                                        <tr>
                                            <th scope="col">&nbsp;</th>
                                            <th scope="col">PRODUCT NAME</th>
                                            <th scope="col">STATE</th>
                                            <th scope="col">STOCK</th>
                                            <th scope="col">CREATED BY</th>
                                            <th scope="col">&nbsp;</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            products.map(({ product }, item) => {
                                                return (
                                                    <tr key={item}>
                                                        <th scope="row"><input type="checkbox" className="checkmark" /></th>
                                                        <td className="tm-product-name">{product}</td>
                                                        <td>Active</td>
                                                        <td>{Math.floor(Math.random() * 20)}</td>
                                                        <td>4Geeks</td>
                                                        <td>
                                                            <a href="#" className="tm-product-delete-link">
                                                                <i className="far fa-trash-alt tm-product-delete-icon"></i>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }                                       
                                    </tbody>
                                </table>
                            </div>
                            {/*<!-- table container -->*/}
                            <div className="d-flex justify-content-around flex-wrap">
                                <Link to='/productos'
                                    className="btn-dashboard btn-primary text-uppercase mb-2">Add new product</Link>
                                <button className="btn-dashboard btn-primary  text-uppercase mb-2">
                                    Delete selected products
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Dashboard;
