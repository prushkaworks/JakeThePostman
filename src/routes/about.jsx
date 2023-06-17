export default function About() {
  return (
    <>
      <div className="px-4 pt-5 my-5 text-center">
        <h1 className="display-4 fw-bold text-body-emphasis">Офисный мир КМ</h1>
        <div className="col-lg-6 mx-auto">
          <p className="display-6 mb-4 text-body-emphasis">
            Более 25 лет работаем на рынке Юга России
          </p>
        </div>
      </div>

      <div className="container px-4 py-5" id="icon-grid">
        <h2 className="pb-2 border-bottom text-white">
          Основные направления деятельности
        </h2>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-4 py-5">
          <div className="col d-flex align-items-center">
            <img
              src="/icon/develop_blue.png"
              className="bi text-body-secondary flex-shrink-0 me-3"
            ></img>
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                Разработка ПО
              </h3>
            </div>
          </div>

          <div className="col d-flex align-items-center">
            <img
              src="/icon/switch_blue.png"
              className="bi text-body-secondary flex-shrink-0 me-3"
            ></img>
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                Системная интеграция
              </h3>
            </div>
          </div>
          <div className="col d-flex align-items-center">
            <img
              src="/icon/printer_blue.png"
              className="bi text-body-secondary flex-shrink-0 me-3"
            ></img>
            <div>
              <h3 className="fw-bold px-3 mb-0 fs-4 text-body-emphasis">
                Печатная техника
              </h3>
            </div>
          </div>
          <div className="col d-flex align-items-center">
            <img
              src="/icon/cert_blue.png"
              className="bi text-body-secondary flex-shrink-0 me-4"
            ></img>
            <div>
              <h3 className="fw-bold px-3 mb-0 fs-4 text-body-emphasis">
                Программное обеспечение
              </h3>
            </div>
          </div>
          <div className="col d-flex align-items-center">
            <img
              src="/icon/desktop_blue.png"
              className="bi text-body-secondary flex-shrink-0 me-3"
            ></img>
            <div>
              <h3 className="fw-bold px-2 mb-0 fs-4 text-body-emphasis">
                Офисная мебель
              </h3>
            </div>
          </div>
          <div className="col d-flex align-items-center">
            <img
              src="/icon/comp_blue.png"
              className="bi text-body-secondary flex-shrink-0 me-3"
            ></img>
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                Компьютеры и серверы CITYLINE
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="b-example-divider" />
    </>
  );
}
