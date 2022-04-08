

import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useForm } from '../hooks/useForm';
import { useNavigate } from "react-router-dom";
export const Home = () => {
  const history = useNavigate();
  const enviar=(e)=>{
    e.preventDefault();
    console.log('Enviar');
    console.log(username+" "+pass);
    console.log(userContext)
    const usuario={
      username,
      pass
    }
    setUser(usuario);
    
  }
  
  const [form,handleInputChange]=useForm({
    username:"",
    pass:""
  });
const userContext=useContext(UserContext);
const {user,setUser}=userContext;
if(user.username!=null){
  
  console.log("puta madre");
  history("/listar");
  
}
const {username,pass}=form;
  return (
    
    <div>
    <form onSubmit={enviar}>
        <div className="mb-3">
            <label htmlFor="user"
            className="form-label">Username</label>
            <input type="text"
            id="username"
            name="username"
            onChange={handleInputChange}
            placeholder="username"
            value={username}/>
        </div>
        <div className="mb-3">
            <label htmlFor="pass"
            className="form-label">Password</label>
            <input type="password"
            id="pass"
            name="pass"
            onChange={handleInputChange}
            placeholder="password"
            value={pass}/>
        </div>
        <div className="mb-3">
            
            <button
            type="submit"
            className="btn btn-primary"
            >Login</button>
        </div>
    </form>
</div>
  )
}
