import {Grid,Box,Typography,AppBar,Toolbar} from '@mui/material';
import { Link } from 'react-router-dom';

const Footer=()=>{
    return(
        <AppBar position='static' sx={{backgroundColor:'black',bottom:0,top:'auto',marginTop:'2rem' }}>
         <Toolbar>
           <Grid container sx={{marginTop:'2rem',marginBottom:'2rem',height:'5rem',paddingBottom:"2rem"}}>
                <Grid item  xs={12} sm={6} md={4} lg={4} sx={{marginTop:'2rem',marginBottom:'2rem'}}> 
                <Box>
                    <Typography  variant='h5' sx={{textDecorationLine:'underline',color:'white'}}>
                       About
                    </Typography>
                <Typography sx={{color:'white'}} variant='subtitle2'>
                    Neurons are connected to each other. 
                </Typography>
                </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={4} sx={{marginTop:'2rem',marginBottom:'2rem'}} >
                   <Box>
                   <Typography  variant='h5' sx={{textDecorationLine:'underline',color:'white'}}>
                       Quick links
                    </Typography>
                   <Typography sx={{color:'white'}} variant='subtitle2'> 
                      <Link  to=''>
                        <Typography variant='subtitle2'>
                           Menu
                        </Typography>
                      </Link>
                      <Link  to=''>
                        <Typography variant='subtitle2'>
                           Check Order Status
                        </Typography>
                      </Link>
                      <Link  to=''>
                        <Typography variant='subtitle2'>
                           Admin
                        </Typography>
                      </Link>
                    </Typography>
                    </Box> 
                </Grid>
                
                <Grid item xs={12} sm={6} md={4} lg={4} sx={{marginTop:'2rem',marginBottom:'2rem'}}>
                    <Box>
                    <Typography  variant='h5' sx={{textDecorationLine:'underline',color:'white'}}>
                       Contact
                    </Typography>
                    <Typography sx={{color:'white'}} variant='subtitle2'>
                       In the brain, they are synapses
                    </Typography>
                    </Box>
                </Grid>
           </Grid>
           </Toolbar>
        </AppBar>
    )
}
export default Footer;