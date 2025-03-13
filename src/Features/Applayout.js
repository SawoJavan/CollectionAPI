import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import PageNav from "./Home/PageNav";
import {Box} from '@mui/material'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';


export function Applayout(){
    return(
      

        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
       > 
       <Container component="main" sx={{ mt: 8, mb: 2 }} >
        <PageNav/>
        <Outlet/>
        </Container>
        <Footer/>
        
        </Box>
        
    )
    

}
//export default Applayout