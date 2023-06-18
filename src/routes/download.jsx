export default function Download() {
  return (
    <>
      <div className="container my-5 text-left">
        <div className="row row-cols-1 row-cols-md-2">
          <div className="col">
            <p className="display-6 text-bold fw-bold">
              На этой странице вы можете скачать настольную версию приложения
            </p>
          </div>
          <div className="col">
            <button
              type="button"
              className="w-100 btn btn-lg btn-primary my-3"
              disabled
            >
              Скачать версию для Windows
            </button>
          </div>
        </div>
      </div>
      <div className="b-example-divider" />
    </>
  );
}
