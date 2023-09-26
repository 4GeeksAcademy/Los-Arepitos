import React, { Component } from "react";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">

		<footer className="text-white text-center text-lg-start bg-dark">
			<div className="container p-4">
				<div className="row mt-4">
					<div className="col-lg-4 col-md-12 mb-4 mb-md-0">
						<h5 className="text-uppercase mb-4">About Us</h5>
						<p align="justify">
							Arepito arose as an idea to provide excellent service and quality food to our customers. Bringing the best of Venezuelan food to the United States.
						</p>
						<p align="justify">
							Our principal goal is to provide the best service and quality food to our customers. We are a family business that is growing and we want to share our culture with you.
						</p>
						<div className="mt-4">
							<a type="button" className="btn btn-floating btn-light btn-lg rounded-circle mx-1"><i className="fab fa-facebook-f "></i></a>
							<a type="button" className="btn btn-floating btn-light btn-lg rounded-circle mx-1"><i className="fab fa-instagram "></i></a>
							<a type="button" className="btn btn-floating btn-light btn-lg rounded-circle mx-1"><i className="fa-brands fa-x-twitter"></i></a>
							<a type="button" className="btn btn-floating btn-light btn-lg rounded-circle mx-1"><i className="fab fa-google-plus-g "></i></a>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 mb-4 mb-md-0">
						<h5 className="text-uppercase mb-4 pb-1">Search something</h5>
						<div className="form-outline form-white mb-4">
							<input type="text" id="formControlLg" className="form-control form-control-lg" />
							<label className="form-label" htmlFor="formControlLg">Search</label>
						</div>
						<ul className="fa-ul" style={{ marginLeft: "1.65em" }}>
							<li className="mb-3">
								<span className="fa-li"><i className="fas fa-home"></i></span><span className="ms-2">Naples, 34110, FL</span>
							</li>
							<li className="mb-3">
								<span className="fa-li"><i className="fas fa-envelope"></i></span><span className="ms-2">contact@arepitos.com</span>
							</li>
							<li className="mb-3">
								<span className="fa-li"><i className="fas fa-phone"></i></span><span className="ms-2">+ 1 239 999 9999</span>
							</li>
						</ul>
					</div>
					<div className="col-lg-4 col-md-6 mb-4 mb-md-0">
						<h5 className="text-uppercase mb-4">Opening hours</h5>
						<table className="table table-dark">
							<tbody className="fw-normal">
								<tr className="bg-dark">
									<td >Mon - Thu:</td>
									<td className="">8am - 9pm</td>
								</tr>
								<tr>
									<td >Fri - Sat:</td>
									<td >8am - 1am</td>
								</tr>
								<tr>
									<td >Sunday:</td>
									<td >9am - 10pm</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
				© 2023 Copyright:
				<a className="text-white" href="#">Arepitos.com</a>
			</div>
		</footer>

	</footer>
);
