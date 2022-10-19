import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom'

import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import DepartamentPage from "./pages/DepartamentoPage";
import CategoryPage from './pages/CategoryPage';
import PatrimonyPage from './pages/PatrimonyPage';
import ErrorPage from './pages/ErrorPage';

const RoutesApp = () => {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<LoginPage />} />

                <Route exact path="/dashboard" element={<DashboardPage />} />
                <Route exact path="/departamento" element={<DepartamentPage />} />
                <Route exact path="/category" element={<CategoryPage />} />
                <Route exact path="/patrimony" element={<PatrimonyPage />} />

                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </Router>
    );
}

export default RoutesApp;