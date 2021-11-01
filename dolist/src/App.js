import React, { useState, useEffect } from "react";
import Todo from "./component/todo/index";
import Item from "./component/todoitem/index";

import React from "react";

const App = () => {
 const [toDos, setToDos] = useState([{id:1,name:"wake up"},{id:2,name:"code"}])


 useEffect(() => {
  setToDos(1,"Wake up");
}, [id,[]]);
​
const addOne = () => {
  num++;
  setToDos(id + 1);
};
​
const changeName = () => {
  setToDos("wake up");
};


const handleDelete=(id)=>{
 ({setToDos.filter((toDos)=>toDos.did !==id)});
  };

const update=(id)=>

{
  let newvalue = prompt("write your task...");
  let newtodo=toDos.map(item =>{
    if(id===item.id){
      return {id : id , name :newvalue }

    }
    else {

return item;

    }
  })
}


return (
 <> <ul> 

 {toDos.map((item, i) => (
 <Item toDos={item} key={i} />))}
 
   </ul>
 </>
)};

export default App;

