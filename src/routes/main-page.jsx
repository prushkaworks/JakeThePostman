import "./main-divider.css"

export default function MainPage() {
  return (
    <>
      <div className="px-4 pt-5 my-5 text-center border-bottom">
        <h1 className="display-4 fw-bold text-body-emphasis">
          Все задачи в одном месте
        </h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Prushka позволяет создавать бесконечное количество рабочих
            пространств и до 10 досок на каждом из них
          </p>
        </div>
        <div className="overflow-hidden" style={{ maxHeight: "42vh" }}>
          <div className="container px-5">
            <img
              src="/icon/kanban.png"
              className="img-fluid mb-4"
              alt="Example"
              width={506}
              height={475}
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="px-4 py-5 text-center">
        <div className="py-5">
          <h1 className="display-5 fw-bold">Бесплатно</h1>
          <div className="col-lg-6 mx-auto">
            <p className="fs-5 mb-4">
              Функциональная бесплатная версия, но если Вам этого мало, то Вы
              всегда можете выбрать один из наших планов.
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <a href="/prices">
                <button
                  type="button"
                  className="btn btn-primary btn-lg px-4 me-sm-3 fw-bold"
                >
                  Сравнить планы
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-dark text-secondary px-4 py-5 text-center">
        <div className="py-5">
          <h1 className="display-5 fw-bold text-white">Даже без интернета</h1>
          <div className="col-lg-6 mx-auto">
            <p className="fs-5 mb-4">
              Вы можете скачать настольную версию приложения и сохранять свои
              задачи на Вашем компьютере
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <a href="/downloads">
                <button
                  type="button"
                  className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
                >
                  Перейти на страницу скачивания
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="b-example-divider" />
    </>
  );
}
