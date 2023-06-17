export default function Faqs() {
  return (
    <>
      <div className="container py-3">
        <div className="row row-cols-1 g-4 py-5">
          <p>
            <a
              class="btn btn-outline-primary"
              data-bs-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Как поменять данные пользователя?
            </a>
          </p>
          <div class="collapse " id="collapseExample">
            <div class="card card-body text-white">
              <p>
                Изменить данные пользователя можно в личном кабинете. Чтобы
                зайти в личный кабинет, необходимо авторизоваться на сайте а
                затем на левой панели нажать на иконку своего профиля.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="b-example-divider" />
    </>
  );
}
