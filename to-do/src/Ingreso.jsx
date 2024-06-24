import { useState } from "react"

const Ingreso=({stateChange})=>{
    const [nombre, setNombre] = useState("");

    async function taskCreation() {
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

     } catch (error) {
        console.log(error);
     }

   
    }
    
    console.log("antes de useGet");
   
    
    console.log("depues de useGet");

    return(
        <>
        <input type="text" placeholder="Inserte su tarea" onChange={(e)=>setNombre(e.target.value)}/>
        <button onClick={taskCreation}>Ingresar tarea</button>
       
        </>
        
    )
} 
export default Ingreso