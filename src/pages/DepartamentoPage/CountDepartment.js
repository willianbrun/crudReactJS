import { useDepartments } from "../../context/DepartamentoContext";

export default function CountDepartment() {
  const { departaments } = useDepartments();

  return <h5>Total de Registros: {departaments.length}</h5>;
}
