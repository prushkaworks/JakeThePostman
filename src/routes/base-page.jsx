export default function Base({children}) {
    return (
        <>
  <div className="container">
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li>
          <a
            id="nav-main"
            href="/"
            className="nav-link px-2 link-secondary"
            onclick="handleClick(id)"
          >
            Главная
          </a>
        </li>
        <li>
          <a
            id="nav-prices"
            href="/prices/"
            className="nav-link px-2"
            onclick="handleClick(id)"
          >
            Цены
          </a>
        </li>
        <li>
          <a
            id="downloads"
            href="/downloads/"
            className="nav-link px-2"
            onclick="handleClick(id)"
          >
            Загрузки
          </a>
        </li>
        <li>
          <a
            id="nav-faqs"
            href="/faqs/"
            className="nav-link px-2"
            onclick="handleClick(id)"
          >
            FAQs
          </a>
        </li>
        <li>
          <a
            id="nav-about"
            href="/about/"
            className="nav-link px-2"
            onclick="handleClick(id)"
          >
            О нас
          </a>
        </li>
      </ul>
      <div className="col-md-3 text-end">
        <a href="/signin/">
        <button type="button" className="btn btn-outline-primary me-2">
          Вход
        </button>
        </a>
        <a href="/signup/">
        <button type="button" className="btn btn-primary">
          Регистрация
        </button>
        </a>
      </div>
    </header>
  </div>
  <div className="b-example-divider" />
  <div id="base">{children}</div>
  <div className="container">
    <footer className="py-3 my-4">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li>
          <a
            id="nav-main"
            href="/"
            className="nav-link px-2 text-body-secondary"
            onclick="handleClick(id)"
          >
            Главная
          </a>
        </li>
        <li>
          <a
            id="nav-prices"
            href="/prices/"
            className="nav-link px-2 text-body-secondary"
            onclick="handleClick(id)"
          >
            Цены
          </a>
        </li>
        <li>
          <a
            id="nav-faqs"
            href="/faqs/"
            className="nav-link px-2 text-body-secondary"
            onclick="handleClick(id)"
          >
            FAQs
          </a>
        </li>
        <li>
          <a
            id="nav-about"
            href="/about/"
            className="nav-link px-2 text-body-secondary"
            onclick="handleClick(id)"
          >
            О нас
          </a>
        </li>
      </ul>
      <p className="text-center text-body-secondary">© 2023 Prushka, Inc</p>
    </footer>
    </div>
    </>
    );
}