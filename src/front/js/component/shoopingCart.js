import React from "react";
import "../../styles/shooping-cart.css";
import Items from "./items";
import { Link, useNavigate } from "react-router-dom";

const ShoopingCart = () => {
    const navigate = useNavigate();
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-8">
          {/*Do a Map of the products here*/}
          <Items />
          {/*End Map of the map*/}
          <div className="row my-4">
            <div className="col-sm-6">
              <Link
                to="/order"
                className="btn btn-link text-muted"
              >
                <i className="mdi mdi-arrow-left me-1"></i> Continue adding
                products{" "}
              </Link>
            </div>{" "}
            {/* end col */}
            <div className="col-sm-6">
              <div className="text-sm-end mt-2 mt-sm-0">
                <a href="ecommerce-checkout.html" className="btn btn-success">
                  <i className="mdi mdi-cart-outline me-1"></i> Checkout{" "}
                </a>
              </div>
            </div>{" "}
            {/* end col */}
          </div>{" "}
          {/* end row*/}
        </div>
        {/*Order Summary row*/}
        <div className="col-xl-4">
          <div className="mt-5 mt-lg-0">
            <div className="card border shadow-none">
              <div className="card-header bg-transparent border-bottom py-3 px-4">
                <h5 className="font-size-16 mb-0">
                  Order Summary{" "}
                  <span className="float-end">
                    {/*Could be change for a Order number*/}0245896
                  </span>
                </h5>
              </div>
              <div className="card-body p-4 pt-2">
                <div className="table-responsive">
                  <table className="table mb-0">
                    <tbody>
                      <tr>
                        <td>Sub Total :</td>
                        <td className="text-end">$ 780</td>
                      </tr>
                      <tr>
                        <td>Discount : </td>
                        <td className="text-end">- $ 78</td>
                      </tr>
                      <tr>
                        <td>Delivery Charge :</td>
                        <td className="text-end">$ 25</td>
                      </tr>
                      <tr>
                        <td>Tax : </td>
                        <td className="text-end">$ 18.20</td>
                      </tr>
                      <tr className="bg-light">
                        <th>Total :</th>
                        <td className="text-end">
                          <span className="fw-bold">$ 745.2</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* end table-responsive */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end row */}
    </div>
  );
};

export default ShoopingCart;
