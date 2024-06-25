/* eslint-disable react/prop-types */
import { useState } from "react"

const Ingreso=({contador,contadorTotal})=>{

    const [nombre, setNombre] = useState("");

    async function taskCreation() {
if (!nombre) {
  alert('Esta Vacio')
} else {
  


     let task={
        nome:nombre,
        state:false
     }
        
     try {
        const response = await fetch(`http://localhost:3000/api/task/`, {
            method: "POST",
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(task)
          });
          let data = await response.json(); // Await the response
          console.log(data);
          console.log(contador);

     } catch (error) {
        console.log(error);
     }

    }
    }
    let contadorSalida=contadorTotal<1
   

    return(
        <>
        {contadorSalida?<p>No hay tareas agregadas</p>:<p>{contador}</p>}
        <input type="text" placeholder="Inserte su tarea" onChange={(e)=>setNombre(e.target.value)}/>
        <button onClick={taskCreation}>Ingresar tarea</button>
       
        </>
        
    )
} 
export default Ingreso