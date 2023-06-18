import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { auth, createCookie } from "./geter";
import { useNavigate } from "react-router-dom";

export const SignUp = (props) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    const stateCp = {
      'name': name, 'email': email, 'password': password
    }
    var formData = []
    Object.entries(stateCp).forEach(([key, value]) => {
      const encodedKey = encodeURIComponent(key);
      const encodedValue = encodeURIComponent(value);
      formData.push(encodedKey + "=" + encodedValue);
    })
    formData = formData.join("&")
    fetch(process.env.REACT_APP_BACKEND_URL + 'users/', {
      // mode: 'no-cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body: formData
    }).then(response => response.json())
      .then(data => {
        if (data['data'].length === 1 && data['data'][0]['email'] === email) {
          const token = auth(email, password)
          token.then(
            token => {if (token !== '') {createCookie('token', token, 1); createCookie('email', email, 1);}
          }
          ).catch((error) => alert('Произошла непредвиденная ошибка! Приносим свои извинения.'))
          navigate('/signin')
        } else {
          alert('Произошла непредвиденная ошибка! Приносим свои извинения.');
        }
      })
      .catch((error) => {
        alert('Произошла непредвиденная ошибка! Приносим свои извинения.'); 
      })

      e.preventDefault();
  }
  return (
    <> 
    <Helmet>
    <title>Prushka - регистрация</title>
    </Helmet>
    <div id="signin-container" className="d-flex align-items-center py-4 bg-body-tertiary">
    <main className="form-signin w-100 m-auto">
    <form onSubmit={e => handleSubmit(e)}>
      <h1 className="h3 mb-3 fw-normal">Prushka Регистрация</h1>
      <div className="form-floating">
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <label htmlFor="name">Имя</label>
      </div>
      <div className="form-floating">
        <input
          type="email"
          className="form-control signup-email"
          id="email"
          placeholder="name@example.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <label htmlFor="email">Email адрес</label>
      </div>
      <div className="form-floating">
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <label htmlFor="password">Пароль</label>
      </div>
      <button className="btn btn-primary w-100 py-2" type="submit">
        Зарегистрироваться
      </button>
      <p className="mt-5 mb-3 text-body-secondary">© 2020–2023</p>
    </form>
  </main></div>
</>     
  );
}