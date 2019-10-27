import React, { useState,useEffect } from 'react';
import Pregunta from './Componentes/Pregunta';
import Formulario from './Componentes/Formulario';
import ListadoGastos from './Componentes/ListadoGastos';
import ControlPresupuesto from './Componentes/ControlPresupuesto';


function App() {

  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [preguntaPresupuesto, guardarPreguntaPresupuesto] = useState(true);
  const [crearGasto, guardarCrearGasto] = useState(false);
  const [gasto, guardarGasto] = useState({});
  const [gastos, guardarGastos] = useState([]);

  useEffect(() => {
    if(crearGasto){
      const listadoGastos = [...gastos, gasto];
      guardarGastos(listadoGastos);

      const presupuestoRestante = restante - gasto.cantidadGasto;
      guardarRestante(presupuestoRestante);
      //luego de agregar
      guardarCrearGasto(false);
    }
  },[crearGasto,gasto,gastos,restante]);


  return (
    <div className="App container">
      <header>
        <h1>Gasto semanal</h1>
        <div className="contenido-principal contenido">
          {(preguntaPresupuesto)
            ?
            <Pregunta
              guardarPresupuesto={guardarPresupuesto}
              guardarPreguntaPresupuesto={guardarPreguntaPresupuesto}
              guardarRestante = {guardarRestante}
            />
            : (
              <div className="row">
                <div className="one-half column">
                  <Formulario
                    guardarGasto = {guardarGasto}
                    guardarCrearGasto = {guardarCrearGasto}
                  />
                </div>
                <div className="one-half column">
                  <ListadoGastos
                    gastos = {gastos}
                  />
                  <ControlPresupuesto
                    presupuesto = {presupuesto}
                    restante = {restante}
                  />
                </div>
              </div>
            )
          }
        </div>
      </header>
    </div>
  );
}

export default App;
