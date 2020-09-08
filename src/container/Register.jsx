import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../assets/styles/components/Register.scss";
import Header from "../components/Header";
import { registerRequest } from "../actions/index";

const Register = (props) => {
  const [form, setValues] = useState({
    email: "",
    name: "",
    password: "",
  });
  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const handeSubmit = (event) => {
    event.preventDefault();
    props.registerRequest(form);
    props.history.push("/");
  };
  return (
    <>
      <Header isRegister />
      <section className="register">
        <section className="register__container">
          <h2>Regístrate</h2>
          <form className="register__container--form" onSubmit={handeSubmit}>
            <input
              className="input"
              type="text"
              name="nombre"
              placeholder="Nombre"
              //onChange está escuchando los cambios
              onChange={handleInput}
            />
            <input
              className="input"
              type="text"
              name="email"
              placeholder="Correo"
              onChange={handleInput}
            />
            <input
              className="input"
              type="password"
              name="password"
              placeholder="Contraseña"
              onChange={handleInput}
            />
            <button type="submit" className="button" name="regiterBtn">
              Registrarme
            </button>
          </form>
          <Link to="/login">Iniciar sesión</Link>
        </section>
      </section>
    </>
  );
};
const mapDispatchToProps = {
  registerRequest,
};
export default connect(null, mapDispatchToProps)(Register);
