import { useContext , useState} from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
    const { login } = useContext(AuthContext);
    const [email , setEmail ] = useState("");
    const [password , setpassword] = useState("");

    const submitHandler = async (e) =>{
        e.preventDefault();
        try{
            await login(email , password)
            alert("Login Successful")
        }catch(err){
            alert("invalid credentials")
        }
    };

    return(
        <form onSubmit={submitHandler}>
           <input
               type="email"
               placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
           <input
                type="password"
                placeholder="Password"
               onChange={(e) => setPassword(e.target.value)}
            />
           <button type="submit">Login</button>
           <button type="clear">Clear</button>
        </form>
    )
}

export default Login;