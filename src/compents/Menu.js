import {useContext} from 'react'
import { NavLink } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
export const Menu = () => {
    const userContext=useContext(UserContext);
    const {user}=userContext;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            
    <div className="navbar-collapse">
        <div className="navbar-nav">
            {!user.username &&
                <NavLink 
                className="nav-item nav-link" 
                to="/home"
            >
                Home
            </NavLink>
            }
            

            <NavLink 
                
                className="nav-item nav-link" 
                to="/listar"
            >
                Listar
            </NavLink>
            <NavLink 
                className="nav-item nav-link" 
                to="/agregar"
            >
                Agregar
            </NavLink>
            <NavLink 
                
                className="nav-item nav-link" 
                
                to="/acercade"
            >
                SobreNosotros
            </NavLink>
        </div>
    </div>

   
    </nav>
  )
}
