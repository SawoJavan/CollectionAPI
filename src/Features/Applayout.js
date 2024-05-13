import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import PageNav from "./Home/PageNav";
//import { Fragment } from "react";
import {Box} from '@mui/material'

export function Applayout(){
    return(
        
        <Box >
        <PageNav/>
        <Outlet/>
         <Footer/>
        </Box>
        
    )
    

}
//export default Applayout