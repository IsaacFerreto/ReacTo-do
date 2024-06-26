import Ingreso from "./Ingreso";
import Impresion from "./Impresion";
import { useState,useEffect } from "react";

const UseFetch =() =>{
    const [data, setData] = useState([]);//this state was use to set the information from fetch
    const [run, setRun] = useState(false);//this was use to activated a Component
    let num = 0
 
    const[counter, setCounter] = useState(num)

function stateChange() {
  setRun(!run)
}
    const fetchGet =async () => { //GET
        try {
          const response = await fetch(`http://localhost:3000/api/task/`);
          const data = await response.json();
          setData(data);
          const initialCount = data.filter(task => task.state).length//filter to check the completed task
          setCounter(initialCount)
        } catch (e) {
          console.log(e);
        }
      }
      useEffect(() => {//use effect link to list for evrytime it changes
        fetchGet();
      }, [data])

async function eliminar(id,objeto) {//METHOD DELETE

    console.log("LLEGA a funcion para borrar");
    try {
        fetch(`http://localhost:3000/api/task/${id}`, {
            method: 'DELETE',
        }) 

        console.log(`Se elimino lel usuario ${id}`);
    } catch (error) {
        alert("SYSTEM ERRROR "+Error)
        console.log(error);
    }

    if (objeto.state) {
  //in case there is a completed task to decrease the counter
      setCounter(counter => counter - 1)
    }
    
}

async function cambio(objeto) {
   //little get to get .estado to change that data
   const respuesta = await fetch("http://localhost:3000/api/task")
   const datos = await respuesta.json()
   console.log(objeto);
   console.log(datos);
   //declaration of the object i want to change
   console.log(`Console log objeto.estado ANTES de cambio ${objeto.state}`);
   objeto.state = !objeto.state
   const putRespuesta = await fetch(`http://localhost:3000/api/task/${objeto.id}`, {
       method: 'PUT',
       headers: {
           'Content-Type': 'application/json',
       },

       
       body: JSON.stringify(objeto)
   })
   console.log(`Console log objeto.state DESPUES de cambio ${objeto.state}`);
   let datosPut = await putRespuesta.json()
   console.log(datosPut);
   //if to start counter
    if (!objeto.state) {
    
      setCounter(counter => counter - 1)
    }else{
      setCounter(counter => counter + 1)
    }
    
      console.log(data.length);

}



      
return(
  <>
    <Ingreso stateChange={stateChange} contador={counter} contadorTotal={data.length} objeto={data} eliminar={eliminar}/>
    <Impresion data={data} eliminar={eliminar} cambio={cambio}/>
 </>
)

}


export default UseFetch;