import Ingreso from "./Ingreso";
import Impresion from "./Impresion";
import { useState,useEffect } from "react";

const UseFetch =() =>{
    const [data, setData] = useState(null);

const [run, setRun] = useState(false);

  

function stateChange() {
  setRun(!run)
}
    const fetchGet =async () => {
        try {
          const response = await fetch(`http://localhost:3000/api/task/`);
          const data = await response.json();
          setData(data); // Set the fetched data to state
        } catch (e) {
          console.log(e);
        }
      }
      useEffect(() => {
        fetchGet();
      
      
      
      }, [data]);
      
return(
  <>
    <Ingreso stateChange={stateChange}/>
    <Impresion data={data}/>
 </>
)

}


export default UseFetch;