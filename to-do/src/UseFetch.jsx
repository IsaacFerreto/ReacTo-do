import Ingreso from "./Ingreso";
import Impresion from "./Impresion";
import { useState,useEffect } from "react";

const UseFetch =() =>{
    const [data, setData] = useState(null);


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
      
      
      
      }, []);
return(
  <>
    <Ingreso useGet={UseFetch}/>
    <Impresion data={data}/>
 </>
)

}


export default UseFetch;