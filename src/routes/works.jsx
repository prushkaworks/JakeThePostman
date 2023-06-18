import React, { useEffect, useRef, useState } from "react";
import { changeLeftBarNav, getUserWorkspaces, getWorkspace, createUserWorkspace } from "./geter";

export default function Works() {

    const [worksdata, setWorksData] = useState([<div>Ранее вы не создавали рабочие пространства</div>])
    const [name, setName] = useState("")
    const count = useRef(0);

    useEffect(() => {
        changeLeftBarNav('dash-sidebar')
        getUserWorkspaces().then(
            privs => {
                count.current += 1;
                if (privs !== null && count.current < 2) {
                    setWorksData([])
                    privs.forEach(element => {
                        getWorkspace(element.workspace_id).then(
                            workspace => {setWorksData(old => [...old, <div>{workspace.name}</div>])}
                        )
                    });
                }
            }
        )
    }, [])

    const handleSubmit = (e) => {
        createUserWorkspace(name)
        setWorksData(old => [...old, <div>{name}</div>])
        e.preventDefault()
    }

    return (
        <>
        <div id="details">
        <h3>Рабочие пространства</h3>
            {worksdata}<br/><br/>
            
            <p>
              <a
                class="btn btn-outline-primary"
                data-bs-toggle="collapse"
                href="#collapseExample"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Создать новое
              </a>
            </p>
            <div class="collapse " id="collapseExample">
              <div class="card card-body text-black">
              <form onSubmit={e => handleSubmit(e)}>
          <h1 className="h4 mb-3 fw-normal">Новое рабочее пространство</h1>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Название рабочего пространства"
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