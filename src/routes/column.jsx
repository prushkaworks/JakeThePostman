import { useEffect, useRef, useState } from "react";
import Card from "./card";
import { createCard, getCards } from "./geter";

export default function Column(props) {

    const [name, setName] = useState('')
    const [cards, setCards] = useState([])

    const count = useRef(0);

    useEffect(() => {
        getCards(props.column_id).then(
        carde => {
            count.current += 1
            if (count.current < 2) {
            carde.forEach(
                card => setCards(old => [...old, <Card card_id={card.id} text={card.name}/>])
            )
            }
        }
        )
    }, [])

    const handleSubmit = (e) => {
        createCard(name, props.column_id)
        e.preventDefault()
    }

    return (
        <>
                <div className="col ">
                  <p className="text-center">{props.title}</p>
                  <br/><br/>
            {cards}<p>
              <a
                class="btn btn-outline-primary"
                data-bs-toggle="collapse"
                href={`#${props.column_id}`}
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Создать карточку
              </a>
            </p>
            <div class="collapse " id={props.column_id}>
              <div class="card card-body text-black">
              <form onSubmit={e => handleSubmit(e)}>
          <h1 className="h4 mb-3 fw-normal">Новая карточка</h1>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Название карточки"
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
        </>
    );
}