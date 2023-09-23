import React, { useContext, useEffect, useState } from "react";
import "../../styles/login.css"
import {Context} from '../store/appContext'
import { useNavigate } from "react-router-dom";



export const Login = () => {
  const navigate = useNavigate()
  const {store, actions} = useContext(Context)
  const [isShow, setIsShown] = useState(false)
  const [customer, setCustomer] = useState({
    "name":"",
    "email":"",
    "country":"",
    "city":"",
    "address":"",
    "postal_code":"",
    "password":"",
    "password_check":""
  })

  async function addUser (){
    if (customer.password == customer.password_check){
        let created = await actions.createCustomer(customer)
        if(created)navigate("/")
        else alert("An error has occured")
    }
    else{
        alert("Password doesn't match")
    }
  }

  useEffect(()=>{
    store.isLogin && navigate('/')
  })
  return (
    <div className="login-form">
      <section onSubmit={(e) => e.preventDefault}>
        {
          !isShow ? <h1>Login</h1> : <h1>Register</h1>
        }
        <div className="content">
          {
             isShow && (
              <div className="input-field">
                <input type="text" placeholder="Name" autoComplete="nope" onChange={(e)=> setCustomer({ ...customer, "name": e.target.value }) }/>
              </div>
            )
          }
          <div className="input-field">
            <input type="email" placeholder="Email" autoComplete="nope" onChange={(e)=> setCustomer({ ...customer, "email": e.target.value })} />
          </div>
          {
             isShow && (<>
              <div className="input-field">
                <input type="text" placeholder="Country" autoComplete="nope" onChange={(e)=> setCustomer({ ...customer, "country": e.target.value })} />
              </div>

              <div className="input-field">
                <input type="text" placeholder="City" autoComplete="nope" onChange={(e)=> setCustomer({ ...customer, "city": e.target.value })} />
              </div>
            
              <div className="input-field">
                <input type="text" placeholder="Address" autoComplete="nope" onChange={(e)=> setCustomer({ ...customer, "address": e.target.value })} />
              </div>

              <div className="input-field">
                <input type="number" placeholder="Postal Code" autoComplete="nope" onChange={(e)=> setCustomer({ ...customer, "postal_code": parseInt(e.target.value) })} />
              </div>
              </>
            )
          }
          <div className="input-field">
            <input
              type="password"
              placeholder="Password"
              autoComplete="new-password"
              onChange={(e)=> setCustomer({ ...customer, "password": e.target.value })}
            />
          </div>
          {
            isShow && (
            <div className="input-field">
              <input
                type="password"
                placeholder="Repeat Password"
                autoComplete="new-password"
                onChange={(e)=> setCustomer({ ...customer, "password_check": e.target.value })}
              />
            </div>
            )
          }
        </div>
        <div className="action">
          <button className={!isShow ? '' : 'selected'} onClick={() => !isShow? setIsShown(!isShow) : addUser()}>Register</button>
          <button className={isShow ? '' : 'selected'} onClick={() => setIsShown(!isShow)}>Sign in</button>
        </div>
      </section>
    </div>
  );
};
