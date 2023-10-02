import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import arepitosLogo from "../../img/arepitos.png"

export const Navbar = () => {
	const { store, actions } = useContext(Context);
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
		<nav className="navbar navbar-expand-lg navbar-dark bg-secondary sticky-top">
			<div className="container">
				<Link to="/" className="text-white fs-5">
					<span className="navbar-brand mb-0 h1 arepitos-logo">
						<img src={arepitosLogo} alt="Logo" style={{ width: "70px", paddingRight: "8px" }} />
					</span>
					{title}
				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						{
							store.profile?.driver && <li className="nav-item">
								<span className="fs-4 text-white mx-2">
									<i className="fa-solid fa-motorcycle text-white"></i>
									{store.profile.driver.name}
								</span>
							</li>
						}
						{
							store.profile?.user && <li className="nav-item">
								<span className="fs-4 text-white mx-2">
									<i className="fa-solid fa-user text-white"></i>
									{store.profile.user.name}
								</span>
							</li>
						}
						{
							!store.token && <>
								<li className="nav-item">
									<Link to="/loginDriver">
										<button className="btn btn-danger mx-1">
											<i className="fa-solid fa-motorcycle"></i>
										</button>
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/login">
										<button className="btn btn-danger mx-3">
											Login
											<i className="fa-solid fa-user"></i>
										</button>
									</Link>
								</li>
							</>
						}
						{
							store.token && <>
								<li className="nav-item mx-3 mt-2">
									<Link to="/order">
										<button className="btn btn-danger">
											<i className="fa-solid fa-cart-shopping"></i>
											Cart
										</button>
									</Link>
								</li>
								<li className="nav-item mx-3 mt-2">
									<button className="btn btn-danger" onClick={() => actions.logOut()}>
										<i className="fa-solid fa-right-from-bracket"></i>
										Logout
									</button>
								</li>
							</>
						}
					</ul>
				</div>
			</div>
		</nav >
	);
};