export default function SignUp() {
    return (
        <> 
        <div id="signin-container" className="d-flex align-items-center py-4 bg-body-tertiary">
        <main className="form-signin w-100 m-auto">
        <form>
          <h1 className="h3 mb-3 fw-normal">Prushka Регистрация</h1>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Name"
            />
            <label htmlFor="name">Имя</label>
          </div>
          <div className="form-floating">
            <input
              type="email"
              className="form-control signup-email"
              id="email"
              placeholder="name@example.com"
            />
            <label htmlFor="email">Email адрес</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
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