import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createCookie, getCookie, getUser, handleClick } from "./geter";

export default function MainSidebar() {

    const [username, setUsername] = useState('user');
    const navigate = useNavigate();

    useEffect(() => {
      getUser().then(
        user => setUsername(user.name)
      )
    })

    const signOut = () => {
      createCookie("token", getCookie("token"), -1)
      createCookie("email", getCookie("email"), -1)
      navigate('/')
    }

    return (
        <>
  <div
    className="d-flex flex-column flex-shrink-0 p-3 bg-light"
    style={{ width: 280 }}
  >
    <a
      href="/"
      className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
    >
      <svg className="bi me-2" width={40} height={32}>
        <use xlinkHref="#bootstrap" />
      </svg>
      <span className="fs-4">Prushka</span>
    </a>
    <hr />
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <a id="home-sidebar" href="/main" className="side nav-link active" aria-current="page" onClick={(id) => handleClick(id)}>
          <svg className="bi me-2" width={16} height={16}>
            <use xlinkHref="#home" />
          </svg>
          Главная
        </a>
      </li>
      <li>
        <a id="dash-sidebar" href="/main/works" className="side nav-link link-dark" onClick={(id) => handleClick(id)}>
          <svg className="bi me-2" width={16} height={16}>
            <use xlinkHref="#speedometer2" />
          </svg>
          Рабочие пространства
        </a>
      </li>
      <li>
        <a id="order-sidebar" href="/main/desks" className="side nav-link link-dark" onClick={(id) => handleClick(id)}>
          <svg className="bi me-2" width={16} height={16}>
            <use xlinkHref="#table" />
          </svg>
          Доски
        </a>
      </li>
      <li>
        <a id="profile-side" href="/main/profile" className="side nav-link link-dark" onClick={(id) => handleClick(id)}>
          <svg className="bi me-2" width={16} height={16}>
            <use xlinkHref="#grid" />
          </svg>
          Профиль
        </a>
      </li>
    </ul>
    <hr />
    <div className="dropdown">
      <a
        href="#"
        className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
        id="dropdownUser2"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          src="/img/img_140279.png"
          alt=""
          className="rounded-circle me-2"
          width={32}
          height={32}
        />
        <strong>{username}</strong>
      </a>
      <ul
        className="dropdown-menu text-small shadow"
        aria-labelledby="dropdownUser2"
      >
        <li>
          <a className="dropdown-item" href="/main/works">
            Новое рабочее пространство
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/main/profile">
            Профиль
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a className="dropdown-item" href="#" onClick={signOut}>
            Выйти
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div className="b-example-divider" />
        </>
    );
}