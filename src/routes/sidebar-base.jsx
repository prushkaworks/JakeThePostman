import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";

export default function SidebarBase({sidebar}) {
    return (
        <>
            <Helmet>
                <title>Prushka - главная</title>
                <link rel="canonical" href="https://getbootstrap.com/docs/5.0/examples/sidebars/"></link>
                <link href="https://getbootstrap.com/docs/5.0/examples/sidebars/sidebars.css" rel="stylesheet"></link>
            </Helmet>
            <div id="sidebar-base">
                {sidebar}
                <div id="detail">
                <Outlet></Outlet>
                </div>
            </div>
        </>
    );
}