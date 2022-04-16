import React, { useState } from "react";
import "./todo.css";
export const Todo=()=>{

   const [inputData,setInputData]=useState("")
   const [items,setItems]=useState([])
   const addItem=()=>{
       if(!inputData){
          alert("Please add something");
       }
       else{

           console.log(inputData)
            setItems([...items,inputData])
            setInputData("")
       }

   }

   //delete

   const deleteItem=(id)=>{
       const updatedItems=items.filter((e,index)=>{
     console.log(index)
          return index!==id
       })
       setItems(updatedItems)
   }


   //removeall

   const remove=()=>{
    setItems([])
   }
    return (
    <div className="box">
       
        <img id="image" src="https://cdn.pixabay.com/photo/2016/03/31/19/50/checklist-1295319_960_720.png"></img>
        <input id="input" type="text" value={inputData} onChange={(e)=>{
            setInputData(e.target.value)
        }} placeholder="✍ Enter Here"  ></input><i class="fa-solid fa-plus" id="add" onClick={addItem}></i>
        <div className="databox">
       <div className="items">
           {
               items.map((e,index)=>{
                   return(
        <div key={index}>
            <h1>{e}</h1>
            <i class="fa-solid fa-trash-can" id="delete" onClick={()=>deleteItem(index)} ></i>
        </div>

                   )
               })
           }
           </div>
       </div>
       
       
         <div>
             <button id="remove" onClick={remove}><i class="fa-solid fa-xmark"></i>CHECKLIST</button>
         </div>
    
    
    
    </div>
    )
}

