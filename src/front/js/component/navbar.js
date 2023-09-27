import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import arepitosLogo from "../../img/arepitos.png"

export const Navbar = () => {
	const { store } = useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1 arepitos-logo">
						<img src={arepitosLogo} alt="Logo" style={{width: "70px", paddingRight: "8px"}}/>
						{store.profile ? store.profile?.user?.name : ""}
					</span>
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
		</nav>
	);
};
