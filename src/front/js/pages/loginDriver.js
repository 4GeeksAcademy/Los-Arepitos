import React, { useContext, useEffect, useState } from "react";
import "../../styles/login.css"
import { Context } from '../store/appContext'
import { useNavigate } from "react-router-dom";

//email=email, password=password, matricula=matricula, vehicle=VehicleType.MOTO



export const LoginDriver = () => {
    const navigate = useNavigate()
    const { store, actions } = useContext(Context)
    const [isShow, setIsShown] = useState(false)
    const [driver, setDriver] = useState({
        "name": "",
        "matricula": "",
        "email": "",
        "vehicle": "",
        "password": "",
        "password_check": ""
    })

    async function addUser() {
        if (driver.password == driver.password_check) {
            let created = await actions.createDriver(driver)
            if (created) navigate("/")
            else alert("An error has occured")
        }
        else {
            alert("Password doesn't match")
        }
    }

    function driverLogin({ email, password }) {
        actions.loginDriver(email, password)
    }

    useEffect(() => {
        store.isLogin && navigate('/')
    })
    return (
        <div className="login-form">
            <section onSubmit={(e) => e.preventDefault}>
                {
                    !isShow ? <h1>Welcome Driver!</h1> : <h1>Start working with us <i className="fa-solid fa-heart text-danger"></i></h1>
                }
                <div className="content">
                    {
                    isShow && (
                        <div className="input-field">
                            <input type="text" placeholder="Name" autoComplete="nope" onChange={(e) => setDriver({ ...driver, "name": e.target.value })} />
                        </div>
                        )
                    }
                    <div className="input-field">
                        <input type="email" placeholder="Email" autoComplete="nope"
                        onChange={(e) => setDriver({ ...driver, "email": e.target.value })} />
                    </div>
                    {
                        isShow && (<>
                            <div className="input-field">
                                <input type="text" placeholder="matricula" autoComplete="nope"
                                 onChange={(e) => setDriver({ ...driver, "matricula": e.target.value })} />
                            </div>

                            <select className="select-vehicle" onChange={(e) => setDriver({ ...driver, "vehicle": e.target.value })}>
                                <option defaultValue>VEHICLE</option>
                                <option value="moto">Moto</option>
                                <option value="carro">Carro</option>
                            </select>
                        </>
                        )
                    }
                    <div className="input-field">
                        <input type="password" placeholder="Password" autoComplete="new-password"
                            onChange={(e) => setDriver({ ...driver, "password": e.target.value })} />
                    </div>
                    {
                        isShow && (
                            <div className="input-field">
                                <input type="password" placeholder="Repeat Password" autoComplete="new-password"
                                    onChange={(e) => setDriver({ ...driver, "password_check": e.target.value })} />
                            </div>
                        )
                    }
                </div>
                <div className="action">
                    <button className={!isShow ? '' : 'selected'} onClick={() => !isShow ? setIsShown(!isShow) : addUser()}>Register</button>
                    <button className={isShow ? '' : 'selected'} onClick={() => isShow ? setIsShown(!isShow) : driverLogin(driver)}>Sign in</button>
                </div>
            </section>
        </div>
    );
};
