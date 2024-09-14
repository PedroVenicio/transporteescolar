import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../screens/Home';
import HomeGeral from '../screens/HomeGeral';
import Login from '../screens/Login';
import Usuario from '../screens/Usuario';
import Motorista from '../screens/Motorista';
import Van from '../screens/Van';
import FrotaeEquipe from "../screens/FrotaeEquipe";

function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<HomeGeral />} />
                <Route path="/FrotaeEquipe" element={<FrotaeEquipe/>}/>
                <Route path="/Home"   element={<Home />} />
                <Route path="/HomeGeral"   element={<HomeGeral />} />
                <Route path="/login"  element={<Login />} />
                <Route path="/Usuario"  element={<Usuario />} />
                <Route path="/Motorista" element={<Motorista />} />
                <Route path="/Van" element={<Van />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;