import React, { useEffect, useRef, useState } from "react";
import { changeLeftBarNav, getUserWorkspaces, getWorkspace, getDesk } from "./geter";

export default function MainWithSidebar() {

    const [worksdata, setWorksData] = useState([<div>Ранее вы не создавали рабочие пространства</div>])
    const [desksdata, setDesksData] = useState([<div>Ранее вы не создавали доски</div>])
    const count = useRef(0);

    useEffect(() => {
        changeLeftBarNav('home-sidebar')
        getUserWorkspaces().then(
            privs => {
                count.current += 1;
                if (privs !== null && count.current < 2) {
                    setWorksData([])
                    setDesksData([])
                    privs.forEach(element => {

                        Promise.all([
                            getWorkspace(element.workspace_id),
                            getDesk(element.workspace_id)
                        ]).then(([workspace, desk]) => {
                            setWorksData(old => [...old, <div>{workspace.name}</div>])
                            if (desk !== null) {
                                if (desk[0].id !== 0 && workspace.id !== 0) {
                                    if (desk[0].workspace_id === workspace.id) {
                                        setDesksData(old => [...old, <div>{workspace.name}/{desk[0].name}</div>])
                                    }
                                }
                            }
                        })
                    });
                }
            }
        )
    }, [])

    return (
        <>
        <div id="workspace-details">
            <h3>Рабочие пространства</h3>
            {worksdata}
        </div><br></br><br></br>
        <div id="desks-details">
            <h3>Доски</h3>
            {desksdata}
        </div>
        </>
    );
}