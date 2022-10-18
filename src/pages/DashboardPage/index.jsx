import { Alert, Container } from "react-bootstrap";
import Header from "../../components/Header";

function DashboardPage() {
    return (
        <>
            <Header />
            <Container>
                <h1>Dashboard</h1>
                <hr />
                <Alert variant='success'>Seja Bem-Vindo!!!</Alert>
            </Container>
        </>
    );
}

export default DashboardPage;