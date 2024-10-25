import "./App.css";
// import logo from "./imagen/to-do.png";
import ListaDeTareas from "./component/listaDeTareas";

const App = () => {
  return (
    <div className="app-tarea">
      <div className="logo-conteiner">
        <img src="/imagen/to-do.png" className="logobt" alt="logo" />
      </div>
      <div className="tareas-lista-principal">
        <h1>Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
};

export default App;
