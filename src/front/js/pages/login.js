import React, { useContext, useEffect, useState } from "react";
import "../../styles/login.css";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { FcOk } from "react-icons/fc";

export const Login = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);
  const [isShow, setIsShown] = useState(false);
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    country: "",
    city: "",
    address: "",
    postal_code: "",
    password: "",
    password_check: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  async function addUser() {
    if (customer.password == customer.password_check) {
      let created = await actions.createCustomer(customer);
      if (created) {
        setModalMessage("Registration successful!");
        setShowModal(true);
        setTimeout(() => {
          setShowModal(false);
          actions.loginCustomer(customer.email, customer.password);
          navigate("/");
        }, 2000);
      } else {
        alert("An error has occured");
      }
    } else {
      alert("Password doesn't match");
    }
  }

  function customerLogin({ email, password }) {
    let isValid = actions.loginCustomer(email, password);
    if (isValid) {
      setModalMessage("Login successful!");
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        navigate("/");
      }, 2000);
    }
  }

  useEffect(() => {
    store.token && navigate("/");
  });

  return (
    <div className="login-form">
      <section onSubmit={(e) => e.preventDefault}>
        {!isShow ? <h1>Login</h1> : <h1>Register</h1>}
        <div className="content">
          {isShow && (
            <div className="input-field">
              <input
                type="text"
                placeholder="Name"
                autoComplete="nope"
                onChange={(e) =>
                  setCustomer({ ...customer, name: e.target.value })
                }
              />
            </div>
          )}
          <div className="input-field">
            <input
              type="email"
              placeholder="Email"
              autoComplete="nope"
              onChange={(e) =>
                setCustomer({ ...customer, email: e.target.value })
              }
            />
          </div>
          {isShow && (
            <>
              <div className="input-field">
                <input
                  type="text"
                  placeholder="Country"
                  autoComplete="nope"
                  onChange={(e) =>
                    setCustomer({ ...customer, country: e.target.value })
                  }
                />
              </div>

              <div className="input-field">
                <input
                  type="text"
                  placeholder="City"
                  autoComplete="nope"
                  onChange={(e) =>
                    setCustomer({ ...customer, city: e.target.value })
                  }
                />
              </div>

              <div className="input-field">
                <input
                  type="text"
                  placeholder="Address"
                  autoComplete="nope"
                  onChange={(e) =>
                    setCustomer({ ...customer, address: e.target.value })
                  }
                />
              </div>

              <div className="input-field">
                <input
                  type="number"
                  placeholder="Postal Code"
                  autoComplete="nope"
                  onChange={(e) =>
                    setCustomer({
                      ...customer,
                      postal_code: parseInt(e.target.value),
                    })
                  }
                />
              </div>
            </>
          )}
          <div className="input-field">
            <input
              type="password"
              placeholder="Password"
              autoComplete="new-password"
              onChange={(e) =>
                setCustomer({ ...customer, password: e.target.value })
              }
            />
          </div>
          {isShow && (
            <div className="input-field">
              <input
                type="password"
                placeholder="Repeat Password"
                autoComplete="new-password"
                onChange={(e) =>
                  setCustomer({ ...customer, password_check: e.target.value })
                }
              />
            </div>
          )}
        </div>
        <div className="action">
          <button
            className={!isShow ? "" : "selected"}
            onClick={() => (!isShow ? setIsShown(!isShow) : addUser())}
          >
            Register
          </button>
          <button
            className={isShow ? "" : "selected"}
            onClick={() =>
              isShow ? setIsShown(!isShow) : customerLogin(customer)
            }
          >
            Sign in
          </button>
        </div>
      </section>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Body>
          <div className="d-flex justify-content-center align-items-center flex-column">
            <FcOk size={100} className="text-success mr-2" />
            <p className="mb-0 text-black mt-3 fw-bold fs-3">{modalMessage}</p>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};