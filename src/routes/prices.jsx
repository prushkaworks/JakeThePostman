export default function Prices() {
  return (
    <>
      <div className="container py-3 align-items-center">
        <div className="pricing-header p-3 pb-md-4 mx-auto align-text-middle text-center">
          <h1 className="display-4 fw-normal text-body-emphasis">Цены</h1>
          <p className="fs-5 text-body-secondary">
            Просмотрите доступные планы приложения и выберите наиболее
            подходящий для Вас
          </p>
        </div>

        <div className="row row-cols-1 row-cols-md-2 mb-3 ">
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal text-center">Free</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title text-center">
                  ₽0
                  <small className="text-body-secondary fw-light">/месяц</small>
                </h1>
                <ul className="list  mt-3 mb-4">
                  <li>Бесконечные карточки</li>
                  <li>До 10 досок в одном рабочем пространстве</li>
                  <li>Закрытые рабочие пространства</li>
                  <li>Возможность развернуть приложение на своём устройстве</li>
                </ul>
                <a href="/signup/">
                  <button
                    type="button"
                    className="w-100 btn btn-lg btn-outline-primary"
                  >
                    Зарегистрироваться бесплатно
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal text-center">Pro</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title text-center">
                  ₽550
                  <small className="text-body-secondary fw-light">/месяц</small>
                </h1>
                <ul className="list mt-3 mb-4">
                  <li>Бесконечные доски</li>
                  <li>
                    Способы отображения: календарь, временная шкала, таблица,
                    панель мониторинга и карта
                  </li>
                  <li>Возможность выгрузки данных</li>
                </ul>
                <button
                  type="button"
                  className="w-100 btn btn-lg btn-primary"
                  disabled
                >
                  Начать (пока недоступно)
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="b-example-divider" />
    </>
  );
}
