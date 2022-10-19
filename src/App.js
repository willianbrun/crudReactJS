import CategoryProvider from "./context/CategoryContext";
import DepartmentProvider from "./context/DepartamentoContext";
import PatrimonyProvider from "./context/PatrimonyContext";
import RoutesApp from "./routes";

function App() {
  return (
    <PatrimonyProvider>
      <CategoryProvider>
        <DepartmentProvider>
          <RoutesApp />
        </DepartmentProvider>
      </CategoryProvider>
    </PatrimonyProvider>
  );
}

export default App;
