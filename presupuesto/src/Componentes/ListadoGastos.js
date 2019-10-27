import React from 'react';
import Gasto from './Gasto';

function ListadoGastos({gastos}){

    return(
        <div className="gastos-realizados">
            <h2>
                {gastos.map(gasto => (
                    <Gasto
                        key={gasto.id}
                        gasto = {gasto}
                    />
                ))}
            </h2>
        </div>
    )
}

export default ListadoGastos;