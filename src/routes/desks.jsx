import React, { useEffect, useRef, useState } from "react";
import { changeLeftBarNav, getUserWorkspaces, getWorkspace, getDesk, createDesk } from "./geter";

export default function Desks() {

    const [data, setData] = useState([<div>Ранее вы не создавали доски</div>])
    const [name, setName] = useState("")
    const [se, setSE] = useState("0")

    var count = useRef(0)

    useEffect(() => {
        changeLeftBarNav('order-sidebar')
        getUserWorkspaces().then(
            privs => {
                count.current += 1;
                if (privs !== null && count.current < 2) {
                    setData([])
                    privs.forEach(element => {
                        Promise.all([
                            getWorkspace(element.workspace_id),
                            getDesk(element.workspace_id)
                        ]).then(([workspace, desk]) => {
                            const optionsList = document.getElementById("workspace").options;
                            optionsList.add(
                                new Option(workspace.name, workspace.id)
                            )
                            if (desk !== null) {
                                if (desk[0].id !== 0 && workspace.id !== 0) {
                                    if (desk[0].workspace_id === workspace.id) {
                                        setData(old => [...old, <div><a href={`/main/board/?desk_id=${desk[0].id}`}>{workspace.name}/{desk[0].name}</a></div>])
                                    }
                                }
                            }
                        })
                    });
                }
            }
        )
    }, [])

    const handleSubmit = (e) => {
        createDesk(name, se)
        getWorkspace(se).then(
            workspace => setData(old => [...old, <div>{workspace.name}/{name}</div>])
        )
        e.preventDefault()
    }

    return (
        <>
        <div id="details">
        <h3>Доски</h3>
            {data}<br/><br/>
            <p>
              <a
                class="btn btn-outline-primary"
                data-bs-toggle="collapse"
                href="#collapseExample"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Создать новую
              </a>
            </p>
            <div class="collapse " id="collapseExample">
              <div class="card card-body text-black">
              <form onSubmit={e => handleSubmit(e)}>
          <h1 className="h4 mb-3 fw-normal">Новая доска</h1>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Название доски"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
            <label htmlFor="name">Название</label>
          </div>
          <div className="form-floating">
            
          <select class="form-select" id="workspace" value={se} onChange={e => setSE(e.target.value)} required>
            
          </select>
          <label htmlFor="workspace">Рабочее пространство</label>
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