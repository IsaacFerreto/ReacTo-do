/* eslint-disable react/prop-types */

const Impresion =({data, eliminar, cambio})=>{
    
   



    if (!data) {
        return <div>Loading...</div>;
      }//in case there are problems with the api this is going to be loading
    return(
        <div>
         {data.map((tarea) => (//map to check each task and create a new element
        <div className="Tarea" key={tarea.id}>
          <input className='TareaBox' type="checkbox"defaultChecked={tarea.state} onChange={()=>{
            cambio(tarea)
          }}/>
          <p>{tarea.nome}</p>
          <button className='buttonTareaBox'onClick={()=>eliminar(tarea.id,tarea)}>ELIMINAR</button>
        </div>
      ))}
        </div>
    )


}

export default Impresion