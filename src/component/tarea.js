import "../style-sheets/tarea.css";
import { AiOutlineCheck } from "react-icons/ai";
function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div
      className={
        completada ? "tarea-contenedor completada" : "tarea-contenedor"
      }
    >
      <div className="tarea-texto" onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div
        className="tarea-contenedor-iconos"
        onClick={() => eliminarTarea(id)}
      >
        <AiOutlineCheck className="tarea-icono" />
      </div>
    </div>
  );
}
export default Tarea;
