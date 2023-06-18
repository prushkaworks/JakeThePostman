import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { editUser, getUser } from "./geter";

import "./profile.css"

export default function Profile() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    var name_copy = useRef(""); var email_copy = useRef("");
    getUser().then(
        user => {
          if (user !== null) name_copy.current = `${user.name}`; email_copy.current = `${user.email}`;
        }
      )

      useEffect(() => {
        var curr = document.getElementById('profile-side')
        var elems = document.querySelectorAll('.side.nav-link');
        for (var i = 0; i < elems.length; i++) {
            if (elems[i].textContent === curr.textContent) {
                if (elems[i].className.indexOf('link-dark') >= 0) {
                    elems[i].className = 'side nav-link active';
                }
            } else {
                elems[i].className = 'side nav-link link-dark';
            }
        }
      })

      const handleSubmit = (event) => {
        editUser(username, email, password).then(
          data => data.json()
        ).then(
          data => console.log(data)
        )
        event.preventDefault()
      }

    return (
        <>
        <Helmet>
            <title>Prushka - профиль</title>
        </Helmet>

        <div className="container rounded bg-white mt-5 mb-5">
  <div className="row">
    <div className="col-md-3 border-right">
      <div className="d-flex flex-column align-items-center text-center p-3 py-5">
        <img
          className="rounded-circle mt-5"
          src="/img/img_140279.png"
          width="150px"
        />
        <span className="font-weight-bold">{name_copy.current}</span>
        <span className="text-black-50">{email_copy.current}</span>
        <span> </span>
      </div>
    </div>
    <div className="col-md-6 border-right">
    <form onSubmit={e => handleSubmit(e)}>
      <div className="p-3 py-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="text-right">Настройки профиля</h4>
        </div>     
        <div className="row mt-2">
          <div className="col-md-7">
            <label className="labels">Имя</label>
            <input
              id="name"
              type="text"
              className="form-control"
              placeholder="Ваше имя"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-7">
            <label className="labels">Адрес электронной почты</label>
            <input
              id="email"
              type="email"
              className="form-control"
              placeholder="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          </div>
          <div className="row mt-4">
          <div className="col-md-7">
            <label className="labels">Пароль</label>
            <input
              id="password"
              type="password"
              className="form-control"
              placeholder="пароль"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          </div>
          
        </div>
        <div className="mt-5 text-center">
          <button className="btn btn-primary profile-button" type="submit">
            Сохранить изменения
          </button>
        </div>
        </form>
      </div>
    </div>
    </div>
    
</>
    );
}