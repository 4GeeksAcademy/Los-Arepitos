import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import logo from "../../img/logo1.png";

export const Navbar = () => {
	const { store } = useContext(Context);
	const [title, setTitle] = useState("");
	const titulo = ["Los Arepitos", "Venezuelan Food"];

	useEffect(() => {
		let i = 0;
		let j = 0;
		const interval = setInterval(() => {
			if (j === titulo[i].length) {
				i = (i + 1) % titulo.length;
				j = 0;
			}
			setTitle(titulo[i].substring(0, j + 1));
			j++;
		}, 200);
		return () => clearInterval(interval);
	}, []);

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-secondary sticky-top">
			<div className="container">
				<Link to="/">
					<div className="d-flex align-items-center">
						<img src={logo} alt="Arepitos Logo" className="me-3" style={{ height: "50px", width: "50px", objectFit: "contain", backgroundColor: "transparent" }} />
						<span className="navbar-brand text-white text-bold font-weight-bold mr-auto my-0 my-lg-0 ms-2">{title} {store.profile ? store.profile?.user?.name : ""}</span>
					</div>
				</Link>
				<div className="ml-auto">
					<Link to="/login">
						<button className="btn btn-primary mx-3">Login <i className="fa-solid fa-user"></i></button>
					</Link>
					<Link to="/order">
						<button className="btn btn-primary"><i className="fa-solid fa-cart-shopping mr-2"></i>  Cart</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};