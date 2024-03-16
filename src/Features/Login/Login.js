import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Login=()=>{
   return(
    <div>
        <h3>Create an account</h3>
        <form action="">
            <label htmlFor="Username">User Name</label><br/>
            <input type="text"/><br/>
            <label htmlFor="email">Email</label><br/>
            <input type="email"/><br/>
            <label htmlFor="password">Password</label><br/>
            <input type="password"/><br/>
            <Button type='submit'> Sign UP</Button>
        </form>
       <Link to='/sign'><button type="button">Already have an account?Login</button></Link> 
    </div>
   )
}
export default Login;