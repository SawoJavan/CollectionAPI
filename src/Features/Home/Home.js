<<<<<<< HEAD
//import calesweat from '../..Maluku/calesweat.jpg';
import home from './Home.module.css';
//import Button from '../Button/Button';
=======

import Button from '../Button/Button';
>>>>>>> 47daed905cdf15e205d38d3ebef8b08a0bc78639
import { Link } from 'react-router-dom';
import {Box,Button,Typography,Grid,Paper,Stack,IconButton,Card,CardMedia,CardContent,CardActions} from '@mui/material'
import {ArrowForward,ArrowDownward,Star,Description} from '@mui/icons-material';
import pic1 from '../../Maluku/anime.jpg';
import pic2 from '../../Maluku/anoself.jpg';
import pic3 from '../../Maluku/arsernali.jpg';
import pic4 from '../../Maluku/bascketer.jpg';
import pic5 from '../../Maluku/basketer2.jpg';
import pic6 from '../../Maluku/blacki.jpg';
const pics=[
  { pic:pic1,
    name:'Animated sweatshirt',
    was:430,
    now:350,
    description:'silk german sweater'

  }
  ,
  {
    pic:pic2,
    name:'Anoself',
    was:430,
    now:350,
    description:'silk german sweater'
  },
  {
    pic:pic3,
    name:'Gunners',
    was:400,
    now:300,
    description:'silk german sweater'
  },
  {
    pic:pic4,
    name:'Bascketer',
    was:399,
    now:299,
    description:'silk german sweater'
  },
  {
    pic:pic5,
    name:'Basketer v2',
    was:490,
    now:310,
    description:'silk german sweater'
  },{
    pic:pic6,
    name:'Black Panther',
    was:430,
    now:370,
    description:'silk german sweater'
  }
  ]

export function Home(){
 

  return(
    <Box sx={{marginTop:'5%'}}>
        <Grid container>
          <Grid item xs={12} sm={6} >
             <Typography variant='h4' sx={{fontSize:'2.1rem',fontWeight:'bold'}}>
                 Discover Unmatched <br/>Designs and Excellence in
                <Typography variant='h3' sx={{color:'green',fontSize:'2.7rem',fontWeight:'bold'}} component='span'>JavoCollection <br/>Fashions</Typography> 
             </Typography>
               <Paper sx={{marginTop:'3%',marginBottom:'4%',padding:'1.5%'}}>
                <Typography variant='h6' sx={{fontSize:'1.2rem',marginTop:'2%'}}>
                " We are a fashion brand that is committed to providing our customers with the best quality products at affordable
                prices. Our goal is to make fashion accessible to everyone, regardless of their budget. We believe that when we come"
              </Typography>
               </Paper>
               <Grid container>
                <Grid item xs={4} sm={4} md={4} >
                <Link to='/menu'><Button variant='contained' color='warning' sx={{fontSize:{xs:'0.5rem'},borderRadius:'0.7rem'}}>Our Menu</Button></Link>
                </Grid>
                <Grid item xs={4} sm={4} md={4}>
                <Link to='/order'><Button variant='contained' color='warning'   sx={{fontSize:{xs:'0.5rem'},borderRadius:'0.7rem'}}>Check Order</Button></Link>
                </Grid>
                <Grid item xs={4} sm={4} md={4}>
                <Link to='/login'><Button variant='contained' color='warning'   sx={{fontSize:{xs:'0.5rem'},borderRadius:'0.7rem'}}>Login/signUp</Button></Link> 
                </Grid>

                </Grid> 
                 
          </Grid>
          <Grid item  xs={12} sm={6}>
            

          </Grid>
        
        </Grid>
         <Box sx={{marginTop:'2.5rem',marginBottom:'2.5rem',justifyContent:'center',alignContent:'center'}}>
         <Typography variant='h4' component='p' sx={{color:'green',textAlign:'center'}}>Our Latest Products</Typography>
            <Grid container columnGap={11} rowGap={4}>
              {pics.map((elem)=>(
               <Grid item xs={12} sm={4} md={3}>
                     <Card>
                     <CardMedia 
                      component='img' 
                      height="140"
                      image={elem.pic}

                      />
                      <CardContent>
        <Stack direction='row' gap={2}>
            <Typography variant='body2' ><Star size='small' color='warning'  sx={{fontSize:'1.2rem'}}/>Was <Typography variant='body2' component='span'  sx={{textDecoration:'line-through',color:'green'}}>${elem.was}</Typography ></Typography >
           <Typography variant='body2' ><Star size='small' color='warning' sx={{fontSize:'1.2rem'}}/> Now <Typography variant='body2' component='span' sx={{color:'green'}}> ${elem.now}</Typography > </Typography > 
        </Stack>
        <Typography variant='body2'  ><Description sx={{fontSize:'1rem'}} color='warning'/>{elem.description}</Typography>
            {/* <Rating defaultValue={3}> </Rating> */}
        </CardContent>
        <CardActions>
            <Button variant='outlined' color='warning' size='small' sx={{fontSize:'0.6rem'}}>Learn more</Button>
        </CardActions>

      </Card>

               </Grid>
              ))}
               
            </Grid>

         </Box>

       <Box sx={{marginTop:'2.5rem'}}>
          <Typography variant='h4' component='p' sx={{color:'green',textAlign:'center'}}>How It Works</Typography>
      <Grid container sx={{alignItems:'center',alignContent:'center'}}>
        <Grid item xs={12} sm={3}>
            
            <Grid container>
                <Grid item xs={12} sm={8}>
                <Box sx={{border:'2px solid orange',height:{xs:'4rem',sm:'4rem',md:'5rem'},width:{xs:'8rem',sm:'6rem',md:'8rem', lg:'10rem'},borderTopLeftRadius:'1rem',borderBottomLeftRadius:'1rem'}}>
                  <Typography variant='body1' component='span'>Click on the Products button</Typography>
                </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                <IconButton color='success' sx={{display:{xs:'none' ,sm:'flex'}}}><ArrowForward/></IconButton>
                <IconButton color='success' size='large' sx={{display:{xs:'flex' ,sm:'none'}}}> <ArrowDownward/></IconButton>
                </Grid>
                
              </Grid>
          </Grid>
            <Grid item xs={12} sm={3} >
              <Grid container>
                <Grid item xs={12} sm={8}>
                <Box sx={{border:'2px solid orange',height:{xs:'4rem',sm:'4rem',md:'5rem'},width:{xs:'8rem',sm:'6rem',md:'8rem', lg:'10rem'}}}>
                <Typography variant='body1' component='span'>Select products of your choice</Typography>
                </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                <IconButton color='success' size='large' sx={{display:{xs:'none' ,sm:'flex'}}}> <ArrowForward/></IconButton>
                <IconButton color='success' size='large' sx={{display:{xs:'flex' ,sm:'none'}}}> <ArrowDownward/></IconButton>
                </Grid>
                
              </Grid>
             </Grid>
            <Grid item xs={12} sm={3}>

            <Grid container>
                <Grid item xs={12} sm={8}>
                <Box sx={{border:'2px solid orange',height:{xs:'4rem',sm:'4rem',md:'5rem'},width:{xs:'8rem',sm:'6rem',md:'8rem', lg:'10rem'}}}>
                <Typography variant='body1' component='span'>Checkout(pay)</Typography>
                </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                <IconButton color='success' sx={{display:{xs:'none' ,sm:'flex'}}}> <ArrowForward/></IconButton>
                <IconButton color='success' size='large' sx={{display:{xs:'flex' ,sm:'none'}}}> <ArrowDownward/></IconButton>
                </Grid>
                
              </Grid>
            </Grid>
            <Grid item xs={12} sm={3}>
            <Box sx={{border:'2px solid orange',height:{xs:'4rem',sm:'4rem',md:'5rem'},width:{xs:'8rem',sm:'6rem',md:'8rem', lg:'10rem'},borderTopRightRadius:'1rem',borderBottomRightRadius:'1rem'}}>
            <Typography variant='body1' component='span'>Order is delivered.</Typography>
              </Box>
             
            </Grid>
      </Grid>
        </Box>

    </Box>     
  )
<<<<<<< HEAD
};
//export default Home;
//className={home.homie}
=======
}
//export default Home;
>>>>>>> 47daed905cdf15e205d38d3ebef8b08a0bc78639
