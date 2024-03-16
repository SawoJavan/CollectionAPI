import { Outlet } from "react-router-dom";
import PageNav from "./Home/PageNav";
import { Fragment } from "react";

export function Applayout(){
    return(
        <Fragment>
        <PageNav/>
        <Outlet/>
        </Fragment>
    )
    

}
//export default Applayout