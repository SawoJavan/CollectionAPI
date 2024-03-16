import Button from "../Button/Button";
const Sign=()=>{
  return(
    <div>
        <h3>Login in to your account</h3>
        <form action="" >

            <label htmlFor="email">Email</label><br/>
            <input type="email"/><br/>
            <label htmlFor="password">Password</label><br/>
            <input type="password"/><br/>
            <Button to='submit'>Login</Button>

        </form>
        <button type="button"> Forgot password</button>
    </div>
  )
}
export default Sign;