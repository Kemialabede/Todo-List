import React, { useState } from 'react';
import './Todo.css'

function Todo() {
    const [state, setState] = useState({
        items: [{ activity: "Wash my clothes", done: false}, {activity: "Make my hair", done: false}],
        task: '',
        edit: false,
        editIndex: ''
    })
    const handleChange = (e) => {
        setState({
            ...state, task: e.target.value
        })
    }
    const addItem = (e) => {
        e.preventDefault()
        let copy  = [...state.items]
        let newItem = {activity: state.task, done: false}
        copy.push(newItem)
        console.log(copy)
        setState({
            items: copy,
            task: ''
        }, console.log(copy))
    }
    const toggleChange = (itemIndex) => {
        let toggle = [...state.items]
         let value = toggle[itemIndex].done  
         let inverse = !value
         toggle[itemIndex].done = inverse
         setState({
             ...state, items: toggle
         })
        
    }
    const deleteToDo = ( itemIndex ) => {
        let del = state.items
            del.splice(itemIndex, 1);
            setState({ ...state, items: state.items});
          
    }
    const editTodo = (index) => {
        let task = [...state.items]
        let value = task[index].activity
        setState({
            ...state,
            edit: true,
            editIndex: index,
            task: value
        }, console.log(task))
    }
    const cancelTask = () => {
        console.log(state)
        setState({
            ...state,
            edit: false,
            task: ''
        })
    }
    const editTodoTwo = (index) => {
        let editItem = [...state.items]
        let item = state.task
        editItem[index].activity = item
        console.log(editItem)
        console.log(index)
        setState({
           ...state, 
           edit: false,
           items: editItem,
           task: ''
        }, console.log(state.task))
    }
    
       
    return (
        <div>
            <div className="todo-header">
                <h2>My Todo List</h2>
            </div>
            {!state.edit ? <React.Fragment>
                <input type= "text"  className="input-field" name ="task" value={state.task} onChange={handleChange} />
            <button className="btn" onClick={addItem}>Add</button>
            <div>
                <ul>
                  {state.items.map((item, index) =><div className="list"><li key={index} className="li">{item.activity}<span className="done">{item.done ? "Done": "Pending"}</span> <input type="checkbox" onChange={()=>toggleChange(index)}/><button onClick={()=>deleteToDo(index)}>Delete</button><button onClick={()=>editTodo(index)}>Edit</button></li></div>)}
                </ul>
            </div>
            </React.Fragment>: <div>
                    <input type="text" value={state.task} onChange={handleChange} />
                    <div>
                    <button onClick={()=>cancelTask()}>Cancel</button><button onClick={()=>editTodoTwo(state.editIndex)}>Edit</button>
                    </div>
                </div>}

        </div>
    )
}

export default Todo;
