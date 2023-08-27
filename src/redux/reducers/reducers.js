import { ADD_TASK, EDIT_TASK, TOGGLE_TASK } from "../actions/actionType"

const initialState={
    tasks:[]
}
 const rootReducer = (state = initialState, {type,payload}) => {
    switch (type) {
        case ADD_TASK:
            return {...state.tasks,id:payload.id,description:payload.description,isDone:false} 
            case EDIT_TASK:
                return {...state.tasks.map(task => task.id === payload.id ? { ...task, description: payload.description } : task)} 
                case TOGGLE_TASK:
                    return {...state.tasks.map(task => task.id === payload.id ? { ...task, isDone: !task.isDone } : task)} 
                default:
            return state
            
    }
}
export default rootReducer