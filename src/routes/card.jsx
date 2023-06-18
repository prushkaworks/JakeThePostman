import { useState } from "react";
import { editCard } from "./geter";

export default function Card(props) {

    const [text, setText] = useState(props.text)

    const onSubmit = (e) => {
        editCard(text, props.card_id)
        e.preventDefault()
    }

    const onClick = () => {
        const texta = document.getElementById("texta")
        const subm = document.getElementById("submitbutton")
        texta.disabled = false
        subm.disabled = false
    }

    return (
        <>
        <div className="card shadow-sm mb-3">
                <div className="card-body">
                    <form onSubmit={e => onSubmit(e)}>
                  <p className="card-text">
                    <textarea id="texta" value={text} onChange={e => setText(e.target.value)} disabled="true"/>
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                        onClick={onClick}
                      >
                        Редактировать
                      </button>
                      <button
                        id="submitbutton"
                        disabled="true"
                        type="submit"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Подтвердить
                      </button>
                    </div>
                  </div>
                  </form>
                </div>
              </div>
        </>
    );
}