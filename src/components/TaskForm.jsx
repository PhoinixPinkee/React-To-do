import React ,{useState} from 'react'
import "./TaskForm.css"
import Tag from "./Tag"
const TaskForm = ({setTasks}) => {
  
   const [state, setstate] = useState({
      task:"",
      status:'To do',
      tags:[],

   });
   const handleChange=(e)=>{
      const name=e.target.name;
      const value=e.target.value;
      setstate(prev =>{
         return {...prev,[name]:value}
      });
      
   };
   const checkTag=(tag)=>{
      return state.tags.some(item=> item===tag)
   }
   const  handleSubmit=(e)=>{
      e.preventDefault();
      console.log(state)  ;  
      setTasks(prev =>{
         return [...prev,state];
      });
      setstate({
         task:"",
         status:'To do',
         tags:[],
   
      })
   };
   const selectTag =(tag)=>{
           if(state.tags.some(item => item==tag)){
              const filterTag= state.tags.filter(item => item!=tag)
              setstate(prev =>{
               return {...prev , tags: filterTag }
              })
           }
           else{
            setstate(prev =>{
               return {...prev,tags:[...prev.tags, tag]};
            })
           }
    
   }

  
  return (

         <header className="app_header">
            <form action="" onSubmit={handleSubmit}>
                <input type="text"  name='task' value={state.task} className="task_input" placeholder='Enter your task' onChange={handleChange} />
                <div className='task_for_bottom_line'>
                   <div>
                   <Tag  tagName="DSA" selectTag={selectTag} selected={checkTag("DSA")} />
                   <Tag tagName="WebD" selectTag={selectTag} selected={checkTag("WebD")} />
                   <Tag tagName="Reasoning" selectTag={selectTag} selected={checkTag("Reasoning")}  />
                   <Tag  tagName="Current Affairs" selectTag={selectTag} selected={checkTag("Current_Affairs")} />
                    </div> 
                   <div> <select name='status' className='task_status'  value={state.status} onChange={handleChange}>
                        <option value="todo">To do</option>
                        <option value="doing">Doing</option>
                        <option value="done">Done</option>
                    </select>
                   <button type="submit" className='task_submit'>+Add Task</button> 
                   </div>
                </div>
            </form>
         </header>
    
  )
}

export default TaskForm
