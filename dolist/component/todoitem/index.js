import react from "react";

const item=(props)=> {
    
         return(

            <div>

<li >{props.toDos}

    <h3 className="todoname">{this.props.todo.name}</h3>

    <h3 className="todoclose" onClick={()=> props.handleDelete(props.toDos.id)}></h3>
</li>



            </div>
         )




         }
        export default item;