import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom'

import DashboardPage from './pages/DashboardPage';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/LoginPage';
import DepartamentPage from "./pages/DepartamentoPage";


const RoutesApp = () => {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<LoginPage />} />
                <Route exact path='/dashboard' element={<DashboardPage />} />
                <Route exact path="/departamento" element={<DepartamentPage />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </Router>
    );
}

export default RoutesApp;