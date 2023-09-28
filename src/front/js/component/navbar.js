import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import arepitosLogo from "../../img/arepitos.png"

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
					<span className="navbar-brand mb-0 h1 arepitos-logo">
						<img src={arepitosLogo} alt="Logo" style={{ width: "70px", paddingRight: "8px" }} />
					</span>
					{title}
				</Link>
				<div className="ml-auto">
					<Link to="/loginDriver">
						<button className="btn btn-danger mx-1"><i className="fa-solid fa-motorcycle"></i></button>
					</Link>
					<Link to="/login">
						<button className="btn btn-danger mx-3">Login <i className="fa-solid fa-user"></i></button>
					</Link>
					<Link to="/order">
						<button className="btn btn-danger"><i className="fa-solid fa-cart-shopping mr-2"></i>  Cart</button>
					</Link>
				</div>
			</div>
		</nav >
	);
};