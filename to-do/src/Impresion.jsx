import {data} from "react"
const Impresion =({data})=>{
    console.log('Impresion corre');
   



    if (!data) {
        return <div>Loading...</div>;
      }
    return(
        <div>
         {data.map((tarea) => (
        <div key={tarea.id}>
          <input type="checkbox" />
          <p>{tarea.nome}</p>
        </div>
      ))}
        </div>
    )


}

export default Impresion