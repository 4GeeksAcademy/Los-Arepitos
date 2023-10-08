import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const showError = () => {
	toast.error('Error loading message from backend ', {
		position: "top-center",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "colored",
	});
}

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			token: localStorage.getItem("token") || null,
			profile: null,
			products: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			getMessage: async () => {
				try {
					// fetching data from the backend
					console.log(process.env.BACKEND_URL + "/api/hello")
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					showError()
				}
			},

			newProduct: async (newProduct) => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/products",
						{
							method: "POST",
							headers: {
								"Content-Type": "application/json",
							},
							body: JSON.stringify(newProduct)
						})
					const data = await resp.json()

					// setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					toast.success('Product created with success!', {
						position: "top-center",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "colored",
					});
					return data;
				} catch (error) {
					showError()
				}
			},
			getProducts: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/products")
					const data = await resp.json()

					setStore({ products: data.results })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					showError()
				}
			},
			createCustomer: async (customer) => {
				try {
					const resp = await fetch(process.env.BACKEND_URL + "/api/accounts/customer",
						{
							method: "POST",
							headers: {
								"Content-Type": "application/json",
							},
							body: JSON.stringify(customer)
						})
					const data = await resp.json()

					setStore({ "profile": data.customer, "token": data.token })
					localStorage.setItem("token", data.token)

					return true;

				} catch (error) {
					showError()
					return false
				}
			},

			loginCustomer: async (email, password) => {
				try {
					const resp = await fetch(process.env.BACKEND_URL + "/api/token",
						{
							method: "POST",
							headers: {
								"Content-Type": "application/json",
							},
							body: JSON.stringify({ email, password })
						})
					const data = await resp.json()
					localStorage.setItem("token", data.token) //guardar token en localstorage
					setStore({ token: data.token })
					getActions().getProfile()
					return true;
				} catch (error) {
					showError()
					return false
				}
			},

			getProfile: async () => {
				let store = getStore()

				if (!store.token) return
				try {
					const resp = await fetch(process.env.BACKEND_URL + "/api/profile",
						{
							method: "GET",
							headers: {
								"Content-Type": "application/json",
								"Authorization": "Bearer " + store.token
							},
						})
					const data = await resp.json()
					setStore({ profile: data })
				} catch (error) {
					showError()
				}

			},



			createDriver: async (driver) => {
				try {
					const resp = await fetch(process.env.BACKEND_URL + "/api/accounts/driver",
						{
							method: "POST",
							headers: {
								"Content-Type": "application/json",
							},
							body: JSON.stringify(driver)
						})
					const data = await resp.json()
					return true;
				} catch (error) {
					showError()
					return false
				}
			},

			loginDriver: async (email, password) => {
				try {
					const resp = await fetch(process.env.BACKEND_URL + "/api/token",
						{
							method: "POST",
							headers: {
								"Content-Type": "application/json",
							},
							body: JSON.stringify({ email, password })
						})
					const data = await resp.json()
					localStorage.setItem("token", data.token) //guardar token en localstorage
					setStore({ token: data.token })

					getActions().getProfile()

					return true;
				} catch (error) {
					showError()
					return false
				}
			},

			logOut: () => {
				localStorage.removeItem("token") //elimanaria el token
				setStore({ token: null, profile: null })
				toast.info('Disconnected!', {
					position: "top-center",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "colored",
				});
			}
		}
	};
};
export default getState;
