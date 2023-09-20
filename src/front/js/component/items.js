import React from "react";


const Items = () => {
    return (
        <div className="card border shadow-none">
            <div className="card-body">
                <div className="d-flex align-items-start border-bottom pb-3">
                    <div className="me-4">
                        <img src="https://www.bootdey.com/image/380x380/008B8B/000000" alt="" className="avatar-lg rounded"/>
                    </div>
                    <div className="flex-grow-1 align-self-center overflow-hidden">
                        <div>
                            <h5 className="text-truncate font-size-18"><a href="#" className="text-dark">item</a></h5>
                            <p className="text-muted mb-0">
                                <i className="bx bxs-star text-warning"></i>
                                <i className="bx bxs-star text-warning"></i>
                                <i className="bx bxs-star text-warning"></i>
                                <i className="bx bxs-star text-warning"></i>
                                <i className="bx bxs-star-half text-warning"></i>
                            </p> 
                        </div>
                    </div>
                    <div className="flex-shrink-0 ms-2">
                        <ul className="list-inline mb-0 font-size-16">
                            <li className="list-inline-item">
                                <a href="#" className="text-muted px-1">
                                    <i className="mdi mdi-trash-can-outline"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#" className="text-muted px-1">
                                    <i className="mdi mdi-heart-outline"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="mt-3">
                                <p className="text-muted mb-2">Price</p>
                                <h5 className="mb-0 mt-2"><span className="text-muted me-2"></span>$450</h5>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="mt-3">
                                <p className="text-muted mb-2">Quantity</p>
                                <div className="d-inline-flex">
                                    <select className="form-select form-select-sm w-xl">
                                        <option value="1">1</option>
                                        <option value="2" selected="">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="mt-3">
                                <p className="text-muted mb-2">Total</p>
                                <h5>$900</h5>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>        
    );
    };

    export default Items;