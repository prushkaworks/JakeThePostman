import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Column from "./column";
import { createColumn, getColumns } from "./geter";

export default function Board() {

  const [queryParams] = useSearchParams()
  const [columns, setColumns] = useState([])
  const [name, setName] = useState('')
  const desk_id = queryParams.get('desk_id')
  const count = useRef(0);

  useEffect(() => {
    getColumns(desk_id).then(
      colum => {
        count.current += 1
        if (count.current < 2) {
          colum.forEach(
            column => setColumns(old => [...old, <Column column_id={column.id} title={column.name}/>])
          )
        }
      }
    )
  }, [])

  const handleSubmit = (e) => {
    createColumn(name, desk_id)
    e.preventDefault()
  }

  return (
    <>
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {columns}<br/><br/>
            <p>
              <a
                class="btn btn-outline-primary"
                data-bs-toggle="collapse"
                href="#collapseExample"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Создать колонку
              </a>
            </p>
            <div class="collapse " id="collapseExample">
              <div class="card card-body text-black">
              <form onSubmit={e => handleSubmit(e)}>
          <h1 className="h4 mb-3 fw-normal">Новая колонка</h1>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Название колонки"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
            <label htmlFor="name">Название</label>
          </div>
          <button className="btn btn-primary w-100 py-2" type="submit">
            Создать
          </button>
        </form>
        </div>
        </div>
          </div>
        </div>
      </div>
    </>
  );
}
