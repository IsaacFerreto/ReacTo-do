/* eslint-disable react/prop-types */
import { useState } from "react"

const Ingreso=({contador,contadorTotal,objeto, eliminar})=>{

    const [nombre, setNombre] = useState("");//state to set the task information

    const limpiar=()=>{
objeto.forEach(el => {
  eliminar(el.id,el)
  
});


    }
    async function taskCreation() {
if (!nombre) {//validation to check if it is empty
  alert('Esta Vacio')
} else {
  

//creation of task
     let task={
        nome:nombre,
        state:false
     }
        
     try {//METHOD POST
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
    let contadorSalida=contadorTotal<1//bollean declaration to check if the message will appear in case it is empty
   

    return(
        <>
        {contadorSalida?<p>No hay tareas agregadas</p>:<p>{contador}</p>}
        <input type="text" placeholder="Inserte su tarea" onChange={(e)=>setNombre(e.target.value)}/>
        <button onClick={taskCreation}>Ingresar tarea</button>
        <button onClick={limpiar}>Limpiar</button>
       
        </>
        
    )
} 
export default Ingreso