import { Helmet } from "react-helmet";
import { getCookie, auth, createCookie } from "./geter";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


export default function SignIn() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    // if you want to show the loader when React loads data again
    // const showLoader = () => loader.classList.remove('loader--hide');

    const hideLoader = (loader) => {
      if (loader !== null) {loader.classList.add('loader--hide');}
    }

    const showLoader = (loader) => {
      if (loader !== null) {loader.classList.remove('loader--hide');}
    }

    useEffect(() => {

      const loader = document.querySelector('.loader');
    
      const cooks = getCookie('token')
      const user_mail = getCookie('email')
      if (cooks.length !== 0 && user_mail.length !== 0) {
        showLoader(loader)
        setTimeout(() => {
          hideLoader(loader);
          navigate('/main')
        }, 3000)
      }
    })

    const handleSubmit = (e) => {
      // const modal = document.getElementById("modal-loader");

      // modal.style.display = "block"
      auth(email, password).then(
        token => {if (token !== '' || token !== undefined) {
          createCookie('token', token, 1);
          createCookie('email', email, 1); 
          navigate('/main')
          }
        }
      ).catch((error) => {
        alert('Ошибка авторизации. Проверьте введенный пароль и логин.'); 
      })
  
      e.preventDefault();
    }

    return (
        <>
        <Helmet>
          <title>Prushka - авторизация</title>
          <link rel="canonical" href="https://getbootstrap.com/docs/5.3/examples/sign-in/"></link>
        </Helmet> 
        <div id="signin-container" className="d-flex align-items-center py-4 bg-body-tertiary">
        <main className="form-signin w-100 m-auto">
        <form onSubmit={e => handleSubmit(e)}>
          <h1 className="h3 mb-3 fw-normal">Prushka Вход</h1>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
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
            />
            <label htmlFor="password">Пароль</label>
          </div>
          <div id="signup-link" className="form-floating">
            Нет аккаунта? <a href="/signup">Зарегистрируйтесь</a>
          </div>
          <button className="btn btn-primary w-100 py-2" type="submit">
            Войти
          </button>
          <p className="mt-5 mb-3 text-body-secondary">© 2020–2023</p>
        </form>
      </main></div>
     <div class="loader loader--hide"></div>
    </>     
    );
}