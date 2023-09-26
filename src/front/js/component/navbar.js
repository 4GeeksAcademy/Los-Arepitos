import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
	const { store } = useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate {store.profile ? store.profile.user.name : ""}</span>
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
