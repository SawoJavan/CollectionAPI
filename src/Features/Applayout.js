import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import PageNav from "./Home/PageNav";
import { Fragment } from "react";

export function Applayout(){
    return(
        <Fragment>
        <PageNav/>
        <Outlet/>
         <Footer/>
        </Fragment>
    )
    

}
//export default Applayout