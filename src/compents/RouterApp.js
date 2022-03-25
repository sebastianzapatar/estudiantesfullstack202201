import { Routes, Route, BrowserRouter as Router, } from 'react-router-dom';
import { Acercade } from './Acercade';
import { Home } from './Home';
import { Insertar } from './Insertar';
import { Listar } from './Listar';
import { Menu } from './Menu';
import { Editar } from './Editar';

export const RouterApp = () => {
    return (
        <>
            <Router>
                <Menu/>
                <Routes>
                    <Route path="home" element={<Home/>}/>
                    <Route path="/" element={<Home/>}/>
                    <Route path="listar" element={<Listar/>}/>
                    <Route path="agregar" element={<Insertar/>}/>
                    <Route path="acercade" element={<Acercade/>}/>
                    <Route path="editar" element={<Editar/>}/>
                </Routes>
            </Router>
        </>
    )
}